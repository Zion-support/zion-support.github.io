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

    const reportMetric = (name: string, value: number) => {
      console.log(`Performance Metric - ${name}:`, value)
    }

    // Load performance metrics
    const loadMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            ttfb: navigation.responseStart - navigation.requestStart
          }))
        }

        // Memory usage
        if ('memory' in performance) {
          const memory = (performance as any).memory
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }))
        }
      }
    }

    // Load web vitals
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals')
        
        getCLS((metric: any) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }))
          reportMetric('CLS', metric.value)
        })

        getFID((metric: any) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }))
          reportMetric('FID', metric.value)
        })

        getFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
          reportMetric('FCP', metric.value)
        })

        getLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
          reportMetric('LCP', metric.value)
        })

        getTTFB((metric: any) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }))
          reportMetric('TTFB', metric.value)
        })
      } catch (error) {
        console.warn('Web Vitals not available:', error)
      }
    }

    loadMetrics()
    loadWebVitals()

    // Update memory usage periodically
    const memoryInterval = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024
        }))
      }
    }, 5000)

    return () => clearInterval(memoryInterval)
  }, [])

  const getMetricColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }

  const formatValue = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A'
    return `${value.toFixed(2)}${unit}`
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        📊
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Load Time:</span>
          <span className={`font-mono ${getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 })}`}>
            {formatValue(metrics.loadTime)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">FCP:</span>
          <span className={`font-mono ${getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
            {formatValue(metrics.fcp)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">LCP:</span>
          <span className={`font-mono ${getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
            {formatValue(metrics.lcp)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">FID:</span>
          <span className={`font-mono ${getMetricColor(metrics.fid, { good: 100, poor: 300 })}`}>
            {formatValue(metrics.fid)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">CLS:</span>
          <span className={`font-mono ${getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
            {formatValue(metrics.cls, '')}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">TTFB:</span>
          <span className={`font-mono ${getMetricColor(metrics.ttfb, { good: 200, poor: 600 })}`}>
            {formatValue(metrics.ttfb)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Memory:</span>
          <span className={`font-mono ${getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}`}>
            {formatValue(metrics.memoryUsage, 'MB')}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <div>🟢 Good | 🟡 Needs Improvement | 🔴 Poor</div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor
