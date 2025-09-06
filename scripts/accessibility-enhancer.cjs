#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AccessibilityEnhancer {
  constructor() {
    this.projectRoot = process.cwd();
    this.accessibilityIssues = [];
    this.improvements = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async checkAltText() {
    this.log('🖼️ Checking alt text for images...');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    const appDir = path.join(this.projectRoot, 'app');
    const srcDir = path.join(this.projectRoot, 'src');
    
    const directories = [pagesDir, appDir, srcDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of directories) {
      const files = this.getAllFiles(dir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for img tags without alt attributes
          const imgPattern = /<img[^>]*>/gi;
          const images = content.match(imgPattern);
          
          if (images) {
            images.forEach((img, index) => {
              if (!img.includes('alt=')) {
                this.accessibilityIssues.push({
                  type: 'missing-alt',
                  file: file,
                  image: index + 1,
                  severity: 'high',
                  recommendation: 'Add descriptive alt text to image'
                });
              }
            });
          }
          
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    this.log('✅ Alt text check completed', 'SUCCESS');
  }

  getAllFiles(dir, extensions) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  async generateAccessibilityReport() {
    this.log('📊 Generating accessibility report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      accessibilityIssues: this.accessibilityIssues,
      improvements: this.improvements,
      summary: {
        totalIssues: this.accessibilityIssues.length,
        highSeverity: this.accessibilityIssues.filter(i => i.severity === 'high').length,
        mediumSeverity: this.accessibilityIssues.filter(i => i.severity === 'medium').length,
        lowSeverity: this.accessibilityIssues.filter(i => i.severity === 'low').length,
        improvements: this.improvements.length
      }
    };
    
    fs.writeFileSync('accessibility-enhancement-report.json', JSON.stringify(report, null, 2));
    this.log('✅ Accessibility report generated', 'SUCCESS');
  }

  async run() {
    this.log('🚀 Starting Accessibility Enhancer');
    this.log('='.repeat(50));
    
    await this.checkAltText();
    await this.generateAccessibilityReport();
    
    this.log('\n📊 Accessibility Enhancement Summary');
    this.log(`Total accessibility issues: ${this.accessibilityIssues.length}`);
    this.log(`High severity: ${this.accessibilityIssues.filter(i => i.severity === 'high').length}`);
    this.log(`Improvements made: ${this.improvements.length}`);
    
    this.log('\n✅ Accessibility enhancement completed!');
  }
}

const enhancer = new AccessibilityEnhancer();
enhancer.run().catch(console.error);

module.exports = AccessibilityEnhancer;