<<<<<<< HEAD
=======
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
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class SEOAccessibility { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "seo-accessibility";" this.checkSEO = process.env.CHECK_SEO === "true";" this.checkAccessibility = process.env.CHECK_ACCESSIBILITY === "true";" this.checkPerformance = process.env.CHECK_PERFORMANCE === "true";" this.lighthouseAudit = process.env.LIGHTHOUSE_AUDIT === "true";" this.logFile = path.join(__dirname, "././logs/pm2/seo-accessibility.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async checkSEO() { if (!this.checkSEO) {" this.log("SEO checking disabled"); return { checked: false }; } try {" this.log("Checking SEO compliance."); const seoIssues = []; const htmlFiles = this.findHTMLFiles(); for (const file of htmlFiles) { try {" const content = fs.readFileSync(file, "utf8"); const issues = this.analyzeSEO(content, file); seoIssues.push(.issues); } catch (err) {` this.log(`Error reading ${file}: ${err.message}`); } }` this.log(`Found ${seoIssues.length} SEO issues`); return { checked: true, issues: seoIssues, totalIssues: seoIssues.length, filesChecked: htmlFiles.length }; } catch (error) {` this.log(`SEO check failed: ${error.message}`); return { checked: false, error: error.message }; } } findHTMLFiles() { const htmlFiles = []; const scanDir = (dir) => { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDir(filePath);" } else if (stat.isFile() && (file.endsWith(".html") | file.endsWith(".htm"))) { htmlFiles.push(filePath); } } } catch (err) {" / Skip directories that can"t be read } }; / Scan common directories" const scanDirs = ["public", "dist", "out", "build", "pages"]; for (const dir of scanDirs) { if (fs.existsSync(dir)) { scanDir(dir); } } return htmlFiles; } analyzeSEO(content, filePath) { const issues = []; / Check for title tag" if (!content.includes("<title>")) { issues.push({ file: filePath," type: "missing_title"," severity: "high"," message: "Missing <title> tag" }); } / Check for meta description" if (!content.includes("name="description"")) { issues.push({ file: filePath," type: "missing_meta_description"," severity: "high"," message: "Missing meta description" }); } / Check for h1 tag" if (!content.includes("<h1>")) { issues.push({ file: filePath," type: "missing_h1"," severity: "medium"," message: "Missing <h1> tag" }); } / Check for alt attributes on images const imgTags = content.match(/<img[^>]*>/g) | []; for (const imgTag of imgTags) {" if (!imgTag.includes("alt=")) { issues.push({ file: filePath," type: "missing_alt_text"," severity: "medium"," message: "Image missing alt attribute" }); } } / Check for lang attribute" if (!content.includes("lang=")) { issues.push({ file: filePath," type: "missing_lang"," severity: "medium"," message: "Missing lang attribute on html tag" }); } / Check for viewport meta tag"" if (!content.includes("name="viewport"")) { issues.push({ file: filePath," type: "missing_viewport"," severity: "high"," message: "Missing viewport meta tag" }); } return issues; } async checkAccessibility() { if (!this.checkAccessibility) {" this.log("Accessibility checking disabled"); return { checked: false }; } try {" this.log("Checking accessibility compliance."); const a11yIssues = []; const htmlFiles = this.findHTMLFiles(); for (const file of htmlFiles) { try {" const content = fs.readFileSync(file, "utf8"); const issues = this.analyzeAccessibility(content, file); a11yIssues.push(.issues); } catch (err) {` this.log(`Error reading ${file}: ${err.message}`); } }` this.log(`Found ${a11yIssues.length} accessibility issues`); return { checked: true, issues: a11yIssues, totalIssues: a11yIssues.length, filesChecked: htmlFiles.length }; } catch (error) {` this.log(`Accessibility check failed: ${error.message}`); return { checked: false, error: error.message }; } } analyzeAccessibility(content, filePath) { const issues = []; / Check for proper heading hierarchy const headings = content.match(/<h[1-6][^>]*>/g) | []; let lastLevel = 0; for (const heading of headings) { const level = parseInt(heading.match(/<h(\d)/)[1]); if (level > lastLevel + 1) { issues.push({ file: filePath," type: "heading_hierarchy"," severity: "medium",` message: `Heading level ${level} follows level ${lastLevel} (skipped levels)` }); } lastLevel = level; } / Check for form labels const inputTags = content.match(/<input[^>]*>/g) | []; for (const inputTag of inputTags) {"" if (inputTag.includes("type=") && !inputTag.includes("type="hidden"")) {" if (!inputTag.includes("aria-label") && !inputTag.includes("aria-labelledby")) {" / Check if there"s a label element nearby (simplified)" const hasLabel = content.includes("</label>"); if (!hasLabel) { issues.push({ file: filePath," type: "missing_form_label"," severity: "high"," message: "Form input missing label or aria-label" }); } } } } / Check for color contrast (simplified - would need actual color analysis) const colorStyles = content.match(/color\s*:\s*[^;]+/g) | []; if (colorStyles.length > 0) { issues.push({ file: filePath," type: "color_contrast_check"," severity: "low"," message: "Manual color contrast check recommended" }); } / Check for keyboard navigation const interactiveElements = content.match(/<button|<a|<input|<select|<textarea/g) | []; const tabIndexElements = content.match(/tabindex/g) | []; if (interactiveElements.length > 0 && tabIndexElements.length === 0) { issues.push({ file: filePath," type: "keyboard_navigation"," severity: "medium"," message: "Consider adding tabindex for keyboard navigation" }); } return issues; } async checkPerformance() { if (!this.checkPerformance) {" this.log("Performance checking disabled"); return { checked: false }; } try {" this.log("Checking performance."); const performanceIssues = []; / Check bundle size" const distDir = "dist"; if (fs.existsSync(distDir)) { const bundleSize = this.calculateBundleSize(distDir); if (bundleSize > 2 * 1024 * 1024) { / 2MB threshold performanceIssues.push({" type: "large_bundle"," severity: "medium",` message: `Bundle size is ${(bundleSize / 1024 / 1024).toFixed(2)}MB (consider code splitting)` }); } } / Check for unoptimized images const imageFiles = this.findImageFiles(); for (const file of imageFiles) { try { const stats = fs.statSync(file); if (stats.size > 500 * 1024) { / 500KB threshold performanceIssues.push({" type: "large_image"," severity: "medium",` message: `Large image file: ${path.basename(file)} (${(stats.size / 1024).toFixed(2)}KB)` }); } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${performanceIssues.length} performance issues`); return { checked: true, issues: performanceIssues, totalIssues: performanceIssues.length }; } catch (error) {` this.log(`Performance check failed: ${error.message}`); return { checked: false, error: error.message }; } } calculateBundleSize(dir) { let totalSize = 0; const scanDir = (currentDir) => { try { const files = fs.readdirSync(currentDir); for (const file of files) { const filePath = path.join(currentDir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { scanDir(filePath);" } else if (stat.isFile() && (file.endsWith(".js") | file.endsWith(".css"))) { totalSize += stat.size; } } } catch (err) {" / Skip directories that can"t be read } }; scanDir(dir); return totalSize; } findImageFiles() { const imageFiles = [];" const extensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]; const scanDir = (dir) => { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDir(filePath); } else if (stat.isFile() && extensions.some(ext => file.toLowerCase().endsWith(ext))) { imageFiles.push(filePath); } } } catch (err) {" / Skip directories that can"t be read } };" const scanDirs = ["public", "dist", "out", "build", "assets", "images"]; for (const dir of scanDirs) { if (fs.existsSync(dir)) { scanDir(dir); } } return imageFiles; } async runLighthouseAudit() { if (!this.lighthouseAudit) {" this.log("Lighthouse audit disabled"); return { audited: false }; } try {" this.log("Running Lighthouse audit."); / Check if Lighthouse is available try {" execSync("npx lighthouse --version", { stdio: "pipe" }); } catch (error) {" this.log("Lighthouse not found, installing.");" execSync("npm install -g lighthouse", { stdio: "pipe" }); } / Run Lighthouse audit (simplified - would need a running server)" this.log("Lighthouse audit requires a running server - skipping for now"); return { audited: false," reason: "No running server available for audit" }; } catch (error) {` this.log(`Lighthouse audit failed: ${error.message}`); return { audited: false, error: error.message }; } } async generateReport() { const report = { timestamp: new Date().toISOString(), processName: this.processName, seo: await this.checkSEO(), accessibility: await this.checkAccessibility(), performance: await this.checkPerformance(), lighthouse: await this.runLighthouseAudit(), environment: { NODE_ENV: process.env.NODE_ENV, checkSEO: this.checkSEO, checkAccessibility: this.checkAccessibility, checkPerformance: this.checkPerformance, lighthouseAudit: this.lighthouseAudit } };" const reportFile = path.join(__dirname, "././logs/pm2/seo-accessibility-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`SEO & Accessibility report generated: ${reportFile}`); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); const totalIssues = (report.seo.totalIssues | 0) (report.accessibility.totalIssues | 0) (report.performance.totalIssues | 0); if (totalIssues === 0) {" this.log("SEO & Accessibility check completed - no issues found"); } else {` this.log(`SEO & Accessibility check completed - found ${totalIssues} issues`); } } catch (error) {` this.log(`SEO & Accessibility check error: ${error.message}`); } }}/ Start the serviceif (require.main === module) { const seoAccessibility = new SEOAccessibility(); seoAccessibility.start().catch(console.error);}module.exports = SEOAccessibility;""`"`
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
#!/usr/bin/env node;
/**
 * PM2 SEO & Accessibility Service;
 * Checks SEO and accessibility compliance;
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class SEOAccessibility {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'seo-accessibility';
    this.checkSEO = process.env.CHECK_SEO === 'true';
    this.checkAccessibility = process.env.CHECK_ACCESSIBILITY === 'true';
    this.checkPerformance = process.env.CHECK_PERFORMANCE === 'true';
    this.lighthouseAudit = process.env.LIGHTHOUSE_AUDIT === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/seo-accessibility.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
=======
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async checkSEO() {}
    if (!this.checkSEO) {}
      this.log('SEO checking disabled');
      return { checked: false };
    };
    try {}
      this.log('Checking SEO compliance...');
      const seoIssues = [];
      const htmlFiles = this.findHTMLFiles();
      for (const file of htmlFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
          const issues = this.analyzeSEO(content, file);
          seoIssues.push(...issues);
        } catch (err) {}
          this.log(`Error reading ${file}: ${err.message}`);
        };
      };
      this.log(`Found ${seoIssues.length} SEO issues`);
      return {}
        checked: true,
        issues: seoIssues,
        totalIssues: seoIssues.length,
        filesChecked: htmlFiles.length;
      };
    } catch (error) {}
      this.log(`SEO check failed: ${error.message}`);
      return { checked: false, error: error.message };
    };
  };
  findHTMLFiles() {}
    const htmlFiles = [];
    const scanDir = (dir) => {}
      try {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && (file.endsWith('.html') || file.endsWith('.htm'))) {}
            htmlFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    // Scan common directories;
    const scanDirs = ['public', 'dist', 'out', 'build', 'pages'];
    for (const dir of scanDirs) {}
      if (fs.existsSync(dir)) {}
        scanDir(dir);
      };
    };
    return htmlFiles;
  };
  analyzeSEO(content, filePath) {}
    const issues = [];
    // Check for title tag;
    if (!content.includes('<title>')) {}
      issues.push({})
        file: filePath,
        type: 'missing_title',
        severity: 'high',
        message: 'Missing <title> tag'
      }
});
    };
    // Check for meta description;
    if (!content.includes('name="description"')) {}
      issues.push({})
        file: filePath,
        type: 'missing_meta_description',
        severity: 'high',
        message: 'Missing meta description'
      }
});
    };
    // Check for h1 tag;
    if (!content.includes('<h1>')) {}
      issues.push({})
        file: filePath,
        type: 'missing_h1',
        severity: 'medium',
        message: 'Missing <h1> tag'
      }
});
    };
    // Check for alt attributes on images;
    const imgTags = content.match(/<img[^>]*>/g) || [];
    for (const imgTag of imgTags) {}
      if (!imgTag.includes('alt=')) {}
        issues.push({})
          file: filePath,
          type: 'missing_alt_text',
          severity: 'medium',
          message: 'Image missing alt attribute'
        }
});
      };
    };
    // Check for lang attribute;
    if (!content.includes('lang=')) {}
      issues.push({})
        file: filePath,
        type: 'missing_lang',
        severity: 'medium',
        message: 'Missing lang attribute on html tag'
      }
});
    };
    // Check for viewport meta tag;
    if (!content.includes('name="viewport"')) {}
      issues.push({})
        file: filePath,
        type: 'missing_viewport',
        severity: 'high',
        message: 'Missing viewport meta tag'
      }
});
    };
    return issues;
  };
  async checkAccessibility() {}
    if (!this.checkAccessibility) {}
      this.log('Accessibility checking disabled');
      return { checked: false };
    };
    try {}
      this.log('Checking accessibility compliance...');
      const a11yIssues = [];
      const htmlFiles = this.findHTMLFiles();
      for (const file of htmlFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
          const issues = this.analyzeAccessibility(content, file);
          a11yIssues.push(...issues);
        } catch (err) {}
          this.log(`Error reading ${file}: ${err.message}`);
        };
      };
      this.log(`Found ${a11yIssues.length} accessibility issues`);
      return {}
        checked: true,
        issues: a11yIssues,
        totalIssues: a11yIssues.length,
        filesChecked: htmlFiles.length;
      };
    } catch (error) {}
      this.log(`Accessibility check failed: ${error.message}`);
      return { checked: false, error: error.message };
    };
  };
  analyzeAccessibility(content, filePath) {}
    const issues = [];
    // Check for proper heading hierarchy;
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    let lastLevel = 0;
    for (const heading of headings) {}
      const level = parseInt(heading.match(/<h(\d)/)[1]);
      if (level > lastLevel + 1) {}
        issues.push({})
          file: filePath,
          type: 'heading_hierarchy',
          severity: 'medium',
          message: `Heading level ${level} follows level ${lastLevel} (skipped levels)
        }
});
      };
      lastLevel = level;
    };
    // Check for form labels;
    const inputTags = content.match(/<input[^>]*>/g) || [];
    for (const inputTag of inputTags) {}
      if (inputTag.includes('type=') && !inputTag.includes('type="hidden"')) {}
        if (!inputTag.includes('aria-label') && !inputTag.includes('aria-labelledby')) {}
          // Check if there's a label element nearby (simplified);
          const hasLabel = content.includes('</label>');
          if (!hasLabel) {}
            issues.push({})
              file: filePath,
              type: 'missing_form_label',
              severity: 'high',
              message: 'Form input missing label or aria-label'
            }
});
          };
        };
      };
    };
    // Check for color contrast (simplified - would need actual color analysis);
    const colorStyles = content.match(/color\s*:\s*[^;]+/g) || [];
    if (colorStyles.length > 0) {}
      issues.push({})
        file: filePath,
        type: 'color_contrast_check',
        severity: 'low',
        message: 'Manual color contrast check recommended'
      }
});
    };
    // Check for keyboard navigation;
    const interactiveElements = content.match(/<button|<a|<input|<select|<textarea/g) || [];
    const tabIndexElements = content.match(/tabindex/g) || [];
    if (interactiveElements.length > 0 && tabIndexElements.length === 0) {}
      issues.push({})
        file: filePath,
        type: 'keyboard_navigation',
        severity: 'medium',
        message: 'Consider adding tabindex for keyboard navigation'
      }
});
    };
    return issues;
  };
  async checkPerformance() {}
    if (!this.checkPerformance) {}
      this.log('Performance checking disabled');
      return { checked: false };
    };
    try {}
      this.log('Checking performance...');
      const performanceIssues = [];
      // Check bundle size;
      const distDir = 'dist';
      if (fs.existsSync(distDir)) {}
        const bundleSize = this.calculateBundleSize(distDir);
        if (bundleSize > 2 * 1024 * 1024) { // 2MB threshold;}
          performanceIssues.push({})
            type: 'large_bundle',
            severity: 'medium',
            message: `Bundle size is ${(bundleSize / 1024 / 1024).toFixed(2)}MB (consider code splitting)
          }
});
        };
      };
      // Check for unoptimized images;
      const imageFiles = this.findImageFiles();
      for (const file of imageFiles) {}
        try {}
          const stats = fs.statSync(file);
          if (stats.size > 500 * 1024) { // 500KB threshold;}
            performanceIssues.push({})
              type: 'large_image',
              severity: 'medium',
              message: `Large image file: ${path.basename(file)} (${(stats.size / 1024).toFixed(2)}KB)
            }
});
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
      this.log(`Found ${performanceIssues.length} performance issues`);
      return {}
        checked: true,
        issues: performanceIssues,
        totalIssues: performanceIssues.length;
      };
    } catch (error) {}
      this.log(`Performance check failed: ${error.message}`);
      return { checked: false, error: error.message };
    };
  };
  calculateBundleSize(dir) {}
    let totalSize = 0;
    const scanDir = (currentDir) => {}
      try {}
        const files = fs.readdirSync(currentDir);
        for (const file of files) {}
          const filePath = path.join(currentDir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {}
            scanDir(filePath);
          } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.css'))) {}
            totalSize += stat.size;
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    scanDir(dir);
    return totalSize;
  };
  findImageFiles() {}
    const imageFiles = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const scanDir = (dir) => {}
      try {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.toLowerCase().endsWith(ext))) {}
            imageFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    const scanDirs = ['public', 'dist', 'out', 'build', 'assets', 'images'];
    for (const dir of scanDirs) {}
      if (fs.existsSync(dir)) {}
        scanDir(dir);
      };
    };
    return imageFiles;
  };
  async runLighthouseAudit() {}
    if (!this.lighthouseAudit) {}
      this.log('Lighthouse audit disabled');
      return { audited: false };
    };
    try {}
      this.log('Running Lighthouse audit...');
      // Check if Lighthouse is available;
      try {}
        execSync('npx lighthouse --version', { stdio: 'pipe' }
});
      } catch (error) {}
        this.log('Lighthouse not found, installing...');
        execSync('npm install -g lighthouse', { stdio: 'pipe' }
});
      };
      // Run Lighthouse audit (simplified - would need a running server);
      this.log('Lighthouse audit requires a running server - skipping for now');
      return {}
        audited: false,
        reason: 'No running server available for audit'
      };
    } catch (error) {}
      this.log(`Lighthouse audit failed: ${error.message}`);
      return { audited: false, error: error.message };
    };
  };
  async generateReport() {}
    const report = {}
      timestamp: new Date().toISOString(),
      processName: this.processName,
      seo: await this.checkSEO(),
      accessibility: await this.checkAccessibility(),
      performance: await this.checkPerformance(),
      lighthouse: await this.runLighthouseAudit(),
      environment: {}
        NODE_ENV: process.env.NODE_ENV,
        checkSEO: this.checkSEO,
        checkAccessibility: this.checkAccessibility,
        checkPerformance: this.checkPerformance,
        lighthouseAudit: this.lighthouseAudit;
      };
    };
    const reportFile = path.join(__dirname, '../../logs/pm2/seo-accessibility-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`SEO & Accessibility report generated: ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
    try {}
      const report = await this.generateReport();
      const totalIssues = (report.seo.totalIssues || 0) + 
                         (report.accessibility.totalIssues || 0) + 
                         (report.performance.totalIssues || 0);
      if (totalIssues === 0) {}
        this.log('SEO & Accessibility check completed - no issues found');
      } else {}
        this.log(`SEO & Accessibility check completed - found ${totalIssues} issues`);
      };
    } catch (error) {}
      this.log(`SEO & Accessibility check error: ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const seoAccessibility = new SEOAccessibility();
  seoAccessibility.start().catch(console.error);
};
<<<<<<< HEAD
module.exports = SEOAccessibility;
=======
module.exports = SEOAccessibility;
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
