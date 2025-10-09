#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Performance optimization configurations
const optimizations = {
  // Add preload hints for critical resources
  addPreloadHints: (content) => {
    const preloadHints = `
    <!-- Preload critical resources -->
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/images/hero-bg.webp" as="image">
    <link rel="preload" href="/js/vendor.js" as="script">
    `;
    
    return content.replace('<head>', `<head>${preloadHints}`);
  },

  // Add resource hints
  addResourceHints: (content) => {
    const resourceHints = `
    <!-- Resource hints -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    `;
    
    return content.replace('</head>', `${resourceHints}</head>`);
  },

  // Optimize images
  optimizeImages: (content) => {
    // Add loading="lazy" to images
    content = content.replace(/<img([^>]*?)>/g, '<img$1 loading="lazy">');
    
    // Add decoding="async" to images
    content = content.replace(/<img([^>]*?)>/g, '<img$1 decoding="async">');
    
    return content;
  },

  // Add performance monitoring
  addPerformanceMonitoring: (content) => {
    const performanceScript = `
    <script>
      // Performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
          
          // Send to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
              value: Math.round(perfData.loadEventEnd - perfData.loadEventStart)
            });
          }
        });
      }
    </script>
    `;
    
    return content.replace('</body>', `${performanceScript}</body>`);
  }
};

// Function to optimize HTML content
function optimizeHTML(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply optimizations
    const originalContent = content;
    
    content = optimizations.addPreloadHints(content);
    content = optimizations.addResourceHints(content);
    content = optimizations.optimizeImages(content);
    content = optimizations.addPerformanceMonitoring(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      modified = true;
      console.log(`✅ Optimized ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
    return false;
  }
}

// Function to create a service worker for caching
function createServiceWorker() {
  const serviceWorkerContent = `
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/static/js/vendor.js',
  '/images/logo.svg',
  '/images/hero-bg.webp'
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
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
`;

  fs.writeFileSync('./public/sw.js', serviceWorkerContent);
  console.log('✅ Created service worker');
}

// Function to optimize Vite config
function optimizeViteConfig() {
  const viteConfigPath = './vite.config.ts';
  try {
    let content = fs.readFileSync(viteConfigPath, 'utf8');
    
    // Add performance optimizations
    const performanceConfig = `
  // Performance optimizations
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react', '@heroicons/react'],
          utils: ['clsx', 'tailwind-merge'],
          charts: ['recharts'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  `;

    // Check if performance config already exists
    if (!content.includes('terserOptions')) {
      content = content.replace(
        /build:\s*{[\s\S]*?}/,
        performanceConfig
      );
      fs.writeFileSync(viteConfigPath, content);
      console.log('✅ Optimized Vite config');
    }
  } catch (error) {
    console.error('Error optimizing Vite config:', error.message);
  }
}

// Main execution
console.log('🚀 Starting performance optimization...');

// Create service worker
createServiceWorker();

// Optimize Vite config
optimizeViteConfig();

// Optimize HTML files
const htmlFiles = ['./dist/index.html'];
let optimizedCount = 0;

for (const file of htmlFiles) {
  if (fs.existsSync(file)) {
    if (optimizeHTML(file)) {
      optimizedCount++;
    }
  }
}

console.log(`✅ Optimized ${optimizedCount} HTML files`);
console.log('🎉 Performance optimization completed!');