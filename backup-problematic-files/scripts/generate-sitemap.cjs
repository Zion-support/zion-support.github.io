


#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");"const BASE_URL = "https: /ziontechgroup.com";"const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");/ Static pages that should be included in sitemap"const STATIC_PAGES = [""," "/about"," "/services"," "/solutions"," "/products"," "/pricing"," "/contact"," "/privacy"," "/terms"," "/cookies"," "/careers"," "/blog"," "/case-studies"," "/whitepapers"," "/webinars"," "/events"," "/news"," "/support"," "/docs"," "/api"," "/ai-services"," "/it-services"," "/micro-saas"," "/cybersecurity"," "/cloud-services"," "/digital-transformation"];/ Dynamic pages patterns"const DYNAMIC_PATTERNS = ["pages/services/*.tsx"," "pages/solutions/*.tsx"," "pages/products/*.tsx"];function generateSitemap() { const urls = []; const currentDate = new Date().toISOString(); / Add static pages STATIC_PAGES.forEach(page => { urls.push({" loc: `${BASE_URL}${page}`," lastmod: currentDate,"" changefreq: page === "" ? "daily" : "weekly","" priority: page === "" ? "1.0" : "0.8" })}); / Add dynamic pages DYNAMIC_PATTERNS.forEach(pattern => { const files = glob.sync(pattern); files.forEach(file => { / Skip index files and special pages" if (file.includes("index.") | file.includes("_app.") | file.includes("_document.")) { return} / Convert file path to URL" const relativePath = file.replace("pages/", "").replace(".tsx", "").replace(".js", "");` const url = `${BASE_URL}/${relativePath}`; urls.push({" loc: url," lastmod: currentDate,"" changefreq: "monthly","" priority: "0.6" })})}); / Generate XML"` const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"<urlset xmlns="http: /www.sitemaps.org/schemas/sitemap/0.9">`${urls.map(url => ` <url> <loc>${url.loc}</loc> <lastmod>${url.lastmod}</lastmod> <changefreq>${url.changefreq}</changefreq> <priority>${url.priority}</priority>"" </url>").join("\n")}"</urlset>"; / Write sitemap" fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");` console.log(` Sitemap generated with ${urls.length} URLs`);"` console.log(` Location: ${SITEMAP_PATH}`)}if (require.main === module) { generateSitemap()}module.exports = { generateSitemap };""`"`

#!/usr/bin/env node;
;const fs = require('fs');
const path = require('path');


#!/usr/bin/env node
const fs = require('fs');


#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
/**
 * Generate sitemap for the website
 */
/**
 * Generate sitemap for the website
 */
const BASE_URL = '"https": //ziontechgroup.com';
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
// Static pages that should be included in sitemap;
const STATIC_PAGES = ['',]
  '/about',
  '/services',
  '/solutions',
  '/products',
  '/pricing',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/careers',
  '/blog',
  '/case-studies',
  '/whitepapers',
  '/webinars',
  '/events',
  '/news',
  '/support',
  '/docs',
  '/api',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/cybersecurity',
  '/cloud-services',
  '/digital-transformation'
];
// Dynamic pages patterns;
const DYNAMIC_PATTERNS = ['pages/services/*.tsx',]
  'pages/solutions/*.tsx',
  'pages/products/*.tsx'
];
function generateSitemap() {}
  const urls = [];
  const currentDate = new Date().toISOString();
  // Add static pages;
  STATIC_PAGES.forEach(page => {})
    urls.push({})
      "loc": `${BASE_URL}${page}`,`
      "lastmod": currentDate,
      "changefreq": page === '' ? 'daily' : 'weekly',
      "priority": page === '' ? '1.0' : '0.8'
    })}
});
  // Add dynamic pages;
  DYNAMIC_PATTERNS.forEach(pattern => {})
    const files = glob.sync(pattern);
    files.forEach(file => {})
      // Skip index files and special pages;
      if (file.includes('index.') || file.includes('_app.') || file.includes('_document.')) {}
        return};
      // Convert file path to URL;
      const relativePath = file.replace('pages/', '').replace('.tsx', '').replace('.js', '');
      const url = `${BASE_URL}/${relativePath}`;`
      urls.push({})
        "loc": url,
        "lastmod": currentDate,
        "changefreq": 'monthly',
        "priority": '0.6'
      })})}
});
  // Generate XML;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>`})
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>").join('\n')};
</urlset>";
  // Write sitemap;
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
  }
if (require.main === module) {
  generateSitemap()}
module.exports = { generateSitemap };
  console.log(`✓ Sitemap generated with ${urls.length} URLs`);
  console.log(`  "Location": ${SITEMAP_PATH}`)};
if (require.main === module) {}
  generateSitemap()};
module.exports = { generateSitemap };
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

        page => `  <url>
</url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>

    return `${header}\n${urlEntries}\n${footer}`;

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

}

// Run if called directly
if (require.main === module) {


}
// Run if called directly
if (require.main === module) {
    const generator = new SitemapGenerator(),
    generator.generateSitemap().catch(console.error)
  }

module.exports = SitemapGenerator;

/**
 * Generate sitemap for the website
 */

}

module.exports = SitemapGenerator;
/**
 * Generate sitemap for the website
 */
  const generator = new SitemapGenerator();
  generator.generate().catch(console.error);
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
}

module.exports = SitemapGenerator;
/**
 * Generate sitemap for the website
 */
// Static pages that should be included in sitemap;
  '/about',
  '/services',
  '/solutions',
  '/products',
  '/pricing',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/careers',
  '/blog',
  '/case-studies',
  '/whitepapers',
  '/webinars',
  '/events',
  '/news',
  '/support',
  '/docs',
  '/api',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/cybersecurity',
  '/cloud-services',
  '/digital-transformation'
];
// Dynamic pages patterns;
  'pages/solutions/*.tsx',
  'pages/products/*.tsx'
];
function generateSitemap() {}
  // Add static pages;
  STATIC_PAGES.forEach(page => {})
    urls.push({})
      "loc": `${BASE_URL}${page}`,`
      "lastmod": currentDate,
      "changefreq": page === '' ? 'daily' : 'weekly',
      "priority": page === '' ? '1.0' : '0.8'
    })}
});
  // Add dynamic pages;
  DYNAMIC_PATTERNS.forEach(pattern => {})
    files.forEach(file => {})
      // Skip index files and special pages;
      if (file.includes('index.') || file.includes('_app.') || file.includes('_document.')) {}
        return};
      // Convert file path to URL;
      urls.push({})
        "loc": url,
        "lastmod": currentDate,
        "changefreq": 'monthly',
        "priority": '0.6'
      })})}
});
  // Generate XML;
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>`})
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>").join('\n')};
</urlset>";
  // Write sitemap;
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
  }
if (require.main === module) {
  generateSitemap()}
module.exports = { generateSitemap };
  console.log(`✓ Sitemap generated with ${urls.length} URLs`);
  console.log(`  "Location": ${SITEMAP_PATH}`)};
if (require.main === module) {}
  generateSitemap()};
module.exports = { generateSitemap };
  const generator = new SitemapGenerator();
  generator.run().catch(console.error);
}

module.exports = SitemapGenerator;
