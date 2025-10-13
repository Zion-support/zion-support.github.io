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

<<<<<<< HEAD
        onCLS((metric: any) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }))
          reportMetric('CLS', metric.value)
        })

        onINP((metric: any) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }))
          reportMetric('INP', metric.value)
        })

        onFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
          reportMetric('FCP', metric.value)
        })

        onLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
          reportMetric('LCP', metric.value)
        })

        onTTFB((metric: any) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }))
          reportMetric('TTFB', metric.value)
        })
      } catch (error) {
        console.warn('Web Vitals not available:', error)

      }
    }

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }))
      }
    }

    // Measure load time
    const measureLoadTime = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        setMetrics(prev => ({ ...prev, loadTime }))
      }
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // You can integrate with your analytics service here
      console.log(`Performance Metric - ${name}:`, value)

    }

    measureWebVitals()
    measureMemory()
    measureLoadTime()

    // Set up performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log('Custom Performance Measure:', entry.name, entry.duration)
          }
        }
      })
      observer.observe({ entryTypes: ['measure'] })
    }
  }, [])

  // Calculate performance score
  const calculateScore = () => {
    let score = 100
    let factors = 0

    if (metrics.fcp !== null) {
      factors++
      if (metrics.fcp > 1800) score -= 20
      else if (metrics.fcp > 1000) score -= 10
    }

    if (metrics.lcp !== null) {
      factors++
      if (metrics.lcp > 2500) score -= 20
      else if (metrics.lcp > 1500) score -= 10
    }

    if (metrics.cls !== null) {
      factors++
      if (metrics.cls > 0.25) score -= 20
      else if (metrics.cls > 0.1) score -= 10
    }

    if (metrics.fid !== null) {
      factors++
      if (metrics.fid > 300) score -= 20
      else if (metrics.fid > 100) score -= 10
    }

    return factors > 0 ? Math.max(0, score) : null
  }

  const performanceScore = calculateScore()

  // Don't render if no metrics are available
  if (!performanceScore) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
      </div>

      <div className="space-y-3">
        {/* Performance Score */}
        <div className="text-center">
          <div className={`text-2xl font-bold ${
            performanceScore >= 90 ? 'text-green-500' : 
            performanceScore >= 70 ? 'text-yellow-500' : 'text-red-500'
          }`}>
            {performanceScore}/100
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Performance Score</div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          {metrics.fcp !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">FCP</div>
              <div className="font-semibold">{metrics.fcp.toFixed(0)}ms</div>
            </div>
          )}
          {metrics.lcp !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">LCP</div>
              <div className="font-semibold">{metrics.lcp.toFixed(0)}ms</div>
            </div>
          )}
          {metrics.cls !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">CLS</div>
              <div className="font-semibold">{metrics.cls.toFixed(3)}</div>
            </div>
          )}
          {metrics.fid !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">FID</div>
              <div className="font-semibold">{metrics.fid.toFixed(0)}ms</div>
            </div>
          )}
        </div>

        {/* Memory Usage */}
        {metrics.memoryUsage !== null && (
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">Memory</div>
            <div className="text-sm font-semibold">
              {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
            </div>
          </div>
        )}

        {/* Load Time */}
        {metrics.loadTime !== null && (
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">Load Time</div>
            <div className="text-sm font-semibold">{metrics.loadTime}ms</div>
          </div>
        )}
      </div>
=======
    const measurePerformance = () => {
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
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics(prev => ({ ...prev, cls: clsValue }))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      // Measure page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })

      // Cleanup observers
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

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.poor) return 'text-yellow-400'
    return 'text-red-400'
  }


  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg min-w-80">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">First Contentful Paint</span>
              <span className={`text-sm font-mono ${getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Largest Contentful Paint</span>
              <span className={`text-sm font-mono ${getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">First Input Delay</span>
              <span className={`text-sm font-mono ${getScoreColor(metrics.fid, { good: 100, poor: 300 })}`}>
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Cumulative Layout Shift</span>
              <span className={`text-sm font-mono ${getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Time to First Byte</span>
              <span className={`text-sm font-mono ${getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Memory Usage</span>
              <span className="text-sm font-mono text-blue-400">
                {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Load Time</span>
              <span className="text-sm font-mono text-blue-400">
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-600">
            <div className="text-xs text-gray-400">
              <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
            </div>
          </div>
        </div>
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-6b10
    </div>
  )
}

export default AdvancedPerformanceMonitor