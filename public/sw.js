// Service Worker for Zion Tech Group
// Provides offline support, caching, and performance improvements
;
const CACHE_NAME = 'zion-tech-group-v1.0.0';
;
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';


// Files to cache immediately;
const STATIC_FILES = [
  '/',/static/js/main.js',/static/css/main.css',/favicon.ico',/manifest.json'

];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(

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
=======
    caches.open(STATIC_CACHE)
      .then((cache) => {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-7189
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {

        console.log('Cache install failed:', error);
      })
  );

  self.skipWaiting();
=======
  '/about',/contact',/offline',/manifest.json',/favicon.ico',/icons/icon-192x192.png',/icons/icon-512x512.png'
];

// API routes to cache;
const API_ROUTES = [
  '/api/health',/api/analytics/performance',/api/analytics/error'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('[SW] Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static files:', error);
      })
  );
>>>>>>> origin/auto/autonomy-17187611596
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {

  console.log('[SW] Activating service worker...');

  
  event.waitUntil(

              // // // // // // // console.log('Deleting old cache:', cacheName);

=======
              console.log('[SW] Deleting old cache:', cacheName);
>>>>>>> origin/auto/autonomy-17187611596
              return caches.delete(cacheName);

          })
        );
      })
      .then(() => {

        // // // // // // // console.log('Service Worker activated');

=======
        console.log('[SW] Service worker activated');
>>>>>>> origin/auto/autonomy-17187611596
        return self.clients.claim();
      })
=======
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {

          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {

            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  );


  self.clients.claim();
});


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
  
=======

=======
// Fetch event - handle network requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
>>>>>>> origin/auto/autonomy-17187611596
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }


  // Handle different types of requests
  if (url.pathname === '/' || url.pathname === '/index.html') {
    // Home page - cache first
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/static/') || url.pathname.startsWith('/assets/')) {
    // Static assets - cache first
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/api/')) {
    // API calls - network first
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Other pages - network first
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache first strategy
async function cacheFirst(request, cacheName) {
  try {

=======
  
  // Handle different types of requests
  if (url.pathname.startsWith('/api/')) {
    // API requests - network first with cache fallback
    event.respondWith(handleApiRequest(request));
  } else if (url.pathname.startsWith('/_next/')) {
    // Next.js static assets - cache first
    event.respondWith(handleStaticAsset(request));
  } else if (url.pathname === '/' || url.pathname.startsWith('/about') || url.pathname.startsWith('/contact')) {
    // Main pages - network first with cache fallback
    event.respondWith(handlePageRequest(request));
  } else {
    // Other requests - cache first
    event.respondWith(handleCacheFirst(request));
  }
});

// Handle API requests
async function handleApiRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    // If network fails, try cache
>>>>>>> origin/auto/autonomy-17187611596
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);

      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {

    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed for API request, trying cache:', request.url);
    
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline response for API requests
    return new Response(
      JSON.stringify({ error: 'Offline', message: 'Service unavailable offline' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );

  }
}

// Handle page requests
async function handlePageRequest(request) {

    console.log('Cache first failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Network first strategy
async function networkFirst(request, cacheName) {
=======

  try {
    // Try network first
    const networkResponse = await fetch(request);

    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    // If network fails, try cache

    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response('Network error', { status: 503 });

=======
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed for page request, trying cache:', request.url);
    
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page
    return caches.match('/offline');
  }
}

// Handle static assets
async function handleStaticAsset(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Failed to fetch static asset:', request.url, error);
    throw error;
  }
}

// Handle cache-first strategy
async function handleCacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Failed to fetch resource:', request.url, error);
    throw error;
>>>>>>> origin/auto/autonomy-17187611596
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {

      // // // // // // // console.log('Background sync triggered:', event.tag)

    );

=======
    event.waitUntil(doBackgroundSync());
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
=======
  console.log('[SW] Background sync triggered:', event.tag);
  
>>>>>>> origin/auto/autonomy-17187611596
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-7189
});

// Handle background sync
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

    // Perform background sync tasks
    console.log('Background sync completed');
  } catch (error) {
    console.log('Background sync failed:', error);

=======
    
    console.log('[SW] Background sync completed');
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
>>>>>>> origin/auto/autonomy-17187611596
  }
}

// Handle push notifications
self.addEventListener('push', (event) => {

=======
  console.log('[SW] Push notification received:', event);
  

  if (event.data) {
    const data = event.data.json();
    
    const options = {

        }

      ]
=======
      body: data.body || 'New notification from Zion Tech Group',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      tag: data.tag || 'default',
      data: data.data || {},
      actions: data.actions || [],
      requireInteraction: data.requireInteraction || false,
      silent: data.silent || false
>>>>>>> origin/auto/autonomy-17187611596
    };
    
    event.waitUntil(

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

=======
      self.registration.showNotification(data.title, options)
=======
      self.registration.showNotification(data.title || 'Zion Tech Group', options)
>>>>>>> origin/auto/autonomy-17187611596
    );
  }
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-7189
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {


  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );

  }
});

// Message handling for communication with main thread

self.addEventListener('message', (event) => {
  console.log('Message received in service worker:', event.data);
=======
  console.log('[SW] Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action) {
    // Handle specific action
    console.log('[SW] Action clicked:', event.action);
  } else {
    // Default click behavior
    event.waitUntil(
      self.clients.matchAll({ type: 'window' })
        .then((clients) => {
          if (clients.length > 0) {
            // Focus existing window
            return clients[0].focus();
          } else {
            // Open new window
            return self.clients.openWindow('/');
          }
        })
    );
  }
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
  console.log('[SW] Notification closed:', event);
  
  // Track notification close for analytics
  event.waitUntil(
    fetch('/api/analytics/notification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'close',
        notificationId: event.notification.tag,
        timestamp: Date.now()
      })
    }).catch(console.error)
  );
});

// Handle message events from main thread
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);
>>>>>>> origin/auto/autonomy-17187611596
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });

});

// Periodic background sync (if supported)
if ('periodicSync' in self.registration) {
  self.addEventListener('periodicsync', (event) => {
    console.log('[SW] Periodic sync triggered:', event.tag);
    
    if (event.tag === 'content-update') {
      event.waitUntil(updateContent());
    }
  });
}

// Update content periodically
async function updateContent() {
  try {
    // Check for content updates
    const response = await fetch('/api/content/check-updates');
    if (response.ok) {
      const updates = await response.json();
      
      if (updates.hasUpdates) {
        // Clear dynamic cache to force refresh
        const cache = await caches.open(DYNAMIC_CACHE);
        await cache.clear();
        
        // Notify clients
        const clients = await self.clients.matchAll();
        clients.forEach((client) => {
          client.postMessage({
            type: 'CONTENT_UPDATED',
            message: 'New content available'
          });
        });
      }
    }
  } catch (error) {
    console.error('[SW] Failed to check for content updates:', error);
  }
}

// Error handling
self.addEventListener('error', (event) => {

  // // // // // // // console.error('Service Worker error:', event.error);

=======
  console.error('[SW] Service worker error:', event.error);
>>>>>>> origin/auto/autonomy-17187611596
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
  console.error('[SW] Unhandled promise rejection:', event.reason);
});

console.log('[SW] Service worker script loaded');
>>>>>>> origin/auto/autonomy-17187611596
