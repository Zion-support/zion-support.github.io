

#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");"const BASE_URL = "https: /ziontechgroup.com";"const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");/ Static pages that should be included in sitemap"const STATIC_PAGES = [""," "/about"," "/services"," "/solutions"," "/products"," "/pricing"," "/contact"," "/privacy"," "/terms"," "/cookies"," "/careers"," "/blog"," "/case-studies"," "/whitepapers"," "/webinars"," "/events"," "/news"," "/support"," "/docs"," "/api"," "/ai-services"," "/it-services"," "/micro-saas"," "/cybersecurity"," "/cloud-services"," "/digital-transformation"];/ Dynamic pages patterns"const DYNAMIC_PATTERNS = ["pages/services/*.tsx"," "pages/solutions/*.tsx"," "pages/products/*.tsx"];function generateSitemap() { const urls = []; const currentDate = new Date().toISOString(); / Add static pages STATIC_PAGES.forEach(page => { urls.push({" loc: `${BASE_URL}${page}`," lastmod: currentDate,"" changefreq: page === "" ? "daily" : "weekly","" priority: page === "" ? "1.0" : "0.8" })}); / Add dynamic pages DYNAMIC_PATTERNS.forEach(pattern => { const files = glob.sync(pattern); files.forEach(file => { / Skip index files and special pages" if (file.includes("index.") | file.includes("_app.") | file.includes("_document.")) { return} / Convert file path to URL" const relativePath = file.replace("pages/", "").replace(".tsx", "").replace(".js", "");` const url = `${BASE_URL}/${relativePath}`; urls.push({" loc: url," lastmod: currentDate,"" changefreq: "monthly","" priority: "0.6" })})}); / Generate XML"` const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"<urlset xmlns="http: /www.sitemaps.org/schemas/sitemap/0.9">`${urls.map(url => ` <url> <loc>${url.loc}</loc> <lastmod>${url.lastmod}</lastmod> <changefreq>${url.changefreq}</changefreq> <priority>${url.priority}</priority>"" </url>").join("\n")}"</urlset>"; / Write sitemap" fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");` console.log(` Sitemap generated with ${urls.length} URLs`);"` console.log(` Location: ${SITEMAP_PATH}`)}if (require.main === module) { generateSitemap()}module.exports = { generateSitemap };""`"`

#!/usr/bin/env node;
;const fs = require('fs');
const path = require('path');

=======
=======
>>>>>>> origin/main
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    const generator = new SitemapGenerator(),
    generator.generateSitemap().catch(console.error)
  }

module.exports = SitemapGenerator;

/**
 * Generate sitemap for the website
 */

}

module.exports = SitemapGenerator;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
  const generator = new SitemapGenerator();
  generator.run().catch(console.error);
}

module.exports = SitemapGenerator;
>>>>>>> origin/main
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
