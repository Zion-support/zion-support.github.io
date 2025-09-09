const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
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
      })
  );
  self.skipWaiting();
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
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip non-HTTP(S) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(serveStaticAsset(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(serveAPIRequest(request));
  } else {
    event.respondWith(servePage(request));
  }
});

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

// Check if request is for an API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.startsWith('/graphql');
}

// Serve static assets from cache first, then network
async function serveStaticAsset(request) {
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
    console.error('Error serving static asset:', error);
    return new Response('Static asset not available', { status: 404 });
  }
}

// Serve API requests from network first, then cache
async function serveAPIRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error serving API request:', error);
    
    // Try to serve from cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('API not available', { status: 503 });
  }
}

// Serve pages from cache first, then network
async function servePage(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      // Update cache in background
      fetch(request)
        .then((response) => {
          if (response.ok) {
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, response));
          }
        })
        .catch(() => {
          // Ignore background update errors
        });
      
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error serving page:', error);
    
    // Return offline page if available
    const offlineResponse = await caches.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    
    return new Response('Page not available offline', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Get pending actions from IndexedDB
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Error processing background action:', error);
      }
    }
  } catch (error) {
    console.error('Error in background sync:', error);
  }
}

// Store form data when offline
async function storeFormData(formData) {
  try {
    const db = await openDB();
    const tx = db.transaction('forms', 'readwrite');
    const store = tx.objectStore('forms');
    await store.add({
      id: Date.now().toString(),
      data: formData,
      timestamp: Date.now()
    });
    await tx.complete;
  } catch (error) {
    console.error('Error storing form data:', error);
  }
}

// Get stored form data
async function getStoredFormData() {
  try {
    const db = await openDB();
    const tx = db.transaction('forms', 'readonly');
    const store = tx.objectStore('forms');
    return await store.getAll();
  } catch (error) {
    console.error('Error getting stored form data:', error);
    return [];
  }
}

// Remove stored form data
async function removeStoredFormData(id) {
  try {
    const db = await openDB();
    const tx = db.transaction('forms', 'readwrite');
    const store = tx.objectStore('forms');
    await store.delete(id);
    await tx.complete;
  } catch (error) {
    console.error('Error removing stored form data:', error);
  }
}

// Open IndexedDB
async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('forms')) {
        db.createObjectStore('forms', { keyPath: 'id' });
      }
    };
  });
}

// Submit form data to server
async function submitFormData(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData.data)
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New notification from Zion Tech Group',
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
        title: 'View',
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
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions for IndexedDB operations
async function getPendingActions() {
  // Implementation would depend on your IndexedDB setup
  return [];
}

async function processAction(action) {
  // Implementation would depend on your action types
  return Promise.resolve();
}

async function removePendingAction(id) {
  // Implementation would depend on your IndexedDB setup
  return Promise.resolve();
}

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'STORE_FORM_DATA') {
    storeFormData(event.data.formData);
  }
});

console.log('Service Worker: Loaded successfully');