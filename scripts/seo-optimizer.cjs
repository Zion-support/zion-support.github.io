<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class SEOOptimizer { constructor() { this.projectRoot = process.cwd();" this.reportFile = path.join(__dirname, "./logs/seo-report.json"); }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] [${level}] ${message}`); }"`"`
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.seoIssues = [];
    this.recommendations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async analyzeHTMLFiles() {
    this.log('📄 Analyzing HTML files...');
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
      
      // Check for title tag
      if (!content.includes('<title>')) {
        this.seoIssues.push({
          file: filePath,
          issue: 'Missing title tag',
          severity: 'high'
        });
      }
      
      // Check for meta description
      if (!content.includes('name="description"')) {
        this.seoIssues.push({
          file: filePath,
          issue: 'Missing meta description',
          severity: 'high'
        });
      }
      
      // Check for alt attributes on images
      const imgTags = content.match(/<img[^>]*>/g) || [];
      for (const imgTag of imgTags) {
        if (!imgTag.includes('alt=')) {
          this.seoIssues.push({
            file: filePath,
            issue: 'Image missing alt attribute',
            severity: 'medium'
          });
        }
      }
      
      // Check for heading structure
      const h1Count = (content.match(/<h1[^>]*>/g) || []).length;
      if (h1Count === 0) {
        this.seoIssues.push({
          file: filePath,
          issue: 'Missing H1 tag',
          severity: 'high'
        });
      } else if (h1Count > 1) {
        this.seoIssues.push({
          file: filePath,
          issue: 'Multiple H1 tags',
          severity: 'medium'
        });
      }
      
    } catch (error) {
      this.log(`❌ Error analyzing ${filePath}: ${error.message}`);
    }
  }

  async generateSitemap() {
    this.log('🗺️ Generating sitemap...');
    try {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

      fs.writeFileSync(
        path.join(this.projectRoot, 'public', 'sitemap.xml'),
        sitemap
      );
      
      this.log('✅ Sitemap generated');
    } catch (error) {
      this.log(`❌ Error generating sitemap: ${error.message}`);
    }
  }

  async generateSEOReport() {
    this.log('📋 Generating SEO report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.seoIssues,
      recommendations: [
        'Add title tags to all pages',
        'Include meta descriptions',
        'Add alt attributes to all images',
        'Implement proper heading structure (H1, H2, H3)',
        'Use semantic HTML elements',
        'Optimize page loading speed',
        'Implement structured data markup',
        'Create XML sitemap',
        'Add robots.txt file'
      ]
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'seo-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('📊 SEO report saved to seo-report.json');
  }

  async run() {
    this.log('🔍 Starting SEO Optimization');
    
    await this.analyzeHTMLFiles();
    await this.generateSitemap();
    await this.generateSEOReport();
    
    this.log('✅ SEO optimization completed');
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = SEOOptimizer;
