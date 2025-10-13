'use client'
import { useEffect } from 'react'

const CacheManager = () => {
  useEffect(() => {
    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');

          // Service Worker registered successfully
        } catch (error) {
          // Handle service worker registration error silently in production
          if (process.env.NODE_ENV === 'development' && 
              typeof window !== 'undefined' && 
              window.location.hostname === 'localhost') {
            console.error('Service Worker registration failed:', error);
          }
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
          const cache = await caches.open(CACHE_NAME);
          await cache.addAll(CACHE_URLS);

          // Static assets cached successfully
        } catch (error) {
          // Handle cache error silently in production
          if (process.env.NODE_ENV === 'development' && 
              typeof window !== 'undefined' && 
              window.location.hostname === 'localhost') {
            console.error('Failed to cache static assets:', error);
          }
        }
      }

      // Cache API responses
      const cacheAPIResponses = async (request: Request) => {
        try {
          const cache = await caches.open(CACHE_NAME)
          const response = await fetch(request)
          
          if (response.ok) {
            cache.put(request, response.clone())
          }
          
          return response

        } catch (error) {
          // Handle cache API error silently in production
          if (process.env.NODE_ENV === 'development' && 
              typeof window !== 'undefined' && 
              window.location.hostname === 'localhost') {
            console.error('Cache API error:', error);
          }
          return fetch(request);
        }
      }

      // Initialize caching
      cacheStaticAssets()

      // Intercept fetch requests for caching
      const originalFetch = window.fetch
      window.fetch = async (input, init) => {
        const request = new Request(input, init)
        
        // Check if request should be cached
        if (request.url.includes('/api/') || request.url.includes('/data/')) {
          return cacheAPIResponses(request)
        }
        
        return originalFetch(input, init)
      }
    }

    // Memory management for large objects
    const setupMemoryManagement = () => {
      // Clean up unused objects periodically
      const cleanupInterval = setInterval(() => {
        if ((performance as any).memory) {
          const memoryInfo = (performance as any).memory
          const usedMemory = memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize
          
          // If memory usage is high, trigger garbage collection
          if (usedMemory > 0.8) {
            // Force garbage collection if available
            if ((window as any).gc) {
              (window as any).gc()
            }
          }
        }
      }, 30000) // Check every 30 seconds

      // Cleanup on page unload
      window.addEventListener('beforeunload', () => {
        clearInterval(cleanupInterval)
      })
    }

    // Image lazy loading with intersection observer
    const setupLazyLoading = () => {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.classList.remove('lazy')
              imageObserver.unobserve(img)
            }
          }
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