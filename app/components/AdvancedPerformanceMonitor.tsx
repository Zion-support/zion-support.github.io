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
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const measurePerformance = () => {
      // Measure Core Web Vitals using web-vitals library
      if (typeof window !== 'undefined') {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value })))
          getFID((metric) => setMetrics(prev => ({ ...prev, firstInputDelay: metric.value })))
          getFCP((metric) => setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value })))
          getLCP((metric) => setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value })))
          getTTFB((metric) => setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value })))
        }).catch((error) => {
          console.warn('Failed to load web-vitals:', error)
        })
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
      document.addEventListener('DOMContentLoaded', () => {
        const domContentLoaded = performance.now()
        setMetrics(prev => ({ ...prev, domContentLoaded }))
      })
    }

    measurePerformance()

    // Keyboard shortcut to toggle visibility (Ctrl+Shift+M)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Calculate performance score
  const calculateScore = () => {
    let score = 100
    let factors = 0

    if (metrics.firstContentfulPaint !== null) {
      factors++
      if (metrics.firstContentfulPaint > 1800) score -= 20
      else if (metrics.firstContentfulPaint > 1000) score -= 10
    }

    if (metrics.largestContentfulPaint !== null) {
      factors++
      if (metrics.largestContentfulPaint > 2500) score -= 20
      else if (metrics.largestContentfulPaint > 1500) score -= 10
    }

    if (metrics.cumulativeLayoutShift !== null) {
      factors++
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10
    }

    if (metrics.firstInputDelay !== null) {
      factors++
      if (metrics.firstInputDelay > 300) score -= 20
      else if (metrics.firstInputDelay > 100) score -= 10
    }

    return factors > 0 ? Math.max(0, score) : null
  }

  const performanceScore = calculateScore()

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-cyan-400 font-semibold">Advanced Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.firstContentfulPaint && metrics.firstContentfulPaint > 1800 ? 'text-red-400' : 'text-green-400'}>
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500 ? 'text-red-400' : 'text-green-400'}>
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.firstInputDelay && metrics.firstInputDelay > 300 ? 'text-red-400' : 'text-green-400'}>
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.25 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.timeToFirstByte && metrics.timeToFirstByte > 600 ? 'text-red-400' : 'text-green-400'}>
            {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="text-blue-400">
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-blue-400">
            {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        {performanceScore && (
          <div className="mt-2 pt-2 border-t border-cyan-500/20">
            <div className="flex justify-between">
              <span>Score:</span>
              <span className={performanceScore >= 90 ? 'text-green-400' : performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'}>
                {performanceScore}/100
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+M to toggle
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor