// Service Worker for Zion Tech Group Website
// Version: 1.0.0
// Cache Name: zion-tech-v1

const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE = 'zion-tech-static-v1';
const DYNAMIC_CACHE = 'zion-tech-dynamic-v1';
const API_CACHE = 'zion-tech-api-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/css/index.css',
  '/js/index.js',
  '/images/zion-tech-logo.png',
  '/images/zion-tech-hero.jpg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/services',
  '/api/pricing',
  '/api/contact'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - handle different caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests
  if (isStaticAsset(request)) {
    // Static assets: Cache-first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isAPIRequest(request)) {
    // API requests: Network-first with cache fallback
    event.respondWith(networkFirst(request, API_CACHE));
  } else if (isPageRequest(request)) {
    // Page requests: Network-first with cache fallback
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Other requests: Network-first
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icons/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-72x72.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname.startsWith('/css/') ||
    url.pathname.startsWith('/js/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/fonts/') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.ttf') ||
    url.pathname.endsWith('.eot')
  );
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
}

function isPageRequest(request) {
  const url = new URL(request.url);
  return (
    url.pathname === '/' ||
    url.pathname === '/micro-saas-services' ||
    url.pathname === '/pricing' ||
    url.pathname.endsWith('.html')
  );
}

// Cache-first strategy for static assets
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache-first strategy failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Network-first strategy with cache fallback
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for page requests
    if (isPageRequest(request)) {
      return caches.match('/offline.html');
    }
    
    return new Response('Offline content not available', { status: 503 });
  }
}

// Background sync function
async function doBackgroundSync() {
  try {
    console.log('Performing background sync...');
    
    // Get all clients
    const clients = await self.clients.matchAll();
    
    // Send message to clients about background sync
    clients.forEach((client) => {
      client.postMessage({
        type: 'BACKGROUND_SYNC',
        message: 'Background sync completed'
      });
    });
    
    console.log('Background sync completed successfully');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Message handling from clients
self.addEventListener('message', (event) => {
  console.log('Message received from client:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      version: '1.0.0',
      cacheName: CACHE_NAME
    });
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

// Performance monitoring
let performanceMetrics = {
  cacheHits: 0,
  cacheMisses: 0,
  networkRequests: 0,
  errors: 0
};

// Update metrics
function updateMetrics(type) {
  switch (type) {
    case 'cacheHit':
      performanceMetrics.cacheHits++;
      break;
    case 'cacheMiss':
      performanceMetrics.cacheMisses++;
      break;
    case 'networkRequest':
      performanceMetrics.networkRequests++;
      break;
    case 'error':
      performanceMetrics.errors++;
      break;
  }
  
  // Store metrics in IndexedDB for analytics
  storeMetrics(performanceMetrics);
}

// Store metrics in IndexedDB
async function storeMetrics(metrics) {
  try {
    const db = await openDB('zion-tech-metrics', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('metrics')) {
          db.createObjectStore('metrics', { keyPath: 'id' });
        }
      }
    });
    
    await db.put('metrics', {
      id: 'performance',
      ...metrics,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Failed to store metrics:', error);
  }
}

// IndexedDB helper
function openDB(name, version, upgradeCallback) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => upgradeCallback(request.result);
  });
}

console.log('Zion Tech Group Service Worker loaded successfully');