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
    // Measure Web Vitals
    const measureWebVitals = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }))
            }
          }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({ ...prev, firstInputDelay: entry.processingStart - entry.startTime }))
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // Navigation timing
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigationEntry) {
          setMetrics(prev => ({
            ...prev,
            loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            timeToFirstByte: navigationEntry.responseStart - navigationEntry.requestStart,
            domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart
          }))
        }
      }
    }

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }
    }

    // Measure load time
    const measureLoadTime = () => {
      if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
          const loadTime = performance.now()
          setMetrics(prev => ({ ...prev, loadTime }))
        })
      }
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Analytics reporting would go here
      console.log(`Performance Metric - ${name}: ${value}`)
    }

    measureWebVitals()
    measureMemory()
    measureLoadTime()

    // Cleanup observers
    return () => {
      // Cleanup would go here
    }
  }, [])

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  const getMetricColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.needsImprovement) return 'text-yellow-400'
    return 'text-red-400'
  }

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="Show Performance Monitor"
      >
        📊
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={toggleRecording}
            className={`px-2 py-1 rounded text-xs ${
              isRecording ? 'bg-red-600' : 'bg-green-600'
            }`}
          >
            {isRecording ? 'Stop' : 'Record'}
          </button>
          <button
            onClick={toggleVisibility}
            className="px-2 py-1 bg-gray-600 rounded text-xs"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getMetricColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
            {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getMetricColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getMetricColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getMetricColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}>
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={getMetricColor(metrics.memoryUsage, { good: 50, needsImprovement: 100 })}>
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor