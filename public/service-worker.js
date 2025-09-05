>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
const CACHE_NAME =';static-cache-v1'';
const DATA_CACHE_NAME =';data-cache-v1'';
const FILES_TO_CACHE = ['/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';
self.addEventListener(
  'install', "event": => {'';install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting()});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map("key": => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches.delete(key)}
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
              cache.put(event.request, response.clone());
            return response})
          .catch(() => cache.match(event.request))));
    return}
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
