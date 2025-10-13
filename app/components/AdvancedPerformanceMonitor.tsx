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

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    const getPerformanceMetrics = () => {
      if (typeof window === 'undefined') return

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      // Basic load time
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : null
      
      // First Contentful Paint
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')
      const firstContentfulPaint = fcp ? fcp.startTime : null
      
      // Largest Contentful Paint (if available)
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint')
      const largestContentfulPaint = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null
      
      // First Input Delay (if available)
      const fidEntries = performance.getEntriesByType('first-input')
      const firstInputDelay = fidEntries.length > 0 ? (fidEntries[0] as any).processingStart - fidEntries[0].startTime : null
      
      // Cumulative Layout Shift (if available)
      const clsEntries = performance.getEntriesByType('layout-shift')
      const cumulativeLayoutShift = clsEntries.reduce((cls, entry) => {
        return cls + (entry as any).value
      }, 0)
      
      // Time to First Byte
      const timeToFirstByte = navigation ? navigation.responseStart - navigation.requestStart : null
      
      // Memory usage (if available)
      const memory = (performance as any).memory
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : null
      
      // DOM Content Loaded
      const domContentLoaded = navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : null
      
      // Total Blocking Time (if available)
      const longTasks = performance.getEntriesByType('longtask')
      const totalBlockingTime = longTasks.reduce((tbt, task) => {
        return tbt + (task.duration - 50) // Tasks over 50ms contribute to TBT
      }, 0)

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        timeToFirstByte,
        memoryUsage,
        domContentLoaded,
        totalBlockingTime
      })
    }

    // Get metrics after page load
    if (document.readyState === 'complete') {
      getPerformanceMetrics()
    } else {
      window.addEventListener('load', getPerformanceMetrics)
    }

    // Listen for keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        setIsVisible(!isVisible)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('load', getPerformanceMetrics)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isVisible])

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null
  }

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A'
    return `${value.toFixed(2)}${unit}`
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400'
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.poor) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 shadow-xl z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-sm"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
            {formatMetric(metrics.firstInputDelay)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
            {formatMetric(metrics.cumulativeLayoutShift, '')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor(metrics.timeToFirstByte, { good: 600, poor: 1500 })}>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Memory:</span>
          <span className="text-cyan-400">
            {formatMetric(metrics.memoryUsage, 'MB')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">DOM Ready:</span>
          <span className="text-cyan-400">
            {formatMetric(metrics.domContentLoaded)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TBT:</span>
          <span className={getScoreColor(metrics.totalBlockingTime, { good: 200, poor: 600 })}>
            {formatMetric(metrics.totalBlockingTime)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-cyan-500/20">
        <p className="text-gray-400 text-xs">
          Press Ctrl+Shift+P to toggle
        </p>
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor