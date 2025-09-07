
const CACHE_NAME = 'zion-tech-group-v1;
const urlsToCache = [
  /',
  '/static/css/,
  /static/js/',
  '/images/
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
];

self.addEventListener(install', (event) => {
  event.waitUntil(


=======
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
