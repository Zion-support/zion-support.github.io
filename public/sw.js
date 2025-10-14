const CACHE_NAME = 'zion-tech-v1
const urlsToCache = [
<<<<<<< HEAD
/',
=======
  '/',
>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.svg',
<<<<<<< HEAD
  '/logo192.png
]
]
// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil()
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)}
      })
  )
})
// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith()
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)}
      })
  )
})
// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil()
=======
  '/logo192.png'
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

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
<<<<<<< HEAD
console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)}
=======
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
          }
        })
      )
    })
<<<<<<< HEAD
)
})
// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())}
  }
})
async function doBackgroundSync() {
  // Handle offline form submissions or other background tasks
  console.log('Background sync triggered')
}
=======
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions or other background tasks
  console.log('Background sync triggered');

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
}