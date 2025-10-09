// Service Worker for Zion Tech Group Website
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static files...');
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
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
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
});

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

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Serving from cache:', request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

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
            console.error('Fetch failed:', error);
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            throw error;
          });
      })
  );
});

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/apple-touch-icon.png',
      badge: '/favicon-32x32.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/favicon-16x16.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/favicon-16x16.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Analytics sync function
async function syncAnalytics() {
  try {
    // Get pending analytics data from IndexedDB
    const pendingData = await getPendingAnalytics();
    
    if (pendingData.length > 0) {
      // Send to analytics endpoint
      const response = await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pendingData)
      });

      if (response.ok) {
        // Clear pending data
        await clearPendingAnalytics();
        console.log('Analytics synced successfully');
      }
    }
  } catch (error) {
    console.error('Analytics sync failed:', error);
  }
}

// Helper functions for IndexedDB
async function getPendingAnalytics() {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionAnalytics', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['analytics'], 'readonly');
      const store = transaction.objectStore('analytics');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result || []);
      };
      
      getAllRequest.onerror = () => {
        resolve([]);
      };
    };
    
    request.onerror = () => {
      resolve([]);
    };
  });
}

async function clearPendingAnalytics() {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionAnalytics', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['analytics'], 'readwrite');
      const store = transaction.objectStore('analytics');
      const clearRequest = store.clear();
      
      clearRequest.onsuccess = () => {
        resolve();
      };
      
      clearRequest.onerror = () => {
        resolve();
      };
    };
    
    request.onerror = () => {
      resolve();
    };
  });
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Store performance metrics in IndexedDB
    storePerformanceMetrics(event.data.metrics);
  }
});

async function storePerformanceMetrics(metrics) {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionPerformance', 1);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('performance')) {
        db.createObjectStore('performance', { keyPath: 'id', autoIncrement: true });
      }
    };
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['performance'], 'readwrite');
      const store = transaction.objectStore('performance');
      
      const performanceData = {
        ...metrics,
        timestamp: Date.now()
      };
      
      store.add(performanceData);
      resolve();
    };
    
    request.onerror = () => {
      resolve();
    };
  });
}

console.log('Zion Tech Group Service Worker loaded successfully');