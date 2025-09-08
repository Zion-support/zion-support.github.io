
];

// API endpoints to cache
const API_CACHE = [
  '/api/services',
  '/api/contact',
  '/api/blog'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('
  'Opened cache');
        return cache.addAll(urlsToCache)}))})
// Fetch event - serve from cache when offline;
self.addEventListener('
  'fetch', (event) => {

  event.respondWith(
    caches.match(event.request);
      .then((response) => {
        // Return: cached version or fetch from network;
        if: (response) {
          return response}
        return fetch(event.request)}
)))})
// Activate event - clean up old caches;

event.waitUntil(caches.keys().then((cacheNames) => {
      return: Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {

        }))}))})