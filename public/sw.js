<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';
=======
// Comprehensive service worker for caching and offline support
const CACHE_NAME = 'zion-tech-group-v2';
>>>>>>> cursor/add-new-services-and-advertise-them-1b6b
const urlsToCache = [
  '/',
  '/services',
  '/contact',
  '/pricing',
<<<<<<< HEAD
  '/favicon.svg',
  '/og-image.svg',
  '/manifest.json'
];

// Install event
=======
  '/about',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/_next/static/',
  '/favicon.ico',
  '/manifest.json'
];

// Install event - cache resources
>>>>>>> cursor/add-new-services-and-advertise-them-1b6b
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
<<<<<<< HEAD
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
=======
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Fetch event - serve from cache when offline
>>>>>>> cursor/add-new-services-and-advertise-them-1b6b
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
<<<<<<< HEAD
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
=======
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // Return offline page if available
          if (event.request.destination === 'document') {
            return caches.match('/offline.html');
          }
        });
      })
  );
});

// Activate event - clean up old caches
>>>>>>> cursor/add-new-services-and-advertise-them-1b6b
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
<<<<<<< HEAD
=======
            console.log('Deleting old cache:', cacheName);
>>>>>>> cursor/add-new-services-and-advertise-them-1b6b
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
<<<<<<< HEAD
=======
  // Ensure the service worker takes control of all clients immediately
  self.clients.claim();
>>>>>>> cursor/add-new-services-and-advertise-them-1b6b
});