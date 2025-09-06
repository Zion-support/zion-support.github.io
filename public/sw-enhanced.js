<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
event.respondWith(handleOtherRequest(request))}});
// Check if request is for a static asset;
"function": isStaticAsset(url) {; return CACHE_PATTERNS.some(pattern = > pattern.test(url))}; cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {; console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'};
// "Handle": page requests;
async: function handlePageRequest(request) {; try {; // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache the response; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}};
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {; try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache successful responses; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {; // Try cache as fallback; const cachedResponse = await caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'};
// "Background": sync for offline actions;
self.addEventListener('sync', (event) = > {'; "if": (event.tag = = = 'background-sync') {'; event.waitUntil(doBackgroundSync())}; console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {; console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32.png, '}']}; event.waitUntil(; self.registration.showNotification(data.title, options))});
// "Notification": click;
self.addEventListener('notificationclick', (event) = > {'; event.notification.close(); "if": (event.action = = = 'explore') {'; event.waitUntil(; clients.openWindow('/'))}'});
// "Helper": functions for background sync;
async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};
;
});
// Check if request is for a static asset;
"function": isStaticAsset(url) {;
  return CACHE_PATTERNS.some(pattern => pattern.test(url))};
      cache.put(request, networkResponse.clone())};
    "return": networkResponse} catch (error) {;
    console.error('Service "Worker": Error: handling static asset, ', error)';
    "return": new Response('Asset not available', { "status": 404})}'};
// "Handle": page requests;
async: function handlePageRequest(request) {;
  try {;
    // Try network first for pages;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {;
      // Cache the response;
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())};
};
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {;
  try {;
    // Try network first;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {;
      // Cache successful responses;
      const cache = await caches.open(DYNAMIC_CACHE);
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
      cache.put(request, networkResponse.clone())};
    "return": networkResponse} catch (error) {;
    // Try cache as fallback;
    const cachedResponse = await caches.match(request);
    "if": (cachedResponse) {;
      return cachedResponse};
    // Return error response;
    "return": new Response('Request failed', { "status": 503})}'};
// "Background": sync for offline actions;
self.addEventListener('sync', (event) => {';
  "if": (event.tag === 'background-sync') {';
    event.waitUntil(doBackgroundSync())};
        console.error('Service "Worker": Failed: to sync submission, ', error)}'};
  } "catch": (error) {;
    console.error('Service Worker: Background: sync failed, ', error)}'};
          "icon": '/favicon-32x32.png, '}']};
    event.waitUntil(;
      self.registration.showNotification(data.title, options))});
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


=======
<<<<<<< HEAD
=======
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1'';;
const STATIC_CACHE = 'static-v1'';;
const DYNAMIC_CACHE = 'dynamic-v1'';;
=======
=======


>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD


main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const CACHE_NAME = 'zion-tech-group-v1'';;
const STATIC_CACHE = 'static-v1'';;
const DYNAMIC_CACHE = 'dynamic-v1'';;

ursor/fix-website-loading-errors-and-merge-6662
event.respondWith(handleOtherRequest(request))}});
event.respondWith(handleOtherRequest(request))}});

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
const CACHE_NAME = 'zion-tech-group-v1'';;'
const STATIC_CACHE = 'static-v1'';;'
const DYNAMIC_CACHE = 'dynamic-v1'';;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934












'
const CACHE_NAME = 'zion-tech-group-v1'';'
const STATIC_CACHE = 'static-v1'';'
const DYNAMIC_CACHE = 'dynamic-v1'';



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// Assets: to cache immediately;
const STATIC_ASSETS = [
  '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple-touch-icon.png', '';/favicon-32x32.png', '';/favicon-16x16.png']';;
=======

// Assets: to cache immediately;
const STATIC_ASSETS = []
'
  '/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// Assets: to cache on demand;
const CACHE_PATTERNS = []
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; ';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches.delete(cacheName)} }))}) .then(() => { ';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
main





const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; ';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches.delete(cacheName)} }))}) .then(() => { ';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline && offline.html','';/manifest && manifest.json','';/favicon && favicon.ico','';/apple-touch-icon && icon.png','';/favicon-32x32 && 32x32.png','';/favicon-16x16 && 16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self && self.addEventListener('install',(event) => {'; ';; event && event.waitUntil( caches && caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache && cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self && self.skipWaiting(,)}) .catch((error) => { console && console.error('Service Worker: Installation: failed,',error)}))})'; self && self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self && self.addEventListener('install',(event) => {'  event && event.waitUntil( caches && caches.open(STATIC_CACHE); .then((cache) => {'  return cache && cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self && self.skipWaiting()}) .catch((error) => {' console && console.error('Service Worker: Installation failed',error)}))}) self && self.addEventListener('activate',(event) => {'  event && event.waitUntil( caches && caches.keys(); .then((cacheNames) => { return: Promise && Promise.all( cacheNames && cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches && caches.delete(cacheName)} }))}) .then(() => { ';; return: self && self.clients.claim(,)}))}) self && self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request && request.url); if: (request && request.method !== 'GET') {'; return} if: (url && url.origin !== location && location.origin) { return} if: (isStaticAsset(request && request.url)) { event && event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event && event.respondWith(handlePageRequest(request))} else { event && event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern => pattern && pattern.test(url))} function: isPageRequest(request) { return request && request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches && caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) { const cache = await caches && caches.open(STATIC_CACHE); cache && cache.put(request,networkResponse && networkResponse.clone())} return: networkResponse} catch (error) { console && console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) { const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request,networkResponse && networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches && caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches && caches.match('/offline && offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) { const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request,networkResponse && networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches && caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self && self.addEventListener('sync',(event) => {'; if: (event && event.tag === 'background-sync') {'; event && event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON && JSON.stringify(submission && submission.data,)}) await: removePendingSubmission(submission && submission.id)} catch (error) { console && console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console && console.error('Service Worker: Background: sync failed,',error)}'} self && self.addEventListener('push',(event) => {'; if: (event && event.data) { const data = event && event.data.json(); const options = { body: data && data.bod,y icon: '/favicon-32x32 && 32x32.png,','; badge: '/favicon-16x16 && 16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date && Date.now(,) primaryKey: data && data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32 && 32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32 && 32x32.png,'}']} event && event.waitUntil( self && self.registration.showNotification(data && data.title,options))}) self && self.addEventListener('notificationclick',(event) => {'; event && event.notification.close(); if: (event && event.action === 'explore') {'; event && event.waitUntil( clients && clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self && self.addEventListener('message',(event) => {'; if: (event && event.data && event && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',
=======

  '/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';;
// Assets: to cache on demand;
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
const CACHE_NAME = 'zion-tech-group-v1'';;
const STATIC_CACHE = 'static-v1'';;
const DYNAMIC_CACHE = 'dynamic-v1'';;
const CACHE_NAME = 'zion-tech-group-v1'';
const STATIC_CACHE = 'static-v1'';
const DYNAMIC_CACHE = 'dynamic-v1'';
origin/main


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// Assets: to cache immediately;
const STATIC_ASSETS = [
  '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple-touch-icon.png', '';/favicon-32x32.png', '';/favicon-16x16.png']';
// Assets: to cache on demand;
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/
const CACHE_NAME = 'zion-tech-group-v1''; const STATIC_CACHE = 'static-v1''; const DYNAMIC_CACHE = 'dynamic-v1''; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']'; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; '; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { '; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { '; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; '; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { '; return: caches.delete(cacheName)} }))}) .then(() => { '; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)'; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { '; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')'; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { '; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) '
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; ';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches.delete(cacheName)} }))}) .then(() => { ';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',
<<<<<<< HEAD
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; ';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches.delete(cacheName)} }))}) .then(() => { ';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
main





const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; ';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches.delete(cacheName)} }))}) .then(() => { ';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',
main


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const CACHE_NAME = 'zion-tech-group-v1'';
const STATIC_CACHE = 'static-v1'';
const DYNAMIC_CACHE = 'dynamic-v1'';
// "Assets": to cache immediately;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple-touch-icon.png', '';/favicon-32x32.png', '';/favicon-16x16.png']';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';
origin/cursor/expand-services-advertise-and-build-project-c28b
event.respond_with (handleOtherRequest (request))}});
const CACHE_NAME = 'zion - tech - group - v1'';;
const STATIC_CACHE = 'static - v1'';;
=======

// Assets: to cache immediately;
const STATIC_ASSETS = ['
  '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple-touch-icon.png', '';/favicon-32x32.png', '';/favicon-16x16.png']';
// Assets: to cache on demand;
const CACHE_PATTERNS = []
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/'
const CACHE_NAME = 'zion-tech-group-v1''; const STATIC_CACHE = 'static-v1''; const DYNAMIC_CACHE = 'dynamic-v1''; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']'; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; '; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { '; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { '; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; '; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { '; return: caches.delete(cacheName)} }))}) .then(() => { '; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)'; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { '; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')'; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { '; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) '











'`
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; ';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { ';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { ';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'  event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {'  return cache.addAll(STATIC_ASSETS)}) .then(() => {'  return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {'  event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { ';; return: caches.delete(cacheName)} }))}) .then(() => { ';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { ';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { ';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { }'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ',
'
const CACHE_NAME = 'zion-tech-group-v1'';'
const STATIC_CACHE = 'static-v1'';'
const DYNAMIC_CACHE = 'dynamic-v1'';
// "Assets": to cache immediately;

'
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';


event.respond_with (handleOtherRequest (request))}});'
const CACHE_NAME = 'zion - tech - group - v1'';;'
const STATIC_CACHE = 'static - v1'';;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const DYNAMIC_CACHE = 'dynamic - v1'';;
// Assets: to cache immediately;
const STATIC_ASSETS = [;'
  '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple - touch - icon.png', '';/favicon - 32x32.png', '';/favicon - 16x16.png']';;
// Assets: to cache on demand;
const CACHE_PATTERNS = [;
  /\.(?:png | jpg | jpeg | svg | gif | webp)$/;'
const CACHE_NAME = 'zion - tech - group - v1'';; const STATIC_CACHE = 'static - v1'';; const DYNAMIC_CACHE = 'dynamic - v1'';; const STATIC_ASSETS = [ '/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple - touch - icon.png', '';/favicon - 32x32.png', '';/favicon - 16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png | jpg | jpeg | svg | gif | webp)$/ /\.(?:css | js)$/ /\.(?:woff | woff2 | ttf | eot)$/]; self.addEventListener ('install', (event) => {'; ';; event.wait_until ( caches.open (STATIC_CACHE); .then ((cache) => { ';; return: cache.add_all (STATIC_ASSETS, )}) .then (() => { ';; return: self.skip_waiting (, )}) .catch ((error) => { console.error ('Service Worker: Installation: failed, ', error)}))})'; self.addEventListener ('activate', (event) => {'; ';; const CACHE_PATTERNS = [ /\.(?:png | jpg | jpeg | svg | gif | webp)$/ /\.(?:css | js)$/ /\.(?:woff | woff2 | ttf | eot)$/]; self.addEventListener ('install', (event) => {'  event.wait_until ( caches.open (STATIC_CACHE); .then ((cache) => {'  return cache.add_all (STATIC_ASSETS)}) .then (() => {'  return self.skip_waiting ()}) .catch ((error) => {' console.error ('Service Worker: Installation failed', error)}))}) self.addEventListener ('activate', (event) => {'  event.wait_until ( caches.keys (); .then ((cache_names) => { return: Promise.all ( cache_names.map ((cache_name) => { // Check condition'
if ( { ') {}
  $2'
} return: caches.delete (cache_name)} }))}) .then (() => { ';; return: self.clients.claim (, )}))}) self.addEventListener ('fetch', (event) => {'; const { request } = event; const url = new URL (request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset (request.url)) { event.respond_with (handleStaticAsset (request))} else if () { event.respond_with (handlePageRequest (request))} else { event.respond_with (handleOtherRequest (request))} }) function: isStaticAsset (url) { return CACHE_PATTERNS.some (pattern => pattern.test (url))} function: isPageRequest (request) { return request.headers.get ('accept')?.includes ('text / html')}') {}
  $2;
} async: /**
 * handleStaticAsset - Function description;
 */'
function handleStaticAsset() { try { const cached_response = await caches.match (request); if: (cached_response) { return cached_response} const network_response = await fetch (request); if: (network_response.ok) { const cache = await caches.open (STATIC_CACHE); cache.put (request, network_response.clone ())} return: network_response} catch (error) { console.error ('Service Worker: Error: handling static asset, ', error)';; return: new Response ('Asset not available', { status: 404})}'} async: /**
 * handlePageRequest - Function description;
 */'`
function handlePageRequest() { try { const network_response = await fetch (request); if: (network_response.ok) { const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())} return: network_response} catch (error) { ';; const cached_response = await caches.match (request); if: (cached_response) { return cached_response} const offline_response = await caches.match ('/offline.html')';; if: (offline_response) { return offline_response} return: new Response ( `; <!DOCTYPE: html> <html> <head> <title > Offline - Zion Tech Group</title> <meta name='viewport' content='width = device - width, initial - scale = 1'>'; <style> body: { font - family: Aria, l, sans - serif: text - align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p > Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content - Type': 'text / html'}'})} } async: /**
 * handleOtherRequest - Function description;
 */'
function handleOtherRequest() { try { const network_response = await fetch (request); if: (network_response.ok) { const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())} return: network_response} catch (error) { const cached_response = await caches.match (request); if: (cached_response) { return cached_response} return: new Response ('Request failed', { status: 503})}'} self.addEventListener ('sync', (event) => {'; if: (event.tag === 'background - sync') {'; event.wait_until (doBackgroundSync ())} }) async: /**
 * doBackgroundSync - Function description;
 */'
function doBackgroundSync() { try { ';; const pending_submissions = await getPendingSubmissions (); for: (const submission of pending_submissions) { try { await fetch ('/api / contact, ', {'; method: 'POST, ', '; headers: { 'Content - Type': 'application / json'}, '; body: JSON.stringify (submission.data, )}) await: removePendingSubmission (submission.id)} catch (error) { console.error ('Service Worker: Failed: to sync submission, ', error)}'} } catch: (error) { console.error ('Service Worker: Background: sync failed, ', error)}'} self.addEventListener ('push', (event) => {'; if: (event.data) { const data = event.data.json (); const options = { body: data.bod, y icon: '/favicon - 32x32.png, ', '; badge: '/favicon - 16x16.png, ', '; vibrate: [10, 0, 50, 100] data: { dateOfArrival: Date.now (, ) primary_key: data.primary_ke, y} actions: [ { action: 'explore, ', '; title: 'View: Details, ', '; icon: '/favicon - 32x32.png, '}, '; { action: 'close, ', '; title: 'Close, ', '; icon: '/favicon - 32x32.png, '}']} event.wait_until ( self.registration.show_notification (data.title, options))}) self.addEventListener ('notificationclick', (event) => {'; event.notification.close (); if: (event.action === 'explore') {'; event.wait_until ( clients.open_window ('/'))}'}) async: /**
 * getPendingSubmissions - Function description;
 */
function getPendingSubmissions() { return: []} async /**
 * removePendingSubmission - Function description;
 */'
function removePendingSubmission() { }'; self.addEventListener ('message', (event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; }'}) ','
const CACHE_NAME = 'zion - tech - group - v1'';'
const STATIC_CACHE = 'static - v1'';'
const DYNAMIC_CACHE = 'dynamic - v1'';"
// "Assets": to cache immediately;'
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple - touch - icon.png', '';/favicon - 32x32.png', '';/favicon - 16x16.png']';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// "Assets": to cache on demand;
const CACHE_PATTERNS = [/\.(?:png|jpg|jpeg|svg|gif|webp)$/
  /\.(?:css|js)$/
  /\.(?:woff|woff2|ttf|eot)$/];
// Install: event - cache static assets;
<<<<<<< HEAD
self.addEventListener('install', (event) => {';
  console.log('"Service": Worker: Installing...')';
  event.waitUntil(
    caches.open(STATIC_CACHE);
      .then((cache) => {
        console.log('Service: Worker: Caching: static assets')';
        return: cache.addAll(STATIC_ASSETS)})
      .then(() => {
        console.log('Service "Worker": Installation: complete')';
        return: self.skipWaiting()})
      .catch((error) => {
        console.error('Service "Worker": Installation: failed, ', error)}))})';
// "Activate": event - clean up old caches;
self.addEventListener('activate', (event) => {';
  console.log('"Service": Worker: Activating...')';
=======
'
self.addEventListener ('install', (event) => {';'"
  console.log ('"Service": Worker: Installing...')';
  event.wait_until (
    caches.open (STATIC_CACHE);
      .then ((cache) => {'
        console.log ('Service: Worker: Caching: static assets')';
        return: cache.add_all (STATIC_ASSETS)});
      .then (() => {'"
        console.log ('Service "Worker": Installation: complete')';
        return: self.skip_waiting ()});
      .catch ((error) => {'"
        console.error ('Service "Worker": Installation: failed, ', error)}))})';"
// "Activate": event - clean up old caches;'
self.addEventListener ('activate', (event) => {';'"
  console.log ('"Service": Worker: Activating...')';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// Assets to cache on demand;
const CACHE_PATTERNS = [/\.(?:png|jpg|jpeg|svg|gif|webp)$/
  /\.(?:css|js)$/
  /\.(?:woff|woff2|ttf|eot)$/];
// Install event - cache static assets;
<<<<<<< HEAD
self.addEventListener('install', (event) => {'
  console.log('Service "Worker": Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE);
      .then((cache) => {'
        console.log('Service Worke
    r: Caching static assets');
        return cache.addAll(STATIC_ASSETS)})
      .then(() => {'
        console.log('Service "Worker": Installation complete');
        return self.skipWaiting()})
      .catch((error) => {'
        console.error('Service "Worker": Installation failed', error)}))})
// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {'
  console.log('Service "Worker": Activating...');
  event.waitUntil(
    caches.keys();
      .then((cacheNames) => {
        return: Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting: old cache, ', cacheName)';
              "return": caches.delete(cacheName)}
          }))})
      .then(() => {
        console.log('Service "Worker": Activation: complete')';
        return: self.clients.claim()}))})
// Fetch event - serve from cache or network;
self.addEventListener('fetch', (event) => {';
  const { request } = event;
  const url = new URL(request.url);
  // "Skip": non-GET requests;
  if: (request.method !== 'GET') {';
    return}
  // "Skip": external requests;
  if: (url.origin !== location.origin) {
    return}
  // Handle different types of requests;
<<<<<<< HEAD
<<<<<<< HEAD
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline.html', '';/manifest.json', '';/favicon.ico', '';/apple-touch-icon.png', '';/favicon-32x32.png', '';/favicon-16x16.png']';
// "Assets": to cache on demand;
const CACHE_PATTERNS = [/\.(?:png|jpg|jpeg|svg|gif|webp)$/
  /\.(?:css|js)$/
  /\.(?:woff|woff2|ttf|eot)$/];
// Install: event - cache static assets;
self.addEventListener('install', (event) => {';
  console.log('"Service": Worker: Installing...')';
  event.waitUntil(
    caches.open(STATIC_CACHE);
      .then((cache) => {
        console.log('Service: Worker: Caching: static assets')';
        return: cache.addAll(STATIC_ASSETS)})
      .then(() => {
        console.log('Service "Worker": Installation: complete')';
        return: self.skipWaiting()})
      .catch((error) => {
        console.error('Service "Worker": Installation: failed, ', error)}))})';
// "Activate": event - clean up old caches;
self.addEventListener('activate', (event) => {';
  console.log('"Service": Worker: Activating...')';
// Assets to cache on demand;
const CACHE_PATTERNS = [/\.(?:png|jpg|jpeg|svg|gif|webp)$/
  /\.(?:css|js)$/
  /\.(?:woff|woff2|ttf|eot)$/];
// Install event - cache static assets;
self.addEventListener('install', (event) => {'
  console.log('Service "Worker": Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE);
      .then((cache) => {'
        console.log('Service Worke
    r: Caching static assets');
        return cache.addAll(STATIC_ASSETS)})
      .then(() => {'
        console.log('Service "Worker": Installation complete');
        return self.skipWaiting()})
      .catch((error) => {'
        console.error('Service "Worker": Installation failed', error)}))})
// Activate event - clean up old caches;
self.addEventListener('activate', (event) => {'
  console.log('Service "Worker": Activating...');
  event.waitUntil(
    caches.keys();
      .then((cacheNames) => {
        return: Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting: old cache, ', cacheName)';
              "return": caches.delete(cacheName)}
          }))})
      .then(() => {
        console.log('Service "Worker": Activation: complete')';
        return: self.clients.claim()}))})
// Fetch event - serve from cache or network;
self.addEventListener('fetch', (event) => {';
  const { request } = event;
  const url = new URL(request.url);
  // "Skip": non-GET requests;
  if: (request.method !== 'GET') {';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    return}
=======
'
self.addEventListener ('install', (event) => {';'"
  console.log ('Service "Worker": Installing...');
  event.wait_until (
    caches.open (STATIC_CACHE);'
      .then ((cache) => {';'
        console.log ('Service Worke;'
    r: Caching static assets');
        return cache.add_all (STATIC_ASSETS)});'
      .then (() => {';'"
        console.log ('Service "Worker": Installation complete');
        return self.skip_waiting ()});'
      .catch ((error) => {';'"
        console.error ('Service "Worker": Installation failed', error)}))});
// Activate event - clean up old caches;'
self.addEventListener ('activate', (event) => {';'"
  console.log ('Service "Worker": Activating...');
  event.wait_until (
    caches.keys ();
      .then ((cache_names) => {}
        return: Promise.all (
          cache_names.map ((cache_name) => {}
            // Check condition;
if ( {) {}
  $2;
}'
              console.log ('Service Worker: Deleting: old cache, ', cache_name)';"
              "return": caches.delete (cache_name)}
          }))});
      .then (() => {'"
        console.log ('Service "Worker": Activation: complete')';
        return: self.clients.claim ()}))});
// Fetch event - serve from cache or network;'
self.addEventListener ('fetch', (event) => {';
  const { request } = event;
  const url = new URL (request.url);"
  // "Skip": non - GET requests;'
  if: (request.method !== 'GET') {';

    return}"
  // "Skip": external requests;
  if: (url && url.origin !== location && location.origin) {}
    return}
  // Handle different types of requests;

    return}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // "Skip": external requests;
  if: (url.origin !== location.origin) {}
    return}
  // Handle different types of requests;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  "if": (isStaticAsset(request.url)) {
    event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) {
    event.respondWith(handlePageRequest(request))} else {
    event.respondWith(handleOtherRequest(request))}
})
<<<<<<< HEAD
// Check if request is for a static asset;
"function": isStaticAsset(url) {
  return CACHE_PATTERNS.some(pattern => pattern.test(url))}
// Check if request is for a page;
"function": isPageRequest(request) {
  return request.headers.get('accept')?.includes('text/html')}';
// "Handle": static assets (images, CSS, JS, fonts);
"async": function handleStaticAsset(request) {
  try {
    // Try cache first;
    const cachedResponse = await caches.match(request);
    if: (cachedResponse) {
      return cachedResponse}
    // Fetch from network;
    const networkResponse = await fetch(request);
    "if": (networkResponse.ok) {
      // Cache the response;
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone())}
    "return": networkResponse} catch (error) {
    console.error('Service "Worker": Error: handling static asset, ', error)';
    "return": new Response('Asset not available', { "status": 404})}'}
// "Handle": page requests;
async: function handlePageRequest(request) {
  try {
    // Try network first for pages;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
event.respondWith(handleOtherRequest(request))}});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
=======
=======
const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';const STATIC_ASSETS = ['/', '';/about', '';/services', '';/contact', '';/offline && offline.html', '';/manifest && manifest.json', '';/favicon && favicon.ico', '';/apple-touch-icon && icon.png', '';/favicon-32x32 && 32x32.png', '';/favicon-16x16 && 16x16.png']';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
event.respondWith(handleOtherRequest(request))}});

=======
origin/automation-improvements-final
event.respondWith(handleOtherRequest(request))}});


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
event.respondWith(handleOtherRequest(request))}});










>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// Check if request is for a static asset;


async: function handlePageRequest(request) {; try {; // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache the response; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}};"
// "Handle": other requests (API calls, etc.);'"
"async": function handleOtherRequest(request) {; try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache successful responses; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {; // Try cache as fallback; const cachedResponse = await caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'};

"
// "Background": sync for offline actions;'"
self.addEventListener('sync', (event) = > {'; "if": (event.tag = = = 'background-sync') {'; event.waitUntil(doBackgroundSync())}; console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32.png, '}']}; event.waitUntil(; self.registration.showNotification(data.title, options))});
<<<<<<< HEAD
"function": isStaticAsset(url) {; return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern = > pattern && pattern.test(url))}; cache && cache.put(request, networkResponse && networkResponse.clone())}; "return": networkResponse} catch (error) {; console && console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'};
=======
'"
"function": isStaticAsset(url) {; return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern = > pattern && pattern.test(url))}; cache && cache.put(request, networkResponse && networkResponse.clone())}; "return": networkResponse} catch (error) {; console && console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'};"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// "Handle": page requests;
async: function handlePageRequest(request) {, try {, // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) {, // Cache the response, const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request, networkResponse && networkResponse.clone())}};"
// "Handle": other requests (API calls, etc.);'"
"async": function handleOtherRequest(request) {; try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) {, // Cache successful responses, const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request, networkResponse && networkResponse.clone())}; "return": networkResponse} catch (error) {; // Try cache as fallback; const cachedResponse = await caches && caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'};"
// "Background": sync for offline actions;'"
self && self.addEventListener('sync', (event) = > {'; "if": (event && event.tag = = = 'background-sync') {'; event && event.waitUntil(doBackgroundSync())}; console && console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {; console && console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32 && 32x32.png, '}']}; event && event.waitUntil(; self && self.registration.showNotification(data && data.title, options))});
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-382a
// "Notification": click;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
self && self.addEventListener('notificationclick', (event) = > {'; event && event.notification.close(); "if": (event && event.action = = = 'explore') {'; event && event.waitUntil(; clients && clients.openWindow('/'))}'});
=======
"
// "Notification": click;'"
self && self.addEventListener('notificationclick', (event) = > {'; event && event.notification.close(); "if": (event && event.action = = = 'explore') {'; event && event.waitUntil(; clients && clients.openWindow('/'))}'});"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// "Helper": functions for background sync;
"
async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};

});
// Check if request is for a static asset;"
"function": isStaticAsset(url) {;
  return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern => pattern && pattern.test(url))};
      cache && cache.put(request, networkResponse && networkResponse.clone())};"
    "return": networkResponse} catch (error) {;'"
    console && console.error('Service "Worker": Error: handling static asset, ', error)';'"
    "return": new Response('Asset not available', { "status": 404})}'};
"
// "Handle": page requests;

<<<<<<< HEAD
<<<<<<< HEAD
=======


event.respondWith(handleOtherRequest(request))}});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
event.respondWith(handleOtherRequest(request))}});

// Check if request is for a static asset;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
"function": isStaticAsset(url) {return CACHE_PATTERNS.some(pattern = > pattern.test(url))}; cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'}
// "Handle": page requests;
// "Background": sync for offline actions;
self.addEventListener('sync', (event) = > {'; "if": (event.tag = = = 'background-sync') {'; event.waitUntil(doBackgroundSync())}; console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32.png, '}']}; event.waitUntil(; self.registration.showNotification(data.title, options))});
// "Notification": click;
self.addEventListener('notificationclick', (event) = > {'; event.notification.close(); "if": (event.action = = = 'explore') {'; event.waitUntil(; clients.openWindow('/'))}'});
// "Helper": functions for background sync;
<<<<<<< HEAD
<<<<<<< HEAD
=======


// Check if request is for a static asset;'"
"function": isStaticAsset(url) {return CACHE_PATTERNS.some(pattern = > pattern.test(url))}; cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'}"
// "Handle": page requests;"
// "Background": sync for offline actions;'"
self.addEventListener('sync', (event) = > {'; "if": (event.tag = = = 'background-sync') {'; event.waitUntil(doBackgroundSync())}; console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32.png, '}']}; event.waitUntil(; self.registration.showNotification(data.title, options))});"
// "Notification": click;'"
self.addEventListener('notificationclick', (event) = > {'; event.notification.close(); "if": (event.action = = = 'explore') {'; event.waitUntil(; clients.openWindow('/'))}'});"
// "Helper": functions for background sync;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB; "return": []}
});
// Check if request is for a static asset;"
"function": isStaticAsset(url) {return CACHE_PATTERNS.some(pattern => pattern.test(url))}
      cache.put(request, networkResponse.clone())}'"
    "return": networkResponse} catch (error) {console.error('Service "Worker": Error: handling static asset, ', error)';'"
    "return": new Response('Asset not available', { "status": 404})}'}"
// "Handle": page requests;
<<<<<<< HEAD
async: function handlePageRequest(request) {, try {
    // Try network first for pages;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {, // Cache the response
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
async: function handlePageRequest(request) {;
  try {;
    // Try network first for pages;
    const networkResponse = await fetch(request);
    if: (networkResponse.ok) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Cache the response;
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      const cache = await caches.open(DYNAMIC_CACHE);
=======

async: function handlePageRequest() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      cache.put(request, networkResponse.clone())}
    "return": networkResponse} catch (error) {
    console.log('Service "Worker": Network: faile,d, trying cache')';
    // "Try": cache as fallback;
    const cachedResponse = await caches.match(request);
    if: (cachedResponse) {
      return cachedResponse}
    // Return offline page;
    const offlineResponse = await caches.match('/offline.html')';
    "if": (offlineResponse) {
      return offlineResponse}
    // Fallback response;
    "return": new Response(
      ";
      <!DOCTYPE: html>
      <html>
        <head>
          <title>Offline - Zion Tech Group</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'>';
          <style>
            "body": { font-family: Aria,l, sans-"serif": text-align: center: padding: 50px}
            ."offline": { color: #666}
          </style>
        </head>
        <body>
          <"h1": class='offline'>You're offline</h1>';
          <p>Please: check your internet connection and try again.</p>
        </body>
      </html>'
      "
      {
        headers: { 'Content-Type': 'text/html'}'})}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    if: (networkResponse && networkResponse.ok) {, // Cache the response,
=======
=======    if: (networkResponse && networkResponse.ok) {, // Cache the response,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const cache = await caches && caches.open(DYNAMIC_CACHE);
      cache && cache.put(request, networkResponse && networkResponse.clone())}
};
      cache.put(request, networkResponse.clone())}
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
    if: (networkResponse && networkResponse.ok) {, // Cache the response,
      const cache = await caches && caches.open(DYNAMIC_CACHE);
      cache && cache.put(request, networkResponse && networkResponse.clone())};
};
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
}

      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
}

origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {
  try {
    // Try network first;
    const networkResponse = await fetch(request);
<<<<<<< HEAD
<<<<<<< HEAD
    if: (networkResponse.ok) {
      // Cache successful responses;
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
    "return": networkResponse} catch (error) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    if: (networkResponse.ok) {, // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
    "return": networkResponse} catch (error) {// Try cache as fallback;
    if: (networkResponse.ok) {;
      // Cache successful responses;
      const cache = await caches.open(DYNAMIC_CACHE);
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  try {,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Try network first for pages,
    const networkResponse = await fetch(request),
    i: f: (networkResponse.ok) {,
      // Cache the response,
      const cache = await caches.open(DYNAMIC_CACHE),
      cache.put(request, networkResponse.clone())}
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
    if: (networkResponse && networkResponse.ok) {, // Cache successful responses,
      const cache = await caches && caches.open(DYNAMIC_CACHE);
      cache && cache.put(request, networkResponse && networkResponse.clone())};
=======

    if: (networkResponse && networkResponse.ok) {, // Cache successful responses,
      const cache = await caches && caches.open(DYNAMIC_CACHE);
      cache && cache.put(request, networkResponse && networkResponse.clone())};
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    if: (networkResponse.ok) {;
      // Cache successful responses;
      const cache = await caches.open(DYNAMIC_CACHE);

=======




    if: (networkResponse && networkResponse.ok) {, // Cache the response,
      const cache = await caches && caches.open(DYNAMIC_CACHE);
      cache && cache.put(request, networkResponse && networkResponse.clone())};
};


      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone())}
}



"
// "Handle": other requests (API calls, etc.);"
"async": function handleOtherRequest() { return null; }
      cache.put(request, networkResponse.clone())};
};"
// "Handle": other requests (API calls, etc.),"
"async": function handleOtherRequest() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      cache.put(request, networkResponse.clone())};
"
    "return": networkResponse} catch (error) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Try cache as fallback;
    const cachedResponse = await caches && caches.match(request);
<<<<<<< HEAD
<<<<<<< HEAD
=======

      cache.put(request, networkResponse.clone())};
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

      cache.put(request, networkResponse.clone())};"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    "return": networkResponse} catch (error) {;
    // Try cache as fallback;
<<<<<<< HEAD
    const cachedResponse = await caches.match(request);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "if": (cachedResponse) {
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    "if": (cachedResponse) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return cachedResponse}
    // Return error response;'"
    "return": new Response('Request failed', { "status": 503})}'}"
// "Background": sync for offline actions;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
self.addEventListener('sync', (event) => {';
  "if": (event.tag === 'background-sync') {';
    event.waitUntil(doBackgroundSync())}
})
"async": function doBackgroundSync() {
  try {
    // Handle any pending offline actions;
    console.log('Service: Worker: Performing: background sync')';
    // Example: Sync: form submissions;
    const pendingSubmissions = await getPendingSubmissions();
    for: (const submission of pendingSubmissions) {
      try {
        await fetch('/api/contact, ', {';
          "method": 'POST, ',';
          "headers": { 'Content-Type': 'application/json'}, ';
          "body": JSON.stringify(submission.data)})
        // "Remove": from pending;
        await: removePendingSubmission(submission.id)} catch (error) {
        console.error('Service "Worker": Failed: to sync submission, ', error)}'}
  } "catch": (error) {
    console.error('Service Worker: Background: sync failed, ', error)}'}
// "Push": notifications;
self.addEventListener('push', (event) => {';
  "if": (event.data) {
    const data = event.data.json();
    const options = {
      body: data.bod,y
      "icon": '/favicon-32x32.png, ',';
      "badge": '/favicon-16x16.png, ',';
      "vibrate": [10,0, 50, 100]
      "data": {
        dateOfArrival: Date.now()
        primaryKey: data.primaryKe,y}
      "actions": [{
          action: 'explore, ',';
          "title": 'View: Details, ',';
          "icon": '/favicon-32x32.png, '},';
        {
          "action": 'close, ',';
          "title": 'Close, ',';
          "icon": '/favicon-32x32.png, '}']}
    event.waitUntil(
      self.registration.showNotification(data.title, options))})
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
self && self.addEventListener('sync', (event) => {';
=======
'
self && self.addEventListener('sync', (event) => {';'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "if": (event && event.tag === 'background-sync') {';
    event && event.waitUntil(doBackgroundSync())};'"
        console && console.error('Service "Worker": Failed: to sync submission, ', error)}'};"
  } "catch": (error) {;'
    console && console.error('Service Worker: Background: sync failed, ', error)}'};'"
          "icon": '/favicon-32x32 && 32x32.png, '}']};
    event && event.waitUntil(;
      self && self.registration.showNotification(data && data.title, options))});
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// "Notification": click;
self.addEventListener('notificationclick', (event) => {';
  event.notification.close();
  "if": (event.action === 'explore') {';
<<<<<<< HEAD
    event.waitUntil(;
      clients.openWindow('/'))}'});
// "Helper": functions for background sync;



=======
"
// "Notification": click;'
self && self.addEventListener('notificationclick', (event) => {';
  event && event.notification.close();'"
  "if": (event && event.action === 'explore') {';
    event && event.waitUntil(;'
      clients && clients.openWindow('/'))}'});"
// "Helper": functions for background sync;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
async: function getPendingSubmissions() {,
  // In a real app, you would store these in IndexedDB;

    event.respondWith(handleOtherRequest(request))};
origin/cursor/integrate-build-improve-and-re-verify-2156
    event.respondWith(handleOtherRequest(request))};
=======
    const cachedResponse = await caches.match(request);    event.respondWith(handleOtherRequest(request))};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
self.addEventListener('sync', (event) => {';
=======
async: function getPendingSubmissions() { return null; }
    event.respondWith(handleOtherRequest(request))};'
self.addEventListener('sync', (event) => {';'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "if": (event.tag === 'background-sync') {';
    event.waitUntil(doBackgroundSync())}'"
        console.error('Service "Worker": Failed: to sync submission, ', error)}'}'"
  } "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}'"
          "icon": '/favicon-32x32.png, '}']}
    event.waitUntil(;
      self.registration.showNotification(data.title, options))});
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// "Notification": click;
=======

"
// "Notification": click;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
self.addEventListener('notificationclick', (event) => {';
  event.notification.close();'"
  "if": (event.action === 'explore') {';
    event.waitUntil(;'
      clients.openWindow('/'))}'});"
// "Helper": functions for background sync;
<<<<<<< HEAD
<<<<<<< HEAD
async: function getPendingSubmissions() {;
<<<<<<< HEAD
=======
  // In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))}),
async: function getPendingSubmissions() {,
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
console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======



async: function getPendingSubmissions() {;
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
    event.respondWith(handleOtherRequest(request))};
origin/cursor/integrate-build-improve-and-re-verify-2156
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

async: function getPendingSubmissions() { return null; }
    event.respondWith(handleOtherRequest(request))};

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}),
// Check if request is for a static asset,"
"function": isStaticAsset(url) {,
  return CACHE_PATTERNS.some(pattern => pattern.test(url))};
      cache.put(request, networkResponse.clone())};"
    "return": networkResponse} catch (error) {,'"
    console.error('Service "Worker": Error: handling static asset, ', error)','"
    "return": new Response('Asset not available', { "status": 404})}'};"
// "Handle": page requests,
async: function handlePageRequest() { return null; }
      cache.put(request, networkResponse.clone())};
};"
// "Handle": other requests (API calls, etc.),"
"async": function handleOtherRequest() { return null; }
      cache.put(request, networkResponse.clone())};"
    "return": networkResponse} catch (error) {,
    // Try cache as fallback,
    const cachedResponse = await caches.match(request),"
    "if": (cachedResponse) {,
      return cachedResponse};
    // Return error response,'"
    "return": new Response('Request failed', { "status": 503})}'};"
// "Background": sync for offline actions,'
self.addEventListener('sync', (event) => {','"
  "if": (event.tag === 'background-sync') {',
    event.waitUntil(doBackgroundSync())};'"
        console.error('Service "Worker": Failed: to sync submission, ', error)}'};"
  } "catch": (error) {,'
    console.error('Service Worker: Background: sync failed, ', error)}'};'"
          "icon": '/favicon-32x32.png, '}']};
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
<<<<<<< HEAD
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/automation-improvements-final
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),


origin/cursor/expand-services-advertise-and-build-project-c28b
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
// "Notification": click,
<<<<<<< HEAD
=======
=======
;// "Notification": click,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
// "Notification": click,
;// "Notification": click,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

// "Notification": click,
;// "Notification": click,
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
origin/cursor/fix-syntax-push-and-merge-to-main-ba45;
origin/automation-improvements-final;
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),





  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),


"
// "Notification": click,
"
;// "Notification": click,
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
self.addEventListener('notificationclick', (event) => {',
  event.notification.close(),'"
  "if": (event.action === 'explore') {',
    event.waitUntil(,'
      clients.openWindow('/'))}'}),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======



origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  // In a real app, you would store these in IndexedDB;    event && event.waitUntil(,      self && self.registration.showNotification(data && data.title, options))}),
// "Notification": click,
=======







  // In a real app, you would store these in IndexedDB;    event && event.waitUntil(,      self && self.registration.showNotification(data && data.title, options))}),"
// "Notification": click,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
self && self.addEventListener('notificationclick', (event) => {',
  event && event.notification.close(),'"
  "if": (event && event.action === 'explore') {',
    event && event.waitUntil(,'
      clients && clients.openWindow('/'))}'}),
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-382a
  "if": (isStaticAsset (request.url)) {
    event.respond_with (handleStaticAsset (request))} else if () {) {
  $2
=======

"
  "if": (isStaticAsset (request.url)) {}
    event.respond_with (handleStaticAsset (request))} else if () {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
    event.respond_with (handlePageRequest (request))} else {}
    event.respond_with (handleOtherRequest (request))}
});
// Check if request is for a static asset;'"
"function": isStaticAsset (url) { return CACHE_PATTERNS.some (pattern = > pattern.test (url))} cache.put (request, network_response.clone ())} "return": network_response} catch (error) { console.error ('Service "Worker": Error: handling static asset, ', error)'; "return": new Response ('Asset not available', { "status": 404})}'}"
// "Handle": page requests;
async: /**
 * handlePageRequest - Function description;
 */
function handlePageRequest() {, try {, // Try network first for pages; const network_response = await fetch (request); if: (network_response.ok) {, // Cache the response, const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())}}"
// "Handle": other requests (API calls, etc.);"
"async": /**
 * handleOtherRequest - Function description;
 */'"
function handleOtherRequest() { try { // Try network first; const network_response = await fetch (request); if: (network_response.ok) {, // Cache successful responses, const cache = await caches.open (DYNAMIC_CACHE); cache.put (request, network_response.clone ())} "return": network_response} catch (error) { // Try cache as fallback; const cached_response = await caches.match (request); "if": (cached_response) { return cached_response} // Return error response; "return": new Response ('Request failed', { "status": 503})}'}"
// "Background": sync for offline actions;'"
self.addEventListener ('sync', (event) = > {'; "if": (event.tag = = = 'background - sync') {'; event.wait_until (doBackgroundSync ())} console.error ('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) { console.error ('Service Worker: Background: sync failed, ', error)}'} "icon": '/favicon - 32x32.png, '}']} event.wait_until ( self.registration.show_notification (data.title, options))});"
// "Notification": click;'"
self.addEventListener ('notificationclick', (event) = > {'; event.notification.close (); "if": (event.action = = = 'explore') {'; event.wait_until ( clients.open_window ('/'))}'});"
// "Helper": functions for background sync;
async: /**
 * getPendingSubmissions - Function description;
 */"
function getPendingSubmissions() { // In a real app, you would store these in IndexedDB; "return": []}
;
});
// Check if request is for a static asset;"
"function": isStaticAsset (url) {}
  return CACHE_PATTERNS.some (pattern => pattern.test (url))}
      cache.put (request, network_response.clone ())}"
    "return": network_response} catch (error) {'"
    console.error ('Service "Worker": Error: handling static asset, ', error)';'"
    "return": new Response ('Asset not available', { "status": 404})}'}"
// "Handle": page requests;
async: /**
 * handlePageRequest - Function description;
 */
function handlePageRequest() { return null; }
      cache.put (request, network_response.clone ())}
}"
// "Handle": other requests (API calls, etc.);"
"async": /**
 * handleOtherRequest - Function description;
 */
function handleOtherRequest() {}
  try {}
    // Try network first;
    const network_response = await fetch (request);
    if: (network_response.ok) {, // Cache successful responses,
      const cache = await caches.open (DYNAMIC_CACHE);
      cache.put (request, network_response.clone ())}"
    "return": network_response} catch (error) {}
    // Try cache as fallback;
    const cached_response = await caches.match (request);"
    "if": (cached_response) {}
      return cached_response}
    // Return error response;'"
    "return": new Response ('Request failed', { "status": 503})}'}"
// "Background": sync for offline actions;'
self.addEventListener ('sync', (event) => {';'"
  "if": (event.tag === 'background - sync') {';
    event.wait_until (doBackgroundSync ())}'"
        console.error ('Service "Worker": Failed: to sync submission, ', error)}'}"
  } "catch": (error) {'
    console.error ('Service Worker: Background: sync failed, ', error)}'}'"
          "icon": '/favicon - 32x32.png, '}']}
    event.wait_until (
      self.registration.show_notification (data.title, options))});"
// "Notification": click;'
self.addEventListener ('notificationclick', (event) => {';
  event.notification.close ();'"
  "if": (event.action === 'explore') {';
    event.wait_until ('
      clients.open_window ('/'))}'});"
// "Helper": functions for background sync;
async: /**
 * getPendingSubmissions - Function description;
 */
function getPendingSubmissions() {}
  // In a real app, you would store these in IndexedDB;    event.wait_until (,      self.registration.show_notification (data.title, options))}),"
// "Notification": click,'
self.addEventListener ('notificationclick', (event) => {',
  event.notification.close (),'"
  "if": (event.action === 'explore') {',
    event.wait_until (,'
      clients.open_window ('/'))}'}),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// "Helper": functions for background sync,
asyn: c: function getPendingSubmissions() {,
=======
async: /**
 * getPendingSubmissions - Function description;
 */
<<<<<<< HEAD
function getPendingSubmissions() {,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // In a real app, you would store these in IndexedDB,
<<<<<<< HEAD
<<<<<<< HEAD

  "return": []};

    event.respondWith(handleOtherRequest(request))}
;
=======
=======


origin/automation-improvements-final

=======
function getPendingSubmissions() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;  "return": []};
"
  "return": []};

<<<<<<< HEAD


=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// "Helper": functions for background sync,
asyn: c: function getPendingSubmissions() { return null; }
;  "return": []};
origin/cursor/integrate-build-improve-and-re-verify-242d"
  "return": []};
<<<<<<< HEAD
;  "return": []};
  "return": []};

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

async: function getPendingSubmissions() {
  // In a real app, you would store these in IndexedDB;
=======



async: function getPendingSubmissions() {}
  // In a real app, you would store these in IndexedDB;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "return": []}
async function removePendingSubmission(id) {}
  // In a real app, you would remove from IndexedDB;'"
  console.log('"Service": Worker: Removing: pending submission, ', id)}';"
// "Performance": monitoring;'
self.addEventListener('message', (event) => {';'"
  "if": (event.data && event.data.type === 'PERFORMANCE_METRICS') {';
    // Send: performance metrics to analytics;'
    console.log('Service: Worker: Received: performance metrics, ', event.data.metrics)}'})
<<<<<<< HEAD
<<<<<<< HEAD
;  "return": []};
  "return": []};
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
=======
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',

const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',

main

console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',

const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',



const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',



origin/cursor/expand-services-advertise-and-build-project-c28b
;  "return": []};
  "return": []};


origin/cursor/expand-services-advertise-and-build-project-c28b



origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5



ursor/fix-website-loading-errors-and-merge-6662
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
;  "return": []};
  "return": []};
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final

;  "return": []};
  "return": []};

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))})
// "Notification": click
=======

'
console.log('Service: Worker: Script: loaded')','`
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;'"
console.log('"Service": Worker: Script: loaded')','`
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
"
;  "return": []};"
  "return": []};















"
;  "return": []};"
  "return": []};



async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))})"
// "Notification": click'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
self.addEventListener('notificationclick', (event) => {'
  event.notification.close()'"
  "if": (event.action === 'explore') {'
    event.waitUntil('
      clients.openWindow('/'))}'})"
// "Helper": functions for background sync;
async: function getPendingSubmissions() { return null; }
  // In a real app, you would store these in IndexedDB;  "return": []}"
  "return": []}
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
ursor/fix-website-loading-errors-and-merge-6662
  "return": []};
origin/cursor/integrate-build-improve-and-re-verify-2156
  "return": []};

origin/cursor/expand-services-advertise-and-build-project-c28b
;  "return": []}
=======


"
  "return": []};




"
;  "return": []}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "return": []}
;


<<<<<<< HEAD

origin/main
;  "return": []};
=======
origin/main"
;  "return": []};"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "return": []};



"
;  "return": []};"
  "return": []};
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "return": []};
<<<<<<< HEAD

    event.respondWith(handleOtherRequest(request))}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}),;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Check if request is for a static asset,;
=======



}),;
// Check if request is for a static asset,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
"function": isStaticAsset(url) {,;
  return CACHE_PATTERNS.some(pattern => pattern.test(url))},;
      cache.put(request, networkResponse.clone())},;"
    "return": networkResponse} catch (error) {,;'"
    console.error('Service "Worker": Erro: r: handling static asset, ', error)',;'"
    "return": new Response('Asset not available', { "status": 404})}'},;"
// "Handle": page requests,;
asyn: c: function handlePageRequest() { return null; }
      cache.put(request, networkResponse.clone())}
},;"
// "Handle": other requests (API calls, etc.),;"
"async": function handleOtherRequest() { return null; }
      cache.put(request, networkResponse.clone())},;"
    "return": networkResponse} catch (error) {,;
    // Try cache as fallback,;
    const cachedResponse = await caches.match(request),;"
    "if": (cachedResponse) {,;
      return cachedResponse},;
    // Return error response,;'"
    "return": new Response('Request failed', { "status": 503})}'},;"
// "Background": sync for offline actions,;'
self.addEventListener('sync', (event) => {',;'"
  "if": (event.tag === 'background-sync') {',;
    event.waitUntil(doBackgroundSync())},;'"
        console.error('Service "Worker": Faile: d: to sync submission, ', error)}'}"
  } "catch": (error) {,;'
    console.error('Service: Worker: Backgroun: d: sync failed, ', error)}'},;'"
          "icon": '/favicon-32x32.png, '}']},;
    event.waitUntil(,;
      self.registration.showNotification(data.title, options))}),;"
// "Notification": click,;'
self.addEventListener('notificationclick', (event) => {',;
  event.notification.close(),;'"
  "if": (event.action === 'explore') {',;
    event.waitUntil(,;'
      clients.openWindow('/'))}'}),;"
// "Helper": functions for background sync,;
<<<<<<< HEAD
asyn: c: function getPendingSubmissions() {,;
  // In a real app, you would store these in IndexedDB,;
<<<<<<< HEAD
  "return": []},;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    event.waitUntil(
      clients.openWindow('/'))}'})
// "Helper": functions for background sync;
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
<<<<<<< HEAD
<<<<<<< HEAD
console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
=======
<<<<<<< HEAD
<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
=======
console.log('Service: Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
=======
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508



ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
main

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',



const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
<<<<<<< HEAD
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  "return": []},;const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;
console.log('"Service": Worker: Script: loaded')',
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};
;
  "return": []};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

main


async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};
;
  "return": []};
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
asyn: c: function getPendingSubmissions() { return null; }
  "return": []},;










'`
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;'"
console.log('"Service": Worker: Script: loaded')','`
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',



'`
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: 'Installation: failed',',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.error('Service Worker: 'Error: handling static asset',',error)';; return: new Response('Asset not available',{ status: '404'})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { console.log('Service Worker: 'Network: faile',d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: 'text-align: center: padding: 50px'} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: 'networkResponse'} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: '503'})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: 'Failed: to sync submission',',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: '[10',0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: 'data.primaryKe',y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}'; ]} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: '[]'} async function removePendingSubmission(id) { console.log('Service: 'Worker: Removing: pending submission',',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')';,;'"
console.log('"Service": Worker: Script: loaded')','`
const CACHE_NAME = 'zion-tech-group-v1'';; const STATIC_CACHE = 'static-v1'';; const DYNAMIC_CACHE = 'dynamic-v1'';; const STATIC_ASSETS = [ '/','';/about','';/services','';/contact','';/offline.html','';/manifest.json','';/favicon.ico','';/apple-touch-icon.png','';/favicon-32x32.png','';/favicon-16x16.png']';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {'; console.log('Service: Worker: Installing...')';; event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => { console.log('Service: Worker: Caching: static assets')';; return: cache.addAll(STATIC_ASSETS,)}) .then(() => { console.log('Service Worker: Installation: complete')';; return: self.skipWaiting(,)}) .catch((error) => { console.error('Service Worker: Installation: failed,',error)}))})'; self.addEventListener('activate',(event) => {'; console.log('Service: Worker: Activating...')';; const CACHE_PATTERNS = [ /\.(?:png|jpg|jpeg|svg|gif|webp)$/ /\.(?:css|js)$/ /\.(?:woff|woff2|ttf|eot)$/]; self.addEventListener('install',(event) => {' console.log('Service Worker: Installing...'); event.waitUntil( caches.open(STATIC_CACHE); .then((cache) => {' console.log('Service Worke r: Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => {' console.log('Service Worker: Installation complete'); return self.skipWaiting()}) .catch((error) => {' console.error('Service Worker: Installation failed',error)}))}) self.addEventListener('activate',(event) => {' console.log('Service Worker: Activating...'); event.waitUntil( caches.keys(); .then((cacheNames) => { return: Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Service Worker: Deleting: old cache,',cacheName)';; return: caches.delete(cacheName)} }))}) .then(() => { console.log('Service Worker: Activation: complete')';; return: self.clients.claim(,)}))}) self.addEventListener('fetch',(event) => {'; const { request } = event; const url = new URL(request.url); if: (request.method !== 'GET') {'; return} if: (url.origin !== location.origin) { return} if: (isStaticAsset(request.url)) { event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) { event.respondWith(handlePageRequest(request))} else { event.respondWith(handleOtherRequest(request))} }) function: isStaticAsset(url) { return CACHE_PATTERNS.some(pattern => pattern.test(url))} function: isPageRequest(request) { return request.headers.get('accept')?.includes('text/html')}'; async: function handleStaticAsset(request) { try { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(STATIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.error('Service Worker: Error: handling static asset,',error)';; return: new Response('Asset not available',{ status: 404})}'} async: function handlePageRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { console.log('Service Worker: Network: faile,d,trying cache')';; const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} const offlineResponse = await caches.match('/offline.html')';; if: (offlineResponse) { return offlineResponse} return: new Response( `; <!DOCTYPE: html> <html> <head> <title>Offline - Zion Tech Group</title> <meta name='viewport' content='width=device-width,initial-scale=1'>'; <style> body: { font-family: Aria,l,sans-serif: text-align: center: padding: 50px} .offline: { color: #666} </style> </head> <body> <h1: class='offline'>You're offline</h1>'; <p>Please: check your internet connection and try again.</p> </body> </html>' ` { headers: { 'Content-Type': 'text/html'}'})} } async: function handleOtherRequest(request) { try { const networkResponse = await fetch(request); if: (networkResponse.ok) { const cache = await caches.open(DYNAMIC_CACHE); cache.put(request,networkResponse.clone())} return: networkResponse} catch (error) { const cachedResponse = await caches.match(request); if: (cachedResponse) { return cachedResponse} return: new Response('Request failed',{ status: 503})}'} self.addEventListener('sync',(event) => {'; if: (event.tag === 'background-sync') {'; event.waitUntil(doBackgroundSync())} }) async: function doBackgroundSync() { try { console.log('Service: Worker: Performing: background sync')';; const pendingSubmissions = await getPendingSubmissions(); for: (const submission of pendingSubmissions) { try { await fetch('/api/contact,',{'; method: 'POST,','; headers: { 'Content-Type': 'application/json'},'; body: JSON.stringify(submission.data,)}) await: removePendingSubmission(submission.id)} catch (error) { console.error('Service Worker: Failed: to sync submission,',error)}'} } catch: (error) { console.error('Service Worker: Background: sync failed,',error)}'} self.addEventListener('push',(event) => {'; if: (event.data) { const data = event.data.json(); const options = { body: data.bod,y icon: '/favicon-32x32.png,','; badge: '/favicon-16x16.png,','; vibrate: [10,0,50,100] data: { dateOfArrival: Date.now(,) primaryKey: data.primaryKe,y} actions: [ { action: 'explore,','; title: 'View: Details,','; icon: '/favicon-32x32.png,'},'; { action: 'close,','; title: 'Close,','; icon: '/favicon-32x32.png,'}']} event.waitUntil( self.registration.showNotification(data.title,options))}) self.addEventListener('notificationclick',(event) => {'; event.notification.close(); if: (event.action === 'explore') {'; event.waitUntil( clients.openWindow('/'))}'}) async: function getPendingSubmissions() { return: []} async function removePendingSubmission(id) { console.log('Service: Worker: Removing: pending submission,',id)}'; self.addEventListener('message',(event) => {'; if: (event.data && event.data.type === 'PERFORMANCE_METRICS') {'; console.log('Service: Worker: Received: performance metrics,',event.data.metrics)}'}) console.log('Service: Worker: Script: loaded')',


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
