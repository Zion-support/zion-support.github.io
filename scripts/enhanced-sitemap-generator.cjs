const fs = require('fs');
const path = require('path');

// Enhanced sitemap generator
function generateSitemap() {
  console.log('🗺️ Generating enhanced sitemap...');
  
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  // Get all page files
  const pages = [];
  
  // Main pages
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
    { url: '/demo', priority: '0.8', changefreq: 'monthly' },
    { url: '/support', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' }
  ];
  
  // Service pages
  const servicePages = [
    { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.7', changefreq: 'weekly' },
    { url: '/it-services', priority: '0.7', changefreq: 'weekly' },
    { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
    { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },
    { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
    { url: '/careers', priority: '0.6', changefreq: 'weekly' }
  ];
  
  // AI solution pages (from the extensive list)
  const aiPages = [
    '/ai-analytics', '/ai-automation', '/ai-chatbot-builder', '/ai-content-generation',
    '/ai-cybersecurity', '/ai-data-analytics', '/ai-customer-support', '/ai-business-intelligence',
    '/ai-computer-vision', '/ai-conversational-ai', '/ai-crm', '/ai-content-management',
    '/ai-api-management', '/ai-automated-testing', '/ai-blockchain-solutions', '/ai-climate-solutions',
    '/ai-code-assistant', '/ai-content-delivery-network', '/ai-customer-insights', '/ai-cybersecurity-suite'
  ].map(url => ({ url, priority: '0.6', changefreq: 'monthly' }));
  
  // 5G solution pages
  const g5Pages = [
    '/5g-solutions', '/5g-data-analytics', '/5g-edge-computing', '/5g-implementation',
    '/5g-iot-solutions', '/5g-mobile-applications', '/5g-network-infrastructure',
    '/5g-private-networks', '/5g-smart-city-solutions'
  ].map(url => ({ url, priority: '0.6', changefreq: 'monthly' }));
  
  // Combine all pages
  const allPages = [...mainPages, ...servicePages, ...aiPages, ...g5Pages];
  
  // Generate sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  allPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
  
  // Write sitemap
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log(`✅ Generated sitemap with ${allPages.length} pages`);
  
  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.xml$
`;
  
  fs.writeFileSync('./public/robots.txt', robotsTxt);
  console.log('✅ Generated robots.txt');
  
  // Generate sitemap index for large sites
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  fs.writeFileSync('./public/sitemap-index.xml', sitemapIndex);
  console.log('✅ Generated sitemap index');
}

generateSitemap();