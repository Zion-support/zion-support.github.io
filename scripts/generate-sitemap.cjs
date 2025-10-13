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
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
    
    // AI Services
    { url: '/ai-analytics', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-content-generation', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-customer-service', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-cybersecurity', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-data-analytics', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
    
    // IT Services
    { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'monthly' },
    { url: '/cybersecurity-solutions', priority: '0.7', changefreq: 'monthly' },
    { url: '/web-development', priority: '0.7', changefreq: 'monthly' },
    { url: '/mobile-development', priority: '0.7', changefreq: 'monthly' },
    { url: '/database-management', priority: '0.7', changefreq: 'monthly' },
    { url: '/custom-software', priority: '0.7', changefreq: 'monthly' },
    { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
    
    // Micro SAAS
    { url: '/zion-analytics-pro', priority: '0.6', changefreq: 'monthly' },
    { url: '/zion-security-shield', priority: '0.6', changefreq: 'monthly' },
    { url: '/zion-cloud-vault', priority: '0.6', changefreq: 'monthly' },
    { url: '/zion-content-studio', priority: '0.6', changefreq: 'monthly' },
    
    // 5G Solutions
    { url: '/5g-data-analytics', priority: '0.6', changefreq: 'monthly' },
    { url: '/5g-edge-computing', priority: '0.6', changefreq: 'monthly' },
    { url: '/5g-implementation', priority: '0.6', changefreq: 'monthly' },
    { url: '/5g-mobile-applications', priority: '0.6', changefreq: 'monthly' },
    { url: '/5g-network-infrastructure', priority: '0.6', changefreq: 'monthly' },
    { url: '/5g-private-networks', priority: '0.6', changefreq: 'monthly' },
    { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'monthly' },
    { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'monthly' }
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
  console.log('Sitemap generated successfully!');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
  console.log('Robots.txt generated successfully!');
};

// Run the generation
generateSitemap();
generateRobotsTxt();
