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
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-cache-manager') === 'true'
    
    if (!shouldShow) return

    setIsVisible(true)

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
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
      const cacheDynamicContent = async (url: string) => {
        try {
          const cache = await caches.open(CACHE_NAME)
          const response = await fetch(url)
          if (response.ok) {
            await cache.put(url, response.clone())
            console.log(`Cached dynamic content: ${url}`)
          }
        } catch (error) {
          console.error(`Failed to cache dynamic content: ${url}`, error)
        }
      }

      // Initialize caching
      cacheStaticAssets()

      // Set up cache event listeners
      self.addEventListener('fetch', (event) => {
        event.respondWith(
          caches.match(event.request)
            .then((response) => {
              if (response) {
                setStats(prev => ({ ...prev, hits: prev.hits + 1 }))
                return response
              }
              
              setStats(prev => ({ ...prev, misses: prev.misses + 1 }))
              return fetch(event.request).then((response) => {
                if (response.ok) {
                  const responseClone = response.clone()
                  caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone)
                  })
                }
                return response
              })
            })
        )
      })
    }

    setupCacheStrategy()

    // Update cache stats
    const updateStats = async () => {
      try {
        const cache = await caches.open('zion-tech-cache-v1')
        const keys = await cache.keys()
        const totalSize = await Promise.all(
          keys.map(async (key) => {
            const response = await cache.match(key)
            return response ? response.headers.get('content-length') || 0 : 0
          })
        ).then(sizes => sizes.reduce((sum, size) => sum + parseInt(size.toString()), 0))

        setStats(prev => ({
          ...prev,
          size: totalSize
        }))
      } catch (error) {
        console.error('Failed to update cache stats:', error)
      }
    }

    updateStats()
    const interval = setInterval(updateStats, 5000)
    return () => clearInterval(interval)
  }, [])

  const clearCache = async () => {
    try {
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      )
      setStats(prev => ({
        ...prev,
        hits: 0,
        misses: 0,
        size: 0
      }))
      console.log('Cache cleared successfully')
    } catch (error) {
      console.error('Failed to clear cache:', error)
    }
  }

  const getCacheEfficiency = () => {
    const total = stats.hits + stats.misses
    return total > 0 ? ((stats.hits / total) * 100).toFixed(1) : '0.0'
  }

  const getSizeInMB = () => {
    return (stats.size / (1024 * 1024)).toFixed(2)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Cache
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Cache Manager</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cache Hits:</span>
              <span className="font-mono text-green-600">{stats.hits}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cache Misses:</span>
              <span className="font-mono text-red-600">{stats.misses}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Efficiency:</span>
              <span className="font-mono text-blue-600">{getCacheEfficiency()}%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cache Size:</span>
              <span className="font-mono text-purple-600">{getSizeInMB()} MB</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Max Size:</span>
              <span className="font-mono text-gray-600">50.00 MB</span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <button
              onClick={clearCache}
              className="w-full bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Clear Cache
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CacheManager
