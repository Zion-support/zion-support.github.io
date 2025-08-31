// Zion Tech Group Service Worker
// Version: 2.0.0
// Purpose: Performance optimization, offline support, and caching

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/offline.html'
];

// API endpoints to cache
const API_CACHE = [
  '/api/services',
  '/api/about',
  '/api/contact'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
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
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (url.origin === self.location.origin) {
    // Same-origin requests
    if (url.pathname === '/') {
      // Home page - serve from cache first, then network
      event.respondWith(
        caches.match(request)
          .then((response) => {
            if (response) {
              // Return cached version and update in background
              fetch(request)
                .then((networkResponse) => {
                  caches.open(DYNAMIC_CACHE)
                    .then((cache) => cache.put(request, networkResponse));
                })
                .catch(() => {
                  // Network failed, but we have cached version
                });
              return response;
            }
            // No cache, fetch from network
            return fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  caches.open(DYNAMIC_CACHE)
                    .then((cache) => cache.put(request, response.clone()));
                }
                return response;
              });
          })
      );
    } else if (url.pathname.startsWith('/api/')) {
      // API requests - network first, then cache
      event.respondWith(
        fetch(request)
          .then((response) => {
            if (response.status === 200) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => cache.put(request, response.clone()));
            }
            return response;
          })
          .catch(() => {
            // Network failed, try cache
            return caches.match(request)
              .then((response) => {
                if (response) {
                  return response;
                }
                // Return offline response for API calls
                return new Response(
                  JSON.stringify({ error: 'Offline - No cached data available' }),
                  {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: { 'Content-Type': 'application/json' }
                  }
                );
              });
          })
      );
    } else if (url.pathname.startsWith('/static/') || url.pathname.includes('.')) {
      // Static assets - cache first, then network
      event.respondWith(
        caches.match(request)
          .then((response) => {
            if (response) {
              // Return cached version and update in background
              fetch(request)
                .then((networkResponse) => {
                  caches.open(STATIC_CACHE)
                    .then((cache) => cache.put(request, networkResponse));
                })
                .catch(() => {
                  // Network failed, but we have cached version
                });
              return response;
            }
            // No cache, fetch from network
            return fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  caches.open(STATIC_CACHE)
                    .then((cache) => cache.put(request, response.clone()));
                }
                return response;
              });
          })
      );
    } else {
      // Other pages - network first, then cache
      event.respondWith(
        fetch(request)
          .then((response) => {
            if (response.status === 200) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => cache.put(request, response.clone()));
            }
            return response;
          })
          .catch(() => {
            // Network failed, try cache
            return caches.match(request)
              .then((response) => {
                if (response) {
                  return response;
                }
                // Return offline page
                return caches.match('/offline.html');
              });
          })
      );
    }
  } else {
    // Cross-origin requests (CDNs, external APIs)
    if (url.pathname.includes('.js') || url.pathname.includes('.css') || url.pathname.includes('.woff')) {
      // External static assets - cache first, then network
      event.respondWith(
        caches.match(request)
          .then((response) => {
            if (response) {
              // Return cached version and update in background
              fetch(request)
                .then((networkResponse) => {
                  caches.open(STATIC_CACHE)
                    .then((cache) => cache.put(request, networkResponse));
                })
                .catch(() => {
                  // Network failed, but we have cached version
                });
              return response;
            }
            // No cache, fetch from network
            return fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  caches.open(STATIC_CACHE)
                    .then((cache) => cache.put(request, response.clone()));
                }
                return response;
              });
          })
      );
    } else {
      // Other external requests - network only
      event.respondWith(fetch(request));
    }
  }
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

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View',
          icon: '/favicon.ico'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/favicon.ico'
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
      clients.openWindow('/')
    );
  }
});

// Message handling from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

// Cache management utilities
const clearOldCaches = async () => {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(
    name => name !== STATIC_CACHE && name !== DYNAMIC_CACHE
  );
  
  await Promise.all(
    oldCaches.map(name => caches.delete(name))
  );
  
  console.log('Old caches cleared');
};

// Periodic cache cleanup
setInterval(clearOldCaches, 24 * 60 * 60 * 1000); // Every 24 hours
