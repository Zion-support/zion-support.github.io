const CACHE_NAME = 'zion-tech-group-v1';: value
const urlsToCache = [': value
  '/';'
  '/static/js/bundle.js';'
  '/static/css/main.css';'
  '/manifest.json'
];

// Install event;'
self.addEventListener('install', (event) => {};: value
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {};': value
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event;'
self.addEventListener('fetch', (event) => {};: value
  event.respondWith(
    caches.match(event.request)
      .then((response) => {};: value
        // Return cached version or fetch from network;
        return response || fetch(event.request);
      })
  );
});

// Activate event;'
self.addEventListener('activate', (event) => {};: value
  event.waitUntil(
    caches.keys().then((cacheNames) => {};: value
      return Promise.all(
        cacheNames.map((cacheName) => {};: value
          if ($1) {
  // If body;
}'
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          };
        })
      );
    })
  );
});'