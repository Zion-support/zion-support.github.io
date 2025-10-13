<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

=======
const STATIC_CACHE_NAME = 'zion-tech-group-v2';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v2';
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-845e
=======
const CACHE_NAME = 'zion-tech-group-v2';
const STATIC_CACHE_NAME = 'zion-tech-group-static-v2';
const DYNAMIC_CACHE_NAME = 'zion-tech-group-dynamic-v2';
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-9064
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/manifest.json',
<<<<<<< HEAD
<<<<<<< HEAD
  '/favicon.svg'
=======
  '/favicon.svg',
  '/robots.txt'
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-845e
=======
  '/favicon.svg',
  '/robots.txt'
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-9064
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
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
  '/manifest.json'
];

// Install event
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service worker install failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

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
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/');
            }
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle form submission sync
      handleFormSync()
    );
  }
});

// Handle message channel errors
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

<<<<<<< HEAD

async function handleFormSync() {
  try {
    // Get pending form data from IndexedDB
    const pendingForms = await getPendingForms();
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.data)
        });

        if (response.ok) {
          // Remove from pending forms
          await removePendingForm(form.id);
        }
      } catch (error) {
        console.error('Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.error('Form sync failed:', error);
=======
console.log('Service Worker loaded successfully');
  );
});

// Fetch event
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
  }
}
<<<<<<< HEAD

// Helper functions for IndexedDB
async function getPendingForms() {
  // Implementation would go here
  return [];
}

async function removePendingForm(id) {
  // Implementation would go here
}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
