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
        console.log('Failed to load web-vitals:', error)
      }
    }

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        const memoryUsage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
        setMetrics(prev => ({ ...prev, memoryUsage }))
        reportMetric('Memory Usage', memoryUsage)
      }
    }

    // Measure page load time
    const measureLoadTime = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
        reportMetric('Load Time', loadTime)
      })
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
        console.log(`Performance Metric - ${name}:`, value)
      }
    }

    // Monitor resource loading performance
    const monitorResourcePerformance = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart
            
            // Report slow resources
            if (loadTime > 1000) {
              reportMetric('Slow Resource', loadTime)
              console.warn('Slow resource detected:', {
                name: resourceEntry.name,
                duration: loadTime,
                size: resourceEntry.transferSize
              })
            }
          }
        })
      })

      observer.observe({ entryTypes: ['resource'] })
    }

    // Monitor long tasks
    const monitorLongTasks = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const longTask = entry as PerformanceEntry
          if (longTask.duration > 50) {
            reportMetric('Long Task', longTask.duration)
            console.warn('Long task detected:', {
              duration: longTask.duration,
              startTime: longTask.startTime
            })
          }
        })
      })

      observer.observe({ entryTypes: ['longtask'] })
    }

    // Initialize all monitoring
    measureWebVitals()
    measureMemoryUsage()
    measureLoadTime()
    monitorResourcePerformance()
    monitorLongTasks()

    // Periodic memory monitoring
    const memoryInterval = setInterval(measureMemoryUsage, 30000)

    // Cleanup
    return () => {
      clearInterval(memoryInterval)
    }
  }, [])

  // Performance score calculation
  const calculatePerformanceScore = () => {
    const scores = []
    
    if (metrics.fcp !== null) {
      scores.push(metrics.fcp < 1800 ? 100 : Math.max(0, 100 - (metrics.fcp - 1800) / 100))
    }
    
    if (metrics.lcp !== null) {
      scores.push(metrics.lcp < 2500 ? 100 : Math.max(0, 100 - (metrics.lcp - 2500) / 100))
    }
    
    if (metrics.fid !== null) {
      scores.push(metrics.fid < 100 ? 100 : Math.max(0, 100 - (metrics.fid - 100) / 10))
    }
    
    if (metrics.cls !== null) {
      scores.push(metrics.cls < 0.1 ? 100 : Math.max(0, 100 - metrics.cls * 1000))
    }

    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null
  }

  const performanceScore = calculatePerformanceScore()

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