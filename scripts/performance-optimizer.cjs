const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  console.log('Starting performance optimization...');
  
  const distDir = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found. Please run build first.');
    return;
  }

  // Create performance monitoring script
  const performanceScript = `
// Performance monitoring script
(function() {
  'use strict';
  
  // Monitor Core Web Vitals
  function measurePerformance() {
    if ('PerformanceObserver' in window) {
      // LCP - Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics if available
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(lastEntry.startTime),
            event_category: 'Performance'
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID - First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(fid),
              event_category: 'Performance'
            });
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
            
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'CLS',
                value: Math.round(clsValue * 1000),
                event_category: 'Performance'
              });
            }
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', measurePerformance);
  } else {
    measurePerformance();
  }

  // Preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      '/assets/index.css',
      '/assets/vendor.js',
      '/assets/index.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  // Run preloading
  preloadCriticalResources();
})();
`;

  // Write performance script to dist
  fs.writeFileSync(path.join(distDir, 'performance.js'), performanceScript);
  
  // Create service worker for caching
  const serviceWorker = `
// Service Worker for caching
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/about',
  '/contact',
  '/ai-services',
  '/it-services',
  '/5g-implementation',
  '/assets/index.css',
  '/assets/vendor.js',
  '/assets/index.js'
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

  fs.writeFileSync(path.join(distDir, 'sw.js'), serviceWorker);
  
  console.log('Performance optimization completed!');
  console.log('Performance script created at:', path.join(distDir, 'performance.js'));
}

// Run optimization
optimizePerformance();