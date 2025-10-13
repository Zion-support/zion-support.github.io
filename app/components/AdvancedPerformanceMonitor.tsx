'use client'
import { useEffect, useState } from 'react'
<<<<<<< HEAD



=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6877

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
<<<<<<< HEAD



=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6877
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  useEffect(() => {
    // Import web-vitals dynamically
    const measureWebVitals = async () => {
      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals')

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
<<<<<<< HEAD

        console.error('Failed to measure web vitals:', error);



=======
        console.warn('Web Vitals not available:', error)
>>>>>>> cursor/fix-errors-and-merge-to-main-6877
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
<<<<<<< HEAD

      // Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: name,
          metric_value: Math.round(value),
          metric_delta: Math.round(value)
        })
      }

      // Send to custom analytics
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('Performance Metric', {
          name,
          value: Math.round(value),
          timestamp: Date.now()
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance Metric: ${name} = ${value}`);


      }

=======
      // You can integrate with your analytics service here
      console.log(`Performance Metric - ${name}:`, value)
>>>>>>> cursor/fix-errors-and-merge-to-main-6877
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

<<<<<<< HEAD

  // Render performance dashboard in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
        <div>Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}%` : 'N/A'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}</div>
        {performanceScore && (
          <div className="mt-2 pt-2 border-t border-gray-600">
            <div>Score: {performanceScore}/100</div>
          </div>
        )}
      </div>
    )
  }

  return null
}

export default AdvancedPerformanceMonitor


=======
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
    </div>
  )
}

export default AdvancedPerformanceMonitor
>>>>>>> cursor/fix-errors-and-merge-to-main-6877
