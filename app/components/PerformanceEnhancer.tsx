'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Zap, TrendingUp, Clock, Shield, CheckCircle } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  networkRequests: number
  errors: number
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0,
    errors: 0
  })
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizations, setOptimizations] = useState<string[]>([])

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    // Measure load time
    const loadTime = performance.now()

    // Measure memory usage
    const memoryUsage = (performance as { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0

    // Count network requests
    const networkRequests = performance.getEntriesByType('resource').length

    // Count errors
    const errors = performance.getEntriesByType('error').length

    setMetrics({
      loadTime,
      renderTime: performance.now() - loadTime,
      memoryUsage,
      networkRequests,
      errors
    })
  }, [])

  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true)
    const newOptimizations: string[] = []

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]')
    images.forEach(img => {
      const lazyImg = img as HTMLImageElement
      if (lazyImg.dataset.src) {
        lazyImg.src = lazyImg.dataset.src
        lazyImg.removeAttribute('data-src')
        newOptimizations.push('Lazy loaded images')
      }
    })

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'font'
      document.head.appendChild(link)
      newOptimizations.push(`Preloaded ${resource}`)
    })

    // Optimize images
    const imageElements = document.querySelectorAll('img')
    imageElements.forEach(img => {
      const image = img as HTMLImageElement
      if (!image.loading) {
        image.loading = 'lazy'
        newOptimizations.push('Added lazy loading to images')
      }
    })

    // Enable service worker caching
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js')
        newOptimizations.push('Service worker registered')
      } catch (error) {
        console.error('Service worker registration failed:', error)
      }
    }

    setOptimizations(newOptimizations)
    setIsOptimizing(false)
  }, [])

  useEffect(() => {
    measurePerformance()
    
    const interval = setInterval(measurePerformance, 5000)
    return () => clearInterval(interval)
  }, [measurePerformance])

  const getPerformanceScore = () => {
    let score = 100
    
    if (metrics.loadTime > 3000) score -= 20
    if (metrics.renderTime > 100) score -= 15
    if (metrics.memoryUsage > 50 * 1024 * 1024) score -= 10 // 50MB
    if (metrics.networkRequests > 50) score -= 10
    if (metrics.errors > 0) score -= 20

    return Math.max(0, score)
  }

  const performanceScore = getPerformanceScore()

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
          Performance Monitor
        </h2>
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Load Time</span>
            <Clock className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {metrics.loadTime.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Memory</span>
            <TrendingUp className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Requests</span>
            <Shield className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {metrics.networkRequests}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Score</span>
            <Zap className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {performanceScore}/100
          </p>
        </div>
      </div>

      {optimizations.length > 0 && (
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-green-800 mb-2">
            Recent Optimizations
          </h3>
          <ul className="space-y-1">
            {optimizations.map((optimization, index) => (
              <li key={index} className="flex items-center text-sm text-green-700">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                {optimization}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PerformanceEnhancer