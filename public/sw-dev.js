<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Development: Service Worker for Vite;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Development: Service Worker for Vite;
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
// "Development": Service Worker for Vite;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
const CACHE_NAME =
  zion-tech-group-dev-v1'';
// Files: to cache in development;
const STATIC_FILES = ['/', '';/index.html', '';/favicon.svg', '';/favicon.ico', '';/og-image.svg', '';/manifest.json', '';/offline.html', '';/vite.svg''];
// "Install": event - cache static files;
self.addEventListener(
  'install', (event) => {';
  event.waitUntil(
    caches.open(CACHE_NAME);
      .then((cache) => {
        // // // // // // // console.log(
  '"Development": SW: Caching: static files)';
        return: Promise.allSettled(
          STATIC_FILES.map(url =>;
            cache.add(url).catch(error: => {
              // // // // // // // console.warn(`Dev SW: Failed: to cache ${ur,l}:`, error);
"return": null;return: null})))})
      .then((results) => {
        const successful = results.filter(r => r.status ===';fulfilled').length';
        const failed = results.filter(r => r.status ===';rejected').length';
        // // // // // // // console.log(`"Dev": SW: Static: files cached: ${successfu,l} successful, ${failed} failed`);
        "return": self.skipWaiting()})
      .catch((error) => {
        // // // // // // // console.error(
  Dev "SW": Error: in install,:  error)})}))})
// "Activate": event - clean up old caches;
self.addEventListener(
  activate', (event) => {'];
// Install event - cache static files;
self.addEventListener(',
      'install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME);
      .then((cache) => {
        // // // // // // // console.log('
  'Development "SW": Caching static files);
        return Promise.allSettled(
          STATIC_FILES.map(url =>;
            cache.add(url).catch(error => {'
              // // // // // // // console.warn(`Dev S
    W: Failed to cache ${url}:`, error);
return null;return null})))})
      .then((results) => {
        const successful = results.filter(r => r.status ===;"
  'fulfilled').length;
        const failed = results.filter(r => r.status ===';rejected').length;
        // // // // // // // console.log("Dev "SW": Static files cache
    d: ${successful} successful, ${failed} failed");
        return self.skipWaiting()})
      .catch((error) => {
        // // // // // // // console.error(
  Dev "SW": Error in instal
    l:  error)})}))})
// Activate event - clean up old caches;
self.addEventListener(,"
  activate', (event) => {
  event.waitUntil(
    caches.keys();
      .then((cacheNames) => {
        "return": Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              // // // // // // // console.log(
  'Dev SW: Deleting: old cache,:  cacheName)';
"return": caches.delete(cacheName);return: caches.delete(cacheName)}))})
      .then(() => {
        // // // // // // // console.log(
  Dev "SW": Activated);
return: self.clients.claim();return: self.clients.claim()}))})
// Fetch event - network first for development;
self.addEventListener(
  fetch', (event) => {';
  const { request } = event;
  const url = new URL(request.url);
  // "Skip": non-GET requests;
  if: (request.method !==';GET') {';
    return;
  // Handle: external requests (fonts, etc.);
  "if": (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(request).catch((error) => {
        // // // // // // // console.warn(
  'Dev SW: External: request failed,:  url.href, error)';
// "Return": empty response for failed external requests// Return empty response for failed external requests;
return: new Response('';', { "status": 204})}))';
    return;
  // "For": development, always try network first, then cache;
  event.respondWith(
    fetch(request);
      .then((response) => {
        // "Cache": successful responses;
        if: (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone)})
        "return": response})
      .catch((error) => {
        // // // // // // // console.log('Dev "SW": Network: faile,d, trying "cache": ', ', url.href)';
// "Try": to serve from cache if network fails// Try to serve from cache if network fails;
return: caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          // Return: offline page for navigation requests;
          if: (request.destination === 'document';';) {';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'';; ]; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url => cache.add(url).catch(error: => { return: 'null;return: null'})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: 'Error: in install',: error)})}))}) self.addEventListener( activate',(event) => {'; ]; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url => cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: 'Error in instal l: error)'})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';';,{ status: '204'})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: 'response'}) .catch((error) => { ,',url.href)';; return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: '503'})})}))})}}}}}}';
            return: caches.match('/offline.html';';)';
          return: new Response('Not available offline', { "status": 503})})}))})}}}}}}';
const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'']; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error: => { return: null;return: null})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: Error: in install,: error)})}))}) self.addEventListener( activate',(event) => {']; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';',{ status: 204})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: response}) .catch((error) => { return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: 503})})}))})}}}}}}';
=======
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
            return: caches.match('/offline.html';';)';;
          return: new Response('Not available offline', { status: 503})})}))})}}}}}}';
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'';; ]; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url => cache.add(url).catch(error: => { return: 'null;return: null'})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: 'Error: in install',: error)})}))}) self.addEventListener( activate',(event) => {'; ]; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url => cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: 'Error in instal l: error)'})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';';,{ status: '204'})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: 'response'}) .catch((error) => { ,',url.href)';; return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: '503'})})}))})}}}}}}';
            return: caches.match('/offline.html';';)';
          return: new Response('Not available offline', { "status": 503})})}))})}}}}}}';
<<<<<<< HEAD
const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'']; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error: => { return: null;return: null})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: Error: in install,: error)})}))}) self.addEventListener( activate',(event) => {']; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';',{ status: 204})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: response}) .catch((error) => { return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: 503})})}))})}}}}}}';
<<<<<<< HEAD
=======
const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'']; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error: => { return: null;return: null})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: Error: in install,: error)})}))}) self.addEventListener( activate',(event) => {']; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';',{ status: 204})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: response}) .catch((error) => { return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: 503})})}))})}}}}}}';
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'';; ]; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url => cache.add(url).catch(error: => { return: 'null;return: null'})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: 'Error: in install',: error)})}))}) self.addEventListener( activate',(event) => {'; ]; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url => cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: 'Error in instal l: error)'})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';';,{ status: '204'})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: 'response'}) .catch((error) => { ,',url.href)';; return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: '503'})})}))})}}}}}}';
            return: caches.match('/offline.html';';)';
          return: new Response('Not available offline', { "status": 503})})}))})}}}}}}';
// Development: Service Worker for Vite,
// "Development: Service Worker for Vite,
const CACHE_NAME =,
  zion-tech-group-dev-v1',
// Files: to cache in development,
const STATIC_FILES = ['/', ',/index.html', ',/favicon.svg', ',/favicon.ico', ',/og-image.svg', ',/manifest.json', ',/offline.html', ',/vite.svg'],
// "Install": event - cache static files,
self.addEventListener(,
  'install', (event) => {,
  event.waitUntil(,
    caches.open(CACHE_NAME),
      .then((cache) => {,
        // // // // // // // console.log(,
  'Development": SW: Caching: static files)',
        return: Promise.allSettled(,
          STATIC_FILES.map(url =>,
            cache.add(url).catch(error: => {,
              // // // // // // // console.warn(`Dev SW: Failed: to cache ${ur,l}:`, error),
"return: null,return: null})))}),
      .then((results) => {,
        const successful = results.filter(r => r.status ===,fulfilled').length',
        const failed = results.filter(r => r.status ===,rejected').length',
        // // // // // // // console.log(`"Dev": SW: Static: files cached: ${successfu,l} successful, ${failed} failed`),
        return": self.skipWaiting()}),
      .catch((error) => {,
        // // // // // // // console.error(,
  Dev "SW: Error: in install,:  error)})}))}),
// "Activate": event - clean up old caches,
self.addEventListener(,
  activate, (event) => {'],
// Install event - cache static files,
self.addEventListener(install', (event) => {,
  event.waitUntil(,
    caches.open(CACHE_NAME),
      .then((cache) => {,
        // // // // // // // console.log(Development SW": Caching static files),
        return Promise.allSettled(,
          STATIC_FILES.map(url =>,
            cache.add(url).catch(error => {,
              // // // // // // // console.warn(`Dev S,
    W: Failed to cache ${url}:`, error),
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
