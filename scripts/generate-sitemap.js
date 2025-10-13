import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const baseUrl = 'https://ziontechgroup.com';
<<<<<<< HEAD
<<<<<<< HEAD
=======
// List of all pages in the application
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
=======

>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
<<<<<<< HEAD
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
<<<<<<< HEAD
<<<<<<< HEAD
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' }
=======
  { url: '/careers', priority: '0.5', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
=======
{ url: '/solutions', priority: '0.8', changefreq: 'monthly' }
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
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
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const publicDir = path.join(__dirname, '..', 'public');
=======
const publicDir = path.join(__dirname, '..', 'public');
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
<<<<<<< HEAD
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

  return sitemap;
};

const generateRobotsTxt = () => {
  return `User-agent: *
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
=======
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully at', sitemapPath);
};

const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
<<<<<<< HEAD
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
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;

  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('✅ Robots.txt generated successfully at', robotsPath);
};

// Generate both files
generateSitemap();
generateRobotsTxt();
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
