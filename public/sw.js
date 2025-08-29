// Zion Tech Group Service Worker
// Version: 2.0.0
// Purpose: PWA capabilities, offline support, and performance optimization

const CACHE_NAME = 'zion-tech-group-v2.0.0';
const STATIC_CACHE = 'zion-static-v2.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v2.0.0';
const API_CACHE = 'zion-api-v2.0.0';

// Cache strategies
const CACHE_STRATEGIES = {
  STATIC: 'cache-first',
  DYNAMIC: 'stale-while-revalidate',
  API: 'network-first',
  IMAGES: 'cache-first'
};

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/images/zion-logo.png',
  '/images/zion-tech-group-og.jpg',
  '/fonts/orbitron-v19-latin-700.woff2',
  '/fonts/rajdhani-v15-latin-500.woff2'
];

// Dynamic routes to cache
const DYNAMIC_ROUTES = [
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/pricing',
  '/resources'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/services',
  '/api/blog-posts',
  '/api/contact'
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
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
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
      .catch((error) => {
        console.error('Failed to activate service worker:', error);
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
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isDynamicRoute(request)) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, API_CACHE));
  } else if (isImage(request)) {
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache First Strategy
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
    console.error('Cache first strategy failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    // Return cached response immediately
    if (cachedResponse) {
      // Update cache in background
      fetch(request)
        .then((response) => {
          if (response.ok) {
            cache.put(request, response);
          }
        })
        .catch(() => {
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
    console.error('Stale while revalidate strategy failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Network first strategy failed:', error);
    
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Network error', { status: 503 });
  }
}

// Helper functions
function isStaticAsset(request) {
  return STATIC_ASSETS.some(asset => 
    request.url.includes(asset) || 
    request.url.endsWith(asset)
  );
}

function isDynamicRoute(request) {
  return DYNAMIC_ROUTES.some(route => 
    request.url.includes(route)
  );
}

function isAPIRequest(request) {
  return API_ENDPOINTS.some(endpoint => 
    request.url.includes(endpoint)
  );
}

function isImage(request) {
  return request.destination === 'image' || 
         /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(request.url);
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
    // Get pending actions from IndexedDB
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processPendingAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Failed to process pending action:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event);
  
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'New notification from Zion Tech Group',
      icon: '/images/zion-logo.png',
      badge: '/images/zion-logo.png',
      vibrate: [200, 100, 200],
      data: data.data || {},
      actions: data.actions || [],
      requireInteraction: data.requireInteraction || false,
      tag: data.tag || 'default'
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'Zion Tech Group', options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action) {
    // Handle specific action clicks
    handleNotificationAction(event.action, event.notification.data);
  } else {
    // Default click behavior
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

function handleNotificationAction(action, data) {
  switch (action) {
    case 'view':
      clients.openWindow(data.url || '/');
      break;
    case 'dismiss':
      // Do nothing, notification already closed
      break;
    default:
      console.log('Unknown notification action:', action);
  }
}

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker received message:', event.data);
  
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        self.skipWaiting();
        break;
      case 'GET_VERSION':
        event.ports[0].postMessage({ version: CACHE_NAME });
        break;
      case 'CLEAR_CACHE':
        clearAllCaches();
        break;
      default:
        console.log('Unknown message type:', event.data.type);
    }
  }
});

// Cache management functions
async function clearAllCaches() {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('All caches cleared successfully');
  } catch (error) {
    console.error('Failed to clear caches:', error);
  }
}

// IndexedDB functions for offline actions
async function getPendingActions() {
  // Implementation would depend on your IndexedDB setup
  return [];
}

async function processPendingAction(action) {
  // Implementation would depend on your specific offline actions
  console.log('Processing pending action:', action);
}

async function removePendingAction(actionId) {
  // Implementation would depend on your IndexedDB setup
  console.log('Removing pending action:', actionId);
}

// Performance monitoring
self.addEventListener('fetch', (event) => {
  const startTime = performance.now();
  
  event.waitUntil(
    event.response.then((response) => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Log slow requests
      if (duration > 1000) {
        console.warn('Slow request detected:', {
          url: event.request.url,
          duration: `${duration.toFixed(2)}ms`
        });
      }
      
      // Send performance data to main thread if needed
      if (duration > 5000) {
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'SLOW_REQUEST',
              url: event.request.url,
              duration: duration
            });
          });
        });
      }
    })
  );
});

console.log('Zion Tech Group Service Worker loaded successfully');
