<<<<<<< HEAD
// Fetch event - serve from cache when offline"'"
self.addEventListener('fetch", (event) => {
=======
const CACHE_NAME = 'zion-tech-group-v1';
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  // Add other static assets as needed
];

// Install event - cache static files
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
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
});

>>>>>>> cursor/delete-records-30ea
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
// Service Worker for Zion Tech Group;
const CACHE_NAME = 'zion-tech-group-v1'
const STATIC_CACHE = 'zion-static-v1'
const DYNAMIC_CACHE = 'zion-dynamic-v1'

// Assets to cache immediately;
const STATIC_ASSETS = ['/',
  '/about',
  '/contact',
  '/pricing',
  '/manifest.json',
  '/robots.txt']

// Install event - cache static assets;
  console.log('Service Worker installing...')

  event.waitUntil(
    caches.open(STATIC_CACHE)
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
        console.log('Static assets cached successfully')
        return self.skipWaiting()
      })
        console.error('Failed to cache static assets: ', error)
      })
  )
})

// Activate event - clean up old caches;
  console.log('Service Worker activating...')

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {console.log('Deleting old cache: ', cacheName)
              return caches.delete(cacheName)})
        )
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network;
  const {request} = event;
  const url = new URL(request.url)

  // Skip non-GET requests;
  if (request.method !== 'GET') {return;
  // Skip chrome-extension and other non-http requests;
  if (!url.protocol.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request)
        // Return cached version if available;
        if (cachedResponse) {
          console.log('Serving from cache: ', request.url)
          return cachedResponse;
        // Otherwise fetch from network;
        return fetch(request)
            // Don't cache non-successful responses;
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            // Clone the response;
            const responseToCache = response.clone()

            // Cache dynamic content;
            caches.open(DYNAMIC_CACHE)
                cache.put(request, responseToCache)})
                console.error('Failed to cache dynamic content: ', error)
              })

            return response;
          })
<<<<<<< HEAD
            console.error('Fetch failed: ', error)

            // Return offline page for navigation requests;
            if (request.destination === 'document') {return caches.match('/offline.html')

            throw error;})
=======
          .catch((error) => {
            console.error('Fetch failed:', error);
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            // Return a generic error response for other requests
            return new Response('Network error', {
              status: 408,
              statusText: 'Request Timeout',
            });
          });
>>>>>>> cursor/delete-records-30ea
      })
  )
})

// Background sync for form submissions;
  if (event.tag === 'contact-form') {event.waitUntil(
      // Handle form submission sync;
      console.log('Syncing contact form submission')
    )})

// Push notifications;
  if (event.data) {const data = event.data.json()

    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
<<<<<<< HEAD
        primaryKey: data.primaryKey;},
      actions: [action: 'explore',
          title: 'Learn More',
          icon: '/icon-192x192.png'
=======
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/icon-192x192.png',
>>>>>>> cursor/delete-records-30ea
        },
          action: 'close',
          title: 'Close',
<<<<<<< HEAD
          icon: '/icon-192x192.png']

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
})
//Activate event - clean up old caches self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((cacheName) => {
=======
          icon: '/icon-192x192.png',
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to handle offline form submissions
async function handleOfflineFormSubmissions() {
  try {
    // Get stored form data from IndexedDB
    const formData = await getStoredFormData();
    
    if (formData && formData.length > 0) {
      // Process each stored form submission
      for (const data of formData) {
        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          
          // Remove successfully submitted data
          await removeStoredFormData(data.id);
        } catch (error) {
          console.error('Failed to submit form data:', error);
        }
      }
    }
  } catch (error) {
    console.error('Error handling offline form submissions:', error);
  }
}

// Helper functions for IndexedDB operations
async function getStoredFormData() {
  // Implementation would depend on your IndexedDB setup
  return [];
}

async function removeStoredFormData(id) {
  // Implementation would depend on your IndexedDB setup
  return;
}

// Message handler for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('Service Worker loaded successfully');
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})
// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
>>>>>>> cursor/delete-records-30ea
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName)
            return caches.delete(cacheName)
          }
        })
      );
    })
  );
<<<<<<< HEAD
});"

}}'"
// Install event - cache resources;
self.addEventListener('install', (event) => {;
  event.waitUntil(;
    caches.open(CACHE_NAME);
      .then((cache) => {;
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      });
  )});
;
// Fetch event - serve from cache when offline;
self.addEventListener('fetch', (event) => {;
  event.respondWith(;
    caches.match(event.request);
      .then((response) => {;
        // Return cached version or fetch from network;
        return response || fetch(event.request)});
  )});
;
// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {;
  event.waitUntil(;
    caches.keys().then((cacheNames) => {;
      return Promise.all(;
        cacheNames.map((cacheName) => {;
          if (cacheName !== CACHE_NAME) {;
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName)}
        });
      )});
  )});
  )
})
}}}}}))))))
  event.notification.close()

  if (event.action === 'explore') {event.waitUntil(
      clients.openWindow('/')
    )})
=======
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions
  console.log('Syncing contact form data');
}
>>>>>>> cursor/delete-records-30ea
