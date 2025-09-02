// Development Service Worker for Vite
const CACHE_NAME = 'zion-tech-group-dev-v1';
// Files to cache in development
const STATIC_FILES = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/favicon.ico',
  '/og-image.svg',
  '/manifest.json',
  '/offline.html',
  '/vite.svg'
];
// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
<<<<<<< HEAD
        // // // console.log('Development SW: Caching static files');
        return Promise.allSettled(
          STATIC_FILES.map(url =>
            cache.add(url).catch(error => {
              // // // console.warn(`Dev SW: Failed to cache ${url}:`, error);
=======
        // // // // // // // console.log('Development SW: Caching static files');
        return Promise.allSettled(
          STATIC_FILES.map(url =>
            cache.add(url).catch(error => {
              // // // // // // // console.warn(`Dev SW: Failed to cache ${url}:`, error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
              return null;
            })
          )
        );
      })
      .then((results) => {
        const successful = results.filter(r => r.status === 'fulfilled').length;
        const failed = results.filter(r => r.status === 'rejected').length;
<<<<<<< HEAD
        // // // console.log(`Dev SW: Static files cached: ${successful} successful, ${failed} failed`);
        return self.skipWaiting();
      })
      .catch((error) => {
        // // // console.error('Dev SW: Error in install:', error);
=======
        // // // // // // // console.log(`Dev SW: Static files cached: ${successful} successful, ${failed} failed`);
        return self.skipWaiting();
      })
      .catch((error) => {
        // // // // // // // console.error('Dev SW: Error in install:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      })
  );
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
<<<<<<< HEAD
              // // // console.log('Dev SW: Deleting old cache:', cacheName);
=======
              // // // // // // // console.log('Dev SW: Deleting old cache:', cacheName);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
              return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
<<<<<<< HEAD
        // // // console.log('Dev SW: Activated');
=======
        // // // // // // // console.log('Dev SW: Activated');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        return self.clients.claim();
      })
  );
});
// Fetch event - network first for development
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  // Handle external requests (fonts, etc.)
  if (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(request).catch((error) => {
<<<<<<< HEAD
        // // // console.warn('Dev SW: External request failed:', url.href, error);
=======
        // // // // // // // console.warn('Dev SW: External request failed:', url.href, error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        // Return empty response for failed external requests
        return new Response('', { status: 204 });
      })
    );
    return;
  // For development, always try network first, then cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        return response;
      })
      .catch((error) => {
<<<<<<< HEAD
        // // // console.log('Dev SW: Network failed, trying cache:', url.href);
=======
        // // // // // // // console.log('Dev SW: Network failed, trying cache:', url.href);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        // Try to serve from cache if network fails
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          // Return offline page for navigation requests
          if (request.destination === 'document') {
            return caches.match('/offline.html');
          return new Response('Not available offline', { status: 503 });
        });
      })
  );
});}}}}}}