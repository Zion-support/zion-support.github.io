#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Optimizes the build for better performance and Core Web Vitals
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Optimize HTML
function optimizeHTML() {
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/vendor-DSl_H3E1.js" as="script" crossorigin>
    <link rel="preload" href="/assets/index-ByLiN45N.css" as="style">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" crossorigin>
    `;
    
    html = html.replace('</head>', `${preloadHints}</head>`);
    
    // Add resource hints
    const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    `;
    
    html = html.replace('</head>', `${resourceHints}</head>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('✅ HTML optimized with preload hints');
  }
}

// Optimize service worker
function optimizeServiceWorker() {
  const swPath = path.join(__dirname, '../dist/sw.js');
  if (fs.existsSync(swPath)) {
    let sw = fs.readFileSync(swPath, 'utf8');
    
    // Add more aggressive caching strategies
    const enhancedSW = `
// Enhanced caching strategies
const CACHE_NAME = 'zion-tech-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

// Cache strategies
const CACHE_STRATEGIES = {
  static: 'cacheFirst',
  api: 'networkFirst',
  images: 'cacheFirst',
  fonts: 'cacheFirst'
};

// Enhanced service worker logic
${sw}

// Add background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Add push notifications support
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});
`;
    
    fs.writeFileSync(swPath, enhancedSW);
    console.log('✅ Service worker enhanced');
  }
}

// Generate robots.txt with performance hints
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Performance hints
Crawl-delay: 1

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsContent);
  console.log('✅ robots.txt optimized');
}

// Generate sitemap
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated');
}

// Run optimizations
try {
  optimizeHTML();
  optimizeServiceWorker();
  generateRobotsTxt();
  generateSitemap();
  
  console.log('🎉 Performance optimization completed successfully!');
} catch (error) {
  console.error('❌ Error during optimization:', error);
  process.exit(1);
}