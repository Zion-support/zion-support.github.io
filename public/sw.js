const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
<<<<<<< HEAD
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event - cache resources
=======
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  // Add critical CSS and JS files
];

// Dynamic assets patterns
const DYNAMIC_PATTERNS = [
  /^\/api\//,
  /^\/images\//,
  /^\/fonts\//,
  /\.(?:png|jpg|jpeg|svg|gif|webp|woff2?|ttf|eot)$/
];

// Install event - cache static assets
>>>>>>> origin/main
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
<<<<<<< HEAD
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
=======
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
>>>>>>> origin/main
      })
  );
});

<<<<<<< HEAD
// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
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
});
=======
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
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
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

        // Check if it's a dynamic asset
        const isDynamicAsset = DYNAMIC_PATTERNS.some(pattern => pattern.test(url.pathname));
        
        if (isDynamicAsset) {
          // For dynamic assets, try network first, then cache
          return fetch(request)
            .then((response) => {
              // Clone the response before caching
              const responseToCache = response.clone();
              
              // Cache successful responses
              if (response.status === 200) {
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseToCache);
                  });
              }
              
              return response;
            })
            .catch(() => {
              // If network fails, try to serve from cache
              return caches.match(request);
            });
        } else {
          // For static assets, try network first
          return fetch(request)
            .then((response) => {
              // Clone the response before caching
              const responseToCache = response.clone();
              
              // Cache successful responses
              if (response.status === 200) {
                caches.open(STATIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseToCache);
                  });
              }
              
              return response;
            })
            .catch(() => {
              // If network fails and it's a navigation request, serve index.html
              if (request.mode === 'navigate') {
                return caches.match('/index.html');
              }
              
              // For other requests, return a custom offline page
              return new Response(
                JSON.stringify({
                  error: 'Offline',
                  message: 'This resource is not available offline'
                }),
                {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              );
            });
        }
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      handleBackgroundSync()
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
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

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for background sync
async function handleBackgroundSync() {
  try {
    // Get pending offline actions from IndexedDB
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processOfflineAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Service Worker: Failed to process offline action', error);
      }
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
  }
}

// Helper function to get pending actions (mock implementation)
async function getPendingActions() {
  // In a real implementation, this would read from IndexedDB
  return [];
}

// Helper function to process offline action (mock implementation)
async function processOfflineAction(action) {
  // In a real implementation, this would process the action
  console.log('Processing offline action:', action);
}

// Helper function to remove pending action (mock implementation)
async function removePendingAction(actionId) {
  // In a real implementation, this would remove from IndexedDB
  console.log('Removing pending action:', actionId);
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    console.log('Service Worker: Performance metrics received', event.data.metrics);
    
    // In a real implementation, send metrics to analytics
    // analytics.track('performance_metrics', event.data.metrics);
  }
});

console.log('Service Worker: Loaded successfully');
>>>>>>> origin/main
