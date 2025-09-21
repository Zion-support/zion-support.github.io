// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1.0.0';
const STATIC_CACHE_NAME = 'zion-static-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  '/og-image.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external requests
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Return offline fallback if available
            if (request.destination === 'document') {
              return caches.match('/offline.html');
            }
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

async function syncAnalytics() {
  // Sync pending analytics data when back online
  try {
    const pendingData = await getStoredAnalytics();
    if (pendingData.length > 0) {
      await sendAnalytics(pendingData);
      await clearStoredAnalytics();
    }
  } catch (error) {
    console.log('Analytics sync failed:', error);
  }
}

async function getStoredAnalytics() {
  // Get analytics data from IndexedDB
  return [];
}

async function sendAnalytics(data) {
  // Send analytics data to server
  return fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(data)
  })}

async function clearStoredAnalytics() {
  // Clear sent analytics data
  return true;
}