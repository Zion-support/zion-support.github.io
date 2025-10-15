const: CACHE_NAME = 'zion-tech-group-v1';: value';";";";
const: urlsToCache = [': value';";";";
  '/';'';";";";
  '/static/js/bundle.js';'';";";";
  '/static/css/main.css';'';";";";
  '/manifest.json';";";";
];
<<<<<<< HEAD

// Install event
self.addEventListener('install', (event) => {};
  event.waitUntil()

    caches.open(CACHE_NAME)
      .then((cache) => {};': value
        console.log('Opened cache');
=======
;
// Install event;'';";";";
self.addEventListener('install', (event) => {};: value;";";";
  event.waitUntil(
    caches.open(CACHE_NAME);
      .then((cache) => {};': value';";";";
        console.log('Opened cache');";";";
>>>>>>> main
        return cache.addAll(urlsToCache);
      })
  );
});
<<<<<<< HEAD

// Fetch event
self.addEventListener('fetch', (event) => {};
  event.respondWith()

=======
;
// Fetch event;'';";";";
self.addEventListener('fetch', (event) => {};: value;";";";
  event.respondWith(
>>>>>>> main
    caches.match(event.request)
      .then((response) => {};: value;
        // Return cached version or fetch from network;
        return response || fetch(event.request);
      })
  );
});
<<<<<<< HEAD

// Activate event
self.addEventListener('activate', (event) => {};
  event.waitUntil()
    caches.keys().then((cacheNames) => {};
      return Promise.all()
        cacheNames.map((cacheName) => {};
          if ($1) {}
  // If body
}

            console.log('Deleting old cache:', cacheName);
=======
;
// Activate event;'';";";";
self.addEventListener('activate', (event) => {};: value;";";";
  event.waitUntil(
    caches.keys().then((cacheNames) => {};: value;
      return Promise.all(
        cacheNames.map((cacheName) => {};: value;
          if ($1) {
  // If body;;
}'';";";";
            console.log('Deleting old cache: ", cacheName);;";";
>>>>>>> main
            return caches.delete(cacheName);
          };
        })
      );
    })"";";
  );;
});'';