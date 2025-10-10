// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE_NAME = 'zion-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/critical.css',
  '/js/critical.js',
  '/images/logo.svg',
  '/images/hero-bg.webp',
  '/favicon.ico',
  '/site.webmanifest'
];

// API endpoints to cache
const API_CACHE_PATTERNS = [
  /^\/api\//,
  /^\/data\//
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install event');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
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
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate event');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
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
    handleRequest(request)
  );
});

// Handle different types of requests
async function handleRequest(request) {
  const url = new URL(request.url);

  // Static assets - cache first
  if (isStaticAsset(url)) {
    return cacheFirst(request, STATIC_CACHE_NAME);
  }

  // API requests - network first with cache fallback
  if (isApiRequest(url)) {
    return networkFirst(request, DYNAMIC_CACHE_NAME);
  }

  // HTML pages - network first with cache fallback
  if (isHtmlRequest(request)) {
    return networkFirst(request, DYNAMIC_CACHE_NAME);
  }

  // Images - cache first with network fallback
  if (isImageRequest(request)) {
    return cacheFirst(request, DYNAMIC_CACHE_NAME);
  }

  // Default - network first
  return networkFirst(request, DYNAMIC_CACHE_NAME);
}

// Cache first strategy
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Helper functions
function isStaticAsset(url) {
  return STATIC_ASSETS.some(asset => url.pathname === asset) ||
         url.pathname.startsWith('/static/') ||
         url.pathname.startsWith('/assets/');
}

function isApiRequest(url) {
  return API_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname));
}

function isHtmlRequest(request) {
  return request.headers.get('accept')?.includes('text/html');
}

function isImageRequest(request) {
  return request.destination === 'image' ||
         request.url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push event', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update from Zion Tech Group',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Learn More',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/xmark.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification click', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/ai-services')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Sync contact form data when back online
async function syncContactForm() {
  try {
    // Get stored form data from IndexedDB
    const formData = await getStoredFormData();
    
    if (formData && formData.length > 0) {
      for (const data of formData) {
        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          
          // Remove successfully synced data
          await removeStoredFormData(data.id);
        } catch (error) {
          console.error('Failed to sync form data:', error);
        }
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// IndexedDB helpers (simplified)
async function getStoredFormData() {
  // Implementation would use IndexedDB
  return [];
}

async function removeStoredFormData(id) {
  // Implementation would use IndexedDB
  return;
}