// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/page.tsx',
  '/src/globals.css',
  '/manifest.json'
];

// Resources to cache on demand
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  /\.(?:js|css)$/,
  /\.(?:woff|woff2|ttf|eot)$/,
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker installation failed:', error);
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
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
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

// Fetch event - serve from cache, fallback to network
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

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Serving from cache:', request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((networkResponse) => {
            // Check if response is valid
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Clone the response
            const responseToCache = networkResponse.clone();

            // Check if we should cache this resource
            const shouldCache = CACHE_PATTERNS.some(pattern => pattern.test(request.url)) ||
                               request.url.includes('ziontechgroup.com');

            if (shouldCache) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  console.log('Caching new resource:', request.url);
                  cache.put(request, responseToCache);
                })
                .catch((error) => {
                  console.error('Failed to cache resource:', error);
                });
            }

            return networkResponse;
          })
          .catch((error) => {
            console.error('Network request failed:', error);
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline') || new Response(
                '<!DOCTYPE html><html><head><title>Offline - Zion Tech Group</title></head><body><h1>You are offline</h1><p>Please check your internet connection and try again.</p></body></html>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            }
            
            throw error;
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('Background sync triggered')
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
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
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handler for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Performance monitoring
self.addEventListener('fetch', (event) => {
  const startTime = performance.now();
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        // Log slow requests
        if (duration > 1000) {
          console.warn(`Slow request detected: ${event.request.url} took ${duration}ms`);
        }
        
        return response;
      })
  );
});