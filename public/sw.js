// Service Worker for caching
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/vendor.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});