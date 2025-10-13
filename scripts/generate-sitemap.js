import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  
  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-data-analysis', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-marketing-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-process-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'monthly' },
  
  // Micro SAAS Services
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-security-shield', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-crm-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-marketing-automation-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-ai-project-manager-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-content-studio', priority: '0.8', changefreq: 'monthly' },
  { url: '/project-management-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-inventory-smart', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-financial-analytics-pro', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-performance-monitor', priority: '0.8', changefreq: 'monthly' },
  { url: '/zion-email-automation', priority: '0.8', changefreq: 'monthly' },
  
  // 5G Solutions
  { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'monthly' },
  
  // IT Services
  { url: '/cloud-migration', priority: '0.8', changefreq: 'monthly' },
  { url: '/devops', priority: '0.8', changefreq: 'monthly' },
  { url: '/it-consulting', priority: '0.8', changefreq: 'monthly' },
  { url: '/network-security', priority: '0.8', changefreq: 'monthly' },
  { url: '/custom-software', priority: '0.8', changefreq: 'monthly' },
  { url: '/system-integration', priority: '0.8', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.8', changefreq: 'monthly' },
  
  // Additional AI Services
  { url: '/zion-ai-video-generator', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-invoice-generator', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-insights', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-email-analyzer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-smart-inventory-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-sentiment-tracker', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-smart-expense-categorizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-voice-assistant-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-code-reviewer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-social-media-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-contract-analyzer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-performance-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-churn-predictor', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-supply-chain-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-financial-forecaster', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-content-moderator', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-translator-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-data-cleaner', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-task-scheduler', priority: '0.7', changefreq: 'monthly' },
  { url: '/zion-ai-customer-support-pro', priority: '0.7', changefreq: 'monthly' }
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services/
Allow: /micro-saas/
Allow: /5g-solutions/
Allow: /services/
Allow: /about/
Allow: /contact/
Allow: /blog/

# Block specific file types
Disallow: *.json$
Disallow: *.xml$
Disallow: *.txt$
Disallow: *.log$

# Allow specific file types
Allow: /sitemap.xml
Allow: /robots.txt
Allow: /manifest.json

# Block duplicate content
Disallow: /*?*
Disallow: /*#*

# Block search parameters
Disallow: /*?search=*
Disallow: /*?filter=*
Disallow: /*?sort=*

# Allow social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: BLEXBot
Disallow: /

# Allow Google specifically
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Allow Bing specifically
User-agent: Bingbot
Allow: /
Crawl-delay: 1`;
}

// Write files
function writeFiles() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Write sitemap.xml
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap.xml generated successfully');
  
  // Write robots.txt
  const robots = generateRobotsTxt();
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('✅ Robots.txt generated successfully');
  
  // Generate sitemap index for large sites
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://ziontechgroup.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);
  console.log('✅ Sitemap index generated successfully');
  
  console.log(`\n📊 Generated sitemap with ${routes.length} URLs`);
  console.log('🚀 SEO files are ready for deployment!');
}

// Run the generator
writeFiles();