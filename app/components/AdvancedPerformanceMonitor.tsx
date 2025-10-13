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

<<<<<<< HEAD
<<<<<<< HEAD
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })
=======
    const reportMetric = (name: string, value: number) => {
      console.log(`[Performance] ${name}: ${value}ms`)
    }

    // Track page load time
    const loadTime = performance.now()
    setMetrics(prev => ({ ...prev, loadTime }))
    reportMetric('Load Time', loadTime)

    // Track memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory
      setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
    }

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            reportMetric('FCP', entry.startTime)
          }
        }
      })
      observer.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        reportMetric('LCP', lastEntry.startTime)
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Time to First Byte
      const ttfbObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const ttfb = entry.responseStart - entry.requestStart
            setMetrics(prev => ({ ...prev, ttfb }))
            reportMetric('TTFB', ttfb)
          }
        }
      })
      ttfbObserver.observe({ entryTypes: ['navigation'] })
    }

    trackWebVitals()

    return () => {
      observer?.disconnect()
      lcpObserver?.disconnect()
      ttfbObserver?.disconnect()
    }
  }, [])

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500'
    if (value <= thresholds.poor) return 'text-yellow-500'
    return 'text-red-500'
  }

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
        aria-label="Toggle performance monitor"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${metrics.cls !== null ? getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cls !== null ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Memory:</span>
                <span className="font-mono text-gray-600">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
            </div>
          </div>
        </div>
      )}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f373
    </div>
  )
}

<<<<<<< HEAD
    try {
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
        console.error('Failed to measure web vitals:', error);
      }

      // Measure memory usage
      const measureMemory = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory
          setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }))
        }
      }

      // Measure load time
      const measureLoadTime = () => {
        if (performance.timing) {
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
          setMetrics(prev => ({ ...prev, loadTime }))
        }
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

      measureWebVitals()
      measureMemory()
      measureLoadTime()
    }

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
    }
  }, [])

  // Calculate performance score
  const calculateScore = () => {
    let score = 100
    let factors = 0

    if (metrics.fcp !== null) {
      factors++
      if (metrics.fcp > 1800) score -= 20
      else if (metrics.fcp > 1000) score -= 10
    }

    if (metrics.lcp !== null) {
      factors++
      if (metrics.lcp > 2500) score -= 20
      else if (metrics.lcp > 1500) score -= 10
    }

    if (metrics.cls !== null) {
      factors++
      if (metrics.cls > 0.25) score -= 20
      else if (metrics.cls > 0.1) score -= 10
    }

    if (metrics.fid !== null) {
      factors++
      if (metrics.fid > 300) score -= 20
      else if (metrics.fid > 100) score -= 10
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

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-3210
=======
export default AdvancedPerformanceMonitor
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f373
