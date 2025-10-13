const fs = require('fs');
const path = require('path');

// Generate sitemap.xml for better SEO
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  // Define all the routes
  const routes = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    
    // AI Services
    { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-customer-service', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-email-automation', priority: '0.8', changefreq: 'weekly' },
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
    { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-security-shield', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-crm-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-marketing-automation-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-ai-project-manager-pro', priority: '0.8', changefreq: 'weekly' },
    
    // 5G Solutions
    { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' }
  ];
  
  // Generate XML sitemap
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully at public/sitemap.xml');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /micro-saas
Allow: /5g-solutions
Allow: /blog
`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
  console.log('Robots.txt generated successfully at public/robots.txt');
};

// Run the generation
try {
  generateSitemap();
  generateRobotsTxt();
  console.log('SEO files generated successfully!');
} catch (error) {
  console.error('Error generating SEO files:', error);
  process.exit(1);
}