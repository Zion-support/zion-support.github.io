const CACHE_NAME = 'zion-tech-group-v1.0.0'
const STATIC_CACHE = 'zion-static-v1.0.0'
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0'

const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/ai-services',
  '/it-services',
  '/cloud-infrastructure',
  '/5g-solutions',
  '/digital-transformation',
  '/micro-saas-solutions',
  '/team',
  '/careers',
  '/pricing',
  '/blog',
  '/privacy',
  '/terms',
  '/accessibility',
  '/help',
  '/api-docs',
  '/partnerships',
  '/case-studies'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Install event')
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('[SW] Static assets cached')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate event')
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('[SW] Old caches cleaned up')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', request.url)
          return cachedResponse
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            // Cache dynamic content
            if (url.pathname.startsWith('/api/') || url.pathname.includes('.')) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache)
                })
            }

            return response
          })
          .catch((error) => {
            console.error('[SW] Fetch failed:', error)
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline.html')
            }
            
            throw error
          })
      })
  )
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag)
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      handleBackgroundSync()
    )
  }
})

// Push notifications
self.addEventListener('push', (event) => {
  console.log('[SW] Push received:', event)
  
  const options = {
    body: event.data ? event.data.text() : 'New update available',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  )
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification click:', event)
  
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Helper function for background sync
async function handleBackgroundSync() {
  try {
    // Handle any pending offline actions
    console.log('[SW] Processing background sync tasks')
    
    // Example: Sync form submissions, analytics, etc.
    const pendingTasks = await getPendingTasks()
    
    for (const task of pendingTasks) {
      await processTask(task)
    }
  } catch (error) {
    console.error('[SW] Background sync failed:', error)
  }
}

// Helper functions
async function getPendingTasks() {
  // Get pending tasks from IndexedDB or localStorage
  return []
}

async function processTask(task) {
  // Process individual background sync task
  console.log('[SW] Processing task:', task)
}