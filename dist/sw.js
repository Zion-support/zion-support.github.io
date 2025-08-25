// Basic Service Worker for Zion Tech Group
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE_NAME = 'zion-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1.0.0';
=======
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';
>>>>>>> 8166e4d86173885c3ad451d279716a4c1c8c4172

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
<<<<<<< HEAD
  '/offline.html'
];

// API routes to cache
const API_ROUTES = [
  '/api/services',
  '/api/contact',
  '/api/analytics'
=======
  '/css/main.css',
  '/js/main.js',
  '/images/zion-tech-group-logo.png',
  '/images/zion-tech-group-og.jpg'
>>>>>>> 8166e4d86173885c3ad451d279716a4c1c8c4172
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
<<<<<<< HEAD
        console.error('Failed to cache static files:', error);
=======
        console.error('Error caching static files:', error);
>>>>>>> 8166e4d86173885c3ad451d279716a4c1c8c4172
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
<<<<<<< HEAD
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME) {
=======
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
>>>>>>> 8166e4d86173885c3ad451d279716a4c1c8c4172
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
<<<<<<< HEAD
  if (isStaticFile(request)) {
    event.respondWith(handleStaticFile(request));
  } else if (isApiRequest(request)) {
    event.respondWith(handleApiRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
=======
  if (url.pathname === '/' || url.pathname === '/index.html') {
    // Home page - serve from cache first, then network
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            // Return cached version and update in background
            fetch(request)
              .then((networkResponse) => {
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => cache.put(request, networkResponse));
              })
              .catch(() => {
                // Network failed, keep using cached version
              });
            return response;
          }
          
          // Not in cache, fetch from network
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
  } else if (url.pathname.startsWith('/images/') || url.pathname.startsWith('/css/') || url.pathname.startsWith('/js/')) {
    // Static assets - cache first strategy
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(STATIC_CACHE)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
  } else if (url.pathname.startsWith('/api/')) {
    // API requests - network first strategy
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              
              // Return offline page if nothing in cache
              return caches.match('/offline.html');
            });
        })
    );
  } else {
    // Other pages - network first with cache fallback
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              
              // Return offline page if nothing in cache
              return caches.match('/offline.html');
            });
        })
    );
>>>>>>> 8166e4d86173885c3ad451d279716a4c1c8c4172
  }
});

// Check if request is for a static file
function isStaticFile(request) {
  const url = new URL(request.url);
  return STATIC_FILES.some(file => url.pathname === file) ||
         request.destination === 'script' ||
         request.destination === 'style' ||
         request.destination === 'image' ||
         request.destination === 'font';
}

// Check if request is for an API
function isApiRequest(request) {
  const url = new URL(request.url);
  return API_ROUTES.some(route => url.pathname.startsWith(route));
}

// Handle static file requests
async function handleStaticFile(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Fallback to network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Static file fetch failed:', error);
    
    // Return offline page for HTML requests
    if (request.destination === 'document') {
      return caches.match('/offline.html');
    }
    
    // Return default response for other failed requests
    return new Response('Resource not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Handle API requests
async function handleApiRequest(request) {
  try {
    // Try network first for API requests
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful API responses
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('API request failed:', error);
    
    // Try to serve from cache if network fails
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return error response
    return new Response('API not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Handle dynamic requests (HTML pages)
async function handleDynamicRequest(request) {
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
    console.error('Dynamic request failed:', error);
    
    // Try to serve from cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (request.destination === 'document') {
      return caches.match('/offline.html');
    }
    
    // Return default response
    return new Response('Page not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Background sync implementation
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
    
    console.log('Background sync completed successfully');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
<<<<<<< HEAD
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
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
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
=======
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
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
          title: 'Explore',
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
      self.registration.showNotification(data.title, options)
    );
  }
>>>>>>> 8166e4d86173885c3ad451d279716a4c1c8c4172
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('Message received in service worker:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
<<<<<<< HEAD
    event.ports[0].postMessage({
      version: CACHE_NAME,
      timestamp: Date.now()
    });
=======
    event.ports[0].postMessage({ version: CACHE_NAME });
>>>>>>> 8166e4d86173885c3ad451d279716a4c1c8c4172
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

console.log('Service Worker script loaded successfully');