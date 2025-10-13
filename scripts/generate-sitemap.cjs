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
  '/data-analytics',
  
  // Micro SAAS
  '/zion-analytics-pro',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-content-studio',
  '/zion-ai-video-generator',
  '/zion-ai-customer-insights',
  '/zion-ai-cybersecurity-suite-pro',
  '/zion-ai-business-intelligence-pro',
  
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

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
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
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
writeSitemap();