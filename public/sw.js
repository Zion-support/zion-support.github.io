<<<<<<< HEAD
// Service Worker for Zion Tech Group
// Provides offline support, caching, and performance improvements

const CACHE_NAME = 'zion-tech-group-v3.0.0';
const STATIC_CACHE_NAME = 'zion-static-v3.0.0';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v3.0.0';
=======
/* eslint-env serviceworker */
/* global self, caches, Response */

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';
>>>>>>> origin/auto/autonomy-17186719616

// Files to cache immediately
const STATIC_FILES = [
  '/',
<<<<<<< HEAD
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
=======
  '/offline',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png'
];

// API endpoints to cache (commented out for now)
// const API_CACHE = [
//   '/api/analytics',
//   '/api/error-reporting'
// ];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
>>>>>>> origin/auto/autonomy-17186719616
      .then((cache) => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
<<<<<<< HEAD
      .catch((error) => {
        console.error('Error caching static files:', error);
      })
  );
  
  // Skip waiting to activate immediately
  self.skipWaiting();
=======
      .then(() => {
        console.log('Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static files:', error);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
>>>>>>> origin/auto/autonomy-17186719616
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
<<<<<<< HEAD
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && 
              cacheName !== DYNAMIC_CACHE_NAME &&
              cacheName.startsWith('zion-')) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Claim all clients
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
=======
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

>>>>>>> origin/auto/autonomy-17186719616
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
<<<<<<< HEAD
  
=======

>>>>>>> origin/auto/autonomy-17186719616
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
<<<<<<< HEAD
  
  // Handle different types of requests
  if (url.pathname.startsWith('/images/') || url.pathname.startsWith('/static/')) {
    // Static assets - cache first, then network
    event.respondWith(handleStaticRequest(request));
  } else {
    // HTML pages - network first, then cache
    event.respondWith(handlePageRequest(request));
  }
});

// Handle static asset requests
async function handleStaticRequest(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Return cached response and update cache in background
    fetch(request).then((response) => {
      if (response.ok) {
        caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
          cache.put(request, response);
        });
      }
    });
    
    return cachedResponse;
  }
  
  // Try network if not cached
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return offline response
    return new Response('Offline', { status: 503 });
  }
}

// Handle page requests
async function handlePageRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
=======

  // Handle different types of requests
  if (url.pathname === '/') {
    // Homepage - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/api/')) {
    // API requests - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/')) {
    // Static assets - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/images/') || url.pathname.startsWith('/icons/')) {
    // Images - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else {
    // Other pages - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  try {
>>>>>>> origin/auto/autonomy-17186719616
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
<<<<<<< HEAD
    // Return offline page
    return caches.match('/offline.html') || new Response('Offline', { status: 503 });
  }
}

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('Message received in service worker:', event.data);
  
=======
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    // Check if Response is available (it should be in service worker context)
    if (typeof Response !== 'undefined') {
      return new Response('Network error', { status: 503, statusText: 'Service Unavailable' });
    }
    // Fallback for older browsers
    return { status: 503, statusText: 'Service Unavailable' };
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
    
    // Try to get from cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/offline');
    }
    
    // Check if Response is available (it should be in service worker context)
    if (typeof Response !== 'undefined') {
      return new Response('Network error', { status: 503, statusText: 'Service Unavailable' });
    }
    // Fallback for older browsers
    return { status: 503, statusText: 'Service Unavailable' };
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Perform background sync operations
    console.log('Performing background sync');
    
    // Example: sync analytics data
    const analyticsData = await getStoredAnalytics();
    if (analyticsData.length > 0) {
      await syncAnalytics(analyticsData);
    }
    
    console.log('Background sync completed');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Get stored analytics data
async function getStoredAnalytics() {
  // This would typically get data from IndexedDB
  return [];
}

// Sync analytics data
async function syncAnalytics(data) {
  try {
    const response = await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      console.log('Analytics synced successfully');
    }
  } catch (error) {
    console.error('Failed to sync analytics:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/icons/checkmark.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icons/xmark.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

      if (event.action === 'explore') {
      event.waitUntil(
        self.clients.openWindow('/')
      );
    }
});

// Message handling from main thread
self.addEventListener('message', (event) => {
>>>>>>> origin/auto/autonomy-17186719616
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
<<<<<<< HEAD
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE_NAME)
        .then(cache => {
          return cache.addAll(event.data.urls);
        })
    );
=======
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
>>>>>>> origin/auto/autonomy-17186719616
  }
});

// Error handling
self.addEventListener('error', (event) => {
<<<<<<< HEAD
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

console.log('Zion Tech Group Service Worker loaded successfully');
=======
  console.error('Service worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service worker unhandled rejection:', event.reason);
});
>>>>>>> origin/auto/autonomy-17186719616
