'use client'
import { useEffect } from 'react'

const CacheManager = () => {
  useEffect(() => {
    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.error('Service Worker registration failed:', error);
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
        '/pricing',
        '/contact',
        '/ai-services',
        '/micro-saas'
      ]

      // Cache static assets
      const cacheStaticAssets = async () => {
        try {
          const cache = await caches.open(CACHE_NAME);
          await cache.addAll(CACHE_URLS);
          console.log('Static assets cached successfully');
        } catch (error) {
          console.error('Failed to cache static assets:', error);
        }
      }

      // Cache strategy for API calls
      const cacheFirst = async (request: Request) => {
        try {
          const cache = await caches.open(CACHE_NAME)
          const cachedResponse = await cache.match(request)
          
          if (cachedResponse) {
            return cachedResponse
          }
          
          const response = await fetch(request)
          
          if (response.ok) {
            cache.put(request, response.clone())
          }
          
          return response

        } catch (error) {
          console.error('Cache API error:', error);
          return fetch(request);
        }
      }

      // Initialize caching
      cacheStaticAssets()

      // Intercept fetch requests for caching
      const originalFetch = window.fetch
      window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
        const request = new Request(input, init)
        
        // Only cache GET requests
        if (request.method === 'GET') {
          return cacheFirst(request)
        }
        
        return originalFetch(input, init)
      }

      // Cleanup function
      return () => {
        window.fetch = originalFetch
      }
    }

    // Initialize both service worker and cache strategy
    registerServiceWorker()
    const cleanup = setupCacheStrategy()

    return cleanup
  }, [])

  return null
}

export default CacheManager