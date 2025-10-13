const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.9', changefreq: 'monthly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },

  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-customer-service', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-email-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-marketing', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-project-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-recommendation-engine', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-sales-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'monthly' },

  // IT Services
  { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/cloud-native-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/blockchain-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/e-commerce-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/data-engineering', priority: '0.8', changefreq: 'monthly' },
  { url: '/cybersecurity-advanced', priority: '0.8', changefreq: 'monthly' },
  { url: '/cloud-migration-advanced', priority: '0.8', changefreq: 'monthly' },
  { url: '/machine-learning-ops', priority: '0.8', changefreq: 'monthly' },
  { url: '/enterprise-integration', priority: '0.8', changefreq: 'monthly' },
  { url: '/performance-optimization', priority: '0.8', changefreq: 'monthly' },
  { url: '/disaster-recovery-advanced', priority: '0.8', changefreq: 'monthly' },
  { url: '/compliance-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/cloud-cost-optimization', priority: '0.8', changefreq: 'monthly' },
  { url: '/security-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/data-visualization', priority: '0.8', changefreq: 'monthly' },
  { url: '/workflow-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/cloud-native-security', priority: '0.8', changefreq: 'monthly' },
  { url: '/data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/iot-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/devops-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/machine-learning', priority: '0.8', changefreq: 'monthly' },
  { url: '/quantum-computing', priority: '0.8', changefreq: 'monthly' },
  { url: '/robotics', priority: '0.8', changefreq: 'monthly' },

  // Micro SAAS
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-content-studio', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-data-sync', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-lead-magnet', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-project-master', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-email-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-social-scheduler', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-workflow-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-invoice-genius', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-inventory-smart', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-compliance-manager', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-performance-monitor', priority: '0.8', changefreq: 'monthly' },

  // 5G Solutions
  { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'monthly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobots() {
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

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /pricing
Allow: /blog
Allow: /consultation
Allow: /ai-services/
Allow: /micro-saas/
Allow: /5g-solutions/

# Block common bot traps
Disallow: /*.json$
Disallow: /*?*
Disallow: /*#
Disallow: /*.pdf$
Disallow: /*.doc$
Disallow: /*.docx$
Disallow: /*.xls$
Disallow: /*.xlsx$
Disallow: /*.ppt$
Disallow: /*.pptx$`;
}

// Write files
try {
  // Create dist directory if it doesn't exist
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Write sitemap.xml
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('Generated sitemap.xml');

  // Write robots.txt
  const robots = generateRobots();
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
  console.log('Generated robots.txt');

  console.log(`Generated sitemap with ${routes.length} routes`);
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}