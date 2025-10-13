import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const baseUrl = 'https://ziontechgroup.com';
=======
// List of all pages in the application
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
<<<<<<< HEAD
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
=======
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
=======
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  // Add more AI service pages
  { url: '/ai-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.6', changefreq: 'weekly' },
  // Add more 5G solution pages
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
  { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'weekly' },
<<<<<<< HEAD
  
  // IT Solutions
  { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },
  { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.7', changefreq: 'weekly' },
  
  // Other pages
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.5', changefreq: 'monthly' },
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
=======
// Define all the pages in your application
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/micro-saas-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },
  { url: '/demo', priority: '0.5', changefreq: 'monthly' },
  { url: '/support', priority: '0.5', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/pricing', priority: '0.6', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.7', changefreq: 'monthly' },
  // Add more pages as needed
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

<<<<<<< HEAD
<<<<<<< HEAD
// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

<<<<<<< HEAD
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
=======
// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Generate robots.txt
const robotsTxt = `User-agent: *
=======
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
=======
const generateSitemap = () => {
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
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5

  return sitemap;
};

<<<<<<< HEAD
const generateRobotsTxt = () => {
  return `User-agent: *
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

<<<<<<< HEAD
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
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
=======
# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /scripts/
Disallow: /node_modules/
`;
};

// Generate and write sitemap
const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully at:', sitemapPath);

// Generate and write robots.txt
const robotsTxt = generateRobotsTxt();
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('✅ Robots.txt generated successfully at:', robotsPath);

console.log(`📊 Generated sitemap with ${pages.length} pages`);
console.log('🚀 SEO files are ready for deployment!');
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
=======
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully at:', outputPath);
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
