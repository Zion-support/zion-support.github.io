<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  '/about',
  '/services',
  '/favicon.svg'
=======
const CACHE_NAME = 'zion-tech-group-v1';
=======

const CACHE_NAME = 'zion-tech-v1';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
const urlsToCache = [
];
  '/',
  '/about',
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas-services',
=======
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/about',
  '/contact',
  '/services',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
<<<<<<< HEAD
];
<<<<<<< HEAD

<<<<<<< HEAD
// Install event
=======
// Install event - cache static resources
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
self.addEventListener('install', (event) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
];

// Dynamic assets patterns
const DYNAMIC_PATTERNS = [
  /^\/api\//,
  /^\/images\//,
  /^\/assets\//
];

// Install event - cache static assets
=======
];

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
  event.waitUntil(
<<<<<<< HEAD
    caches.open(STATIC_CACHE)
      .then((cache) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service worker install failed:', error);
      })
=======
        console.log('Caching static resources');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log('Service Worker installed');
        return self.skipWaiting();
      })
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
  );
});

<<<<<<< HEAD
// Activate event - clean up old caches
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
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
          return cachedResponse;
        }


            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/');
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

// Helper functions for IndexedDB
async function getPendingForms() {
  // Implementation would go here
  return [];
}

async function removePendingForm(id) {
  // Implementation would go here
}
=======
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
=======
        console.log('Caching static assets...');
=======
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
<<<<<<< HEAD
        console.error('Failed to cache static assets:', error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
        console.error('Error caching static assets:', error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
      })
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
// Fetch event
=======
=======
// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)})
      .catch((error) => {
        // console.log removed for production
})
  )});
// Fetch event
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
<<<<<<< HEAD
        // Return cached version or fetch from network
<<<<<<< HEAD
        return response || fetch(event.request);
      })
  );
});

=======
        return response || fetch(event.request).catch(() => {
          // Return offline page if available
          if (event.request.destination === 'document') {
            return caches.match('/')};
        })})
  )});
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Activate event
=======
// Activate event - clean up old caches
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
<<<<<<< HEAD
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
<<<<<<< HEAD
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
<<<<<<< HEAD
    })
  );
<<<<<<< HEAD
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
    }).then(() => {
      console.log('Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((fetchResponse) => {
            // Don't cache non-successful responses
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }

            // Clone the response
            const responseToCache = fetchResponse.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return fetchResponse;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
=======
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
=======
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
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Serving from cache:', request.url);
          return cachedResponse;
        }
<<<<<<< HEAD
        
        // Otherwise fetch from network
        return fetch(request)
          .then((networkResponse) => {
            // Check if response is valid
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Clone the response
            const responseToCache = networkResponse.clone();
            
            // Cache dynamic assets
            if (shouldCache(request.url)) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
            }
            
            return networkResponse;
=======

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
            
            // Return offline page for navigation requests
<<<<<<< HEAD
            if (request.mode === 'navigate') {
              return caches.match('/offline.html') || new Response(
                '<html><body><h1>Offline</h1><p>Please check your internet connection.</p></body></html>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            }
            
            throw error;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
            if (request.destination === 'document') {
              return caches.match('/') || new Response('Offline', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            }
            
            throw error;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
          });
      })
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions
  console.log('Background sync triggered');
  // Implementation would depend on specific requirements
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
=======
// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
=======
// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle form submission sync
      console.log('Syncing contact form data...')
    );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
  }
});

// Push notifications
self.addEventListener('push', (event) => {
<<<<<<< HEAD
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/android-chrome-192x192.png',
    badge: '/favicon-32x32.png',
=======
  const options = {
    body: event.data ? event.data.text() : 'New update from Zion Tech Group',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
<<<<<<< HEAD
        title: 'Explore',
        icon: '/favicon-32x32.png'
=======
        title: 'Explore Services',
        icon: '/icon-192x192.png'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
      },
      {
        action: 'close',
        title: 'Close',
<<<<<<< HEAD
        icon: '/favicon-32x32.png'
      }
    ]
  };
  
=======
        icon: '/icon-192x192.png'
      }
    ]
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
<<<<<<< HEAD
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
=======
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/ai-services')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
      clients.openWindow('/')
    );
  }
});

<<<<<<< HEAD
// Helper function to determine if URL should be cached
function shouldCache(url) {
  return DYNAMIC_PATTERNS.some(pattern => pattern.test(url));
}

// Background sync function
async function doBackgroundSync() {
  try {
    // Implement background sync logic here
    console.log('Performing background sync...');
    
    // Example: Sync offline form submissions
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await syncOfflineData(offlineData);
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Get offline data from IndexedDB
async function getOfflineData() {
  // Implement IndexedDB access here
  return [];
}

// Sync offline data to server
async function syncOfflineData(data) {
  // Implement sync logic here
  console.log('Syncing offline data:', data);
}

// Message handler for communication with main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker received message:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    const urlsToCache = event.data.urls;
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  console.log('Periodic sync triggered:', event.tag);
  
  if (event.tag === 'content-sync') {
    event.waitUntil(doPeriodicSync());
  }
});

async function doPeriodicSync() {
  try {
    console.log('Performing periodic sync...');
    // Implement periodic sync logic here
  } catch (error) {
    console.error('Periodic sync failed:', error);
  }
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
// Message handler for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
=======
=======
            return caches.delete(cacheName)};
        })
      )})
  )});
// Message event handler
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()};
});
// Push event handler
self.addEventListener('push', (event) => {
  if (event.data) {;
const data = event.data.json();
    const options = {
};
      body: data.body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      };
    };
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
