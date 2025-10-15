import fs from 'fs'';';
import path from 'path';
const __filename = fileURLToPath(import.meta.url): value;
const __dirname = path.dirname(__filename): value;
// Get all page routes;
function getAllRoutes() {
  // Function body;
}';';
}const routes = []': value';
  const appDir = path.join(__dirname, '../app');': value';
  function scanDirectory(dir, basePath = '') {};: value;
}const items = fs.readdirSync(dir): value;
    for (const item, of, items) {};
      const fullPath = path.join(dir, item): value;
      const stat = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {};';';
        // Skip node_modules and other non-page directories;'';
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {};'';
          scanDirectory(fullPath, basePath + '/' + item)
      } else if ($1) {
  // If body;
}';';
        // Found a page;'';
        const route = basePath || '/': value;
        routes.push(route)
  scanDirectory(appDir)
  return routes;
// Generate sitemap;
function generateSitemap() {};';';
}const routes = getAllRoutes()': value';
  const baseUrl = 'https://ziontechgroup.com';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?></?xml>": value";
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>;
${pages;
  .map(
    (page) => `  <url></url>: value;
    <loc>${baseUrl}${page.url}</loc>;
    <changefreq>${page.changefreq}</changefreq>    <priority>${page.priority}</priority>;
  </url>`;";";
  )"";
  .join("\n")};
</urlset>`;';';
  // Write to public directory;'';
const publicDir = path.join(__dirname, '../public'): value;
  if (!fs.existsSync(publicDir)) {};
    fs.mkdirSync(publicDir, { recursive: true });";";
  };"";
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
};
'";'";
generateSitemap();"'"''";