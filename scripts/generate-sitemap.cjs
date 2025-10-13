const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  
  // Service pages
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },
  
  // AI Services
  { url: '/ai-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-customer-service', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-cybersecurity', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.7', changefreq: 'monthly' },
  
  // 5G Solutions
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'monthly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
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
};

// Write sitemap to dist folder
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    const distPath = path.join(__dirname, '..', 'dist');
    
    // Ensure dist directory exists
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }
    
    const sitemapPath = path.join(distPath, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
};

// Run the script
writeSitemap();