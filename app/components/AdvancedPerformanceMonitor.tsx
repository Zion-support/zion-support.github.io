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

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }))
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, largestContentfulPaint: entry.startTime }))
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, firstInputDelay: (entry as any).processingStart - entry.startTime }))
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cumulativeLayoutShift: (entry as any).value }))
          }
        })
      })

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, timeToFirstByte: navigationEntry.responseStart - navigationEntry.requestStart }))
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })

      // Measure DOM content loaded
      window.addEventListener('DOMContentLoaded', () => {
        const domContentLoaded = performance.now()
        setMetrics(prev => ({ ...prev, domContentLoaded }))
      })

      // Measure Total Blocking Time
      const measureTBT = () => {
        const longTasks = performance.getEntriesByType('longtask')
        const totalBlockingTime = longTasks.reduce((total, task) => {
          return total + (task.duration - 50) // Tasks longer than 50ms contribute to TBT
        }, 0)
        setMetrics(prev => ({ ...prev, totalBlockingTime }))
      }

      // Measure TBT after a delay to capture long tasks
      setTimeout(measureTBT, 5000)

      return () => {
        observer.disconnect()
      }
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Send to analytics service
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metric', {
          metric_name: name,
          metric_value: value
        })
      }
    }

    // Start performance monitoring
    const cleanup = measurePerformance()

    // Report metrics when they change
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== null) {
        reportMetric(key, value)
      }
    })

    return cleanup
  }, [metrics])

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A'
    return `${value.toFixed(2)}${unit}`
  }

  const getPerformanceScore = () => {
    let score = 0
    let factors = 0

    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint !== null) {
      if (metrics.firstContentfulPaint <= 1800) score += 25
      else if (metrics.firstContentfulPaint <= 3000) score += 15
      else score += 5
      factors++
    }

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint !== null) {
      if (metrics.largestContentfulPaint <= 2500) score += 25
      else if (metrics.largestContentfulPaint <= 4000) score += 15
      else score += 5
      factors++
    }

    // FID scoring (0-100)
    if (metrics.firstInputDelay !== null) {
      if (metrics.firstInputDelay <= 100) score += 25
      else if (metrics.firstInputDelay <= 300) score += 15
      else score += 5
      factors++
    }

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift !== null) {
      if (metrics.cumulativeLayoutShift <= 0.1) score += 25
      else if (metrics.cumulativeLayoutShift <= 0.25) score += 15
      else score += 5
      factors++
    }

    return factors > 0 ? Math.round(score / factors) : 0
  }

  const exportMetrics = () => {
    const data = {
      timestamp: new Date().toISOString(),
      metrics,
      score: getPerformanceScore(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `performance-metrics-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-20 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Show performance monitor"
      >
        📊
      </button>
    )
  }

  const score = getPerformanceScore()
  const scoreColor = score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'

  return (
    <div className="fixed bottom-4 left-20 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border min-w-80 z-50 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`px-2 py-1 rounded text-xs ${
              isRecording 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {isRecording ? '⏹️' : '⏺️'}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close performance monitor"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">Performance Score:</span>
          <span className={`text-lg font-bold ${scoreColor}`}>{score}/100</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
          <div 
            className={`h-2 rounded-full ${
              score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">First Contentful Paint:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Largest Contentful Paint:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">First Input Delay:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.firstInputDelay)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Cumulative Layout Shift:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.cumulativeLayoutShift)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Time to First Byte:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Memory Usage:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.memoryUsage, 'MB')}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">DOM Content Loaded:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.domContentLoaded)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Total Blocking Time:</span>
          <span className="text-blue-600 dark:text-blue-400">
            {formatMetric(metrics.totalBlockingTime)}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <button
          onClick={exportMetrics}
          className="w-full bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
        >
          Export Metrics
        </button>
        <button
          onClick={() => setMetrics({
            loadTime: null,
            firstContentfulPaint: null,
            largestContentfulPaint: null,
            firstInputDelay: null,
            cumulativeLayoutShift: null,
            timeToFirstByte: null,
            memoryUsage: null,
            domContentLoaded: null,
            totalBlockingTime: null
          })}
          className="w-full bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors"
        >
          Reset Metrics
        </button>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor