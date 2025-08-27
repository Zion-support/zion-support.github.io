const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';
// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/src/main.jsx',
  '/src/index.css'
];
// API routes to cache
const API_ROUTES = [
  '/api/services',
  '/api/contact',
  '/api/blog'
];
// Install event - cache resources
// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_FILES))
      .then(() => self.skipWaiting())
  );
});
// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Return offline page if both cache and network fail
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      })
  );
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (![STATIC_CACHE, DYNAMIC_CACHE].includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    )).then(() => self.clients.claim())
  );
});
// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  // Handle API requests
  if (API_ROUTES.some(route => url.pathname.startsWith(route))) {
    event.respondWith(handleApiRequest(request));
    return;
  }
  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }
  // Handle static assets
  if (request.destination === 'style' || request.destination === 'script' || request.destination === 'image') {
    event.respondWith(handleStaticAsset(request));
    return;
  }
  // Default: try network first, fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then((cache) => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache
        return caches.match(request);
      })
  );
});
// Handle API requests with cache-first strategy
async function handleApiRequest(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      fetch(request).then((response) => {
        if (response.status === 200) cache.put(request, response.clone());
      }).catch(() => {});
      return cachedResponse;
    }
    const response = await fetch(request);
    if (response.status === 200) cache.put(request, response.clone());
    return response;
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Service temporarily unavailable' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }
}
// Handle navigation requests with offline fallback
async function handleNavigationRequest(request) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      // Cache successful navigation responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Try to serve from cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Fallback to offline page
    const offlineResponse = await caches.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    // Last resort: return basic offline message
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Zion Tech Group - Offline</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px; 
              background: #0f172a; 
              color: white; 
            }
            .offline-icon { font-size: 64px; margin: 20px; }
            .retry-btn { 
              background: #22ddd2; 
              color: white; 
              border: none; 
              padding: 12px 24px; 
              border-radius: 6px; 
              cursor: pointer; 
              margin: 20px; 
            }
          </style>
        </head>
        <body>
          <div class="offline-icon">📡</div>
          <h1>You're Offline</h1>
          <p>Please check your internet connection and try again.</p>
          <button class="retry-btn" onclick="window.location.reload()">Retry</button>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}
// Handle static assets with cache-first strategy
async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Asset not available', { status: 404 });
  }
}
// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});
async function doBackgroundSync() {
  try {
    // Sync any pending offline actions
    console.log('Performing background sync');
    // Example: sync contact form submissions
    const pendingContacts = await getPendingContacts();
    for (const contact of pendingContacts) {
      await submitContactForm(contact);
    }
    console.log('Background sync completed');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
// Helper functions for background sync
async function getPendingContacts() {
  // Implementation would depend on your storage strategy
  return [];
}
async function submitContactForm(contact) {
  // Implementation would depend on your API
  console.log('Submitting contact form:', contact);
}
// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        { action: 'explore', title: 'View Services', icon: '/icon-192x192.png' },
        { action: 'close', title: 'Close', icon: '/icon-192x192.png' }
      ]
    };
    event.waitUntil(self.registration.showNotification(data.title || 'Zion Tech Group', options));
  }
});
// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/services')
    );
  } else if (event.action === 'close') {
    // Notification already closed
  } else {
    // Default action: open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
// Error handling
self.addEventListener('error', (event) => {
  console.error('Service worker error:', event.error);
});
// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service worker unhandled rejection:', event.reason);
});