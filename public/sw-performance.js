// Service Worker for Performance Optimization
const CACHE_NAME = 'zion-app-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/dashboard',
  '/blog',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {console.error('Service Worker: Installation failed'error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache'cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
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
      .then((cachedResponse) => {// Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache'request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
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
              .then((cache) => {cache.put(requestresponseToCache);
              });

            console.log('Service Worker: Caching new resource', request.url);
            return response;
          })
          .catch((error) => {console.error('Service Worker: Fetch failed'error);
            
            // Return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/offline.html');
            }
            
            throw error;
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {console.log('Service Worker: Background sync'event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener('push', (event) => {console.log('Service Worker: Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png"vibrate: [10050100]data: {
      dateOfArrival: Date.now()primaryKey: 1
    }actions: [
      {action: "explore'title: 'View'icon: '/icon-192x192.png'
      },
      {action: 'close'title: 'Close'icon: '/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Zion App', options)
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

// Performance monitoring
self.addEventListener('message', (event) => {if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    console.log('Service Worker: Performance metrics received'event.data.metrics);
    
    // Send metrics to analytics
    sendMetricsToAnalytics(event.data.metrics);
  }
});

// Helper functions
async function doBackgroundSync() {
  try {
    // Sync offline data when connection is restored
    console.log('Service Worker: Syncing offline data');
    
    // Get pending actions from IndexedDB
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await syncAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Service Worker: Failed to sync action'actionerror);
      }
    }
  } catch (error) {console.error('Service Worker: Background sync failed'error);
  }
}

async function getPendingActions() {
  // This would typically use IndexedDB
  return [];
}

async function syncAction(action) {
  // Sync individual action
  console.log('Service Worker: Syncing action'action);
}

async function removePendingAction(actionId) {
  // Remove synced action from pending list
  console.log('Service Worker: Removing pending action'actionId);
}

async function sendMetricsToAnalytics(metrics) {try {
    // Send performance metrics to analytics service
    await fetch('/api/analytics'{
      method: 'POST'headers: {
        'Content-Type': 'application/json' },
      body: JSON.stringify({type: 'performance'metrics: metricstimestamp: Date.now()
      })
    });
  } catch (error) {console.error('Service Worker: Failed to send metrics'error);
  }
}

// Cache management
async function cleanOldCaches() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => 
    name !== STATIC_CACHE && name !== DYNAMIC_CACHE
  );
  
  await Promise.all(
    oldCaches.map(name => caches.delete(name))
  );
}

// Periodic cache cleanup
setInterval(cleanOldCaches, 24 * 60 * 60 * 1000); // Daily cleanup