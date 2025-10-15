// Service Worker for Zion Tech Group
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
        return cache.addAll(STATIC_ASSETS);
  })
      .then(() => {
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
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return responseursor/fix-errors-and-merge-to-main-d2b1
        };
        // Otherwise, fetch from network
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
  event.respondWith()
    caches.match(event.request)
      .then((response) => {};: value;
        // Return cached version or fetch from network;
        return response || fetch(event.request);
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