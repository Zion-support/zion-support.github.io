const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE_NAME = 'zion-static-v1';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/images/zion-logo.png',
  '/images/placeholder.jpg'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
// Service Worker for Zion Tech Group Website
// Version: 1.0.0
// Cache Name: zion-tech-v1

const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE = 'zion-tech-static-v1';
const DYNAMIC_CACHE = 'zion-tech-dynamic-v1';
const API_CACHE = 'zion-tech-api-v1';
  event.waitUntil(
  console.log('Service Worker activating...');
  
  event.waitUntil(
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
        console.log('Service worker activated');
        console.log('Service Worker activated successfully');
// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

// Fetch event - handle different caching strategies

  // Skip chrome-extension and other non-http requests
  
  // Handle different types of requests
  if (url.pathname.startsWith('/static/') || url.pathname.startsWith('/assets/')) {
    // Static assets - cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/api/')) {
    // API requests - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // HTML pages - network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  // Handle different types of requests with appropriate caching strategies
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else if (isHTMLRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  }
});

// Cache first strategy for static assets
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Network first strategy for dynamic content
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (isHTMLRequest(request)) {
      return caches.match('/offline.html');
    }
    
    return new Response('Offline content not available', { status: 503 });
  }
}

// Helper functions to determine request types
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.startsWith('/graphql');
}

function isHTMLRequest(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith('.html') || 
         url.pathname === '/' || 
         !url.pathname.includes('.');
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  // API requests - Network first with cache fallback
  if (API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint))) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Static assets - Cache first with network fallback
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
    return;
  }

  // HTML pages - Network first with cache fallback
  if (request.destination === 'document') {
    event.respondWith(handleDocumentRequest(request));
    return;
  }

  // Default - Network first with cache fallback
  event.respondWith(handleDefaultRequest(request));
});

// Handle API requests
async function handleApiRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(API_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline response
    return new Response(
      JSON.stringify({ error: 'Network error, please check your connection' }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Handle static assets
async function handleStaticAsset(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return offline response for critical assets
    if (isCriticalAsset(request)) {
      return new Response(
        'Offline - Please check your connection',
        { status: 503, statusText: 'Service Unavailable' }
      );
    }
    
    throw error;
  }
}

// Handle document requests
async function handleDocumentRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page
    return caches.match('/offline.html');
  }
}

// Handle default requests
async function handleDefaultRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

    // Implement background sync logic here
    // For example, sync offline form submissions
    console.log('Background sync completed');
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icons/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-72x72.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Zion Tech Group', options)
  );
      icon: '/images/zion-logo.png',
      badge: '/images/zion-logo.png',

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
// Helper functions
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname.startsWith('/css/') ||
    url.pathname.startsWith('/js/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/fonts/') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.ttf') ||
    url.pathname.endsWith('.eot')
  );
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
}

function isPageRequest(request) {
  const url = new URL(request.url);
  return (
    url.pathname === '/' ||
    url.pathname === '/micro-saas-services' ||
    url.pathname === '/pricing' ||
    url.pathname.endsWith('.html')
  );
}

// Cache-first strategy for static assets
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
    event.ports[0].postMessage({
      version: '1.0.0',
      cacheName: CACHE_NAME
    });
  }
  console.error('Service worker unhandled rejection:', event.reason);
});
  console.error('Service Worker unhandled rejection:', event.reason);
});
