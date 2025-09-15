#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate sitemap for the website
 */
class SitemapGenerator {
  constructor() {
    this.baseUrl = 'https://zion.app';
    this.pages = [];
    this.outputFile = path.join(__dirname, '..', 'public', 'sitemap.xml');
  }

  async generateSitemap() {
    console.log('🗺️ Generating sitemap...');

    try {
      // Add main pages
      this.addPage('/', '2025-01-01', '1.0');
      this.addPage('/about', '2025-01-01', '0.8');
      this.addPage('/services', '2025-01-01', '0.9');
      this.addPage('/contact', '2025-01-01', '0.7');
      this.addPage('/portfolio', '2025-01-01', '0.8');
      this.addPage('/blog', '2025-01-01', '0.6');

      // Generate XML
      const xml = this.generateXML();

      // Ensure public directory exists
      const publicDir = path.dirname(this.outputFile);
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Write sitemap
      fs.writeFileSync(this.outputFile, xml);

      console.log(`✅ Sitemap generated: ${this.outputFile}`);
      console.log(`📊 Total pages: ${this.pages.length}`);

      return {
        success: true,
        pages: this.pages.length,
        outputFile: this.outputFile,
      };
    } catch (error) {
      console.error('❌ Error generating sitemap:', error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  addPage(url, lastmod, priority) {
    this.pages.push({
      url: `${this.baseUrl}${url}`,
      lastmod,
      priority,
    });
  }

  generateXML() {
    const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    const footer = `</urlset>`;

    const urlEntries = this.pages
      .map(
        page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
      )
      .join('\n');

    return `${header}\n${urlEntries}\n${footer}`;
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new SitemapGenerator();
  generator.generateSitemap().catch(console.error);
}

module.exports = SitemapGenerator;
