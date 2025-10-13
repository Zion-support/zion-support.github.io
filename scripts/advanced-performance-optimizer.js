#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🚀 Starting advanced performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Image optimization
  images: {
    formats: ['webp', 'avif'],
    quality: 85,
    sizes: [320, 640, 768, 1024, 1280, 1920],
    lazy: true
  },
  
  // Bundle optimization
  bundles: {
    maxChunkSize: 200000, // 200KB
    minChunkSize: 10000,  // 10KB
    vendorChunks: ['react', 'react-dom', 'react-router-dom'],
    commonChunks: ['utils', 'components']
  },
  
  // Caching strategies
  caching: {
    staticAssets: '1y',
    html: '1h',
    api: '5m',
    images: '30d'
  },
  
  // Preloading strategies
  preloading: {
    critical: ['/app/page.tsx', '/app/components/Navigation.tsx'],
    routes: ['/about', '/contact', '/services'],
    images: ['/hero-bg.jpg', '/logo.svg']
  }
};

// Generate optimized service worker
const generateServiceWorker = () => {
  const swContent = `
const CACHE_NAME = 'zion-tech-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/manifest.json',
  '/favicon.svg'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and other protocols
  if (!url.protocol.startsWith('http')) return;
  
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        return fetch(request).then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Determine cache strategy based on request type
          let cacheName = DYNAMIC_CACHE;
          if (url.pathname === '/' || STATIC_ASSETS.includes(url.pathname)) {
            cacheName = STATIC_CACHE;
          }
          
          caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('/');
        }
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions
  console.log('Syncing contact form data...');
}
`;

  fs.writeFileSync('dist/sw.js', swContent);
  console.log('✅ Service worker generated');
};

// Generate optimized manifest
const generateManifest = () => {
  const manifest = {
    name: 'Zion Tech Group - AI & IT Solutions',
    short_name: 'Zion Tech',
    description: 'Leading provider of AI-powered solutions, IT services, and digital transformation',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#00ffff',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    scope: '/',
    id: 'zion-tech-group-app'
  };

  fs.writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, 2));
  console.log('✅ PWA manifest generated');
};

// Generate critical CSS
const generateCriticalCSS = () => {
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
.bg-gradient-to-br { background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a); }
.text-transparent { color: transparent; }
.bg-clip-text { -webkit-background-clip: text; background-clip: text; }
.bg-gradient-to-r { background: linear-gradient(to right, #06b6d4, #8b5cf6); }
.from-cyan-400 { --tw-gradient-from: #22d3ee; }
.to-purple-400 { --tw-gradient-to: #a855f7; }
.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
`;

  fs.writeFileSync('dist/critical.css', criticalCSS);
  console.log('✅ Critical CSS generated');
};

// Generate performance monitoring script
const generatePerformanceMonitor = () => {
  const perfScript = `
// Performance monitoring and optimization
(function() {
  'use strict';
  
  // Web Vitals monitoring
  function reportWebVitals(metric) {
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }
  
  // Lazy loading for images
  function initLazyLoading() {
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
  
  // Preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      '/app/page.tsx',
      '/app/components/Navigation.tsx',
      '/app/components/Footer.tsx'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = resource;
      document.head.appendChild(link);
    });
  }
  
  // Initialize performance optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyLoading();
      preloadCriticalResources();
    });
  } else {
    initLazyLoading();
    preloadCriticalResources();
  }
  
  // Report performance metrics
  if ('web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });
  }
})();
`;

  fs.writeFileSync('dist/performance.js', perfScript);
  console.log('✅ Performance monitor generated');
};

// Generate robots.txt with performance hints
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

# Performance hints
Crawl-delay: 1

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /5g-solutions
`;

  fs.writeFileSync('dist/robots.txt', robotsTxt);
  console.log('✅ Enhanced robots.txt generated');
};

// Generate comprehensive sitemap
const generateSitemap = () => {
  const routes = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
    { url: '/careers', priority: '0.6', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://ziontechgroup.com${route.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('dist/sitemap.xml', sitemap);
  console.log('✅ Enhanced sitemap generated');
};

// Main execution
const main = () => {
  try {
    // Ensure dist directory exists
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist', { recursive: true });
    }

    generateServiceWorker();
    generateManifest();
    generateCriticalCSS();
    generatePerformanceMonitor();
    generateRobotsTxt();
    generateSitemap();

    console.log('🎉 Advanced performance optimization completed!');
    console.log('📊 Generated files:');
    console.log('  - dist/sw.js (Service Worker)');
    console.log('  - dist/manifest.json (PWA Manifest)');
    console.log('  - dist/critical.css (Critical CSS)');
    console.log('  - dist/performance.js (Performance Monitor)');
    console.log('  - dist/robots.txt (Enhanced Robots)');
    console.log('  - dist/sitemap.xml (Enhanced Sitemap)');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
};

main();