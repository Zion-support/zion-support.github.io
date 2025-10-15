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
    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      try {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration)
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error)
          })
      } catch (error) {
        console.error('Service Worker registration failed:', error)
      }
    }

    // Cache API for dynamic caching
    const setupCaching = async () => {
      try {
        const cache = await caches.open('app-cache-v1')
        const requests = await cache.keys()
        setStats(prev => ({
          ...prev,
          size: requests.length
        }))
      } catch (error) {
        console.error('Cache setup failed:', error)
      }
    }

    setupCaching()
  }, [])

  const clearCache = async () => {
    try {
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      )
      setStats(prev => ({
        ...prev,
        size: 0,
        hits: 0,
        misses: 0
      }))
    } catch (error) {
      console.error('Cache clear failed:', error)
    }
  }

  const getCacheHitRate = () => {
    const total = stats.hits + stats.misses
    return total > 0 ? (stats.hits / total * 100).toFixed(1) : '0'
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Show Cache Manager"
      >
        📦
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Cache Hits:</span>
          <span className="font-mono">{stats.hits}</span>
        </div>
        <div className="flex justify-between">
          <span>Cache Misses:</span>
          <span className="font-mono">{stats.misses}</span>
        </div>
        <div className="flex justify-between">
          <span>Hit Rate:</span>
          <span className="font-mono">{getCacheHitRate()}%</span>
        </div>
        <div className="flex justify-between">
          <span>Cache Size:</span>
          <span className="font-mono">{(stats.size / 1024).toFixed(1)} KB</span>
        </div>
        <div className="flex justify-between">
          <span>Max Size:</span>
          <span className="font-mono">{(stats.maxSize / 1024 / 1024).toFixed(1)} MB</span>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={clearCache}
          className="flex-1 bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors"
        >
          Clear Cache
        </button>
        <button
          onClick={() => window.location.reload()}
          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
        >
          Refresh
        </button>
      </div>
    </div>
  )
}

export default CacheManager