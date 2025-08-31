// Service Worker for Zion Tech Group
// Provides offline support, caching, and performance improvements
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE_NAME = 'zion-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1.0.0';
// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  '/images/zion-tech-group-logo.png',
  '/images/zion-tech-group-og.jpg'
];
// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        // // // // // // // console.log('Caching static files');
        // Use addAll with individual error handling for each file
        return Promise.allSettled(
          STATIC_FILES.map(url =>
            cache.add(url).catch(error => {
              // // // // // // // console.warn(`Failed to cache ${url}:`, error);
              // Try to fetch and cache manually if add() fails
              return fetch(url)
                .then(response => {
                  if (response.ok) {
                    return cache.put(url, response);
                  throw new Error(`HTTP ${response.status}`);
                })
                .catch(fetchError => {
                  // // // // // // // console.warn(`Manual fetch failed for ${url}:`, fetchError);
                  return null; // Continue with other files
                });
            })
          )
        );
      })
      .then((results) => {
        const successful = results.filter(r => r.status === 'fulfilled').length;
        const failed = results.filter(r => r.status === 'rejected').length;
        // // // // // // // console.log(`Static files cached: ${successful} successful, ${failed} failed`);
        return self.skipWaiting();
      })
      .catch((error) => {
        // // // // // // // console.error('Error in service worker install:', error);
=======
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {
        console.error('Error caching static files:', error);
      })
  );
  // Skip waiting to activate immediately
  self.skipWaiting();
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
              // // // // // // // console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        // // // // // // // console.log('Service Worker activated');
        return self.clients.claim();
      })
=======
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && 
              cacheName !== DYNAMIC_CACHE_NAME &&
              cacheName.startsWith('zion-')) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Claim all clients
  self.clients.claim();
});
// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
        // // // // // // // console.warn('External request failed:', url.href, error);
        // Return a fallback response for failed external requests
        // For images, return a placeholder or skip caching
        if (request.destination === 'image') {
          // // // // // // // console.log('Skipping failed external image:', url.href);
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
                // // // // // // // console.warn('Failed to cache response:', error);
              });
            return response;
          })
          .catch((error) => {
            // // // // // // // console.warn('Fetch failed, serving offline page:', error);
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
=======
  }
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  // Handle different types of requests
  if (url.pathname.startsWith('/api/')) {
    // API requests - network first, then cache
    event.respondWith(handleApiRequest(request));
  } else if (url.pathname.startsWith('/images/') || url.pathname.startsWith('/static/')) {
    // Static assets - cache first, then network
    event.respondWith(handleStaticRequest(request));
  } else {
    // HTML pages - network first, then cache
    event.respondWith(handlePageRequest(request));
  }
});
// Handle API requests
async function handleApiRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return offline response
    return new Response(
      JSON.stringify({ error: 'Network error, please try again later' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
// Handle static asset requests
async function handleStaticRequest(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    // Return cached response and update cache in background
    fetch(request).then((response) => {
      if (response.ok) {
        caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
          cache.put(request, response);
        });
      }
    });
    return cachedResponse;
  }
  // Try network if not cached
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return offline response
    return new Response('Offline', { status: 503 });
  }
}
// Handle page requests
async function handlePageRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return offline page
    return caches.match('/offline.html') || new Response('Offline', { status: 503 });
  }
}
// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  if (event.tag === 'background-sync') {
      // // // // // // // console.log('Background sync triggered:', event.tag)
    );
=======
    event.waitUntil(doBackgroundSync());
  }
});
async function doBackgroundSync() {
  try {
    // Get all clients
    const clients = await self.clients.matchAll();
    // Notify clients about sync
    clients.forEach((client) => {
      client.postMessage({
        type: 'BACKGROUND_SYNC',
        message: 'Background sync completed'
      });
    });
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification from Zion Tech Group',
    icon: '/images/zion-tech-group-logo.png',
    badge: '/images/zion-tech-group-logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/images/zion-tech-group-logo.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/images/zion-tech-group-logo.png'
      }
    ]
  };
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});
// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  event.notification.close();
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
});
// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('Message received in service worker:', event.data);
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
});
// Error handling
self.addEventListener('error', (event) => {
  // // // // // // // console.error('Service Worker error:', event.error);
});
// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  // // // // // // // console.error('Service Worker unhandled rejection:', event.reason);
});
}}}}}}}}}}}}}}
=======
  console.error('Service Worker error:', event.error)});
// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason)});
