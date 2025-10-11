const fs = require('fs');
const path = require('path');

console.log('🗺️ Generating sitemap...');

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString().split('T')[0];

// Define all the pages in the application
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
];

// Generate AI service pages
const aiServices = [
  'ai-content-generator', 'ai-chatbot-builder', 'ai-analytics-dashboard',
  'ai-email-assistant', 'ai-voice-assistant', 'ai-automation',
  'ai-content-generation', 'ai-crm', 'ai-cybersecurity',
  'ai-data-analytics', 'ai-document-processing', 'ai-ecommerce-solutions',
  'ai-financial-analyzer', 'ai-health-tracker', 'ai-marketing-automation',
  'ai-project-manager', 'ai-social-media-manager', 'ai-translator',
  'ai-video-generator', 'ai-web-scraper'
];

aiServices.forEach(service => {
  pages.push({
    url: `/${service}`,
    priority: '0.7',
    changefreq: 'monthly'
  });
});

// Generate IT service pages
const itServices = [
  'cloud-migration', 'cybersecurity-solutions', 'devops-cicd',
  'data-analytics', 'mobile-development', 'blockchain-solutions',
  'api-development', 'database-management', 'infrastructure-setup',
  'security-audit', 'performance-optimization', 'backup-solutions'
];

itServices.forEach(service => {
  pages.push({
    url: `/${service}`,
    priority: '0.7',
    changefreq: 'monthly'
  });
});

// Generate sitemap XML
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

pages.forEach(page => {
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
  sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
  sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
  sitemap += `    <priority>${page.priority}</priority>\n`;
  sitemap += '  </url>\n';
});

sitemap += '</urlset>';

// Write sitemap to public directory
const publicDir = 'public';
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('✅ Robots.txt generated successfully');

console.log(`📊 Generated sitemap with ${pages.length} pages`);
console.log('🎉 Sitemap generation completed!');