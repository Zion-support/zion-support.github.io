// Service Worker for Zion Tech Group Website
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = ['/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/consultation',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (eve, n, t) => {
  event.waitUntil(
    caches.open(CACHE_NA, M, E)
      .then((cac, h, e) => {
        return cache.addAll(urlsToCac, h, e);
})
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (eve, n, t) => {
  event.respondWith(
    caches.match(event.request)
      .then((respon, s, e) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
})
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (eve, n, t) => {
  event.waitUntil(
    caches.keys().then((cacheNam, e, s) => {
      return Promise.all(
        cacheNames.map((cacheNa, m, e) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheNa, m, e);
    })
      );
    })
"
}}'"
// Install event - cache resources;
self.addEventListener('install', (event) => {;
  event.waitUntil(;
    caches.open(CACHE_NAME);
      .then((cache) => {;
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
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
