const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  console.log('🚀 Starting performance optimizations...');
  
  // 1. Add preload hints to index.html
  const indexPath = './index.html';
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <!-- Preload critical resources -->
    <link rel="preload" href="/assets/js/vendor-BYA32aEE.js" as="script">
    <link rel="preload" href="/assets/js/index-DqcfcIlc.js" as="script">
    <link rel="preload" href="/assets/index-BLT78pJd.css" as="style">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" crossorigin>
    `;
    
    // Insert before closing head tag
    html = html.replace('</head>', preloadHints + '\n  </head>');
    
    // Add resource hints
    const resourceHints = `
    <!-- Resource hints -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    `;
    
    html = html.replace('</head>', resourceHints + '\n  </head>');
    
    fs.writeFileSync(indexPath, html);
    console.log('✅ Added preload hints and resource hints');
  }
  
  // 2. Create service worker for caching
  const serviceWorkerContent = `
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index-BLT78pJd.css',
  '/assets/js/vendor-BYA32aEE.js',
  '/assets/js/index-DqcfcIlc.js',
  '/assets/js/router-B67OpBmf.js',
  '/assets/js/ui-BiJrOvfN.js',
  '/assets/js/helmet---FNlkog.js'
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
  
  fs.writeFileSync('./public/sw.js', serviceWorkerContent);
  console.log('✅ Created service worker');
  
  // 3. Add performance monitoring
  const performanceScript = `
// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      const fcp = performance.getEntriesByName('first-contentful-paint')[0];
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      
      // Send performance data to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Page Load',
          value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
        });
      }
    }, 0);
  });
}
`;
  
  fs.writeFileSync('./public/performance.js', performanceScript);
  console.log('✅ Added performance monitoring');
  
  console.log('🎉 Performance optimizations completed!');
}

optimizePerformance();