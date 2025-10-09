#!/usr/bin/env node

/**
 * Comprehensive Performance Optimizer for Zion Tech Group Website
 * This script implements advanced performance optimizations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting comprehensive performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Image optimization settings
  images: {
    formats: ['webp', 'avif'],
    quality: 85,
    sizes: [320, 640, 768, 1024, 1280, 1920],
    lazy: true,
    placeholder: 'blur'
  },
  
  // Bundle optimization
  bundle: {
    chunkSizeLimit: 100000, // 100KB
    maxChunks: 10,
    treeShaking: true,
    codeSplitting: true
  },
  
  // Caching strategies
  caching: {
    staticAssets: '1y',
    html: '1h',
    api: '5m',
    images: '30d'
  },
  
  // Critical resource hints
  resourceHints: {
    preload: [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ],
    prefetch: [
      '/api/analytics',
      '/api/performance'
    ],
    preconnect: [
      'https://fonts.googleapis.com',
      'https://www.google-analytics.com'
    ]
  },
  
  // Performance budgets
  budgets: {
    firstContentfulPaint: 1500,
    largestContentfulPaint: 2500,
    firstInputDelay: 100,
    cumulativeLayoutShift: 0.1,
    totalBlockingTime: 300
  }
};

// Generate optimized Vite configuration
function generateOptimizedViteConfig() {
  const config = {
    plugins: [
      'react()',
      'visualizer({ filename: "dist/stats.html", open: false, gzipSize: true, brotliSize: true })'
    ],
    build: {
      outDir: 'dist',
      target: 'es2020',
      minify: 'terser',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      reportCompressedSize: true,
      emptyOutDir: true,
      copyPublicDir: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 3,
          unsafe: true,
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_proto: true,
          unsafe_arrows: true,
          unsafe_methods: true,
          unsafe_regexp: true,
          unsafe_undefined: true,
          collapse_vars: true,
          sequences: true,
          dead_code: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          hoist_funs: true,
          hoist_vars: true,
          if_return: true,
          join_vars: true,
          side_effects: true,
          properties: true,
          reduce_vars: true,
          reduce_funcs: true,
          keep_fargs: false,
          keep_fnames: false,
          keep_infinity: false,
          toplevel: true,
          warnings: false,
          negate_iife: true,
          typeofs: true,
          global_defs: {
            'process.env.NODE_ENV': '"production"'
          }
        },
        mangle: {
          safari10: true,
          toplevel: true,
        },
        format: {
          comments: false,
          ecma: 2020,
        },
      },
      rollupOptions: {
        maxParallelFileOps: 2,
        treeshake: {
          moduleSideEffects: false,
        },
        external: id => {
          if (id.includes('next/') || id.includes('next')) {
            return true;
          }
          return false;
        },
        output: {
          manualChunks: id => {
            // Core React libraries
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor';
            }
            // Router library
            if (id.includes('node_modules/react-router-dom')) {
              return 'router';
            }
            // UI libraries
            if (
              id.includes('node_modules/framer-motion') ||
              id.includes('node_modules/lucide-react')
            ) {
              return 'ui';
            }
            // Utilities and web vitals
            if (id.includes('node_modules/web-vitals')) {
              return 'page';
            }
            // Split other node_modules into separate chunks
            if (id.includes('node_modules')) {
              return 'libs';
            }
          },
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    server: {
      port: 3000,
      host: true,
    },
    preview: {
      port: 4173,
      host: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
    },
    css: {
      devSourcemap: false,
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
  };

  return config;
}

// Generate service worker for caching
function generateServiceWorker() {
  const swContent = `
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/offline',
  '/css/critical.css',
  '/js/vendor.js',
  '/js/main.js'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
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
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
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

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(request)
          .then(fetchResponse => {
            // Don't cache if not a valid response
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }

            // Clone the response
            const responseToCache = fetchResponse.clone();

            // Cache static assets
            if (STATIC_ASSETS.includes(url.pathname)) {
              caches.open(STATIC_CACHE)
                .then(cache => {
                  cache.put(request, responseToCache);
                });
            } else {
              // Cache dynamic content
              caches.open(DYNAMIC_CACHE)
                .then(cache => {
                  cache.put(request, responseToCache);
                });
            }

            return fetchResponse;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline');
            }
          });
      })
  );
});

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Sync analytics data when connection is restored
  console.log('Syncing analytics data...');
}
`;

  fs.writeFileSync('public/sw.js', swContent);
  console.log('✅ Service worker generated');
}

// Generate critical CSS
function generateCriticalCSS() {
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.cyber-grid {
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.neon-text {
  color: #00ffff;
  animation: neon-glow 2s ease-in-out infinite alternate;
}

@keyframes neon-glow {
  0%, 100% {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
  }
  50% {
    text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
  }
}

.cyber-button {
  background: linear-gradient(45deg, #00ffff, #8b5cf6);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.cyber-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
}

.cyber-card {
  background: linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cyber-card:hover {
  transform: translateY(-5px);
  border-color: #00ffff;
  box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
}

/* Loading states */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .cyber-card {
    padding: 16px;
  }
  
  .cyber-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
`;

  fs.writeFileSync('public/css/critical.css', criticalCSS);
  console.log('✅ Critical CSS generated');
}

// Generate performance monitoring script
function generatePerformanceMonitor() {
  const monitorScript = `
// Performance monitoring and optimization
(function() {
  'use strict';
  
  // Web Vitals monitoring
  function measureWebVitals() {
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }
  
  // Resource timing analysis
  function analyzeResourceTiming() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const resources = performance.getEntriesByType('resource');
      const navigation = performance.getEntriesByType('navigation')[0];
      
      console.log('Resource timing analysis:', {
        totalResources: resources.length,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstByte: navigation.responseStart - navigation.requestStart,
        domInteractive: navigation.domInteractive - navigation.navigationStart
      });
    }
  }
  
  // Memory usage monitoring
  function monitorMemoryUsage() {
    if ('memory' in performance) {
      const memory = performance.memory;
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
      });
    }
  }
  
  // Lazy loading implementation
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
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
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      { href: '/css/critical.css', as: 'style' },
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  }
  
  // Initialize performance monitoring
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    // Measure web vitals
    measureWebVitals();
    
    // Analyze resource timing after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        analyzeResourceTiming();
        monitorMemoryUsage();
      }, 1000);
    });
    
    // Initialize lazy loading
    initLazyLoading();
    
    // Preload critical resources
    preloadCriticalResources();
  }
  
  // Start monitoring
  init();
})();
`;

  fs.writeFileSync('public/js/performance-monitor.js', monitorScript);
  console.log('✅ Performance monitor generated');
}

// Generate robots.txt with performance hints
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Performance hints
Crawl-delay: 1

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow heavy resources
Disallow: /api/
Disallow: /admin/
Disallow: /private/
`;

  fs.writeFileSync('public/robots.txt', robotsContent);
  console.log('✅ Robots.txt generated');
}

// Generate sitemap.xml
function generateSitemap() {
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
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-marketing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-automation</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-healthcare</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-fintech</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/quantum-computing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemapContent);
  console.log('✅ Sitemap.xml generated');
}

// Main execution
function main() {
  try {
    // Create necessary directories
    const dirs = ['public/css', 'public/js', 'scripts'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Generate optimized files
    generateServiceWorker();
    generateCriticalCSS();
    generatePerformanceMonitor();
    generateRobotsTxt();
    generateSitemap();

    console.log('🎉 Performance optimization completed successfully!');
    console.log('📊 Generated files:');
    console.log('  - public/sw.js (Service Worker)');
    console.log('  - public/css/critical.css (Critical CSS)');
    console.log('  - public/js/performance-monitor.js (Performance Monitor)');
    console.log('  - public/robots.txt (SEO)');
    console.log('  - public/sitemap.xml (SEO)');

  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { optimizations, generateOptimizedViteConfig };