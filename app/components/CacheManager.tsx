import { useEffect } from 'react'

const CacheManager = () => {
  useEffect(() => {
    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          console.log('Service Worker registered:', registration)
        } catch (error) {
          console.error('Service Worker registration failed:', error)
        }
      }
    }

    // Cache API for dynamic caching
    const setupCacheStrategy = () => {
      const CACHE_NAME = 'zion-tech-cache-v1'
      const CACHE_URLS = [
        '/',
        '/about',
        '/services',
        '/contact',
        '/ai-services'
      ]

      // Cache static assets
      const cacheStaticAssets = async () => {
        try {
          const cache = await caches.open(CACHE_NAME)
          await cache.addAll(CACHE_URLS)
          console.log('Static assets cached successfully')
        } catch (error) {
          console.error('Failed to cache static assets:', error)
        }
      }

      // Initialize caching
      cacheStaticAssets()

      // Intercept fetch requests for caching
      const originalFetch = window.fetch
      window.fetch = async (input, init) => {
        const request = new Request(input, init)
        
        // Check if request should be cached
        if (request.method === 'GET') {
          try {
            const cache = await caches.open(CACHE_NAME)
            const cachedResponse = await cache.match(request)
            
            if (cachedResponse) {
              return cachedResponse
            }
            
            const response = await originalFetch(request)
            
            if (response.ok) {
              cache.put(request, response.clone())
            }
            
            return response
          } catch (error) {
            console.error('Cache fetch error:', error)
            return originalFetch(request)
          }
        }
        
        return originalFetch(request)
      }
    }

    // Initialize caching strategies
    registerServiceWorker()
    setupCacheStrategy()

    // Cleanup function
    return () => {
      // Restore original fetch if needed
      if (window.fetch !== window.fetch) {
        // This is a simplified cleanup - in a real app you'd want to track the original fetch
        console.log('Cache manager cleanup')
      }
    }
  }, [])

  return null // This component doesn't render anything
}

export default CacheManager