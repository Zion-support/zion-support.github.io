
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index-BLT78pJd.css',
  '/assets/js/vendor-BYA32aEE.js',
  '/assets/js/index-DqcfcIlc.js',
  '/assets/js/router-B67OpBmf.js',
  '/assets/js/ui-BiJrOvfN.js',
  '/assets/js/helmet---FNlkog.js'
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
