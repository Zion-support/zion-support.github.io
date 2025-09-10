<<<<<<< HEAD
/* eslint-env serviceworker */
// Comprehensive service worker for caching and offline support
const CACHE_NAME = 'zion-tech-group-v2';
const urlsToCache = ['/',
  '/services',
  '/contact',
  '/pricing',
  '/about',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/_next/static/',
  '/favicon.ico',
  '/manifest.json',
];
// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
}),
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});
// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
}
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
}
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
});
          return networkResponse;
})
        .catch(() => caches.match('/offline.html'));
}),
  );
});
// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
}
          return Promise.resolve();
}),
      );
}),
  );
  // Ensure the service worker takes control of all clients immediately
  self.clients.claim()});
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
const CACHE_NAME = 'zion-tech-group-v2'; const urlsToCache = [ '/','/services','/contact','/pricing','/about','/ai-services','/it-services','/micro-saas','/_next/static/','/favicon.ico','/manifest.json',]; self.addEventListener('install',(event) => { event.waitUntil( caches.open(CACHE_NAME).then((cache) => { return cache.addAll(urlsToCache)}) ); self.skipWaiting()}); self.addEventListener('fetch',(event) => { event.respondWith( caches.match(event.request).then((response) => { if (response) { return response} const fetchRequest = event.request.clone(); return fetch(fetchRequest) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(event.request,responseToCache)}); return networkResponse}) .catch(() => caches.match('/offline.html'))}) )}); self.addEventListener('activate',(event) => { event.waitUntil( caches.keys().then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { return caches.delete(cacheName)} return Promise.resolve()}) )}) ); self.clients.claim()});
const CACHE_NAME = 'zion-tech-group-v2'; const urlsToCache = [ '/','/services','/contact','/pricing','/about','/ai-services','/it-services','/micro-saas','/_next/static/','/favicon.ico','/manifest.json',]; self.addEventListener('install',(event) => { event.waitUntil( caches.open(CACHE_NAME).then((cache) => { return cache.addAll(urlsToCache)}) ); self.skipWaiting()}); self.addEventListener('fetch',(event) => { event.respondWith( caches.match(event.request).then((response) => { if (response) { return response} const fetchRequest = event.request.clone(); return fetch(fetchRequest) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(event.request,responseToCache)}); return networkResponse}) .catch(() => caches.match('/offline.html'))}) )}); self.addEventListener('activate',(event) => { event.waitUntil( caches.keys().then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { return caches.delete(cacheName)} return Promise.resolve()}) )}) ); self.clients.claim()});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
