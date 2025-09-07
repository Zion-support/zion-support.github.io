#!/usr/bin/env node

/**
 * Accessibility Checker
 * Comprehensive accessibility audit and improvement tool
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('♿ Starting accessibility audit...');

class AccessibilityChecker {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.auditResults = {
      timestamp: new Date().toISOString(),
      wcagLevel: 'AA',
      issues: [],
      recommendations: [],
      score: 0
    };
  }

  async checkARIALabels() {
    try {
      console.log('🏷️  Checking ARIA labels and roles...');
      
      const componentsDir = path.join(__dirname, '..', 'components');
      const pagesDir = path.join(__dirname, '..', 'pages');
      
      const directories = [componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForARIA(dir);
      }
      
      console.log(`✅ ARIA labels check completed`);
      
    } catch (error) {
      console.warn('⚠️  ARIA labels check failed:', error.message);
    }
  }

  scanDirectoryForARIA(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForARIA(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeARIA(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeARIA(content, filePath) {
    const ariaPatterns = [
      {
        name: 'Missing ARIA Labels',
        pattern: /<(button|input|select|textarea)(?!.*aria-label)(?!.*aria-labelledby)/gi,
        severity: 'medium',
        recommendation: 'Add aria-label or aria-labelledby attributes'
      },
      {
        name: 'Missing ARIA Roles',
        pattern: /<div(?!.*role)(?!.*aria-)/gi,
        severity: 'low',
        recommendation: 'Consider adding role attribute for semantic clarity'
      },
      {
        name: 'Missing Alt Text',
        pattern: /<img(?!.*alt)/gi,
        severity: 'high',
        recommendation: 'Add alt attribute to all images'
      },
      {
        name: 'Missing Form Labels',
        pattern: /<input(?!.*aria-label)(?!.*aria-labelledby)(?!.*id)/gi,
        severity: 'high',
        recommendation: 'Associate form inputs with labels'
      }
    ];
    
    ariaPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.auditResults.issues.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          count: matches.length,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async checkColorContrast() {
    try {
      console.log('🎨 Checking color contrast...');
      
      const cssFiles = this.findCSSFiles();
      
      for (const cssFile of cssFiles) {
        this.analyzeColorContrast(cssFile);
      }
      
      console.log(`✅ Color contrast check completed`);
      
    } catch (error) {
      console.warn('⚠️  Color contrast check failed:', error.message);
    }
  }

  findCSSFiles() {
    const cssFiles = [];
    const directories = [
      path.join(__dirname, '..', 'styles'),
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'components')
    ];
    
    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        this.findCSSInDirectory(dir, cssFiles);
      }
    }
    
    return cssFiles;
  }

  findCSSInDirectory(dir, cssFiles) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.findCSSInDirectory(fullPath, cssFiles);
      } else if (file.name.match(/\.(css|scss|sass)$/)) {
        cssFiles.push(fullPath);
      }
    }
  }

  analyzeColorContrast(cssFile) {
    try {
      const content = fs.readFileSync(cssFile, 'utf8');
      
      // Look for color definitions
      const colorPattern = /color:\s*([^;]+);/gi;
      const backgroundColorPattern = /background-color:\s*([^;]+);/gi;
      
      const colors = [...content.matchAll(colorPattern)].map(match => match[1].trim());
      const backgrounds = [...content.matchAll(backgroundColorPattern)].map(match => match[1].trim());
      
      // Basic contrast check (simplified)
      if (colors.length > 0 || backgrounds.length > 0) {
        this.auditResults.issues.push({
          file: cssFile,
          type: 'Color Contrast',
          severity: 'medium',
          count: colors.length + backgrounds.length,
          recommendation: 'Verify color contrast meets WCAG AA standards (4.5:1 ratio)'
        });
      }
      
    } catch (error) {
      console.warn(`⚠️  Failed to analyze ${cssFile}:`, error.message);
    }
  }

  async checkKeyboardNavigation() {
    try {
      console.log('⌨️  Checking keyboard navigation...');
      
      const componentsDir = path.join(__dirname, '..', 'components');
      const pagesDir = path.join(__dirname, '..', 'pages');
      
      const directories = [componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForKeyboard(dir);
      }
      
      console.log(`✅ Keyboard navigation check completed`);
      
    } catch (error) {
      console.warn('⚠️  Keyboard navigation check failed:', error.message);
    }
  }

  scanDirectoryForKeyboard(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForKeyboard(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeKeyboardNavigation(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeKeyboardNavigation(content, filePath) {
    const keyboardPatterns = [
      {
        name: 'Missing Tab Index',
        pattern: /<div(?!.*tabIndex)(?!.*onClick)/gi,
        severity: 'low',
        recommendation: 'Consider adding tabIndex for interactive elements'
      },
      {
        name: 'Missing Focus Management',
        pattern: /onClick(?!.*onKeyDown)(?!.*onKeyPress)/gi,
        severity: 'medium',
        recommendation: 'Add keyboard event handlers for interactive elements'
      },
      {
        name: 'Missing Skip Links',
        pattern: /<main(?!.*id="main")/gi,
        severity: 'medium',
        recommendation: 'Add skip links for main content navigation'
      }
    ];
    
    keyboardPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.auditResults.issues.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          count: matches.length,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  generateRecommendations() {
    const recommendations = [
      'Implement comprehensive ARIA labels and roles',
      'Ensure all images have descriptive alt text',
      'Verify color contrast meets WCAG AA standards',
      'Add keyboard navigation support',
      'Implement focus management',
      'Add skip links for main content',
      'Test with screen readers',
      'Implement semantic HTML structure',
      'Add error messages and success feedback',
      'Ensure form validation is accessible'
    ];
    
    this.auditResults.recommendations = recommendations;
  }

  calculateScore() {
    const totalIssues = this.auditResults.issues.length;
    const highSeverityIssues = this.auditResults.issues.filter(i => i.severity === 'high').length;
    const mediumSeverityIssues = this.auditResults.issues.filter(i => i.severity === 'medium').length;
    
    // Calculate score based on issues (simplified)
    let score = 100;
    score -= highSeverityIssues * 20;
    score -= mediumSeverityIssues * 10;
    score -= (totalIssues - highSeverityIssues - mediumSeverityIssues) * 5;
    
    this.auditResults.score = Math.max(0, score);
  }

  generateReport() {
    this.generateRecommendations();
    this.calculateScore();
    
    const report = {
      ...this.auditResults,
      summary: {
        totalIssues: this.auditResults.issues.length,
        highSeverityIssues: this.auditResults.issues.filter(i => i.severity === 'high').length,
        mediumSeverityIssues: this.auditResults.issues.filter(i => i.severity === 'medium').length,
        lowSeverityIssues: this.auditResults.issues.filter(i => i.severity === 'low').length,
        accessibilityScore: this.auditResults.score
      }
    };
    
    const reportPath = path.join(__dirname, '..', 'accessibility-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 Accessibility audit report saved to accessibility-audit-report.json');
    return report;
  }

  async run() {
    try {
      await this.checkARIALabels();
      await this.checkColorContrast();
      await this.checkKeyboardNavigation();
      
      const report = this.generateReport();
      
      console.log('\n♿ Accessibility Audit Summary:');
      console.log(`Total Issues: ${report.summary.totalIssues}`);
      console.log(`High Severity: ${report.summary.highSeverityIssues}`);
      console.log(`Medium Severity: ${report.summary.mediumSeverityIssues}`);
      console.log(`Low Severity: ${report.summary.lowSeverityIssues}`);
      console.log(`Accessibility Score: ${report.summary.accessibilityScore}/100`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Accessibility Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Accessibility audit failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const checker = new AccessibilityChecker();
  await checker.run();
}

if (require.main === module) {
  main();
}

module.exports = AccessibilityChecker;