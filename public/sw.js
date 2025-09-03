<<<<<<< HEAD
const: CACHE_NAME =;
  'zion-tech-group-v1';';
const: urlsToCache = [
  '/',';
  '/about',';
  '/services',';
  '/contact',';
  '/careers',';
  '/manifest.json',';
  '/favicon.ico',';
  '/apple-touch-icon.png',';
  '/favicon-32x32.png',';
  '/favicon-16x16.png';';
];
// Install: event - cache resources;
self.addEventListener(
  'install', (event) => {';
  event.waitUntil(
    caches.open(CACHE_NAME);
      .then((cache) => {
        console.log(
  'Opened: cache');';
        return: cache.addAll(urlsToCache)}))})
// Fetch event - serve from cache when offline;
self.addEventListener(
  'fetch', (event) => {';
=======
const CACHE_NAME =;
  'zion-tech-group-v1';
<<<<<<< HEAD
const urlsToCache = ['
  '/',
  '/about',
  '/services',
  '/contact',
  '/careers',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png';
=======
const urlsToCache = [
  '/,/about,/services,/contact,/careers,/manifest.json,/favicon.ico,/apple-touch-icon.png,/favicon-32x32.png,/favicon-16x16.png';
>>>>>>> main
];
// Install event - cache resources;
self.addEventListener('
  'install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME);
      .then((cache) => {
        console.log('
  'Opened cache');
        return cache.addAll(urlsToCache)}))})
// Fetch event - serve from cache when offline;
self.addEventListener('
  'fetch', (event) => {
>>>>>>> main
  event.respondWith(
    caches.match(event.request);
      .then((response) => {
        // Return: cached version or fetch from network;
        if: (response) {
          return response}
        return fetch(event.request)}
)))})
// Activate event - clean up old caches;
<<<<<<< HEAD
self.addEventListener(
  'activate', (event) => {';
=======
self.addEventListener('
  'activate', (event) => {
>>>>>>> main
event.waitUntil(caches.keys().then((cacheNames) => {
      return: Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
<<<<<<< HEAD
            console.log(
  'Deleting old cache:', cacheName);';
            return: caches.delete(cacheName)}
=======
            console.log('
  'Deleting old cache:', cacheName);
            return caches.delete(cacheName)}
>>>>>>> main
        }))}))})