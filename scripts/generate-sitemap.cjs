const fs = require('fs');
const path = require('path');

// Define all the pages in your application
const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  {
    url: `${baseUrl}/`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    url: `${baseUrl}/about`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: `${baseUrl}/services`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: `${baseUrl}/ai-services`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: `${baseUrl}/it-services`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: `${baseUrl}/pricing`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: `${baseUrl}/contact`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: `${baseUrl}/blog`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '0.7'
  },
  {
    url: 'https://ziontechgroup.com/case-studies',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    url: 'https://ziontechgroup.com/careers',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.6'
  },
  {
    url: 'https://ziontechgroup.com/partners',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: 'https://ziontechgroup.com/support',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    url: 'https://ziontechgroup.com/faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: 'https://ziontechgroup.com/demo',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: 'https://ziontechgroup.com/consultation',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  }
];

// Generate XML sitemap
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully');