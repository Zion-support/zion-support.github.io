const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => {  event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => {  return cache.addAll(STATIC_ASSETS)}) .then(() => {  return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => {  event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {  return caches.delete(cacheName)} }) )}) .then(() => {  return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse |networkResponse.status !== 200 |networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { } self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { body: data.body,icon: '/favicon.svg',badge: '/favicon.svg',vibrate: [100,50,100],data: { dateOfArrival: Date.now(),primaryKey: 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
// Assets to cache on install
const STATIC_ASSETS = ['/'
  '/favicon.ico'
  '/favicon.svg'
  '/og-image.svg'
  '/manifest.json'
  '/offline.html'];
// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/css/',
  '/static/js/',
  '/images/'
        }
        return fetch(event.request)}),)})ursor/automate-test-improve-and-merge-code-646c;
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => {  event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => {  return cache.addAll(STATIC_ASSETS)}) .then(() => {  return self.skipWaiting()}) )})self.addEventListener('activate',(event) => {  event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {  return caches.delete(cacheName)} }) )}) .then(() => {  return self.clients.claim()}) )})self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url)if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone()caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)})return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )})self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} })async function handleOfflineFormSubmissions() {} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json()const options = { "body": data.body,"icon": '/favicon.svg',"badge": '/favicon.svg',"vibrate": [100,50,100],"data": { "dateOfArrival": Date.now(),"primaryKey": 1 } }event.waitUntil( self.registration.showNotification(data.title,options) )} })self.addEventListener('notificationclick',(event) => { event.notification.close()event.waitUntil( clients.openWindow('/') )})const CACHE_NAME = 'zion-tech-group-v1';'
const STATIC_CACHE = 'static-v1';'
const DYNAMIC_CACHE = 'dynamic-v1';'
// Assets to cache on install;
const STATIC_ASSETS = ['/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html';'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {

// Activate event - clean up old caches
self.addEventListener(activate', (event) => {
  console.log('Service Worker activating...),
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {

          })
        )})
      .then(() => {

  const { request } = event;
  const url = new URL(request.url);
  // Skip non-GET requests
  if (request.method !== 'GET') {

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
  // Return cached version if available
        if (cachedResponse) {

});
// Notification click handler,
self.addEventListener('notificationclick', (event) => {'
  }
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')'
  )});
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old "cache":',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { "body": 'data.body',"icon": '/favicon.svg',"badge": '/favicon.svg',"vibrate": '[100',50,100],"data": { "dateOfArrival": Date.now(),"primaryKey": '1' } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});'
const CACHE_NAME = 'zion-tech-group-v1'; const STATIC_CACHE = 'static-v1'; const DYNAMIC_CACHE = 'dynamic-v1'; const STATIC_ASSETS = [ '/','/favicon.ico','/favicon.svg','/og-image.svg','/manifest.json','/offline.html' ]; self.addEventListener('install',(event) => { console.log('Service Worker installing...'); event.waitUntil( caches.open(STATIC_CACHE) .then((cache) => { console.log('Caching static assets'); return cache.addAll(STATIC_ASSETS)}) .then(() => { console.log('Service Worker installed'); return self.skipWaiting()}) )}); self.addEventListener('activate',(event) => { console.log('Service Worker activating...'); event.waitUntil( caches.keys() .then((cacheNames) => { return Promise.all( cacheNames.map((cacheName) => { if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) { console.log('Deleting old "cache":',cacheName); return caches.delete(cacheName)} }) )}) .then(() => { console.log('Service Worker activated'); return self.clients.claim()}) )}); self.addEventListener('fetch',(event) => { const { request } = event; const url = new URL(request.url); if (request.method !== 'GET') { return} if (url.origin !== location.origin) { return} event.respondWith( caches.match(request) .then((cachedResponse) => { if (cachedResponse) { return cachedResponse} return fetch(request) .then((networkResponse) => { if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') { return networkResponse} const responseToCache = networkResponse.clone(); caches.open(DYNAMIC_CACHE) .then((cache) => { cache.put(request,responseToCache)}); return networkResponse}) .catch(() => { if (request.destination === 'document') { return caches.match('/offline.html')} })}) )}); self.addEventListener('sync',(event) => { if (event.tag === 'contact-form') { event.waitUntil( handleOfflineFormSubmissions() )} }); async function handleOfflineFormSubmissions() { console.log('Handling offline form submissions...')} self.addEventListener('push',(event) => { if (event.data) { const data = event.data.json(); const options = { "body": data.body,"icon": '/favicon.svg',"badge": '/favicon.svg',"vibrate": [100,50,100],"data": { "dateOfArrival": Date.now(),"primaryKey": 1 } }; event.waitUntil( self.registration.showNotification(data.title,options) )} }); self.addEventListener('notificationclick',(event) => { event.notification.close(); event.waitUntil( clients.openWindow('/') )});'

// Activate event - clean up old caches
self.addEventListener(activate', (event) => {
  console.log('Service Worker activating...),
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {

          })
        )})
      .then(() => {


const CACHE_NAME = 'zion-tech-v1.0.0';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
