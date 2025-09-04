#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOAccessibilityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }

  async checkSEO() {
    try {
      this.log('🔍 Checking SEO...');
      
      const seoIssues = [];
      
      // Check for meta tags in HTML files
      const htmlFiles = this.getHTMLFiles();
      
      for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.analyzeSEOContent(file, content);
        seoIssues.push(...fileIssues);
      }
      
      // Check package.json for SEO-related fields
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const packageIssues = this.analyzePackageJsonSEO(packageJson);
        seoIssues.push(...packageIssues);
      }
      
      return {
        issues: seoIssues,
        totalIssues: seoIssues.length,
        criticalIssues: seoIssues.filter(issue => issue.severity === 'critical').length,
        highIssues: seoIssues.filter(issue => issue.severity === 'high').length
      };
    } catch (error) {
      this.log(`SEO check failed: ${error.message}`);
      return { issues: [], totalIssues: 0, criticalIssues: 0, highIssues: 0 };
    }
  }

  getHTMLFiles() {
    const files = [];
    
    const walkDir = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!fullPath.includes('node_modules') && 
              !fullPath.includes('.git') && 
              !fullPath.includes('dist') &&
              !fullPath.includes('build')) {
            walkDir(fullPath);
          }
        } else if (stat.isFile() && item.endsWith('.html')) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }

  analyzeSEOContent(filePath, content) {
    const issues = [];
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Check for title tag
      if (line.includes('<title>') && line.includes('</title>')) {
        const titleMatch = line.match(/<title>(.*?)<\/title>/);
        if (titleMatch) {
          const title = titleMatch[1].trim();
          if (title.length < 30) {
            issues.push({
              file: filePath,
              line: lineNum,
              type: 'short-title',
              severity: 'medium',
              message: `Title is too short (${title.length} chars, recommended: 30-60)`
            });
          } else if (title.length > 60) {
            issues.push({
              file: filePath,
              line: lineNum,
              type: 'long-title',
              severity: 'medium',
              message: `Title is too long (${title.length} chars, recommended: 30-60)`
            });
          }
        }
      }
      
      // Check for meta description
      if (line.includes('name="description"')) {
        const descMatch = line.match(/content="([^"]*)"/);
        if (descMatch) {
          const description = descMatch[1];
          if (description.length < 120) {
            issues.push({
              file: filePath,
              line: lineNum,
              type: 'short-description',
              severity: 'medium',
              message: `Meta description is too short (${description.length} chars, recommended: 120-160)`
            });
          } else if (description.length > 160) {
            issues.push({
              file: filePath,
              line: lineNum,
              type: 'long-description',
              severity: 'medium',
              message: `Meta description is too long (${description.length} chars, recommended: 120-160)`
            });
          }
        }
      }
      
      // Check for missing alt attributes on images
      if (line.includes('<img') && !line.includes('alt=')) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'missing-alt',
          severity: 'high',
          message: 'Image missing alt attribute'
        });
      }
      
      // Check for heading structure
      if (line.match(/<h[1-6]/)) {
        const headingMatch = line.match(/<h([1-6])/);
        if (headingMatch) {
          const level = parseInt(headingMatch[1]);
          // This is a simplified check - in a real implementation, you'd track heading hierarchy
        }
      }
    });
    
    return issues;
  }

  analyzePackageJsonSEO(packageJson) {
    const issues = [];
    
    if (!packageJson.description) {
      issues.push({
        file: 'package.json',
        line: 1,
        type: 'missing-description',
        severity: 'high',
        message: 'Package.json missing description field'
      });
    }
    
    if (!packageJson.keywords || packageJson.keywords.length === 0) {
      issues.push({
        file: 'package.json',
        line: 1,
        type: 'missing-keywords',
        severity: 'medium',
        message: 'Package.json missing keywords field'
      });
    }
    
    return issues;
  }

  async checkAccessibility() {
    try {
      this.log('♿ Checking accessibility...');
      
      const accessibilityIssues = [];
      
      // Check HTML files for accessibility issues
      const htmlFiles = this.getHTMLFiles();
      
      for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.analyzeAccessibilityContent(file, content);
        accessibilityIssues.push(...fileIssues);
      }
      
      return {
        issues: accessibilityIssues,
        totalIssues: accessibilityIssues.length,
        criticalIssues: accessibilityIssues.filter(issue => issue.severity === 'critical').length,
        highIssues: accessibilityIssues.filter(issue => issue.severity === 'high').length
      };
    } catch (error) {
      this.log(`Accessibility check failed: ${error.message}`);
      return { issues: [], totalIssues: 0, criticalIssues: 0, highIssues: 0 };
    }
  }

  analyzeAccessibilityContent(filePath, content) {
    const issues = [];
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Check for missing alt attributes
      if (line.includes('<img') && !line.includes('alt=')) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'missing-alt',
          severity: 'critical',
          message: 'Image missing alt attribute - required for screen readers'
        });
      }
      
      // Check for missing form labels
      if (line.includes('<input') && !line.includes('aria-label') && !line.includes('aria-labelledby')) {
        const hasLabel = lines.some((otherLine, otherIndex) => 
          otherIndex < index && 
          otherLine.includes('<label') && 
          otherLine.includes('for=') &&
          otherLine.includes(line.match(/id="([^"]*)"/)?.[1] || '')
        );
        
        if (!hasLabel) {
          issues.push({
            file: filePath,
            line: lineNum,
            type: 'missing-label',
            severity: 'high',
            message: 'Input missing label or aria-label'
          });
        }
      }
      
      // Check for missing heading hierarchy
      if (line.match(/<h[2-6]/)) {
        const headingMatch = line.match(/<h([2-6])/);
        if (headingMatch) {
          const level = parseInt(headingMatch[1]);
          // Check if there's a previous heading of level-1
          const hasH1 = lines.slice(0, index).some(prevLine => prevLine.includes('<h1'));
          if (level > 1 && !hasH1) {
            issues.push({
              file: filePath,
              line: lineNum,
              type: 'missing-h1',
              severity: 'high',
              message: 'Page missing H1 heading'
            });
          }
        }
      }
      
      // Check for color contrast issues (simplified)
      if (line.includes('color:') && line.includes('background:')) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'color-contrast',
          severity: 'medium',
          message: 'Inline styles detected - check color contrast ratios'
        });
      }
      
      // Check for missing focus indicators
      if (line.includes('<button') && !line.includes(':focus') && !line.includes('tabindex')) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'focus-indicator',
          severity: 'medium',
          message: 'Button may be missing focus indicators'
        });
      }
    });
    
    return issues;
  }

  async checkPerformance() {
    try {
      this.log('⚡ Checking performance...');
      
      const performanceIssues = [];
      
      // Check for large images
      const imageFiles = this.getImageFiles();
      for (const file of imageFiles) {
        const stats = fs.statSync(file);
        if (stats.size > 500 * 1024) { // 500KB
          performanceIssues.push({
            file: path.relative(this.projectRoot, file),
            type: 'large-image',
            severity: 'medium',
            message: `Image is large (${this.formatBytes(stats.size)}) - consider optimization`
          });
        }
      }
      
      // Check for inline styles (performance impact)
      const htmlFiles = this.getHTMLFiles();
      for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const inlineStyleCount = (content.match(/style="/g) || []).length;
        if (inlineStyleCount > 10) {
          performanceIssues.push({
            file: path.relative(this.projectRoot, file),
            type: 'inline-styles',
            severity: 'low',
            message: `Many inline styles detected (${inlineStyleCount}) - consider CSS classes`
          });
        }
      }
      
      return {
        issues: performanceIssues,
        totalIssues: performanceIssues.length
      };
    } catch (error) {
      this.log(`Performance check failed: ${error.message}`);
      return { issues: [], totalIssues: 0 };
    }
  }

  getImageFiles() {
    const files = [];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
    
    const walkDir = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!fullPath.includes('node_modules') && 
              !fullPath.includes('.git') && 
              !fullPath.includes('dist') &&
              !fullPath.includes('build')) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (imageExtensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async runLighthouseAudit() {
    try {
      if (process.env.LIGHTHOUSE_AUDIT !== 'true') {
        return null;
      }
      
      this.log('🔍 Running Lighthouse audit...');
      
      // Check if lighthouse is available
      try {
        execSync('lighthouse --version', { stdio: 'pipe' });
      } catch (error) {
        this.log('Lighthouse not available, skipping audit');
        return null;
      }
      
      // Start the preview server if not running
      try {
        execSync('pm2 start ecosystem.config.js --only bolt-zion-app', { stdio: 'pipe' });
        // Wait for server to start
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (error) {
        this.log('Could not start preview server for Lighthouse');
        return null;
      }
      
      try {
        // Run lighthouse audit
        const lighthouseResult = execSync('lighthouse http://localhost:4173 --output=json --quiet', {
          cwd: this.projectRoot,
          stdio: 'pipe',
          timeout: 120000 // 2 minutes timeout
        });
        
        const audit = JSON.parse(lighthouseResult.toString());
        
        return {
          performance: Math.round(audit.categories.performance.score * 100),
          accessibility: Math.round(audit.categories.accessibility.score * 100),
          bestPractices: Math.round(audit.categories['best-practices'].score * 100),
          seo: Math.round(audit.categories.seo.score * 100)
        };
      } finally {
        // Stop the preview server
        try {
          execSync('pm2 stop bolt-zion-app', { stdio: 'pipe' });
        } catch (error) {
          // Ignore errors stopping the server
        }
      }
    } catch (error) {
      this.log(`Lighthouse audit failed: ${error.message}`);
      return null;
    }
  }

  generateReport(seoResults, accessibilityResults, performanceResults, lighthouseResults) {
    const totalIssues = seoResults.totalIssues + accessibilityResults.totalIssues + performanceResults.totalIssues;
    const criticalIssues = seoResults.criticalIssues + accessibilityResults.criticalIssues;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues,
        criticalIssues,
        seoIssues: seoResults.totalIssues,
        accessibilityIssues: accessibilityResults.totalIssues,
        performanceIssues: performanceResults.totalIssues,
        lighthouse: lighthouseResults
      },
      seo: seoResults,
      accessibility: accessibilityResults,
      performance: performanceResults,
      lighthouse: lighthouseResults,
      recommendations: this.generateRecommendations(seoResults, accessibilityResults, performanceResults, lighthouseResults)
    };
    
    return report;
  }

  generateRecommendations(seoResults, accessibilityResults, performanceResults, lighthouseResults) {
    const recommendations = [];
    
    if (seoResults.criticalIssues > 0) {
      recommendations.push({
        type: 'seo',
        priority: 'high',
        message: `${seoResults.criticalIssues} critical SEO issues found`,
        action: 'Fix critical SEO issues to improve search rankings'
      });
    }
    
    if (accessibilityResults.criticalIssues > 0) {
      recommendations.push({
        type: 'accessibility',
        priority: 'critical',
        message: `${accessibilityResults.criticalIssues} critical accessibility issues found`,
        action: 'Fix critical accessibility issues for compliance'
      });
    }
    
    if (lighthouseResults && lighthouseResults.accessibility < 80) {
      recommendations.push({
        type: 'accessibility',
        priority: 'high',
        message: `Lighthouse accessibility score is ${lighthouseResults.accessibility}`,
        action: 'Improve accessibility with proper ARIA labels and semantic HTML'
      });
    }
    
    if (lighthouseResults && lighthouseResults.seo < 80) {
      recommendations.push({
        type: 'seo',
        priority: 'high',
        message: `Lighthouse SEO score is ${lighthouseResults.seo}`,
        action: 'Improve SEO with proper meta tags and structured data'
      });
    }
    
    if (performanceResults.totalIssues > 0) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: `${performanceResults.totalIssues} performance issues found`,
        action: 'Optimize images and reduce inline styles'
      });
    }
    
    return recommendations;
  }

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('🔍 Starting SEO & Accessibility Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
    
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Check SEO
      const seoResults = await this.checkSEO();
      
      // Check accessibility
      const accessibilityResults = await this.checkAccessibility();
      
      // Check performance
      const performanceResults = await this.checkPerformance();
      
      // Run Lighthouse audit
      const lighthouseResults = await this.runLighthouseAudit();
      
      // Generate report
      const report = this.generateReport(seoResults, accessibilityResults, performanceResults, lighthouseResults);
      
      // Save report
      await this.saveReport(report);
      
      const duration = Date.now() - this.startTime;
      
      // Log summary
      this.log('\n📊 SEO & Accessibility Report:');
      this.log(`Total issues: ${report.summary.totalIssues}`);
      this.log(`Critical issues: ${report.summary.criticalIssues}`);
      this.log(`SEO issues: ${report.summary.seoIssues}`);
      this.log(`Accessibility issues: ${report.summary.accessibilityIssues}`);
      this.log(`Performance issues: ${report.summary.performanceIssues}`);
      if (lighthouseResults) {
        this.log(`Lighthouse scores - Performance: ${lighthouseResults.performance}, Accessibility: ${lighthouseResults.accessibility}, SEO: ${lighthouseResults.seo}`);
      }
      this.log(`Duration: ${duration}ms`);
      
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error running SEO & accessibility monitor: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the SEO & accessibility monitor
const monitor = new SEOAccessibilityMonitor();
monitor.run().catch(error => {
  process.exit(1);
});