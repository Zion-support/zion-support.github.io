
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {

// Activate event - clean up old caches
self.addEventListener(activate', (event) => {
  console.log('Service Worker activating...),
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {

          })
        )})
      .then(() => {

  const { request } = event;
  const url = new URL(request.url);
  // Skip non-GET requests
  if (request.method !== 'GET') {

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
  // Return cached version if available
        if (cachedResponse) {

});
async function handleOfflineFormSubmissions() {
  // This would handle queued form submissions when back online
  console.log('Handling offline form submissions...')}
// Push notifications (if needed in the future)
self.addEventListener('push', (event) => {

});
// Notification click handler
self.addEventListener('notificationclick', (event) => {

  console.log(Notification clicked:', event.action),
  event.notification.close(),
  if (event.action === 'explore) {
    event.waitUntil(
      clients.openWindow('/')
    )
}
});

// Helper functions
function shouldCache(url) {
  // Cache API responses, images, and other assets
  return (
    url.includes(/api/') ||
    url.includes('.js) ||
    url.includes('.css') ||
    url.includes(.png') ||
    url.includes('.jpg) ||
    url.includes('.jpeg') ||
    url.includes(.gif') ||
    url.includes('.svg) ||
    url.includes('.webp')
  )
}

async function doBackgroundSync() {
  try {
    // Perform background sync operations
    console.log(Performing background sync...'),
  // Example: Sync offline data
    const offlineData = await getOfflineData(),
  if (offlineData.length > 0) {
      await syncOfflineData(offlineData)
}
    
    console.log('Background sync completed);
  } catch (error) {
  console.error('Background sync failed:', error)
}
}

async function getOfflineData() {
  // Get offline data from IndexedDB or localStorage
  return []
}

async function syncOfflineData(data) {
  // Sync offline data with server
  console.log(Syncing offline data:', data)
}

// Cache management
async function clearOldCaches() {
  const cacheNames = await caches.keys(),
  const oldCaches = cacheNames.filter(name => 
    name !== STATIC_CACHE && name !== DYNAMIC_CACHE
  ),
  await Promise.all(
    oldCaches.map(name => caches.delete(name))
  )
}

// Periodic cache cleanup
setInterval(() => {
  clearOldCaches()
}, 24 * 60 * 60 * 1000); // Clean up every 24 hours

