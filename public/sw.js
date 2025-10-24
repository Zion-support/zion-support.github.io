<<<<<<< HEAD

// Service Worker for Zion Tech Group Website
const CACHE_NAME = 'zion-tech-group-v1'
const urlsToCache = [
  '/'
  '/about'
  '/contact'
  '/services'
  '/ai-services'
  '/consultation'
  '/static/js/bundle.js'
  '/static/css/main.css',
    '/manifest.json'
  ]
// Install event - cache resources
=======
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event
>>>>>>> origin/app-improvements-20251015-174030
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
<<<<<<< HEAD
        return cache.addAll(urlsToCache)
      })
  )
})
// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})
// Activate event - clean up old caches
=======
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        // Handle cache installation errors silently
        console.error('Cache installation failed:', error);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
>>>>>>> origin/app-improvements-20251015-174030
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
<<<<<<< HEAD
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
=======
            return caches.delete(cacheName);
          }
        })
      );
    })
    .catch((error) => {
      // Handle cache activation errors silently
      console.error('Cache activation failed:', error);
    })
  );
});

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(
      // Send queued analytics data
      sendQueuedAnalytics()
    );
  }
});

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Helper function to send queued analytics
async function sendQueuedAnalytics() {
  try {
    // Implementation would depend on your analytics service
    console.log('Sending queued analytics data...');
  } catch (error) {
    console.error('Failed to send analytics data:', error);
  }
}
>>>>>>> origin/app-improvements-20251015-174030
