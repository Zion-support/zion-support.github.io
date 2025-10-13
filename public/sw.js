const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE_NAME = 'zion-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/assets/index-Dq8n7JAm.css',
  '/assets/index-DApGEc-z.js',
  '/assets/react-vendor-sX78JqvJ.js',
  '/assets/pages-4g43vfXl.js',
  '/manifest.json',
  '/favicon.ico'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
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
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
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
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response for caching
            const responseToCache = response.clone();

            // Cache dynamic content
            caches.open(DYNAMIC_CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
                console.log('Cached dynamic content:', request.url);
              });

            return response;
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline.html') || new Response(
                '<html><body><h1>Offline</h1><p>Please check your internet connection.</p></body></html>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            }
            
            throw error;
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
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
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to sync contact form data
async function syncContactForm() {
  try {
    // Get stored form data from IndexedDB
    const formData = await getStoredFormData();
    
    if (formData) {
      // Send form data to server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Contact form synced successfully');
        // Clear stored form data
        await clearStoredFormData();
      }
    }
  } catch (error) {
    console.error('Failed to sync contact form:', error);
  }
}

// Helper function to get stored form data from IndexedDB
async function getStoredFormData() {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['formData'], 'readonly');
      const store = transaction.objectStore('formData');
      const getRequest = store.get('contactForm');
      
      getRequest.onsuccess = () => {
        resolve(getRequest.result);
      };
    };
    
    request.onerror = () => {
      resolve(null);
    };
  });
}

// Helper function to clear stored form data
async function clearStoredFormData() {
  return new Promise((resolve) => {
    const request = indexedDB.open('ZionTechGroupDB', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['formData'], 'readwrite');
      const store = transaction.objectStore('formData');
      store.delete('contactForm');
      
      transaction.oncomplete = () => {
        resolve(true);
      };
    };
    
    request.onerror = () => {
      resolve(false);
    };
  });
}

// Cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    const urlsToCache = event.data.urls;
    event.waitUntil(
      caches.open(DYNAMIC_CACHE_NAME)
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  }
});

console.log('Service Worker loaded successfully');