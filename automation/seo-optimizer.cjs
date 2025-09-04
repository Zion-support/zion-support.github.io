#!/usr/bin/env node

/**
 * SEO Optimizer
 * Analyzes and optimizes SEO aspects of the application
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'seo-optimization-report.json');
    this.results = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      recommendations: [],
      metrics: {}
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const icons = { 'INFO': 'ℹ️', 'SUCCESS': '✅', 'ERROR': '❌', 'WARNING': '⚠️' };
    console.log(`${icons[level]} [${timestamp}] ${message}`);
  }

  async analyzeMetaTags() {
    this.log('Analyzing meta tags...');
    try {
      const pagesDir = path.join(this.projectRoot, 'pages');
      const metaIssues = [];
      
      if (fs.existsSync(pagesDir)) {
        const pages = this.findPageFiles(pagesDir);
        
        for (const page of pages) {
          const content = fs.readFileSync(page, 'utf8');
          const issues = this.checkMetaTags(content, page);
          metaIssues.push(...issues);
        }
      }
      
      this.results.optimizations.push({
        type: 'meta_tags_analysis',
        status: 'completed',
        issues: metaIssues
      });
      
      this.log(`Meta tags analysis completed: ${metaIssues.length} issues found`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Meta tags analysis failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  checkMetaTags(content, filePath) {
    const issues = [];
    
    // Check for title tag
    if (!content.includes('<title>') && !content.includes('title:')) {
      issues.push({
        type: 'missing_title',
        file: filePath,
        suggestion: 'Add a title tag or title property'
      });
    }
    
    // Check for meta description
    if (!content.includes('meta name="description"') && !content.includes('description:')) {
      issues.push({
        type: 'missing_description',
        file: filePath,
        suggestion: 'Add a meta description'
      });
    }
    
    // Check for Open Graph tags
    if (!content.includes('property="og:title"')) {
      issues.push({
        type: 'missing_og_title',
        file: filePath,
        suggestion: 'Add Open Graph title'
      });
    }
    
    if (!content.includes('property="og:description"')) {
      issues.push({
        type: 'missing_og_description',
        file: filePath,
        suggestion: 'Add Open Graph description'
      });
    }
    
    return issues;
  }

  findPageFiles(dir) {
    const pageFiles = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const scanDirectory = (currentDir) => {
      if (!fs.existsSync(currentDir)) return;
      
      const files = fs.readdirSync(currentDir);
      for (const file of files) {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.')) {
          scanDirectory(filePath);
        } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
          pageFiles.push(filePath);
        }
      }
    };
    
    scanDirectory(dir);
    return pageFiles;
  }

  async analyzeHeadings() {
    this.log('Analyzing heading structure...');
    try {
      const pagesDir = path.join(this.projectRoot, 'pages');
      const headingIssues = [];
      
      if (fs.existsSync(pagesDir)) {
        const pages = this.findPageFiles(pagesDir);
        
        for (const page of pages) {
          const content = fs.readFileSync(page, 'utf8');
          const issues = this.checkHeadingStructure(content, page);
          headingIssues.push(...issues);
        }
      }
      
      this.results.optimizations.push({
        type: 'heading_analysis',
        status: 'completed',
        issues: headingIssues
      });
      
      this.log(`Heading analysis completed: ${headingIssues.length} issues found`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Heading analysis failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  checkHeadingStructure(content, filePath) {
    const issues = [];
    const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
    const headings = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        level: parseInt(match[1]),
        text: match[2].trim()
      });
    }
    
    // Check for missing H1
    if (headings.length > 0 && !headings.some(h => h.level === 1)) {
      issues.push({
        type: 'missing_h1',
        file: filePath,
        suggestion: 'Add an H1 heading for better SEO'
      });
    }
    
    // Check for heading hierarchy
    let lastLevel = 0;
    for (const heading of headings) {
      if (heading.level > lastLevel + 1) {
        issues.push({
          type: 'heading_hierarchy',
          file: filePath,
          suggestion: `Heading H${heading.level} should not skip levels after H${lastLevel}`
        });
      }
      lastLevel = heading.level;
    }
    
    return issues;
  }

  async analyzeImages() {
    this.log('Analyzing image SEO...');
    try {
      const pagesDir = path.join(this.projectRoot, 'pages');
      const imageIssues = [];
      
      if (fs.existsSync(pagesDir)) {
        const pages = this.findPageFiles(pagesDir);
        
        for (const page of pages) {
          const content = fs.readFileSync(page, 'utf8');
          const issues = this.checkImageSEO(content, page);
          imageIssues.push(...issues);
        }
      }
      
      this.results.optimizations.push({
        type: 'image_seo_analysis',
        status: 'completed',
        issues: imageIssues
      });
      
      this.log(`Image SEO analysis completed: ${imageIssues.length} issues found`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Image SEO analysis failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  checkImageSEO(content, filePath) {
    const issues = [];
    const imgRegex = /<img[^>]*>/gi;
    const images = [];
    let match;
    
    while ((match = imgRegex.exec(content)) !== null) {
      images.push(match[0]);
    }
    
    for (const img of images) {
      // Check for alt attribute
      if (!img.includes('alt=')) {
        issues.push({
          type: 'missing_alt',
          file: filePath,
          suggestion: 'Add alt attribute to image for accessibility and SEO'
        });
      }
      
      // Check for title attribute
      if (!img.includes('title=')) {
        issues.push({
          type: 'missing_title',
          file: filePath,
          suggestion: 'Consider adding title attribute to image'
        });
      }
    }
    
    return issues;
  }

  async generateSitemap() {
    this.log('Generating sitemap...');
    try {
      const sitemapPath = path.join(this.projectRoot, 'public', 'sitemap.xml');
      const pagesDir = path.join(this.projectRoot, 'pages');
      
      if (fs.existsSync(pagesDir)) {
        const pages = this.findPageFiles(pagesDir);
        const sitemap = this.createSitemap(pages);
        
        // Ensure public directory exists
        const publicDir = path.join(this.projectRoot, 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        
        fs.writeFileSync(sitemapPath, sitemap);
        
        this.results.optimizations.push({
          type: 'sitemap_generation',
          status: 'completed',
          sitemapPath: sitemapPath
        });
        
        this.log(`Sitemap generated: ${sitemapPath}`, 'SUCCESS');
        return true;
      }
      
      this.log('No pages directory found', 'WARNING');
      return false;
    } catch (error) {
      this.log(`Sitemap generation failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  createSitemap(pages) {
    const baseUrl = 'https://ziontechgroup.com';
    const now = new Date().toISOString();
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add homepage
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}</loc>\n`;
    sitemap += `    <lastmod>${now}</lastmod>\n`;
    sitemap += '    <changefreq>daily</changefreq>\n';
    sitemap += '    <priority>1.0</priority>\n';
    sitemap += '  </url>\n';
    
    // Add other pages
    for (const page of pages) {
      const relativePath = path.relative(path.join(this.projectRoot, 'pages'), page);
      const url = relativePath.replace(/\.(js|jsx|ts|tsx)$/, '').replace(/\\/g, '/');
      
      if (url !== 'index') {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}/${url}</loc>\n`;
        sitemap += `    <lastmod>${now}</lastmod>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        sitemap += '    <priority>0.8</priority>\n';
        sitemap += '  </url>\n';
      }
    }
    
    sitemap += '</urlset>';
    return sitemap;
  }

  async generateRecommendations() {
    this.log('Generating SEO recommendations...');
    
    const allIssues = this.results.optimizations.flatMap(opt => opt.issues || []);
    
    // Group issues by type
    const issueTypes = {};
    for (const issue of allIssues) {
      if (!issueTypes[issue.type]) {
        issueTypes[issue.type] = [];
      }
      issueTypes[issue.type].push(issue);
    }
    
    // Generate recommendations based on issue types
    for (const [type, issues] of Object.entries(issueTypes)) {
      this.results.recommendations.push({
        type: type,
        count: issues.length,
        priority: issues.length > 5 ? 'high' : issues.length > 2 ? 'medium' : 'low',
        suggestion: this.getRecommendationForType(type, issues.length)
      });
    }
    
    this.log(`Generated ${this.results.recommendations.length} SEO recommendations`, 'SUCCESS');
  }

  getRecommendationForType(type, count) {
    const recommendations = {
      'missing_title': `Add title tags to ${count} pages`,
      'missing_description': `Add meta descriptions to ${count} pages`,
      'missing_og_title': `Add Open Graph titles to ${count} pages`,
      'missing_og_description': `Add Open Graph descriptions to ${count} pages`,
      'missing_h1': `Add H1 headings to ${count} pages`,
      'heading_hierarchy': `Fix heading hierarchy in ${count} pages`,
      'missing_alt': `Add alt attributes to ${count} images`,
      'missing_title': `Add title attributes to ${count} images`
    };
    
    return recommendations[type] || `Fix ${type} issues in ${count} locations`;
  }

  async runOptimization() {
    this.log('🚀 Starting SEO Optimization...');
    
    const optimizations = [
      { name: 'Meta Tags Analysis', fn: () => this.analyzeMetaTags() },
      { name: 'Heading Structure Analysis', fn: () => this.analyzeHeadings() },
      { name: 'Image SEO Analysis', fn: () => this.analyzeImages() },
      { name: 'Sitemap Generation', fn: () => this.generateSitemap() }
    ];

    let successCount = 0;
    for (const optimization of optimizations) {
      try {
        const success = await optimization.fn();
        if (success) successCount++;
      } catch (error) {
        this.log(`Error in ${optimization.name}: ${error.message}`, 'ERROR');
      }
    }

    await this.generateRecommendations();
    await this.saveReport();
    
    this.log(`✅ SEO optimization completed: ${successCount}/${optimizations.length} successful`);
    return { successCount, totalCount: optimizations.length, results: this.results };
  }

  async saveReport() {
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2));
      this.log(`📊 Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to save report: ${error.message}`, 'ERROR');
    }
  }
}

// CLI Interface
async function main() {
  const optimizer = new SEOOptimizer();
  await optimizer.runOptimization();
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = SEOOptimizer;