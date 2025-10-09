<<<<<<< HEAD
// Service Worker for Zion Tech Group
// Implements advanced caching strategies for optimal performance

const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/css/critical.css',
  '/fonts/inter.woff2',
  '/js/vendor.js'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        return self.skipWaiting();
=======
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Static assets to cache;
const STATIC_ASSETS = [
  '/',
  '/main.tsx',
  '/globals.css',
  '/manifest.json'
];

// Install event - cache static assets;
self.addEventListener('install', (event) => {/* TODO: Fix JSX expression */}
      })
      .then(() => {/* TODO: Fix JSX expression */}
      })
  );
});

// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {/* TODO: Fix JSX expression */}
            })
            .map((cacheName) => {/* TODO: Fix JSX expression */}
            })
        );
      })
      .then(() => {/* TODO: Fix JSX expression */}
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
      })
  );
});

<<<<<<< HEAD
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
=======
// Fetch event - serve from cache or network;
self.addEventListener('fetch', (event) => {/* TODO: Fix JSX expression */}
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests;
  if (request.method !== 'GET') {/* TODO: Fix JSX expression */}
  }

  // Skip chrome-extension and other non-http requests;
  if (!url.protocol.startsWith('http')) {/* TODO: Fix JSX expression */}
  }

  event.respondWith()
    caches.match(request)
      .then((cachedResponse) => {/* TODO: Fix JSX expression */}
        }

        // Otherwise fetch from network;
        return fetch(request)
          .then((response) => {/* TODO: Fix JSX expression */}
            }

            // Clone the response;
            const responseToCache = response.clone();

            // Cache dynamic content;
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {/* TODO: Fix JSX expression */}
              });

            return response;
          })
          .catch(() => {/* TODO: Fix JSX expression */}
            }
          });
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
      })
  );
});

<<<<<<< HEAD
// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'document') {
    // HTML pages - network first, then cache
    event.respondWith(networkFirstStrategy(request));
  } else if (request.destination === 'image') {
    // Images - cache first, then network
    event.respondWith(cacheFirstStrategy(request));
  } else if (request.destination === 'style' || request.destination === 'script') {
    // CSS/JS - stale while revalidate
    event.respondWith(staleWhileRevalidateStrategy(request));
  } else {
    // Other resources - network first
    event.respondWith(networkFirstStrategy(request));
  }
});

// Network first strategy
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return caches.match('/offline.html');
    }
    throw error;
  }
}

// Cache first strategy
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a placeholder image or fallback
    return new Response('', { status: 404 });
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return cachedResponse || fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline actions when connection is restored
  // This could include form submissions, analytics data, etc.
}

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      tag: 'zion-tech-group-notification',
      requireInteraction: true,
      actions: [
        {
          action: 'open',
          title: 'Open Website'
        },
        {
          action: 'close',
          title: 'Close'
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

  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
=======
// Background sync for offline form submissions;
self.addEventListener('sync', (event) => {/* TODO: Fix JSX expression */}
  }
});

// Push notifications;
self.addEventListener('push', (event) => {/* TODO: Fix JSX expression */}
    },
    action,
  s: [
      {/* TODO: Fix JSX expression */}
      },
      {/* TODO: Fix JSX expression */}
      }
    ]
  };

  event.waitUntil()
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Handle notification clicks;
self.addEventListener('notificationclick', (event) => {/* TODO: Fix JSX expression */}
  }
});

// Helper function for offline form submissions;
async function handleOfflineSubmissions() {/* TODO: Fix JSX expression */}
}
  // Implementation for handling offline form submissions;
  // This would typically involve storing form data in IndexedDB;
  // and syncing when back online;
  console.log('Handling offline submissions...');
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
