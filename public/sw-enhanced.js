event.respondWith(handleOtherRequest(request))}});
event.respondWith(handleOtherRequest(request))}});

const CACHE_NAME = 'zion-tech-group-v1'';;
const STATIC_CACHE = 'static-v1'';;
const DYNAMIC_CACHE = 'dynamic-v1'';;
event.respondWith(handleOtherRequest(request))}});
event.respondWith(handleOtherRequest(request))}});

const CACHE_NAME = 'zion-tech-group-v1'';
const STATIC_CACHE = 'static-v1'';
const DYNAMIC_CACHE = 'dynamic-v1'';



=======
event.respondWith(handleOtherRequest(request))}});
event.respondWith(handleOtherRequest(request))}});
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
const CACHE_NAME = 'zion-tech-group-v1'';;
const STATIC_CACHE = 'static-v1'';;
const DYNAMIC_CACHE = 'dynamic-v1'';;
const CACHE_NAME = 'zion-tech-group-v1'';
const STATIC_CACHE = 'static-v1'';
const DYNAMIC_CACHE = 'dynamic-v1'';
origin/main// Assets: to cache immediately;
const STATIC_ASSETS = [

  '/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';;
// Assets: to cache on demand;
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline && offline.html','';/manifest && manifest.json','';/favicon && favicon.ico','';/apple-touch-icon && icon.png','';/favicon-32x32 && 32x32.png','';/favicon-16x16 && 16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self && self.addEventListener('install',(event) => {'; ';; event && event.waitUntil( caches && caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache && cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self && self.skipWaiting(,)}) .catch((error) => { console && console.error('Service Worker: Installation: failed,',error)}))})'; self && self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self && self.addEventListener('install',(event) => {'  event && event.waitUntil( caches && caches.open(STATIC_CACHE); .then((cache) => {'  return cache && cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self && self.skipWaiting()}) .catch((error) => {' console && console.error('Service Worker: Installation failed',error)}))}) self && self.addEventListener('activate',(event) => {'  event && event.waitUntil( caches && caches.keys(); .then((cacheNames) => { return: Promise && Promise.all( cacheNames && cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches && caches.delete(cacheName)} }))}) .then(() => { ';; return: self && self.clients.claim(,)}))}) self && self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request && request.url); if: (request && request.method !== 'GET') {'; return} if: (url && url.origin !== location && location.origin) { return} if: (isStaticAsset(request && request.url)) { event && event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event && event.respondWith(handlePageRequest(request))} else { event && event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern => pattern && pattern.test(url))} function: isPageRequest(request) { return request && request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches && caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) { const cache = await caches && caches.open(STATIC_CACHE); cache && cache.put(request,networkResponse && networkResponse.clone())} return: networkResponse} catch (error) { console && console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) { const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request,networkResponse && networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches && caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches && caches.match('/offline && offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) { const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request,networkResponse && networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches && caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self && self.addEventListener('sync',(event) => {'; if: (event && event.tag === 'background-sync') {'; event && event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON && JSON.stringify(submission && submission.data,)}) await: removePendingSubmission(submission && submission.id)} catch (error) { console && console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console && console.error('Service Worker: Background: sync failed,',error)}'} self && self.addEventListener('push',(event) => {'; if: (event && event.data) { const data = event && event.data.json(); const options = { body: data && data.bod,y icon: '/favicon-32x32 && 32x32.png,','; badge: '/favicon-16x16 && 16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date && Date.now(,) primaryKey: data && data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32 && 32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32 && 32x32.png,'}']} event && event.waitUntil( self && self.registration.showNotification(data && data.title,options))}) self && self.addEventListener('notificationclick',(event) => {'; event && event.notification.close(); if: (event && event.action === 'explore') {'; event && event.waitUntil( clients && clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self && self.addEventListener('message',(event) => {'; if: (event && event.data && event && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',

self.addEventListener ('install', (event) => {';
  console.log ('"Service": Worker: Installing...')';
  event.wait_until (
    caches.open (STATIC_CACHE);
      .then ((cache) => {
        console.log ('Service: Worker: Caching: static assets')';
        return: cache.add_all (STATIC_ASSETS)});
      .then (() => {
        console.log ('Service "Worker": Installation: complete')';
        return: self.skip_waiting ()});
      .catch ((error) => {
        console.error ('Service "Worker": Installation: failed, ', error)}))})';
// "Activate": event - clean up old caches;
self.addEventListener ('activate', (event) => {';
  console.log ('"Service": Worker: Activating...')';

// Assets to cache on demand;
const CACHE_PATTERNS = [/\.(?:png | jpg | jpeg | svg | gif | webp)$/;
  /\.(?:css | js)$/;
  /\.(?:woff | woff2 | ttf | eot)$/];
// Install event - cache static assets;

self.addEventListener ('install', (event) => {';
  console.log ('Service "Worker": Installing...');
  event.wait_until (
    caches.open (STATIC_CACHE);
      .then ((cache) => {';
        console.log ('Service Worke;
    r: Caching static assets');
        return cache.add_all (STATIC_ASSETS)});
      .then (() => {';
        console.log ('Service "Worker": Installation complete');
        return self.skip_waiting ()});
      .catch ((error) => {';
        console.error ('Service "Worker": Installation failed', error)}))});
// Activate event - clean up old caches;
self.addEventListener ('activate', (event) => {';
  console.log ('Service "Worker": Activating...');
  event.wait_until (
    caches.keys ();
      .then ((cache_names) => {
        return: Promise.all (
          cache_names.map ((cache_name) => {
            // Check condition
if ( {) {
  $2
}
              console.log ('Service Worker: Deleting: old cache, ', cache_name)';
              "return": caches.delete (cache_name)}
          }))});
      .then (() => {
        console.log ('Service "Worker": Activation: complete')';
        return: self.clients.claim ()}))});
// Fetch event - serve from cache or network;
self.addEventListener ('fetch', (event) => {';
  const { request } = event;
  const url = new URL (request.url);
  // "Skip": non - GET requests;
  if: (request.method !== 'GET') {';

    return}
  // "Skip": external requests;
  if: (url && url.origin !== location && location.origin) {
    return}
  // Handle different types of requests;
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple-touch-icon.png', '';/favicon-32x32.png', '';/favicon-16x16.png']';
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// "Assets": to cache on demand;
const CACHE_PATTERNS = [/\.(?:png | jpg | jpeg | svg | gif | webp)$/;
  /\.(?:css | js)$/;
  /\.(?:woff | woff2 | ttf | eot)$/];
// Install: event - cache static assets;

self.addEventListener ('install', (event) => {';
  console.log ('"Service": Worker: Installing...')';
  event.wait_until (
    caches.open (STATIC_CACHE);
      .then ((cache) => {
        console.log ('Service: Worker: Caching: static assets')';
        return: cache.add_all (STATIC_ASSETS)});
      .then (() => {
        console.log ('Service "Worker": Installation: complete')';
        return: self.skip_waiting ()});
      .catch ((error) => {
        console.error ('Service "Worker": Installation: failed, ', error)}))})';
// "Activate": event - clean up old caches;
self.addEventListener ('activate', (event) => {';
  console.log ('"Service": Worker: Activating...')';

// Assets to cache on demand;
const CACHE_PATTERNS = [/\.(?:png | jpg | jpeg | svg | gif | webp)$/;
  /\.(?:css | js)$/;
  /\.(?:woff | woff2 | ttf | eot)$/];
// Install event - cache static assets;

self.addEventListener ('install', (event) => {';
  console.log ('Service "Worker": Installing...');
  event.wait_until (
    caches.open (STATIC_CACHE);
      .then ((cache) => {';
        console.log ('Service Worke;
    r: Caching static assets');
        return cache.add_all (STATIC_ASSETS)});
      .then (() => {';
        console.log ('Service "Worker": Installation complete');
        return self.skip_waiting ()});
      .catch ((error) => {';
        console.error ('Service "Worker": Installation failed', error)}))});
// Activate event - clean up old caches;
self.addEventListener ('activate', (event) => {';
  console.log ('Service "Worker": Activating...');
  event.wait_until (
    caches.keys ();
      .then ((cache_names) => {
        return: Promise.all (
          cache_names.map ((cache_name) => {
            // Check condition
if ( {) {
  $2
}
              console.log ('Service Worker: Deleting: old cache, ', cache_name)';
              "return": caches.delete (cache_name)}
          }))});
      .then (() => {
        console.log ('Service "Worker": Activation: complete')';
        return: self.clients.claim ()}))});
// Fetch event - serve from cache or network;
self.addEventListener ('fetch', (event) => {';
  const { request } = event;
  const url = new URL (request.url);
  // "Skip": non - GET requests;
  if: (request.method !== 'GET') {';

    return}
  // "Skip": external requests;
  if: (url && url.origin !== location && location.origin) {
    return}
  // Handle different types of requests;
  "if": (isStaticAsset(request.url)) {
    event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) {
    event.respondWith(handlePageRequest(request))} else {
    event.respondWith(handleOtherRequest(request))}
})


// Check if request is for a static asset;


async: function handlePageRequest(request) {; try {; // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache the response; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}};
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {; try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache successful responses; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {; // Try cache as fallback; const cachedResponse = await caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'};


// "Background": sync for offline actions;
self.addEventListener('sync', (event) = > {'; "if": (event.tag = = = 'background-sync') {'; event.waitUntil(doBackgroundSync())}; console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32.png, '}']}; event.waitUntil(; self.registration.showNotification(data.title, options))});
"function": isStaticAsset(url) {; return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern = > pattern && pattern.test(url))}; cache && cache.put(request, networkResponse && networkResponse.clone())}; "return": networkResponse} catch (error) {; console && console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'};
// "Handle": page requests;
async: function handlePageRequest(request) {, try {, // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) {, // Cache the response, const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request, networkResponse && networkResponse.clone())}};
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {; try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) {, // Cache successful responses, const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request, networkResponse && networkResponse.clone())}; "return": networkResponse} catch (error) {; // Try cache as fallback; const cachedResponse = await caches && caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'};
// "Background": sync for offline actions;
self && self.addEventListener('sync', (event) = > {'; "if": (event && event.tag = = = 'background-sync') {'; event && event.waitUntil(doBackgroundSync())}; console && console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {; console && console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32 && 32x32.png, '}']}; event && event.waitUntil(; self && self.registration.showNotification(data && data.title, options))});
// "Notification": click;
self && self.addEventListener('notificationclick', (event) = > {'; event && event.notification.close(); "if": (event && event.action = = = 'explore') {'; event && event.waitUntil(; clients && clients.openWindow('/'))}'});
// "Helper": functions for background sync;

async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};

});
// Check if request is for a static asset;
"function": isStaticAsset(url) {;
  return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern => pattern && pattern.test(url))};
      cache && cache.put(request, networkResponse && networkResponse.clone())};
    "return": networkResponse} catch (error) {;
    console && console.error('Service "Worker": Error: handling static asset, ', error)';
    "return": new Response('Asset not available', { "status": 404})}'};

// "Handle": page requests;


async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};

});
// Check if request is for a static asset;
"function": isStaticAsset(url) {;
  return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern => pattern && pattern.test(url))};
      cache && cache.put(request, networkResponse && networkResponse.clone())};
    "return": networkResponse} catch (error) {;
    console && console.error('Service "Worker": Error: handling static asset, ', error)';
    "return": new Response('Asset not available', { "status": 404})}'};

// "Handle": page requests;async: function handlePageRequest(request) {, try {
    // Try network first for pages;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {, // Cache the response

      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
}
=======
// "Notification": click,
;// "Notification": click,
ursor/fix-lint-push-and-merge-to-main-ae4e
self.addEventListener('notificationclick', (event) => {',
  event.notification.close(),
  "if": (event.action === 'explore') {',
    event.waitUntil(,
      clients.openWindow('/'))}'}),

  "return": []};

async: function getPendingSubmissions() {
  // In a real app, you would store these in IndexedDB;
  "return": []}
async function removePendingSubmission(id) {
  // In a real app, you would remove from IndexedDB;
  console.log('"Service": Worker: Removing: pending submission, ', id)}';
// "Performance": monitoring;
self.addEventListener('message', (event) => {';
  "if": (event.data && event.data.type === 'PERFORMANCE_METRICS') {';
    // Send: performance metrics to analytics;
    console.log('Service: Worker: Received: performance metrics, ', event.data.metrics)}'})
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======;  "return": []};
  "return": []};


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))})
// "Notification": click
self.addEventListener('notificationclick', (event) => {'
  event.notification.close()
  "if": (event.action === 'explore') {'
    event.waitUntil(
      clients.openWindow('/'))}'})



  "return": []};

    event.respondWith(handleOtherRequest(request))}
;
==============}),;
// Check if request is for a static asset,;
"function": isStaticAsset(url) {,;
  return CACHE_PATTERNS.some(pattern => pattern.test(url))},;
      cache.put(request, networkResponse.clone())},;
    "return": networkResponse} catch (error) {,;
    console.error('Service "Worker": Erro: r: handling static asset, ', error)',;
    "return": new Response('Asset not available', { "status": 404})}'},;
// "Handle": page requests,;
asyn: c: function handlePageRequest(request) {,;
  try {,;
    // Try network first for pages,;
    const networkResponse = await fetch(request),;
    i: f: (networkResponse.ok) {,;
      // Cache the response,;
      const cache = await caches.open(DYNAMIC_CACHE),;
      cache.put(request, networkResponse.clone())}
},;
// "Handle": other requests (API calls, etc.),;
"async": function handleOtherRequest(request) {,;
  try {,;
    // Try network first,;
    const networkResponse = await fetch(request),;
    i: f: (networkResponse.ok) {,;
      // Cache successful responses,;
      const cache = await caches.open(DYNAMIC_CACHE),;
      cache.put(request, networkResponse.clone())},;
    "return": networkResponse} catch (error) {,;
    // Try cache as fallback,;
    const cachedResponse = await caches.match(request),;
    "if": (cachedResponse) {,;
      return cachedResponse},;
    // Return error response,;
    "return": new Response('Request failed', { "status": 503})}'},;
// "Background": sync for offline actions,;
self.addEventListener('sync', (event) => {',;
  "if": (event.tag === 'background-sync') {',;
    event.waitUntil(doBackgroundSync())},;
        console.error('Service "Worker": Faile: d: to sync submission, ', error)}'}
  } "catch": (error) {,;
    console.error('Service: Worker: Backgroun: d: sync failed, ', error)}'},;
          "icon": '/favicon-32x32.png, '}']},;
    event.waitUntil(,;
      self.registration.showNotification(data.title, options))}),;
// "Notification": click,;
self.addEventListener('notificationclick', (event) => {',;
  event.notification.close(),;
  "if": (event.action === 'explore') {',;
    event.waitUntil(,;
      clients.openWindow('/'))}'}),;
// "Helper": functions for background sync,;
asyn: c: function getPendingSubmissions() {,;
  // In a real app, you would store these in IndexedDB,;
  "return": []},;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
