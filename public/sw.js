<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-group-v1';
=======

// Service Worker for Zion Tech Group

const CACHE_NAME = 'zion-tech-group-v1'
>>>>>>> origin/main
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/static/js/bundle.js',
  '/static/css/main.css',
<<<<<<< HEAD
  '/manifest.json'
];

// Install event
=======

  '/manifest.json',
  '/favicon.ico'

]
>>>>>>> origin/main
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
<<<<<<< HEAD
  );
});

// Fetch event
=======

  )
})
>>>>>>> origin/main
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})
// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
<<<<<<< HEAD
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions
  console.log('Syncing contact form data');
}
=======

  )
})
>>>>>>> origin/main
