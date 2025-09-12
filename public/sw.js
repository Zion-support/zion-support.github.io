<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

const STATIC_ASSETS = [
=======
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
>>>>>>> origin/content/blog-sept12
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened static cache');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
<<<<<<< HEAD
=======
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
=======
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE_NAME = 'zion-tech-group-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// Dynamic routes to cache
const DYNAMIC_ROUTES = [
  '/services',
  '/about',
  '/contact',
  '/solutions',
  '/resources'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
/* eslint-env serviceworker */
/* global self, caches */

const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

// Routes that should be cached
const STATIC_ROUTES = [
  '/',
  '/offline.html',
  '/manifest.json'
];

// API routes that should be cached
const API_ROUTES = [
  '/api/contact',
  '/api/services'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ROUTES);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch(() => {
        // Handle caching errors silently
=======
        console.log('Opened static cache');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
>>>>>>> cursor/create-and-deploy-new-content-d63f
>>>>>>> origin/content/blog-sept12
  );
});

// Activate event - clean up old caches
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-d63f
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
<<<<<<< HEAD
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
=======
<<<<<<< HEAD
          if (cacheName !== CACHE_NAME) {
=======
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
>>>>>>> cursor/create-and-deploy-new-content-d63f
>>>>>>> origin/content/blog-sept12
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
<<<<<<< HEAD
// Background sync for offline form submissions
=======
>>>>>>> origin/content/blog-sept12
// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

<<<<<<< HEAD
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

=======
>>>>>>> origin/content/blog-sept12
  // Handle different types of requests
  if (url.pathname.startsWith('/static/') || url.pathname.startsWith('/assets/')) {
    // Static assets - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/api/')) {
    // API requests - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // HTML pages - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache first strategy for static assets
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
    console.log('Cache first strategy failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Network first strategy for dynamic content
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network first strategy failed:', error);
    
    // Try to serve from cache
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

// Background sync for offline actions
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-d63f
>>>>>>> origin/content/blog-sept12
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync logic here
      Promise.resolve()
    );
  }
});

async function doBackgroundSync() {
<<<<<<< HEAD
  try {
    // Perform background sync tasks
    console.log('Background sync completed');
  } catch (error) {
    console.log('Background sync failed:', error);
=======
<<<<<<< HEAD
  // Handle offline form submissions
  const requests = await getStoredRequests();
  for (const request of requests) {
    try {
      await fetch(request.url, request.options);
      await removeStoredRequest(request.id);
    } catch (error) {
      console.error('Background sync failed:', error);
    }
>>>>>>> origin/content/blog-sept12
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo192.png',
      badge: '/logo192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/logo192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/logo192.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

<<<<<<< HEAD
=======
// Remove stored request
async function removeStoredRequest(id) {
  const requests = await getStoredRequests();
  const filtered = requests.filter(req => req.id !== id);
  localStorage.setItem('offline-requests', JSON.stringify(filtered));
}
=======
  try {
    // Perform background sync tasks
    console.log('Background sync completed');
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo192.png',
      badge: '/logo192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/logo192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/logo192.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

>>>>>>> origin/content/blog-sept12
// Notification click handling
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
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.log('Service worker error:', event.error);
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  console.log('Service worker unhandled rejection:', event.reason);
});
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-d63f
>>>>>>> origin/content/blog-sept12
