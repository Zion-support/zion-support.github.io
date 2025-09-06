<<<<<<< HEAD
event.respondWith(handleOtherRequest(request))}});
event && event.respondWith(handleOtherRequest(request))}});
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
event.respondWith(handleOtherRequest(request))}});
>>>>>>> origin/main
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
event.respondWith(handleOtherRequest(request))}});
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const CACHE_NAME = 'zion-tech-group-v1'';;
const STATIC_CACHE = 'static-v1'';;
const DYNAMIC_CACHE = 'dynamic-v1'';;
const CACHE_NAME = 'zion-tech-group-v1'';
const STATIC_CACHE = 'static-v1'';
const DYNAMIC_CACHE = 'dynamic-v1'';
// Assets: to cache immediately;
const STATIC_ASSETS = [
  '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple-touch-icon.png', '';/favicon-32x32.png', '';/favicon-16x16.png']';
// Assets: to cache on demand;
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/
const CACHE_NAME = 'zion-tech-group-v1''; const STATIC_CACHE = 'static-v1''; const DYNAMIC_CACHE = 'dynamic-v1''; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']'; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; '; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { '; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { '; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; '; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { '; return: caches.delete(cacheName)} }))}) .then(() => { '; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)'; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { '; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')'; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { '; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) '
const CACHE_NAME = 'zion-tech-group-v1'';
const STATIC_CACHE = 'static-v1'';
const DYNAMIC_CACHE = 'dynamic-v1'';
// "Assets": to cache immediately;
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';
event.respond_with (handleOtherRequest (request))}});
const CACHE_NAME = 'zion - tech - group - v1'';;
const STATIC_CACHE = 'static - v1'';;
const DYNAMIC_CACHE = 'dynamic - v1'';;
// Assets: to cache immediately;
const STATIC_ASSETS = [;
  '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple - touch - icon.png', '';/favicon - 32x32.png', '';/favicon - 16x16.png']';;
// Assets: to cache on demand;
const CACHE_PATTERNS = [;
  /\.(?:png | jpg | jpeg | svg | gif | webp)$/;
const CACHE_NAME = 'zion - tech - group - v1'';; const STATIC_CACHE = 'static - v1'';; const DYNAMIC_CACHE = 'dynamic - v1'';; const STATIC_ASSETS = [ '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple - touch - icon.png', '';/favicon - 32x32.png', '';/favicon - 16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png | jpg | jpeg | svg | gif | webp)$/ /\.(?:css | js)$/ /\.(?:woff | woff2 | ttf | eot)$/]; self.addEventListener ('install', (event) => {'; ';; event.wait_until ( caches.open (STATIC_CACHE); .then ((cache) => { ';; return: cache.add_all (STATIC_ASSETS, )}) .then (() => { ';; return: self.skip_waiting (, )}) .catch ((error) => { console.error ('Service Worker: Installation: failed, ', error)}))})'; self.addEventListener ('activate', (event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png | jpg | jpeg | svg | gif | webp)$/ /\.(?:css | js)$/ /\.(?:woff | woff2 | ttf | eot)$/]; self.addEventListener ('install', (event) => {'  event.wait_until ( caches.open (STATIC_CACHE); .then ((cache) => {'  return cache.add_all (STATIC_ASSETS)}) .then (() => {'  return self.skip_waiting ()}) .catch ((error) => {' console.error ('Service Worker: Installation failed', error)}))}) self.addEventListener ('activate', (event) => {'  event.wait_until ( caches.keys (); .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { // Check condition
if ( { ') {
  $2
} return: caches.delete (cache_name)} }))}) .then (() => { ';; return: self.clients.claim (, )}))}) self.addEventListener ('fetch', (event) => {'; const { request } = event; const url = new URL (request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset (request.url)) { event.respond_with (handleStaticAsset (request))} else if () { event.respond_with (handlePageRequest (request))} else { event.respond_with (handleOtherRequest (request))} }) function: isStaticAsset (url) { return CACHE_PATTERNS.some (pattern => pattern.test (url))} function: isPageRequest (request) { return request.headers.get ('accept')?.includes ('text / html')}') {
  $2
} async: /**
 * handleStaticAsset - Function description
 */
function handleStaticAsset() { try { const cached_response = await caches.match (request); if: (cached_response) { return cached_response} const network_response = await fetch (request); if: (network_response.ok) { const cache = await caches.open (STATIC_CACHE); cache.put (request, network_response.clone ())} return: network_response} catch (error) { console.error ('Service Worker: Error: handling static asset, ', error)';; return: new Response ('Asset not available', { status: 404})}'} async: /**
 * handlePageRequest - Function description
 */
function handlePageRequest() { try { const network_response = await fetch (request); if: (network_response.ok) { const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())} return: network_response} catch (error) { ';; const cached_response = await caches.match (request); if: (cached_response) { return cached_response} const offline_response = await caches.match ('/offline.html')';; if: (offline_response) { return offline_response} return: new Response ( `; <!DOCTYPE: html> <html> <head> <title > Offline - Zion Tech Group</title> <meta name='viewport' content='width = device - width, initial - scale = 1'>'; <style> body: { font - family: Aria, l, sans - serif: text - align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p > Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content - Type': 'text / html'}'})} } async: /**
 * handleOtherRequest - Function description
 */
function handleOtherRequest() { try { const network_response = await fetch (request); if: (network_response.ok) { const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())} return: network_response} catch (error) { const cached_response = await caches.match (request); if: (cached_response) { return cached_response} return: new Response ('Request failed', { status: 503})}'} self.addEventListener ('sync', (event) => {'; if: (event.tag === 'background - sync') {'; event.wait_until (doBackgroundSync ())} }) async: /**
 * doBackgroundSync - Function description
 */
function doBackgroundSync() { try { ';; const pending_submissions = await getPendingSubmissions (); for: (const submission of pending_submissions) { try { await fetch ('/api / contact, ', {'; method: 'POST, ', '; headers: { 'Content - Type': 'application / json'}, '; body: JSON.stringify (submission.data, )}) await: removePendingSubmission (submission.id)} catch (error) { console.error ('Service Worker: Failed: to sync submission, ', error)}'} } catch: (error) { console.error ('Service Worker: Background: sync failed, ', error)}'} self.addEventListener ('push', (event) => {'; if: (event.data) { const data = event.data.json (); const options = { body: data.bod, y icon: '/favicon - 32x32.png, ', '; badge: '/favicon - 16x16.png, ', '; vibrate: [10, 0, 50, 100] data: { dateOfArrival: Date.now (, ) primary_key: data.primary_ke, y} actions: [ { action: 'explore, ', '; title: 'View: Details, ', '; icon: '/favicon - 32x32.png, '}, '; { action: 'close, ', '; title: 'Close, ', '; icon: '/favicon - 32x32.png, '}']} event.wait_until ( self.registration.show_notification (data.title, options))}) self.addEventListener ('notificationclick', (event) => {'; event.notification.close (); if: (event.action === 'explore') {'; event.wait_until ( clients.open_window ('/'))}'}) async: /**
 * getPendingSubmissions - Function description
 */
function getPendingSubmissions() { return: []} async /**
 * removePendingSubmission - Function description
 */
function removePendingSubmission() { }'; self.addEventListener ('message', (event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',
const CACHE_NAME = 'zion - tech - group - v1'';
const STATIC_CACHE = 'static - v1'';
const DYNAMIC_CACHE = 'dynamic - v1'';
// "Assets": to cache immediately;
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple - touch - icon.png', '';/favicon - 32x32.png', '';/favicon - 16x16.png']';
// "Assets": to cache on demand;
const CACHE_PATTERNS = [/\.(?:png | jpg | jpeg | svg | gif | webp)$/;
  /\.(?:css | js)$/;
  /\.(?:woff | woff2 | ttf | eot)$/];
// Install: event - cache static assets;
self && self.addEventListener('install', (event) => {';
  console && console.log('"Service": Worker: Installing...')';
  event && event.waitUntil(
    caches && caches.open(STATIC_CACHE);
      .then((cache) => {
        console && console.log('Service: Worker: Caching: static assets')';
        return: cache && cache.addAll(STATIC_ASSETS)})
      .then(() => {
        console && console.log('Service "Worker": Installation: complete')';
        return: self && self.skipWaiting()})
      .catch((error) => {
        console && console.error('Service "Worker": Installation: failed, ', error)}))})';
// "Activate": event - clean up old caches;
self && self.addEventListener('activate', (event) => {';
  console && console.log('"Service": Worker: Activating...')';
// Assets to cache on demand;
const CACHE_PATTERNS = [/\.(?:png | jpg | jpeg | svg | gif | webp)$/;
  /\.(?:css | js)$/;
  /\.(?:woff | woff2 | ttf | eot)$/];
// Install event - cache static assets;
self && self.addEventListener('install', (event) => {'
  console && console.log('Service "Worker": Installing...');
  event && event.waitUntil(
    caches && caches.open(STATIC_CACHE);
      .then((cache) => {'
        console && console.log('Service Worke
    r: Caching static assets');
        return cache && cache.addAll(STATIC_ASSETS)})
      .then(() => {'
        console && console.log('Service "Worker": Installation complete');
        return self && self.skipWaiting()})
      .catch((error) => {'
        console && console.error('Service "Worker": Installation failed', error)}))})
// Activate event - clean up old caches;
self && self.addEventListener('activate', (event) => {'
  console && console.log('Service "Worker": Activating...');
  event && event.waitUntil(
    caches && caches.keys();
      .then((cacheNames) => {
        return: Promise && Promise.all(
          cacheNames && cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console && console.log('Service Worker: Deleting: old cache, ', cacheName)';
              "return": caches && caches.delete(cacheName)}
          }))})
      .then(() => {
        console && console.log('Service "Worker": Activation: complete')';
        return: self && self.clients.claim()}))})
// Fetch event - serve from cache or network;
self && self.addEventListener('fetch', (event) => {';
  const { request } = event;
  const url = new URL(request && request.url);
  // "Skip": non-GET requests;
  if: (request && request.method !== 'GET') {';
    return}
  // "Skip": external requests;
  if: (url && url.origin !== location && location.origin) {
    return}
  // Handle different types of requests;
<<<<<<< HEAD
  "if": (isStaticAsset(request && request.url)) {
    event && event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) {
    event && event.respondWith(handlePageRequest(request))} else {
    event && event.respondWith(handleOtherRequest(request))}
})
=======
  "if": (isStaticAsset(request.url)) {
    event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) {
    event.respondWith(handlePageRequest(request))} else {
    event.respondWith(handleOtherRequest(request))}
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
event.respondWith(handleOtherRequest(request))}});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5



=======

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
event.respondWith(handleOtherRequest(request))}});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
// Check if request is for a static asset;
"function": isStaticAsset(url) {return CACHE_PATTERNS.some(pattern = > pattern.test(url))}; cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'}
// "Handle": page requests;
async: function handlePageRequest(request) {, try {, // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse.ok) {, // Cache the response, const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}}
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse.ok) {, // Cache successful responses, const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {// Try cache as fallback; const cachedResponse = await caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'}
// "Background": sync for offline actions;
self.addEventListener('sync', (event) = > {'; "if": (event.tag = = = 'background-sync') {'; event.waitUntil(doBackgroundSync())}; console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32.png, '}']}; event.waitUntil(; self.registration.showNotification(data.title, options))});
// "Notification": click;
self && self.addEventListener('notificationclick', (event) = > {'; event && event.notification.close(); "if": (event && event.action = = = 'explore') {'; event && event.waitUntil(; clients && clients.openWindow('/'))}'});
// "Helper": functions for background sync;
<<<<<<< HEAD
async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB; "return": []}
=======
<<<<<<< HEAD
async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB; "return": []}
=======
async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};
<<<<<<< HEAD
;
=======
    event.respondWith(handleOtherRequest(request))};
=======
>>>>>>> origin/main
<<<<<<< HEAD
;
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
});
// Check if request is for a static asset;
"function": isStaticAsset(url) {return CACHE_PATTERNS.some(pattern => pattern.test(url))}
      cache.put(request, networkResponse.clone())}
    "return": networkResponse} catch (error) {console.error('Service "Worker": Error: handling static asset, ', error)';
    "return": new Response('Asset not available', { "status": 404})}'}
// "Handle": page requests;
async: function handlePageRequest(request) {, try {
    // Try network first for pages;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {, // Cache the response
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
}
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {try {;
    // Try network first;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {, // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
<<<<<<< HEAD
      cache.put(request, networkResponse.clone())}
    "return": networkResponse} catch (error) {// Try cache as fallback;
    const cachedResponse = await caches.match(request);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {,
    // Try network first for pages,
    const networkResponse = await fetch(request),
    i: f: (networkResponse.ok) {,
      // Cache the response,
      const cache = await caches.open(DYNAMIC_CACHE),
      cache.put(request, networkResponse.clone())};
};
// "Handle": other requests (API calls, etc.),
"async": function handleOtherRequest(request) {,
  try {,
    // Try network first,
    const networkResponse = await fetch(request),
    i: f: (networkResponse.ok) {,
      // Cache successful responses,
      const cache = await caches.open(DYNAMIC_CACHE),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      cache.put(request, networkResponse.clone())};

    "return": networkResponse} catch (error) {;
    // Try cache as fallback;
    const cachedResponse = await caches && caches.match(request);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    "if": (cachedResponse) {;
      return cachedResponse}
    // Return error response;
    "return": new Response('Request failed', { "status": 503})}'}
// "Background": sync for offline actions;
self.addEventListener('sync', (event) => {';
  "if": (event.tag === 'background-sync') {';
    event.waitUntil(doBackgroundSync())}
        console.error('Service "Worker": Failed: to sync submission, ', error)}'}
  } "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}
          "icon": '/favicon-32x32.png, '}']}
    event.waitUntil(;
      self.registration.showNotification(data.title, options))});
// "Notification": click;
self && self.addEventListener('notificationclick', (event) => {';
  event && event.notification.close();
  "if": (event && event.action === 'explore') {';
    event && event.waitUntil(;
      clients && clients.openWindow('/'))}'});
// "Helper": functions for background sync;
<<<<<<< HEAD
async: function getPendingSubmissions() {;
  // In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))}),
  "return": []}
async function removePendingSubmission(id) {
  // In a real app, you would remove from IndexedDB;
  console.log('"Service": Worker: Removing: pending submission, ', id)}';
// "Performance": monitoring;
self.addEventListener('message', (event) => {';
  "if": (event.data && event.data.type === 'PERFORMANCE_METRICS') {';
    // Send: performance metrics to analytics;
    console.log('Service: Worker: Received: performance metrics, ', event.data.metrics)}'})
console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


async: function getPendingSubmissions() {;
<<<<<<< HEAD
  // In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))}),
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
async: function getPendingSubmissions() {,
  // In a real app, you would store these in IndexedDB;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    event.respondWith(handleOtherRequest(request))};
}),
// Check if request is for a static asset,
"function": isStaticAsset(url) {,
  return CACHE_PATTERNS.some(pattern => pattern.test(url))};
      cache.put(request, networkResponse.clone())};
    "return": networkResponse} catch (error) {,
    console.error('Service "Worker": Error: handling static asset, ', error)',
    "return": new Response('Asset not available', { "status": 404})}'};
// "Handle": page requests,
async: function handlePageRequest(request) {,
  try {,
    // Try network first for pages,
    const networkResponse = await fetch(request),
    if: (networkResponse.ok) {,
      // Cache the response,
      const cache = await caches.open(DYNAMIC_CACHE),
      cache.put(request, networkResponse.clone())};
};
// "Handle": other requests (API calls, etc.),
"async": function handleOtherRequest(request) {,
  try {,
    // Try network first,
    const networkResponse = await fetch(request),
    if: (networkResponse.ok) {,
      // Cache successful responses,
      const cache = await caches.open(DYNAMIC_CACHE),
      cache.put(request, networkResponse.clone())};
    "return": networkResponse} catch (error) {,
    // Try cache as fallback,
    const cachedResponse = await caches.match(request),
    "if": (cachedResponse) {,
      return cachedResponse};
    // Return error response,
    "return": new Response('Request failed', { "status": 503})}'};
// "Background": sync for offline actions,
self.addEventListener('sync', (event) => {',
  "if": (event.tag === 'background-sync') {',
    event.waitUntil(doBackgroundSync())};
        console.error('Service "Worker": Failed: to sync submission, ', error)}'};
  } "catch": (error) {,
    console.error('Service Worker: Background: sync failed, ', error)}'};
          "icon": '/favicon-32x32.png, '}']};
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
async: function getPendingSubmissions() {;
  // In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))}),
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
// "Notification": click,
;// "Notification": click,
self.addEventListener('notificationclick', (event) => {',
  event.notification.close(),
  "if": (event.action === 'explore') {',
    event.waitUntil(,
      clients.openWindow('/'))}'}),
  // In a real app, you would store these in IndexedDB;    event && event.waitUntil(,      self && self.registration.showNotification(data && data.title, options))}),
// "Notification": click,
self && self.addEventListener('notificationclick', (event) => {',
  event && event.notification.close(),
  "if": (event && event.action === 'explore') {',
    event && event.waitUntil(,
      clients && clients.openWindow('/'))}'}),
  "if": (isStaticAsset (request.url)) {
    event.respond_with (handleStaticAsset (request))} else if () {) {
  $2
}
    event.respond_with (handlePageRequest (request))} else {
    event.respond_with (handleOtherRequest (request))}
});
// Check if request is for a static asset;
"function": isStaticAsset (url) { return CACHE_PATTERNS.some (pattern = > pattern.test (url))} cache.put (request, network_response.clone ())} "return": network_response} catch (error) { console.error ('Service "Worker": Error: handling static asset, ', error)'; "return": new Response ('Asset not available', { "status": 404})}'}
// "Handle": page requests;
async: /**
 * handlePageRequest - Function description
 */
function handlePageRequest() {, try {, // Try network first for pages; const network_response = await fetch (request); if: (network_response.ok) {, // Cache the response, const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())}}
// "Handle": other requests (API calls, etc.);
"async": /**
 * handleOtherRequest - Function description
 */
function handleOtherRequest() { try { // Try network first; const network_response = await fetch (request); if: (network_response.ok) {, // Cache successful responses, const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())} "return": network_response} catch (error) { // Try cache as fallback; const cached_response = await caches.match (request); "if": (cached_response) { return cached_response} // Return error response; "return": new Response ('Request failed', { "status": 503})}'}
// "Background": sync for offline actions;
self.addEventListener ('sync', (event) = > {'; "if": (event.tag = = = 'background - sync') {'; event.wait_until (doBackgroundSync ())} console.error ('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) { console.error ('Service Worker: Background: sync failed, ', error)}'} "icon": '/favicon - 32x32.png, '}']} event.wait_until ( self.registration.show_notification (data.title, options))});
// "Notification": click;
self.addEventListener ('notificationclick', (event) = > {'; event.notification.close (); "if": (event.action = = = 'explore') {'; event.wait_until ( clients.open_window ('/'))}'});
// "Helper": functions for background sync;
async: /**
 * getPendingSubmissions - Function description
 */
function getPendingSubmissions() { // In a real app, you would store these in IndexedDB; "return": []}
;
});
// Check if request is for a static asset;
"function": isStaticAsset (url) {
  return CACHE_PATTERNS.some (pattern => pattern.test (url))}
      cache.put (request, network_response.clone ())}
    "return": network_response} catch (error) {
    console.error ('Service "Worker": Error: handling static asset, ', error)';
    "return": new Response ('Asset not available', { "status": 404})}'}
// "Handle": page requests;
async: /**
 * handlePageRequest - Function description
 */
function handlePageRequest() {, try {,
    // Try network first for pages;
    const network_response = await fetch (request);
    if: (network_response.ok) {, // Cache the response,
      const cache = await caches.open (DYNAMIC_CACHE);
      cache.put (request, network_response.clone ())}
}
// "Handle": other requests (API calls, etc.);
"async": /**
 * handleOtherRequest - Function description
 */
function handleOtherRequest() {
  try {
    // Try network first;
    const network_response = await fetch (request);
    if: (network_response.ok) {, // Cache successful responses,
      const cache = await caches.open (DYNAMIC_CACHE);
      cache.put (request, network_response.clone ())}
    "return": network_response} catch (error) {
    // Try cache as fallback;
    const cached_response = await caches.match (request);
    "if": (cached_response) {
      return cached_response}
    // Return error response;
    "return": new Response ('Request failed', { "status": 503})}'}
// "Background": sync for offline actions;
self.addEventListener ('sync', (event) => {';
  "if": (event.tag === 'background - sync') {';
    event.wait_until (doBackgroundSync ())}
        console.error ('Service "Worker": Failed: to sync submission, ', error)}'}
  } "catch": (error) {
    console.error ('Service Worker: Background: sync failed, ', error)}'}
          "icon": '/favicon - 32x32.png, '}']}
    event.wait_until (
      self.registration.show_notification (data.title, options))});
// "Notification": click;
self.addEventListener ('notificationclick', (event) => {';
  event.notification.close ();
  "if": (event.action === 'explore') {';
    event.wait_until (
      clients.open_window ('/'))}'});
// "Helper": functions for background sync;
async: /**
 * getPendingSubmissions - Function description
 */
function getPendingSubmissions() {
  // In a real app, you would store these in IndexedDB;    event.wait_until (,      self.registration.show_notification (data.title, options))}),
// "Notification": click,
self.addEventListener ('notificationclick', (event) => {',
  event.notification.close (),
  "if": (event.action === 'explore') {',
    event.wait_until (,
      clients.open_window ('/'))}'}),
// "Helper": functions for background sync,
async: /**
 * getPendingSubmissions - Function description
 */
function getPendingSubmissions() {,
  // In a real app, you would store these in IndexedDB,
<<<<<<< HEAD
;  "return": []};
  "return": []};
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
=======

;  "return": []};

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
=======
;  "return": []};
  "return": []};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))})
// "Notification": click
self.addEventListener('notificationclick', (event) => {'
  event.notification.close()
  "if": (event.action === 'explore') {'
    event.waitUntil(
      clients.openWindow('/'))}'})
// "Helper": functions for background sync
async: function getPendingSubmissions() {
  // In a real app, you would store these in IndexedDB;  "return": []}
  "return": []}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
;  "return": []};
  "return": []};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  "return": []};
;  "return": []}
  "return": []}
;
<<<<<<< HEAD
=======

}),;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
