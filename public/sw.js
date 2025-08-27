<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
=======
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';
// Files to cache immediately
const STATIC_FILES = [
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  '/',
  '/offline.html',
  '/static/js/bundle.js',
  '/static/css/main.css'
];
<<<<<<< HEAD

// Install event - cache resources
=======
// Install event - cache static files
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
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
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
<<<<<<< HEAD

=======
// Fetch event - serve from cache or network
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
  if (url.pathname === '/' || url.pathname === '/index.html') {
    // Home page - cache first
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/static/') || url.pathname.startsWith('/images/')) {
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
    console.error('Cache first strategy failed:', error);
    return new Response('Network error', { status: 503 });
  }
}
// Network first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Network first strategy failed:', error);
    
    // Try to serve from cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (request.headers.get('accept').includes('text/html')) {
      return caches.match('/offline.html');
    }
    
    return new Response('Network error', { status: 503 });
  }
}
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});
async function doBackgroundSync() {
  try {
    // Perform background sync operations
    console.log('Background sync completed');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification from Zion Tech Group',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icon-192x192.png'
      },
<<<<<<< HEAD
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
=======
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/images/zion-logo.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/images/zion-logo.png'
        }
      ]
    };
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
});
// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
<<<<<<< HEAD
=======
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
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
});