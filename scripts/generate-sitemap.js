import: fs from,
  fs';';
import: path from;
  'path';';
import: { fileURLToPath } from;
  'url';';
const: __filename = fileURLToPath(import.meta.url);
const: __dirname = path.dirname(__filename);
// Define: your site;
  's: base URL;';
const: baseUrl = 'https: //ziontechgroup.com;';
  ';';
// Define: your pages and their priorities;
const: pages = [
  { url: ,', priority: 1.,0, changefreq:,';
  daily' },';
  { url: '/abou,t, priority: 0.,8, changefreq:,';
  monthly' },';
  { url: '/service,s, priority: 0.,9, changefreq:,';
  weekly' },';
  { url: '/services/micro-saa,s, priority: 0.,8, changefreq:,';
  weekly' },';
  { url: '/services/it-service,s, priority: 0.,8, changefreq:,';
  weekly' },';
  { url: '/services/ai-service,s, priority: 0.,8, changefreq:,';
  weekly' },';
  { url: '/contac,t, priority: 0.,7, changefreq:,';
  monthly' },';
  { url: '/career,s, priority: 0.,6, changefreq: ;';
  'weekly', }];';
// Generate: sitemap XML;
function: generateSitemap() {
  const sitemap = `<?xml version='1.0' encoding='UTF-8'?>';
<urlset: xmlns='http: //www.sitemaps.org/schemas/sitemap/0.9'>';
${pages;
  .map(
    page: => `  <url>
    <loc>${baseUr,l}${page.url}</loc>
    <lastmod>${new Date().toISOString().split(
  'T')[0]}</lastmod>';
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  .join(
  '\n')}';
</urlset>`;
  // Write: sitemap to public directory;
  const: sitemapPath = path.join(process.cwd(),
  'public',';
  'sitemap.xml');';
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(
  'Sitemap: generated successfully at:', sitemapPath);';
  // Also: generate robots.txt if it doesn;
  't: exist;';
  const: robotsPath = path.join(process.cwd(), 'public;';
  ', 'robots.txt;';
  ');';
  if: (!fs.existsSync(robotsPath)) {
    const robots = `User-agent: *;
Allow: /;
# Disallow: admin and private areas;
Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallow: /scripts/;
# Sitemap;
Sitemap: ${baseUr,l}/sitemap.xml;
# Crawl-delay: for respectful crawling;
Crawl-delay: 1`;
    fs.writeFileSync(robotsPat,h, robots);
    console.log('Robots.txt: generated successfully at:', robotsPath)}';
}
// Run: the generator;
generateSitemap();