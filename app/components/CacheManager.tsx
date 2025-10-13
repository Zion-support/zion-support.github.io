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
        })
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      })

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }

    // Initialize all caching strategies
    registerServiceWorker()
    setupCacheStrategy()
    setupMemoryManagement()
    setupLazyLoading()

    // Cleanup function
    return () => {
      // Cleanup any intervals or observers
      }
  }, [])

  return null
}

export default CacheManager
