const fs = require('fs');
const path = require('path');

// Generate sitemap
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const routes = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/privacy',
    '/terms',
    '/ai-analytics',
    '/ai-automation',
    '/ai-content-generation',
    '/ai-customer-service',
    '/ai-data-analytics',
    '/ai-email-automation',
    '/ai-fraud-detection',
    '/ai-healthcare',
    '/ai-marketing',
    '/ai-predictive-analytics',
    '/ai-project-management',
    '/ai-recommendation-engine',
    '/ai-sales-automation',
    '/ai-workflow-automation',
    '/cloud-infrastructure',
    '/cybersecurity-solutions',
    '/web-development',
    '/mobile-development',
    '/database-management',
    '/custom-software',
    '/network-infrastructure',
    '/zion-analytics-pro',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/zion-content-studio',
    '/zion-ai-video-generator',
    '/zion-ai-invoice-generator',
    '/zion-ai-customer-insights',
    '/zion-ai-email-analyzer',
    '/zion-smart-inventory-optimizer',
    '/5g-solutions',
    '/5g-data-analytics',
    '/5g-edge-computing',
    '/5g-implementation',
    '/5g-mobile-applications',
    '/5g-network-infrastructure',
    '/5g-private-networks',
    '/5g-smart-city-solutions',
    '/5g-iot-solutions'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
