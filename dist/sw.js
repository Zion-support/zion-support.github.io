// Service Worker for Zion Tech Group Website
// Version: 1.0.0
// Cache Name: zion-tech-v1

const CACHE_NAME = 'zion-tech-v1';
<<<<<<< HEAD
const STATIC_CACHE = 'zion-tech-static-v1';
const DYNAMIC_CACHE = 'zion-tech-dynamic-v1';
const API_CACHE = 'zion-tech-api-v1';
=======
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';
const API_CACHE = 'zion-api-v1';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
<<<<<<< HEAD
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
=======
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
];

const API_ENDPOINTS = [
  '/api/',
  '/graphql',
  '/rest/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Opened static cache');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
<<<<<<< HEAD
        console.error('Failed to cache static files:', error);
=======
        console.error('Error caching static assets:', error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
<<<<<<< HEAD
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
=======
    caches.keys().then((cacheNames) => {
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
    }).then(() => {
      console.log('Service worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
<<<<<<< HEAD
  
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
=======

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // API requests - Network first with cache fallback
  if (API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Static assets - Cache first with network fallback
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
    return;
  }

  // HTML pages - Network first with cache fallback
  if (request.destination === 'document') {
    event.respondWith(handleDocumentRequest(request));
    return;
  }

  // Default - Network first with cache fallback
  event.respondWith(handleDefaultRequest(request));
});

// Handle API requests
async function handleApiRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(API_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline response
    return new Response(
      JSON.stringify({ error: 'Network error, please check your connection' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
  }
}

// Handle static assets
async function handleStaticAsset(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return offline response for critical assets
    if (isCriticalAsset(request)) {
      return new Response(
        'Offline - Please check your connection',
        { status: 503, statusText: 'Service Unavailable' }
      );
    }
    
    throw error;
  }
}

// Handle document requests
async function handleDocumentRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page
    return caches.match('/offline.html');
  }
}

// Handle default requests
async function handleDefaultRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    request.destination === 'image' ||
    request.destination === 'font' ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  );
}

// Check if asset is critical
function isCriticalAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname === '/' ||
    url.pathname === '/index.html' ||
    url.pathname.includes('main.css') ||
    url.pathname.includes('bundle.js')
  );
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Get offline actions from IndexedDB
    const offlineActions = await getOfflineActions();
    
    for (const action of offlineActions) {
      try {
        await processOfflineAction(action);
        await removeOfflineAction(action.id);
      } catch (error) {
        console.error('Failed to process offline action:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
<<<<<<< HEAD
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
=======
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo192.png',
      badge: '/logo192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View',
          icon: '/logo192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/logo192.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
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

<<<<<<< HEAD
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
=======
// Helper functions for offline actions (would need IndexedDB implementation)
async function getOfflineActions() {
  // Implementation would use IndexedDB to store/retrieve offline actions
  return [];
}

async function processOfflineAction(action) {
  // Implementation would process stored offline actions
  console.log('Processing offline action:', action);
}

async function removeOfflineAction(id) {
  // Implementation would remove processed offline actions
  console.log('Removing offline action:', id);
}

// Message handling for communication with main thread
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
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
  console.error('Service worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
<<<<<<< HEAD
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
=======
  console.error('Service worker unhandled rejection:', event.reason);
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
