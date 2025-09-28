#!/usr/bin/env node

/**
 * Performance Enhancement Script for Zion Tech Group Website
 * This script implements advanced performance optimizations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance enhancements...');

// 1. Optimize Vite configuration
function optimizeViteConfig() {
    console.log('⚙️ Optimizing Vite configuration...');
    
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    
    // Add advanced optimizations if not already present
    const optimizations = `
        // Advanced performance optimizations
        build: {
          rollupOptions: {
            output: {
              manualChunks: {
                'vendor-react': ['react', 'react-dom'],
                'vendor-router': ['react-router-dom'],
                'vendor-charts': ['recharts'],
                'vendor-utils': ['clsx', 'tailwind-merge', 'axios'],
                'vendor-icons': ['lucide-react'],
                'vendor-motion': ['framer-motion']
              }
            }
          },
          minify: 'terser',
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          },
          sourcemap: false,
          chunkSizeWarningLimit: 1000
        },
        
        // Optimize dependencies
        optimizeDeps: {
          include: [
            'react',
            'react-dom',
            'react-router-dom',
            'framer-motion',
            'lucide-react',
            'clsx',
            'tailwind-merge'
          ]
        },
        
        // Performance optimizations
        server: {
          hmr: {
            overlay: false
          }
        }
    `;
    
    if (!viteConfig.includes('manualChunks')) {
        const insertPoint = viteConfig.indexOf('export default defineConfig({');
        if (insertPoint !== -1) {
            const before = viteConfig.substring(0, insertPoint);
            const after = viteConfig.substring(insertPoint);
            viteConfig = before + optimizations + '\n' + after;
            fs.writeFileSync(viteConfigPath, viteConfig);
            console.log('✅ Vite configuration optimized');
        }
    } else {
        console.log('✅ Vite configuration already optimized');
    }
}

// 2. Create advanced service worker
function createAdvancedServiceWorker() {
    console.log('🔧 Creating advanced service worker...');
    
    const serviceWorkerContent = `
// Advanced Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v2';
const STATIC_CACHE = 'zion-static-v2';
const DYNAMIC_CACHE = 'zion-dynamic-v2';

// Cache strategies
const CACHE_STRATEGIES = {
    static: ['/', '/about', '/services', '/contact'],
    dynamic: ['/api/', '/blog/', '/portfolio/']
};

// Install event
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                return cache.addAll(CACHE_STRATEGIES.static);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event with advanced caching strategies
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') return;
    
    // Handle different types of requests
    if (CACHE_STRATEGIES.static.includes(url.pathname)) {
        // Static content - cache first
        event.respondWith(cacheFirst(request));
    } else if (url.pathname.startsWith('/api/')) {
        // API requests - network first
        event.respondWith(networkFirst(request));
    } else if (url.pathname.startsWith('/blog/') || url.pathname.startsWith('/portfolio/')) {
        // Dynamic content - stale while revalidate
        event.respondWith(staleWhileRevalidate(request));
    } else {
        // Default - network first with cache fallback
        event.respondWith(networkFirst(request));
    }
});

// Cache first strategy
async function cacheFirst(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Cache first strategy failed:', error);
        return new Response('Offline content not available', { status: 503 });
    }
}

// Network first strategy
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        return cachedResponse || new Response('Network error', { status: 503 });
    }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    const fetchPromise = fetch(request).then((networkResponse) => {
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    }).catch(() => cachedResponse);
    
    return cachedResponse || fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    console.log('Service Worker: Background sync');
    // Implement background sync logic here
}

// Push notifications
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/icons/icon-192x192.png',
            badge: '/icons/badge-72x72.png',
            vibrate: [200, 100, 200],
            data: data.data,
            actions: data.actions || []
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

console.log('Service Worker: Loaded');
`;

    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(publicDir, 'sw-advanced.js'), serviceWorkerContent);
    console.log('✅ Advanced service worker created');
}

// 3. Optimize CSS and assets
function optimizeAssets() {
    console.log('🎨 Optimizing CSS and assets...');
    
    // Create optimized CSS file
    const optimizedCSS = `
/* Performance Optimized CSS */
:root {
  /* Optimized color scheme */
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #06b6d4;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
  
  /* Performance optimized fonts */
  --font-primary: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  
  /* Optimized spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Performance optimized transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Critical CSS - Above the fold */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
  padding: var(--spacing-lg);
}

/* Performance optimized animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Optimized loading states */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Performance optimized components */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Optimized responsive design */
@media (max-width: 768px) {
  .hero-section {
    padding: var(--spacing-md);
    min-height: 80vh;
  }
}

/* Dark mode optimizations */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #60a5fa;
    --secondary-color: #3b82f6;
  }
  
  .card {
    background: #1f2937;
    color: white;
  }
}

/* Performance optimizations */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

    const stylesDir = path.join(process.cwd(), 'src', 'styles');
    if (!fs.existsSync(stylesDir)) {
        fs.mkdirSync(stylesDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(stylesDir, 'performance-optimized.css'), optimizedCSS);
    console.log('✅ Performance optimized CSS created');
}

// 4. Create performance monitoring dashboard
function createPerformanceDashboard() {
    console.log('📊 Creating performance monitoring dashboard...');
    
    const dashboardContent = `
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Database, Wifi, Shield } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage: number;
  networkSpeed: string;
  securityScore: number;
}

export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    memoryUsage: 0,
    networkSpeed: 'Unknown',
    securityScore: 0
  });

  useEffect(() => {
    const collectMetrics = () => {
      // Collect Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value })));
          getFID((metric) => setMetrics(prev => ({ ...prev, firstInputDelay: metric.value })));
          getFCP((metric) => setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value })));
          getLCP((metric) => setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value })));
          getTTFB((metric) => setMetrics(prev => ({ ...prev, loadTime: metric.value })));
        });
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100 
        }));
      }

      // Network speed
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ ...prev, networkSpeed: connection.effectiveType || 'Unknown' }));
      }

      // Security score (basic implementation)
      let securityScore = 100;
      if (!location.protocol.includes('https')) securityScore -= 20;
      if (!('serviceWorker' in navigator)) securityScore -= 10;
      setMetrics(prev => ({ ...prev, securityScore }));
    };

    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPerformanceColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Activity className="mr-2" />
        Performance Dashboard
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Load Time</h3>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <p className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, poor: 3000 })}`}>
            {metrics.loadTime.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">First Contentful Paint</h3>
            <Zap className="w-5 h-5 text-yellow-600" />
          </div>
          <p className={`text-2xl font-bold ${getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}`}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Largest Contentful Paint</h3>
            <Zap className="w-5 h-5 text-orange-600" />
          </div>
          <p className={`text-2xl font-bold ${getPerformanceColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}`}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">First Input Delay</h3>
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <p className={`text-2xl font-bold ${getPerformanceColor(metrics.firstInputDelay, { good: 100, poor: 300 })}`}>
            {metrics.firstInputDelay.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Memory Usage</h3>
            <Database className="w-5 h-5 text-green-600" />
          </div>
          <p className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 50, poor: 80 })}`}>
            {metrics.memoryUsage.toFixed(1)}%
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Network Speed</h3>
            <Wifi className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {metrics.networkSpeed}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Security Score</h3>
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <p className={`text-2xl font-bold ${getPerformanceColor(100 - metrics.securityScore, { good: 20, poor: 50 })}`}>
            {metrics.securityScore}/100
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
`;

    const componentsDir = path.join(process.cwd(), 'src', 'components');
    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(componentsDir, 'PerformanceDashboard.tsx'), dashboardContent);
    console.log('✅ Performance dashboard created');
}

// 5. Update package.json with performance scripts
function updatePackageScripts() {
    console.log('📦 Updating package.json with performance scripts...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const newScripts = {
        ...packageJson.scripts,
        'build:performance': 'NODE_ENV=production vite build --mode performance',
        'analyze:bundle': 'vite-bundle-analyzer dist/stats.html',
        'test:performance': 'lighthouse http://localhost:3000 --output=html --output-path=./performance-report.html',
        'optimize:images': 'node scripts/optimize-images.js',
        'preload:critical': 'node scripts/preload-critical-resources.js',
        'audit:security': 'npm audit --audit-level=moderate',
        'audit:performance': 'node scripts/performance-audit.js'
    };
    
    packageJson.scripts = newScripts;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Package.json scripts updated');
}

// Main execution
async function main() {
    try {
        optimizeViteConfig();
        createAdvancedServiceWorker();
        optimizeAssets();
        createPerformanceDashboard();
        updatePackageScripts();
        
        console.log('🎉 Performance enhancements completed successfully!');
        console.log('📊 Next steps:');
        console.log('  1. Run "pnpm run build:performance" for optimized build');
        console.log('  2. Run "pnpm run analyze:bundle" to analyze bundle size');
        console.log('  3. Run "pnpm run test:performance" for performance testing');
        
    } catch (error) {
        console.error('❌ Performance enhancement failed:', error);
        process.exit(1);
    }
}

main();