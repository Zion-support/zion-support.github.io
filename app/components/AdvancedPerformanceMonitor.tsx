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
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcpEntry = entries[entries.length - 1]
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }))
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fidEntry = entries[0] as any
        if (fidEntry && fidEntry.processingStart) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const clsValue = entries.reduce((acc, entry) => {
          const layoutShiftEntry = entry as any
          if (!layoutShiftEntry.hadRecentInput) {
            acc += layoutShiftEntry.value || 0
          }
          return acc
        }, 0)
        setMetrics(prev => ({ ...prev, cls: clsValue }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        setMetrics(prev => ({ ...prev, ttfb }))
      }

      // Measure memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }

    const cleanup = measurePerformance()
    return cleanup
  }, [])

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good'
    if (value <= thresholds.poor) return 'Needs Improvement'
    return 'Poor'
  }

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
      >
        Advanced Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-96">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Advanced Performance Metrics</h3>
          
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <div className="text-right">
                <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                  {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
                </span>
                {metrics.loadTime && (
                  <div className="text-xs text-gray-500">
                    {getMetricStatus(metrics.loadTime, { good: 1000, poor: 3000 })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">First Contentful Paint:</span>
              <div className="text-right">
                <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                  {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
                </span>
                {metrics.fcp && (
                  <div className="text-xs text-gray-500">
                    {getMetricStatus(metrics.fcp, { good: 1800, poor: 3000 })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Largest Contentful Paint:</span>
              <div className="text-right">
                <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                  {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
                </span>
                {metrics.lcp && (
                  <div className="text-xs text-gray-500">
                    {getMetricStatus(metrics.lcp, { good: 2500, poor: 4000 })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">First Input Delay:</span>
              <div className="text-right">
                <span className={`font-mono ${metrics.fid ? getMetricColor(metrics.fid, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
                  {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
                </span>
                {metrics.fid && (
                  <div className="text-xs text-gray-500">
                    {getMetricStatus(metrics.fid, { good: 100, poor: 300 })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cumulative Layout Shift:</span>
              <div className="text-right">
                <span className={`font-mono ${metrics.cls ? getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                  {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                </span>
                {metrics.cls && (
                  <div className="text-xs text-gray-500">
                    {getMetricStatus(metrics.cls, { good: 0.1, poor: 0.25 })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Time to First Byte:</span>
              <div className="text-right">
                <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
                  {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
                </span>
                {metrics.ttfb && (
                  <div className="text-xs text-gray-500">
                    {getMetricStatus(metrics.ttfb, { good: 800, poor: 1800 })}
                  </div>
                )}
              </div>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Memory Usage:</span>
                <span className="font-mono text-gray-800">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor