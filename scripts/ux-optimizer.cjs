#!/usr/bin/env node

/**
 * UX Optimizer
 * Comprehensive user experience optimization tool
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🎨 Starting UX optimization...');

class UXOptimizer {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.optimizationResults = {
      timestamp: new Date().toISOString(),
      responsiveDesign: [],
      userFlow: [],
      accessibility: [],
      performance: [],
      content: [],
      recommendations: []
    };
  }

  async checkResponsiveDesign() {
    try {
      console.log('📱 Checking responsive design...');
      
      const componentsDir = path.join(__dirname, '..', 'components');
      const pagesDir = path.join(__dirname, '..', 'pages');
      const stylesDir = path.join(__dirname, '..', 'styles');
      
      const directories = [componentsDir, pagesDir, stylesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForResponsiveDesign(dir);
      }
      
      console.log(`✅ Responsive design check completed`);
      
    } catch (error) {
      console.warn('⚠️  Responsive design check failed:', error.message);
    }
  }

  scanDirectoryForResponsiveDesign(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForResponsiveDesign(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts|css|scss|sass)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeResponsiveDesign(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeResponsiveDesign(content, filePath) {
    const responsivePatterns = [
      {
        name: 'Missing Viewport Meta',
        pattern: /<meta\s+name="viewport"/gi,
        severity: 'high',
        recommendation: 'Add viewport meta tag for mobile optimization'
      },
      {
        name: 'Missing Media Queries',
        pattern: /@media\s+\(/gi,
        severity: 'medium',
        recommendation: 'Add responsive media queries for different screen sizes'
      },
      {
        name: 'Fixed Width Elements',
        pattern: /width:\s*\d+px/gi,
        severity: 'medium',
        recommendation: 'Use relative units (%, vw, vh) instead of fixed pixels'
      },
      {
        name: 'Missing Flexbox/Grid',
        pattern: /display:\s*(flex|grid)/gi,
        severity: 'low',
        recommendation: 'Consider using Flexbox or CSS Grid for better layouts'
      }
    ];
    
    responsivePatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.optimizationResults.responsiveDesign.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: matches.length > 0,
          recommendation: pattern.recommendation
        });
      } else {
        this.optimizationResults.responsiveDesign.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: false,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async checkUserFlow() {
    try {
      console.log('🔄 Checking user flow...');
      
      const pagesDir = path.join(__dirname, '..', 'pages');
      const componentsDir = path.join(__dirname, '..', 'components');
      
      const directories = [pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForUserFlow(dir);
      }
      
      console.log(`✅ User flow check completed`);
      
    } catch (error) {
      console.warn('⚠️  User flow check failed:', error.message);
    }
  }

  scanDirectoryForUserFlow(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForUserFlow(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeUserFlow(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeUserFlow(content, filePath) {
    const userFlowPatterns = [
      {
        name: 'Missing Loading States',
        pattern: /loading|isLoading|spinner/gi,
        severity: 'medium',
        recommendation: 'Add loading states for better user feedback'
      },
      {
        name: 'Missing Error Handling',
        pattern: /error|Error|catch/gi,
        severity: 'high',
        recommendation: 'Implement comprehensive error handling and user feedback'
      },
      {
        name: 'Missing Form Validation',
        pattern: /validation|validate|required/gi,
        severity: 'medium',
        recommendation: 'Add form validation and user feedback'
      },
      {
        name: 'Missing Success Messages',
        pattern: /success|Success|toast/gi,
        severity: 'low',
        recommendation: 'Add success messages for user actions'
      }
    ];
    
    userFlowPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.optimizationResults.userFlow.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: matches.length > 0,
          recommendation: pattern.recommendation
        });
      } else {
        this.optimizationResults.userFlow.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: false,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async checkAccessibility() {
    try {
      console.log('♿ Checking accessibility...');
      
      const componentsDir = path.join(__dirname, '..', 'components');
      const pagesDir = path.join(__dirname, '..', 'pages');
      
      const directories = [componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForAccessibility(dir);
      }
      
      console.log(`✅ Accessibility check completed`);
      
    } catch (error) {
      console.warn('⚠️  Accessibility check failed:', error.message);
    }
  }

  scanDirectoryForAccessibility(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForAccessibility(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeAccessibility(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeAccessibility(content, filePath) {
    const accessibilityPatterns = [
      {
        name: 'Missing ARIA Labels',
        pattern: /aria-label|aria-labelledby/gi,
        severity: 'medium',
        recommendation: 'Add ARIA labels for better screen reader support'
      },
      {
        name: 'Missing Alt Text',
        pattern: /<img(?!.*alt)/gi,
        severity: 'high',
        recommendation: 'Add alt text to all images'
      },
      {
        name: 'Missing Focus Management',
        pattern: /onFocus|onBlur|tabIndex/gi,
        severity: 'medium',
        recommendation: 'Implement proper focus management'
      },
      {
        name: 'Missing Keyboard Navigation',
        pattern: /onKeyDown|onKeyPress|onKeyUp/gi,
        severity: 'medium',
        recommendation: 'Add keyboard navigation support'
      }
    ];
    
    accessibilityPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.optimizationResults.accessibility.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: matches.length > 0,
          recommendation: pattern.recommendation
        });
      } else {
        this.optimizationResults.accessibility.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          found: false,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async checkContent() {
    try {
      console.log('📝 Checking content optimization...');
      
      const pagesDir = path.join(__dirname, '..', 'pages');
      const componentsDir = path.join(__dirname, '..', 'components');
      
      const directories = [pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForContent(dir);
      }
      
      console.log(`✅ Content optimization check completed`);
      
    } catch (error) {
      console.warn('⚠️  Content optimization check failed:', error.message);
    }
  }

  scanDirectoryForContent(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForContent(fullPath);
      } else if (file.name.match(/\.(jsx|tsx|js|ts)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeContent(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeContent(content, filePath) {
    const contentPatterns = [
      {
        name: 'Missing Headings',
        pattern: /<h[1-6]/gi,
        severity: 'medium',
        recommendation: 'Add proper heading hierarchy for better content structure'
      },
      {
        name: 'Missing Meta Descriptions',
        pattern: /<meta\s+name="description"/gi,
        severity: 'medium',
        recommendation: 'Add meta descriptions for better SEO and user understanding'
      },
      {
        name: 'Long Text Blocks',
        pattern: /<p[^>]*>[\s\S]{200,}<\/p>/gi,
        severity: 'low',
        recommendation: 'Break long text blocks into smaller, scannable sections'
      },
      {
        name: 'Missing Call-to-Action',
        pattern: /<button|onClick/gi,
        severity: 'low',
        recommendation: 'Ensure clear call-to-action buttons and links'
      }
    ];
    
    contentPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.optimizationResults.content.push({
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
      'Implement mobile-first responsive design',
      'Add comprehensive loading states and error handling',
      'Improve accessibility with ARIA labels and keyboard navigation',
      'Optimize content structure and readability',
      'Add user feedback and success messages',
      'Implement progressive web app features',
      'Add user analytics and behavior tracking',
      'Optimize form design and validation',
      'Implement dark mode and theme switching',
      'Add micro-interactions and animations'
    ];
    
    this.optimizationResults.recommendations = recommendations;
  }

  generateReport() {
    this.generateRecommendations();
    
    const report = {
      ...this.optimizationResults,
      summary: {
        responsiveDesignIssues: this.optimizationResults.responsiveDesign.filter(r => !r.found).length,
        userFlowIssues: this.optimizationResults.userFlow.filter(u => !u.found).length,
        accessibilityIssues: this.optimizationResults.accessibility.filter(a => !a.found).length,
        contentIssues: this.optimizationResults.content.length,
        totalIssues: this.optimizationResults.responsiveDesign.filter(r => !r.found).length +
                    this.optimizationResults.userFlow.filter(u => !u.found).length +
                    this.optimizationResults.accessibility.filter(a => !a.found).length +
                    this.optimizationResults.content.length
      }
    };
    
    const reportPath = path.join(__dirname, '..', 'ux-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 UX optimization report saved to ux-optimization-report.json');
    return report;
  }

  async run() {
    try {
      await this.checkResponsiveDesign();
      await this.checkUserFlow();
      await this.checkAccessibility();
      await this.checkContent();
      
      const report = this.generateReport();
      
      console.log('\n🎨 UX Optimization Summary:');
      console.log(`Responsive Design Issues: ${report.summary.responsiveDesignIssues}`);
      console.log(`User Flow Issues: ${report.summary.userFlowIssues}`);
      console.log(`Accessibility Issues: ${report.summary.accessibilityIssues}`);
      console.log(`Content Issues: ${report.summary.contentIssues}`);
      console.log(`Total Issues: ${report.summary.totalIssues}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 UX Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ UX optimization failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const optimizer = new UXOptimizer();
  await optimizer.run();
}

if (require.main === module) {
  main();
}

module.exports = UXOptimizer;