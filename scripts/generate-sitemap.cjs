const fs = require('fs');
const path = require('path');

// Get all page routes
function getAllRoutes() {
  const routes = [];
  const appDir = path.join(__dirname, '../app');
  
  // Add main pages
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
    { url: '/demo', priority: '0.8', changefreq: 'monthly' },
    { url: '/support', priority: '0.6', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
    { url: '/sitemap', priority: '0.4', changefreq: 'monthly' },
    { url: '/accessibility', priority: '0.5', changefreq: 'monthly' }
  ];
  
  routes.push(...mainPages);
  
  // Add AI services
  const aiServices = [
    '/ai-services',
    '/ai-analytics',
    '/ai-automation',
    '/ai-content-generation',
    '/ai-customer-service',
    '/ai-cybersecurity',
    '/ai-business-intelligence',
    '/ai-chatbot-enterprise',
    '/ai-code-assistant',
    '/ai-computer-vision',
    '/ai-crm',
    '/ai-data-analytics',
    '/ai-devops-automation',
    '/ai-document-processing',
    '/ai-enterprise-solutions',
    '/ai-marketing-automation',
    '/ai-predictive-analytics',
    '/ai-voice-assistant',
    '/ai-workflow-automation'
  ];
  
  aiServices.forEach(service => {
    routes.push({
      url: service,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });
  
  // Add 5G solutions
  const g5Solutions = [
    '/5g-solutions',
    '/5g-implementation',
    '/5g-edge-computing',
    '/5g-iot-solutions',
    '/5g-smart-city-solutions',
    '/5g-private-networks',
    '/5g-data-analytics',
    '/5g-mobile-applications',
    '/5g-network-infrastructure'
  ];
  
  g5Solutions.forEach(solution => {
    routes.push({
      url: solution,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });
  
  // Add Zion micro SAAS solutions
  const zionSolutions = [
    '/zion-analytics-pro',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/zion-content-studio',
    '/zion-data-sync',
    '/zion-lead-magnet',
    '/zion-project-master',
    '/zion-email-automation',
    '/zion-crm-assistant',
    '/zion-code-assistant',
    '/zion-marketing-automation',
    '/zion-workflow-automation'
  ];
  
  zionSolutions.forEach(solution => {
    routes.push({
      url: solution,
      priority: '0.7',
      changefreq: 'weekly'
    });
  });
  
  // Add IT services
  const itServices = [
    '/cloud-infrastructure',
    '/cybersecurity-solutions',
    '/web-development',
    '/mobile-development',
    '/database-management',
    '/custom-software',
    '/network-infrastructure',
    '/data-analytics',
    '/devops-automation',
    '/api-development',
    '/microservices-architecture',
    '/cloud-migration',
    '/security-audit',
    '/performance-optimization'
  ];
  
  itServices.forEach(service => {
    routes.push({
      url: service,
      priority: '0.7',
      changefreq: 'weekly'
    });
  });
  
  return routes;
}

// Generate sitemap XML
function generateSitemap() {
  const routes = getAllRoutes();
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  sitemap += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  sitemap += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  sitemap += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.xml$

# Allow important pages
Allow: /ai-services/
Allow: /5g-solutions/
Allow: /zion-*/
Allow: /about
Allow: /contact
Allow: /pricing
Allow: /services
Allow: /blog
Allow: /tutorials
Allow: /demo
Allow: /support

# Block duplicate content
Disallow: /?*
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*

# Block search result pages
Disallow: /search?
Disallow: /search/*

# Block file extensions
Disallow: /*.pdf$
Disallow: /*.doc$
Disallow: /*.docx$
Disallow: /*.xls$
Disallow: /*.xlsx$
Disallow: /*.ppt$
Disallow: /*.pptx$

# Allow specific file types
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.ico$`;
}

// Main execution
function main() {
  try {
    // Generate sitemap
    const sitemap = generateSitemap();
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    console.log('Generated sitemap with', getAllRoutes().length, 'routes');
    
    // Generate robots.txt
    const robotsTxt = generateRobotsTxt();
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    fs.writeFileSync(robotsPath, robotsTxt);
    console.log('Generated robots.txt');
    
    console.log('Sitemap generation completed successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateSitemap, generateRobotsTxt, getAllRoutes };