<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1";"
const urlsToCache = ["'"
  '/","'"
  '/static/js/bundle.js","'"
  '/static/css/main.css","'"
  '/manifest.json"
];"
<<<<<<< HEAD"'"
self.addEventListener('install", (event) => {;
event.waitUntil(;)
caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );"
});"
;"'"
self.addEventListener('fetch", (event) => {;
event.respondWith(;)
caches.match(event.request)
=======
const CACHE_NAME = 'zion-tech-group-v1'
const urlsToCache = [;
  '/',;
  '/static/js/bundle.js',;
  '/static/css/main.css',;
  '/manifest.json'
];
<<<<<<< HEAD;
self.addEventListener('install', (event) => {;
event.waitUntil();
caches.open(CACHE_NAME);
      .then((cache) => cache.addAll(urlsToCache));
  )});
;
self.addEventListener('fetch', (event) => {;
event.respondWith();
caches.match(event.request);
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
      .then((response) => {;
if (response) {;
return response}
        return fetch(event.request);
<<<<<<< HEAD
======="
"
// Install event - cache resources"'"
self.addEventListener('install", (event) => {
  event.waitUntil("
    caches.open(CACHE_NAME)"
      .then((cache) => {"'"
        console.log('Opened cache");
        return cache.addAll(urlsToCache);
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
      })
  );
});

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
  event.respondWith(
    caches.match(event.request)
      .then((response) => {"
        // Return cached version or fetch from "network"
        return response || fetch(event.request)";
      })
  );
});"
"
// Activate event - clean up old caches"'"
self.addEventListener('activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all("
        cacheNames.map((cacheName) => {"
          if (cacheName !== CACHE_NAME) {"'"
            console.log('Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});"
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81"
"
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
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
