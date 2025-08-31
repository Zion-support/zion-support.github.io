#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SEOAccessibilityChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');
    this.startTime = Date.now();
    
    this.config = {
      checkSEO: process.env.CHECK_SEO === 'true',
      checkAccessibility: process.env.CHECK_ACCESSIBILITY === 'true',
      checkPerformance: process.env.CHECK_PERFORMANCE === 'true',
      lighthouseAudit: process.env.LIGHTHOUSE_AUDIT === 'true'
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkHTMLFiles() {
    this.log('🔍 Checking HTML files for SEO and accessibility...');
    
    const htmlFiles = [];
    const publicDir = path.join(this.projectRoot, 'public');
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (fs.existsSync(publicDir)) {
      this.scanForHTMLFiles(publicDir, htmlFiles);
    }
    
    if (fs.existsSync(srcDir)) {
      this.scanForHTMLFiles(srcDir, htmlFiles);
    }
    
    return htmlFiles;
  }

  scanForHTMLFiles(dir, htmlFiles) {
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.scanForHTMLFiles(fullPath, htmlFiles);
        } else if (fullPath.endsWith('.html')) {
          htmlFiles.push(fullPath);
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
    }
  }

  async analyzeHTMLFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      const analysis = {
        file: fileName,
        path: filePath.replace(this.projectRoot, ''),
        size: fs.statSync(filePath).size,
        lines: content.split('\n').length,
        seo: this.analyzeSEO(content),
        accessibility: this.analyzeAccessibility(content),
        performance: this.analyzePerformance(content)
      };
      
      return analysis;
    } catch (error) {
      this.log(`Error analyzing HTML file ${filePath}: ${error.message}`, 'ERROR');
      return { file: path.basename(filePath), error: error.message };
    }
  }

  analyzeSEO(content) {
    const seo = {
      score: 100,
      issues: [],
      recommendations: []
    };
    
    // Check for title tag
    if (!content.includes('<title>')) {
      seo.score -= 20;
      seo.issues.push('Missing title tag');
      seo.recommendations.push('Add a descriptive title tag');
    }
    
    // Check for meta description
    if (!content.includes('meta name="description"')) {
      seo.score -= 15;
      seo.issues.push('Missing meta description');
      seo.recommendations.push('Add a meta description tag');
    }
    
    // Check for meta keywords
    if (!content.includes('meta name="keywords"')) {
      seo.score -= 10;
      seo.issues.push('Missing meta keywords');
      seo.recommendations.push('Add relevant meta keywords');
    }
    
    // Check for heading structure
    const h1Count = (content.match(/<h1/g) || []).length;
    const h2Count = (content.match(/<h2/g) || []).length;
    
    if (h1Count === 0) {
      seo.score -= 15;
      seo.issues.push('Missing H1 heading');
      seo.recommendations.push('Add a main H1 heading');
    } else if (h1Count > 1) {
      seo.score -= 10;
      seo.issues.push('Multiple H1 headings');
      seo.recommendations.push('Use only one H1 heading per page');
    }
    
    if (h2Count === 0) {
      seo.score -= 5;
      seo.issues.push('No H2 headings');
      seo.recommendations.push('Add H2 headings for better structure');
    }
    
    // Check for alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g) || [];
    const imgWithoutAlt = imgTags.filter(img => !img.includes('alt='));
    
    if (imgWithoutAlt.length > 0) {
      seo.score -= imgWithoutAlt.length * 5;
      seo.issues.push(`${imgWithoutAlt.length} images without alt attributes`);
      seo.recommendations.push('Add descriptive alt attributes to all images');
    }
    
    // Check for internal links
    const internalLinks = content.match(/href="[^"]*"/g) || [];
    if (internalLinks.length === 0) {
      seo.score -= 5;
      seo.issues.push('No internal links found');
      seo.recommendations.push('Add internal links for better navigation');
    }
    
    return seo;
  }

  analyzeAccessibility(content) {
    const accessibility = {
      score: 100,
      issues: [],
      recommendations: []
    };
    
    // Check for ARIA labels
    const ariaLabels = content.match(/aria-label=/g) || [];
    if (ariaLabels.length === 0) {
      accessibility.score -= 10;
      accessibility.issues.push('No ARIA labels found');
      accessibility.recommendations.push('Add ARIA labels for better screen reader support');
    }
    
    // Check for form labels
    const formInputs = content.match(/<input[^>]*>/g) || [];
    const inputsWithoutLabels = formInputs.filter(input => !input.includes('id=') && !input.includes('aria-label='));
    
    if (inputsWithoutLabels.length > 0) {
      accessibility.score -= inputsWithoutLabels.length * 5;
      accessibility.issues.push(`${inputsWithoutLabels.length} form inputs without labels`);
      accessibility.recommendations.push('Add labels or aria-labels to all form inputs');
    }
    
    // Check for semantic HTML
    const semanticTags = ['<nav>', '<main>', '<article>', '<section>', '<aside>', '<header>', '<footer>'];
    const hasSemanticTags = semanticTags.some(tag => content.includes(tag));
    
    if (!hasSemanticTags) {
      accessibility.score -= 15;
      accessibility.issues.push('No semantic HTML tags found');
      accessibility.recommendations.push('Use semantic HTML tags for better structure');
    }
    
    // Check for skip links
    if (!content.includes('skip') && !content.includes('skip-link')) {
      accessibility.score -= 10;
      accessibility.issues.push('No skip navigation link');
      accessibility.recommendations.push('Add a skip navigation link for keyboard users');
    }
    
    // Check for focus indicators
    if (!content.includes('focus') && !content.includes('outline')) {
      accessibility.score -= 5;
      accessibility.issues.push('No focus indicators found');
      accessibility.recommendations.push('Ensure focus indicators are visible');
    }
    
    return accessibility;
  }

  analyzePerformance(content) {
    const performance = {
      score: 100,
      issues: [],
      recommendations: []
    };
    
    // Check for external resources
    const externalScripts = content.match(/src="https?:\/\//g) || [];
    const externalStyles = content.match(/href="https?:\/\//g) || [];
    
    if (externalScripts.length > 3) {
      performance.score -= 10;
      performance.issues.push(`${externalScripts.length} external scripts`);
      performance.recommendations.push('Consider bundling external scripts');
    }
    
    if (externalStyles.length > 2) {
      performance.score -= 10;
      performance.issues.push(`${externalStyles.length} external stylesheets`);
      performance.recommendations.push('Consider bundling external stylesheets');
    }
    
    // Check for inline styles
    const inlineStyles = content.match(/style="/g) || [];
    if (inlineStyles.length > 5) {
      performance.score -= 5;
      performance.issues.push(`${inlineStyles.length} inline styles`);
      performance.recommendations.push('Move inline styles to external stylesheets');
    }
    
    // Check for inline scripts
    const inlineScripts = content.match(/<script[^>]*>/g) || [];
    if (inlineScripts.length > 2) {
      performance.score -= 5;
      performance.issues.push(`${inlineScripts.length} inline scripts`);
      performance.recommendations.push('Move inline scripts to external files');
    }
    
    return performance;
  }

  async generateReport(htmlFiles) {
    this.log('📊 Generating SEO and accessibility report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      files: htmlFiles,
      summary: {
        totalFiles: htmlFiles.length,
        averageSEOScore: 0,
        averageAccessibilityScore: 0,
        averagePerformanceScore: 0
      }
    };

    // Calculate averages
    if (htmlFiles.length > 0) {
      const totalSEOScore = htmlFiles.reduce((sum, file) => sum + (file.seo?.score || 0), 0);
      const totalAccessibilityScore = htmlFiles.reduce((sum, file) => sum + (file.accessibility?.score || 0), 0);
      const totalPerformanceScore = htmlFiles.reduce((sum, file) => sum + (file.performance?.score || 0), 0);
      
      report.summary.averageSEOScore = Math.round(totalSEOScore / htmlFiles.length);
      report.summary.averageAccessibilityScore = Math.round(totalAccessibilityScore / htmlFiles.length);
      report.summary.averagePerformanceScore = Math.round(totalPerformanceScore / htmlFiles.length);
    }

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 SEO and accessibility report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async run() {
    this.log('🚀 Starting SEO and Accessibility Checker...');
    
    try {
      // 1. Find HTML files
      const htmlFiles = await this.checkHTMLFiles();
      
      // 2. Analyze each HTML file
      for (let i = 0; i < htmlFiles.length; i++) {
        htmlFiles[i] = await this.analyzeHTMLFile(htmlFiles[i]);
      }
      
      // 3. Generate comprehensive report
      const report = await this.generateReport(htmlFiles);
      
      // 4. Log summary
      this.log('\n📊 SEO and Accessibility Summary:');
      this.log(`Total HTML files: ${htmlFiles.length}`);
      this.log(`Average SEO Score: ${report.summary.averageSEOScore}/100`);
      this.log(`Average Accessibility Score: ${report.summary.averageAccessibilityScore}/100`);
      this.log(`Average Performance Score: ${report.summary.averagePerformanceScore}/100`);
      
      this.log('✅ SEO and accessibility checking completed successfully!');
      
      return report;
      
    } catch (error) {
      this.log(`❌ SEO and accessibility checking failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the SEO and accessibility checker
if (require.main === module) {
  const checker = new SEOAccessibilityChecker();
  checker.run().catch(error => {
    console.error('SEO and accessibility checker failed:', error);
    process.exit(1);
  });
}

module.exports = SEOAccessibilityChecker;