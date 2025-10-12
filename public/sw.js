// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1'
const STATIC_CACHE = 'zion-static-v1'
const DYNAMIC_CACHE = 'zion-dynamic-v1'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/manifest.json',
  '/robots.txt'
]

// Install event - cache static assets
  console.log('Service Worker installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
        console.log('Static assets cached successfully')
        return self.skipWaiting()
      })
        console.error('Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
  console.log('Service Worker activating...')
  
  event.waitUntil(
    caches.keys()
        return Promise.all(
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
          })
        )
      })
        console.log('Service Worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache, fallback to network
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return
  
  event.respondWith(
    caches.match(request)
        // Return cached version if available
        if (cachedResponse) {
          console.log('Serving from cache:', request.url)
          return cachedResponse
        
        // Otherwise fetch from network
        return fetch(request)
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            
            // Clone the response
            const responseToCache = response.clone()
            
            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
                cache.put(request, responseToCache)
              })
                console.error('Failed to cache dynamic content:', error)
              })
            
            return response
          })
            console.error('Fetch failed:', error)
            
            // Return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/offline.html')
            
            throw error
          })
      })
  )
})

// Background sync for form submissions
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle form submission sync
      console.log('Syncing contact form submission')
    )
})

// Push notifications
  if (event.data) {
    const data = event.data.json()
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
          action: 'explore',
          title: 'Learn More',
          icon: '/icon-192x192.png'
        },
          action: 'close',
          title: 'Close',
          icon: '/icon-192x192.png'
      ]
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
})

// Notification click
  event.notification.close()
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
})