=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
const CACHE_NAME =';static-cache-v1'';;
const DATA_CACHE_NAME =';data-cache-v1'';;
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
const CACHE_NAME =';static-cache-v1'';
const DATA_CACHE_NAME =';data-cache-v1'';
const FILES_TO_CACHE = [
  '/', '';/index.html', '';/offline.html', '';/manifest.json', '';/vite.svg']';
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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
=======
=======
=======
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/automation-improvements-final
=======
        response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||  fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1'';; const DATA_CACHE_NAME =';data-cache-v1'';; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']';; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response ||
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
        response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
        fetch(event.request).catch(() => caches.match('/offline.html'))
      )})
  )});
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |fetch(event.request).catch(() => caches.match('/offline.html')) )}) )});
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
const CACHE_NAME =';static-cache-v1''; const DATA_CACHE_NAME =';data-cache-v1''; const FILES_TO_CACHE = [ '/','';/index.html','';/offline.html','';/manifest.json','';/vite.svg']'; self.addEventListener( 'install',event: => {'';install',event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)) ); self.skipWaiting()}); self.addEventListener('activate',event => { event.waitUntil( caches.keys().then(keyList => Promise.all( keyList.map(key: => { if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) { return caches.delete(key)} }) ) ) ); self.clients.claim()}); self.addEventListener('fetch',event => { if (event.request.method !== 'GET') return; if (event.request.url.includes('/api/')) { event.respondWith( caches.open(DATA_CACHE_NAME).then(cache => fetch(event.request) .then(response => { if (response.status === 200) { cache.put(event.request,response.clone()); return response}) .catch(() => cache.match(event.request)))); return} event.respondWith( caches.match(event.request).then(response => { return ( response |
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
