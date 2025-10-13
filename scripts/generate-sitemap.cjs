const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/tutorials',
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
  '/ai-voice-cloning-studio',
  '/ai-quantum-financial-oracle',
  '/ai-space-mission-optimizer',
  '/zion-ai-neural-interface',
  '/quantum-computing-solutions',
  '/it-services',
  '/cloud-services',
  '/cloud-infrastructure',
  '/cybersecurity',
  '/cybersecurity-solutions',
  '/custom-development',
  '/web-development',
  '/mobile-development',
  '/database-management',
  '/5g-implementation',
  '/5g-edge-computing',
  '/5g-iot-solutions',
  '/5g-smart-city-solutions',
  '/5g-private-networks',
  '/5g-data-analytics',
  '/case-studies',
  '/careers',
  '/press',
  '/partners',
  '/docs',
  '/gdpr',
  '/security'
];

const baseUrl = 'https://ziontechgroup.com';

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
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
    console.log(`📊 Generated sitemap with ${routes.length} URLs`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
writeSitemap();
