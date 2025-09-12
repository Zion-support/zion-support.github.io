const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
<<<<<<< HEAD
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
=======
  '/index.html',
  '/manifest.json',
=======
  '/favicon.ico',
  '/images/zion-logo.png',
  '/images/placeholder.jpg'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
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
      })
>>>>>>> cursor/create-and-deploy-new-content-d63f
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
<<<<<<< HEAD
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
=======
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service worker activated');
        return self.clients.claim();
      })
>>>>>>> cursor/create-and-deploy-new-content-d63f
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions
  const requests = await getStoredRequests();
  for (const request of requests) {
    try {
      await fetch(request.url, request.options);
      await removeStoredRequest(request.id);
    } catch (error) {
      console.error('Background sync failed:', error);
    }
  }
}

// Store requests for later sync
async function storeRequest(url, options) {
  const request = {
    id: Date.now(),
    url,
    options,
    timestamp: new Date().toISOString()
  };
  
  const requests = await getStoredRequests();
  requests.push(request);
  localStorage.setItem('offline-requests', JSON.stringify(requests));
}

// Get stored requests
async function getStoredRequests() {
  const stored = localStorage.getItem('offline-requests');
  return stored ? JSON.parse(stored) : [];
}

<<<<<<< HEAD
// Remove stored request
async function removeStoredRequest(id) {
  const requests = await getStoredRequests();
  const filtered = requests.filter(req => req.id !== id);
  localStorage.setItem('offline-requests', JSON.stringify(filtered));
}
=======
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service worker unhandled rejection:', event.reason);
});
>>>>>>> cursor/create-and-deploy-new-content-d63f
