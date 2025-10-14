const CACHE_NAME = 'zion-tech-v1'
const urlsToCache = [
  '/,'
  '/static/js/bundle.js,'
  '/static/css/main.css,'
  '/manifest.json,'
  '/favicon.svg,'
  '/logo192.png
];

const CACHE_NAME = 'zion-tech-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker installing');
});

// Fetch event - serve cached content when offline
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
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions or other background tasks
  console.log('Background sync triggered');'

}
