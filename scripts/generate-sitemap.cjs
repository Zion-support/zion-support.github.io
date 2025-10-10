const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/partners', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/demo', priority: '0.8', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  const baseUrl = 'https://ziontechgroup.com';
  
  let robots = 'User-agent: *\n';
  robots += 'Allow: /\n';
  robots += 'Disallow: /api/\n';
  robots += 'Disallow: /admin/\n';
  robots += 'Disallow: /_next/\n';
  robots += 'Disallow: /static/\n';
  robots += '\n';
  robots += `Sitemap: ${baseUrl}/sitemap.xml\n`;
  robots += `Sitemap: ${baseUrl}/sitemap-index.xml\n`;
  
  return robots;
}

// Generate sitemap index
function generateSitemapIndex() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapIndex += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  sitemapIndex += '  <sitemap>\n';
  sitemapIndex += `    <loc>${baseUrl}/sitemap.xml</loc>\n`;
  sitemapIndex += `    <lastmod>${currentDate}</lastmod>\n`;
  sitemapIndex += '  </sitemap>\n';
  sitemapIndex += '</sitemapindex>';
  
  return sitemapIndex;
}

// Write files
try {
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap());
  console.log('✅ sitemap.xml generated');
  
  // Write robots.txt
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobotsTxt());
  console.log('✅ robots.txt generated');
  
  // Write sitemap-index.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), generateSitemapIndex());
  console.log('✅ sitemap-index.xml generated');
  
  console.log('🎉 Sitemap generation completed successfully!');
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}