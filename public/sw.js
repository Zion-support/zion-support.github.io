const CACHE_NAME = 'zion-tech-group-v1';
  '/manifest.json'
];

// Install event);
});

// Fetch event);
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
