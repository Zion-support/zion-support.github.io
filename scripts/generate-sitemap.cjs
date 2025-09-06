#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate sitemap for the application
 */
class SitemapGenerator {
  constructor() {
    this.baseUrl = 'https://zion.app';
    this.pages = [];
    this.priority = {
      '/': 1.0,
      '/about': 0.8,
      '/services': 0.8,
      '/contact': 0.7,
      '/blog': 0.6,
    };
  }

  async discoverPages() {
    const pagesDir = path.join(process.cwd(), 'pages');
    const appDir = path.join(process.cwd(), 'app');
    
    // Check if using app directory structure
    if (fs.existsSync(appDir)) {
      await this.scanAppDirectory(appDir, '');
    } else if (fs.existsSync(pagesDir)) {
      await this.scanPagesDirectory(pagesDir, '');
    }
    
    // Add static pages
    this.addStaticPages();
  }

  async scanAppDirectory(dir, basePath) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        await this.scanAppDirectory(fullPath, relativePath);
      } else if (item.name === 'page.js' || item.name === 'page.tsx' || item.name === 'page.ts') {
        const route = relativePath.replace(/\/page\.(js|tsx|ts)$/, '') || '/';
        this.pages.push({
          url: route,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: this.priority[route] || 0.5
        });
      }
    }
  }

  async scanPagesDirectory(dir, basePath) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        await this.scanPagesDirectory(fullPath, relativePath);
      } else if (item.name.endsWith('.js') || item.name.endsWith('.tsx') || item.name.endsWith('.ts')) {
        if (item.name !== 'index.js' && item.name !== 'index.tsx' && item.name !== 'index.ts') {
          const route = '/' + relativePath.replace(/\.(js|tsx|ts)$/, '');
          this.pages.push({
            url: route,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: this.priority[route] || 0.5
          });
        } else if (basePath) {
          const route = '/' + basePath.replace(/\/$/, '');
          this.pages.push({
            url: route,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: this.priority[route] || 0.5
          });
        } else {
          this.pages.push({
            url: '/',
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 1.0
          });
        }
      }
    }
  }

  addStaticPages() {
    const staticPages = [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/services', priority: 0.8, changefreq: 'monthly' },
      { url: '/contact', priority: 0.7, changefreq: 'monthly' },
      { url: '/blog', priority: 0.6, changefreq: 'weekly' },
      { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
      { url: '/terms', priority: 0.3, changefreq: 'yearly' },
    ];

    for (const page of staticPages) {
      if (!this.pages.find(p => p.url === page.url)) {
        this.pages.push({
          url: page.url,
          lastmod: new Date().toISOString(),
          changefreq: page.changefreq,
          priority: page.priority
        });
      }
    }
  }

  generateSitemap() {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    for (const page of this.pages) {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${this.baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    }
    
    sitemap += '</urlset>';
    return sitemap;
  }

  async generate() {
    console.log('🗺️ Generating sitemap...');
    
    try {
      await this.discoverPages();
      const sitemap = this.generateSitemap();
      
      const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
      fs.writeFileSync(sitemapPath, sitemap);
      
      console.log(`✅ Sitemap generated successfully: ${sitemapPath}`);
      console.log(`📊 Total pages: ${this.pages.length}`);
      
      return {
        success: true,
        pages: this.pages.length,
        path: sitemapPath
      };
    } catch (error) {
      console.error('❌ Error generating sitemap:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Run the sitemap generator
if (require.main === module) {
  const generator = new SitemapGenerator();
  generator.generate().catch(console.error);
}

module.exports = SitemapGenerator;