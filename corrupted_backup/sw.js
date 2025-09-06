<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => {  event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => {  return cache.addAll(STATIC_ASSETS)}) .then(() => {  return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => {  event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {  return caches.delete(cacheName)} }) )}) .then(() => {  return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { } self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
// Assets to cache on install
const STATIC_ASSETS = ['/',
  '/favicon.ico',
  '/favicon.svg',
  '/og-image.svg',
  '/manifest.json',
  '/offline.html'
=======
// Service Worker for caching and performance optimization
const CACHE_NAME = 'ziontech-v1;
const STATIC_CACHE = 'ziontech-static-v1',
  const DYNAMIC_CACHE = ziontech-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '//static/js/bundle.js/static/css/main.css/manifest.json
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
];
// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log(Service Worker installing...'),
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
<<<<<<< HEAD
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS)})
      .then(() => {
        console.log('Service Worker installed');
        return self.skipWaiting()})
  )});
=======
        console.log('Caching static files),
  return cache.addAll(STATIC_FILES)
})
      .then(() => {
  console.log('Service Worker installed'),
  return self.skipWaiting()
})
  );
});

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
// Activate event - clean up old caches
self.addEventListener(activate', (event) => {
  console.log('Service Worker activating...),
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
<<<<<<< HEAD
              console.log('Deleting old "cache": ', cacheName);
              return caches.delete(cacheName)}
=======
              console.log('Deleting old cache:', cacheName),
  return caches.delete(cacheName)
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
          })
        )})
      .then(() => {
<<<<<<< HEAD
        console.log('Service Worker activated');
        return self.clients.claim()})
  )});
// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
=======
  console.log(Service Worker activated'),
  return self.clients.claim()
})
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch, (event) => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
  const { request } = event;
  const url = new URL(request.url);
  // Skip non-GET requests
  if (request.method !== 'GET') {
<<<<<<< HEAD
    return}
  // Skip external requests
  if (url.origin !== location.origin) {
    return}
=======
  return
}

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith(http')) {
  return
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
  // Return cached version if available
        if (cachedResponse) {
<<<<<<< HEAD
          return cachedResponse}
        // Otherwise, fetch from network
        return fetch(request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse}
            // Clone the response
            const responseToCache = networkResponse.clone();
            // Cache the response
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache)});
            return networkResponse})
          .catch(() => {
            // If network fails, return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/offline.html')}
          })})
  )});
// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmissions()
    )}
=======
          console.log('Serving from cache:, request.url),
  return cachedResponse
}

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
  // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic) {
              return response
}

            // Clone the response
            const responseToCache = response.clone();

            // Cache dynamic content
            if (shouldCache(request.url)) {
  caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache)
});
            }

            return response;
          })
          .catch((error) => {
  console.log('Fetch failed:', error),
  // Return offline page for navigation requests
            if (request.mode === navigate') {
              return caches.match('/offline.html)
}
            
            throw error;
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log(Background sync triggered:', event.tag),
  if (event.tag === 'background-sync) {
    event.waitUntil(doBackgroundSync())
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
});
async function handleOfflineFormSubmissions() {
  // This would handle queued form submissions when back online
  console.log('Handling offline form submissions...')}
// Push notifications (if needed in the future)
self.addEventListener('push', (event) => {
<<<<<<< HEAD
  if (event.data) {
    const data = event.data.json();
    const options = {
      "body": data.body,
      "icon": '/favicon.svg',
      "badge": '/favicon.svg',
      "vibrate": [100, 50, 100],
      "data": {
        dateOfArrival: Date.now(),
        "primaryKey": 1
      }
    };
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )}
=======
  console.log(Push message received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update available,
    icon: '/icon-192x192.png',
    badge: /badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore,
        title: 'View Details',
        icon: /icon-192x192.png'
      },
      {
        action: 'close,
        title: 'Close',
        icon: /icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('ZionTech Group, options)
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
});
// Notification click handler
self.addEventListener('notificationclick', (event) => {
<<<<<<< HEAD
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  )});
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: 'data.body',icon: '/favicon.svg',badge: '/favicon.svg',vibrate: '[100',50,100],data: { dateOfArrival: Date.now(),primaryKey: '1' } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
=======
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
=======
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
=======
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
=======
  console.log(Notification clicked:', event.action),
  event.notification.close(),
  if (event.action === 'explore) {
    event.waitUntil(
      clients.openWindow('/')
    )
}
});

// Helper functions
function shouldCache(url) {
  // Cache API responses, images, and other assets
  return (
    url.includes(/api/') ||
    url.includes('.js) ||
    url.includes('.css') ||
    url.includes(.png') ||
    url.includes('.jpg) ||
    url.includes('.jpeg') ||
    url.includes(.gif') ||
    url.includes('.svg) ||
    url.includes('.webp')
  )
}

async function doBackgroundSync() {
  try {
    // Perform background sync operations
    console.log(Performing background sync...'),
  // Example: Sync offline data
    const offlineData = await getOfflineData(),
  if (offlineData.length > 0) {
      await syncOfflineData(offlineData)
}
    
    console.log('Background sync completed);
  } catch (error) {
  console.error('Background sync failed:', error)
}
}

async function getOfflineData() {
  // Get offline data from IndexedDB or localStorage
  return []
}

async function syncOfflineData(data) {
  // Sync offline data with server
  console.log(Syncing offline data:', data)
}

// Cache management
async function clearOldCaches() {
  const cacheNames = await caches.keys(),
  const oldCaches = cacheNames.filter(name => 
    name !== STATIC_CACHE && name !== DYNAMIC_CACHE
  ),
  await Promise.all(
    oldCaches.map(name => caches.delete(name))
  )
}

// Periodic cache cleanup
setInterval(() => {
  clearOldCaches()
}, 24 * 60 * 60 * 1000); // Clean up every 24 hours
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
