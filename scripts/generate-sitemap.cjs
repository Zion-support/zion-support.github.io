
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
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
=======
const baseUrl = 'https://ziontechgroup.com';
const pages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'weekly', priority: '0.9' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/pricing', changefreq: 'weekly', priority: '0.8' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

<<<<<<< HEAD
  // Add static pages;
  STATIC_PAGES.forEach(page => {})
    urls.push({})
      "loc": `${BASE_URL}${page}`,`""
      "lastmod": currentDate,""
      "changefreq": page ===  ? 'daily' : 'weekly',
      "priority": page ===  ? '1.0' : '0.8
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
      const relativePath = file.replace('pages/', ).replace('.tsx', ).replace('.js', );`;
      const url = `${BASE_URL}/${relativePath}`;`
      
        "loc": url,""
        "changefreq": 'monthly',
        "priority": '0.6
      })})}

  // Generate XML;`;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>""
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">"
</urlset>`;
${urls.map(url => `  <url>`})
</url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>"
  </url>").join('\n')};
</urlset>";""`;
=======
generateSitemap();
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
