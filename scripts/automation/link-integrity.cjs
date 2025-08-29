#!/usr/bin/env node

/**
 * Link Integrity Automation Script
 * Provides comprehensive link validation and integrity checking
 * Runs every 2 hours via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LinkIntegrityChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'link-integrity-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runLinkIntegrityCheck() {
    console.log('🔗 Starting link integrity check...');
    
    try {
      // Build project first
      console.log('🏗️ Building project for integrity checking...');
      const buildResult = this.buildProject();
      
      if (!buildResult.success) {
        throw new Error('Project build failed, cannot check link integrity');
      }
      
      // Check internal link integrity
      console.log('🔍 Checking internal link integrity...');
      const internalIntegrity = this.checkInternalLinkIntegrity();
      
      // Check external link integrity
      console.log('🌐 Checking external link integrity...');
      const externalIntegrity = this.checkExternalLinkIntegrity();
      
      // Check link consistency
      console.log('📋 Checking link consistency...');
      const consistencyCheck = this.checkLinkConsistency();
      
      // Check for orphaned links
      console.log('👻 Checking for orphaned links...');
      const orphanedLinks = this.checkOrphanedLinks();
      
      // Generate comprehensive report
      const report = this.generateReport({
        internal: internalIntegrity,
        external: externalIntegrity,
        consistency: consistencyCheck,
        orphaned: orphanedLinks
      });
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Link integrity check completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Link integrity check failed:', error.message);
      this.saveReport({
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.message
      });
      return false;
    }
  }

  buildProject() {
    try {
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Project built successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  checkInternalLinkIntegrity() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const internalLinks = this.extractInternalLinks(distPath);
      const integrityResults = this.validateInternalLinks(internalLinks, distPath);
      
      return {
        success: true,
        total: internalLinks.length,
        valid: integrityResults.valid.length,
        invalid: integrityResults.invalid.length,
        broken: integrityResults.broken.length,
        details: integrityResults
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  checkExternalLinkIntegrity() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const externalLinks = this.extractExternalLinks(distPath);
      const integrityResults = this.validateExternalLinks(externalLinks);
      
      return {
        success: true,
        total: externalLinks.length,
        valid: integrityResults.valid.length,
        invalid: integrityResults.invalid.length,
        broken: integrityResults.broken.length,
        details: integrityResults
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  checkLinkConsistency() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const allLinks = this.extractAllLinks(distPath);
      const consistencyResults = this.analyzeLinkConsistency(allLinks);
      
      return {
        success: true,
        total: allLinks.length,
        consistent: consistencyResults.consistent.length,
        inconsistent: consistencyResults.inconsistent.length,
        details: consistencyResults
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  checkOrphanedLinks() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const allLinks = this.extractAllLinks(distPath);
      const orphanedResults = this.findOrphanedLinks(allLinks, distPath);
      
      return {
        success: true,
        total: allLinks.length,
        orphaned: orphanedResults.orphaned.length,
        valid: orphanedResults.valid.length,
        details: orphanedResults
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  extractInternalLinks(distPath) {
    const links = [];
    
    const htmlFiles = this.findHtmlFiles(distPath);
    
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const linkMatches = content.match(/href=["']([^"']+)["']/g) || [];
      
      linkMatches.forEach(match => {
        const url = match.replace(/href=["']/, '').replace(/["']$/, '');
        if (url && !url.startsWith('http') && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
          links.push({
            source: path.relative(distPath, file),
            url: url,
            type: 'internal'
          });
        }
      });
    });
    
    return links;
  }

  extractExternalLinks(distPath) {
    const links = [];
    
    const htmlFiles = this.findHtmlFiles(distPath);
    
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const linkMatches = content.match(/href=["']([^"']+)["']/g) || [];
      
      linkMatches.forEach(match => {
        const url = match.replace(/href=["']/, '').replace(/["']$/, '');
        if (url && url.startsWith('http')) {
          links.push({
            source: path.relative(distPath, file),
            url: url,
            type: 'external'
          });
        }
      });
    });
    
    return links;
  }

  extractAllLinks(distPath) {
    return [
      ...this.extractInternalLinks(distPath),
      ...this.extractExternalLinks(distPath)
    ];
  }

  findHtmlFiles(dir) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findHtmlFiles(fullPath));
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  validateInternalLinks(links, distPath) {
    const valid = [];
    const invalid = [];
    const broken = [];
    
    links.forEach(link => {
      try {
        const targetPath = this.resolveInternalPath(link.url, path.dirname(path.join(distPath, link.source)));
        
        if (fs.existsSync(targetPath)) {
          valid.push({
            ...link,
            status: 'valid',
            targetPath: path.relative(distPath, targetPath)
          });
        } else {
          broken.push({
            ...link,
            status: 'broken',
            targetPath: path.relative(distPath, targetPath)
          });
        }
      } catch (error) {
        invalid.push({
          ...link,
          status: 'invalid',
          error: error.message
        });
      }
    });
    
    return { valid, invalid, broken };
  }

  validateExternalLinks(links) {
    const valid = [];
    const invalid = [];
    const broken = [];
    
    links.forEach(link => {
      try {
        const url = new URL(link.url);
        
        if (url.protocol === 'http:' || url.protocol === 'https:') {
          valid.push({
            ...link,
            status: 'valid',
            protocol: url.protocol
          });
        } else {
          invalid.push({
            ...link,
            status: 'invalid',
            protocol: url.protocol
          });
        }
      } catch (error) {
        broken.push({
          ...link,
          status: 'broken',
          error: error.message
        });
      }
    });
    
    return { valid, invalid, broken };
  }

  analyzeLinkConsistency(links) {
    const linkMap = new Map();
    const consistent = [];
    const inconsistent = [];
    
    links.forEach(link => {
      const key = link.url;
      if (!linkMap.has(key)) {
        linkMap.set(key, []);
      }
      linkMap.get(key).push(link);
    });
    
    linkMap.forEach((occurrences, url) => {
      if (occurrences.length === 1) {
        consistent.push({
          url,
          occurrences: occurrences.length,
          status: 'consistent'
        });
      } else {
        inconsistent.push({
          url,
          occurrences: occurrences.length,
          status: 'inconsistent',
          details: occurrences
        });
      }
    });
    
    return { consistent, inconsistent };
  }

  findOrphanedLinks(links, distPath) {
    const orphaned = [];
    const valid = [];
    
    links.forEach(link => {
      if (link.type === 'internal') {
        const targetPath = this.resolveInternalPath(link.url, path.dirname(path.join(distPath, link.source)));
        
        if (!fs.existsSync(targetPath)) {
          orphaned.push({
            ...link,
            status: 'orphaned',
            targetPath: path.relative(distPath, targetPath)
          });
        } else {
          valid.push({
            ...link,
            status: 'valid',
            targetPath: path.relative(distPath, targetPath)
          });
        }
      } else {
        valid.push({
          ...link,
          status: 'external',
          note: 'External links not checked for orphaned status'
        });
      }
    });
    
    return { orphaned, valid };
  }

  resolveInternalPath(url, baseDir) {
    if (url.startsWith('/')) {
      return path.join(process.cwd(), 'dist', url);
    } else if (url.startsWith('./')) {
      return path.join(baseDir, url.substring(2));
    } else if (url.startsWith('../')) {
      return path.resolve(baseDir, url);
    } else {
      return path.join(baseDir, url);
    }
  }

  generateReport(data) {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      status: 'completed',
      summary: {
        internal: {
          total: data.internal?.total || 0,
          valid: data.internal?.valid || 0,
          invalid: data.internal?.invalid || 0,
          broken: data.internal?.broken || 0
        },
        external: {
          total: data.external?.total || 0,
          valid: data.external?.valid || 0,
          invalid: data.external?.invalid || 0,
          broken: data.external?.broken || 0
        },
        consistency: {
          total: data.consistency?.total || 0,
          consistent: data.consistency?.consistent || 0,
          inconsistent: data.consistency?.inconsistent || 0
        },
        orphaned: {
          total: data.orphaned?.total || 0,
          orphaned: data.orphaned?.orphaned || 0,
          valid: data.orphaned?.valid || 0
        },
        overall: {
          totalIssues: (data.internal?.broken || 0) + (data.external?.broken || 0) + (data.orphaned?.orphaned || 0)
        }
      },
      details: data,
      recommendations: this.generateRecommendations(data)
    };

    return report;
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    if (data.internal?.broken > 0) {
      recommendations.push('🔗 Fix broken internal links to improve user experience');
    }
    
    if (data.external?.broken > 0) {
      recommendations.push('🌐 Update or remove broken external links');
    }
    
    if (data.consistency?.inconsistent > 0) {
      recommendations.push('📋 Standardize link formats for consistency');
    }
    
    if (data.orphaned?.orphaned > 0) {
      recommendations.push('👻 Remove or fix orphaned links that point to non-existent resources');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All link integrity checks passed successfully');
    }
    
    return recommendations;
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `link-integrity-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Link integrity report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'link-integrity-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Link Integrity Report - ${timestamp}

## Summary
### Internal Links
- **Total**: ${report.summary.internal.total}
- **Valid**: ${report.summary.internal.valid}
- **Invalid**: ${report.summary.internal.invalid}
- **Broken**: ${report.summary.internal.broken}

### External Links
- **Total**: ${report.summary.external.total}
- **Valid**: ${report.summary.external.valid}
- **Invalid**: ${report.summary.external.invalid}
- **Broken**: ${report.summary.external.broken}

### Consistency
- **Total**: ${report.summary.consistency.total}
- **Consistent**: ${report.summary.consistency.consistent}
- **Inconsistent**: ${report.summary.consistency.inconsistent}

### Orphaned Links
- **Total**: ${report.summary.orphaned.total}
- **Orphaned**: ${report.summary.orphaned.orphaned}
- **Valid**: ${report.summary.orphaned.valid}

### Overall
- **Total Issues**: ${report.summary.overall.totalIssues}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.summary.overall.totalIssues === 0 ? '✅ All Link Integrity Checks Passed' : '⚠️ Link Integrity Issues Detected'}

---
*Report generated automatically by PM2 Link Integrity Checker*
`;

    const filename = `link-integrity-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'link-integrity-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }
}

// Main execution
async function main() {
  const checker = new LinkIntegrityChecker();
  await checker.runLinkIntegrityCheck();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = LinkIntegrityChecker;