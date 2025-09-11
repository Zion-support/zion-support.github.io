const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
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
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
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

// Remove stored request
async function removeStoredRequest(id) {
  const requests = await getStoredRequests();
  const filtered = requests.filter(req => req.id !== id);
  localStorage.setItem('offline-requests', JSON.stringify(filtered));
}