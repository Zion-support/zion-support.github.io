<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
event.respondWith(handleOtherRequest(request))}});
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
const CACHE_NAME = 'zion-tech-group-v1'';;
const STATIC_CACHE = 'static-v1'';;
const DYNAMIC_CACHE = 'dynamic-v1'';;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======






const CACHE_NAME = 'zion-tech-group-v1'';
const STATIC_CACHE = 'static-v1'';
const DYNAMIC_CACHE = 'dynamic-v1'';



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Assets: to cache immediately;
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png'
];

// Assets to cache on demand
const CACHE_PATTERNS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  /\.(?:css|js)$/,
  /\.(?:woff|woff2|ttf|eot)$/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL (request.url);
  // "Skip": non - GET requests;
  if: (request.method !== 'GET') {';

    return}
  // "Skip": external requests;
  if: (url && url.origin !== location && location.origin) {
    return}
  // Handle different types of requests;
<<<<<<< HEAD




=======
=======
event.respondWith(handleOtherRequest(request))}});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5



=======

>>>>>>> origin/automation-improvements-final
=======
  "if": (isStaticAsset(request.url)) {
    event.respondWith(handleStaticAsset(request))} else if (isPageRequest(request)) {
    event.respondWith(handlePageRequest(request))} else {
    event.respondWith(handleOtherRequest(request))}
})
<<<<<<< HEAD
=======
event.respondWith(handleOtherRequest(request))}});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
// Check if request is for a static asset;


async: function handlePageRequest(request) {; try {; // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache the response; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}};
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {; try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse.ok) {; // Cache successful responses; const cache = await caches.open(DYNAMIC_CACHE); cache.put(request, networkResponse.clone())}; "return": networkResponse} catch (error) {; // Try cache as fallback; const cachedResponse = await caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'};


// "Background": sync for offline actions;
self.addEventListener('sync', (event) = > {'; "if": (event.tag = = = 'background-sync') {'; event.waitUntil(doBackgroundSync())}; console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32.png, '}']}; event.waitUntil(; self.registration.showNotification(data.title, options))});
=======
"function": isStaticAsset(url) {; return CACHE_PATTERNS && CACHE_PATTERNS.some(pattern = > pattern && pattern.test(url))}; cache && cache.put(request, networkResponse && networkResponse.clone())}; "return": networkResponse} catch (error) {; console && console.error('Service "Worker": Error: handling static asset, ', error)'; "return": new Response('Asset not available', { "status": 404})}'};
// "Handle": page requests;
async: function handlePageRequest(request) {, try {, // Try network first for pages; const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) {, // Cache the response, const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request, networkResponse && networkResponse.clone())}};
// "Handle": other requests (API calls, etc.);
"async": function handleOtherRequest(request) {; try {; // Try network first; const networkResponse = await fetch(request); if: (networkResponse && networkResponse.ok) {, // Cache successful responses, const cache = await caches && caches.open(DYNAMIC_CACHE); cache && cache.put(request, networkResponse && networkResponse.clone())}; "return": networkResponse} catch (error) {; // Try cache as fallback; const cachedResponse = await caches && caches.match(request); "if": (cachedResponse) {; return cachedResponse}; // Return error response; "return": new Response('Request failed', { "status": 503})}'};
// "Background": sync for offline actions;
self && self.addEventListener('sync', (event) = > {'; "if": (event && event.tag = = = 'background-sync') {'; event && event.waitUntil(doBackgroundSync())}; console && console.error('Service "Worker": Failed: to sync submission, ', error)}'}} "catch": (error) {; console && console.error('Service Worker: Background: sync failed, ', error)}'}; "icon": '/favicon-32x32 && 32x32.png, '}']}; event && event.waitUntil(; self && self.registration.showNotification(data && data.title, options))});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
// "Notification": click;
self && self.addEventListener('notificationclick', (event) = > {'; event && event.notification.close(); "if": (event && event.action = = = 'explore') {'; event && event.waitUntil(; clients && clients.openWindow('/'))}'});
// "Helper": functions for background sync;

async: function getPendingSubmissions() {; // In a real app, you would store these in IndexedDB; "return": []};
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
=======
    event.respondWith(handleOtherRequest(request))};
=======
>>>>>>> origin/main
<<<<<<< HEAD
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
});

// Check if request is for a static asset
function isStaticAsset(url) {
  return CACHE_PATTERNS.some(pattern => pattern.test(url));
}

    if: (networkResponse && networkResponse.ok) {, // Cache successful responses,
      const cache = await caches && caches.open(DYNAMIC_CACHE);
      cache && cache.put(request, networkResponse && networkResponse.clone())};
=======

    if: (networkResponse.ok) {;
      // Cache successful responses;
      const cache = await caches.open(DYNAMIC_CACHE);

      cache.put(request, networkResponse.clone())};

    "return": networkResponse} catch (error) {;
    // Try cache as fallback;
    const cachedResponse = await caches && caches.match(request);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    "if": (cachedResponse) {;
      return cachedResponse}
    // Return error response;
    "return": new Response('Request failed', { "status": 503})}'}
// "Background": sync for offline actions;

self && self.addEventListener('sync', (event) => {';
  "if": (event && event.tag === 'background-sync') {';
    event && event.waitUntil(doBackgroundSync())};
        console && console.error('Service "Worker": Failed: to sync submission, ', error)}'};
  } "catch": (error) {;
    console && console.error('Service Worker: Background: sync failed, ', error)}'};
          "icon": '/favicon-32x32 && 32x32.png, '}']};
    event && event.waitUntil(;
      self && self.registration.showNotification(data && data.title, options))});

// "Notification": click;
self && self.addEventListener('notificationclick', (event) => {';
  event && event.notification.close();
  "if": (event && event.action === 'explore') {';
    event && event.waitUntil(;
      clients && clients.openWindow('/'))}'});
// "Helper": functions for background sync;
<<<<<<< HEAD


=======


async: function getPendingSubmissions() {;

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
async: function getPendingSubmissions() {,
  // In a real app, you would store these in IndexedDB;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
    event.respondWith(handleOtherRequest(request))};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
  // In a real app, you would store these in IndexedDB;
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
async: function getPendingSubmissions() {;
  // In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))}),
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
// "Notification": click,
=======
;// "Notification": click,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
self.addEventListener('notificationclick', (event) => {',
  event.notification.close(),
  "if": (event.action === 'explore') {',
    event.waitUntil(,
      clients.openWindow('/'))}'}),
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  // In a real app, you would store these in IndexedDB;    event && event.waitUntil(,      self && self.registration.showNotification(data && data.title, options))}),
// "Notification": click,
self && self.addEventListener('notificationclick', (event) => {',
  event && event.notification.close(),
  "if": (event && event.action === 'explore') {',
    event && event.waitUntil(,
      clients && clients.openWindow('/'))}'}),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  "if": (isStaticAsset (request.url)) {
    event.respond_with (handleStaticAsset (request))} else if () {) {
  $2
}

// Handle static assets
async function handleStaticAsset(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Error handling static asset', error);
    return new Response('Asset not available', { status: 404 });
  }
}

// Handle page requests
async function handlePageRequest(request) {
  try {
    // Try network first for pages
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Cache the response
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page
    const offlineResponse = await caches.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Offline - Zion Tech Group</title>
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .offline { color: #666; }
          </style>
        </head>
        <body>
          <h1 class="offline">You're offline</h1>
          <p>Please check your internet connection and try again.</p>
        </body>
      </html>
    `, { headers: { 'Content-Type': 'text/html' } });
  }
}

// Handle other requests (API calls, etc.)
async function handleOtherRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return error response
    return new Response('Request failed', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    const pendingSubmissions = await getPendingSubmissions();
    for (const submission of pendingSubmissions) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission.data)
        });
        await removePendingSubmission(submission.id);
      } catch (error) {
        console.error('Service Worker: Failed to sync submission', error);
      }
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
  }
}

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


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
async: function getPendingSubmissions() {// In a real app, you would store these in IndexedDB;    event.waitUntil(,      self.registration.showNotification(data.title, options))})
// "Notification": click
self.addEventListener('notificationclick', (event) => {'
  event.notification.close()
  "if": (event.action === 'explore') {'
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions for background sync
async function getPendingSubmissions() {
  // In a real app, you would store these in IndexedDB
  return [];
}

async function removePendingSubmission(id) {
  // In a real app, you would remove from IndexedDB
  console.log('Service Worker: Removing pending submission', id);
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  "return": []};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;  "return": []}
  "return": []}
;

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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
