const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/pricing',
  '/blog',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  
  // AI Services
  '/ai-analytics',
  '/ai-content-generation',
  '/ai-customer-support',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-document-processing',
  '/ai-marketing-automation',
  '/ai-predictive-analytics',
  '/ai-voice-assistant',
  '/ai-workflow-automation',
  
  // IT Services
  '/cloud-migration',
  '/devops-services',
  '/it-consulting',
  '/network-security',
  '/software-development',
  '/system-integration',
  '/web-development',
  
  // Additional pages
  '/case-studies',
  '/team',
  '/careers',
  '/consultation',
  '/docs',
  '/api-docs',
  '/status',
  '/ai-ops',
  '/healthcare-it',
  '/financial-it',
  '/edge-computing',
  '/5g-implementation',
  '/iot-platform'
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
}

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Ensure public directory exists
const publicDir = path.dirname(sitemapPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemapContent);
console.log('Sitemap generated successfully at:', sitemapPath);