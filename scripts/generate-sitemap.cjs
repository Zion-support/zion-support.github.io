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

  /**
   * Add a page to the sitemap
   */
  addPage(url, lastmod = null, changefreq = 'monthly', priority = '0.8') {
    this.pages.push({
      url: url.startsWith('/') ? `${this.baseUrl}${url}` : url,
      lastmod: lastmod || new Date().toISOString().split('T')[0],
      changefreq,
      priority
    });
  }

  /**
   * Scan the app directory for pages
   */
  scanPages() {
    const appDir = path.join(process.cwd(), 'app');
    
    if (!fs.existsSync(appDir)) {
      console.log('App directory not found, using default pages');
      this.addDefaultPages();
      return;
    }

    this.scanDirectory(appDir, '');
  }

  /**
   * Scan directory recursively for pages
   */
  scanDirectory(dir, basePath) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.join(basePath, item.name);
      
      if (item.isDirectory()) {
        // Skip special Next.js directories
        if (!['api', '_components', '_lib', '_utils'].includes(item.name)) {
          this.scanDirectory(fullPath, relativePath);
        }
      } else if (item.name === 'page.tsx' || item.name === 'page.js') {
        // Found a page
        const pagePath = basePath === '' ? '/' : `/${basePath}`;
        this.addPage(pagePath);
      }
    }
  }

  /**
   * Add default pages if app directory scanning fails
   */
  addDefaultPages() {
    const defaultPages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.6', changefreq: 'weekly' }
    ];

    defaultPages.forEach(page => {
      this.addPage(page.url, null, page.changefreq, page.priority);
    });
  }

  /**
   * Generate XML sitemap
   */
  generateXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    this.pages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${page.url}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    return xml;
  }

  /**
   * Save sitemap to file
   */
  async save() {
    try {
      // Ensure public directory exists
      const publicDir = path.dirname(this.sitemapPath);
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const xml = this.generateXML();
      fs.writeFileSync(this.sitemapPath, xml, 'utf8');
      
      console.log(`✅ Sitemap generated successfully: ${this.sitemapPath}`);
      console.log(`📄 Generated ${this.pages.length} pages`);
      
      return true;
    } catch (error) {
      console.error('❌ Error generating sitemap:', error.message);
      return false;
    }
  }

  /**
   * Run the sitemap generation
   */
  async run() {
    console.log('🚀 Starting sitemap generation...');
    
    this.scanPages();
    
    if (this.pages.length === 0) {
      console.log('⚠️ No pages found, adding default pages');
      this.addDefaultPages();
    }
    
    const success = await this.save();
    
    if (success) {
      console.log('✅ Sitemap generation completed successfully');
    } else {
      console.log('❌ Sitemap generation failed');
    }
    
    return success;
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new SitemapGenerator();
  generator.run().catch(console.error);
}

module.exports = SitemapGenerator;