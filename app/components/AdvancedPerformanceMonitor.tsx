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
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
          }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          setMetrics(prev => ({ ...prev, cls: clsValue }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }

      // Time to First Byte (TTFB)
      if (performance.timing) {
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, ttfb }))
      }

      // Memory Usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }))
      }

      // Load Time
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, loadTime }))
      }
    }

    // Run measurements after page load
    if (document.readyState === 'complete') {
      measureWebVitals()
    } else {
      window.addEventListener('load', measureWebVitals)
    }

    return () => {
      window.removeEventListener('load', measureWebVitals)
    }
  }, [])

  const getMetricColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.needsImprovement) return 'text-yellow-400'
    return 'text-red-400'
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
        <div className="fixed bottom-20 right-4 z-50 bg-gray-900 text-white p-6 rounded-lg shadow-xl max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            {/* FCP */}
            <div className="flex justify-between items-center">
              <span className="text-sm">First Contentful Paint</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}`}>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Loading...'}
              </span>
            </div>

            {/* LCP */}
            <div className="flex justify-between items-center">
              <span className="text-sm">Largest Contentful Paint</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Loading...'}
              </span>
            </div>

            {/* FID */}
            <div className="flex justify-between items-center">
              <span className="text-sm">First Input Delay</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.fid, { good: 100, needsImprovement: 300 })}`}>
                {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Loading...'}
              </span>
            </div>

            {/* CLS */}
            <div className="flex justify-between items-center">
              <span className="text-sm">Cumulative Layout Shift</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}
              </span>
            </div>

            {/* TTFB */}
            <div className="flex justify-between items-center">
              <span className="text-sm">Time to First Byte</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}`}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Loading...'}
              </span>
            </div>

            {/* Memory Usage */}
            {metrics.memoryUsage && (
              <div className="flex justify-between items-center">
                <span className="text-sm">Memory Usage</span>
                <span className="text-sm font-mono text-blue-400">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
            )}

            {/* Load Time */}
            {metrics.loadTime && (
              <div className="flex justify-between items-center">
                <span className="text-sm">Load Time</span>
                <span className="text-sm font-mono text-blue-400">
                  {Math.round(metrics.loadTime)}ms
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="text-xs text-gray-400">
              <p>Core Web Vitals are measured automatically.</p>
              <p>Refresh the page to see updated metrics.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AdvancedPerformanceMonitor