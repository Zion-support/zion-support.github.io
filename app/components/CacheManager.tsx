'use client'
import React, { useState, useEffect } from 'react'

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
    // Initialize cache monitoring
    const initializeCache = () => {
      try {
        // Check if Cache API is available
        if ('caches' in window) {
          caches.keys().then(cacheNames => {
            console.log('Available caches:', cacheNames)
          })
        }
      } catch (error) {
        console.error('Cache initialization error:', error)
      }
    }

    // Cache API for dynamic caching
    const setupCacheStrategy = () => {
      const CACHE_NAME = 'zion-tech-cache-v1'
      
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          if (registration.active) {
            registration.active.postMessage({
              type: 'CACHE_STRATEGY',
              cacheName: CACHE_NAME
            })
          }
        })
      }
    }

    initializeCache()
    setupCacheStrategy()
  }, [])

  const clearCache = async () => {
    try {
      if ('caches' in window) {
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
      }
    } catch (error) {
      console.error('Cache clear error:', error)
    }
  }

  const getCacheStats = async () => {
    try {
      if ('caches' in window) {
        const cacheNames = await caches.keys()
        let totalSize = 0
        
        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName)
          const keys = await cache.keys()
          totalSize += keys.length
        }
        
        setStats(prev => ({
          ...prev,
          size: totalSize
        }))
      }
    } catch (error) {
      console.error('Cache stats error:', error)
    }
  }

  useEffect(() => {
    getCacheStats()
  }, [])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Cache Manager"
      >
        📦
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-64">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div>Hits: {stats.hits}</div>
        <div>Misses: {stats.misses}</div>
        <div>Size: {(stats.size / 1024).toFixed(2)} KB</div>
        <div>Max Size: {(stats.maxSize / 1024 / 1024).toFixed(2)} MB</div>
      </div>
      
      <div className="mt-4 space-y-2">
        <button
          onClick={clearCache}
          className="w-full bg-red-600 text-white py-1 px-3 rounded text-sm hover:bg-red-700 transition-colors"
        >
          Clear Cache
        </button>
        <button
          onClick={getCacheStats}
          className="w-full bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700 transition-colors"
        >
          Refresh Stats
        </button>
      </div>
    </div>
  )
}

export default CacheManager