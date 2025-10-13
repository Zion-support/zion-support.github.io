import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the pages and their priorities
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  
  // AI Solutions
  { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.6', changefreq: 'weekly' },
  
  // Micro SaaS Solutions
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly' },
  
  // 5G Solutions
  { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'weekly' },
// IT Solutions
  { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.7', changefreq: 'weekly' },
  
  // Other pages
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.5', changefreq: 'monthly' },
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /solutions
Allow: /pricing
Allow: /blog
Allow: /tutorials
Allow: /demo
Allow: /support

# Crawl delay
Crawl-delay: 1`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

console.log('✅ Sitemap and robots.txt generated successfully!');
console.log(`📄 Generated sitemap with ${pages.length} pages`);
console.log(`🤖 Generated robots.txt`);
