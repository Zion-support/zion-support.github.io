const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';

const pages = [
  '',
  '/about',
  '/services',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/contact',
  '/blog',
  '/case-studies',
  '/careers',
  '/pricing',
  '/demo',
  '/consultation',
  '/support',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  '/team',
  '/ai-analytics',
  '/ai-automation',
  '/ai-chatbot-builder',
  '/ai-cybersecurity',
  '/cloud-infrastructure',
  '/cybersecurity-solutions',
  '/web-development',
  '/mobile-development'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();