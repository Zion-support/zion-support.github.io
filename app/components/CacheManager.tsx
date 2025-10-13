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
    // Initialize cache management
    const initializeCache = () => {
      try {
        // Check if Cache API is supported
        if ('caches' in window) {
          setupCacheStrategy()
        }
        
        // Setup memory cache
        setupMemoryCache()
        
        // Setup localStorage cache
        setupLocalStorageCache()
      } catch (error) {
        console.warn('Cache initialization failed:', error)
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
        '/static/js/',
        '/static/css/'
      ]

      // Install service worker cache
      caches.open(CACHE_NAME).then(cache => {
        cache.addAll(CACHE_URLS).catch(err => {
          console.warn('Failed to cache some resources:', err)
        })
      })
    }

    // Memory cache for API responses
    const setupMemoryCache = () => {
      const memoryCache = new Map<string, { data: any; timestamp: number; ttl: number }>()
      
      // Cache API responses
      const originalFetch = window.fetch
      window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
        const url = typeof input === 'string' ? input : input.toString()
        const cacheKey = `api:${url}`
        
        // Check cache first
        const cached = memoryCache.get(cacheKey)
        if (cached && Date.now() - cached.timestamp < cached.ttl) {
          setStats(prev => ({ ...prev, hits: prev.hits + 1 }))
          return new Response(JSON.stringify(cached.data), {
            headers: { 'Content-Type': 'application/json' }
          })
        }

        // Fetch from network
        try {
          const response = await originalFetch(input, init)
          const data = await response.clone().json()
          
          // Cache successful responses
          if (response.ok) {
            memoryCache.set(cacheKey, {
              data,
              timestamp: Date.now(),
              ttl: 5 * 60 * 1000 // 5 minutes
            })
            setStats(prev => ({ ...prev, misses: prev.misses + 1 }))
          }
          
          return response
        } catch (error) {
          setStats(prev => ({ ...prev, misses: prev.misses + 1 }))
          throw error
        }
      }
    }

    // localStorage cache for user preferences
    const setupLocalStorageCache = () => {
      const CACHE_PREFIX = 'zion_cache_'
      const MAX_ITEMS = 100
      
      const getCacheSize = () => {
        let size = 0
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key?.startsWith(CACHE_PREFIX)) {
            size += localStorage.getItem(key)?.length || 0
          }
        }
        return size
      }

      const cleanupOldItems = () => {
        const items: Array<{ key: string; timestamp: number }> = []
        
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key?.startsWith(CACHE_PREFIX)) {
            const item = localStorage.getItem(key)
            if (item) {
              try {
                const parsed = JSON.parse(item)
                items.push({ key, timestamp: parsed.timestamp || 0 })
              } catch {
                localStorage.removeItem(key)
              }
            }
          }
        }
        
        // Sort by timestamp and remove oldest items
        items.sort((a, b) => a.timestamp - b.timestamp)
        const toRemove = items.slice(0, Math.max(0, items.length - MAX_ITEMS))
        toRemove.forEach(item => localStorage.removeItem(item.key))
      }

      // Cleanup old items periodically
      setInterval(cleanupOldItems, 10 * 60 * 1000) // Every 10 minutes
      
      // Update cache size
      setStats(prev => ({ ...prev, size: getCacheSize() }))
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/icons/sprite.svg'
      ]

      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : resource.endsWith('.jpg') ? 'image' : 'fetch'
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous'
        }
        document.head.appendChild(link)
      })
    }

    // Initialize everything
    initializeCache()
    preloadCriticalResources()

    // Update stats periodically
    const statsInterval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        size: getCacheSize()
      }))
    }, 30000) // Every 30 seconds

    return () => {
      clearInterval(statsInterval)
    }
  }, [])

  const getCacheSize = () => {
    let size = 0
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('zion_cache_')) {
        size += localStorage.getItem(key)?.length || 0
      }
    }
    return size
  }

  const clearCache = () => {
    // Clear memory cache
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          if (name.startsWith('zion-tech-cache')) {
            caches.delete(name)
          }
        })
      })
    }

    // Clear localStorage cache
    const keysToRemove: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('zion_cache_')) {
        keysToRemove.push(key)
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key))

    // Reset stats
    setStats(prev => ({
      ...prev,
      hits: 0,
      misses: 0,
      size: 0
    }))
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
        aria-label="Show cache manager"
      >
        📦
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border min-w-64 z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Cache Manager
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close cache manager"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cache Hits:</span>
          <span className="text-green-600 dark:text-green-400">{stats.hits}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cache Misses:</span>
          <span className="text-red-600 dark:text-red-400">{stats.misses}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cache Size:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatBytes(stats.size)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Hit Rate:</span>
          <span className="text-purple-600 dark:text-purple-400">
            {stats.hits + stats.misses > 0 
              ? Math.round((stats.hits / (stats.hits + stats.misses)) * 100) 
              : 0}%
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <button
          onClick={clearCache}
          className="w-full bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600 transition-colors"
        >
          Clear All Cache
        </button>
        <button
          onClick={() => setStats(prev => ({ ...prev, hits: 0, misses: 0 }))}
          className="w-full bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors"
        >
          Reset Stats
        </button>
      </div>
    </div>
  )
}

export default CacheManager