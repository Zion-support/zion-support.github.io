<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE_NAME = 'zion-static-v1';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1';

// Static assets to cache
=======
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Assets to cache immediately
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
<<<<<<< HEAD
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
=======
  '/images/logo.png',
  '/images/hero-bg.jpg',
  '/fonts/inter-var.woff2'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
<<<<<<< HEAD
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
=======
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
<<<<<<< HEAD
  console.log('Service Worker activating...');
=======
  console.log('Service Worker: Activating...');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
<<<<<<< HEAD
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
=======
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
<<<<<<< HEAD
        console.log('Service Worker activated');
=======
        console.log('Service Worker: Activated');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
<<<<<<< HEAD
  
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
<<<<<<< HEAD
          console.log('Serving from cache:', request.url);
          return cachedResponse;
        }
        
=======
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
<<<<<<< HEAD
            
            // Clone the response
            const responseToCache = response.clone();
            
            // Determine which cache to use
            const cacheName = isStaticAsset(request.url) ? STATIC_CACHE_NAME : DYNAMIC_CACHE_NAME;
            
            // Cache the response
            caches.open(cacheName)
              .then((cache) => {
                cache.put(request, responseToCache);
                console.log('Cached response:', request.url);
              });
            
            return response;
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
            
            // Return offline page for navigation requests
            if (request.destination === 'document') {
=======

            // Clone the response
            const responseToCache = response.clone();

            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('Service Worker: Fetch failed', error);
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
              return caches.match('/offline.html');
            }
            
            throw error;
          });
      })
  );
});

<<<<<<< HEAD
// Helper function to determine if an asset is static
function isStaticAsset(url) {
  const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
  const staticPaths = ['/static/', '/assets/', '/images/', '/fonts/'];
  
  return staticExtensions.some(ext => url.includes(ext)) || 
         staticPaths.some(path => url.includes(path));
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
=======
// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
    event.waitUntil(doBackgroundSync());
  }
});

<<<<<<< HEAD
async function doBackgroundSync() {
  // Handle offline form submissions, analytics, etc.
  console.log('Performing background sync...');
}

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Push message received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update available',
    icon: '/android-chrome-192x192.png',
    badge: '/android-chrome-192x192.png',
=======
// Push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update from Zion Tech Group',
    icon: '/images/logo.png',
    badge: '/images/badge.png',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
<<<<<<< HEAD
        icon: '/android-chrome-192x192.png'
=======
        icon: '/images/explore.png'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
      },
      {
        action: 'close',
        title: 'Close',
<<<<<<< HEAD
        icon: '/android-chrome-192x192.png'
      }
    ]
  };
  
=======
        icon: '/images/close.png'
      }
    ]
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

<<<<<<< HEAD
// Notification click
self.addEventListener('notificationclick', (event) => {
  console.log('Notification click received');
  
  event.notification.close();
  
=======
// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
<<<<<<< HEAD
  }
});
=======
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for background sync
async function doBackgroundSync() {
  try {
    // Get pending form submissions from IndexedDB
    const pendingSubmissions = await getPendingSubmissions();
    
    for (const submission of pendingSubmissions) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission.data)
        });

        if (response.ok) {
          // Remove from pending submissions
          await removePendingSubmission(submission.id);
          console.log('Service Worker: Background sync successful', submission.id);
        }
      } catch (error) {
        console.error('Service Worker: Background sync failed', error);
      }
    }
  } catch (error) {
    console.error('Service Worker: Background sync error', error);
  }
}

// IndexedDB helper functions
async function getPendingSubmissions() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['pendingSubmissions'], 'readonly');
      const store = transaction.objectStore('pendingSubmissions');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => resolve(getAllRequest.result);
      getAllRequest.onerror = () => reject(getAllRequest.error);
    };
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('pendingSubmissions')) {
        db.createObjectStore('pendingSubmissions', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

async function removePendingSubmission(id) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['pendingSubmissions'], 'readwrite');
      const store = transaction.objectStore('pendingSubmissions');
      const deleteRequest = store.delete(id);
      
      deleteRequest.onsuccess = () => resolve();
      deleteRequest.onerror = () => reject(deleteRequest.error);
    };
  });
}

// Cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

console.log('Service Worker: Loaded');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
