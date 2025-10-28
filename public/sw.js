const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline"'"
self.addEventListener('fetch", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
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

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all("
        cacheNames.map((cacheName) => {"
          if (cacheName !== CACHE_NAME) {"'"
            console.log('Deleting old cache:", cacheName);
            return caches.delete(cacheName);
const CACHE_NAME = "zion-tech-group-v1";
const urlsToCache = ["/"
  "/static/js/bundle.js"
  "/static/css/main.css"
  "/manifest.json"
]
event.waitUntil()
caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})
 self.addEventListener("fetch", (event) => {
event.respondWith()
caches.match(event.request)
      .then((response) => {
if (response) {
return response
        }
        return fetch(event.request)

//Install event - cache resources self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache")
        return cache.addAll(urlsToCache)
      })
  )
})
//Fetch event - serve from cache when offline self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request)
      .then((response) => {
        //Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})
//Activate event - clean up old caches self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((cacheName) => {
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
});"
}}'"
      });
  )});
;
// Fetch event - serve from cache when offline;
self.addEventListener('fetch', (event) => {;
  event.respondWith(;
    caches.match(event.request);
      .then((response) => {;
        // Return cached version or fetch from network;
        return response || fetch(event.request)});
  )});
;
// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {;
  event.waitUntil(;
    caches.keys().then((cacheNames) => {;
      return Promise.all(;
        cacheNames.map((cacheName) => {;
          if (cacheName !== CACHE_NAME) {;
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName)}
        });
      )});
  )});
  )
})
}}}}}))))))
});
