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

  useEffect(() => {
    // Measure Web Vitals
    const measureWebVitals = async () => {
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals')

        onFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
          reportMetric('FCP', metric.value)
        })

        onLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
          reportMetric('LCP', metric.value)
        })

        // FID is deprecated, using INP instead
        // onFID((metric: any) => {
        //   setMetrics(prev => ({ ...prev, fid: metric.value }))
        //   reportMetric('FID', metric.value)
        // })

        onCLS((metric: any) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }))
          reportMetric('CLS', metric.value)
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
        const memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
        setMetrics(prev => ({ ...prev, memoryUsage }))
        reportMetric('Memory Usage', memoryUsage)
      }
    }

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now()
      setMetrics(prev => ({ ...prev, loadTime }))
      reportMetric('Load Time', loadTime)
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
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

      return () => observer.disconnect()
    }
  }, [])

  // Calculate performance score based on metrics
  const calculateScore = () => {
    let score = 100
    let factors = 0

    // FCP scoring (0-100ms = 100, 100-3000ms = decreasing score)
    if (metrics.fcp !== null) {
      factors++
      if (metrics.fcp <= 100) score -= 0
      else if (metrics.fcp <= 1000) score -= 10
      else if (metrics.fcp <= 2000) score -= 20
      else if (metrics.fcp <= 3000) score -= 30
      else score -= 40
    }

    // LCP scoring (0-2500ms = 100, 2500-4000ms = decreasing score)
    if (metrics.lcp !== null) {
      factors++
      if (metrics.lcp <= 2500) score -= 0
      else if (metrics.lcp <= 3000) score -= 10
      else if (metrics.lcp <= 3500) score -= 20
      else if (metrics.lcp <= 4000) score -= 30
      else score -= 40
    }

    // FID scoring (0-100ms = 100, 100-300ms = decreasing score)
    if (metrics.fid !== null) {
      factors++
      if (metrics.fid <= 100) score -= 0
      else if (metrics.fid <= 200) score -= 10
      else if (metrics.fid <= 300) score -= 20
      else score -= 30
    }

    // CLS scoring (0-0.1 = 100, 0.1-0.25 = decreasing score)
    if (metrics.cls !== null) {
      factors++
      if (metrics.cls <= 0.1) score -= 0
      else if (metrics.cls <= 0.15) score -= 10
      else if (metrics.cls <= 0.2) score -= 20
      else if (metrics.cls <= 0.25) score -= 30
      else score -= 40
    }

    return factors > 0 ? Math.max(0, score) : null
  }

  const performanceScore = calculateScore()

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
