const fs = require('fs');
const path = require('path');

// Generate sitemap.xml for better SEO
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  // Define all the routes
  const routes = [
    // Main pages
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
    { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },
    
    // AI Services
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-customer-support', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-data-analytics', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-marketing-automation', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-voice-assistant', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'monthly' },
    
    // AI Pro Services
    { url: '/ai-analytics-dashboard-pro', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-cybersecurity-suite-pro', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-content-generation-pro', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-customer-support-chatbot', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-code-assistant-pro', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-business-intelligence-pro', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-automation-platform', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-data-analytics-pro', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-voice-assistant-pro', priority: '0.8', changefreq: 'monthly' },
    { url: '/ai-image-recognition-pro', priority: '0.8', changefreq: 'monthly' },
    
    // IT Services
    { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'monthly' },
    { url: '/blockchain-development', priority: '0.8', changefreq: 'monthly' },
    { url: '/iot-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/ar-vr-development', priority: '0.8', changefreq: 'monthly' },
    { url: '/devops-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
    { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
    
    // 5G Solutions
    { url: '/5g-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/5g-data-analytics', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-implementation', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-private-networks', priority: '0.7', changefreq: 'monthly' },
    { url: '/5g-smart-city-solutions', priority: '0.7', changefreq: 'monthly' },
    
    // Micro SAAS
    { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-analytics-pro', priority: '0.7', changefreq: 'monthly' },
    { url: '/zion-security-shield', priority: '0.7', changefreq: 'monthly' },
    { url: '/zion-cloud-vault', priority: '0.7', changefreq: 'monthly' },
    { url: '/zion-ai-crm-pro', priority: '0.7', changefreq: 'monthly' },
    { url: '/zion-ai-marketing-automation-pro', priority: '0.7', changefreq: 'monthly' },
    { url: '/zion-ai-project-manager-pro', priority: '0.7', changefreq: 'monthly' }
  ];

  // Generate sitemap XML
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
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
  console.log('Sitemap generated successfully!');
};

// Generate robots.txt
const generateRobots = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  const publicDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Robots.txt generated successfully!');
};

// Run the generation
generateSitemap();
generateRobots();