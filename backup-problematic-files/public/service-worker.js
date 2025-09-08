

ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462







const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1;
const DATA_CACHE_NAME =';data-cache-v1;
const FILES_TO_CACHE = []
  '/', ;/index.html', ;/offline.html', ;/manifest.json', ;/vite.svg']';
const FILES_TO_CACHE = ['/', ;/index && index.html', ;/offline && offline.html', ;/manifest && manifest.json', ;/vite && vite.svg']';
self && self.addEventListener(
  'install', "event": => {;install', event => {
  event && event.waitUntil()
    caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE))
  );
  self && self.skipWaiting()});
self && self.addEventListener('activate', event => {
    caches && caches.keys().then(keyList =>
      Promise && Promise.all(
        keyList && keyList.map("key": => {")
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches && caches.delete(key)}
        })
      )
  self && self.clients.claim()});"
self && self.addEventListener('fetch', event => {')
  if (event && event.request.method !== 'GET') return;
  if (event && event.request.url && url.includes('/api/')) {
    event && event.respondWith()
      caches && caches.open(DATA_CACHE_NAME).then(cache =>)
        fetch(event && event.request)
          .then(response => {)
            if (response && response.status === 200) {
              cache && cache.put(event && event.request, response && response.clone());
            return response})
          .catch(() => cache && cache.match(event && event.request))));
    return}
    caches && caches.match(event && event.request).then(response => {
      return (
























origin/automation-improvements-final






