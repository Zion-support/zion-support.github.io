// Service Worker for Zion Tech Group
const C AC HE_ NA ME = 'zion-tech-group-v1'
const S TA TI C_ CA CH E = 'zion-static-v1'
const D YN AM IC_ CA CH E = 'zion-dynamic-v1'

// Assets to cache immediately
const S TA TI C_ AS SE TS = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/manifest.json',
  '/robots.txt'
]

// Install event - cache static assets
self.add Event Listener('install', (event) => {
  console.log('Service Worker installing...')
  
  event.wait Until(
    caches.open(S TA TI C_ CA CH E)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.add All(S TA TI C_ AS SE TS)
      })
      .then(() => {
        console.log('Static assets cached successfully')
        return self.skip Waiting()
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.add Event Listener('activate', (event) => {
  console.log('Service Worker activating...')
  
  event.wait Until(
    caches.keys()
      .then((cache Names) => {
        return Promise.all(
          cache Names.map((cache Name) => {
            if (cache Name !== S TA TI C_ CA CH E && cache Name !== D YN AM IC_ CA CH E) {
              console.log('Deleting old cache:', cache Name)
              return caches.delete(cache Name)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache, fallback to network
self.add Event Listener('fetch', (event) => {
  const { request } = event
  const url = new U RL(request.url)
  
  // Skip non-G ET requests
  if (request.method !== 'G ET') {
    return
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.starts With('http')) {
    return
  }
  
  event.respond With(
    caches.match(request)
      .then((cached Response) => {
        // Return cached version if available
        if (cached Response) {
          console.log('Serving from cache:', request.url)
          return cached Response
        }
        
        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }
            
            // Clone the response
            const response To Cache = response.clone()
            
            // Cache dynamic content
            caches.open(D YN AM IC_ CA CH E)
              .then((cache) => {
                cache.put(request, response To Cache)
              })
              .catch((error) => {
                console.error('Failed to cache dynamic content:', error)
              })
            
            return response
          })
          .catch((error) => {
            console.error('Fetch failed:', error)
            
            // Return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/offline.html')
            }
            
            throw error
          })
      })
  )
})

// Background sync for form submissions
self.add Event Listener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.wait Until(
      // Handle form submission sync
      console.log('Syncing contact form submission')
    )
  }
})

// Push notifications
self.add Event Listener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        date Of Arrival: Date.now(),
        primary Key: data.primary Key
      },
      actions: [
        {
          action: 'explore',
          title: 'Learn More',
          icon: '/icon-192x192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-192x192.png'
        }
      ]
    }
    
    event.wait Until(
      self.registration.show Notification(data.title, options)
    )
  }
})

// Notification click
self.add Event Listener('notificationclick', (event) => {
  event.notification.close()
  
  if (event.action === 'explore') {
    event.wait Until(
      clients.open Window('/')
    )
  }
})