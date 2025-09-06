<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");"const BASE_URL = "https: /ziontechgroup.com";"const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");/ Static pages that should be included in sitemap"const STATIC_PAGES = [""," "/about"," "/services"," "/solutions"," "/products"," "/pricing"," "/contact"," "/privacy"," "/terms"," "/cookies"," "/careers"," "/blog"," "/case-studies"," "/whitepapers"," "/webinars"," "/events"," "/news"," "/support"," "/docs"," "/api"," "/ai-services"," "/it-services"," "/micro-saas"," "/cybersecurity"," "/cloud-services"," "/digital-transformation"];/ Dynamic pages patterns"const DYNAMIC_PATTERNS = ["pages/services/*.tsx"," "pages/solutions/*.tsx"," "pages/products/*.tsx"];function generateSitemap() { const urls = []; const currentDate = new Date().toISOString(); / Add static pages STATIC_PAGES.forEach(page => { urls.push({" loc: `${BASE_URL}${page}`," lastmod: currentDate,"" changefreq: page === "" ? "daily" : "weekly","" priority: page === "" ? "1.0" : "0.8" })}); / Add dynamic pages DYNAMIC_PATTERNS.forEach(pattern => { const files = glob.sync(pattern); files.forEach(file => { / Skip index files and special pages" if (file.includes("index.") | file.includes("_app.") | file.includes("_document.")) { return} / Convert file path to URL" const relativePath = file.replace("pages/", "").replace(".tsx", "").replace(".js", "");` const url = `${BASE_URL}/${relativePath}`; urls.push({" loc: url," lastmod: currentDate,"" changefreq: "monthly","" priority: "0.6" })})}); / Generate XML"` const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"<urlset xmlns="http: /www.sitemaps.org/schemas/sitemap/0.9">`${urls.map(url => ` <url> <loc>${url.loc}</loc> <lastmod>${url.lastmod}</lastmod> <changefreq>${url.changefreq}</changefreq> <priority>${url.priority}</priority>"" </url>").join("\n")}"</urlset>"; / Write sitemap" fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");` console.log(` Sitemap generated with ${urls.length} URLs`);"` console.log(` Location: ${SITEMAP_PATH}`)}if (require.main === module) { generateSitemap()}module.exports = { generateSitemap };""`"`
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
#!/usr/bin/env node;
;const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
;
/**;
 * Generate sitemap for the website;
 */;
class SitemapGenerator {;
  constructor() {;
    this.baseUrl = 'http:s://zion.app';    this.pages = [];
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate sitemap for the website
 */
class SitemapGenerator {
  constructor() {
<<<<<<< HEAD
<<<<<<< HEAD
    this.baseUrl = 'https: //zion.app', this.pages = [],
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
    this.outputFile = path.join(__dirname, '..', 'public', 'sitemap.xml');
=======
<<<<<<< HEAD
    this.baseUrl = 'https: //zion.app', this.pages = [],
    this.outputFile = path.join(__dirname, '..', 'public', 'sitemap.xml');
=======
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zion.app';
    this.pages = [];
    this.sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
  }

  async generateSitemap() {
    console.log('🗺️ Generating sitemap...');

    try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip special directories
          if (!['api', '_app', '_document', '_error'].includes(item)) {
            this.scanDirectory(fullPath, `${basePath}/${item}`);
          }
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
          // Skip special files
          if (!['_app.js', '_app.jsx', '_app.ts', '_app.tsx', '_document.js', '_document.jsx', '_document.ts', '_document.tsx', '_error.js', '_error.jsx', '_error.ts', '_error.tsx'].includes(item)) {
            let pagePath = basePath;
            if (item === 'index.js' || item === 'index.jsx' || item === 'index.ts' || item === 'index.tsx') {
              // Index file
            } else {
              pagePath = `${basePath}/${item.replace(/\.(js|jsx|ts|tsx)$/, '')}`;
            }
            
            // Handle dynamic routes
            pagePath = pagePath.replace(/\[([^\]]+)\]/g, ':$1');
            
            this.pages.push({
              url: `${this.baseUrl}${pagePath}`,
              lastmod: new Date().toISOString().split('T')[0],
              changefreq: 'weekly',
              priority: pagePath === '' ? '1.0' : '0.8'
            });
          }
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
    }
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
    });
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
  }
}

// Run if called directly
if (require.main === module) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const generator = new SitemapGenerator(),
    generator.generateSitemap().catch(console.error)
  }

module.exports = SitemapGenerator;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
const glob = require('glob');
/**
 * Generate sitemap.xml for better SEO;
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
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
  const generator = new SitemapGenerator();
  generator.generate().catch(console.error);
}

module.exports = SitemapGenerator;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
