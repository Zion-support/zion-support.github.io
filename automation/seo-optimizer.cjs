#!/usr/bin/env node
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
/**
 * SEO Optimization Script for Zion Tech Group
 * Analyzes and optimizes SEO aspects of the application
 */

const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.report = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      recommendations: [],
      metrics: {}
    };
  }

  log(message, type = 'INFO') {
    const icons = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌', WARNING: '⚠️' };
    console.log(`${icons[type]} ${message}`);
  }

  async optimize() {
    this.log('Starting SEO Optimizer...', 'INFO');
    
    try {
      await this.analyzeMetaTags();
      await this.analyzeHeadings();
      await this.analyzeImages();
      await this.analyzeLinks();
      await this.analyzeSitemap();
      this.generateReport();
      
      this.log('SEO optimization complete!', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`SEO optimization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async analyzeMetaTags() {
    this.log('Analyzing meta tags...', 'INFO');
    
    const htmlFiles = this.findHtmlFiles('dist');
    let metaIssues = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for title tag
      if (!content.includes('<title>')) {
        this.report.recommendations.push({
          type: 'meta_tags',
          message: `Missing title tag in ${file}`,
          priority: 'high'
        });
        metaIssues++;
      }
      
      // Check for meta description
      if (!content.includes('name="description"')) {
        this.report.recommendations.push({
          type: 'meta_tags',
          message: `Missing meta description in ${file}`,
          priority: 'high'
        });
        metaIssues++;
      }
      
      // Check for viewport meta tag
      if (!content.includes('name="viewport"')) {
        this.report.recommendations.push({
          type: 'meta_tags',
          message: `Missing viewport meta tag in ${file}`,
          priority: 'medium'
        });
        metaIssues++;
      }
    }
    
    this.log(`📊 SEO optimization completed! Report saved to: ${reportPath}`);
    this.log(`🔍 SEO Score: ${report.seoScore}% (${successfulOptimizations}/${seoOptimizations.length} optimizations successful)`);
    
    return report;
  }
}
<<<<<<< HEAD
// Generate SEO report
const report = {
  "timestamp": new Date().toISOString(),
  "checks": seoChecks.map(check => ({
    name: check.name,
    status: 'completed',
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};
    "status": 'completed'})),
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}
const reportFile = path.join(reportsDir, `seo-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
console.log(`📄 SEO report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" SEO Optimizer Starting.\n");/ SEO optimization tasksconst seoChecks = [{" name: "Meta Tags Check"," action: () => {" console.log(" Checking meta tags.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let metaTagCount = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); if (" content.includes("<Head>") |" content.includes("<title>") |" content.includes("meta") ) { metaTagCount++; } }); console.log(`Found meta tags in ${metaTagCount}/${pages.length} pages`); } }}, {"" name: "Sitemap Check"," action: () => {" console.log(" Checking sitemap.");" const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml"); if (fs.existsSync(sitemapPath)) {" console.log(" Sitemap found"); } else {" console.log(" Sitemap not found - consider creating one"); } }}, {"" name: "Robots.txt Check"," action: () => {" console.log(" Checking robots.txt.");" const robotsPath = path.join(process.cwd(), "public", "robots.txt"); if (fs.existsSync(robotsPath)) {" console.log(" Robots.txt found"); } else {" console.log(" Robots.txt not found - consider creating one"); } }}, {"" name: "Structured Data Check"," action: () => {" console.log(" Checking structured data.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let structuredDataCount = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); if (" content.includes("application/ld+json") |" content.includes("schema.org") ) { structuredDataCount++; } }); console.log(` `Found structured data in ${structuredDataCount}/${pages.length} pages` ); } }}, {"" name: "Alt Text Check"," action: () => {" console.log(" Checking image alt text.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let imagesWithAlt = 0; let totalImages = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); const imgTags = content.match(/<img[^>]*>/g) | []; totalImages += imgTags.length; imgTags.forEach(img => {" if (img.includes("alt=")) { imagesWithAlt++; } }); });"` console.log(`Images with alt text: ${imagesWithAlt}/${totalImages}`); } }}, {"" name: "Heading Structure Check"," action: () => {" console.log(" Checking heading structure.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let h1Count = 0; let h2Count = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); h1Count += (content.match(/<h1[^>]*>/g) | []).length; h2Count += (content.match(/<h2[^>]*>/g) | []).length; });"` console.log(`H1 tags: ${h1Count}, H2 tags: ${h2Count}`); } }},];/ Run SEO checkslet successCount = 0;let totalCount = seoChecks.length;for (const check of seoChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n SEO Optimization Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate SEO reportconst report = {" timestamp: new Date().toISOString()," checks: seoChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `seo-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` SEO report saved to: ${reportFile}`);'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
console.log(' SEO Optimizer Starting...\n')
    "name"
    "name"
    "name"
    "name"
    "name"
    "name"
<<<<<<< HEAD
    "status"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    "status"
=======
/**
 * SEO Optimizer
 * Automatically optimizes SEO for the application
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'seo-optimizer.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  async analyzeHeadings() {
    this.log('Analyzing heading structure...', 'INFO');
    
    const htmlFiles = this.findHtmlFiles('dist');
    let headingIssues = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for h1 tag
      const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
      if (h1Count === 0) {
        this.report.recommendations.push({
          type: 'headings',
          message: `Missing h1 tag in ${file}`,
          priority: 'high'
        });
        headingIssues++;
      } else if (h1Count > 1) {
        this.report.recommendations.push({
          type: 'headings',
          message: `Multiple h1 tags (${h1Count}) in ${file}`,
          priority: 'medium'
        });
        headingIssues++;
      }
    }
    
    if (headingIssues === 0) {
      this.log('Heading structure looks good!', 'SUCCESS');
    } else {
      this.log(`Found ${headingIssues} heading issues`, 'WARNING');
    }
  }

  async analyzeImages() {
    this.log('Analyzing images...', 'INFO');
    
    const htmlFiles = this.findHtmlFiles('dist');
    let imageIssues = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const imgTags = content.match(/<img[^>]*>/gi) || [];
      
      for (const imgTag of imgTags) {
        // Check for alt attribute
        if (!imgTag.includes('alt=')) {
          this.report.recommendations.push({
            type: 'images',
            message: `Image missing alt attribute in ${file}`,
            priority: 'high'
          });
          imageIssues++;
        }
      }
    }
    
    if (imageIssues === 0) {
      this.log('Images look good!', 'SUCCESS');
    } else {
      this.log(`Found ${imageIssues} image issues`, 'WARNING');
    }
  }

  async analyzeLinks() {
    this.log('Analyzing links...', 'INFO');
    
    const htmlFiles = this.findHtmlFiles('dist');
    let linkIssues = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const links = content.match(/<a[^>]*>/gi) || [];
      
      for (const link of links) {
        // Check for external links without rel="noopener"
        if (link.includes('href="http') && !link.includes('rel=')) {
          this.report.recommendations.push({
            type: 'links',
            message: `External link missing rel="noopener" in ${file}`,
            priority: 'medium'
          });
          linkIssues++;
        }
      }
    }
    
    if (linkIssues === 0) {
      this.log('Links look good!', 'SUCCESS');
    } else {
      this.log(`Found ${linkIssues} link issues`, 'WARNING');
    }
  }

  async analyzeSitemap() {
    this.log('Analyzing sitemap...', 'INFO');
    
    if (fs.existsSync('dist/sitemap.xml')) {
      this.log('Sitemap found!', 'SUCCESS');
      this.report.optimizations.push({
        type: 'sitemap',
        message: 'Sitemap.xml is present'
      });
    } else {
      this.report.recommendations.push({
        type: 'sitemap',
        message: 'Consider adding a sitemap.xml',
        priority: 'medium'
      });
    }
    
    if (fs.existsSync('dist/robots.txt')) {
      this.log('Robots.txt found!', 'SUCCESS');
      this.report.optimizations.push({
        type: 'robots',
        message: 'robots.txt is present'
      });
    } else {
      this.report.recommendations.push({
        type: 'robots',
        message: 'Consider adding a robots.txt',
        priority: 'low'
      });
    }
  }

  findHtmlFiles(dir) {
    const htmlFiles = [];
    
    if (!fs.existsSync(dir)) {
      return htmlFiles;
    }
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        htmlFiles.push(...this.findHtmlFiles(fullPath));
      } else if (file.isFile() && file.name.endsWith('.html')) {
        htmlFiles.push(fullPath);
      }
    }
    
    return htmlFiles;
  }

  generateReport() {
    const reportPath = 'seo-optimization-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    this.log(`SEO report saved to ${reportPath}`, 'SUCCESS');
  }
}

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.optimize().then(success => {
    process.exit(success ? 0 : 1);
  });
}
<<<<<<< HEAD
module.exports = SEOOptimizer;
=======

module.exports = SEOOptimizer;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

// Run SEO optimization
const optimizer = new SEOOptimizer();
optimizer.optimizeSEO().catch(console.error);
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
