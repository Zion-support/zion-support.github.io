#!/usr/bin/env node

/**
 * Sitemap Generator for Zion Tech Group Website
 * Generates XML sitemap for better SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗺️ Generating sitemap...');

// Get all page routes
const appDir = path.join(__dirname, '../app');
const routes = [];

function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['components', 'utils', 'types', 'hooks', 'styles'].includes(item)) {
        scanDirectory(fullPath, path.join(basePath, item));
      }
    } else if (item === 'page.tsx' || item === 'page.js') {
      // Found a page
      const route = basePath || '/';
      routes.push(route);
    }
  });
}

// Scan for pages
scanDirectory(appDir);

// Add static routes
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/ai-services',
  '/it-services',
  '/pricing',
  '/privacy',
  '/terms'
];

// Combine all routes
const allRoutes = [...new Set([...staticRoutes, ...routes])];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => {
  const priority = route === '/' ? '1.0' : 
                  route.includes('/ai-') || route.includes('/it-') ? '0.9' :
                  route.includes('/blog') ? '0.8' : '0.7';
  
  const changefreq = route === '/' ? 'daily' :
                    route.includes('/blog') ? 'weekly' :
                    route.includes('/ai-') || route.includes('/it-') ? 'monthly' : 'monthly';
  
  return `  <url>
    <loc>https://ziontechgroup.com${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

// Write sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Sitemap generated with ${allRoutes.length} routes`);
console.log(`📁 Saved to: ${sitemapPath}`);

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
`;

const robotsPath = path.join(__dirname, '../public/robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);

console.log('✅ Robots.txt generated');
console.log('🎉 SEO files generated successfully!');