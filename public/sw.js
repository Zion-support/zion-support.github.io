// Service Worker for Zion Tech Group
// Advanced caching strategy for optimal performance

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/assets/index.css',
  '/assets/index.js',
  '/manifest.json'
];

// Resources to cache on demand
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  /\.(?:css|js)$/,
  /\.(?:woff|woff2|ttf|eot)$/
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
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

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }
        
        // Otherwise, fetch from network
        return fetch(request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Clone the response
            const responseToCache = networkResponse.clone();
            
            // Determine which cache to use
            const cacheName = shouldCacheInStatic(request) ? STATIC_CACHE : DYNAMIC_CACHE;
            
            // Cache the response
            caches.open(cacheName)
              .then((cache) => {
                cache.put(request, responseToCache);
                console.log('Service Worker: Cached new resource', request.url);
              });
            
            return networkResponse;
          })
          .catch((error) => {
            console.error('Service Worker: Fetch failed', error);
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            
            // Return a fallback response for other requests
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Helper function to determine if resource should be cached in static cache
function shouldCacheInStatic(request) {
  const url = new URL(request.url);
  
  // Cache static assets in static cache
  return CACHE_PATTERNS.some(pattern => pattern.test(url.pathname)) ||
         url.pathname === '/' ||
         url.pathname.endsWith('.html');
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Sync contact form submissions when back online
async function syncContactForm() {
  try {
    const formData = await getStoredFormData();
    if (formData) {
      await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });
      await clearStoredFormData();
      console.log('Service Worker: Contact form synced');
    }
  } catch (error) {
    console.error('Service Worker: Form sync failed', error);
  }
}

// Store form data for later sync
function storeFormData(formData) {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('formData')) {
        db.createObjectStore('formData', { keyPath: 'id', autoIncrement: true });
      }
    };
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['formData'], 'readwrite');
      const store = transaction.objectStore('formData');
      store.add({ data: formData, timestamp: Date.now() });
      resolve();
    };
  });
}

// Get stored form data
function getStoredFormData() {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['formData'], 'readonly');
      const store = transaction.objectStore('formData');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => {
        const results = getAllRequest.result;
        resolve(results.length > 0 ? results[0].data : null);
      };
    };
  });
}

// Clear stored form data
function clearStoredFormData() {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['formData'], 'readwrite');
      const store = transaction.objectStore('formData');
      store.clear();
      resolve();
    };
  });
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Zion Tech Group',
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
        title: 'Learn More',
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
    self.registration.showNotification('Zion Tech Group', options)
  );
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

console.log('Service Worker: Loaded successfully');