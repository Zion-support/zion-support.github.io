#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting advanced performance optimization...');

// 1. Optimize Vite configuration for better chunking
const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
  console.log('📦 Optimizing Vite configuration...');
  
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resolve = path.resolve;

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});`;

  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log('✅ Vite configuration optimized');
}

// 2. Generate performance monitoring script
const performanceScript = `// Performance monitoring script
(function() {
  'use strict';
  
  // Monitor Core Web Vitals
  function getCLS(onPerfEntry) {
    let clsValue = 0;
    let clsEntries = [];
    let sessionValue = 0;
    let sessionEntries = [];
    
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          
          if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
          
          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            clsEntries = [...sessionEntries];
            onPerfEntry && onPerfEntry(clsValue);
          }
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
  }
  
  function getFID(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        onPerfEntry && onPerfEntry(entry.processingStart - entry.startTime);
      }
    }).observe({ type: 'first-input', buffered: true });
  }
  
  function getFCP(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          onPerfEntry && onPerfEntry(entry.startTime);
        }
      }
    }).observe({ type: 'paint', buffered: true });
  }
  
  function getLCP(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      onPerfEntry && onPerfEntry(lastEntry.startTime);
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  }
  
  function getTTFB(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.responseStart > 0) {
          onPerfEntry && onPerfEntry(entry.responseStart - entry.requestStart);
        }
      }
    }).observe({ type: 'navigation', buffered: true });
  }
  
  // Report metrics
  function reportMetric(name, value) {
    console.log(\`[Performance] \${name}: \${value}ms\`);
    
    // Send to analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        event_category: 'Performance',
        value: Math.round(value),
        non_interaction: true
      });
    }
  }
  
  // Initialize monitoring
  getCLS(reportMetric.bind(null, 'CLS'));
  getFID(reportMetric.bind(null, 'FID'));
  getFCP(reportMetric.bind(null, 'FCP'));
  getLCP(reportMetric.bind(null, 'LCP'));
  getTTFB(reportMetric.bind(null, 'TTFB'));
  
  // Monitor resource loading
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      reportMetric('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      reportMetric('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
    }
  });
})();`;

const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'performance.js'), performanceScript);
console.log('✅ Performance monitoring script generated');

// 3. Generate service worker for caching
const serviceWorkerScript = `// Service Worker for caching
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
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
});`;

fs.writeFileSync(path.join(distDir, 'sw.js'), serviceWorkerScript);
console.log('✅ Service worker generated');

// 4. Generate manifest.json for PWA
const manifest = {
  "name": "Zion Tech Group",
  "short_name": "Zion Tech",
  "description": "Advanced AI and IT Solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};

fs.writeFileSync(path.join(distDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('✅ PWA manifest generated');

console.log('🎉 Advanced performance optimization completed!');
console.log('📈 Performance improvements:');
console.log('  - Vite configuration optimized');
console.log('  - Performance monitoring enabled');
console.log('  - Service worker for caching');
console.log('  - PWA manifest generated');
console.log('  - Core Web Vitals tracking');
console.log('  - Resource loading optimization');