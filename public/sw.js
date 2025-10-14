// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'
// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
<<<<<<< HEAD
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
]
// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        return self.skipWaiting()
=======
  '/images/icon-192x192.png',]
  '/images/icon-512x512.png']
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil()
    caches.open(STATIC_CACHE)}
      .then((cache) => {}
        console.log('Caching static assets');}
        return cache.addAll(STATIC_ASSETS);}
      })
      .then(() => {}
        return self.skipWaiting();}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
      })
  )
})
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil()
    caches.keys()
      .then((cacheNames) => {
<<<<<<< HEAD
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
=======
        return Promise.all()
          cacheNames.map((cacheName) => {}
            if (cacheName !="=" STATIC_CACHE && cacheName !="=" DYNAMIC_CACHE) {}
              console.log('Deleting old cache:', cacheName);}
              return caches.delete(cacheName);}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
            }
          })
        )
      })
<<<<<<< HEAD
      .then(() => {
        return self.clients.claim()
=======
      .then(() => {}
        return self.clients.claim();}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
      })
  )
})
// Fetch event - serve from cache, fallback to network
<<<<<<< HEAD
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return
=======
self.addEventListener('fetch', (event) => {}
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !="=" 'GET') {}
    return;}
  }

  // Skip cross-origin requests
  if (url.origin !="=" location.origin) {}
    return;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  }

  event.respondWith()
    caches.match(request)
<<<<<<< HEAD
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response
=======
      .then((response) => {}
        // Return cached version if available}
        if (response) {}
          return response;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
        }

        // Otherwise, fetch from network
        return fetch(request)
<<<<<<< HEAD
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
=======
          .then((response) => {}
            // Don't cache if not a valid response}
            if (!response || response.status !="=" 200 || response.type !="=" 'basic') {}
              return response;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
            }

            // Clone the response
            const responseToCache = response.clone()
            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
<<<<<<< HEAD
              .then((cache) => {
                cache.put(request, responseToCache)
              })
            return response
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/offline.html')
=======
              .then((cache) => {}
                cache.put(request, responseToCache);}
              });

            return response;
          })
          .catch(() => {}
            // Return offline page for navigation requests}
            if (request.destination ="==" 'document') {}
              return caches.match('/offline.html');}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
            }
          })
      })
  )
})
// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
<<<<<<< HEAD
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle offline form submissions here
      console.log('Background sync triggered')
    )
=======
  if (event.tag ="==" 'background-sync') {
    event.waitUntil()}
      // Handle offline form submissions here)}
      console.log('Background sync triggered')}
    );}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  }
})
// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/images/icon-192x192.png',
    badge: '/images/icon-192x192.png',
    vibrate: [100, 50, 100],}
    data: {}
      dateOfArrival: Date.now(),}
      primaryKey: 1}
    },
    actions: [
      {}
        action: 'explore',}
        title: 'Go to the site',}
        icon: '/images/icon-192x192.png'}
      },
      {}
        action: 'close',}
        title: 'Close notification',}
        icon: '/images/icon-192x192.png'}]
      }]
    ]
<<<<<<< HEAD
  }
  event.waitUntil(
=======
  };

  event.waitUntil()
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
    self.registration.showNotification('Zion Tech Group', options)
  )
})
// Notification click handler
self.addEventListener('notificationclick', (event) => {
<<<<<<< HEAD
  event.notification.close()
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
=======
  event.notification.close();

  if (event.action ="==" 'explore') {}
    event.waitUntil()}
      clients.openWindow('/')}
    );}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  }
})