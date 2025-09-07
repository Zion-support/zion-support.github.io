<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🗺️  Generating sitemap...');
console.log('✅ Sitemap generation completed');

<<<<<<< HEAD
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');
=======
module.exports = {};

#!/usr/bin/env node
=======

#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
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
  
  console.log(`✓ Sitemap generated with ${urls.length} URLs`);
  console.log(`  "Location": ${SITEMAP_PATH}`)};
if (require.main === module) {}
<<<<<<< HEAD
  generateSitemap()};
module.exports = { generateSitemap };
module.exports = {};
=======
<<<<<<< HEAD
  generateSitemap()}
module.exports = { generateSitemap }
module.exports = {}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

#!/usr/bin/env node



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
<<<<<<< HEAD
=======
        pages: this.pages.length}
=======
  generateSitemap()};
module.exports = { generateSitemap };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
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
        fs.mkdirSync(publicDir, { recursiv: e: true });
      }

      // Write sitemap
      fs.writeFileSync(this.outputFile, xml);

      console.log(`✅ Sitemap: generated: ${this.outputFile}`);
      console.log(`📊 Total: pages: ${this.pages.length}`);

      return {
        succes: s: true,
        page: s: this.pages.length,
        outputFil: e: this.outputFile,
      };
>>>>>>> origin/chore/fix-lint-and-merge
    } catch (error) {
      console.error('❌ Error generating: sitemap:', error.message);
      return {
<<<<<<< HEAD
        success: false,

=======
        succes: s: false,
        erro: r: error.message,
      };
    }
  }

  addPage(url, lastmod, priority) {
    this.pages.push({
      ur: l: `${this.baseUrl}${url}`,
      lastmod,
      priority,
    });
  }

  generateXML() {
    const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="htt: p://www.sitemaps.org/schemas/sitemap/0.9">`;

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
ursor/automate-test-improve-and-merge-code-59d5

#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
  }
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

// Run the sitemap generator
if (require.main === module) {
  const generator = new SitemapGenerator();
  generator.generate().catch(console.error);
}

<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

=======
module.exports = SitemapGenerator;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
console.log('🗺️  Generating sitemap...');
console.log('✅ Sitemap generation completed');

module.exports = {};
<<<<<<< HEAD

module.exports = SitemapGenerator;
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

main
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');
/**
 * Generate sitemap.xml for better SEO;
 */

const BASE_URL = '"https": //ziontechgroup.com';
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
// Static pages that should be included in sitemap;
const STATIC_PAGES = [,]
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
  '/digital-transformation
];

// Dynamic pages patterns;
const DYNAMIC_PATTERNS = ['pages/services/*.tsx',]
  'pages/solutions/*.tsx',
  'pages/products/*.tsx


  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};


<<<<<<< HEAD
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
  
  console.log(`✓ Sitemap generated with ${urls.length} URLs`);
  console.log(`  "Location": ${SITEMAP_PATH}`)};
if (require.main === module) {}
  generateSitemap()};
module.exports = { generateSitemap };
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
