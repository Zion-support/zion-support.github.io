const fs = require('fs');
const path = require('path');

// SEO optimization script
const optimizeSEO = () => {
  console.log('🔍 Starting enhanced SEO optimization...');
  
  // 1. Generate sitemap
  console.log('🗺️ Generating enhanced sitemap...');
  
  const pages = [
    { url: 'https://ziontechgroup.com', priority: 1.0, changefreq: 'daily' },
    { url: 'https://ziontechgroup.com/about', priority: 0.8, changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/services', priority: 0.9, changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/contact', priority: 0.7, changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/micro-saas', priority: 0.8, changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/5g-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/blog', priority: 0.6, changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/case-studies', priority: 0.7, changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/careers', priority: 0.6, changefreq: 'monthly' }
  ];
  
  // Add AI services pages
  const aiServices = [
    'ai-analytics', 'ai-content-generation', 'ai-customer-support', 'ai-cybersecurity',
    'ai-data-analytics', 'ai-document-processing', 'ai-marketing-automation',
    'ai-predictive-analytics', 'ai-voice-assistant', 'ai-workflow-automation'
  ];
  
  aiServices.forEach(service => {
    pages.push({
      url: `https://ziontechgroup.com/${service}`,
      priority: 0.7,
      changefreq: 'monthly'
    });
  });
  
  // Add Micro SAAS pages
  const microSaasServices = [
    'project-management-tool', 'team-collaboration', 'analytics-dashboard',
    'customer-relationship', 'inventory-management', 'financial-tracking'
  ];
  
  microSaasServices.forEach(service => {
    pages.push({
      url: `https://ziontechgroup.com/${service}`,
      priority: 0.6,
      changefreq: 'monthly'
    });
  });
  
  // Add 5G Solutions pages
  const fiveGServices = [
    '5g-network-infrastructure', '5g-iot-solutions', '5g-smart-city',
    '5g-edge-computing', '5g-mobile-apps', '5g-data-analytics'
  ];
  
  fiveGServices.forEach(service => {
    pages.push({
      url: `https://ziontechgroup.com/${service}`,
      priority: 0.6,
      changefreq: 'monthly'
    });
  });
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  
  // 2. Generate robots.txt
  console.log('🤖 Generating robots.txt...');
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for better server performance
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
Allow: /services
Allow: /contact
Allow: /ai-services
Allow: /micro-saas
Allow: /5g-solutions
Allow: /blog
Allow: /case-studies
Allow: /careers`;
  
  fs.writeFileSync('./public/robots.txt', robotsTxt);
  
  // 3. Generate SEO report
  const seoReport = {
    timestamp: new Date().toISOString(),
    sitemap: {
      totalPages: pages.length,
      aiServices: aiServices.length,
      microSaas: microSaasServices.length,
      fiveGServices: fiveGServices.length,
      generated: true
    },
    robots: {
      generated: true,
      sitemapIncluded: true
    },
    recommendations: [
      'Add structured data markup to all pages',
      'Implement Open Graph and Twitter Card meta tags',
      'Add canonical URLs to prevent duplicate content',
      'Optimize page titles and meta descriptions',
      'Add breadcrumb navigation',
      'Implement schema markup for business information',
      'Add FAQ schema for common questions',
      'Optimize images with alt text and proper sizing'
    ]
  };
  
  fs.writeFileSync('./seo-optimization-report.json', JSON.stringify(seoReport, null, 2));
  
  console.log('✅ SEO optimization completed!');
  console.log('📊 SEO report generated: ./seo-optimization-report.json');
  console.log(`🗺️ Sitemap generated with ${pages.length} pages`);
  console.log('🤖 Robots.txt generated');
};

optimizeSEO();