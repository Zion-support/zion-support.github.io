#!/usr/bin/env node

/**
 * PM2 SEO and Accessibility Checker Script
 * Checks SEO and accessibility compliance
 */

import fs from 'fs';
import path from 'path';

class SEOAccessibilityChecker {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'seo-accessibility';
    this.checkSEO = process.env.CHECK_SEO === 'true';
    this.checkAccessibility = process.env.CHECK_ACCESSIBILITY === 'true';
    this.checkPerformance = process.env.CHECK_PERFORMANCE === 'true';
    this.lighthouseAudit = process.env.LIGHTHOUSE_AUDIT === 'true';
    this.logFile = `logs/pm2/seo-accessibility.log`;
    this.errorFile = `logs/pm2/seo-accessibility-error.log`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${this.processName}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  error(message) {
    this.log(message, 'ERROR');
    fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
  }

  async checkSEO() {
    this.log('Checking SEO compliance...');
    
    try {
      const seoIssues = [];
      const htmlFiles = this.findHTMLFiles();
      
      for (const file of htmlFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for title tag
          if (!content.includes('<title>')) {
            seoIssues.push({
              file,
              issue: 'Missing title tag',
              severity: 'high'
            });
          }
          
          // Check for meta description
          if (!content.includes('meta name="description"')) {
            seoIssues.push({
              file,
              issue: 'Missing meta description',
              severity: 'medium'
            });
          }
          
          // Check for alt attributes on images
          const imgTags = content.match(/<img[^>]*>/g) || [];
          for (const imgTag of imgTags) {
            if (!imgTag.includes('alt=')) {
              seoIssues.push({
                file,
                issue: 'Image missing alt attribute',
                severity: 'medium'
              });
            }
          }
          
        } catch (err) {
          // Skip files that can't be read
        }
      }
      
      this.log(`SEO check completed. Found ${seoIssues.length} issues`);
      
      return {
        success: true,
        issues: seoIssues,
        totalIssues: seoIssues.length
      };
      
    } catch (error) {
      this.error(`SEO check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkAccessibility() {
    this.log('Checking accessibility compliance...');
    
    try {
      const accessibilityIssues = [];
      const htmlFiles = this.findHTMLFiles();
      
      for (const file of htmlFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for heading hierarchy
          const headings = content.match(/<h[1-6][^>]*>/g) || [];
          let lastLevel = 0;
          for (const heading of headings) {
            const level = parseInt(heading.match(/<h([1-6])/)[1]);
            if (level > lastLevel + 1) {
              accessibilityIssues.push({
                file,
                issue: `Heading hierarchy issue: h${level} after h${lastLevel}`,
                severity: 'medium'
              });
            }
            lastLevel = level;
          }
          
          // Check for form labels
          const inputTags = content.match(/<input[^>]*>/g) || [];
          for (const inputTag of inputTags) {
            if (inputTag.includes('type=') && !inputTag.includes('aria-label') && !content.includes(`<label`)) {
              accessibilityIssues.push({
                file,
                issue: 'Input missing label or aria-label',
                severity: 'high'
              });
            }
          }
          
        } catch (err) {
          // Skip files that can't be read
        }
      }
      
      this.log(`Accessibility check completed. Found ${accessibilityIssues.length} issues`);
      
      return {
        success: true,
        issues: accessibilityIssues,
        totalIssues: accessibilityIssues.length
      };
      
    } catch (error) {
      this.error(`Accessibility check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  findHTMLFiles() {
    const files = [];
    
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && item.endsWith('.html')) {
            files.push(fullPath);
          }
        }
      } catch (err) {
        // Skip directories that can't be read
      }
    }
    
    scanDirectory('.');
    return files;
  }

  async generateSEOAccessibilityReport() {
    this.log('Generating SEO and accessibility report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      checks: {},
      summary: {}
    };
    
    try {
      // Run checks
      if (this.checkSEO) {
        report.checks.seo = await this.checkSEO();
      }
      
      if (this.checkAccessibility) {
        report.checks.accessibility = await this.checkAccessibility();
      }
      
      // Generate summary
      const seoIssues = report.checks.seo?.totalIssues || 0;
      const accessibilityIssues = report.checks.accessibility?.totalIssues || 0;
      const totalIssues = seoIssues + accessibilityIssues;
      
      report.summary = {
        seoIssues,
        accessibilityIssues,
        totalIssues,
        overallStatus: totalIssues === 0 ? 'COMPLIANT' : totalIssues < 5 ? 'NEEDS_IMPROVEMENT' : 'NON_COMPLIANT'
      };
      
      // Save report
      const reportFile = `reports/seo-accessibility-report-${Date.now()}.json`;
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`SEO and accessibility report saved to ${reportFile}`);
      
      return report;
      
    } catch (error) {
      this.error(`Failed to generate SEO/accessibility report: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('SEO and accessibility checker service started');
    
    // Ensure directories exist
    fs.mkdirSync('logs/pm2', { recursive: true });
    fs.mkdirSync('reports', { recursive: true });
    
    // Run initial checks
    await this.generateSEOAccessibilityReport();
    
    // Set up periodic checks
    setInterval(async () => {
      this.log('Running scheduled SEO and accessibility checks...');
      await this.generateSEOAccessibilityReport();
    }, 4 * 60 * 60 * 1000); // Every 4 hours
    
    this.log('SEO and accessibility checker service is running');
  }
}

// Start the service
if (require.main === module) {
  const seoAccessibilityChecker = new SEOAccessibilityChecker();
  seoAccessibilityChecker.start().catch(error => {
    console.error('SEO and accessibility checker failed to start:', error);
    process.exit(1);
  });
}

export default SEOAccessibilityChecker;