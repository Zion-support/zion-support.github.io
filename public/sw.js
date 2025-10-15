// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';'
const STATIC_CACHE = 'static-v1';'
const DYNAMIC_CACHE = 'dynamic-v1';'
// Assets to cache immediately
const STATIC_ASSETS = [
  '/','
  '/index.html','
  '/manifest.json','
  '/favicon.ico','
  '/images/icon-192x192.png','
  '/images/icon-512x512.png''
];
// Install event - cache static assets
self.addEventListener('install', (event) => {'
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');'
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {'
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {

