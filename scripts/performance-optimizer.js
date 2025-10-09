#!/usr/bin/env node

/**
 * Performance Optimizer for Zion Tech Group Website
 * This script optimizes the build output for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Optimize HTML file
function optimizeHTML() {
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add performance optimizations
    const optimizations = [
      // Preload critical resources
      '<link rel="preload" href="/assets/index-Dh4x_LSv.js" as="script">',
      '<link rel="preload" href="/assets/index-ByLiN45N.css" as="style">',
      // Add resource hints
      '<link rel="dns-prefetch" href="//fonts.googleapis.com">',
      '<link rel="dns-prefetch" href="//fonts.gstatic.com">',
      // Add performance meta tags
      '<meta name="format-detection" content="telephone=no">',
      '<meta name="mobile-web-app-capable" content="yes">',
      '<meta name="apple-mobile-web-app-capable" content="yes">',
      '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
      // Add critical CSS inline
      '<style>body{font-family:Inter,system-ui,-apple-system,sans-serif;background:linear-gradient(135deg,#0f0f23 0%,#1a1a2e 50%,#16213e 100%);min-height:100vh;margin:0;padding:0}</style>'
    ];
    
    // Insert optimizations before closing head tag
    html = html.replace('</head>', optimizations.join('\n    ') + '\n  </head>');
    
    fs.writeFileSync(htmlPath, html);
    console.log('✅ HTML optimized');
  }
}

// Optimize CSS file
function optimizeCSS() {
  const cssPath = path.join(__dirname, '../dist/assets/index-ByLiN45N.css');
  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // Remove unnecessary whitespace and comments
    css = css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
      .replace(/\s*{\s*/g, '{') // Remove spaces around opening braces
      .replace(/;\s*/g, ';') // Remove spaces after semicolons
      .trim();
    
    fs.writeFileSync(cssPath, css);
    console.log('✅ CSS optimized');
  }
}

// Add service worker for caching
function addServiceWorker() {
  const swContent = `
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index-Dh4x_LSv.js',
  '/assets/index-ByLiN45N.css',
  '/assets/vendor-DSl_H3E1.js'
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

  const swPath = path.join(__dirname, '../dist/sw.js');
  fs.writeFileSync(swPath, swContent);
  console.log('✅ Service Worker added');
}

// Add robots.txt
function addRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

  const robotsPath = path.join(__dirname, '../dist/robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ robots.txt added');
}

// Add sitemap.xml
function addSitemap() {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
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
    <loc>https://ziontechgroup.com/services</loc>
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

  const sitemapPath = path.join(__dirname, '../dist/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log('✅ sitemap.xml added');
}

// Main optimization function
function optimize() {
  try {
    optimizeHTML();
    optimizeCSS();
    addServiceWorker();
    addRobotsTxt();
    addSitemap();
    
    console.log('🎉 Performance optimization completed successfully!');
    console.log('📊 Build size analysis:');
    
    // Analyze build size
    const distPath = path.join(__dirname, '../dist');
    if (fs.existsSync(distPath)) {
      const files = fs.readdirSync(distPath, { recursive: true });
      let totalSize = 0;
      
      files.forEach(file => {
        const filePath = path.join(distPath, file);
        if (fs.statSync(filePath).isFile()) {
          const size = fs.statSync(filePath).size;
          totalSize += size;
          console.log(`  ${file}: ${(size / 1024).toFixed(2)} KB`);
        }
      });
      
      console.log(`  Total: ${(totalSize / 1024).toFixed(2)} KB`);
      console.log(`  Gzipped estimate: ${(totalSize / 1024 * 0.3).toFixed(2)} KB`);
    }
    
  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
    process.exit(1);
  }
}

// Run optimization
optimize();