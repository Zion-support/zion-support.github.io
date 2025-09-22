'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  tbt?: number
  si?: number
}

interface PerformanceThresholds {
  fcp: { good: number; poor: number }
  lcp: { good: number; poor: number }
  fid: { good: number; poor: number }
  cls: { good: number; poor: number }
  ttfb: { good: number; poor: number }
}

const THRESHOLDS: PerformanceThresholds = {
  fcp: { good: 1800, poor: 3000 },
  lcp: { good: 2500, poor: 4000 },
  fid: { good: 100, poor: 300 },
  cls: { good: 0.1, poor: 0.25 },
  ttfb: { good: 800, poor: 1800 },
}

function getMetricRating(value: number, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' {
  if (value <= thresholds.good) return 'good'
  if (value <= thresholds.poor) return 'needs-improvement'
  return 'poor'
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let totalBlockingTime = 0
    let speedIndex = 0
    const currentMetrics: PerformanceMetrics = {}

    // Enhanced FCP observer
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          currentMetrics.fcp = entry.startTime
        }
      }
    })

    // Enhanced LCP observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      currentMetrics.lcp = lastEntry.startTime
    })

    // Enhanced FID observer
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as any
        if (fidEntry.processingStart) {
          currentMetrics.fid = fidEntry.processingStart - fidEntry.startTime
        }
      }
    })

    // Enhanced CLS observer
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          currentMetrics.cls = clsValue
        }
      }
    })

    // Total Blocking Time (TBT) observer
    const tbtObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          totalBlockingTime += entry.duration - 50
          currentMetrics.tbt = totalBlockingTime
        }
      }
    })

    // Speed Index calculation
    const siObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'speed-index') {
          currentMetrics.si = entry.value
        }
      }
    })

    // Start observing
    try {
      fcpObserver.observe({ entryTypes: ['paint'] })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      fidObserver.observe({ entryTypes: ['first-input'] })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      tbtObserver.observe({ entryTypes: ['longtask'] })
      siObserver.observe({ entryTypes: ['measure'] })
    } catch (error) {
      console.warn('Some performance observers are not supported:', error)
    }

    // TTFB calculation
    const ttfbEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (ttfbEntry) {
      currentMetrics.ttfb = ttfbEntry.responseStart - ttfbEntry.requestStart
    }

    // Enhanced metrics logging and analysis
    const logMetrics = () => {
      const analysis = {
        fcp: currentMetrics.fcp ? {
          value: currentMetrics.fcp,
          rating: getMetricRating(currentMetrics.fcp, THRESHOLDS.fcp),
          threshold: THRESHOLDS.fcp
        } : null,
        lcp: currentMetrics.lcp ? {
          value: currentMetrics.lcp,
          rating: getMetricRating(currentMetrics.lcp, THRESHOLDS.lcp),
          threshold: THRESHOLDS.lcp
        } : null,
        fid: currentMetrics.fid ? {
          value: currentMetrics.fid,
          rating: getMetricRating(currentMetrics.fid, THRESHOLDS.fid),
          threshold: THRESHOLDS.fid
        } : null,
        cls: currentMetrics.cls ? {
          value: currentMetrics.cls,
          rating: getMetricRating(currentMetrics.cls, THRESHOLDS.cls),
          threshold: THRESHOLDS.cls
        } : null,
        ttfb: currentMetrics.ttfb ? {
          value: currentMetrics.ttfb,
          rating: getMetricRating(currentMetrics.ttfb, THRESHOLDS.ttfb),
          threshold: THRESHOLDS.ttfb
        } : null,
      }

      console.group('🚀 Performance Analysis')
      Object.entries(analysis).forEach(([key, data]) => {
        if (data) {
          const emoji = data.rating === 'good' ? '✅' : data.rating === 'needs-improvement' ? '⚠️' : '❌'
          console.log(`${emoji} ${key.toUpperCase()}: ${data.value.toFixed(2)}ms (${data.rating})`)
        }
      })
      console.groupEnd()

      setMetrics(currentMetrics)

      // Show performance panel in development
      if (process.env.NODE_ENV === 'development') {
        setIsVisible(true)
        setTimeout(() => setIsVisible(false), 5000)
      }

      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Enhanced analytics tracking
        const analyticsData = {
          ...currentMetrics,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          connection: (navigator as any).connection?.effectiveType || 'unknown'
        }
        
        // Example: Send to analytics service
        // analytics.track('performance_metrics', analyticsData)
        
        // Send to external monitoring service
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(analyticsData)
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        })
      }
    }

    // Log metrics when page is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(logMetrics, 1000)
    } else {
      window.addEventListener('load', () => {
        setTimeout(logMetrics, 1000)
      })
    }

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      tbtObserver.disconnect()
      siObserver.disconnect()
    }
  }, [])

  if (!isVisible || Object.keys(metrics).length === 0) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm z-50 max-w-sm">
      <div className="text-sm font-semibold mb-2">Performance Metrics</div>
      <div className="space-y-1 text-xs">
        {metrics.fcp && (
          <div className={`flex justify-between ${getMetricRating(metrics.fcp, THRESHOLDS.fcp) === 'good' ? 'text-green-400' : getMetricRating(metrics.fcp, THRESHOLDS.fcp) === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}`}>
            <span>FCP:</span>
            <span>{metrics.fcp.toFixed(0)}ms</span>
          </div>
        )}
        {metrics.lcp && (
          <div className={`flex justify-between ${getMetricRating(metrics.lcp, THRESHOLDS.lcp) === 'good' ? 'text-green-400' : getMetricRating(metrics.lcp, THRESHOLDS.lcp) === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}`}>
            <span>LCP:</span>
            <span>{metrics.lcp.toFixed(0)}ms</span>
          </div>
        )}
        {metrics.fid && (
          <div className={`flex justify-between ${getMetricRating(metrics.fid, THRESHOLDS.fid) === 'good' ? 'text-green-400' : getMetricRating(metrics.fid, THRESHOLDS.fid) === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}`}>
            <span>FID:</span>
            <span>{metrics.fid.toFixed(0)}ms</span>
          </div>
        )}
        {metrics.cls && (
          <div className={`flex justify-between ${getMetricRating(metrics.cls, THRESHOLDS.cls) === 'good' ? 'text-green-400' : getMetricRating(metrics.cls, THRESHOLDS.cls) === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}`}>
            <span>CLS:</span>
            <span>{metrics.cls.toFixed(3)}</span>
          </div>
        )}
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 text-gray-400 hover:text-white text-xs"
      >
        ×
      </button>
    </div>
  )
}