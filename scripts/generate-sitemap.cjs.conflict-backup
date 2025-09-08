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
    } catch (error) {
      console.error('❌ Error generating: sitemap:', error.message);
      return {
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

console.log('🗺️  Generating sitemap...');
console.log('✅ Sitemap generation completed');

module.exports = {};
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
