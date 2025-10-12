const fs = require('fs');
const path = require('path');

console.log('Generating sitemap...');

// Define all the routes in your application
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },
  // AI Services
  { url: '/ai-content-generator', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-chatbot-builder', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-analytics-dashboard', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-email-assistant', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-voice-assistant', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-3d-generation', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-drug-discovery-pro', priority: '0.6', changefreq: 'monthly' },
  // IT Services
  { url: '/cloud-migration', priority: '0.6', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.6', changefreq: 'monthly' },
  { url: '/devops-cicd', priority: '0.6', changefreq: 'monthly' },
  { url: '/data-analytics', priority: '0.6', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.6', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.6', changefreq: 'monthly' },
  { url: '/quantum-computing-solutions', priority: '0.6', changefreq: 'monthly' },
  // Micro SAAS Services
  { url: '/ai-task-manager', priority: '0.5', changefreq: 'monthly' },
  { url: '/ai-expense-tracker', priority: '0.5', changefreq: 'monthly' },
  { url: '/ai-password-manager', priority: '0.5', changefreq: 'monthly' },
  { url: '/ai-invoice-generator', priority: '0.5', changefreq: 'monthly' },
  { url: '/ai-health-tracker', priority: '0.5', changefreq: 'monthly' },
  { url: '/ai-smart-calendar', priority: '0.5', changefreq: 'monthly' },
  { url: '/ai-climate-solutions-pro', priority: '0.5', changefreq: 'monthly' },
  // 5G Services
  { url: '/5g-network-infrastructure', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'monthly' }
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Generate XML sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist folder
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully at: /workspace/dist/sitemap.xml');