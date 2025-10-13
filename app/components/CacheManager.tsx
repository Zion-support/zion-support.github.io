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
        '/contact',
        '/static/js/bundle.js',
        '/static/css/main.css'
      ]

      // Install event - cache resources
      self.addEventListener('install', (event: any) => {
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CACHE_URLS))
        )
      })

      // Fetch event - serve from cache
      self.addEventListener('fetch', (event: any) => {
        event.respondWith(
          caches.match(event.request)
            .then(response => {
              if (response) {
                return response
              }
              return fetch(event.request)
            })
        )
      })


      // Cache static assets
      const cacheStaticAssets = async () => {
        try {
          const cache = await caches.open(CACHE_NAME)
          const requests = CACHE_URLS.map(url => new Request(url))
          await cache.addAll(requests)
        } catch (error) {
          console.error('Static asset caching error:', error);
        }
      }

      // Initialize caching
      cacheStaticAssets()
    }

    // Register service worker and setup caching
    registerServiceWorker()
    setupCacheStrategy()

    // Cleanup old caches
    const cleanupOldCaches = async () => {
      try {
        const cacheNames = await caches.keys()
        const oldCaches = cacheNames.filter(name => name !== 'zion-tech-cache-v1')
        
        await Promise.all(
          oldCaches.map(cacheName => caches.delete(cacheName))
        )
      } catch (error) {
        console.error('Cache cleanup error:', error);
      }
    }

    cleanupOldCaches()
  }, [])

  return null // This component doesn't render anything
}

export default CacheManager