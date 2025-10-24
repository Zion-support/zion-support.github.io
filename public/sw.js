<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [;
  '/',;
  '/static/js/bundle.js',;
  '/static/css/main.css',;
  '/manifest.json'
];
self.addEventListener('install', (event) => {;
event.waitUntil();
caches.open(CACHE_NAME);
      .then((cache) => cache.addAll(urlsToCache));
  )});
;
self.addEventListener('fetch', (event) => {;
event.respondWith();
caches.match(event.request);
      .then((response) => {;
if (response) {;
return response}
        return fetch(event.request);
      })
  );
});

<<<<<<< HEAD
<<<<<<< HEAD"
// Notification click;"
  event.notification.close();"'"
if (event.action = == 'explore") {;"
event.waitUntil();"'"
clients.openWindow('/")
    )
,})"
======="
// Fetch event - serve from cache when offline"'"
self.addEventListener('fetch", (event) => {
=======
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
=======
// Service Worker for Zion Tech Group;
const CACHE_NAME = 'zion-tech-group-v1'
const STATIC_CACHE = 'zion-static-v1'
const DYNAMIC_CACHE = 'zion-dynamic-v1'

// Assets to cache immediately;
const STATIC_ASSETS = ['/',
  '/about',
  '/contact',
  '/pricing',
  '/manifest.json',
  '/robots.txt']

// Install event - cache static assets;
  console.log('Service Worker installing...')

  event.waitUntil(
    caches.open(STATIC_CACHE)
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
        console.log('Static assets cached successfully')
        return self.skipWaiting()
      })
        console.error('Failed to cache static assets: ', error)
      })
  )
})

// Activate event - clean up old caches;
  console.log('Service Worker activating...')

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
<<<<<<< HEAD
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
=======
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {console.log('Deleting old cache: ', cacheName)
              return caches.delete(cacheName)})
        )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

<<<<<<< HEAD
// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
=======
// Fetch event - serve from cache, fallback to network;
  const {request} = event;
  const url = new URL(request.url)

  // Skip non-GET requests;
  if (request.method !== 'GET') {return;
  // Skip chrome-extension and other non-http requests;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  if (!url.protocol.startsWith('http')) {
    return;
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
  event.respondWith(
<<<<<<< HEAD
    caches.match(event.request)
      .then((response) => {"
        // Return cached version or fetch from "network"
        return response || fetch(event.request)";
      })
  );
});"

// Activate event - clean up old caches"'"
self.addEventListener('activate", (event) => {
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
=======
    caches.match(request)
        // Return cached version if available;
        if (cachedResponse) {
          console.log('Serving from cache: ', request.url)
          return cachedResponse;
        // Otherwise fetch from network;
        return fetch(request)
            // Don't cache non-successful responses;
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            // Clone the response;
            const responseToCache = response.clone()

            // Cache dynamic content;
            caches.open(DYNAMIC_CACHE)
                cache.put(request, responseToCache)})
                console.error('Failed to cache dynamic content: ', error)
              })

            return response;
          })
            console.error('Fetch failed: ', error)

            // Return offline page for navigation requests;
            if (request.destination === 'document') {return caches.match('/offline.html')

            throw error;})
      })
  )
})

// Background sync for form submissions;
  if (event.tag === 'contact-form') {event.waitUntil(
      // Handle form submission sync;
      console.log('Syncing contact form submission')
    )})

// Push notifications;
  if (event.data) {const data = event.data.json()

    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey;},
      actions: [action: 'explore',
          title: 'Learn More',
          icon: '/icon-192x192.png'
        },
          action: 'close',
          title: 'Close',
          icon: '/icon-192x192.png']

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
})
//Activate event - clean up old caches self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName)
            return caches.delete(cacheName)
          }
        })
      );
    })
  );
});"
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81"

}}'"
=======
=======;
// Install event - cache resources;
self.addEventListener('install', (event) => {;
  event.waitUntil(;
    caches.open(CACHE_NAME);
      .then((cache) => {;
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81;
      });
  )});
;
<<<<<<< HEAD;
// Notification click;
<<<<<<< HEAD
  event.notification.close();
if (event.action = == 'explore') {;
event.waitUntil();
clients.openWindow('/');
    );
});
=======;
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
=======
  event.notification.close()

  if (event.action === 'explore') {event.waitUntil(
      clients.openWindow('/')
    )})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
