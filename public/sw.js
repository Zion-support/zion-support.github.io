// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE_NAME = 'zion-static-v1';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/logo192.png',
  '/fonts/inter.woff2',
  '/css/main.css',
  '/js/main.js',
  '/js/vendor.js',
  '/js/ui.js'
];

// Dynamic routes to cache
const DYNAMIC_ROUTES = [
  '/services',
  '/contact',
  '/about',
  '/ai-services',
  '/it-services',
  '/pricing',
  '/case-studies',
  '/blog'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'document') {
    event.respondWith(handleDocumentRequest(request));
  } else if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(handleStaticAssetRequest(request));
  } else {
    event.respondWith(handleOtherRequest(request));
  }
});

// Handle document requests (HTML pages)
async function handleDocumentRequest(request) {
  try {
    // Try network first for documents
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
  }

  // Fallback to offline page
  return caches.match('/offline.html') || new Response('Offline', { status: 503 });
}

// Handle image requests
async function handleImageRequest(request) {
  try {
    // Try cache first for images
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return a placeholder image or fallback
    return new Response('', { status: 404 });
  }
}

// Handle static asset requests (CSS, JS, fonts)
async function handleStaticAssetRequest(request) {
  try {
    // Try cache first for static assets
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return a fallback response
    return new Response('', { status: 404 });
  }
}

// Handle other requests (API calls, etc.)
async function handleOtherRequest(request) {
  try {
    // Try network first for other requests
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return error response
    return new Response('Network error', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle background sync tasks
  try {
    // Get pending requests from IndexedDB
    const pendingRequests = await getPendingRequests();
    
    for (const request of pendingRequests) {
      try {
        await fetch(request.url, request.options);
        await removePendingRequest(request.id);
      } catch (error) {
        // Keep request for next sync
      }
    }
  } catch (error) {
    // Handle sync error
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo192.png',
      badge: '/favicon.svg',
      vibrate: [100, 50, 100],
      data: data.data,
      actions: data.actions || []
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Helper functions for IndexedDB operations
async function getPendingRequests() {
  // Implementation for getting pending requests from IndexedDB
  return [];
}

async function removePendingRequest(id) {
  // Implementation for removing pending request from IndexedDB
}

// Cache management
async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => 
    name !== STATIC_CACHE_NAME && 
    name !== DYNAMIC_CACHE_NAME
  );
  
  await Promise.all(
    oldCaches.map(name => caches.delete(name))
  );
}

// Periodic cleanup
setInterval(cleanupOldCaches, 24 * 60 * 60 * 1000); // Daily cleanup