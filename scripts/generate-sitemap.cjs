const fs = require('fs');
const path = require('path');

// Generate sitemap.xml for better SEO
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const routes = [
    '/',
    '/about',
    '/services',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
    // AI Services
    '/ai-analytics',
    '/ai-automation',
    '/ai-content-generation',
    '/ai-customer-service',
    '/ai-data-analytics',
    '/ai-marketing',
    '/ai-predictive-analytics',
    '/ai-workflow-automation',
    // Micro SAAS Services
    '/zion-analytics-pro',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/ai-powered-email-analyzer',
    '/smart-inventory-optimizer',
    '/ai-customer-sentiment-tracker',
    '/smart-expense-categorizer',
    // 5G Solutions
    '/5g-data-analytics',
    '/5g-edge-computing',
    '/5g-implementation',
    '/5g-mobile-applications',
    '/5g-network-infrastructure',
    '/5g-private-networks',
    '/5g-smart-city-solutions',
    '/5g-iot-solutions',
    // IT Services
    '/web-development',
    '/cloud-infrastructure',
    '/cybersecurity-solutions',
    '/mobile-development',
    '/database-management',
    '/custom-software',
    '/network-infrastructure'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
};

// Generate robots.txt
const generateRobots = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  const robotsPath = path.join(__dirname, '..', 'dist', 'robots.txt');
  fs.writeFileSync(robotsPath, robots);
  console.log('Robots.txt generated successfully at:', robotsPath);
};

// Run generation
generateSitemap();
generateRobots();