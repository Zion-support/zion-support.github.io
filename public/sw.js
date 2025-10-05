
<<<<<<< HEAD
const CACHE_NAME = 'zion-website-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
=======
// Service Worker for caching and offline support
const CACHE_NAME = 'zion-app-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/static/js/vendor.js'
>>>>>>> 297cd5093a4334c73fbbc60d17002134ef3086c0
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
<<<<<<< HEAD
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
=======
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
>>>>>>> 297cd5093a4334c73fbbc60d17002134ef3086c0
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
