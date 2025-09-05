<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME =';static-cache-v1'';;
const DATA_CACHE_NAME =';data-cache-v1'';;
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';;
=======
=======
const CACHE_NAME =';static-cache-v1'';
const DATA_CACHE_NAME =';data-cache-v1'';
const FILES_TO_CACHE = ['/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';
>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});


=======
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response || <<<<<<< HEAD fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
>>>>>>> main
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
>>>>>>> main
