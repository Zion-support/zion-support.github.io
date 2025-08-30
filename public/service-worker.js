const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/vite.svg'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting()});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
<<<<<<< HEAD
            return caches.delete(key);

=======
            return caches.delete(key)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        })
      )
    )
  );
  self.clients.claim()});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache =>
        fetch(event.request)
          .then(response => {
            if (response.status === 200) {
<<<<<<< HEAD
              cache.put(event.request, response.clone());

            return response;
          })
          .catch(() => cache.match(event.request))
      )
    );
    return;

=======
              cache.put(event.request, response.clone())}
            return response})
          .catch(() => cache.match(event.request))
      )
    );
    return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match('/offline.html'))
<<<<<<< HEAD
      );
    })
  );
});
}}}
=======
      )})
  )});
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
