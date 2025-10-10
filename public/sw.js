const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Static assets to cache;
const STATIC_ASSETS = [
  '/',
  '/css/critical.css',
  '/manifest.json',
  '/assets/index-CZCxnxi7.css',
  '/assets/index-D5QfCfme.js',
  '/assets/vendor-DDcd4RNL.js'
];

// Install event - cache resources;
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  // Add critical CSS and JS files;
];

// Dynamic assets patterns;
const DYNAMIC_PATTERNS = [
  /^\/api\//,
  /^\/images\//,
  /^\/fonts\//,
  /\.(?:png|jpg|jpeg|svg|gif|webp|woff2?|ttf|eot)$/
];

// Install event - cache static assets
// Install event - cache static assets;
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(urlsToCache);
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
// Install event - cache static assets;
self.addEventListener('install', (event) => {/* TODO: Fix JSX expression */}
      })
      .then(() => {/* TODO: Fix JSX expression */}
      })
      .catch((error) => {
        })
  );
});

// Fetch event - serve from cache when offline;
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network;
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all()
          cacheNames.map((cacheName) => {,
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {,
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {/* TODO: Fix JSX expression */}
            })
            .map((cacheName) => {/* TODO: Fix JSX expression */}
            })
        );
      })
      .then(() => {/* TODO: Fix JSX expression */}
      })
  );
});

// Fetch event - serve from cache or network;
self.addEventListener('fetch', (event) => {
self.addEventListener('fetch', (event) => {/* TODO: Fix JSX expression */}
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests;
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests;
  if (!url.protocol.startsWith('http')) {
    return;
  if (request.method !== 'GET') {/* TODO: Fix JSX expression */}
  }

  // Skip chrome-extension and other non-http requests;
  if (!url.protocol.startsWith('http')) {/* TODO: Fix JSX expression */}
  }

  event.respondWith()
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available;
        if (cachedResponse) {
          return cachedResponse;
        }

        // Check if it's a dynamic asset;
        const isDynamicAsset = DYNAMIC_PATTERNS.some(pattern => pattern.test(url.pathname));
        
        if (isDynamicAsset) {
          // For dynamic assets, try network first, then cache;
          return fetch(request)
            .then((response) => {
              // Clone the response before caching;
              const responseToCache = response.clone();
              
              // Cache successful responses;
              if (response.status === 200) {
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseToCache);
                  });
              }
              
              return response;
            })
            .catch(() => {
              // If network fails, try to serve from cache;
              return caches.match(request);
            });
        } else {
          // For static assets, try network first;
          return fetch(request)
            .then((response) => {
              // Clone the response before caching;
              const responseToCache = response.clone();
              
              // Cache successful responses;
              if (response.status === 200) {
                caches.open(STATIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseToCache);
                  });
              }
              
              return response;
            })
            .catch(() => {
              // If network fails and it's a navigation request, serve index.html;
              if (request.mode === 'navigate') {
                return caches.match('/index.html');
              }
              
              // For other requests, return a custom offline page;
              return new Response(JSON.stringify({)
                  error: 'Offline'),
                  message: 'This resource is not available offline'}),
                {
                  status: 503;
                  statusText: 'Service Unavailable',
                  headers: {,
                    'Content-Type': 'application/json'}
                }
              );
            });
        }
      .then((cachedResponse) => {/* TODO: Fix JSX expression */}
        }

        // Otherwise fetch from network;
        return fetch(request)
          .then((response) => {/* TODO: Fix JSX expression */}
            }

            // Clone the response;
            const responseToCache = response.clone();

            // Cache dynamic content;
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {/* TODO: Fix JSX expression */}
              });

            return response;
          })
          .catch(() => {/* TODO: Fix JSX expression */}
            }
          });
      })
  );
});

// Background sync for offline actions;
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(// Handle background sync tasks;)
      handleBackgroundSync()
    );
// Background sync for offline form submissions;
self.addEventListener('sync', (event) => {/* TODO: Fix JSX expression */}
  }
});

// Push notifications;
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icon-192 x192.png',
    badge: '/badge-72 x72.png',
    vibrate: [100, 50, 100],
    data: {,
      dateOfArrival: Date.now(),
      primaryKey: 1;,
    },
    actions: [,
      {,
        action: 'explore',
        title: 'Explore',
        icon: '/icon-192x192.png'},
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png',
self.addEventListener('push', (event) => {/* TODO: Fix JSX expression */}
    },
    action,
  s: [
      {/* TODO: Fix JSX expression */}
      },
      {/* TODO: Fix JSX expression */}
      }
    ]
  };

  event.waitUntil()
    self.registration.showNotification('Zion Tech Group', options)
  );
});

// Notification click handler;
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil()
      clients.openWindow('/'));
  }
});

// Helper function for background sync;
async function handleBackgroundSync() {
  try {
    // Get pending offline actions from IndexedDB;
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processOfflineAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        }
    }
  } catch (error) {
    }
}

// Helper function to get pending actions (mock implementation)
async function getPendingActions() {
  // In a real implementation, this would read from IndexedDB;
  return [];
}

// Helper function to process offline action (mock implementation)
async function processOfflineAction(action) {
  // In a real implementation, this would process the action;
  }

// Helper function to remove pending action (mock implementation)
async function removePendingAction(actionId) {
  // In a real implementation, this would remove from IndexedDB;
  }

// Performance monitoring;
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // In a real implementation, send metrics to analytics;
    // analytics.track('performance_metrics', event.data.metrics);
  }
});

,
// Handle notification clicks;
self.addEventListener('notificationclick', (event) => {/* TODO: Fix JSX expression */}
  }
});

// Helper function for offline form submissions;
async function handleOfflineSubmissions() {/* TODO: Fix JSX expression */}
}
  // Implementation for handling offline form submissions;
  // This would typically involve storing form data in IndexedDB;
  // and syncing when back online;
  }
