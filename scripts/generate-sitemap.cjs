<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");"const BASE_URL = "https: /ziontechgroup.com";"const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");/ Static pages that should be included in sitemap"const STATIC_PAGES = [""," "/about"," "/services"," "/solutions"," "/products"," "/pricing"," "/contact"," "/privacy"," "/terms"," "/cookies"," "/careers"," "/blog"," "/case-studies"," "/whitepapers"," "/webinars"," "/events"," "/news"," "/support"," "/docs"," "/api"," "/ai-services"," "/it-services"," "/micro-saas"," "/cybersecurity"," "/cloud-services"," "/digital-transformation"];/ Dynamic pages patterns"const DYNAMIC_PATTERNS = ["pages/services/*.tsx"," "pages/solutions/*.tsx"," "pages/products/*.tsx"];function generateSitemap() { const urls = []; const currentDate = new Date().toISOString(); / Add static pages STATIC_PAGES.forEach(page => { urls.push({" loc: `${BASE_URL}${page}`," lastmod: currentDate,"" changefreq: page === "" ? "daily" : "weekly","" priority: page === "" ? "1.0" : "0.8" })}); / Add dynamic pages DYNAMIC_PATTERNS.forEach(pattern => { const files = glob.sync(pattern); files.forEach(file => { / Skip index files and special pages" if (file.includes("index.") | file.includes("_app.") | file.includes("_document.")) { return} / Convert file path to URL" const relativePath = file.replace("pages/", "").replace(".tsx", "").replace(".js", "");` const url = `${BASE_URL}/${relativePath}`; urls.push({" loc: url," lastmod: currentDate,"" changefreq: "monthly","" priority: "0.6" })})}); / Generate XML"` const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"<urlset xmlns="http: /www.sitemaps.org/schemas/sitemap/0.9">`${urls.map(url => ` <url> <loc>${url.loc}</loc> <lastmod>${url.lastmod}</lastmod> <changefreq>${url.changefreq}</changefreq> <priority>${url.priority}</priority>"" </url>").join("\n")}"</urlset>"; / Write sitemap" fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");` console.log(` Sitemap generated with ${urls.length} URLs`);"` console.log(` Location: ${SITEMAP_PATH}`)}if (require.main === module) { generateSitemap()}module.exports = { generateSitemap };""`"`
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
  
<<<<<<< HEAD
  
  }

if (require.main === module) {
  generateSitemap()}

module.exports = { generateSitemap };
=======
  console.log(`✓ Sitemap generated with ${urls.length} URLs`);
  console.log(`  "Location": ${SITEMAP_PATH}`)};
if (require.main === module) {}
  generateSitemap()};
module.exports = { generateSitemap };
>>>>>>> main
>>>>>>> main
