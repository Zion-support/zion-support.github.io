
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



