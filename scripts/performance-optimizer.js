#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance optimization configurations
const optimizations = {
  // Image optimization
  images: {
    formats: ['webp', 'avif'],
    quality: 85,
    sizes: [320, 640, 768, 1024, 1280, 1920, 2560],
    lazy: true
  },
  
  // Code splitting
  codeSplitting: {
    vendor: ['react', 'react-dom'],
    ui: ['framer-motion', 'lucide-react', '@heroicons/react'],
    utils: ['clsx', 'tailwind-merge'],
    charts: ['recharts'],
    router: ['react-router-dom']
  },
  
  // Bundle optimization
  bundle: {
    minify: true,
    compress: true,
    treeshake: true,
    deadCodeElimination: true
  },
  
  // Caching strategies
  caching: {
    static: '1y',
    images: '1M',
    fonts: '1y',
    api: '5m'
  },
  
  // Performance budgets
  budgets: {
    js: '500kb',
    css: '100kb',
    images: '2mb',
    fonts: '500kb'
  }
};

// Generate performance optimization report
function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: optimizations,
    recommendations: [
      'Implement service worker for offline functionality',
      'Add critical CSS inlining',
      'Optimize font loading with font-display: swap',
      'Implement resource hints (preload, prefetch)',
      'Add compression (gzip/brotli)',
      'Enable HTTP/2 server push for critical resources',
      'Implement lazy loading for below-the-fold content',
      'Add performance monitoring and analytics',
      'Optimize third-party scripts loading',
      'Implement progressive web app features'
    ],
    metrics: {
      targetLCP: '2.5s',
      targetFID: '100ms',
      targetCLS: '0.1',
      targetFCP: '1.8s',
      targetTTFB: '600ms'
    }
  };
  
  return report;
}

// Create optimized Vite config
function createOptimizedViteConfig() {
  const config = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
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
          router: ['react-router-dom'],
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
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        loops: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        top_ret: true,
        toplevel: true,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true,
        beautify: false,
        ecma: 2020,
        indent_level: 0,
        indent_start: 0,
        inline_script: false,
        keep_numbers: false,
        max_line_len: false,
        preamble: null,
        preserve_annotations: false,
        quote_keys: false,
        quote_style: 0,
        safari10: true,
        semicolons: true,
        shebang: false,
        shorthand: false,
        source_map: null,
        webkit: true,
        width: 80,
        wrap_iife: false,
        wrap_func_args: true,
      }
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
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
    include: ['react', 'react-dom', 'framer-motion'],
  },
  css: {
    postcss: './postcss.config.js',
  },
});`;

  return config;
}

// Create service worker for caching
function createServiceWorker() {
  const sw = `const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
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
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache static assets
            if (url.pathname.startsWith('/static/') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
              caches.open(STATIC_CACHE)
                .then((cache) => cache.put(request, responseToCache));
            } else {
              // Cache dynamic content with size limit
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
            }

            return response;
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

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions
  console.log('Background sync triggered');
}`;

  return sw;
}

// Create PWA manifest
function createPWAManifest() {
  const manifest = {
    name: 'Zion Tech Group - Advanced AI and IT Solutions',
    short_name: 'Zion Tech',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#00ffff',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en-US',
    dir: 'ltr',
    scope: '/',
    id: 'zion-tech-group',
    related_applications: [],
    prefer_related_applications: false
  };

  return manifest;
}

// Main execution
function main() {
  console.log('🚀 Starting performance optimization...');
  
  // Generate performance report
  const report = generatePerformanceReport();
  fs.writeFileSync(
    path.join(__dirname, '../performance-report.json'),
    JSON.stringify(report, null, 2)
  );
  console.log('📊 Performance report generated');
  
  // Create optimized Vite config
  const viteConfig = createOptimizedViteConfig();
  fs.writeFileSync(
    path.join(__dirname, '../vite.config.optimized.js'),
    viteConfig
  );
  console.log('⚙️  Optimized Vite config created');
  
  // Create service worker
  const serviceWorker = createServiceWorker();
  fs.writeFileSync(
    path.join(__dirname, '../public/sw.js'),
    serviceWorker
  );
  console.log('🔧 Service worker created');
  
  // Create PWA manifest
  const manifest = createPWAManifest();
  fs.writeFileSync(
    path.join(__dirname, '../public/manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('📱 PWA manifest created');
  
  console.log('✅ Performance optimization complete!');
  console.log('📈 Check performance-report.json for detailed recommendations');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generatePerformanceReport, createOptimizedViteConfig, createServiceWorker, createPWAManifest };