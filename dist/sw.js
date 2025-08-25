<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE_NAME = 'zion-static-v1';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/images/zion-logo.png',
  '/images/placeholder.jpg'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
// Service Worker for Zion Tech Group Website
// Version: 1.0.0
// Cache Name: zion-tech-v1

const CACHE_NAME = 'zion-tech-v1';
<<<<<<< HEAD
const STATIC_CACHE = 'zion-tech-static-v1';
const DYNAMIC_CACHE = 'zion-tech-dynamic-v1';
const API_CACHE = 'zion-tech-api-v1';
=======
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';
const API_CACHE = 'zion-api-v1';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
=======
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';
>>>>>>> origin/cursor/build-and-fix-errors-fb38

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
  '/offline.html',
  '/css/index.css',
  '/js/index.js',
  '/images/zion-tech-logo.png',
  '/images/zion-tech-hero.jpg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/services',
  '/api/pricing',
  '/api/contact'
=======
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
];

const API_ENDPOINTS = [
  '/api/',
  '/graphql',
  '/rest/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
=======
  '/favicon.ico'
=======
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE_NAME = 'zion-static-v1';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/images/zion-logo.png',
  '/images/placeholder.jpg'
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
];

// Install event - cache static files
self.addEventListener('install', (event) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-fb38
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
<<<<<<< HEAD
        console.log('Opened static cache');
<<<<<<< HEAD
        return cache.addAll(STATIC_ASSETS);
=======
        console.log('Caching static files');
=======
>>>>>>> origin/cursor/build-and-fix-errors-fb38
        return cache.addAll(STATIC_FILES);
>>>>>>> origin/main
      })
      .then(() => {
        console.log('Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
<<<<<<< HEAD
        console.error('Failed to cache static files:', error);
=======
        console.error('Error caching static assets:', error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
        console.error('Error caching static files:', error);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
<<<<<<< HEAD
  event.waitUntil(
=======
<<<<<<< HEAD
  console.log('Service Worker activating...');
  
  event.waitUntil(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
  event.waitUntil(
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
<<<<<<< HEAD
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
=======
<<<<<<< HEAD
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
=======
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
<<<<<<< HEAD
        console.log('Service worker activated');
=======
<<<<<<< HEAD
        console.log('Service Worker activated successfully');
=======
        console.log('Service worker activated');
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        return self.clients.claim();
      })
  );
});

<<<<<<< HEAD
// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

=======
<<<<<<< HEAD
// Fetch event - handle different caching strategies
=======
=======
>>>>>>> origin/cursor/build-and-fix-errors-fb38
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== API_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service worker activated');
      return self.clients.claim();
    })
  );
});

<<<<<<< HEAD
// Fetch event - implement caching strategies
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
=======
// Fetch event - serve from cache or network
>>>>>>> origin/cursor/build-and-fix-errors-fb38
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
=======
// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
<<<<<<< HEAD

  // Skip chrome-extension and other non-http requests
=======
<<<<<<< HEAD
<<<<<<< HEAD
  
  // Handle different types of requests
  if (isStaticAsset(request)) {
    // Static assets: Cache-first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isAPIRequest(request)) {
    // API requests: Network-first with cache fallback
    event.respondWith(networkFirst(request, API_CACHE));
  } else if (isPageRequest(request)) {
    // Page requests: Network-first with cache fallback
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Other requests: Network-first
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
=======

  // Skip chrome-extension and other non-http(s) requests
=======

  // Skip chrome-extension and other non-http requests
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  if (!url.protocol.startsWith('http')) {
    return;
  }

<<<<<<< HEAD
  // Handle different types of requests with appropriate caching strategies
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else if (isHTMLRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
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
    console.error('Cache first strategy failed:', error);
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
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (isHTMLRequest(request)) {
      return caches.match('/offline.html');
    }
    
    return new Response('Offline content not available', { status: 503 });
  }
}

// Helper functions to determine request types
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.startsWith('/graphql');
}

function isHTMLRequest(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith('.html') || 
         url.pathname === '/' || 
         !url.pathname.includes('.');
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
  // API requests - Network first with cache fallback
  if (API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Static assets - Cache first with network fallback
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
    return;
  }

  // HTML pages - Network first with cache fallback
  if (request.destination === 'document') {
    event.respondWith(handleDocumentRequest(request));
    return;
  }

  // Default - Network first with cache fallback
  event.respondWith(handleDefaultRequest(request));
});

<<<<<<< HEAD
// Handle API requests
async function handleApiRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(API_CACHE);
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
      JSON.stringify({ error: 'Network error, please check your connection' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
  }
}

// Handle static assets
async function handleStaticAsset(request) {
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
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return offline response for critical assets
    if (isCriticalAsset(request)) {
      return new Response(
        'Offline - Please check your connection',
        { status: 503, statusText: 'Service Unavailable' }
      );
    }
    
    throw error;
  }
}

// Handle document requests
async function handleDocumentRequest(request) {
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
    
    // Return offline page
    return caches.match('/offline.html');
  }
}

// Handle default requests
async function handleDefaultRequest(request) {
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
    
    throw error;
  }
}

=======
  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

>>>>>>> origin/cursor/build-and-fix-errors-fb38
// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
<<<<<<< HEAD
    request.destination === 'image' ||
    request.destination === 'font' ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  );
}

// Check if asset is critical
function isCriticalAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname === '/' ||
    url.pathname === '/index.html' ||
    url.pathname.includes('main.css') ||
    url.pathname.includes('bundle.js')
  );
}

=======
>>>>>>> origin/main
// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
<<<<<<< HEAD
    // Implement background sync logic here
    // For example, sync offline form submissions
    console.log('Background sync completed');
=======
    // Get offline actions from IndexedDB
    const offlineActions = await getOfflineActions();
    
    for (const action of offlineActions) {
      try {
        await processOfflineAction(action);
        await removeOfflineAction(action.id);
      } catch (error) {
        console.error('Failed to process offline action:', error);
      }
    }
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icons/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-72x72.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
<<<<<<< HEAD
      icon: '/images/zion-logo.png',
      badge: '/images/zion-logo.png',
=======
      icon: '/logo192.png',
      badge: '/logo192.png',
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View',
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
<<<<<<< HEAD

=======
  
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

<<<<<<< HEAD
// Message handling for communication with main thread
self.addEventListener('message', (event) => {
=======
<<<<<<< HEAD
// Helper functions
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname.startsWith('/css/') ||
    url.pathname.startsWith('/js/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/fonts/') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.ttf') ||
    url.pathname.endsWith('.eot')
  );
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
}

function isPageRequest(request) {
  const url = new URL(request.url);
  return (
    url.pathname === '/' ||
    url.pathname === '/micro-saas-services' ||
    url.pathname === '/pricing' ||
    url.pathname.endsWith('.html')
  );
}

// Cache-first strategy for static assets
=======
  // Handle different types of requests with appropriate caching strategies
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else if (isHTMLRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  }
});

// Cache first strategy for static assets
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
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
<<<<<<< HEAD
    console.error('Cache-first strategy failed:', error);
=======
    console.error('Cache first strategy failed:', error);
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    return new Response('Network error', { status: 503 });
  }
}

<<<<<<< HEAD
// Network-first strategy with cache fallback
=======
// Network first strategy for dynamic content
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
<<<<<<< HEAD
    
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
<<<<<<< HEAD
    // Return offline page for page requests
    if (isPageRequest(request)) {
=======
    // Return offline page for HTML requests
    if (isHTMLRequest(request)) {
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      return caches.match('/offline.html');
    }
    
    return new Response('Offline content not available', { status: 503 });
  }
}

<<<<<<< HEAD
// Background sync function
async function doBackgroundSync() {
=======
    url.pathname.startsWith('/static/') ||
    url.pathname.startsWith('/assets/') ||
    url.pathname.includes('.js') ||
    url.pathname.includes('.css') ||
    url.pathname.includes('.png') ||
    url.pathname.includes('.jpg') ||
    url.pathname.includes('.svg') ||
    url.pathname.includes('.ico')
  );
}

// Check if request is for an API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.hostname.includes('api.');
}

// Handle static asset requests
async function handleStaticAsset(request) {
>>>>>>> origin/cursor/build-and-fix-errors-fb38
  try {
    console.log('Performing background sync...');
    
    // Get all clients
    const clients = await self.clients.matchAll();
    
    // Send message to clients about background sync
    clients.forEach((client) => {
      client.postMessage({
        type: 'BACKGROUND_SYNC',
        message: 'Background sync completed'
      });
    });
    
<<<<<<< HEAD
    console.log('Background sync completed successfully');
=======
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Page request failed, trying cache:', error);
    
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page
    return caches.match('/offline.html');
  }
=======
// Helper functions to determine request types
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.startsWith('/graphql');
}

function isHTMLRequest(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith('.html') || 
         url.pathname === '/' || 
         !url.pathname.includes('.');
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

<<<<<<< HEAD
// Handle background sync
async function doBackgroundSync() {
  try {
    // Get pending actions from IndexedDB
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processPendingAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Failed to process pending action:', error);
      }
    }
>>>>>>> origin/cursor/build-and-fix-errors-fb38
=======
async function doBackgroundSync() {
  try {
    // Implement background sync logic here
    // For example, sync offline form submissions
    console.log('Background sync completed');
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
// Message handling from clients
=======
// Helper functions for offline actions (would need IndexedDB implementation)
async function getOfflineActions() {
  // Implementation would use IndexedDB to store/retrieve offline actions
=======
// Get pending actions from IndexedDB
async function getPendingActions() {
  // This would typically interact with IndexedDB
  // For now, return empty array
>>>>>>> origin/cursor/build-and-fix-errors-fb38
  return [];
}

async function processOfflineAction(action) {
  // Implementation would process stored offline actions
  console.log('Processing offline action:', action);
}

async function removeOfflineAction(id) {
  // Implementation would remove processed offline actions
  console.log('Removing offline action:', id);
}

<<<<<<< HEAD
=======
// Make API call
async function makeAPICall(apiData) {
  const response = await fetch(apiData.url, {
    method: apiData.method || 'GET',
    headers: apiData.headers || {},
    body: apiData.body
  });
  
  if (!response.ok) {
    throw new Error('API call failed');
  }
  
  return response.json();
}

// Remove processed action
async function removePendingAction(actionId) {
  // Remove from IndexedDB
  // For now, just log
  console.log('Removed pending action:', actionId);
}

=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
<<<<<<< HEAD
      icon: '/favicon.ico',
      badge: '/favicon.ico',
=======
      icon: '/images/zion-logo.png',
      badge: '/images/zion-logo.png',
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
<<<<<<< HEAD
          title: 'View Details',
          icon: '/favicon.ico'
=======
          title: 'View',
          icon: '/images/zion-logo.png'
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        },
        {
          action: 'close',
          title: 'Close',
<<<<<<< HEAD
          icon: '/favicon.ico'
        }
      ]
    };
    
=======
          icon: '/images/zion-logo.png'
        }
      ]
    };

>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-fb38
// Message handling for communication with main thread
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
self.addEventListener('message', (event) => {
  console.log('Message received from client:', event.data);
  
=======
// Message handling for communication with main thread
self.addEventListener('message', (event) => {
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
<<<<<<< HEAD
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
=======
<<<<<<< HEAD
    event.ports[0].postMessage({
      version: '1.0.0',
      cacheName: CACHE_NAME
    });
  }
<<<<<<< HEAD
=======
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
<<<<<<< HEAD
  console.error('Service worker unhandled rejection:', event.reason);
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
  console.error('Service Worker unhandled rejection:', event.reason);
});

// Performance monitoring
let performanceMetrics = {
  cacheHits: 0,
  cacheMisses: 0,
  networkRequests: 0,
  errors: 0
};

// Update metrics
function updateMetrics(type) {
  switch (type) {
    case 'cacheHit':
      performanceMetrics.cacheHits++;
      break;
    case 'cacheMiss':
      performanceMetrics.cacheMisses++;
      break;
    case 'networkRequest':
      performanceMetrics.networkRequests++;
      break;
    case 'error':
      performanceMetrics.errors++;
      break;
  }
  
  // Store metrics in IndexedDB for analytics
  storeMetrics(performanceMetrics);
}

// Store metrics in IndexedDB
async function storeMetrics(metrics) {
  try {
    const db = await openDB('zion-tech-metrics', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('metrics')) {
          db.createObjectStore('metrics', { keyPath: 'id' });
        }
      }
    });
    
    await db.put('metrics', {
      id: 'performance',
      ...metrics,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Failed to store metrics:', error);
  }
}

// IndexedDB helper
function openDB(name, version, upgradeCallback) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => upgradeCallback(request.result);
  });
}

console.log('Zion Tech Group Service Worker loaded successfully');
=======
  console.error('Service worker unhandled rejection:', event.reason);
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
=======
});
>>>>>>> origin/cursor/build-and-fix-errors-fb38
=======
  console.error('Service worker unhandled rejection:', event.reason);
});
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
