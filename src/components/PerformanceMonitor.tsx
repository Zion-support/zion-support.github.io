import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const startTime = performance.now()
    
    // Monitor page load time
    const handleLoad = () => {
      const loadTime = performance.now() - startTime
      const renderTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: memoryUsage ? Math.round(memoryUsage / 1024 / 1024) : undefined
      })
    }

    // Monitor render performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`)
        }
      })
    })

    observer.observe({ entryTypes: ['measure'] })

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      observer.disconnect()
    }
  }, [])

  if (!metrics || process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-blue-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 min-w-64">
          <h3 className="font-semibold text-gray-900 mb-2">Performance Metrics</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className="font-medium">{metrics.loadTime}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Render Time:</span>
              <span className="font-medium">{metrics.renderTime}ms</span>
            </div>
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span className="text-gray-600">Memory:</span>
                <span className="font-medium">{metrics.memoryUsage}MB</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor