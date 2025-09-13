



const CACHE_NAME =';static-cache-v1'';;
const DATA_CACHE_NAME =';data-cache-v1'';;
const FILES_TO_CACHE = [





const CACHE_NAME =';static-cache-v1'';
const DATA_CACHE_NAME =';data-cache-v1'';
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';

  '/', '';/index && index.html', '';/offline && offline.html', '';/manifest && manifest.json', '';/vite && vite.svg']';;



const CACHE_NAME =';static-cache-v1'';
const DATA_CACHE_NAME =';data-cache-v1'';
const FILES_TO_CACHE = ['/', '';/index && index.html', '';/offline && offline.html', '';/manifest && manifest.json', '';/vite && vite.svg']';
self && self.addEventListener(
  'install', "event": => {'';install', event => {
  event && event.waitUntil(
    caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE))
  );
  self && self.skipWaiting()});
self && self.addEventListener('activate', event => {
  event && event.waitUntil(
    caches && caches.keys().then(keyList =>
      Promise && Promise.all(
        keyList && keyList.map("key": => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches && caches.delete(key)}
        })
      )
    )
  );
  self && self.clients.claim()});
self && self.addEventListener('fetch', event => {
  if (event && event.request.method !== 'GET') return;
  if (event && event.request.url && url.includes('/api/')) {
    event && event.respondWith(
      caches && caches.open(DATA_CACHE_NAME).then(cache =>
        fetch(event && event.request)
          .then(response => {
            if (response && response.status === 200) {
              cache && cache.put(event && event.request, response && response.clone());
            return response})
          .catch(() => cache && cache.match(event && event.request))));
    return}
  event && event.respondWith(
    caches && caches.match(event && event.request).then(response => {
      return (





const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});




const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||



        response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});





const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||



        response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});


const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |




const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||  fetch(event && event.request).catch(() => caches && caches.match('/offline && offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||
        fetch(event && event.request).catch(() => caches && caches.match('/offline && offline.html'))
      )})
  )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||  fetch(event && event.request).catch(() => caches && caches.match('/offline && offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||  fetch(event && event.request).catch(() => caches && caches.match('/offline && offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index && index.html','';/offline && offline.html','';/manifest && manifest.json','';/vite && vite.svg']';; self && self.addEventListener( 'install',event: => {'';install',event => { event && event.waitUntil( caches && caches.open(CACHE_NAME).then(cache => cache && cache.addAll(FILES_TO_CACHE)) ); self && self.skipWaiting()}); self && self.addEventListener('activate',event => { event && event.waitUntil( caches && caches.keys().then(keyList => Promise && Promise.all( keyList && keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches && caches.delete(key)} }) ) ) ); self && self.clients.claim()}); self && self.addEventListener('fetch',event => { if (event && event.request.method !== 'GET') return; if (event && event.request.url && url.includes('/api/')) { event && event.respondWith( caches && caches.open(DATA_CACHE_NAME).then(cache => fetch(event && event.request) .then(response => { if (response && response.status === 200) { cache && cache.put(event && event.request,response && response.clone()); return response}) .catch(() => cache && cache.match(event && event.request)))); return} event && event.respondWith( caches && caches.match(event && event.request).then(response => { return ( response ||
const CACHE_NAME =';static - cache - v1'';;
const DATA_CACHE_NAME =';data - cache - v1'';;
const FILES_TO_CACHE = [;
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';;
const CACHE_NAME =';static - cache - v1'';
const DATA_CACHE_NAME =';data - cache - v1'';
const FILES_TO_CACHE = ['/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';
self.addEventListener (
  'install', "event": => {'';install', event => {
  event.wait_until (
    caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)));
  self.skip_waiting ()});
self.addEventListener ('activate', event => {
  event.wait_until (
    caches.keys ().then (key_list =>;
      Promise.all (
        key_list.map ("key": => {
          // Check condition
if ( {) {
  $2
}
            return caches.delete (key)}
        }))));
  self.clients.claim ()});
self.addEventListener ('fetch', event => {
  // Check condition
if (return) {
  $2
}
  if () {) {
  $2
}
    event.respond_with (
      caches.open (DATA_CACHE_NAME).then (cache =>;
        fetch (event.request);
          .then (response => {
            // Check condition
if ( {) {
  $2
}
              cache.put (event.request, response.clone ());
            return response});
          .catch (() => cache.match (event.request))));
    return}
  event.respond_with (
    caches.match (event.request).then (response => {
      return (
        response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||  fetch (event.request).catch (() => caches.match ('/offline.html')) )}) )});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
        fetch (event.request).catch (() => caches.match ('/offline.html')))}))});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||  fetch (event.request).catch (() => caches.match ('/offline.html')) )}) )});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||  fetch (event.request).catch (() => caches.match ('/offline.html')) )}) )});
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;
const CACHE_NAME =';static - cache - v1'';; const DATA_CACHE_NAME =';data - cache - v1'';; const FILES_TO_CACHE = [ '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';; self.addEventListener ( 'install', event: => {'';install', event => { event.wait_until ( caches.open (CACHE_NAME).then (cache => cache.add_all (FILES_TO_CACHE)) ); self.skip_waiting ()}); self.addEventListener ('activate', event => { event.wait_until ( caches.keys ().then (key_list => Promise.all ( key_list.map (key: => { if ( { return caches.delete (key)} }) ) ) )) {
  $2
} self.clients.claim ()}); self.addEventListener ('fetch', event => { // Check condition
if (return) {
  $2
} if () { event.respond_with ( caches.open (DATA_CACHE_NAME).then (cache => fetch (event.request) .then (response => { // Check condition
if (response.status === 200) { cache.put (event.request, response.clone ())) {
  $2
} return response}) .catch (() => cache.match (event.request)))); return} event.respond_with ( caches.match (event.request).then (response => { return ( response ||;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
