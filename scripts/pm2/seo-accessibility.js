#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}

}
}
      });
    },;
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}
      });
    },;
<<<<<<< HEAD

}
}
      });
    },;
=======
    
    try {}
      fs.appendFileSync(this.logFile, logMessage);,
    } catch (error) {}
      _console.error('Failed to write to log file:', error.message);',
    }
  }
  error(message) {}
    this.log(message, 'ERROR');',
    try {}
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);,
    } catch (err) {}
      _console.error('Failed to write to error file:', err.message);',
    }
  }
  async checkSEO() {}
    this.log('Checking SEO metrics...');',
    try {}
      const seoIssues = [];,
      const seoScore = { total: 0, passed: 0, failed: 0 };,
      // Check for meta tags in HTML files;
      const htmlFiles = this.findHtmlFiles();
      for (const file of, htmlFiles) {}
        const content = fs.readFileSync(file, 'utf8');',
        const fileIssues = this.analyzeSEOContent(content, file);,
        seoIssues.push(...fileIssues);,
      }
      // Check for sitemap;
      const sitemapFiles = ['sitemap.xml', 'sitemap.txt', 'public/sitemap.xml'];',
      let sitemapExists = false;,
      for (const sitemap of, sitemapFiles) {}
        if (fs.existsSync(sitemap)) {}
          sitemapExists = true;,
          break;,
        }
      }
      if (!sitemapExists) {}
        seoIssues.push({}),
          type: 'missing_sitemap,',
          severity: 'medium,',
          message: 'No sitemap found,',
          file: 'global'';,
        });,
      }
      // Check for robots.txt;
      if (!fs.existsSync('robots.txt') && !fs.existsSync('public/robots.txt')) {'}
        seoIssues.push({}),
          type: 'missing_robots,',
          severity: 'low,',
          message: 'No robots.txt found,',
          file: 'global'';,
        });,
      }
      // Calculate SEO score;
      const totalChecks = 10; // Adjust based on actual checks;
      const passedChecks = totalChecks - seoIssues.length;
      seoScore.total = totalChecks;
      seoScore.passed = passedChecks;
      seoScore.failed = seoIssues.length;
      this.log(`SEO check completed: ${passedChecks}/${totalChecks} checks passed`);,
      return {}
        success: true,
        issues: seoIssues,
        score: seoScore,
        sitemapExists,
        robotsExists: fs.existsSync('robots.txt') || fs.existsSync('public/robots.txt'),
      };,
    } catch (error) {}
      this.error(`SEO check failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }
  analyzeSEOContent(content, filePath) {}
    const issues = [];,
    // Check for title tag;
    if (!content.includes('<title>') && !content.includes('<title ')) {'}
      issues.push({}),
        type: 'missing_title,',
        severity: 'high,',
        message: 'Missing title tag,',
        file: filePath;,
      });,
    }
    // Check for meta description;
    if (!content.includes('name="description"') && !content.includes('name=\'description\'')) {'}
      issues.push({}),
        type: 'missing_meta_description,',
        severity: 'high,',
        message: 'Missing meta description,',
        file: filePath;,
      });,
    }
    // Check for meta keywords (optional but good, practice),
    if (!content.includes('name="keywords"') && !content.includes('name=\'keywords\'')) {'}
      issues.push({}),
        type: 'missing_meta_keywords,',
        severity: 'low,',
        message: 'Missing meta keywords,',
        file: filePath;,
      });,
    }
    // Check for Open Graph tags;
    if (!content.includes('property="og:title"') && !content.includes('property=\'og:title\'')) {'}
      issues.push({}),
        type: 'missing_og_title,',
        severity: 'medium,',
        message: 'Missing Open Graph title,',
        file: filePath;,
      });,
    }
    // Check for alt attributes on images;
    const imgTags = content.match(/<img[^>]*>/g) || [];,
    for (const imgTag of, imgTags) {}
      if (!imgTag.includes('alt=')) {'}
        issues.push({}),
          type: 'missing_alt_text,',
          severity: 'high,',
          message: 'Image missing alt attribute,',
          file: filePath;,
;        });,
      }
    }
    // Check for form labels
    const inputTags = content.match(/<input[^>]*>/g) || [];
    inputTags.forEach((inputTag, index) => {
      if (!inputTag.includes('id=') && !inputTag.includes('aria-label=')) {
        issues.push({
          file: fileName
          type: 'missing-label'
          severity: 'high'
          message: `Input ${index + 1} missing label or aria-label`
        });
      }
    });
    // Check for button accessibility
    const buttonTags = content.match(/<button[^>]*>/g) || [];
    buttonTags.forEach((buttonTag, index) => {
      if (!buttonTag.includes('aria-label=') && !buttonTag.includes('>') && !buttonTag.includes('</button>')) {
        issues.push({
          file: fileName
          type: 'empty-button'
          severity: 'high'
          message: `Button ${index + 1} appears to be empty`
        });
      }
    });
    // Check for color contrast (basic check)
    const styleTags = content.match(/<style[^>]*>[\s\S]*?<\/style>/g) || [];
    styleTags.forEach(styleTag => {
      if (styleTag.includes('color:') && !styleTag.includes('background-color:')) {
        issues.push({
          file: fileName
          type: 'color-contrast'
          severity: 'medium'
          message: 'Potential color contrast issue - check background colors'
        });
      }
    });
    return issues;
  }
  async checkPerformance() {
    try {
      this.log('⚡ Checking window.window.performance...');
      const performanceIssues = [];
      // Check for large images
      const publicDir = path.join(this.projectRoot, 'public');
      if (fs.existsSync(publicDir)) {
        const imageFiles = this.getImageFiles(publicDir);
        imageFiles.forEach(file => {
          const stats = fs.statSync(file);
          const sizeMB = stats.size / (1024 * 1024);
          if (sizeMB > 1) {
            performanceIssues.push({
              type: 'large-image'
              severity: 'medium'
              message: `Large image detected: ${path.basename(file)} (${sizeMB.toFixed(2)}MB)`
              file: path.basename(file)
              size: sizeMB
            });
          }
        });
      }
      // Check for unused CSS
      const stylesDir = path.join(this.projectRoot, 'styles');
      if (fs.existsSync(stylesDir)) {
        const cssFiles = this.getCSSFiles(stylesDir);
        cssFiles.forEach(file => {
          const content = fs.readFileSync(file, 'utf8');
          const cssSize = content.length;
          if (cssSize > 100000) { // 100KB
            performanceIssues.push({
              type: 'large-css'
              severity: 'low'
              message: `Large CSS file detected: ${path.basename(file)} (${(cssSize/1024).toFixed(2)}KB)`
              file: path.basename(file)
              size: cssSize
            });
          }
        });
      }
      return {
        success: true
        issues: performanceIssues
        totalIssues: performanceIssues.length
      };
    } catch (error) {
      return {
        success: false
        error: error.message
        issues: []
        totalIssues: 0
      };
    }
  },,getPageFiles(dir) {,const files = [],,const scanDirectory = (currentDir) => {,const items = fs.readdirSync(currentDir),items.forEach((item) => {,const fullPath = path.join(currentDir, item);
  }
  getImageFiles(dir) {
    const files = [];
    const scanDirectory = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
          files.push(fullPath);
        }
      });
    };
  };
  getPageFiles(dir) {;
    const files = [];
    const scanDirectory = (currentDir) => {;
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {;
          files.push(fullPath);
        };
      });
    };
    // Calculate overall score
    const totalIssues = seoResult.totalIssues + a11yResult.totalIssues + perfResult.totalIssues;
    const maxScore = 100;
    if (totalIssues === 0) {
      report.summary.overallScore = 100;
    } else if (totalIssues <= 5) {
      report.summary.overallScore = 80;
    } else if (totalIssues <= 10) {
      report.summary.overallScore = 60;
    } else if (totalIssues <= 20) {
      report.summary.overallScore = 40;
    } else {
      report.summary.overallScore = 20;
    }
    // Generate recommendations
    if (seoResult.totalIssues > 0) {
      const highSeverity = seoResult.issues.filter(issue => issue.severity === 'high').length;
      if (highSeverity > 0) {
        report.recommendations.push({
          priority: 'high'
          message: `${highSeverity} high-severity SEO issues found`
          action: 'Fix missing titles, descriptions, and alt attributes'
        });
      }
    }
    if (a11yResult.totalIssues > 0) {
      const highSeverity = a11yResult.issues.filter(issue => issue.severity === 'high').length;
      if (highSeverity > 0) {
        report.recommendations.push({
          priority: 'high'
          message: `${highSeverity} high-severity accessibility issues found`
          action: 'Fix missing labels, alt attributes, and heading structure'
        });
      }
    }
    if (perfResult.totalIssues > 0) {
      report.recommendations.push({
        priority: 'medium'
        message: `${perfResult.totalIssues} performance issues found`
        action: 'Optimize images and CSS files'
      });
    }
    if (!lighthouseResult.success) {
      report.recommendations.push({
        priority: 'low'
        message: 'Lighthouse not available'
        action: 'Install Lighthouse for comprehensive auditing'
      });
    }
    return report;
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
    this.log('🔍 Starting SEO & Accessibility Check...');
    this.log(`Project root: ${this.projectRoot}`);
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      // Run all checks
      const seoResult = await this.checkSEO();
      const a11yResult = await this.checkAccessibility();
      const perfResult = await this.checkPerformance();
      const lighthouseResult = await this.runLighthouseAudit();
      // Generate report
      this.log('📊 Generating SEO & Accessibility report...');
      const report = await this.generateReport(seoResult, a11yResult, perfResult, lighthouseResult);
      // Save report
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary
      this.log('\n📊 SEO & Accessibility Summary:');
      this.log(`SEO Issues: ${report.summary.seoIssues}`);
      this.log(`Accessibility Issues: ${report.summary.accessibilityIssues}`);
      this.log(`Performance Issues: ${report.summary.performanceIssues}`);
      this.log(`Lighthouse Available: ${report.summary.lighthouseAvailable ? 'Yes' : 'No'}`);
      this.log(`Overall Score: ${report.summary.overallScore}/100`);
      this.log(`Duration: ${duration}ms`);
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {
        this.log('\n✨ No issues found!');
      }
    } catch (error) {
      this.log(`❌ Error running SEO & Accessibility check: ${error.message}`);
      process.exit(1);
    }
  }
  const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log 'file': ', error.message)}async checkSEO() {try {this.log('🔍 Checking SEO...')const seoIssues = [];'
}
// Start the automation if this script is run directly;
if (require.main === module) {}
  const scanner = new SEOAccessibilityScanner();,
  scanner.start().catch(error => {}),
    _console.error('SEO and accessibility scanner failed to start:', error);',
    process.exit(1);,
  });
}
>>>>>>> origin/main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class SEOAccessibility {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');
    this.startTime = Date.now()
};
;
