// Service Worker for Zion Tech Group
// Provides offline support, caching, and performance improvements

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';
const API_CACHE = 'zion-api-v1.0.0';

// Cache strategies
const CACHE_STRATEGIES = {
  STATIC: 'cache-first',
  DYNAMIC: 'stale-while-revalidate',
  API: 'network-first',
  IMAGES: 'cache-first'
};

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/site.webmanifest'
];

// Critical CSS and JS files
const CRITICAL_ASSETS = [
  '/src/styles/enhanced-futuristic.css',
  '/src/index.css'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/services',
  '/api/solutions',
  '/api/contact'
];

// Image patterns to cache
const IMAGE_PATTERNS = [
  /\.(png|jpg|jpeg|gif|svg|webp)$/i,
  /\/images\//i
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_FILES);
      }),
      caches.open(DYNAMIC_CACHE).then((cache) => {
        console.log('Caching critical assets');
        return cache.addAll(CRITICAL_ASSETS);
      })
    ]).then(() => {
      console.log('Service Worker installed successfully');
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
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
      console.log('Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isImage(request)) {
    event.respondWith(handleImage(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handleDynamicAsset(request));
  }
});

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return STATIC_FILES.some(file => url.pathname === file) ||
         CRITICAL_ASSETS.some(asset => url.pathname.includes(asset));
}

// Check if request is for an image
function isImage(request) {
  const url = new URL(request.url);
  return IMAGE_PATTERNS.some(pattern => pattern.test(url.pathname));
}

// Check if request is for an API endpoint
function isAPIRequest(request) {
  const url = new URL(request.url);
  return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint)) ||
         url.pathname.startsWith('/api/');
}

// Handle static assets with cache-first strategy
async function handleStaticAsset(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling static asset:', error);
    return new Response('Static asset not available', { status: 404 });
  }
}

// Handle images with cache-first strategy
async function handleImage(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling image:', error);
    return new Response('Image not available', { status: 404 });
  }
}

// Handle API requests with network-first strategy
async function handleAPIRequest(request) {
  try {
    const cache = await caches.open(API_CACHE);
    
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (networkError) {
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      throw networkError;
    }
  } catch (error) {
    console.error('Error handling API request:', error);
    return new Response('API not available', { status: 503 });
  }
}

// Handle dynamic assets with stale-while-revalidate strategy
async function handleDynamicAsset(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    // Return cached response immediately if available
    if (cachedResponse) {
      // Update cache in background
      fetch(request).then((networkResponse) => {
        if (networkResponse.ok) {
          cache.put(request, networkResponse);
        }
      }).catch(() => {
        // Ignore background update errors
      });
      
      return cachedResponse;
    }

    // No cache, fetch from network
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling dynamic asset:', error);
    return new Response('Asset not available', { status: 404 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Handle background sync
async function doBackgroundSync() {
  try {
    // Process any pending offline actions
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processOfflineAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Failed to process offline action:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Get pending offline actions from IndexedDB
async function getPendingActions() {
  // This would typically use IndexedDB to store offline actions
  // For now, return empty array
  return [];
}

// Process an offline action
async function processOfflineAction(action) {
  // This would typically send data to the server
  // For now, just log the action
  console.log('Processing offline action:', action);
}

// Remove a processed offline action
async function removePendingAction(id) {
  // This would typically remove the action from IndexedDB
  console.log('Removing processed action:', id);
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/zion-tech-group-logo.png',
      badge: '/images/badge.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View Details',
          icon: '/images/checkmark.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/images/xmark.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle message events from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Periodic cache cleanup
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'cache-cleanup') {
    event.waitUntil(cleanupOldCaches());
  }
});

// Clean up old caches
async function cleanupOldCaches() {
  try {
    const cacheNames = await caches.keys();
    const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE, API_CACHE];
    
    for (const cacheName of cacheNames) {
      if (!currentCaches.includes(cacheName)) {
        await caches.delete(cacheName);
        console.log('Cleaned up old cache:', cacheName);
      }
    }
  } catch (error) {
    console.error('Cache cleanup failed:', error);
  }
}

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

console.log('Zion Tech Group Service Worker loaded successfully');
