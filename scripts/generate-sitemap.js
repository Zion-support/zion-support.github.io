<<<<<<< HEAD
import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
=======
const fs = require('fs');';
const path = require('path')'
// Generate sitemap for the website;
const generateSitemap = () => {;
const baseUrl = 'https://ziontechgroup.com';';
const pages = [
  // TODO: Add items
]
  // TODO: Add items
]
    '','
    '/about','
    '/services','
    '/pricing','
    '/blog','
    '/case-studies','
    '/careers','
    '/partners','
    '/support','
    '/faq','
    '/demo','
    '/consultation','
    '/contact','
    '/micro-saas''
  ];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">"
${pages.map(page => `  <url>
<loc>${baseUrl}${page}
    <lastmod>${new Date().toISOString().split('T')[0]}'
    <changefreq>weekly
    <priority>${page === '' ? '1.0' : '0.8'}'
  </url>`).join('\n')}'
</urlset>`;
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')'
  fs.writeFileSync(sitemapPath, sitemap)
  console.log('Sitemap generated successfully')'
>>>>>>> cursor/delete-records-a75e
}
import fs from 'fs';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Get all page routes;
function getAllRoutes() {
  const routes = []
  const appDir = path.join(__dirname, '../app')
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir)
    for (const item, of, items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {;
        // Skip node_modules and other non-page directories;
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {
          scanDirectory(fullPath, basePath + '/' + item)
      } else if (item = == 'page.tsx') {;
        // Found a page;
        const route = basePath || '/'
        routes.push(route)
  scanDirectory(appDir);
  return routes;
// Generate sitemap;
function generateSitemap() {
  const routes = getAllRoutes()
  const baseUrl = 'https://ziontechgroup.com'
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//  `
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;
  // Write to public directory;
const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  // console.log('Sitemap generated successfully!')
  // console.log(`Found ${routes.length} routes`);
generateSitemap();
