const CACHE_NAME = 'zion-tech-group-v1.0.0';
const urlsToCache = [
  '/',
  '/offline.html',
  '/static/js/bundle.js',
  '/static/css/main.css'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES)})
      .then(() => {
        console.log('Static files cached successfully');
        return self.skipWaiting()})
      .catch((error) => {
        console.error('Error caching static files:', error)})
  )});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
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
              return caches.delete(cacheName)}
          })
        )})
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim()})
  )});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return}

  // Skip non-HTTP(S) requests
  if (!url.protocol.startsWith('http')) {
    return}

  // Handle different types of requests
  if (isStaticAsset(request)) {
    // Static assets - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE))} else if (isAPIRequest(request)) {
    // API requests - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE))} else {
    // HTML pages - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE))}
});

// Cache first strategy for static assets
async function cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse}
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone())}
    return networkResponse} catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Network error', { status: 503 })}
}

// Network first strategy for dynamic content
async function networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone())}
    return networkResponse} catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse}
    
    // Return offline page for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/offline.html')}
    
    return new Response('Offline', { status: 503 })}
}

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf', '.eot'];
  return staticExtensions.some(ext => url.pathname.endsWith(ext))}

// Check if request is for an API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.includes('analytics')}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())}
});

// Background sync implementation
async function data = event.data.json();
    const options = {
  body: data.body,
      icon: '/images/zion-logo.png',
      badge: '/images/badge.png',
      vibrate[100, 50, 100],
  data: {
        url: data.url
      
}
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )}
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    )}
});

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()}
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })}
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error)});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason)});