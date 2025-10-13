const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/careers', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/cloud-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/custom-development', priority: '0.7', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.7', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.7', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-marketing-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.7', changefreq: 'weekly' },
  { url: '/zion-content-studio', priority: '0.7', changefreq: 'weekly' }
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
function generateRobots() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /ai-services
Allow: /it-services
Allow: /contact
Allow: /blog
Allow: /pricing
Allow: /careers
Allow: /consultation`;
}

// Write files
try {
  const sitemap = generateSitemap();
  const robots = generateRobots();
  
  // Ensure dist directory exists
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  // Write sitemap.xml
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('Generated sitemap.xml');
  
  // Write robots.txt
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
  console.log('Generated robots.txt');
  
  console.log(`Generated sitemap with ${routes.length} routes`);
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}