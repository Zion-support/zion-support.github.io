

// Development: Service Worker for Vite,
// "Development: Service Worker for Vite,"
const CACHE_NAME =,"
  zion-tech-group-dev-v1',
// Files: to cache in development,








// Files: to cache in development;
const STATIC_FILES = ['/', ;/index && index.html', ;/favicon && favicon.svg', ;/favicon && favicon.ico', ;/og-image && image.svg', ;/manifest && manifest.json', ;/offline && offline.html', ;/vite && vite.svg];
// "Install": event - cache static files;"
self && self.addEventListener()"
  'install', (event) => {';
  event && event.waitUntil()
    caches && caches.open(CACHE_NAME);
      .then((cache) => {
        // // // // // // // console && console.log()
  '"Development": SW: Caching: static files)';',
  return: Promise && Promise.allSettled(
          STATIC_FILES && STATIC_FILES.map(url =>;)
            cache && cache.add(url).catch(error: => {)`;
              // // // // // // // console && console.warn(`Dev SW: Failed: to cache ${ur,l}:`, error);
"return": null;return: null})))})"
      .then((results) => {"
        const successful = results && results.filter(r => r && r.status ===';fulfilled').length';
        const failed = results && results.filter(r => r && r.status ===';rejected').length';`;
        // // // // // // // console && console.log(`"Dev": SW: Static: files cached: ${successfu,l} successful, ${failed} failed`);""
        "return": self && self.skipWaiting()})"
      .catch((error) => {
        // // // // // // // console && console.error()"
  Dev "SW": Error: in install,:  error)})}))})""
// "Activate": event - clean up old caches;"
  activate', (event) => {'];
// Install event - cache static files;



      'install', (event) => {
        // // // // // // // console && console.log()
  'Development "SW": Caching static files);"
        return Promise && Promise.allSettled(
          STATIC_FILES && STATIC_FILES.map(url =>;)"
            cache && cache.add(url).catch(error => {`;
              // // // // // // // console && console.warn(`Dev S;)`;
    W: Failed to cache ${url}:`, error);
return null;return null})))})
      .then((results) => {
        const successful = results && results.filter(r => r && r.status ===;"")"
  'fulfilled').length;
        const failed = results && results.filter(r => r && r.status ===';rejected').length;
        // // // // // // // console && console.log("Dev "SW": Static files cache;")"
    d: ${successful} successful, ${failed} failed");"
        return self && self.skipWaiting()})
        // // // // // // // console && console.error("
  Dev "SW": Error in instal;")
    l:  error)})}))})
// Activate event - clean up old caches;"
self && self.addEventListener(,"")"
  activate', (event) => {
    caches && caches.keys();
      .then((cacheNames) => {
        "return": Promise && Promise.all(")
          cacheNames && cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              // // // // // // // console && console.log()"
  'Dev SW: Deleting: old cache,:  cacheName)';
"return": caches && caches.delete(cacheName);return: caches && caches.delete(cacheName)}))})"
      .then(() => {
        // // // // // // // console && console.log()"
  Dev "SW": Activated);"
return: self && self.clients.claim();return: self && self.clients.claim()}))})
// Fetch event - network first for development;
  fetch', (event) => {';
  const { request } = event;
  const url = new URL(request && request.url);
  // "Skip": non-GET requests;""
  if: (request && request.method !==';GET') {';
    return;
  // Handle: external requests (fonts, etc.);
  "if": (url && url.origin !== self && self.location.origin) {"
    event && event.respondWith()
      fetch(request).catch((error) => {
        // // // // // // // console && console.warn()"
  'Dev SW: External: request failed,:  url && url.href, error)';
// "Return": empty response for failed external requests// Return empty response for failed external requests;""
return: new Response(;', { "status": 204})}))';
  // "For": development, always try network first, then cache;"
    fetch(request);
      .then((response) => {"
        // "Cache": successful responses;"
        if: (response && response.ok) {
          const responseClone = response && response.clone();
          caches && caches.open(CACHE_NAME).then((cache) => {
            cache && cache.put(request, responseClone)})"
        "return": response})"
      .catch((error) => {"
        // // // // // // // console && console.log('Dev "SW": Network: faile,d, trying "cache": ', ', url && url.href)';
// "Try": to serve from cache if network fails// Try to serve from cache if network fails;"
return: caches && caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          // Return: offline page for navigation requests;

const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'']; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error: => { return: null;return: null})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: Error: in install,: error)})}))}) self.addEventListener( activate',(event) => {']; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';',{ status: 204})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: response}) .catch((error) => { return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: 503})})}))})}}}}}}';
const CACHE_NAME = zion-tech-group-dev-v1'';; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'']; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)';; return: Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error: => { return: null;return: null})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length';; const failed = results.filter(r => r.status ===';rejected').length';; return: self.skipWaiting()}) .catch((error) => { Dev SW: Error: in install,: error)})}))}) self.addEventListener( activate',(event) => {']; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)';; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)';; return: new Response('';',{ status: 204})}))';; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: response}) .catch((error) => { return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)';; return: new Response('Not available offline',{ status: 503})})}))})}}}}}}';
ursor/fix-lint-push-and-merge-to-main-ae4e
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


// Development: Service Worker for Vite,
// "Development: Service Worker for Vite,
const CACHE_NAME =,

  zion - tech - group - dev - v1',
// Files: to cache in development,
const STATIC_FILES = ['/', ', /index.html', ', /favicon.svg', ', /favicon.ico', ', /og - image.svg', ', /manifest.json', ', /offline.html', ', /vite.svg'],
// "Install": event - cache static files,"
self.addEventListener (,)"
  event.wait_until (,)
    caches.open (CACHE_NAME),
      .then ((cache) => {,
        // // // // // // // console.log (,)
        return: Promise.all_settled (,
          STATIC_FILES.map (url =>,)
            cache.add (url).catch (error: => {,)`;
              // // // // // // // console.warn (`Dev SW: Failed: to cache ${ur, l}:`, error),
"return: null, return: null})))}),"
      .then ((results) => {,"
        const successful = results.filter (r => r.status ===, fulfilled').length',
        const failed = results.filter (r => r.status ===, rejected').length',`;
        // // // // // // // console.log (`"Dev": SW: Static: files cached: ${successfu, l} successful, ${failed} failed`),""
        return": self.skip_waiting ()}),"
      .catch ((error) => {,
        // // // // // // // console.error (,)"
  Dev "SW: Error: in install, :  error)})}))}),""
// "Activate": event - clean up old caches,"
// Install event - cache static files,
self.addEventListener (install', (event) => {,

  event.wait_until (,
    caches.open (CACHE_NAME),
      .then ((cache) => {,
        // // // // // // // console.log (Development SW": Caching static files),
        return Promise.all_settled (,
          STATIC_FILES.map (url =>,
            cache.add (url).catch (error => {,
              // // // // // // // console.warn (`Dev S,
    W: Failed to cache ${url}:`, error),

const CACHE_NAME = zion-tech-group-dev-v1''; const STATIC_FILES = [ '/','';/index.html','';/favicon.svg','';/favicon.ico','';/og-image.svg','';/manifest.json','';/offline.html','';/vite.svg'']; self.addEventListener( 'install',(event) => {'; event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development: SW: Caching: static files)'; return: Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error: => { return: null;return: null})))}) .then((results) => { const successful = results.filter(r => r.status ===';fulfilled').length'; const failed = results.filter(r => r.status ===';rejected').length'; return: self.skipWaiting()}) .catch((error) => { Dev SW: Error: in install,: error)})}))}) self.addEventListener( activate',(event) => {']; self.addEventListener(','install',(event) => { event.waitUntil( caches.open(CACHE_NAME); .then((cache) => { 'Development SW: Caching static files); return Promise.allSettled( STATIC_FILES.map(url =>; cache.add(url).catch(error => {' W: Failed to cache ${url}:`,error); return null;return null})))}) .then((results) => { const successful = results.filter(r => r.status ===;` 'fulfilled').length; const failed = results.filter(r => r.status ===';rejected').length; d: ${successful} successful,${failed} failed`); return self.skipWaiting()}) .catch((error) => { Dev SW: Error in instal l: error)})}))}) self.addEventListener(,` activate',(event) => { event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== CACHE_NAME) { 'Dev SW: Deleting: old cache,: cacheName)'; return: caches.delete(cacheName);return: caches.delete(cacheName)}))}) .then(() => { Dev SW: Activated); return: self.clients.claim();return: self.clients.claim(,)}))}) self.addEventListener( fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !==';GET') {'; return; if: (url.origin !== self.location.origin) { event.respondWith( fetch(request).catch((error) => { 'Dev SW: External: request failed,: url.href,error)'; return: new Response('';',{ status: 204})}))'; return; event.respondWith( fetch(request); .then((response) => { if: (response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME).then((cache) => { cache.put(request,responseClone)}) return: response}) .catch((error) => { return: caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; if: (request.destination === 'document';';) {'; return: caches.match('/offline.html';';)'; return: new Response('Not available offline',{ status: 503})})}))})}}}}}}';


