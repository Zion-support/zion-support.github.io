const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  {
    url: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString()
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    url: '/services',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    url: '/pricing',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString()
  },
  {
    url: '/case-studies',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    url: '/careers',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString()
  },
  {
    url: '/partners',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString()
  },
  {
    url: '/support',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString()
  },
  {
    url: '/faq',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString()
  },
  {
    url: '/demo',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    url: '/consultation',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    url: '/micro-saas',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /services/
Allow: /pricing/
Allow: /contact/
Allow: /about/
Allow: /blog/
Allow: /case-studies/`;
};

// Generate sitemap
const sitemap = generateSitemap();
const robotsTxt = generateRobotsTxt();

// Ensure public directory exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');

// Write robots.txt
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('Robots.txt generated successfully');

// Generate sitemap index for multiple sitemaps (if needed in future)
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://ziontechgroup.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);
console.log('Sitemap index generated successfully');