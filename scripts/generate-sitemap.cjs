const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Define all the routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },

  // AI Services
  { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-processing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-marketing-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-voice-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-code-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-design-studio', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-computer-vision', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-conversational-ai', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-crm', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-insights', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-visualization', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-devops-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-intelligence', priority: '0.8', changefreq: 'weekly' },

  // IT Services
  { url: '/cloud-migration', priority: '0.8', changefreq: 'weekly' },
  { url: '/devops-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-consulting', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-security', priority: '0.8', changefreq: 'weekly' },
  { url: '/software-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/system-integration', priority: '0.8', changefreq: 'weekly' },
  { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-consulting', priority: '0.8', changefreq: 'weekly' },
  { url: '/data-center-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/disaster-recovery', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/managed-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/security-audit', priority: '0.8', changefreq: 'weekly' },
  { url: '/technology-consulting', priority: '0.8', changefreq: 'weekly' },

  // 5G Services
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },

  // Micro SAAS Services
  { url: '/micro-saas-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/project-management-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/customer-relationship-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/inventory-management-system', priority: '0.8', changefreq: 'weekly' },
  { url: '/financial-reporting-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/employee-time-tracker', priority: '0.8', changefreq: 'weekly' },
  { url: '/social-media-scheduler', priority: '0.8', changefreq: 'weekly' },
  { url: '/email-marketing-platform', priority: '0.8', changefreq: 'weekly' },
  { url: '/website-analytics-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/task-automation-workflow', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-powered-email-analyzer', priority: '0.8', changefreq: 'weekly' },
  { url: '/smart-inventory-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-sentiment-tracker', priority: '0.8', changefreq: 'weekly' },
  { url: '/smart-expense-categorizer', priority: '0.8', changefreq: 'weekly' },

  // Zion Products
  { url: '/zion-analytics-pro', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-security-shield', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-cloud-vault', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-crm-pro', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.9', changefreq: 'weekly' },
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
<<<<<<< HEAD
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
<<<<<<< HEAD
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/demo', priority: '0.8', changefreq: 'monthly' },
    { url: '/support', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
    { url: '/sitemap', priority: '0.6', changefreq: 'monthly' },
    
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
    { url: '/zion-content-studio', priority: '0.8', changefreq: 'weekly' },
    
    // 5G Solutions
    { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' }
=======
    { url: '/services', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.6', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/micro-saas', priority: '0.8', changefreq: 'monthly' },
    { url: '/5g-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
=======

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.url}</loc>
>>>>>>> cursor/analyze-improve-and-deploy-application-c69e
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

<<<<<<< HEAD
  const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  
  // Ensure dist directory exists
  const distDir = path.dirname(sitemapPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
<<<<<<< HEAD
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
  
  // Also generate robots.txt
  const robotsTxt = `User-agent: *
=======
  sitemap += `</urlset>`;

  return sitemap;
}

// Write sitemap to file
const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully!');

// Generate robots.txt
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
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml
<<<<<<< HEAD

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services/
Allow: /it-services/
Allow: /micro-saas/
Allow: /5g-solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/

<<<<<<< HEAD
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt generated successfully!');
};

generateSitemap();
=======
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully at dist/sitemap.xml');
};

// Generate robots.txt
const generateRobots = () => {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  const robotsPath = path.join(process.cwd(), 'dist', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Robots.txt generated successfully at dist/robots.txt');
};

// Run the generation
try {
  generateSitemap();
  generateRobots();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
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
