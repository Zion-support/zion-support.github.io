const fs = require('fs');
const path = require('path');

// Generate sitemap.xml for better SEO
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  // Define all the routes
  const routes = [
    // Main pages
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    
    // AI Services
    { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-customer-support', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-data-analytics', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-document-processing', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-marketing-automation', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-voice-assistant', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'monthly' },
    
    // IT Services
    { url: '/cloud-migration', priority: '0.8', changefreq: 'monthly' },
    { url: '/devops-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/it-consulting', priority: '0.8', changefreq: 'monthly' },
    { url: '/network-security', priority: '0.8', changefreq: 'monthly' },
    { url: '/software-development', priority: '0.8', changefreq: 'monthly' },
    { url: '/system-integration', priority: '0.8', changefreq: 'monthly' },
    { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
    
    // 5G Solutions
    { url: '/5g-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-private-networks', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-data-analytics', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-implementation', priority: '0.7', changefreq: 'monthly' },
    
    // Micro SAAS Services
    { url: '/micro-saas-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/project-management-tool', priority: '0.7', changefreq: 'monthly' },
    { url: '/customer-relationship-manager', priority: '0.7', changefreq: 'monthly' },
    { url: '/inventory-management-system', priority: '0.7', changefreq: 'monthly' },
    { url: '/financial-reporting-tool', priority: '0.7', changefreq: 'monthly' },
    { url: '/employee-time-tracker', priority: '0.7', changefreq: 'monthly' },
    { url: '/social-media-scheduler', priority: '0.7', changefreq: 'monthly' },
    { url: '/email-marketing-platform', priority: '0.7', changefreq: 'monthly' },
    { url: '/website-analytics-tool', priority: '0.7', changefreq: 'monthly' },
    { url: '/task-automation-workflow', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-powered-email-analyzer', priority: '0.7', changefreq: 'monthly' },
    { url: '/smart-inventory-optimizer', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-customer-sentiment-tracker', priority: '0.7', changefreq: 'monthly' },
    { url: '/smart-expense-categorizer', priority: '0.7', changefreq: 'monthly' }
  ];

  // Generate sitemap XML
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
  const publicDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap.xml generated successfully!');

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('Robots.txt generated successfully!');
};

generateSitemap();