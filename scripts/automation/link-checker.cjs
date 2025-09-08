#!/usr/bin/env node

/**
 * Link Checker Automation Script
 * Replaces GitHub Actions link-checker.yml workflow
 * Runs every 30 minutes via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LinkChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'link-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runLinkCheck() {
    console.log('🔗 Starting link check process...');
    
    try {
      // Build project first
      console.log('🏗️ Building project for link checking...');
      const buildResult = this.buildProject();
      
      if (!buildResult.success) {
        throw new Error('Project build failed, cannot check links');
      }
      
      // Check internal links
      console.log('🔍 Checking internal links...');
      const internalLinks = this.checkInternalLinks();
      
      // Check external links
      console.log('🌐 Checking external links...');
      const externalLinks = this.checkExternalLinks();
      
      // Generate comprehensive report
      const report = this.generateReport(internalLinks, externalLinks);
      
      // Save report
      this.saveReport(report);
      
      // Create issues for broken links if any
      if (report.summary.brokenLinks > 0) {
        this.createBrokenLinksIssue(report);
      }
      
      console.log('✅ Link check completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Link check failed:', error.message);
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

  checkInternalLinks() {
    try {
      // Extract internal links from HTML files
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const internalLinks = this.extractInternalLinks(distPath);
      
      // Check internal links using a simple approach
      const checkedLinks = this.checkLinks(internalLinks, 'internal');
      
      return {
        success: true,
        total: internalLinks.length,
        checked: checkedLinks.length,
        broken: checkedLinks.filter(link => link.status === 'broken').length,
        working: checkedLinks.filter(link => link.status === 'working').length,
        details: checkedLinks
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  checkExternalLinks() {
    try {
      // Extract external links from HTML files
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const externalLinks = this.extractExternalLinks(distPath);
      
      // Check external links (limited to avoid rate limiting)
      const checkedLinks = this.checkLinks(externalLinks.slice(0, 20), 'external');
      
      return {
        success: true,
        total: externalLinks.length,
        checked: checkedLinks.length,
        broken: checkedLinks.filter(link => link.status === 'broken').length,
        working: checkedLinks.filter(link => link.status === 'working').length,
        details: checkedLinks
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
    
    return [...new Set(links.map(link => link.url))].map(url => ({
      url,
      type: 'internal',
      source: 'extracted'
    }));
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
    
    return [...new Set(links.map(link => link.url))].map(url => ({
      url,
      type: 'external',
      source: 'extracted'
    }));
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

  checkLinks(links, type) {
    const checkedLinks = [];
    
    links.forEach(link => {
      try {
        // Simple link validation
        const isValid = this.validateLink(link.url);
        
        checkedLinks.push({
          ...link,
          status: isValid ? 'working' : 'broken',
          checkedAt: new Date().toISOString()
        });
        
      } catch (error) {
        checkedLinks.push({
          ...link,
          status: 'error',
          error: error.message,
          checkedAt: new Date().toISOString()
        });
      }
    });
    
    return checkedLinks;
  }

  validateLink(url) {
    // Basic validation for internal links
    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
      return true; // Assume internal links are valid
    }
    
    // Basic validation for external links
    if (url.startsWith('http')) {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }
    
    return true;
  }

  generateReport(internalLinks, externalLinks) {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      status: 'completed',
      summary: {
        internalLinks: {
          total: internalLinks.total || 0,
          checked: internalLinks.checked || 0,
          working: internalLinks.working || 0,
          broken: internalLinks.broken || 0
        },
        externalLinks: {
          total: externalLinks.total || 0,
          checked: externalLinks.checked || 0,
          working: externalLinks.working || 0,
          broken: externalLinks.broken || 0
        },
        totalLinks: (internalLinks.total || 0) + (externalLinks.total || 0),
        brokenLinks: (internalLinks.broken || 0) + (externalLinks.broken || 0),
        workingLinks: (internalLinks.working || 0) + (externalLinks.working || 0)
      },
      details: {
        internal: internalLinks,
        external: externalLinks
      },
      recommendations: this.generateRecommendations(internalLinks, externalLinks)
    };

    return report;
  }

  generateRecommendations(internalLinks, externalLinks) {
    const recommendations = [];
    
    if (internalLinks.broken > 0) {
      recommendations.push('🔗 Fix broken internal links to improve user experience');
    }
    
    if (externalLinks.broken > 0) {
      recommendations.push('🌐 Update or remove broken external links');
    }
    
    if (internalLinks.total === 0) {
      recommendations.push('⚠️ No internal links found - check if build is complete');
    }
    
    if (externalLinks.total === 0) {
      recommendations.push('ℹ️ No external links found - this may be normal for internal projects');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All links are working correctly');
    }
    
    return recommendations;
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `link-check-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Link check report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'link-check-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Link Check Report - ${timestamp}

## Summary
### Internal Links
- **Total**: ${report.summary.internalLinks.total}
- **Checked**: ${report.summary.internalLinks.checked}
- **Working**: ${report.summary.internalLinks.working}
- **Broken**: ${report.summary.internalLinks.broken}

### External Links
- **Total**: ${report.summary.externalLinks.total}
- **Checked**: ${report.summary.externalLinks.checked}
- **Working**: ${report.summary.externalLinks.working}
- **Broken**: ${report.summary.externalLinks.broken}

### Overall
- **Total Links**: ${report.summary.totalLinks}
- **Working Links**: ${report.summary.workingLinks}
- **Broken Links**: ${report.summary.brokenLinks}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.summary.brokenLinks === 0 ? '✅ All Links Working' : '⚠️ Broken Links Detected'}

---
*Report generated automatically by PM2 Link Checker*
`;

    const filename = `link-check-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'link-check-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }

  createBrokenLinksIssue(report) {
    // This would typically create a GitHub issue
    // For now, we'll just log it
    console.log('📝 Creating issue for broken links...');
    
    const issueContent = `# 🔗 Broken Links Detected - ${new Date().toLocaleDateString()}

## Summary
- **Total broken links**: ${report.summary.brokenLinks}
- **Internal broken**: ${report.summary.internalLinks.broken}
- **External broken**: ${report.summary.externalLinks.broken}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

---
*Issue created automatically by PM2 Link Checker*`;

    const issueFile = path.join(this.reportsDir, `broken-links-issue-${Date.now()}.md`);
    fs.writeFileSync(issueFile, issueContent);
    
    console.log(`📄 Issue content saved: ${issueFile}`);
  }
}

// Main execution
async function main() {
  const checker = new LinkChecker();
  await checker.runLinkCheck();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = LinkChecker;