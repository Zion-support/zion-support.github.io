// Service Worker for PWA functionality
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

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

// Message event handler - CRITICAL FIX for async response error
self.addEventListener('message', (event) => {
  // Handle different message types
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        // Skip waiting and take control immediately
        self.skipWaiting();
        break;
      case 'GET_VERSION':
        // Respond with version info
        event.ports[0].postMessage({
          type: 'VERSION_INFO',
          version: CACHE_NAME
        });
        break;
      default:
        // For unknown message types, don't return true
        // This prevents the "message channel closed" error
        break;
    }
  }
  // IMPORTANT: Don't return true unless we're actually handling async operations
  // Returning true indicates we'll send an async response, which causes the error
  // if the channel closes before we respond
});

// Activate event
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
