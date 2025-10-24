const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
  );
});

// Fetch event - serve from cache, fallback to network;
  const {request} = event;
  const url = new URL(request.url)

  // Skip non-GET requests;
  if (request.method !== 'GET') {return;
  // Skip chrome-extension and other non-http requests;
  if (!url.protocol.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request)
        // Return cached version if available;
        if (cachedResponse) {
          console.log('Serving from cache: ', request.url)
          return cachedResponse;
        // Otherwise fetch from network;
        return fetch(request)
            // Don't cache non-successful responses;
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            // Clone the response;
            const responseToCache = response.clone()

            // Cache dynamic content;
            caches.open(DYNAMIC_CACHE)
                cache.put(request, responseToCache)})
                console.error('Failed to cache dynamic content: ', error)



// Background sync for form submissions;
  if (event.tag === 'contact-form') {event.waitUntil(
      // Handle form submission sync;
      console.log('Syncing contact form submission')
    )})

// Push notifications;
  if (event.data) {const data = event.data.json()

    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),

        },
          action: 'close',
          title: 'Close',

          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName)
            return caches.delete(cacheName)

