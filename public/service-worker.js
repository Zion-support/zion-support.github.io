
  'install', event => {

  event.waitUntil(

  event.waitUntil(
    caches.keys().then(keyList =>

      Promise.all(
        keyList.map(key: => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {

    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache =>
        fetch(event.request)
          .then(response => {

            if (response.status === 200) {
              cache.put(event.request, response.clone());
            return response})
          .catch(() => cache.match(event.request))));
    return}
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match('/offline.html'))
      );
    })
  );
});

// Handle Web Push notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'New message';
  const options = {
    body: data.body,
    icon: '/vite.svg',
    data: data.url
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.notification.data) {
    event.waitUntil(clients.openWindow(event.notification.data));
  }
});
