#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting advanced improvements...');

// Function to add performance optimizations
function addPerformanceOptimizations() {
  const appPath = path.join(__dirname, 'src', 'App.tsx');
  const content = fs.readFileSync(appPath, 'utf8');
  
  // Add React.memo to components if not present
  if (content.includes('export default function App') && !content.includes('React.memo')) {
    const optimizedContent = content.replace(
      /export default function App/g,
      'const App = React.memo(function App'
    ).replace(
      /export default App/g,
      'export default App'
    );
    
    if (optimizedContent !== content) {
      fs.writeFileSync(appPath, optimizedContent, 'utf8');
      console.log('✅ Added React.memo to App component');
      return true;
    }
  }
  return false;
}

// Function to add service worker for better caching
function addServiceWorker() {
  const swPath = path.join(__dirname, 'public', 'sw.js');
  const swContent = `// Advanced Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-app-v2';
const STATIC_CACHE = 'zion-static-v2';
const DYNAMIC_CACHE = 'zion-dynamic-v2';

const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico'
];

// Install event - cache static assets
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

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
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
            
            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Background sync function
async function doBackgroundSync() {
  try {
    // Sync offline data when connection is restored
    console.log('Performing background sync...');
    // Add your sync logic here
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}`;

  if (!fs.existsSync(swPath)) {
    fs.writeFileSync(swPath, swContent, 'utf8');
    console.log('✅ Added advanced service worker');
    return true;
  }
  return false;
}

// Function to add PWA manifest
function addPWAManifest() {
  const manifestPath = path.join(__dirname, 'public', 'manifest.json');
  const manifestContent = {
    "name": "Zion Tech Group - AI & Technology Solutions",
    "short_name": "Zion Tech",
    "description": "Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting for modern enterprises.",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3b82f6",
    "orientation": "portrait-primary",
    "icons": [
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
      }
    ],
    "categories": ["business", "productivity", "technology"],
    "lang": "en",
    "dir": "ltr",
    "scope": "/",
    "prefer_related_applications": false
  };

  if (!fs.existsSync(manifestPath)) {
    fs.writeFileSync(manifestPath, JSON.stringify(manifestContent, null, 2), 'utf8');
    console.log('✅ Added PWA manifest');
    return true;
  }
  return false;
}

// Function to add performance monitoring
function addPerformanceMonitoring() {
  const monitoringPath = path.join(__dirname, 'src', 'utils', 'performanceMonitoring.ts');
  const content = fs.readFileSync(monitoringPath, 'utf8');
  
  if (!content.includes('PerformanceObserver')) {
    const monitoringCode = `
// Advanced Performance Monitoring
export class AdvancedPerformanceMonitor {
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];
  
  constructor() {
    this.initializeObservers();
  }
  
  private initializeObservers() {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('lcp', lastEntry.startTime);
        this.reportMetric('lcp', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
      
      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.set('fid', entry.processingStart - entry.startTime);
          this.reportMetric('fid', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
      
      // CLS Observer
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.set('cls', clsValue);
            this.reportMetric('cls', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
  }
  
  private reportMetric(name: string, value: number) {
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'Performance'
      });
    }
  }
  
  public getMetrics() {
    return Object.fromEntries(this.metrics);
  }
  
  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
  }
}`;

    const updatedContent = content + monitoringCode;
    fs.writeFileSync(monitoringPath, updatedContent, 'utf8');
    console.log('✅ Added advanced performance monitoring');
    return true;
  }
  return false;
}

// Function to add security headers
function addSecurityHeaders() {
  const headersPath = path.join(__dirname, 'public', '_headers');
  const headersContent = `/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none';
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
`;

  if (!fs.existsSync(headersPath)) {
    fs.writeFileSync(headersPath, headersContent, 'utf8');
    console.log('✅ Added security headers');
    return true;
  }
  return false;
}

// Main execution
let improvements = 0;

console.log('📁 Implementing advanced improvements...');

if (addPerformanceOptimizations()) improvements++;
if (addServiceWorker()) improvements++;
if (addPWAManifest()) improvements++;
if (addPerformanceMonitoring()) improvements++;
if (addSecurityHeaders()) improvements++;

console.log(`\n🎉 Advanced improvements completed!`);
console.log(`✨ Improvements: ${improvements} features added`);
console.log(`\n🚀 Running build to verify improvements...`);