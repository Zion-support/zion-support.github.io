const fs = require('fs');
const path = require('path');

// Define all the routes in your application
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
  '/ai-automation-platform',
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
  // 5G Solutions
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-implementation',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/5g-smart-city-solutions',
  '/5g-iot-solutions',
  // Micro SAAS Services
  '/project-management-pro',
  '/zion-ai-crm-pro',
  '/zion-inventory-smart',
  '/ai-financial-analytics-pro',
  '/zion-performance-monitor',
  '/zion-ai-marketing-automation',
  '/zion-email-automation',
  '/data-analytics'
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

// Write sitemap to file
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
    
    // Ensure dist directory exists
    const distDir = path.dirname(sitemapPath);
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    fs.writeFileSync(sitemapPath, sitemap);
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
  }
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;

  try {
    const robotsPath = path.join(__dirname, '..', 'dist', 'robots.txt');
    fs.writeFileSync(robotsPath, robotsTxt);
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error.message);
  }
};

// Run the generation
console.log('🚀 Generating sitemap and robots.txt...');
writeSitemap();
generateRobotsTxt();
console.log('✅ SEO files generation completed!');