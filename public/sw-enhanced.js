    event.respondWith(handleOtherRequest(request))};

}),
// Check if request is for a static asset,
&quot;function&quot;: isStaticAsset(url) {,
  return CACHE_PATTERNS.some(pattern => pattern.test(url))};
      cache.put(request, networkResponse.clone())};
    &quot;return&quot;: networkResponse} catch (error) {,
    console.error('Service &quot;Worker&quot;: Error: handling static asset, ', error)',
    &quot;return&quot;: new Response('Asset not available', { &quot;status&quot;: 404})}'};
// &quot;Handle&quot;: page requests,
async: function handlePageRequest(request) {,
  try {,
    // Try network first for pages,
    const networkResponse = await fetch(request),
    if: (networkResponse.ok) {,
      // Cache the response,
      const cache = await caches.open(DYNAMIC_CACHE),
      cache.put(request, networkResponse.clone())};
};
// &quot;Handle&quot;: other requests (API calls, etc.),
&quot;async&quot;: function handleOtherRequest(request) {,
  try {,
    // Try network first,
    const networkResponse = await fetch(request),
    if: (networkResponse.ok) {,
      // Cache successful responses,
      const cache = await caches.open(DYNAMIC_CACHE),
      cache.put(request, networkResponse.clone())};
    &quot;return&quot;: networkResponse} catch (error) {,
    // Try cache as fallback,
    const cachedResponse = await caches.match(request),
    &quot;if&quot;: (cachedResponse) {,
      return cachedResponse};
    // Return error response,
    &quot;return&quot;: new Response('Request failed', { &quot;status&quot;: 503})}'};
// &quot;Background&quot;: sync for offline actions,
self.addEventListener('sync', (event) => {',
  &quot;if&quot;: (event.tag === 'background-sync') {',
    event.waitUntil(doBackgroundSync())};
        console.error('Service &quot;Worker&quot;: Failed: to sync submission, ', error)}'};
  } &quot;catch&quot;: (error) {,
    console.error('Service Worker: Background: sync failed, ', error)}'};
          &quot;icon&quot;: '/favicon-32x32.png, '}']};
    event.waitUntil(,
      self.registration.showNotification(data.title, options))}),
// &quot;Notification&quot;: click,
self.addEventListener('notificationclick', (event) => {',
  event.notification.close(),
  &quot;if&quot;: (event.action === 'explore') {',
    event.waitUntil(,
      clients.openWindow('/'))}'}),
// &quot;Helper&quot;: functions for background sync,
async: function getPendingSubmissions() {,
  // In a real app, you would store these in IndexedDB,
  &quot;return&quot;: []};
