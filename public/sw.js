// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/about',
  '/ai-services',
  '/contact',
  '/offline.html'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
    event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
                return cache.addAll(STATIC_FILES);
      })
      .then(() => {
                return self.skipWaiting();
      })
      .catch((error) => {
    // Empty block
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
                            return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
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
            
            // Return a fallback for other requests
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
        event.waitUntil(
      // Handle background sync tasks
      handleBackgroundSync()
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
    
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
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

// Helper function for background sync
async function handleBackgroundSync() {
  try {
    // Get pending sync data from IndexedDB
        
    // Process pending data
    for (const item of pendingData) {
      await processSyncItem(item);
    }
    
      } catch (error) {
    // Empty block
  }
}

// Helper function to get pending sync data
async function getPendingSyncData() {
  // This would typically interact with IndexedDB
  // For now, return empty array
  return [];
}

// Helper function to process sync item
async function processSyncItem(item) {
  // Process individual sync item
  }

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
        // Store metrics for later analysis
  }
});

