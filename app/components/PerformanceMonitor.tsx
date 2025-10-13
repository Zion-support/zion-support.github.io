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
    const measurePerformance = () => {
      // Load Time
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, loadTime }))
      }

      // Time to First Byte
      if (performance.timing) {
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, timeToFirstByte: ttfb }))
      }

      // Memory Usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }))
      }

      // Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: fcpEntry.startTime }))
          }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ 
              ...prev, 
              firstInputDelay: entry.processingStart - entry.startTime 
            }))
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }
    }

    // Run measurements after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  const getMetricColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }


  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Toggle Performance Monitor"
      >
        📊
      </button>

      {/* Performance Monitor Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-xl p-6 max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
<<<<<<< HEAD
              <span className={`font-mono ${getMetricColor(metrics.loadTime || 0, { good: 1000, poor: 3000 })}`}>
                {metrics.loadTime?.toFixed(0) || 'N/A'}ms

=======
              <span className={`font-mono ${getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 })}`}>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
<<<<<<< HEAD
              <span className={`font-mono ${getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}`}>
                {metrics.firstContentfulPaint?.toFixed(0) || 'N/A'}ms
=======
              <span className={`font-mono ${getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}`}>
                {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
<<<<<<< HEAD
              <span className={`font-mono ${getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}`}>
                {metrics.largestContentfulPaint?.toFixed(0) || 'N/A'}ms
=======
              <span className={`font-mono ${getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}`}>
                {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
              </span>
            </div>
            
            <div className="flex justify-between items-center">
<<<<<<< HEAD
              <span className="text-gray-600">INP:</span>
              <span className={`font-mono ${getMetricColor(metrics.interactionToNextPaint || 0, { good: 200, poor: 500 })}`}>
                {metrics.interactionToNextPaint?.toFixed(0) || 'N/A'}ms
=======
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${getMetricColor(metrics.firstInputDelay, { good: 100, poor: 300 })}`}>
                {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
<<<<<<< HEAD
              <span className={`font-mono ${getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}`}>
                {metrics.cumulativeLayoutShift?.toFixed(3) || 'N/A'}
=======
              <span className={`font-mono ${getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}`}>
                {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
<<<<<<< HEAD
              <span className={`font-mono ${getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}`}>
                {metrics.timeToFirstByte?.toFixed(0) || 'N/A'}ms

=======
              <span className={`font-mono ${getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 })}`}>
                {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'N/A'}
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
              </span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Memory:</span>
                <span className="font-mono text-blue-600">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p>Core Web Vitals are measured automatically.</p>
              <p>Refresh the page to see updated metrics.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PerformanceMonitor