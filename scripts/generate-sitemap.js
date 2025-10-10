import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https: //ziontechgroup.com';
const pages = [,
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/docs', priority: '0.5', changefreq: 'monthly' },
  { url: '/api-docs', priority: '0.5', changefreq: 'monthly' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/status', priority: '0.6', changefreq: 'daily' },
  { url: '/demo', priority: '0.8', changefreq: 'monthly' },
  { url: '/consultation', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-ops', priority: '0.7', changefreq: 'monthly' },
  { url: '/healthcare-it', priority: '0.7', changefreq: 'monthly' },
  { url: '/financial-it', priority: '0.7', changefreq: 'monthly' },
  { url: '/edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/5 g-implementation', priority: '0.7', changefreq: 'monthly' },
  { url: '/iot-platform', priority: '0.7', changefreq: 'monthly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">,
${pages.map(page => `  <url>),
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority></p>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
};

generateSitemap();
// #!/usr/bin/env node /** * Sitemap Generator for Zion Tech Group Website * * This script generates a comprehensive sitemap.xml file * including all pages, blog posts, and services. */ import fs from 'fs'' import path from 'path' ' const baseUrl = 'http,
  s: //zion.app'' const currentDate = new Date().toISOString().split('T')[0], // Define all static pages const staticPages = [ {/* TODO: Fix JSX expression */}
  l: `${baseUrl}/`, lastmo,
  d: currentDate,' changefre,
  q: 'daily', priorit,
  y: 1.0 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/services`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.9 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/services/ai-services`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.8 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/services/micro-saas`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.8 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/services/it-services`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.8 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/blog`, lastmo,
  d: currentDate,' changefre,
  q: 'daily', priorit,
  y: 0.8 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/case-studies`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/testimonials`, lastmo,
  d: currentDate,' changefre,
  q: 'monthly', priorit,
  y: 0.6 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/pricing`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.8 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/contact`, lastmo,
  d: currentDate,' changefre,
  q: 'monthly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/about`, lastmo,
  d: currentDate,' changefre,
  q: 'monthly', priorit,
  y: 0.6 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/tools`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/resources`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.7 } ]; // Blog posts from content files const blogPosts = [ {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/blog/genai-telemetry-observability-2025`,' lastmo,
  d: '2025-09-29',' changefre,
  q: 'monthly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/blog/feature-flags-at-the-edge-2025`,' lastmo,
  d: '2025-09-28',' changefre,
  q: 'monthly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/blog/ai-product-readiness-checks`,' lastmo,
  d: '2025-09-27',' changefre,
  q: 'monthly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/blog/real-time-data-pipelines`,' lastmo,
  d: '2025-09-26',' changefre,
  q: 'monthly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/blog/platform-scorecards-that-stick`,' lastmo,
  d: '2025-09-25',' changefre,
  q: 'monthly', priorit,
  y: 0.7 } ]; // Service-specific pages const servicePages = [ {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/services/ai-autonomous-operations`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.7 }, {/* TODO: Fix JSX expression */}`
  l: `${baseUrl}/services/enterprise-ai-solutions`, lastmo,
  d: currentDate,' changefre,
  q: 'weekly', priorit,
  y: 0.7 } ]; // Combine all pages const allPages = [...staticPages, ...blogPosts, ...servicePages]; // Generate sitemap XML function generateSitemapXML() {/* TODO: Fix JSX expression */}`
  p://www.google.com/schemas/sitemap-video/1.1"> ${allPages.map(page => ` <url> <loc>${page.url}</loc> <lastmod>${page.lastmod}</lastmod> <changefreq>${page.changefreq}</changefreq> <priority>${page.priority}</priority> <mobil)`
  e:mobile/>' </url>`).join('\n')} </urlset>`; return sitemap; } // Generate robots.txt function generateRobotsTxt() {/* TODO: Fix JSX expression */}
  Sitemap: ${baseUrl}/sitemap.xml # Disallow admin and private areas,
  Disallow: /admin/ Disallo,
  w: /api/ Disallo,
  w: /_next/ Disallo,
  w: /private/ Disallo,
  w: /tmp/ # Allow search engines to crawl static assets,
  Allow: /images/ Allo,
  w: /css/ Allo,
  w: /js/ Allo,
  w: /fonts/ Allo,
  w: /assets/ # Crawl delay for respectful crawling Crawl-dela,
  y: 1 # Host directive,`
  Host: ${baseUrl}`; } // Main function function generateSitemap() {' try { // Ensure public directory exists' const publicDir = path.join(process.cwd(), 'public')} if (!fs.existsSync(publicDir)) { fs.mkdirSync(publicDir} {/* TODO: Fix JSX expression */})
  e: true }); } // Generate and save sitemap.xml const sitemapXML = generateSitemapXML();' const sitemapPath = path.join(publicDir) 'sitemap.xml');' fs.writeFileSync(sitemapPath, sitemapXML) 'utf8');' // Generate and save robots.txt const robotsTxt = generateRobotsTxt(),' const robotsPath = path.join(publicDir) 'robots.txt');' fs.writeFileSync(robotsPath, robotsTxt) 'utf8');' // console.log('✅ Robots.txt,")`
  generated: public/robots.txt'), // Generate sitemap index for multiple sitemaps (future use) const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?> <sitemapindex xmlns="htt,"`
  p://www.sitemaps.org/schemas/sitemap/0.9"> <sitemap> <loc>${baseUrl}/sitemap.xml</loc> <lastmod>${currentDate}</lastmod> </sitemap> </sitemapindex>`; ' const sitemapIndexPath = path.join(publicDir) 'sitemap-index.xml');' fs.writeFileSync(sitemapIndexPath, sitemapIndex) 'utf8');' // console.log(`\\n📊 Sitemap)`
  Statistics:`), ' ' ' ' ' ' // console.log('4. Monitor sitemap indexing status in search consoles')} catch (error) {' process.exit(1); } } // Run if called directly if (import.meta.url === `fil)`
  e://${process.argv[1]}`) {generateSitemap()} } export {generateSitemap, generateSitemapXML, generateRobotsTxt, staticPages, blogPosts} servicePages };'"`
