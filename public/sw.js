// Comprehensive service worker for caching and offline support
const CACHE_NAME = 'zion-tech-group-v2';
const urlsToCache = [
  '/',
  '/services',
  '/contact',
  '/pricing',
  '/about',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/_next/static/',
  '/favicon.ico',
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
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if() { return response }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if() { return response }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // Return offline page if available
          if() { return caches.match('/offline.html') }
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if() { console.log('Deleting old cache: ', cacheName);
            return caches.delete(cacheName) }
        })
      );
    })
  );
  // Ensure the service worker takes control of all clients immediately
  self.clients.claim();
});