

const CACHE_NAME =';static-cache-v1'';;
const DATA_CACHE_NAME =';data-cache-v1'';;
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';;

const CACHE_NAME =';static-cache-v1'';;
const DATA_CACHE_NAME =';data-cache-v1'';;
const FILES_TO_CACHE = [


=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
const CACHE_NAME =';static-cache-v1'';;
const DATA_CACHE_NAME =';data-cache-v1'';;
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';;
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const CACHE_NAME =';static-cache-v1'';
const DATA_CACHE_NAME =';data-cache-v1'';
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
origin/main
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======


>>>>>>> origin/automation-improvements-final
=======

=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});


const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
=======
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
