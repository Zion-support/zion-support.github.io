// Service Worker for caching and performance optimization
const CACHE_NAME = 'ziontech-v1';
const STATIC_CACHE = 'ziontech-static-v1';
const DYNAMIC_CACHE = 'ziontech-dynamic-v1';
// Files to cache immediately
const STATIC_FILES = [
  '//static/js/bundle.js/static/css/main.css/manifest.json'
];
// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
  );
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service worker activated');
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
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          // // console.log('Serving from cache:', request.url);
          return cachedResponse;
        }
        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clone the response
            const responseToCache = response.clone();
            // Cache dynamic content
            if (shouldCache(request.url)) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
            }
            return response;
          })
          .catch((error) => {
            // // console.log('Fetch failed:', error);
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            throw error;
          });
      })
  );
});
// Background sync for offline actions
self.addEventListener('sync', (event) => {
  // // console.log('Background sync triggered:', event.tag);
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});
// Push notifications
self.addEventListener('push', (event) => {
  // // console.log('Push message received');
  const options = {
    body: event.data ? event.data.text() : 'New update available'
    icon: '/icon-192x192.png'
    badge: '/badge-72x72.png'
    vibrate: [100, 50, 100]
    data: {
      dateOfArrival: Date.now()
      primaryKey: 1
    }
    actions: [
      {
        action: 'explore'
        title: 'View Details'
        icon: '/icon-192x192.png'
      }
      {
        action: 'close'
        title: 'Close'
        icon: '/icon-192x192.png'
      }
    ]
  };
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
});
// Notification click handler
self.addEventListener('notificationclick', (event) => {
  // // console.log('Notification clicked:', event.action);
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  )});
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: 'data.body',icon: '/favicon.svg',badge: '/favicon.svg',vibrate: '[100',50,100],data: { dateOfArrival: Date.now(),primaryKey: '1' } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
=======
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old cache:',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
