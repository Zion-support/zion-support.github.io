const fs = require('fs');
const path = require('path');

// Generate sitemap for the website
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const routes = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/blog',
    '/privacy',
    '/terms',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/tutorials',
    '/demo',
    '/support',
    // AI Services
    '/ai-analytics',
    '/ai-automation',
    '/ai-business-intelligence',
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
    // IT Services
    '/cloud-infrastructure',
    '/cybersecurity-solutions',
    '/web-development',
    '/mobile-development',
    '/database-management',
    '/custom-software',
    '/network-infrastructure',
    // Micro SAAS
    '/zion-analytics-pro',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/zion-content-studio',
    // 5G Solutions
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
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
