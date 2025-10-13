<<<<<<< HEAD
<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
=======
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page routes
function getAllRoutes() {
  const routes = [];
  const appDir = path.join(__dirname, '../app');
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other non-page directories
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {
          scanDirectory(fullPath, basePath + '/' + item);
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        // This is a page
        const route = basePath || '/';
        routes.push(route);
      }
    }
  }
  
  scanDirectory(appDir);
  return routes;
}

// Generate sitemap XML
function generateSitemap() {
  const routes = getAllRoutes();
  const baseUrl = 'https://ziontechgroup.com';
<<<<<<< HEAD
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add main pages with higher priority
  const mainPages = ['/', '/about', '/contact', '/services', '/ai-services', '/it-services'];
  
  for (const route of routes) {
    const url = baseUrl + route;
    const priority = mainPages.includes(route) ? '1.0' : '0.8';
    const changefreq = mainPages.includes(route) ? 'weekly' : 'monthly';
    
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  }
  
  sitemap += `</urlset>`;
  
  // Write to public directory
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log(`Generated sitemap with ${routes.length} routes`);
}

// Generate robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;
  
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Generated robots.txt');
}

// Run the generators
generateSitemap();
generateRobots();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
=======
// Generate sitemap for the website;
const generateSitemap = () => {
};
return (
;
const baseUrl = 'https://ziontechgroup.com';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const pages = [
];
    '',
    '/about',
    '/services',
    '/pricing',
    '/blog',
    '/case-studies',
    '/careers',
    '/partners',
    '/support',
    '/faq',
    '/demo',
    '/consultation',
    '/contact',
    '/micro-saas'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')};
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully');
};
generateSitemap();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
