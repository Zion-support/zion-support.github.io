const fs = require('fs');
const path = require('path');

// Define all the routes in your application
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/pricing',
  '/blog',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/ai-analytics',
  '/ai-automation-platform',
  '/ai-climate-prediction-engine',
  '/ai-customer-sentiment-tracker',
  '/ai-data-analytics-pro',
  '/ai-financial-analysis',
  '/ai-healthcare-diagnostics',
  '/ai-holographic-workspace',
  '/ai-hr-recruitment-pro',
  '/ai-image-recognition-pro',
  '/ai-powered-devops',
  '/ai-powered-email-analyzer',
  '/ai-quantum-computing',
  '/ai-supply-chain-optimizer',
  '/ai-translation-service',
  '/zion-analytics',
  '/zion-ai-platform',
  '/zion-security-shield',
  '/5g-network-optimization',
  '/5g-infrastructure',
  '/cloud-infrastructure-management',
  '/cloud-migration-pro',
  '/blockchain-web3',
  '/project-management-saas',
  '/customer-relationship-saas',
  '/inventory-management-saas',
  '/financial-management-saas',
  '/employee-management-saas',
  '/social-media-management-saas',
  '/email-marketing-saas',
  '/website-builder-saas',
  '/task-management-saas',
  '/smart-home-saas',
  '/ai-powered-chatbot-saas'
];

// Generate sitemap.xml
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

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
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

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Robots.txt generated successfully!');
};

// Run the generators
generateSitemap();
generateRobots();