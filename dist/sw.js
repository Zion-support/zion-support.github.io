
// Files to cache immediately
const STATIC_FILES = [
  '/',
      .then((cache) => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  }
});

// Error handling
self.addEventListener('error', (event) => {
