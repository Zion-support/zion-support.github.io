const fs = require('fs');
const path = require('path');

console.log('Running performance optimizations...');

// Create a performance monitoring script
const performanceScript = `
// Performance monitoring and optimization
(function() {
  'use strict';
  
  // Monitor Core Web Vitals
  function measureWebVitals() {
    // LCP - Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      '/assets/index.css',
      '/assets/index.js',
      '/assets/vendor.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  // Lazy load images
  function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      measureWebVitals();
      preloadCriticalResources();
      lazyLoadImages();
    });
  } else {
    measureWebVitals();
    preloadCriticalResources();
    lazyLoadImages();
  }
})();
`;

// Write performance script to dist
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'performance.js'), performanceScript);

// Create a service worker for caching
const serviceWorker = `
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/pricing',
  '/contact',
  '/blog',
  '/case-studies',
  '/careers',
  '/partners',
  '/support',
  '/faq',
  '/demo',
  '/consultation',
  '/micro-saas',
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

fs.writeFileSync(path.join(distDir, 'sw.js'), serviceWorker);

console.log('Performance optimizations completed');