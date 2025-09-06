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
  if: (url.origin !== location.origin) {
    return}
  // Handle different types of requests;
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
;  "return": []}
  "return": []}
;