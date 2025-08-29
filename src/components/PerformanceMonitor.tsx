import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  })

  useEffect(() => {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcp = entries[0] as PerformanceEntry
      setMetrics(prev => ({ ...prev, fcp: fcp.startTime }))
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcp = entries[entries.length - 1] as PerformanceEntry
      setMetrics(prev => ({ ...prev, lcp: lcp.startTime }))
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fid = entries[0] as PerformanceEntry
      setMetrics(prev => ({ ...prev, fid: fid.processingStart! - fid.startTime }))
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }))
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
    }

    // Cleanup
    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  const getScore = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric]
    if (value === null) return 'N/A'
    
    switch (metric) {
      case 'fcp':
        return value < 1800 ? 'Good' : value < 3000 ? 'Needs Improvement' : 'Poor'
      case 'lcp':
        return value < 2500 ? 'Good' : value < 4000 ? 'Needs Improvement' : 'Poor'
      case 'fid':
        return value < 100 ? 'Good' : value < 300 ? 'Needs Improvement' : 'Poor'
      case 'cls':
        return value < 0.1 ? 'Good' : value < 0.25 ? 'Needs Improvement' : 'Poor'
      case 'ttfb':
        return value < 800 ? 'Good' : value < 1800 ? 'Needs Improvement' : 'Poor'
      default:
        return 'N/A'
    }
  }

  const getScoreColor = (score: string): string => {
    switch (score) {
      case 'Good': return 'text-green-600'
      case 'Needs Improvement': return 'text-yellow-600'
      case 'Poor': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-sm">
      <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
        Performance Metrics
      </h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getScoreColor(getScore('fcp'))}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'} ({getScore('fcp')})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getScoreColor(getScore('lcp'))}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'} ({getScore('lcp')})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={getScoreColor(getScore('fid'))}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'} ({getScore('fid')})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getScoreColor(getScore('cls'))}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'} ({getScore('cls')})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className={getScoreColor(getScore('ttfb'))}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'} ({getScore('ttfb')})
          </span>
        </div>
      </div>
    </div>
  )
}
