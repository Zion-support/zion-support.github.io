const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Files to cache immediately - updated to match Vite build structure
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

// Install event - cache static files with better error handling
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
<<<<<<< HEAD
        // // // console.log('Caching static files');
=======
        // // // // // // // console.log('Caching static files');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        // Use addAll with individual error handling for each file
        return Promise.allSettled(
          STATIC_FILES.map(url =>
            cache.add(url).catch(error => {
<<<<<<< HEAD
              // // // console.warn(`Failed to cache ${url}:`, error);
=======
              // // // // // // // console.warn(`Failed to cache ${url}:`, error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
              // Try to fetch and cache manually if add() fails
              return fetch(url)
                .then(response => {
                  if (response.ok) {
                    return cache.put(url, response);

                  throw new Error(`HTTP ${response.status}`);
                })
                .catch(fetchError => {
<<<<<<< HEAD
                  // // // console.warn(`Manual fetch failed for ${url}:`, fetchError);
=======
                  // // // // // // // console.warn(`Manual fetch failed for ${url}:`, fetchError);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                  return null; // Continue with other files
                });
            })
          )
        );
      })
      .then((results) => {
        const successful = results.filter(r => r.status === 'fulfilled').length;
        const failed = results.filter(r => r.status === 'rejected').length;
<<<<<<< HEAD
        // // // console.log(`Static files cached: ${successful} successful, ${failed} failed`);
        return self.skipWaiting();
      })
      .catch((error) => {
        // // // console.error('Error in service worker install:', error);
=======
        // // // // // // // console.log(`Static files cached: ${successful} successful, ${failed} failed`);
        return self.skipWaiting();
      })
      .catch((error) => {
        // // // // // // // console.error('Error in service worker install:', error);
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
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
<<<<<<< HEAD
              // // // console.log('Deleting old cache:', cacheName);
=======
              // // // // // // // console.log('Deleting old cache:', cacheName);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
              return caches.delete(cacheName);

          })
        );
      })
      .then(() => {
<<<<<<< HEAD
        // // // console.log('Service Worker activated');
=======
        // // // // // // // console.log('Service Worker activated');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;

  // Skip external requests
  if (url.origin !== self.location.origin) {
    // For external requests, try to fetch from network but don't cache
    event.respondWith(
      fetch(request).catch((error) => {
<<<<<<< HEAD
        // // // console.warn('External request failed:', url.href, error);
        // Return a fallback response for failed external requests
        // For images, return a placeholder or skip caching
        if (request.destination === 'image') {
          // // // console.log('Skipping failed external image:', url.href);
=======
        // // // // // // // console.warn('External request failed:', url.href, error);
        // Return a fallback response for failed external requests
        // For images, return a placeholder or skip caching
        if (request.destination === 'image') {
          // // // // // // // console.log('Skipping failed external image:', url.href);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
          return new Response('', { status: 404 });

        // For other external requests, return a basic error response
        return new Response('External resource unavailable', { status: 503 });
      })
    );
    return;

  // Handle internal requests
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached response if available
        if (response) {
          return response;

        // Clone the request for potential caching
        const fetchRequest = request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;

            // Clone the response for caching
            const responseToCache = response.clone();

            // Cache the response in dynamic cache
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache);
              })
              .catch((error) => {
<<<<<<< HEAD
                // // // console.warn('Failed to cache response:', error);
=======
                // // // // // // // console.warn('Failed to cache response:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
              });

            return response;
          })
          .catch((error) => {
<<<<<<< HEAD
            // // // console.warn('Fetch failed, serving offline page:', error);
=======
            // // // // // // // console.warn('Fetch failed, serving offline page:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

            // For navigation requests, serve offline page
            if (request.mode === 'navigate') {
              return caches.match('/offline.html');

            // For other requests, return a basic offline response
            return new Response('Offline - Resource unavailable', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
<<<<<<< HEAD
      // // // console.log('Background sync triggered:', event.tag)
=======
      // // // // // // // console.log('Background sync triggered:', event.tag)
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    );

});

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'New notification from Zion Tech Group',
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View',
          icon: '/favicon.ico'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/favicon.ico'

      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'Zion Tech Group', options)
    );

});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );

});

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });

});

// Error handling
self.addEventListener('error', (event) => {
<<<<<<< HEAD
  // // // console.error('Service Worker error:', event.error);
=======
  // // // // // // // console.error('Service Worker error:', event.error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
<<<<<<< HEAD
  // // // console.error('Service Worker unhandled rejection:', event.reason);
=======
  // // // // // // // console.error('Service Worker unhandled rejection:', event.reason);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
});
}}}}}}}}}}}}}}