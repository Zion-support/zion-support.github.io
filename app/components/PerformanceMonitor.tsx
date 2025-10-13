'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number | null
  firstContentfulPaint: number | null
  largestContentfulPaint: number | null
  firstInputDelay: number | null
  cumulativeLayoutShift: number | null
  timeToFirstByte: number | null
  memoryUsage: number | null
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToFirstByte: null,
    memoryUsage: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const measurePerformance = () => {
      // Measure page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })

      // Measure First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, firstContentfulPaint: fcpEntry.startTime }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        setMetrics(prev => ({ ...prev, timeToFirstByte: ttfb }))
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        clsObserver.disconnect()
      }
    }

    const cleanup = measurePerformance()
    return cleanup
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
          
          <div className="space-y-3">
            {metrics.loadTime !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">Load Time:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.loadTime.toFixed(2)}ms
                </span>
              </div>
            )}
            
            {metrics.firstContentfulPaint !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">FCP:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.firstContentfulPaint.toFixed(2)}ms
                </span>
              </div>
            )}
            
            {metrics.largestContentfulPaint !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">LCP:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.largestContentfulPaint.toFixed(2)}ms
                </span>
              </div>
            )}
            
            {metrics.cumulativeLayoutShift !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">CLS:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.cumulativeLayoutShift.toFixed(4)}
                </span>
              </div>
            )}
            
            {metrics.timeToFirstByte !== null && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">TTFB:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {metrics.timeToFirstByte.toFixed(2)}ms
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
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setMetrics({
                  loadTime: null,
                  firstContentfulPaint: null,
                  largestContentfulPaint: null,
                  firstInputDelay: null,
                  cumulativeLayoutShift: null,
                  timeToFirstByte: null,
                  memoryUsage: null
                })
              }}
              className="w-full text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
            >
              Reset Metrics
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor