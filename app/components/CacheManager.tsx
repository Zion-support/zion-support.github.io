    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          } catch (error) {
          }
      // Cache static assets
      const cacheStaticAssets = async () => {
        try {
          const cache = await caches.open(CACHE_NAME)
          await cache.addAll(CACHE_URLS)
          } catch (error) {
          }
        } catch (error) {
          return fetch(request)
