// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const STATIC_CACHE_NAME = 'zion-tech-group-v2';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v2';
const CACHE_NAME = 'zion-tech-group-v2';
const STATIC_CACHE_NAME = 'zion-tech-group-static-v2';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v2';
// Enhanced Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

const STATIC_ASSETS = [
// Files to cache for offline functionality
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/contact',
  '/manifest.json',
  '/robots.txt'
  '/favicon.svg',
  '/robots.txt'
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/manifest.json',
  '/favicon.ico'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
const CACHE_NAME = 'zion-tech-group-v1';
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  // Add other static assets as needed
];

// Install event - cache static files
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event
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
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache if not a valid response
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
              return caches.match('/offline.html');
            }
          });
      })
  );
});

console.log('Service Worker loaded successfully');
  );
});

// Fetch event
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
}
// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Send analytics data when connection is restored
  return fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      timestamp: Date.now(),
      type: 'background-sync'
    })
  });
}

            return response;
          })
          .catch((error) => {
            console.error('Service Worker: Fetch failed', error);
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/') || new Response('Offline', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            }
            
            throw error;
          });
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions or other background tasks
  try {
    // Get pending submissions from IndexedDB
    const pendingSubmissions = await getPendingSubmissions();
    
    for (const submission of pendingSubmissions) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission.data)
        });
        
        // Remove from pending submissions
        await removePendingSubmission(submission.id);
        console.log('Service Worker: Synced submission', submission.id);
      } catch (error) {
        console.error('Service Worker: Failed to sync submission', error);
      }
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
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
        title: 'View Updates',
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
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions for IndexedDB operations
async function getPendingSubmissions() {
  // Implementation would depend on your IndexedDB setup
  return [];
}

async function removePendingSubmission(id) {
  // Implementation would depend on your IndexedDB setup
  return true;
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRIC') {
    // Log performance metrics
    console.log('Service Worker: Performance metric', event.data.metric);
    
    // Send to analytics if needed
    // sendToAnalytics(event.data.metric);
  }
});

console.log('Service Worker: Script loaded');
