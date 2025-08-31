// Service Worker for Zion Tech Group
// Provides offline support, caching, and performance improvements
const CACHE_NAME = 'zion-tech-group-v1.0.0';
<<<<<<< HEAD
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

=======
const STATIC_CACHE_NAME = 'zion-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1.0.0';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/components/Header.tsx',
  '/src/components/Footer.tsx',
  '/src/pages/Home.tsx',
  '/src/index.css',
  '/manifest.json'
];
// Install event - cache static files
self.addEventListener('install', (event) => {
<<<<<<< HEAD
=======
  console.log('Service Worker installing...');
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
      })
  );
=======
        console.error('Error caching static files:', error);
      })
  );
  // Skip waiting to activate immediately
  self.skipWaiting();
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
<<<<<<< HEAD
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
=======
  console.log('Service Worker activating...');
  event.waitUntil(
              // // // // // // // console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          })
        );
      })
      .then(() => {
<<<<<<< HEAD
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
});
// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
<<<<<<< HEAD

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // Handle different types of requests
  if (isStaticFile(request)) {
    event.respondWith(handleStaticFile(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});
<<<<<<< HEAD

// Check if request is for a static file
function isStaticFile(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

// Check if request is for an API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.startsWith('/services/');
}

// Handle static file requests
async function handleStaticFile(request) {
=======
// Handle API requests
async function handleApiRequest(request) {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Fetch from network
    const networkResponse = await fetch(request);
<<<<<<< HEAD
    
    // Cache the response for future use
=======
    // Cache successful responses
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('Failed to fetch static file:', error);
    
    // Return a fallback response if available
    const fallbackResponse = await caches.match('/offline.html');
    if (fallbackResponse) {
      return fallbackResponse;
    }
    
    return new Response('Offline - Static file not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Handle API requests
async function handleAPIRequest(request) {
  try {
    // Try network first for API requests
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful API responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('API request failed:', error);
    
    // Try to serve from cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
<<<<<<< HEAD
    
    return new Response('Offline - API not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Handle dynamic requests (HTML pages)
async function handleDynamicRequest(request) {
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  try {
    // Try network first
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Cache HTML pages
      const cache = await caches.open(DYNAMIC_CACHE);
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
    // Return offline page
    const offlineResponse = await caches.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    
    return new Response('Offline - Page not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}
// Background sync for offline actions
self.addEventListener('sync', (event) => {
<<<<<<< HEAD
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Handle background sync
async function doBackgroundSync() {
  try {
    // Get any pending requests from IndexedDB
    const pendingRequests = await getPendingRequests();
    
    for (const request of pendingRequests) {
      try {
        await fetch(request.url, request.options);
        await removePendingRequest(request.id);
      } catch (error) {
        console.error('Background sync failed for request:', error);
      }
    }
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
<<<<<<< HEAD
      actions: [
        {
          action: 'explore',
          title: 'View Details',
          icon: '/icon-192x192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-192x192.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
});
// Notification click handling
self.addEventListener('notificationclick', (event) => {
<<<<<<< HEAD
=======
  console.log('Notification clicked:', event);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  event.notification.close();
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
<<<<<<< HEAD
  }
});

// Helper functions for IndexedDB operations
async function getPendingRequests() {
  // Implementation would depend on your IndexedDB setup
  return [];
}

async function removePendingRequest(id) {
  // Implementation would depend on your IndexedDB setup
}

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-update') {
    event.waitUntil(updateContent());
  }
});

async function updateContent() {
  try {
    // Check for content updates
    const response = await fetch('/api/content/check-updates');
    if (response.ok) {
      const updates = await response.json();
      if (updates.hasUpdates) {
        // Notify clients about updates
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'content-update',
            data: updates
          });
        });
      }
    }
  } catch (error) {
    console.error('Periodic sync failed:', error);
  }
}

// Message handling from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(STATIC_CACHE)
        .then((cache) => {
          return cache.addAll(event.data.urls);
        })
    );
  }
});

console.log('Zion Tech Group Service Worker loaded successfully');
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
