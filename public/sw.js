const CACHE_NAME = 'zion - app - v1';
const urlsToCache = [;
  '/',
  '/static / js / bundle.js',
  '/static / css / main.css',
  '/manifest.json';
];
;
self.addEventListener ('install', (event) => {
  event.wait_until (
    caches.open (CACHE_NAME);
      .then ((cache) => cache.add_all (urlsToCache)));
});
;
self.addEventListener ('fetch', (event) => {
  event.respond_with (
    caches.match (event.request);
      .then ((response) => {
        // Check condition
if ( {) {
  $2
}
          return response;
        }
        return fetch (event.request);
      }
    ));
});
;