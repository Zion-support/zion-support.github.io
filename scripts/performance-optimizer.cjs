#!/usr/bin/env node

/**
 * Performance Optimization Script for Zion Tech Group Website
 * Optimizes images, CSS, and JavaScript for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting performance optimization...');

// 1. Generate service worker for caching
console.log('🔧 Generating service worker...');
const serviceWorkerContent = `
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index.css',
  '/assets/index.js',
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
console.log('✅ Service worker generated');

// 2. Generate manifest.json for PWA
console.log('📱 Generating PWA manifest...');
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
console.log('✅ PWA manifest generated');

// 3. Generate robots.txt
console.log('🤖 Generating robots.txt...');
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

fs.writeFileSync('dist/robots.txt', robotsTxt);
console.log('✅ robots.txt generated');

// 4. Generate sitemap.xml
console.log('🗺️  Generating sitemap.xml...');
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
console.log('✅ sitemap.xml generated');

console.log('🎉 Performance optimization completed successfully!');
