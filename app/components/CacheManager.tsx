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
    const initializeCache = () => {
      try {
        // Initialize cache statistics
        const cachedStats = localStorage.getItem('cache-stats')
        if (cachedStats) {
          setStats(JSON.parse(cachedStats))
        }
      } catch (error) {
        console.error('Failed to initialize cache:', error)
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
        } catch (error) {
          console.error('Failed to cache static assets:', error)
        }
      }

      // Cache API responses
      const cacheAPIResponses = async (request: Request) => {
        try {
          const cache = await caches.open(CACHE_NAME)
          const response = await fetch(request)
          if (response.ok) {
            await cache.put(request, response.clone())
          }
          return response
        } catch (error) {
          console.error('Failed to cache API response:', error)
          return fetch(request)
        }
      }

      // Use the cacheAPIResponses function
      window.addEventListener('fetch', (event) => {
        if (event.request.url.includes('/api/')) {
          event.respondWith(cacheAPIResponses(event.request))
        }
      })

      // Service worker registration for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration)
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error)
          })
      }

      cacheStaticAssets()
    }

    // Memory-based caching
    const setupMemoryCache = () => {
      const memoryCache = new Map()
      const maxMemorySize = 10 * 1024 * 1024 // 10MB
      let currentSize = 0

      const getFromCache = (key: string) => {
        if (memoryCache.has(key)) {
          setStats(prev => ({ ...prev, hits: prev.hits + 1 }))
          return memoryCache.get(key)
        }
        setStats(prev => ({ ...prev, misses: prev.misses + 1 }))
        return null
      }

      const setToCache = (key: string, value: any) => {
        const serialized = JSON.stringify(value)
        const size = new Blob([serialized]).size

        if (currentSize + size > maxMemorySize) {
          // Remove oldest entries
          const entries = Array.from(memoryCache.entries())
          for (const [k, v] of entries) {
            memoryCache.delete(k)
            currentSize -= new Blob([JSON.stringify(v)]).size
            if (currentSize + size <= maxMemorySize) break
          }
        }

        memoryCache.set(key, value)
        currentSize += size
        setStats(prev => ({ ...prev, size: currentSize }))
      }

      // Expose cache methods globally for debugging
      (window as any).cacheManager = {
        get: getFromCache,
        set: setToCache,
        clear: () => {
          memoryCache.clear()
          currentSize = 0
          setStats(prev => ({ ...prev, size: 0 }))
        },
        stats: () => stats
      }
    }

    initializeCache()
    setupCacheStrategy()
    setupMemoryCache()

    // Set up keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const clearCache = async () => {
    try {
      // Clear all caches
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      )

      // Clear memory cache
      if ((window as any).cacheManager) {
        (window as any).cacheManager.clear()
      }

      // Clear localStorage cache stats
      localStorage.removeItem('cache-stats')

      // Reset stats
      setStats({
        hits: 0,
        misses: 0,
        size: 0,
        maxSize: 50 * 1024 * 1024
      })

      alert('Cache cleared successfully!')
    } catch (error) {
      console.error('Failed to clear cache:', error)
      alert('Failed to clear cache')
    }
  }

  const exportCacheStats = () => {
    const dataStr = JSON.stringify(stats, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'cache-stats.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const hitRate = stats.hits + stats.misses > 0 
    ? ((stats.hits / (stats.hits + stats.misses)) * 100).toFixed(2)
    : '0.00'

  const sizeInMB = (stats.size / 1024 / 1024).toFixed(2)
  const maxSizeInMB = (stats.maxSize / 1024 / 1024).toFixed(0)

  if (!isVisible) return null

  return (
    <div className="fixed top-4 left-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Cache Hits:</span>
          <span className="text-green-400">{stats.hits}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Cache Misses:</span>
          <span className="text-red-400">{stats.misses}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Hit Rate:</span>
          <span className="text-cyan-400">{hitRate}%</span>
        </div>
        
        <div className="flex justify-between">
          <span>Cache Size:</span>
          <span className="text-yellow-400">{sizeInMB}MB / {maxSizeInMB}MB</span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(stats.size / stats.maxSize) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={clearCache}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs"
        >
          Clear Cache
        </button>
        
        <button
          onClick={exportCacheStats}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs"
        >
          Export Stats
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+C to toggle
      </div>
    </div>
  )
}

export default CacheManager