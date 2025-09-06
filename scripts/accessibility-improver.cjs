#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class AccessibilityImprover {
  constructor() {
    this.improvements = [];
    this.checks = [];
  }

  checkComponents() {
    const componentsDir = path.join(process.cwd(), 'components');
    if (fs.existsSync(componentsDir)) {
      this.scanDirectory(componentsDir);
    }
  }

  scanDirectory(dir, basePath = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      
      if (fs.statSync(filePath).isDirectory()) {
        this.scanDirectory(filePath, relativePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        this.checkFile(filePath, relativePath);
      }
    });
  }

  checkFile(filePath, relativePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common accessibility issues
      const checks = [
        {
          pattern: /<img[^>]*>/g,
          check: (match) => !match.includes('alt='),
          message: 'Images should have alt text'
        },
        {
          pattern: /<button[^>]*>/g,
          check: (match) => !match.includes('aria-label') && !match.includes('aria-labelledby'),
          message: 'Buttons should have accessible labels'
        },
        {
          pattern: /<input[^>]*>/g,
          check: (match) => !match.includes('aria-label') && !match.includes('aria-labelledby') && !match.includes('aria-describedby'),
          message: 'Inputs should have accessible labels'
        }
      ];
      
      checks.forEach(check => {
        const matches = content.match(check.pattern);
        if (matches) {
          matches.forEach(match => {
            if (check.check(match)) {
              this.checks.push({
                file: relativePath,
                issue: check.message,
                severity: 'warning'
              });
            }
          });
        }
      });
    } catch (error) {
      console.error(`Error checking file ${relativePath}:`, error);
    }
  }

  generateImprovements() {
    const improvements = [
      'Add alt text to all images',
      'Ensure proper heading hierarchy (h1, h2, h3)',
      'Add ARIA labels to interactive elements',
      'Implement keyboard navigation',
      'Ensure sufficient color contrast',
      'Add focus indicators',
      'Use semantic HTML elements',
      'Implement screen reader support',
      'Add skip navigation links',
      'Ensure form labels are properly associated'
    ];
    
    this.improvements.push(...improvements);
  }

  generateReport() {
    this.checkComponents();
    this.generateImprovements();
    
    const report = {
      timestamp: new Date().toISOString(),
      checks: this.checks,
      improvements: this.improvements,
      summary: {
        totalChecks: this.checks.length,
        warnings: this.checks.filter(check => check.severity === 'warning').length
      }
    };
    
    const reportPath = path.join(process.cwd(), 'accessibility-improvement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Accessibility improvement report generated:', reportPath);
    
    return report;
  }
}

const improver = new AccessibilityImprover();
improver.generateReport();
