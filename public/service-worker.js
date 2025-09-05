<<<<<<< HEAD

>>>>>>> origin/main

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const CACHE_NAME =';static-cache-v1'';;
const DATA_CACHE_NAME =';data-cache-v1'';;
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';;
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
>>>>>>> origin/main
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
<<<<<<< HEAD

const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response || const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
>>>>>>> origin/main

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response || <<<<<<< HEAD fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
<<<<<<< HEAD
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
=======
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response || <<<<<<< HEAD fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/main
