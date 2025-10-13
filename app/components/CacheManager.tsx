'use client'
import { useEffect, useState } from 'react'

interface CacheStats {
  hits: number
  misses: number
  size: number
  maxSize: number
}

const CacheManager = () => {
  const [stats, setStats] = useState<CacheStats>({
    hits: 0,
    misses: 0,
    size: 0,
    maxSize: 50 * 1024 * 1024 // 50MB
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
          console.log('Service Worker registered:', registration);

        } catch (error) {
          console.error('Service Worker registration failed:', error);
>>>>>>> cursor/website-audit-and-update-with-deployment-3210
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f373
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
          console.log('Static assets cached successfully');

        } catch (error) {
          console.error('Failed to cache static assets:', error);
>>>>>>> cursor/website-audit-and-update-with-deployment-3210
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f373
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
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const updateStats = () => {
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          let totalSize = 0
          Promise.all(
            cacheNames.map(cacheName =>
              caches.open(cacheName).then(cache =>
                cache.keys().then(requests =>
                  Promise.all(
                    requests.map(request =>
                      cache.match(request).then(response => {
                        if (response) {
                          const contentLength = response.headers.get('content-length')
                          if (contentLength) {
                            totalSize += parseInt(contentLength, 10)
                          }
                        }
                      })
                    )
                  )
                )
              )
            )
          ).then(() => {
            setStats(prev => ({
              ...prev,
              size: totalSize
            }))
          })
        })
      }
    }

    updateStats()
    const interval = setInterval(updateStats, 5000)

    return () => clearInterval(interval)
  }, [])

  // Toggle visibility with keyboard shortcut (Ctrl+Shift+C)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const clearCache = async () => {
    if ('caches' in window) {
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      )
      setStats(prev => ({ ...prev, size: 0 }))
    }
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm font-mono max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-green-400">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-300">Cache Size:</span>
          <span className="text-white">{formatBytes(stats.size)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Max Size:</span>
          <span className="text-white">{formatBytes(stats.maxSize)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Usage:</span>
          <span className="text-white">
            {((stats.size / stats.maxSize) * 100).toFixed(1)}%
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Cache Hits:</span>
          <span className="text-green-400">{stats.hits}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Cache Misses:</span>
          <span className="text-red-400">{stats.misses}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/20">
        <button
          onClick={clearCache}
          className="w-full px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
        >
          Clear Cache
        </button>
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-400">
        Press Ctrl+Shift+C to toggle
      </div>
    </div>
  )
}

export default CacheManager