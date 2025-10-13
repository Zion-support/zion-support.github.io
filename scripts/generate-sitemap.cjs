const fs = require('fs');
const path = require('path');

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    
    // AI Services
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-customer-service', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-healthcare', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-marketing', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-project-management', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-recommendation-engine', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-sales-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },
    
    // IT Services
    { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
    { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
    { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
    { url: '/custom-software', priority: '0.8', changefreq: 'weekly' },
    { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },
    
    // Micro SAAS
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-security-shield', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-content-studio', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-voice-assistant-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-workflow-automation-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-data-warehouse-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-mobile-app-builder-pro', priority: '0.8', changefreq: 'weekly' },
    
    // 5G Solutions
    { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-data-analytics', priority: '0.7', changefreq: 'weekly' },
    { url: '/5g-edge-computing', priority: '0.7', changefreq: 'weekly' },
    { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },
    { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'weekly' },
    { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'weekly' },
    { url: '/5g-private-networks', priority: '0.7', changefreq: 'weekly' },
    { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'weekly' },
    { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'weekly' }
  ];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  // Write sitemap to dist directory
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;

  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
  console.log('Robots.txt generated successfully!');
}

// Run the generation
generateSitemap();
generateRobotsTxt();