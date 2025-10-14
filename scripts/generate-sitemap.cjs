const fs = require('fs');
const path = require('path');

const baseUrl = 'https://zion.app';
const pages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/ai-solutions', changefreq: 'weekly', priority: '0.9' },
  { url: '/it-solutions', changefreq: 'weekly', priority: '0.9' },
  { url: '/micro-saas-solutions', changefreq: 'weekly', priority: '0.9' },
  { url: '/ai-business-intelligence-pro', changefreq: 'weekly', priority: '0.8' },
  { url: '/ai-cybersecurity-suite-pro', changefreq: 'weekly', priority: '0.8' },
  // 5G Services
  { url: '/5g-consulting', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-deployment', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-integration', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-maintenance', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-migration', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-modernization', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-monitoring', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-optimization', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-performance', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-reliability', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-scalability', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-security', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-support', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-testing', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-training', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-transformation', changefreq: 'weekly', priority: '0.8' },
  { url: '/5g-upgrade', changefreq: 'weekly', priority: '0.8' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(
  page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
).join('\n')}
</urlset>`;

  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();