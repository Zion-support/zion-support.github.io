// Enhanced Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/page.tsx',
  '/src/globals.css',
  '/manifest.json'
];

// API endpoints to cache
const API_CACHE_PATTERNS = [
  /^https:\/\/api\.ziontechgroup\.com/,
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
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
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else if (isPageRequest(request)) {
    event.respondWith(handlePageRequest(request));
  } else {
    event.respondWith(handleOtherRequest(request));
  }
});

// Check if request is for static assets
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

// Check if request is for API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return API_CACHE_PATTERNS.some(pattern => pattern.test(url.href));
}

// Check if request is for a page
function isPageRequest(request) {
  return request.headers.get('accept').includes('text/html');
}

// Handle static assets - cache first strategy
async function handleStaticAsset(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Error handling static asset', error);
    return new Response('Asset not available offline', { status: 503 });
  }
}

// Handle API requests - network first strategy
async function handleAPIRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache for API request');
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('API not available offline', { status: 503 });
  }
}

// Handle page requests - network first with fallback
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache for page request');
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to index.html for SPA routing
    const fallbackResponse = await caches.match('/index.html');
    if (fallbackResponse) {
      return fallbackResponse;
    }
    
    return new Response('Page not available offline', { status: 503 });
  }
}

// Handle other requests - cache first strategy
async function handleOtherRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Error handling other request', error);
    return new Response('Resource not available offline', { status: 503 });
  }
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Handle offline form submissions
    const pendingSubmissions = await getPendingSubmissions();
    for (const submission of pendingSubmissions) {
      await submitForm(submission);
      await removePendingSubmission(submission.id);
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
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
        primaryKey: data.primaryKey
      },
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
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Utility functions for background sync
async function getPendingSubmissions() {
  // Implementation would depend on your data storage strategy
  return [];
}

async function submitForm(submission) {
  // Implementation would depend on your API structure
  return fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify(submission),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

async function removePendingSubmission(id) {
  // Implementation would depend on your data storage strategy
  return Promise.resolve();
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Cache cleanup - remove old entries
setInterval(async () => {
  const cacheNames = await caches.keys();
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    // Remove entries older than 7 days
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    
    for (const request of requests) {
      const response = await cache.match(request);
      const dateHeader = response.headers.get('date');
      if (dateHeader) {
        const responseDate = new Date(dateHeader).getTime();
        if (responseDate < oneWeekAgo) {
          await cache.delete(request);
        }
      }
    }
  }
}, 24 * 60 * 60 * 1000); // Run daily

console.log('Service Worker: Loaded successfully');