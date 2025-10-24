// Service Worker for Zion Tech Group;
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';

// Assets to cache immediately;
const STATIC_ASSETS = [;
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/manifest.json',
  '/robots.txt'
];
self.addEventListener('install', (event) => {;
event.waitUntil(;
caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
;
self.addEventListener('fetch', (event) => {;
event.respondWith(;
caches.match(event.request)
      .then((response) => {;
if (response) {;
return response;
        }
        return fetch(event.request);
      })
  );
});
    )
})

// Notification click;
  event.notification.close();
if (event.action === 'explore') {;
event.waitUntil();
clients.openWindow('/')
    )
})