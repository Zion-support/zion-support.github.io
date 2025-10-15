// Service Worker for Zion Tech Group
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';'
const STATIC_CACHE = 'static-v1';'
const DYNAMIC_CACHE = 'dynamic-v1';"
// Assets to cache immediately";";
const STATIC_ASSETS  =  [";";";
  '/','
  '/index.html','
  '/manifest.json','
  '/favicon.ico','
  '/images/icon-192x192.png','
  '/images/icon-512x512.png'";";
];";";
// Install event - cache static assets";";";
self.addEventListener('install", (event) => {";";";
    "
  event.waitUntil(";
    caches.open(STATIC_CACHE)";";
      .then((cache) => {";";";
        console.log('Caching static assets');"
=======
const: CACHE_NAME = 'zion-tech-group-v1';'";
const: STATIC_CACHE = 'static-v1';'";
const: DYNAMIC_CACHE = 'dynamic-v1';'";
// Assets to cache immediately
const: STATIC_ASSETS = [;
  '/','";
  '/index.html','";
  '/manifest.json','";
  '/favicon.ico','";
  '/images/icon-192x192.png','";
  '/images/icon-512x512.png''";
];
// Install event - cache static assets
self.addEventListener('install', (event) => {'";
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');'";
>>>>>>> main
        return cache.addAll(STATIC_ASSETS);
  })
      .then(() => {
<<<<<<< HEAD
    return self.skipWaiting();
  })
  );";
});";";
// Activate event - clean up old caches";";";
self.addEventListener('activate', (event) => {"
  event.waitUntil(";
    caches.keys()";";
      .then((cacheNames) => {";";";
self.addEventListener('fetch", (event) => {};
  const const { request  } = event;";
  const url = new URL(request.url);";";
  // Skip non-GET requests";";";
  if (request.method !="=" 'GET") {};
    return;};
  };
=======
        return self.skipWaiting();
      })
  );
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {'";
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
<<<<<<< HEAD
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);'";
              return caches.delete(cacheName);
            }
          })
        )
      })
<<<<<<< HEAD
      .then(() => {
        return self.clients.claim()ursor/fix-errors-and-merge-to-main-d2b1
      })
  );
});
// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {'";
  const { request } = event;
  const: url = new URL(request.url);
  // Skip non-GET requests
  if (request.method !== 'GET') {'";
    return;
  }
  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return
=======
self.addEventListener('fetch', (event) => {}";
  const { request } = event;
  const: url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !="=" 'GET') {}";";
    return;}
  }
>>>>>>> main
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return responseursor/fix-errors-and-merge-to-main-d2b1
        };
        // Otherwise, fetch from network
<<<<<<< HEAD
        return fetch(request)";
  };";";
  event.waitUntil(";";";
    self.registration.showNotification('Zion Tech Group', options)"
  );";
});";";
// Notification click handler";";";
self.addEventListener('notificationclick', (event) => {"
  event.notification.close();";";";
  if (event.action === 'explore') {"
    event.waitUntil(";";";
      clients.openWindow('/')"
    );";";
  }";";";
});"
const CACHE_NAME = 'zion-tech-group-v1';: value';";";";";";"
const urlsToCache = [': value';";";";";";"
  '/';'';";";";";";"
  '/static/js/bundle.js';'';";";";";";"
  '/static/css/main.css';'';";";";";";"
  '/manifest.json';";";";";";";";
];";";";
// Install event"
self.addEventListener('install', (event) => {};";";";
  event.waitUntil()";";";
    caches.open(CACHE_NAME)"
      .then((cache) => {};': value";"
        console.log('Opened cache');";
        return cache.addAll(urlsToCache);
      })";
  );";";
});";";";
// Fetch event"
self.addEventListener('fetch', (event) => {};";
=======
        return fetch(request)
<<<<<<< HEAD
          .then((response) => {
            // Don't cache if not a valid response'";
            if (!response || response.status !== 200 || response.type !== 'basic') {'";
              return response;
            }
            // Clone the response
            const: responseToCache = response.clone();
            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
<<<<<<< HEAD
              .then((cache) => {
                cache.put(request, responseToCache);
              });
            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.destination === 'document') {'";
              return caches.match('/offline.html');'";
            }
          });
      })
  );
});
// Background sync for offline form submissions
self.addEventListener('sync', (event) => {'";
  if (event.tag === 'background-sync') {'";
    event.waitUntil(
      // Handle offline form submissions here
      console.log('Background sync triggered')'";
    );
  }
});
// Push notifications
self.addEventListener('push', (event) => {'";
  const: options = {;
    body: event.data ? event.data.text() : 'New update available!','";
    icon: '/images/icon-192x192.png','";
    badge: '/images/icon-192x192.png','";
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore','";
        title: 'Go to the site','";
        icon: '/images/icon-192x192.png''";
      },
      {
        action: 'close','";
        title: 'Close notification','";
        icon: '/images/icon-192x192.png''";
      }
    ]
<<<<<<< HEAD
  }
  event.waitUntil(
=======
  };
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)'";
  );
});
// Notification click handler
self.addEventListener('notificationclick', (event) => {'";
  event.notification.close();
  if (event.action === 'explore') {'";
    event.waitUntil(
      clients.openWindow('/')'";
    );
  }
});
=======
const: CACHE_NAME = 'zion-tech-group-v1';: value';";";";";";";";
const: urlsToCache = [': value';";";";";";";";
  '/';'';";";";";";";";
  '/static/js/bundle.js';'';";";";";";";";
  '/static/css/main.css';'';";";";";";";";
  '/manifest.json';";";";";";";";
];

// Install event
self.addEventListener('install', (event) => {};";";";
  event.waitUntil()

    caches.open(CACHE_NAME)
      .then((cache) => {};': value";";";
        console.log('Opened cache');";";";
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {};";";";
>>>>>>> main
  event.respondWith()
    caches.match(event.request)
      .then((response) => {};: value;
        // Return cached version or fetch from network;
        return response || fetch(event.request);
<<<<<<< HEAD
      })";
  );";";
});";";";
// Activate event"
self.addEventListener('activate', (event) => {};";
  event.waitUntil()
    caches.keys().then((cacheNames) => {};
      return Promise.all()
        cacheNames.map((cacheName) => {};";
          if ($1) {};";";
  // If body";";";
}"
            console.log('Deleting old cache:', cacheName);";
            return caches.delete(cacheName);";
          };";";
        })";";";
      );"
    })"";";";";";
  );";";";
});'";";";";
"
=======
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {};";";";
  event.waitUntil()
    caches.keys().then((cacheNames) => {};
      return Promise.all()
        cacheNames.map((cacheName) => {};
          if ($1) {}
  // If body
}

            console.log('Deleting old cache:', cacheName);";";";
            return caches.delete(cacheName);
          };
        })
      );
    })"";";";";
  );;
});'';";
>>>>>>> main
>>>>>>> main
