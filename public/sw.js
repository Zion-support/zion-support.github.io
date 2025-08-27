// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo.png',
  '/css/critical.css',
  '/fonts/inter-var.woff2',
  '/fonts/roboto-var.woff2'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Static files cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Failed to cache static files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
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

// Fetch event - serve from cache when possible
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
  if (isStaticAsset(request)) {
    // Static assets - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isAPIRequest(request)) {
    // API requests - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else if (isHTMLRequest(request)) {
    // HTML requests - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Default - cache first strategy
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
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
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (isHTMLRequest(request)) {
      return caches.match('/offline.html');
    }
    
    return new Response('Network error', { status: 503 });
  }
}

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/);
}

// Check if request is for an API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.startsWith('/graphql');
}

// Check if request is for HTML
function isHTMLRequest(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith('.html') || url.pathname === '/' || !url.pathname.includes('.');
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Background sync implementation
async function doBackgroundSync() {
  try {
    // Get stored offline actions
    const offlineActions = await getOfflineActions();
    
    for (const action of offlineActions) {
      try {
        await processOfflineAction(action);
        await removeOfflineAction(action.id);
      } catch (error) {
        console.error('Failed to process offline action:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Get stored offline actions
async function getOfflineActions() {
  try {
    const db = await openIndexedDB();
    const transaction = db.transaction(['offlineActions'], 'readonly');
    const store = transaction.objectStore('offlineActions');
    return await store.getAll();
  } catch (error) {
    console.error('Failed to get offline actions:', error);
    return [];
  }
}

// Process offline action
async function processOfflineAction(action) {
  const { method, url, body, headers } = action;
  
  const requestInit = {
    method,
    headers: new Headers(headers),
    body: body ? JSON.parse(body) : undefined
  };
  
  const response = await fetch(url, requestInit);
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response;
}

// Remove processed offline action
async function removeOfflineAction(id) {
  try {
    const db = await openIndexedDB();
    const transaction = db.transaction(['offlineActions'], 'readwrite');
    const store = transaction.objectStore('offlineActions');
    await store.delete(id);
  } catch (error) {
    console.error('Failed to remove offline action:', error);
  }
}

// Open IndexedDB
function openIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Create offline actions store
      if (!db.objectStoreNames.contains('offlineActions')) {
        const store = db.createObjectStore('offlineActions', { keyPath: 'id', autoIncrement: true });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo.png',
      badge: '/badge.png',
      vibrate: [100, 50, 100],
      data: {
        url: data.url
      },
      actions: [
        {
          action: 'view',
          title: 'View',
          icon: '/view-icon.png'
        },
        {
          action: 'dismiss',
          title: 'Dismiss',
          icon: '/dismiss-icon.png'
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
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

// Message handling from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then(cache => {
          return cache.addAll(event.data.urls);
        })
    );
  }
});

// Periodic background sync (if supported)
if ('periodicSync' in self.registration) {
  self.addEventListener('periodicsync', (event) => {
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
        // Update cached content
        const cache = await caches.open(DYNAMIC_CACHE);
        for (const url of updates.urls) {
          try {
            const response = await fetch(url);
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (error) {
            console.error('Failed to update cached content:', error);
          }
        }
        
        // Show notification
        await self.registration.showNotification('Content Updated', {
          body: 'New content is available',
          icon: '/logo.png'
        });
      }
    }
  } catch (error) {
    console.error('Periodic content update failed:', error);
  }
}

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

console.log('Zion Tech Group Service Worker loaded successfully');
