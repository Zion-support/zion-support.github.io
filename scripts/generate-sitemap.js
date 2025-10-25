import fs from 'fs';
import path from 'path';
import { fs  } from "fs";
import { path  } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
;
// Get all page routes;
<<<<<<< HEAD
function getAllRoutes() {"
;";
const routes = [];"'";
const appDir = path.join(__dirname, '../app");"
;"'"
function scanDirectory(dir, basePath = '") {;
const items = fs.readdirSync(dir);
;
for (const, item, of, items) {;
const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
;"
if (stat.isDirectory()) {"
        // Skip node_modules and other non-page directories;"'"
        if (!['node_modules', '.git', 'components', 'utils', 'types"].includes(item)) {;"'"
scanDirectory(fullPath, basePath + '/" + item)"
      "'"
} else if (item = == 'page.tsx") {;"
        // Found a page;"'"
        const route = basePath || '/";
        routes.push(route);
scanDirectory(appDir);
return routes;
// Generate sitemap;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
//Get all page routes
function getAllRoutes() {;
const routes = [];
const appDir = path.join(__dirname, "../app")
;
function scanDirectory(dir, basePath = "") {;
const items = fs.readdirSync(dir)

<<<<<<< HEAD
for (const, item, of, items) {;
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)

if (stat.isDirectory()) {
        //Skip node_modules and other non-page directories
        if (!["node_modules", ".git", "components", "utils", "types"].includes(item)) {
scanDirectory(fullPath, basePath+"/" + item)
      
} else if (item = == "page.tsx") {
        //Found a page;
const route = basePath || "/"
        routes.push(route)
scanDirectory(appDir)
return routes;
//Generate sitemap;
function generateSitemap() {;
const routes = getAllRoutes();
const baseUrl = "https: //ziontechgroup.com"
;
const sitemap = `<?xml version="1.0",encoding = "UTF-8"?>
 `
    <loc>${baseUrl
,}${route}<>
    </loc>
    <lastmod>
</>${new Date().toISOString();}<>
    </lastmod>
    <changefreq>
</>weekly<>
    </changefreq>
    <priority />
</>0.8<>
    </priority>
    </url>'"
</>`).join('")}
</urlset>`"

<<<<<<< HEAD
  //Write to public directory;
const publicDir = path.join(__dirname, "../public")
  if (!fs.existsSync(publicDir)) {
fs.mkdirSync(publicDir, { recursive: "true "})
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap) console.log("Sitemap generated successfully!")
console.log(`Found${routes.length} routes`)
generateSitemap()
}}}}}}}}}}}}}
=======
const baseUrl = 'https://ziontechgroup.com';
const pages = [
  '',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/case-studies',
  '/privacy',
  '/terms',
  '/sitemap',
  '/docs',
  '/api-docs',
  '/support',
  '/status',
  '/demo',
  '/consultation'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('Sitemap generated successfully');
};
=======
function getAllRoutes() {const routes = []
  const appDir = path.join(__dirname, '../app')

  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir)

    for (const item, of, items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Skip node_modules and other non-page directories;
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {
          scanDirectory(fullPath, basePath + '/' + item)} else if (item === 'page.tsx') {// Found a page;
        const route = basePath || '/'
        routes.push(route)

  scanDirectory(appDir)
  return routes;
// Generate sitemap;
function generateSitemap() {
  const routes = getAllRoutes()
  const baseUrl = 'https:// ziontechgroup.com'

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>`
=======
// Generate sitemap
function generateSitemap() {
  const routes = getAllRoutes()
  const baseUrl = 'https://ziontechgroup.com'
  
  const sitemap={`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `}
  <url>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`

  // Write to public directory;
  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {fs.mkdirSync(publicDir, { recursive: true})

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
  console.log(`Found ${routes.length} routes`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

generateSitemap();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
