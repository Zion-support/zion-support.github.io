#!/usr/bin/env node

/**
 * Performance Improvements Script
 * Implements various performance optimizations for the application
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance improvements...');

// 1. Create a service worker for better caching
const serviceWorkerContent = `
// Service Worker for Performance Optimization
const CACHE_NAME = 'zion-app-v1';
const urlsToCache = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services-advertising',
  '/static/css/',
  '/static/js/',
  '/_next/static/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
`;

fs.writeFileSync(path.join(__dirname, '../public/sw.js'), serviceWorkerContent);
console.log('✅ Service worker created');

// 2. Create a robots.txt for better SEO
const robotsContent = `
User-agent: *
Allow: /

Sitemap: https://zion.app/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsContent);
console.log('✅ Robots.txt created');

// 3. Create a manifest.json for PWA capabilities
const manifestContent = {
  "name": "Zion Tech Group",
  "short_name": "Zion",
  "description": "Advanced AI and Technology Solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "any",
      "type": "image/x-icon"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, '../public/manifest.json'), JSON.stringify(manifestContent, null, 2));
console.log('✅ Manifest.json created');

// 4. Create a sitemap generator
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zion.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zion.app/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zion.app/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://zion.app/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://zion.app/services-advertising</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapContent);
console.log('✅ Sitemap.xml created');

// 5. Update package.json with new performance scripts
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add new performance scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'perf:improve': 'node scripts/performance-improvements.js',
  'perf:analyze': 'npm run build && npm run build:analyze',
  'perf:audit': 'npm run security:audit && npm run optimize',
  'perf:full': 'npm run perf:improve && npm run perf:analyze && npm run perf:audit'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Package.json updated with performance scripts');

console.log('🎉 Performance improvements completed!');
console.log('📊 New scripts available:');
console.log('  - npm run perf:improve  - Apply performance improvements');
console.log('  - npm run perf:analyze  - Analyze performance');
console.log('  - npm run perf:audit   - Run security and optimization audit');
console.log('  - npm run perf:full    - Run all performance improvements');