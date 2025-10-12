import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  fmp: number | null
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableLogging?: boolean
}

export default function PerformanceMonitor({ 
  onMetricsUpdate, 
  enableLogging = false 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  })

  useEffect(() => {
    // Check if Performance Observer is supported
    if (!('PerformanceObserver' in window)) {
      if (enableLogging) {
        console.warn('Performance Observer not supported in this browser')
      }
      return
    }

    const performanceMetrics: Partial<PerformanceMetrics> = {}

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
      if (fcpEntry) {
        performanceMetrics.fcp = fcpEntry.startTime
        updateMetrics()
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      performanceMetrics.lcp = lastEntry.startTime
      updateMetrics()
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        performanceMetrics.fid = entry.processingStart - entry.startTime
        updateMetrics()
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift (CLS)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          performanceMetrics.cls = clsValue
          updateMetrics()
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      performanceMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      updateMetrics()
    }

    // First Meaningful Paint (FMP) - approximation
    const fmpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint')
      if (fmpEntry) {
        performanceMetrics.fmp = fmpEntry.startTime
        updateMetrics()
      }
    })
    fmpObserver.observe({ entryTypes: ['paint'] })

    function updateMetrics() {
      const newMetrics = { ...metrics, ...performanceMetrics }
      setMetrics(newMetrics)
      
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics)
      }

      if (enableLogging) {
        console.log('Performance Metrics:', newMetrics)
      }
    }

    // Cleanup observers
    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      fmpObserver.disconnect()
    }
  }, [onMetricsUpdate, enableLogging])

  // Performance scoring
  const getPerformanceScore = (metric: keyof PerformanceMetrics, value: number | null): 'good' | 'needs-improvement' | 'poor' => {
    if (value === null) return 'good'

    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
      fmp: { good: 1800, poor: 3000 }
    }

    const threshold = thresholds[metric]
    if (!threshold) return 'good'

    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return 'text-green-400'
      case 'needs-improvement': return 'text-yellow-400'
      case 'poor': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  // Only render in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !enableLogging) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono max-w-xs">
      <div className="mb-2 font-semibold">Performance Metrics</div>
      <div className="space-y-1">
        {Object.entries(metrics).map(([key, value]) => {
          const score = getPerformanceScore(key as keyof PerformanceMetrics, value)
          const color = getScoreColor(score)
          
          return (
            <div key={key} className="flex justify-between">
              <span className="text-gray-300 uppercase">{key}:</span>
              <span className={color}>
                {value ? `${Math.round(value)}ms` : '--'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}