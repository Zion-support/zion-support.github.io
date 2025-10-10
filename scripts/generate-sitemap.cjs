const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/it-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.6', changefreq: 'weekly' },
  { path: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { path: '/team', priority: '0.5', changefreq: 'monthly' },
  { path: '/careers', priority: '0.5', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { path: '/docs', priority: '0.6', changefreq: 'monthly' },
  { path: '/api-docs', priority: '0.6', changefreq: 'monthly' },
  { path: '/support', priority: '0.5', changefreq: 'weekly' },
  { path: '/status', priority: '0.4', changefreq: 'daily' },
  { path: '/demo', priority: '0.7', changefreq: 'monthly' },
  { path: '/consultation', priority: '0.8', changefreq: 'monthly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    const publicDir = path.join(__dirname, '..', 'public');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log('✓ Sitemap generated successfully at:', sitemapPath);
    console.log(`✓ Generated sitemap with ${routes.length} URLs`);
  } catch (error) {
    console.error('✗ Error generating sitemap:', error.message);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap };