<<<<<<< HEAD
import React from 'react';
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Running advanced performance optimizations...');

// 1. Optimize bundle splitting
const optimizeBundleSplitting = () => {
  console.log('✓ Optimizing bundle splitting...');
  
  const viteConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', 'framer-motion'],
          router: ['react-router-dom'],
          seo: ['react-helmet-async']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
`;

  fs.writeFileSync('vite.config.js', viteConfig);
};

// 2. Create service worker for caching
const createServiceWorker = () => {
  console.log('✓ Creating service worker...');
  
  const serviceWorker = `
const CACHE_NAME = 'zion-tech-v1';
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
});
`;

  fs.writeFileSync('public/sw.js', serviceWorker);
};

// Execute optimizations
try {
  optimizeBundleSplitting();
  createServiceWorker();
  
  console.log('✅ Advanced performance optimizations completed successfully!');
} catch (error) {
  console.error('❌ Error during optimization:', error);
  process.exit(1);
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
