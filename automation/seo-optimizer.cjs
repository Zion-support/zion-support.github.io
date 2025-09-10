#!/usr/bin/env node
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
    
    if (metaIssues === 0) {
      this.log('Meta tags look good!', 'SUCCESS');
    } else {
      this.log(`Found ${metaIssues} meta tag issues`, 'WARNING');
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

// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.optimize().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = SEOOptimizer;