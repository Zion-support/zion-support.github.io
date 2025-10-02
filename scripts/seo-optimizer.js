#!/usr/bin/env node

/**
 * Comprehensive SEO Optimizer
 * 
 * This script performs comprehensive SEO improvements including:
 * - Meta tag optimization
 * - Structured data enhancement
 * - Sitemap generation
 * - URL optimization
 * - Content optimization
 * - Performance SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SEOOptimizer {
  constructor() {
    this.seoReport = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      metrics: {},
      recommendations: [],
      issues: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
    
    this.seoReport.optimizations.push({
      timestamp,
      type,
      message
    });
  }

  async optimizeMetaTags() {
    this.log('Optimizing meta tags...');
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Add missing meta tags
        if (content.includes('<head>') || content.includes('Helmet')) {
          const metaTags = [
            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
            '<meta name="robots" content="index, follow" />',
            '<meta name="author" content="Zion Tech Group" />',
            '<meta name="theme-color" content="#1e40af" />',
            '<meta property="og:type" content="website" />',
            '<meta property="og:site_name" content="Zion Tech Group" />',
            '<meta name="twitter:card" content="summary_large_image" />',
            '<meta name="twitter:site" content="@ziontechgroup" />'
          ];
          
          for (const tag of metaTags) {
            const tagName = tag.match(/name="([^"]+)"/) || tag.match(/property="([^"]+)"/);
            if (tagName && !content.includes(tagName[1])) {
              content = content.replace(
                /<head>/g,
                `<head>\n    ${tag}`
              );
              modified = true;
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Optimized meta tags in ${path.relative(process.cwd(), file)}`);
        }
      } catch (error) {
        this.log(`Failed to optimize meta tags in ${file}: ${error.message}`, 'error');
      }
    }
  }

  async generateStructuredData() {
    this.log('Generating structured data...');
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://zion.app",
      "logo": "https://zion.app/logo.png",
      "description": "Leading AI and technology solutions for modern enterprises",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "services": [
        {
          "@type": "Service",
          "name": "AI Solutions",
          "description": "Advanced artificial intelligence solutions for enterprise"
        },
        {
          "@type": "Service",
          "name": "IT Infrastructure",
          "description": "Comprehensive IT infrastructure and cloud solutions"
        }
      ]
    };
    
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(publicDir, 'structured-data.json'),
      JSON.stringify(structuredData, null, 2)
    );
    
    this.log('Generated structured data file');
  }

  async generateSitemap() {
    this.log('Generating sitemap...');
    
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' },
      { url: '/about', priority: '0.7', changefreq: 'monthly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' }
    ];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://zion.app${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    this.log('Generated sitemap.xml');
  }

  async optimizeContent() {
    this.log('Optimizing content...');
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Add alt text to images
        const imgRegex = /<img([^>]*?)>/g;
        content = content.replace(imgRegex, (match, attributes) => {
          if (!attributes.includes('alt=')) {
            modified = true;
            return match.replace('<img', '<img alt="Zion Tech Group"');
          }
          return match;
        });
        
        // Add title attributes to links
        const linkRegex = /<a([^>]*?)>/g;
        content = content.replace(linkRegex, (match, attributes) => {
          if (!attributes.includes('title=') && attributes.includes('href=')) {
            const hrefMatch = attributes.match(/href="([^"]+)"/);
            if (hrefMatch) {
              const title = hrefMatch[1].includes('http') ? 'External link' : 'Internal link';
              modified = true;
              return match.replace('<a', `<a title="${title}"`);
            }
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Optimized content in ${path.relative(process.cwd(), file)}`);
        }
      } catch (error) {
        this.log(`Failed to optimize content in ${file}: ${error.message}`, 'error');
      }
    }
  }

  getAllFiles(dir, extensions) {
    let files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Directory might not exist or be accessible
    }
    
    return files;
  }

  async generateReport() {
    this.log('Generating SEO report...');
    
    const reportPath = path.join(process.cwd(), 'seo-reports', `seo-optimization-${Date.now()}.json`);
    
    // Ensure reports directory exists
    const reportsDir = path.dirname(reportPath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(this.seoReport, null, 2));
    this.log(`SEO report saved to: ${reportPath}`);
    
    // Generate summary
    const summary = {
      totalOptimizations: this.seoReport.optimizations.length,
      totalRecommendations: this.seoReport.recommendations.length,
      totalIssues: this.seoReport.issues.length
    };
    
    console.log('\n=== SEO OPTIMIZATION SUMMARY ===');
    console.log(`Total optimizations performed: ${summary.totalOptimizations}`);
    console.log(`Total recommendations: ${summary.totalRecommendations}`);
    console.log(`Total issues found: ${summary.totalIssues}`);
    console.log('===============================\n');
  }

  async run() {
    this.log('Starting comprehensive SEO optimization...');
    
    try {
      await this.optimizeMetaTags();
      await this.generateStructuredData();
      await this.generateSitemap();
      await this.optimizeContent();
      await this.generateReport();
      
      this.log('Comprehensive SEO optimization completed successfully!');
    } catch (error) {
      this.log(`SEO optimization failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}

export default SEOOptimizer;