const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'weekly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/team', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },
  { url: '/docs', priority: '0.6', changefreq: 'weekly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-processor', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-form-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-voice-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-image-recognition', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-lead-scoring', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-predictive-maintenance', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-price-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-scheduling-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generator', priority: '0.8', changefreq: 'weekly' },
  // IT Services
  { url: '/it-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-solutions', priority: '0.8', changefreq: 'weekly' },
  // Micro SaaS
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/task-manager-pro', priority: '0.7', changefreq: 'weekly' },
  { url: '/analytics-dashboard', priority: '0.7', changefreq: 'weekly' },
  { url: '/customer-support-hub', priority: '0.7', changefreq: 'weekly' },
  { url: '/social-media-scheduler', priority: '0.7', changefreq: 'weekly' },
  { url: '/expense-tracker-pro', priority: '0.7', changefreq: 'weekly' },
  // Additional Services
  { url: '/data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/blockchain-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/iot-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/devops-automation', priority: '0.7', changefreq: 'weekly' },
  { url: '/data-engineering', priority: '0.7', changefreq: 'weekly' },
  { url: '/api-development', priority: '0.7', changefreq: 'weekly' },
  { url: '/security-audit', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/partnerships', priority: '0.6', changefreq: 'monthly' },
  { url: '/demo', priority: '0.7', changefreq: 'weekly' },
  { url: '/help', priority: '0.6', changefreq: 'weekly' },
  { url: '/accessibility', priority: '0.5', changefreq: 'monthly' },
  { url: '/api-docs', priority: '0.6', changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully at:', sitemapPath);
