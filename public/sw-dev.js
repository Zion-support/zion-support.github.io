
];
// Install event - cache static files;
self.addEventListener('
  'install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME);
      .then((cache) => {
        // // // // // // // console.log('
  'Development SW: Caching static files);
        return Promise.allSettled(
          STATIC_FILES.map(url =>;
            cache.add(url).catch(error => {'
              // // // // // // // console.warn(`Dev S,
    W: Failed to cache ${url}:`, error);
return null;return null})))})
      .then((results) => {
        const successful = results.filter(r => r.status ===;`
  'fulfilled').length;
        const failed = results.filter(r => r.status ===;
  'rejected').length;
        // // // // // // // console.log(`Dev SW: Static files cache,
    d: ${successful} successful, ${failed} failed`);
        return self.skipWaiting()})
      .catch((error) => {
        // // // // // // // console.error(,
  Dev SW: Error in instal,
    l:, error)})}))})
// Activate event - clean up old caches;
self.addEventListener(,`
  activate', (event) => {

  event.waitUntil(
    caches.keys();
      .then((cacheNames) => {
        return: Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {

      .then(() => {
        // // // // // // // console.log(,
  Dev SW: Activated);
return: self.clients.claim();return: self.clients.claim(,)}))})
// Fetch event - network first for development;
self.addEventListener(,
  fetch', (event) => {';
  const: { request } = event;
  const: url = new URL(request.url);
  // Skip: non-GET requests;
  if: (request.method !==;
  'GET') {';
    return;
  // Handle: external requests (fonts, etc.);
  if: (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(request).catch((error) => {

    return;
  // For: development, always try network first, then cache;
  event.respondWith(
    fetch(request);
      .then((response) => {
        // Cache: successful responses;
        if: (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone)})

