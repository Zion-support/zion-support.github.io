'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const reportMetric = (name: string, value: number) => {
      console.log(`Performance Metric - ${name}:`, value)
    }

    let fcpObserver: PerformanceObserver | null = null
    let lcpObserver: PerformanceObserver | null = null
    let clsObserver: PerformanceObserver | null = null

    // Web Vitals
    if (typeof window !== 'undefined') {
      // First Contentful Paint
      fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            reportMetric('FCP', entry.startTime)
          }
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        reportMetric('LCP', lastEntry.startTime)
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Cumulative Layout Shift
      clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }))
        reportMetric('CLS', clsValue)
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        setMetrics(prev => ({ ...prev, ttfb }))
        reportMetric('TTFB', ttfb)
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
        reportMetric('Memory Usage (MB)', memory.usedJSHeapSize / 1024 / 1024)
      }

      // Load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
        reportMetric('Load Time (ms)', loadTime)
      })
    }

    return () => {
      fcpObserver?.disconnect()
      lcpObserver?.disconnect()
      clsObserver?.disconnect()
    }
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Performance Monitor
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
          
          <div className="space-y-3">
            {metrics.fcp !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">FCP:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.fcp.toFixed(2)}ms
                </span>
              </div>
            )}
            
            {metrics.lcp !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">LCP:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.lcp.toFixed(2)}ms
                </span>
              </div>
            )}
            
            {metrics.cls !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">CLS:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.cls.toFixed(4)}
                </span>
              </div>
            )}
            
            {metrics.ttfb !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">TTFB:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.ttfb.toFixed(2)}ms
                </span>
              </div>
            )}
            
            {metrics.memoryUsage !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">Memory:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.memoryUsage.toFixed(2)}MB
                </span>
              </div>
            )}
            
            {metrics.loadTime !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">Load Time:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.loadTime.toFixed(2)}ms
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setMetrics({
                  fcp: null,
                  lcp: null,
                  fid: null,
                  cls: null,
                  ttfb: null,
                  memoryUsage: null,
                  loadTime: null
                })
              }}
              className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              Reset Metrics
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor