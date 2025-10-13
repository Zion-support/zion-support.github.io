<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Service Worker for Zion Tech Group
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

<<<<<<< HEAD
=======
const STATIC_CACHE_NAME = 'zion-tech-group-v2';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v2';
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-845e
=======
const CACHE_NAME = 'zion-tech-group-v2';
const STATIC_CACHE_NAME = 'zion-tech-group-static-v2';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v2';
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-9064
=======
// Enhanced Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
const STATIC_ASSETS = [
=======
// Files to cache for offline functionality
const STATIC_FILES = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
  '/',
<<<<<<< HEAD
  '/about',
<<<<<<< HEAD
  '/services',
<<<<<<< HEAD
=======
  '/index.html',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
  '/manifest.json',
<<<<<<< HEAD
<<<<<<< HEAD
  '/favicon.svg'
=======
  '/favicon.svg',
=======
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/contact',
  '/manifest.json',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
  '/robots.txt'
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-845e
=======
  '/favicon.svg',
  '/robots.txt'
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-9064
=======
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/manifest.json',
  '/favicon.ico'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
];

// Install event - cache static files
self.addEventListener('install', (event) => {
<<<<<<< HEAD
  event.waitUntil(
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service worker install failed:', error);
      })
  );
});

// Activate event - clean up old caches
=======
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
  );
});

// Activate event
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
self.addEventListener('activate', (event) => {
<<<<<<< HEAD
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
<<<<<<< HEAD
=======
            console.log('Deleting old cache:', cacheName);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
            return caches.delete(cacheName);
          }
        })
      );
<<<<<<< HEAD
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
=======
    }).then(() => self.clients.claim())
  );
});

// Fetch event
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
<<<<<<< HEAD
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
<<<<<<< HEAD
          return cachedResponse;
        }

=======
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

=======
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
        // Otherwise fetch from network
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
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
<<<<<<< HEAD

            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
<<<<<<< HEAD
              return caches.match('/');
=======
              return caches.match('/offline.html');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
            }
          });
      })
  );
});

<<<<<<< HEAD
// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle form submission sync
      handleFormSync()
    );
  }
});

// Handle message channel errors
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

<<<<<<< HEAD

async function handleFormSync() {
  try {
    // Get pending form data from IndexedDB
    const pendingForms = await getPendingForms();
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.data)
        });

        if (response.ok) {
          // Remove from pending forms
          await removePendingForm(form.id);
        }
      } catch (error) {
        console.error('Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.error('Form sync failed:', error);
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
  }
}
<<<<<<< HEAD

// Helper functions for IndexedDB
async function getPendingForms() {
  // Implementation would go here
  return [];
}

async function removePendingForm(id) {
  // Implementation would go here
}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
=======

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
