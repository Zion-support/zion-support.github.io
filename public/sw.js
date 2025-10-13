<<<<<<< HEAD
  '/about',
  '/services',
  '/favicon.svg'
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service worker install failed:', error);
      })
  );
});

// Activate event - clean up old caches
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }


            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/');
// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle form submission sync
      handleFormSync()
    );
  }
});

// Handle message channel errors
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


async function handleFormSync() {
  try {
    // Get pending form data from IndexedDB
    const pendingForms = await getPendingForms();
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.data)
        });

        if (response.ok) {
          // Remove from pending forms
          await removePendingForm(form.id);
        }
      } catch (error) {
        console.error('Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.error('Form sync failed:', error);

// Helper functions for IndexedDB
async function getPendingForms() {
  // Implementation would go here
  return [];
}

async function removePendingForm(id) {
  // Implementation would go here
=======
export default function Component() {
return (;
<div>;
<h1>Component<//;
<p>This component is under construction.<//;
<//;
);
}
self.addEventListener('install', (event) => {'
  console.log('Service Worker installing...');'
  event.waitUntil(
  // TODO: Add parameters
)
  );
});
// Fetch event
self.addEventListener('fetch', (event) => {'
  event.respondWith(
  // TODO: Add parameters
)
    caches.match(event.request)
      .then((response) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})
// Activate event
self.addEventListener('activate', (event) => {'
  event.waitUntil(
  // TODO: Add parameters
)
    caches.keys().then((cacheNames) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return Promise.all(
  // TODO: Add parameters
)
        cacheNames.map((cacheName) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
          if (cacheName !== CACHE_NAME) {
  // TODO: Add properties
}
  // TODO: Add properties
}
            console.log('Deleting old cache:', cacheName)'
            return caches.delete(cacheName)
          }
        })
      )
    })
  );
});
// Background sync for offline form submissions
self.addEventListener('sync', (event) => {'
  if (event.tag === 'contact-form') {'
    event.waitUntil(syncContactForm());
  }
});
async function syncContactForm() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  // Handle offline form submissions
  console.log('Syncing contact form data');'
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
}
