#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting advanced performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Bundle analysis and optimization
  bundleOptimization: {
    maxChunkSize: 150000, // 150KB max per chunk
    criticalChunks: ['react-core', 'react-dom', 'main-core'],
    lazyChunks: ['ai-other', 'zion-other', '5g-services']
  },
  
  // Image optimization
  imageOptimization: {
    formats: ['webp', 'avif'],
    quality: 85,
    maxWidth: 1920,
    maxHeight: 1080
  },
  
  // Code splitting strategy
  codeSplitting: {
    routeBased: true,
    componentBased: true,
    vendorSplitting: true
  },
  
  // Caching strategy
  caching: {
    staticAssets: '1y',
    html: '1h',
    js: '1y',
    css: '1y'
  }
};

// Generate performance optimization report
function generatePerformanceReport() {
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Please run build first.');
    return;
  }
  
  const files = fs.readdirSync(distPath, { recursive: true });
  const stats = {
    totalFiles: 0,
    totalSize: 0,
    jsFiles: 0,
    jsSize: 0,
    cssFiles: 0,
    cssSize: 0,
    imageFiles: 0,
    imageSize: 0,
    chunks: {}
  };
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      stats.totalFiles++;
      stats.totalSize += stat.size;
      
      if (file.endsWith('.js')) {
        stats.jsFiles++;
        stats.jsSize += stat.size;
        
        // Analyze chunk sizes
        const chunkName = file.split('-')[0];
        if (!stats.chunks[chunkName]) {
          stats.chunks[chunkName] = 0;
        }
        stats.chunks[chunkName] += stat.size;
      } else if (file.endsWith('.css')) {
        stats.cssFiles++;
        stats.cssSize += stat.size;
      } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/)) {
        stats.imageFiles++;
        stats.imageSize += stat.size;
      }
    }
  });
  
  return stats;
}

// Generate optimization recommendations
function generateRecommendations(stats) {
  const recommendations = [];
  
  // Check chunk sizes
  Object.entries(stats.chunks).forEach(([chunkName, size]) => {
    if (size > optimizations.bundleOptimization.maxChunkSize) {
      recommendations.push({
        type: 'warning',
        message: `Chunk "${chunkName}" is ${(size / 1024).toFixed(1)}KB. Consider splitting further.`
      });
    }
  });
  
  // Check total bundle size
  if (stats.totalSize > 1000000) { // 1MB
    recommendations.push({
      type: 'warning',
      message: `Total bundle size is ${(stats.totalSize / 1024 / 1024).toFixed(2)}MB. Consider code splitting.`
    });
  } else {
    recommendations.push({
      type: 'success',
      message: 'Bundle size is optimized! Great job!'
    });
  }
  
  // Check for unused CSS
  if (stats.cssSize > 50000) { // 50KB
    recommendations.push({
      type: 'info',
      message: 'Consider purging unused CSS to reduce bundle size.'
    });
  }
  
  return recommendations;
}

// Generate service worker for caching
function generateServiceWorker() {
  const serviceWorkerContent = `
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            const responseToCache = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
`;

  const swPath = path.join(__dirname, '../public/sw.js');
  fs.writeFileSync(swPath, serviceWorkerContent);
  console.log('✅ Service worker generated');
}

// Generate robots.txt with performance hints
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Performance hints
Crawl-delay: 1

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Block unnecessary paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
`;

  const robotsPath = path.join(__dirname, '../public/robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Robots.txt optimized');
}

// Generate manifest.json for PWA
function generateManifest() {
  const manifest = {
    name: "Zion Tech Group - Advanced AI and IT Solutions",
    short_name: "Zion Tech",
    description: "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#00ffff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    categories: ["business", "productivity", "technology"],
    lang: "en-US",
    orientation: "portrait-primary"
  };

  const manifestPath = path.join(__dirname, '../public/manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ PWA manifest generated');
}

// Main optimization function
function optimizePerformance() {
  console.log('📊 Analyzing build statistics...');
  
  const stats = generatePerformanceReport();
  const recommendations = generateRecommendations(stats);
  
  console.log('📊 Build Statistics:');
  console.log(`   Total files: ${stats.totalFiles}`);
  console.log(`   Total size: ${(stats.totalSize / 1024).toFixed(1)} KB`);
  console.log(`   JS files: ${stats.jsFiles} (${(stats.jsSize / 1024).toFixed(1)} KB)`);
  console.log(`   CSS files: ${stats.cssFiles} (${(stats.cssSize / 1024).toFixed(1)} KB)`);
  console.log(`   Image files: ${stats.imageFiles} (${(stats.imageSize / 1024).toFixed(1)} KB)`);
  
  console.log('\n📋 Chunk Analysis:');
  Object.entries(stats.chunks).forEach(([chunkName, size]) => {
    const status = size > optimizations.bundleOptimization.maxChunkSize ? '⚠️' : '✅';
    console.log(`   ${status} ${chunkName}: ${(size / 1024).toFixed(1)} KB`);
  });
  
  console.log('\n💡 Recommendations:');
  recommendations.forEach(rec => {
    const icon = rec.type === 'success' ? '✅' : rec.type === 'warning' ? '⚠️' : 'ℹ️';
    console.log(`   ${icon} ${rec.message}`);
  });
  
  // Generate additional files
  generateServiceWorker();
  generateRobotsTxt();
  generateManifest();
  
  // Save performance report
  const report = {
    timestamp: new Date().toISOString(),
    stats,
    recommendations,
    optimizations
  };
  
  const reportPath = path.join(__dirname, '../advanced-performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('\n✅ Advanced performance optimization completed!');
  console.log(`📄 Performance report saved: ${reportPath}`);
}

// Run optimization
optimizePerformance();