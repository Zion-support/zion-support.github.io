const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE_NAME = 'zion-tech-group-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v1.0.0';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/solutions',
  '/careers',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Add more static assets as needed
];

// Dynamic assets patterns
const DYNAMIC_PATTERNS = [
  /^\/api\//,
  /^\/services\//,
  /^\/solutions\//,
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
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
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
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

  // Handle different types of requests
  if (isStaticAsset(request.url)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isDynamicAsset(request.url)) {
    event.respondWith(handleDynamicAsset(request));
  } else {
    event.respondWith(handleNavigation(request));
  }
});

// Check if request is for a static asset
function isStaticAsset(url) {
  return STATIC_ASSETS.some(asset => url.includes(asset)) ||
         url.includes('/_next/static/') ||
         url.includes('/icons/') ||
         url.includes('/images/') ||
         url.includes('/css/') ||
         url.includes('/js/');
}

// Check if request is for a dynamic asset
function isDynamicAsset(url) {
  return DYNAMIC_PATTERNS.some(pattern => pattern.test(url));
}

// Handle static assets - cache first strategy
async function handleStaticAsset(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Error handling static asset', error);
    return new Response('Offline - Static asset not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Handle dynamic assets - network first strategy
async function handleDynamicAsset(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache for dynamic asset');
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline - Dynamic content not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Handle navigation requests - network first with fallback
async function handleNavigation(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache for navigation');
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to index.html for SPA routing
    const fallbackResponse = await caches.match('/');
    if (fallbackResponse) {
      return fallbackResponse;
    }
    
    return new Response('Offline - Page not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
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
          await removePendingSubmission(submission.id);
          console.log('Service Worker: Contact form synced successfully');
        }
      } catch (error) {
        console.error('Service Worker: Failed to sync contact form', error);
      }
    }
  } catch (error) {
    console.error('Service Worker: Error in background sync', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Details',
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
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
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

// Helper functions for IndexedDB operations
async function getPendingSubmissions() {
  // Implementation would depend on your IndexedDB setup
  return [];
}

async function removePendingSubmission(id) {
  // Implementation would depend on your IndexedDB setup
  return;
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Send performance metrics to analytics
    console.log('Service Worker: Received performance metrics', event.data.metrics);
  }
});

console.log('Service Worker: Script loaded successfully');