// Zion Tech Group Service Worker
// Version: 2.0.0
// Purpose: Performance optimization, offline support, and caching

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';
<<<<<<< HEAD

=======
const API_CACHE = 'zion-api-v1.0.0';

// Static assets to cache
>>>>>>> cursor/add-new-services-and-advertise-them-650b
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
<<<<<<< HEAD
  '/favicon.ico'
];

const API_CACHE_PATTERNS = [
  /\/api\/services/,
  /\/api\/pricing/,
  /\/api\/contact/
=======
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/robots.txt',
  '/sitemap.xml'
];

// CSS and JS files to cache
const STATIC_RESOURCES = [
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/static/media/logo.svg'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/services',
  '/api/solutions',
  '/api/categories',
  '/api/blog'
>>>>>>> cursor/add-new-services-and-advertise-them-650b
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
<<<<<<< HEAD
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
=======
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
<<<<<<< HEAD
      .catch(error => {
=======
      .catch((error) => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        console.error('Error caching static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
<<<<<<< HEAD
=======
  console.log('Service Worker activating...');
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
<<<<<<< HEAD
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
=======
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
<<<<<<< HEAD
        console.log('Service Worker activated');
=======
        console.log('Service Worker activated successfully');
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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

<<<<<<< HEAD
  // Handle API requests with network-first strategy
  if (API_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Handle static assets with cache-first strategy
  if (isStaticAsset(url.pathname)) {
    event.respondWith(handleStaticAsset(request));
    return;
  }

  // Handle HTML pages with network-first strategy
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(handleHtmlRequest(request));
    return;
  }

  // Default network-first strategy for other requests
  event.respondWith(handleDefaultRequest(request));
});

async function handleApiRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback
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
    // Return offline fallback for critical assets
    if (request.url.includes('.js') || request.url.includes('.css')) {
      return new Response('', { status: 404 });
    }
    throw error;
  }
}

async function handleHtmlRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
=======
  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else if (isNavigationRequest(request)) {
    event.respondWith(handleNavigationRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});

// Check if request is for static assets
function isStaticAsset(request) {
  const url = new URL(request.url);
  return STATIC_ASSETS.includes(url.pathname) || 
         STATIC_RESOURCES.some(resource => request.url.includes(resource));
}

// Check if request is for API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || 
         API_ENDPOINTS.some(endpoint => url.pathname.includes(endpoint));
}

// Check if request is for navigation
function isNavigationRequest(request) {
  return request.mode === 'navigate';
}

// Handle static asset requests
async function handleStaticAsset(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling static asset:', error);
    return new Response('Offline - Static asset not available', { status: 503 });
  }
}

// Handle API requests
async function handleAPIRequest(request) {
  try {
    const cache = await caches.open(API_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Return cached response and update in background
      fetch(request)
        .then((response) => {
          if (response.ok) {
            cache.put(request, response);
          }
        })
        .catch(console.error);
      
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling API request:', error);
    return new Response('Offline - API not available', { status: 503 });
  }
}

// Handle navigation requests
async function handleNavigationRequest(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling navigation request:', error);
    // Return offline page
<<<<<<< HEAD
    return caches.match('/offline.html') || new Response(
      '<h1>Offline</h1><p>Please check your internet connection and try again.</p>',
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

async function handleDefaultRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('', { status: 404 });
  }
}

function isStaticAsset(pathname) {
  return pathname.includes('.js') || 
         pathname.includes('.css') || 
         pathname.includes('.woff2') || 
         pathname.includes('.png') || 
         pathname.includes('.jpg') || 
         pathname.includes('.svg');
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
=======
    return caches.match('/offline.html');
  }
}

// Handle dynamic requests
async function handleDynamicRequest(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling dynamic request:', error);
    return new Response('Offline - Resource not available', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Background sync implementation
async function doBackgroundSync() {
  try {
<<<<<<< HEAD
    // Get pending requests from IndexedDB
    const pendingRequests = await getPendingRequests();
    
    for (const request of pendingRequests) {
      try {
        await fetch(request.url, request.options);
        await removePendingRequest(request.id);
      } catch (error) {
        console.error('Background sync failed for request:', request.id, error);
      }
    }
=======
    // Sync any pending data
    console.log('Performing background sync...');
    
    // Example: Sync form submissions
    const pendingData = await getPendingData();
    for (const data of pendingData) {
      await syncData(data);
    }
    
    console.log('Background sync completed');
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

<<<<<<< HEAD
// Helper functions for IndexedDB operations
async function getPendingRequests() {
  // Implementation would depend on your IndexedDB setup
  return [];
}

async function removePendingRequest(id) {
  // Implementation would depend on your IndexedDB setup
=======
// Get pending data from IndexedDB
async function getPendingData() {
  // Implementation would depend on your data storage strategy
  return [];
}

// Sync data to server
async function syncData(data) {
  // Implementation would depend on your API
  console.log('Syncing data:', data);
>>>>>>> cursor/add-new-services-and-advertise-them-650b
}

// Push notification handling
self.addEventListener('push', (event) => {
<<<<<<< HEAD
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        url: data.url
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
=======
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New notification from Zion Tech Group',
    icon: '/android-chrome-192x192.png',
    badge: '/favicon-32x32.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/favicon-32x32.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon-32x32.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
>>>>>>> cursor/add-new-services-and-advertise-them-650b
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
<<<<<<< HEAD
  if (event.notification.data.url) {
=======
  if (event.action === 'explore') {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
<<<<<<< HEAD
    event.ports[0].postMessage({ version: '2.0.0' });
=======
    event.ports[0].postMessage({ version: CACHE_NAME });
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  }
});

// Error handling
self.addEventListener('error', (event) => {
<<<<<<< HEAD
  console.error('Service worker error:', event.error);
=======
  console.error('Service Worker error:', event.error);
>>>>>>> cursor/add-new-services-and-advertise-them-650b
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
<<<<<<< HEAD
  console.error('Service worker unhandled rejection:', event.reason);
});

// Performance monitoring
const performanceMetrics = {
  cacheHits: 0,
  cacheMisses: 0,
  networkRequests: 0,
  errors: 0
};

// Log performance metrics periodically
setInterval(() => {
  console.log('Service Worker Performance Metrics:', performanceMetrics);
}, 60000); // Log every minute
=======
  console.error('Service Worker unhandled rejection:', event.reason);
});
>>>>>>> cursor/add-new-services-and-advertise-them-650b
