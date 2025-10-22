'use client'
import React, { useState, useEffect } from 'react'

interface PerformanceMetrics {
  loadTime?: number
  memoryUsage?: number
  connectionSpeed?: string
  renderTime?: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Initialize performance monitoring
    const measureWebVitals = () => {
      // Basic web vitals measurement
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          
          // Get memory usage if available
          const memory = (performance as any).memory
          const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0
          
          // Get connection speed
          const connection = (navigator as any).connection
          const connectionSpeed = connection ? connection.effectiveType || 'unknown' : 'unknown'
          
          setMetrics({
            loadTime: Math.round(loadTime),
            memoryUsage,
            connectionSpeed,
            renderTime: Math.round(domContentLoaded)
          })
        }
      }
    }

    // Track performance after page load
    if (document.readyState === 'complete') {
      measureWebVitals()
    } else {
      window.addEventListener('load', measureWebVitals)
    }

    // Keyboard shortcut to toggle visibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('load', measureWebVitals)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load Time: {metrics.loadTime}ms</div>
        )}
        {metrics.renderTime && (
          <div>Render Time: {metrics.renderTime}ms</div>
        )}
        {metrics.memoryUsage && (
          <div>Memory: {metrics.memoryUsage}MB</div>
        )}
        {metrics.connectionSpeed && (
          <div>Connection: {metrics.connectionSpeed}</div>
        )}
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}

export default PerformanceMonitor