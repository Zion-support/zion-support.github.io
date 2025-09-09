#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

class AccessibilityEnhancer {
  constructor() {
    this.projectRoot = process.cwd();
    this.accessibilityIssues = [];
    this.recommendations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async analyzeHTMLFiles() {
    this.log('📄 Analyzing HTML files for accessibility...');
    try {
      const distDir = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distDir)) {
        this.findAndAnalyzeHTML(distDir);
      }
    } catch (error) {
      this.log(`❌ Error analyzing HTML files: ${error.message}`);
    }
  }

  findAndAnalyzeHTML(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findAndAnalyzeHTML(fullPath);
      } else if (stat.isFile() && file.endsWith('.html')) {
        this.analyzeHTMLFile(fullPath);
      }
    }
  }

  analyzeHTMLFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for alt attributes on images
      const imgTags = content.match(/<img[^>]*>/g) || [];
      for (const imgTag of imgTags) {
        if (!imgTag.includes('alt=')) {
          this.accessibilityIssues.push({
            file: filePath,
            issue: 'Image missing alt attribute',
            severity: 'high',
            wcag: '1.1.1'
          });
        }
      }
      
      // Check for form labels
      const inputTags = content.match(/<input[^>]*>/g) || [];
      for (const inputTag of inputTags) {
        if (!inputTag.includes('aria-label') && !inputTag.includes('aria-labelledby')) {
          this.accessibilityIssues.push({
            file: filePath,
            issue: 'Input missing label or aria-label',
            severity: 'high',
            wcag: '1.3.1'
          });
        }
      }
      
      // Check for heading structure
      const headings = content.match(/<h[1-6][^>]*>/g) || [];
      let h1Count = 0;
      let h2Count = 0;
      
      for (const heading of headings) {
        if (heading.includes('<h1')) h1Count++;
        if (heading.includes('<h2')) h2Count++;
      }
      
      if (h1Count === 0) {
        this.accessibilityIssues.push({
          file: filePath,
          issue: 'Missing H1 heading',
          severity: 'medium',
          wcag: '1.3.1'
        });
      }
      
      // Check for color contrast (basic check)
      if (content.includes('color:') && !content.includes('background-color:')) {
        this.accessibilityIssues.push({
          file: filePath,
          issue: 'Potential color contrast issue',
          severity: 'medium',
          wcag: '1.4.3'
        });
      }
      
    } catch (error) {
      this.log(`❌ Error analyzing ${filePath}: ${error.message}`);
    }
  }

  async generateAccessibilityReport() {
    this.log('📋 Generating accessibility report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.accessibilityIssues,
      recommendations: [
        'Add alt attributes to all images',
        'Ensure all form inputs have labels',
        'Use proper heading hierarchy (H1, H2, H3)',
        'Ensure sufficient color contrast',
        'Add ARIA labels where needed',
        'Implement keyboard navigation',
        'Use semantic HTML elements',
        'Test with screen readers',
        'Follow WCAG 2.1 guidelines'
      ]
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'accessibility-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('📊 Accessibility report saved to accessibility-report.json');
  }

  async run() {
    this.log('♿ Starting Accessibility Enhancement');
    
    await this.analyzeHTMLFiles();
    await this.generateAccessibilityReport();
    
    this.log('✅ Accessibility enhancement completed');
  }
}

// Run the enhancer
if (require.main === module) {
  const enhancer = new AccessibilityEnhancer();
  enhancer.run().catch(console.error);
}

module.exports = AccessibilityEnhancer;
