'use client'
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
        '/styles/main.css',
        '/scripts/main.js'
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

      // Cache dynamic content
      const cacheDynamicContent = async (request: Request) => {
        try {
          const cache = await caches.open(CACHE_NAME)
          const response = await fetch(request)
          if (response.ok) {
            cache.put(request, response.clone())
          }
          return response
        } catch (error) {
          console.error('Failed to cache dynamic content:', error)
          return fetch(request)
        }
      }

      // Initialize caching
      cacheStaticAssets()

      // Set up fetch interceptor for dynamic caching
      const originalFetch = window.fetch
      window.fetch = async (input, init) => {
        const request = new Request(input, init)
        
        // Check if we should cache this request
        if (shouldCache(request)) {
          return cacheDynamicContent(request)
        }
        
        return originalFetch(input, init)
      }
    }

    // Determine if a request should be cached
    const shouldCache = (request: Request): boolean => {
      const url = new URL(request.url)
      
      // Cache API requests and static assets
      return (
        url.pathname.startsWith('/api/') ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.jpeg') ||
        url.pathname.endsWith('.gif') ||
        url.pathname.endsWith('.svg')
      )
    }

    // Initialize cache management
    registerServiceWorker()
    setupCacheStrategy()

    // Cleanup function
    return () => {
      // Restore original fetch if needed
      if (window.fetch !== fetch) {
        // This is a simplified cleanup - in a real app you'd want to track the original fetch
        console.log('Cache manager cleanup')
      }
    }
  }, [])

  // This component doesn't render anything
  return null
}

export default CacheManager