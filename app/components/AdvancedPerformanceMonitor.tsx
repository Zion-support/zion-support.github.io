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

    // Import web-vitals dynamically
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      const reportMetric = (name: string, value: number) => {
        console.log(`${name}:`, value)
      }

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
    })

    // Monitor memory usage
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as any).memory
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100 
        }))
      }
      updateMemoryUsage()
      const memoryInterval = setInterval(updateMemoryUsage, 5000)
      return () => clearInterval(memoryInterval)
    }

    // Monitor load time
    const updateLoadTime = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      setMetrics(prev => ({ ...prev, loadTime }))
    }
    updateLoadTime()

    // Show monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const getMetricColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.poor) return 'text-yellow-400'
    return 'text-red-400'
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>First Contentful Paint:</span>
            <span className={getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Largest Contentful Paint:</span>
            <span className={getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>First Input Delay:</span>
            <span className={getMetricColor(metrics.fid, { good: 100, poor: 300 })}>
              {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Cumulative Layout Shift:</span>
            <span className={getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Time to First Byte:</span>
            <span className={getMetricColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Memory Usage:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 80 })}>
              {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}%` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className={getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
              {metrics.loadTime ? `${metrics.loadTime}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-600">
          <div className="text-xs text-gray-400">
            <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor