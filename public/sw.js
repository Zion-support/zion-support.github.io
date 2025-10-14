<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.svg',
  '/logo192.png'
=======
const CACHE_NAME = 'zion-tech-v1';'
const urlsToCache = []
  '/','
  '/static/js/bundle.js','
  '/static/css/main.css','
  '/manifest.json','
  '/favicon.svg','
  '/logo192.png';'
];
>>>>>>> cursor/fix-errors-and-merge-to-main-c3d6
];

// Install event - cache resources
<<<<<<< HEAD
self.addEventListener('install', (event) => {
  event.waitUntil(
=======
self.addEventListener('install', (event) => {}'
  event.waitUntil()
>>>>>>> cursor/fix-errors-and-merge-to-main-c3d6
    caches.open(CACHE_NAME)
      .then((cache) => {}
        console.log('Opened cache');'
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
<<<<<<< HEAD
self.addEventListener('fetch', (event) => {
  event.respondWith(
=======
self.addEventListener('fetch', (event) => {}'
  event.respondWith()
>>>>>>> cursor/fix-errors-and-merge-to-main-c3d6
    caches.match(event.request)
      .then((response) => {}
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
<<<<<<< HEAD
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
=======
self.addEventListener('activate', (event) => {}'
  event.waitUntil()
    caches.keys().then((cacheNames) => {}
      return Promise.all()
        cacheNames.map((cacheName) => {}
          if (cacheName !== CACHE_NAME) {}
            console.log('Deleting old cache:', cacheName);'
>>>>>>> cursor/fix-errors-and-merge-to-main-c3d6
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {}'
  if (event.tag === 'background-sync') {}'
    event.waitUntil(doBackgroundSync());
  }
});
<<<<<<< HEAD

async function doBackgroundSync() {
  // Handle offline form submissions or other background tasks
  console.log('Background sync triggered');
=======
async function doBackgroundSync() {}
  // Handle offline form submissions or other background tasks
  console.log('Background sync triggered');'
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c3d6
}