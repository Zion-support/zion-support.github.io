#!/usr/bin/env node
/**
 * Performance Optimizer for Zion Tech Group Website
 * 
 * This script optimizes the built website for better performance
 * by adding preload hints, optimizing images, and other performance improvements.
 */

import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

// Optimize HTML files
function optimizeHTML(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style">
    `;
    
    content = content.replace('</head>', `${preloadHints}</head>`);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${filePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

// Add service worker
function addServiceWorker() {
  const serviceWorkerContent = `
// Service Worker for Zion Tech Group Website
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/vendor.js'
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

  const swPath = path.join(distDir, 'sw.js');
  fs.writeFileSync(swPath, serviceWorkerContent);
  console.log('✅ Service worker added');
}

// Add robots.txt
function addRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

  const robotsPath = path.join(distDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ robots.txt added');
}

// Main optimization function
function optimizePerformance() {
  console.log('🚀 Starting performance optimization...');
  
  // Check if dist directory exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found. Please run build first.');
    process.exit(1);
  }

  // Find and optimize HTML files
  const htmlFiles = fs.readdirSync(distDir)
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(distDir, file));

  htmlFiles.forEach(optimizeHTML);

  // Add service worker
  addServiceWorker();

  // Add robots.txt
  addRobotsTxt();

  console.log('✅ Performance optimization completed!');
}

// Run optimization
optimizePerformance();