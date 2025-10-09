#!/usr/bin/env node

/**
 * Performance Optimization Script for Zion Tech Group Website
 * Optimizes images, CSS, and JavaScript for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Optimize CSS
try {
  execSync('npx postcss app/globals.css -o dist/optimized.css --use autoprefixer --use cssnano', { stdio: 'inherit' });
  } catch (error) {
  ');
}

// 2. Generate service worker for caching
const serviceWorkerContent = `
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json'
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

fs.writeFileSync('dist/sw.js', serviceWorkerContent);
// 3. Generate manifest.json for PWA
const manifest = {
  "name": "Zion Tech Group - AI Solutions",
  "short_name": "Zion Tech",
  "description": "Leading provider of AI-powered enterprise solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f0f23",
  "theme_color": "#4f46e5",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};

fs.writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, 2));
// 4. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

fs.writeFileSync('dist/robots.txt', robotsTxt);
// 5. Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

fs.writeFileSync('dist/sitemap.xml', sitemap);
// 6. Optimize HTML
const indexPath = 'dist/index.html';
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Add performance optimizations
  html = html.replace(
    '<head>',
    `<head>
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="theme-color" content="#4f46e5">`
  );
  
  // Add service worker registration
  html = html.replace(
    '</body>',
    `<script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js');
        });
      }
    </script>
    </body>`
  );
  
  fs.writeFileSync(indexPath, html);
  }

try {
  execSync('npx vite-bundle-analyzer dist/stats.html', { stdio: 'inherit' });
} catch (error) {
  }
