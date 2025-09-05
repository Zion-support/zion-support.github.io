const fs = require('fs');
const path = require('path');
const pages = [
  ''
  '/about/services/ai-services/micro-saas/cybersecurity/blockchain/contact/pricing'
  '/faq/terms'
];
const baseUrl = 'https://ziontechgroup.com';
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
  fs.writeFileSync(path.join(process.cwd(), 'publicsitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};
generateSitemap();