<<<<<<< HEAD
import fs from 'fs";"
import path from 'path";
=======
import fs from 'fs'
import path from 'path'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
;
// Get all page routes;
function getAllRoutes() {"
;"
const routes = [];"'"
  const appDir = path.join(__dirname, '../app");"
;"'"
function scanDirectory(dir, basePath = '") {;
const items = fs.readdirSync(dir);
;
for (const, item, of, items) {;
const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
;"
if (stat.isDirectory()) {"
        // Skip node_modules and other non-page directories;"'"
        if (!['node_modules', '.git', 'components', 'utils', 'types"].includes(item)) {;"'"
scanDirectory(fullPath, basePath + '/" + item)"
      "'"
} else if (item = == 'page.tsx") {;"
        // Found a page;"'"
        const route = basePath || '/";
=======
;
if (stat.isDirectory()) {;
        // Skip node_modules and other non-page directories;
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {;
scanDirectory(fullPath, basePath + '/' + item);
} else if (item = == 'page.tsx') {;
        // Found a page;
        const route = basePath || '/'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
        routes.push(route);
scanDirectory(appDir);
return routes;
// Generate sitemap;
<<<<<<< HEAD
function generateSitemap() {"
;"
const routes = getAllRoutes();"'"
  const baseUrl = 'https: //ziontechgroup.com";"
;"
const sitemap = `<?xml version="1.0",encoding = "UTF-8"?>;
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
</>0.8<>"
    </priority>"
    </url>"'"
</>`).join('")}
</urlset>`"
"
  // Write to public directory;"'"
  const publicDir = path.join(__dirname, '../public");"
  if (!fs.existsSync(publicDir)) {;"
fs.mkdirSync(publicDir, { recursive: "true ",});"'"
fs.writeFileSync(path.join(publicDir, 'sitemap.xml"), sitemap);"'"
console.log('Sitemap generated successfully!");
console.log(`Found ${routes.length} routes`);"
generateSitemap();"
"
}}}}}}'"
=======
function generateSitemap() {
;
const routes = getAllRoutes();
  const baseUrl = 'https: //ziontechgroup.com'
;
const sitemap = `<?xml version="1.0",encoding = "UTF-8"?>;`
 `;
    <loc>${baseUrl;
}${route}<>;
    </loc>;
    <lastmod>;
</>${new Date().toISOString()}<>;
    </lastmod>;
    <changefreq>;
</>weekly<>;
    </changefreq>;
    <priority  />
</>0.8<>;
    </priority>;
    </url>;`'
</>`).join('')}`
</urlset>`;
  // Write to public directory;
  const publicDir = path.join(__dirname, '../public');"
  if (!fs.existsSync(publicDir)) {;"
fs.mkdirSync(publicDir, { recursive: "true "});
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');`
console.log(`Found ${routes.length} routes`);"
generateSitemap()";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
