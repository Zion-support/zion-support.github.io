#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Starting Advanced Performance Optimization 2025...');

// Performance optimization configurations
const optimizations = {
  // Bundle optimization
  bundle: {
    codeSplitting: true,
    treeShaking: true,
    minification: true,
    compression: true,
    lazyLoading: true,
    preloading: true,
    prefetching: true
  },
  
  // Image optimization
  images: {
    webp: true,
    avif: true,
    responsive: true,
    lazyLoading: true,
    compression: 85,
    placeholder: true
  },
  
  // Caching strategies
  caching: {
    serviceWorker: true,
    httpCaching: true,
    localStorage: true,
    sessionStorage: true,
    indexedDB: true
  },
  
  // Performance monitoring
  monitoring: {
    webVitals: true,
    performanceAPI: true,
    errorTracking: true,
    analytics: true,
    realUserMonitoring: true
  }
};

// Create optimized Vite configuration
function createOptimizedViteConfig() {
  console.log('🔧 Creating optimized Vite configuration...');
  
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }]
        ]
      }
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,avif}'],
        runtimeCaching: [
          {
            urlPattern: /^https://api\\./,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              }
            }
          }
        ]
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Zion Tech Group',
        short_name: 'Zion Tech',
        description: 'AI & Technology Solutions',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
          utils: ['axios', 'framer-motion', 'clsx', 'tailwind-merge'],
          charts: ['recharts'],
          forms: ['react-hook-form', '@hookform/resolvers']
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    sourcemap: false,
    reportCompressedSize: true
  },
  server: {
    hmr: true,
    port: 3000,
    host: true
  },
  preview: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@vite/client', '@vite/env']
  }
});`;

  fs.writeFileSync('vite.config.js', viteConfig);
  console.log('✅ Optimized Vite configuration created');
}

// Create performance monitoring component
function createPerformanceMonitor() {
  console.log('📊 Creating performance monitoring system...');
  
  const performanceMonitor = `import { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Web Vitals monitoring
    const vitals = {};
    
    getCLS((metric) => {
      vitals.CLS = metric.value;
      console.log('CLS:', metric);
    });
    
    getFID((metric) => {
      vitals.FID = metric.value;
      console.log('FID:', metric);
    });
    
    getFCP((metric) => {
      vitals.FCP = metric.value;
      console.log('FCP:', metric);
    });
    
    getLCP((metric) => {
      vitals.LCP = metric.value;
      console.log('LCP:', metric);
    });
    
    getTTFB((metric) => {
      vitals.TTFB = metric.value;
      console.log('TTFB:', metric);
    });

    setMetrics(vitals);

    // Performance API monitoring
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log('Performance measure:', entry.name, entry.duration);
          }
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
          if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry.name, entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }

    // Error tracking
    const handleError = (event) => {
      console.error('JavaScript error:', event.error);
      // Send to analytics service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.error?.message || 'Unknown error',
          fatal: false
        });
      }
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      // Send to analytics service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.reason?.message || 'Unhandled promise rejection',
          fatal: false
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Development mode performance panel
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="flex items-center gap-2 mb-2">
          <span>Performance Monitor</span>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="text-blue-400 hover:text-blue-300"
          >
            {isVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        {isVisible && (
          <div className="space-y-1">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4">
                <span>{key}:</span>
                <span className="text-green-400">{value?.toFixed(2) || 'N/A'}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}`;

  fs.writeFileSync('components/PerformanceMonitor.jsx', performanceMonitor);
  console.log('✅ Performance monitoring system created');
}

// Create image optimization utilities
function createImageOptimization() {
  console.log('🖼️ Creating image optimization utilities...');
  
  const imageOptimizer = `import { useState, useEffect } from 'react';

export function useImageOptimization(src, options = {}) {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    quality = 85,
    format = 'webp',
    width,
    height,
    lazy = true
  } = options;

  useEffect(() => {
    if (!src) return;

    const optimizeImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Create optimized image URL
        const params = new URLSearchParams({
          q: quality.toString(),
          f: format,
          ...(width && { w: width.toString() }),
          ...(height && { h: height.toString() })
        });

        const optimizedUrl = \`\${src}?\${params.toString()}\`;
        setOptimizedSrc(optimizedUrl);
      } catch (err) {
        setError(err);
        setOptimizedSrc(src); // Fallback to original
      } finally {
        setIsLoading(false);
      }
    };

    optimizeImage();
  }, [src, quality, format, width, height]);

  return { optimizedSrc, isLoading, error };
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  quality = 85,
  format = 'webp',
  width,
  height,
  lazy = true,
  ...props 
}) {
  const { optimizedSrc, isLoading, error } = useImageOptimization(src, {
    quality,
    format,
    width,
    height,
    lazy
  });

  return (
    <div className={\`relative overflow-hidden \${className}\`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={optimizedSrc || src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        className={\`transition-opacity duration-300 \${isLoading ? 'opacity-0' : 'opacity-100'}\`}
        onError={() => {
          if (error) {
            console.warn('Image optimization failed, using original:', error);
          }
        }}
        {...props}
      />
    </div>
  );
}`;

  fs.writeFileSync('hooks/useImageOptimization.js', imageOptimizer);
  console.log('✅ Image optimization utilities created');
}

// Create caching utilities
function createCachingUtilities() {
  console.log('💾 Creating caching utilities...');
  
  const cachingUtils = `// Caching utilities for improved performance

export class CacheManager {
  constructor(prefix = 'zion_') {
    this.prefix = prefix;
    this.maxAge = 24 * 60 * 60 * 1000; // 24 hours
  }

  // Local Storage caching
  set(key, value, ttl = this.maxAge) {
    try {
      const item = {
        value,
        timestamp: Date.now(),
        ttl
      };
      localStorage.setItem(\`\${this.prefix}\${key}\`, JSON.stringify(item));
    } catch (error) {
      console.warn('Failed to set cache item:', error);
    }
  }

  get(key) {
    try {
      const item = localStorage.getItem(\`\${this.prefix}\${key}\`);
      if (!item) return null;

      const parsed = JSON.parse(item);
      const now = Date.now();

      if (now - parsed.timestamp > parsed.ttl) {
        this.delete(key);
        return null;
      }

      return parsed.value;
    } catch (error) {
      console.warn('Failed to get cache item:', error);
      return null;
    }
  }

  delete(key) {
    try {
      localStorage.removeItem(\`\${this.prefix}\${key}\`);
    } catch (error) {
      console.warn('Failed to delete cache item:', error);
    }
  }

  clear() {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Failed to clear cache:', error);
    }
  }
}

// Memory cache for frequently accessed data
export class MemoryCache {
  constructor(maxSize = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  get(key) {
    return this.cache.get(key);
  }

  has(key) {
    return this.cache.has(key);
  }

  delete(key) {
    return this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}

// React hook for caching
export function useCache(key, fetcher, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    ttl = 24 * 60 * 60 * 1000, // 24 hours
    cache = new CacheManager()
  } = options;

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        const cached = cache.get(key);
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }

        // Fetch fresh data
        const result = await fetcher();
        setData(result);
        
        // Cache the result
        cache.set(key, result, ttl);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [key, fetcher, ttl, cache]);

  return { data, loading, error };
}`;

  fs.writeFileSync('utils/caching.js', cachingUtils);
  console.log('✅ Caching utilities created');
}

// Create service worker for PWA
function createServiceWorker() {
  console.log('🔧 Creating service worker...');
  
  const serviceWorker = `// Service Worker for PWA functionality
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});`;

  fs.writeFileSync('public/sw.js', serviceWorker);
  console.log('✅ Service worker created');
}

// Main execution
async function main() {
  try {
    console.log('🚀 Starting performance optimization...');
    
    // Create necessary directories
    const dirs = ['hooks', 'utils', 'public'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Implement optimizations
    createOptimizedViteConfig();
    createPerformanceMonitor();
    createImageOptimization();
    createCachingUtilities();
    createServiceWorker();

    console.log('✅ Performance optimization complete!');
    console.log('⚡ Your app is now optimized for maximum performance!');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main();