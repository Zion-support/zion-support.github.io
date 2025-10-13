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
  domContentLoaded: number | null
  totalBlockingTime: number | null
}

const AdvancedPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToFirstByte: null,
    memoryUsage: null,
    domContentLoaded: null,
    totalBlockingTime: null
  })

  const [isVisible, setIsVisible] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    setIsVisible(true)

    // Measure performance metrics
    const measureMetrics = () => {
      if (performance.timing) {
        const timing = performance.timing
        const loadTime = timing.loadEventEnd - timing.navigationStart
        const domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart
        const ttfb = timing.responseStart - timing.navigationStart

        setMetrics(prev => ({
          ...prev,
          loadTime,
          domContentLoaded,
          timeToFirstByte: ttfb
        }))
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        const memoryUsage = memory.usedJSHeapSize / (1024 * 1024) // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }))
      }

      // Web Vitals
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }))
            }
          }
        })
        observer.observe({ entryTypes: ['paint'] })

        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({ 
              ...prev, 
              firstInputDelay: entry.processingStart - entry.startTime 
            }))
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
            }
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        return () => {
          observer.disconnect()
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
        }
      }
    }

    measureMetrics()

    // Update metrics periodically
    const interval = setInterval(measureMetrics, 1000)
    return () => clearInterval(interval)
  }, [])

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.poor) return 'text-yellow-600'
    return 'text-red-600'
  }

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A'
    return `${value.toFixed(0)}${unit}`
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Advanced Perf
      </button>
      
      {isVisible && (
        <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Advanced Performance</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className={getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}>
                {formatMetric(metrics.loadTime)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">DOM Content Loaded:</span>
              <span className={getMetricColor(metrics.domContentLoaded || 0, { good: 1000, poor: 2000 })}>
                {formatMetric(metrics.domContentLoaded)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">FCP:</span>
              <span className={getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}>
                {formatMetric(metrics.firstContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className={getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}>
                {formatMetric(metrics.largestContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">FID:</span>
              <span className={getMetricColor(metrics.firstInputDelay || 0, { good: 100, poor: 300 })}>
                {formatMetric(metrics.firstInputDelay)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">CLS:</span>
              <span className={getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}>
                {formatMetric(metrics.cumulativeLayoutShift, '')}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">TTFB:</span>
              <span className={getMetricColor(metrics.timeToFirstByte || 0, { good: 200, poor: 600 })}>
                {formatMetric(metrics.timeToFirstByte)}
              </span>
            </div>
            
            {metrics.memoryUsage !== null && (
              <div className="flex justify-between">
                <span className="text-gray-600">Memory:</span>
                <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
                  {formatMetric(metrics.memoryUsage, 'MB')}
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
            <div className="flex justify-between">
              <span>Green: Good</span>
              <span>Yellow: Needs Improvement</span>
              <span>Red: Poor</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor
