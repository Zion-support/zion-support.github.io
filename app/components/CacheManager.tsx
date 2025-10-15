'use client'
import React, { useState, useEffect } from 'react';

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
    const updateStats = () => {
      try {
        // Update cache statistics
        if ('caches' in window) {
          caches.keys().then(cacheNames => {
            setStats(prev => ({
              ...prev,
              size: cacheNames.length * 1024 * 1024 // Rough estimate
            }))
          })
        }
      } catch (error) {
        console.warn('Cache API not supported:', error)
      }
    }

    updateStats()
    
    // Update stats every 30 seconds
    const interval = setInterval(updateStats, 30000)
    
    return () => clearInterval(interval)
  }, [])

  // Cache API for dynamic caching
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration)
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error)
        })
    }
  }, [])

  const clearCache = async () => {
    try {
      if ('caches' in window) {
        const cacheNames = await caches.keys()
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        )
        setStats(prev => ({ ...prev, hits: 0, misses: 0, size: 0 }))
        console.log('Cache cleared successfully')
      }
    } catch (error) {
      console.error('Failed to clear cache:', error)
    }
  }

  const preloadCriticalResources = () => {
    const criticalResources = [
      '/css/critical.css',
      '/js/app.js',
      '/fonts/inter.woff2'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'script'
      document.head.appendChild(link)
    })
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Cache Manager"
      >
        📦
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-600">Hits:</span>
            <span className="ml-2 font-mono">{stats.hits}</span>
          </div>
          <div>
            <span className="text-gray-600">Misses:</span>
            <span className="ml-2 font-mono">{stats.misses}</span>
          </div>
          <div>
            <span className="text-gray-600">Size:</span>
            <span className="ml-2 font-mono">
              {(stats.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
          <div>
            <span className="text-gray-600">Max Size:</span>
            <span className="ml-2 font-mono">
              {(stats.maxSize / 1024 / 1024).toFixed(0)} MB
            </span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={clearCache}
            className="flex-1 bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600 transition-colors"
          >
            Clear Cache
          </button>
          <button
            onClick={preloadCriticalResources}
            className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
          >
            Preload
          </button>
        </div>
      </div>
    </div>
  )
}

export default CacheManager