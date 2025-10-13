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
    const measureWebVitals = () => {
      if (typeof window === 'undefined') return

      // Measure First Contentful Paint
      const measureFCP = () => {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }))
            }
          })
        })
        observer.observe({ entryTypes: ['paint'] })
      }

      // Measure Largest Contentful Paint
      const measureLCP = () => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
        })
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      }

      // Measure First Input Delay
      const measureFID = () => {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            setMetrics(prev => ({ 
              ...prev, 
              firstInputDelay: (entry as any).processingStart - entry.startTime 
            }))
          })
        })
        observer.observe({ entryTypes: ['first-input'] })
      }

      // Measure Cumulative Layout Shift
      const measureCLS = () => {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          })
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
        })
        observer.observe({ entryTypes: ['layout-shift'] })
      }

      measureFCP()
      measureLCP()
      measureFID()
      measureCLS()
    }

    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }))
      }
    }

    const measureLoadTime = () => {
      if (typeof window === 'undefined') return

      const loadTime = performance.now()
      setMetrics(prev => ({ ...prev, loadTime }))

      // Measure DOM Content Loaded
      if (document.readyState === 'complete') {
        const domContentLoaded = performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd || 0
        setMetrics(prev => ({ ...prev, domContentLoaded }))
      }

      // Measure Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart
        setMetrics(prev => ({ ...prev, timeToFirstByte: ttfb }))
      }
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Analytics reporting would go here
      console.log(`Performance Metric - ${name}: ${value}ms`)
    }

    measureWebVitals()
    measureMemory()
    measureLoadTime()

    // Set up periodic memory monitoring
    const memoryInterval = setInterval(measureMemory, 5000)

    return () => {
      clearInterval(memoryInterval)
    }
  }, [])

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  const getPerformanceScore = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A'
    if (value <= thresholds.good) return 'Good'
    if (value <= thresholds.poor) return 'Needs Improvement'
    return 'Poor'
  }

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'Good': return 'text-green-400'
      case 'Needs Improvement': return 'text-yellow-400'
      case 'Poor': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        📊
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <div className="flex space-x-2">
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
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.loadTime, { good: 2000, poor: 4000 }))}>
            {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }))}>
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }))}>
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.firstInputDelay, { good: 100, poor: 300 }))}>
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }))}>
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.timeToFirstByte, { good: 200, poor: 600 }))}>
            {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.memoryUsage, { good: 50, poor: 100 }))}>
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span>DOM Ready:</span>
          <span className={getScoreColor(getPerformanceScore(metrics.domContentLoaded, { good: 1000, poor: 2000 }))}>
            {metrics.domContentLoaded ? `${metrics.domContentLoaded.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          <div>Legend: Good | Needs Improvement | Poor</div>
          <div className="mt-1">
            <span className="text-green-400">●</span> Good
            <span className="text-yellow-400 ml-2">●</span> Needs Improvement
            <span className="text-red-400 ml-2">●</span> Poor
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor