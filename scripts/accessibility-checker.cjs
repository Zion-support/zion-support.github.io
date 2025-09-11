#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class AccessibilityChecker {
  constructor() {
    this.issues = [];
    this.recommendations = [];
  }

  async checkFiles() {
    const files = await this.findReactFiles();
    files.forEach(file => {
      this.checkFile(file);
    });
  }

  async findReactFiles() {
    const command = 'find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | head -10';
    const { execSync } = require('child_process');
    try {
      const output = execSync(command, { encoding: 'utf8' });
      return output.split('\n').filter(f => f.trim());
    } catch (error) {
      return [];
    }
  }

  checkFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for missing alt attributes
      if (content.includes('<img') && !content.includes('alt=')) {
        this.issues.push(`Missing alt attribute in ${filePath}`);
      }
      
      // Check for missing aria labels
      if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
        this.issues.push(`Button missing aria-label in ${filePath}`);
      }
      
      // Check for proper heading structure
      if (content.includes('<h2') && !content.includes('<h1')) {
        this.issues.push(`Missing h1 before h2 in ${filePath}`);
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }

  generateReport() {
    return {
      issues: this.issues,
      recommendations: [
        'Add alt attributes to all images',
        'Use semantic HTML elements',
        'Ensure proper heading hierarchy',
        'Add ARIA labels where needed',
        'Test with screen readers'
      ],
      timestamp: new Date().toISOString()
    };
  }
}

const checker = new AccessibilityChecker();
checker.checkFiles();
const report = checker.generateReport();

fs.writeFileSync('accessibility-report.json', JSON.stringify(report, null, 2));
console.log('Accessibility check completed');
