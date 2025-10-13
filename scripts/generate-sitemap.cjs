const fs = require('fs');
const path = require('path');

// Define all routes for the sitemap
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.8', changefreq: 'monthly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.3', changefreq: 'monthly' },
  
  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
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
  
  // New AI Services
  { url: '/ai-voice-cloning-studio', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-quantum-financial-oracle', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-space-mission-optimizer', priority: '0.8', changefreq: 'weekly' },
  
  // IT Services
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/cloud-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/custom-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/data-analytics', priority: '0.8', changefreq: 'weekly' },
  
  // New IT Services
  { url: '/quantum-computing-solutions', priority: '0.8', changefreq: 'weekly' },
  
  // Micro SAAS
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-content-studio', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-data-sync', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-lead-magnet', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-project-master', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-email-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-social-scheduler', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-workflow-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-invoice-genius', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-inventory-smart', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-compliance-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/zion-performance-monitor', priority: '0.8', changefreq: 'weekly' },
  
  // New Micro SAAS Services
  { url: '/zion-ai-neural-interface', priority: '0.8', changefreq: 'weekly' },
  
  // 5G Solutions
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
  
  // Specialized Services
  { url: '/ai-healthcare-diagnostics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-supply-chain-optimizer', priority: '0.8', changefreq: 'weekly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
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
  
  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
  
  // Ensure dist directory exists
  const distDir = path.dirname(outputPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log('Sitemap generated successfully at:', outputPath);
}

// Generate robots.txt
<<<<<<< HEAD
const robotsTxt = `User-agent: *
>>>>>>> cursor/analyze-improve-and-deploy-application-c69e
=======
// Generate sitemap.xml for better SEO
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  // Define all the routes
  const routes = [
    // Main pages
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/blog', priority: 0.7, changefreq: 'weekly' },
    { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms', priority: 0.3, changefreq: 'yearly' },
    
    // AI Services
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-analytics', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-automation', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-business-intelligence', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-content-generation', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-customer-service', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-data-analytics', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-email-automation', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-fraud-detection', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-healthcare', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-marketing', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-predictive-analytics', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-project-management', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-recommendation-engine', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-sales-automation', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-workflow-automation', priority: 0.8, changefreq: 'monthly' },
    
    // IT Services
    { url: '/cloud-infrastructure', priority: 0.8, changefreq: 'monthly' },
    { url: '/cybersecurity-solutions', priority: 0.8, changefreq: 'monthly' },
    { url: '/web-development', priority: 0.8, changefreq: 'monthly' },
    { url: '/mobile-development', priority: 0.8, changefreq: 'monthly' },
    { url: '/database-management', priority: 0.8, changefreq: 'monthly' },
    { url: '/custom-software', priority: 0.8, changefreq: 'monthly' },
    { url: '/network-infrastructure', priority: 0.8, changefreq: 'monthly' },
    
    // Micro SAAS
    { url: '/micro-saas', priority: 0.9, changefreq: 'weekly' },
    { url: '/zion-analytics-pro', priority: 0.8, changefreq: 'monthly' },
    { url: '/zion-security-shield', priority: 0.8, changefreq: 'monthly' },
    { url: '/zion-cloud-vault', priority: 0.8, changefreq: 'monthly' },
    { url: '/zion-ai-crm-pro', priority: 0.8, changefreq: 'monthly' },
    { url: '/zion-ai-marketing-automation-pro', priority: 0.8, changefreq: 'monthly' },
    { url: '/zion-ai-project-manager-pro', priority: 0.8, changefreq: 'monthly' },
    
    // 5G Solutions
    { url: '/5g-solutions', priority: 0.9, changefreq: 'weekly' },
    { url: '/5g-data-analytics', priority: 0.8, changefreq: 'monthly' },
    { url: '/5g-edge-computing', priority: 0.8, changefreq: 'monthly' },
    { url: '/5g-implementation', priority: 0.8, changefreq: 'monthly' },
    { url: '/5g-mobile-applications', priority: 0.8, changefreq: 'monthly' },
    { url: '/5g-network-infrastructure', priority: 0.8, changefreq: 'monthly' },
    { url: '/5g-private-networks', priority: 0.8, changefreq: 'monthly' },
    { url: '/5g-smart-city-solutions', priority: 0.8, changefreq: 'monthly' },
    { url: '/5g-iot-solutions', priority: 0.8, changefreq: 'monthly' }
  ];

  // Generate XML sitemap
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
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
=======
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
>>>>>>> cursor/analyze-improve-and-deploy-application-9867
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
<<<<<<< HEAD

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
Allow: /it-services
Allow: /micro-saas
Allow: /5g-solutions
Allow: /blog
Allow: /pricing
`;

  const outputPath = path.join(__dirname, '..', 'dist', 'robots.txt');
  fs.writeFileSync(outputPath, robotsTxt, 'utf8');
  console.log('Robots.txt generated successfully at:', outputPath);
}

// Run the generation
try {
  writeSitemap();
  generateRobotsTxt();
  console.log('Sitemap and robots.txt generation completed successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
<<<<<<< HEAD
}
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
=======
# Host
Host: https://ziontechgroup.com`;

const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('Robots.txt generated successfully!');
>>>>>>> cursor/analyze-improve-and-deploy-application-c69e
=======
`;
  
  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('Robots.txt generated successfully!');
};

// Run the generation
generateSitemap();
generateRobotsTxt();
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
=======
}
>>>>>>> cursor/analyze-improve-and-deploy-application-9867
