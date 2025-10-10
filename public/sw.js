
// Service Worker for Zion Tech Group

const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
];
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',

  '/manifest.json',
  '/favicon.ico'

];
<<<<<<< HEAD

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)

      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })

  );
});

=======
// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)})
      .catch((error) => {
        // console.log removed for production
})
  )});
// Fetch event
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {

        // Return cached version or fetch from network
<<<<<<< HEAD
        return response || fetch(event.request);
      })
  );
});

=======
        return response || fetch(event.request).catch(() => {
          // Return offline page if available
          if (event.request.destination === 'document') {
            return caches.match('/')};
        })})
  )});
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
<<<<<<< HEAD
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })

  );
=======
            return caches.delete(cacheName)};
        })
      )})
  )});
// Message event handler
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()};
});
// Push event handler
self.addEventListener('push', (event) => {
  if (event.data) {;
const data = event.data.json();
    const options = {
};
      body: data.body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      };
    };
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
});