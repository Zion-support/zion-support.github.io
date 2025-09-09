import React, { useEffect, useState } from 'react'
import { useAnalytics } from '../context/AnalyticsContext'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  memoryUsage?: number
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      
      // Get LCP if available
      let largestContentfulPaint = 0
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            largestContentfulPaint = lastEntry.startTime
          })
          observer.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          console.warn('LCP not supported:', e)
        }
      }

      // Get FID if available
      let firstInputDelay = 0
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry: any) => {
              firstInputDelay = entry.processingStart - entry.startTime
            })
          })
          observer.observe({ entryTypes: ['first-input'] })
        } catch (e) {
          console.warn('FID not supported:', e)
        }
      }

      // Get CLS if available
      let cumulativeLayoutShift = 0
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            let clsValue = 0
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value
              }
            }
            cumulativeLayoutShift = clsValue
          })
          observer.observe({ entryTypes: ['layout-shift'] })
        } catch (e) {
          console.warn('CLS not supported:', e)
        }
      }

      // Get memory usage if available
      let memoryUsage: number | undefined
      if ('memory' in performance) {
        memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024 // MB
      }

      const performanceMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        memoryUsage
      }

      setMetrics(performanceMetrics)

      // Track performance metrics
      trackEvent('performance_metrics', {
        load_time: loadTime,
        fcp: firstContentfulPaint,
        lcp: largestContentfulPaint,
        fid: firstInputDelay,
        cls: cumulativeLayoutShift,
        memory_usage: memoryUsage
      })

      // Log performance issues
      if (loadTime > 3000) {
        console.warn('Slow page load detected:', loadTime + 'ms')
      }
      if (firstContentfulPaint > 1800) {
        console.warn('Slow FCP detected:', firstContentfulPaint + 'ms')
      }
      if (cumulativeLayoutShift > 0.1) {
        console.warn('High CLS detected:', cumulativeLayoutShift)
      }
    }

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [trackEvent])

  // Show performance monitor in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true)
    }
  }, [])

  if (!isVisible || !metrics) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono max-w-xs z-50">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
        <div>FID: {metrics.firstInputDelay.toFixed(0)}ms</div>
        <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
        {metrics.memoryUsage && (
          <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
        )}
      </div>
    </div>
  )
}

export default PerformanceMonitor