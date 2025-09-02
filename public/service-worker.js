const CACHE_NAME =
  'static-cache-v1';
const DATA_CACHE_NAME =
  'data-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/vite.svg',
];
self.addEventListener(
  'install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
<<<<<<< HEAD
  self.skipWaiting()});
self.addEventListener(
  'activate', event => {
=======
  self.skipWaiting();
});
self.addEventListener('activate', event => {
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
<<<<<<< HEAD
  self.clients.claim()});
self.addEventListener(
  'fetch', event => {
  if (event.request.method !==
  'GET') return;
  if (event.request.url.includes(
  '/api/')) {
=======
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('/api/')) {
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache =>
        fetch(event.request)
          .then(response => {
            if (response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => cache.match(event.request))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
<<<<<<< HEAD
        fetch(event.request).catch(() => caches.match(
  '/offline.html'))
      )})
  )});

=======
        fetch(event.request).catch(() => caches.match('/offline.html'))
      );
    })
  );
});
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
