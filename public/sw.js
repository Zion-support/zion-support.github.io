const: CACHE_NAME = 'zion-tech-group-v1';: value';";";";
const: urlsToCache = [': value';";";";
  '/';'';";";";
  '/static/js/bundle.js';'';";";";
  '/static/css/main.css';'';";";";
  '/manifest.json';";";";
];

        return cache.addAll(urlsToCache);
      })
  );
});

    caches.match(event.request)
      .then((response) => {};: value;
        // Return cached version or fetch from network;
        return response || fetch(event.request);
      })
  );
});

            return caches.delete(cacheName);
          };
        })
      );
    })"";";
  );;
});'';