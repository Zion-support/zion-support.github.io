#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate sitemap for the website
 */
class SitemapGenerator {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zion.app';
    this.pages = [];
    this.sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async discoverPages() {
    this.log('Discovering pages for sitemap...');
    
    // Common pages for a Next.js app
    const commonPages = [
      {
        path: '',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '1.0'
      },
      {
        path: '/about',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8'
      },
      {
        path: '/services',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.9'
      },
      {
        path: '/contact',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.7'
      },
      {
        path: '/blog',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.6'
      },
      {
        path: '/privacy',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        path: '/terms',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'yearly',
        priority: '0.3'
      }
    ];

    this.pages = commonPages.map(page => ({
      url: `${this.baseUrl}${page.path}`,
      lastmod: page.lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    }));

    this.log(`Found ${this.pages.length} pages for sitemap`);
  }

  generateSitemap() {
    this.log('Generating sitemap...');
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    this.pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  }

  async saveSitemap(sitemap) {
    try {
      // Ensure public directory exists
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      fs.writeFileSync(this.sitemapPath, sitemap);
      this.log(`Sitemap saved to ${this.sitemapPath}`, 'SUCCESS');
    } catch (error) {
      this.log(`Error saving sitemap: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async generate() {
    try {
      this.log('🚀 Starting sitemap generation...');
      
      await this.discoverPages();
      const sitemap = this.generateSitemap();
      await this.saveSitemap(sitemap);
      
      this.log('✅ Sitemap generation completed successfully', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Sitemap generation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new SitemapGenerator();
  generator.generate().catch(console.error);
}

module.exports = SitemapGenerator;