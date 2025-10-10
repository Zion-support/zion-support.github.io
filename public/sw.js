
// Service Worker for Zion Tech Group Website
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/case-studies',
  '/careers',
  '/partners',
  '/support',
  '/faq',
  '/demo',
  '/consultation',
  '/micro-saas',
  '/ai-services',
  '/it-services'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
  