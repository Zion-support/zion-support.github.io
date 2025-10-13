const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://ziontechgroup.com';
const OUTPUT_DIR = './dist';
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(OUTPUT_DIR, 'robots.txt');

// Static routes
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.8', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.5', changefreq: 'weekly' }
];

// AI Services routes
const aiServices = [
  'ai-analytics', 'ai-automation', 'ai-content-generation', 'ai-customer-support',
  'ai-cybersecurity', 'ai-business-intelligence', 'ai-chatbot-builder', 'ai-code-assistant',
  'ai-computer-vision', 'ai-data-analytics', 'ai-marketing-automation', 'ai-predictive-analytics'
];

// IT Services routes
const itServices = [
  'cloud-services', 'cybersecurity', 'web-development', 'mobile-development',
  'database-management', 'custom-development', 'network-infrastructure', 'data-analytics'
];

// Micro SAAS routes
const microSaas = [
  'zion-analytics-pro', 'zion-security-shield', 'zion-cloud-vault', 'zion-content-studio',
  'zion-data-sync', 'zion-lead-magnet', 'zion-project-master', 'zion-email-automation'
];

// 5G Solutions routes
const fiveGServices = [
  '5g-solutions', '5g-implementation', '5g-edge-computing', '5g-iot-solutions',
  '5g-smart-city-solutions', '5g-private-networks', '5g-data-analytics', '5g-mobile-applications'
];

// Generate routes with priorities
const generateRoutes = () => {
  const routes = [...staticRoutes];
  
  // Add AI services
  aiServices.forEach(service => {
    routes.push({
      url: `/${service}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });
  
  // Add IT services
  itServices.forEach(service => {
    routes.push({
      url: `/${service}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });
  
  // Add Micro SAAS
  microSaas.forEach(service => {
    routes.push({
      url: `/${service}`,
      priority: '0.6',
      changefreq: 'monthly'
    });
  });
  
  // Add 5G services
  fiveGServices.forEach(service => {
    routes.push({
      url: `/${service}`,
      priority: '0.6',
      changefreq: 'monthly'
    });
  });
  
  return routes;
};

// Generate XML sitemap
const generateSitemap = (routes) => {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += '</urlset>';
  return sitemap;
};

// Generate robots.txt
const generateRobots = () => {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

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
Allow: /blog
Allow: /case-studies
`;
};

// Main execution
const main = () => {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate routes
    const routes = generateRoutes();
    console.log(`Generated ${routes.length} routes for sitemap`);

    // Generate sitemap
    const sitemap = generateSitemap(routes);
    fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
    console.log(`Sitemap generated: ${SITEMAP_PATH}`);

    // Generate robots.txt
    const robots = generateRobots();
    fs.writeFileSync(ROBOTS_PATH, robots, 'utf8');
    console.log(`Robots.txt generated: ${ROBOTS_PATH}`);

    // Generate sitemap index for large sites (if needed)
    if (routes.length > 50000) {
      console.log('Large sitemap detected, consider splitting into multiple files');
    }

    console.log('Sitemap generation completed successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

main();