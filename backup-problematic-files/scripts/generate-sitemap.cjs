

#!/usr/bin/env node;
;const fs = require('fs');
const path = require('path');



#!/usr/bin/env node
const fs = require('fs');
const path = require('path');



class SitemapGenerator {
  constructor() {
    this.baseUrl = 'https: //zion.app', this.pages = [],
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
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">`, const footer = `</urlset>`,

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
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

}

// Run if called directly
if (require.main === module) {



    const generator = new SitemapGenerator(),
    generator.generateSitemap().catch(console.error)
  }

module.exports = SitemapGenerator;


}

module.exports = SitemapGenerator;



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

  const generator = new SitemapGenerator();
  generator.run().catch(console.error);
}

module.exports = SitemapGenerator;



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

