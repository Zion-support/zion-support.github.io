'use client'
import React, { useState, useEffect, useCallback } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memory: number | null
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableRealTimeMonitoring?: boolean
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  })

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return

    const observers: PerformanceObserver[] = []

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null
    setMetrics(prev => ({ ...prev, fcp }))

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        observers.push(lcpObserver)
      } catch (error) {
        console.warn('LCP measurement not supported:', error)
      }
    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver(list => {
          const entries = list.getEntries()
          entries.forEach(entry => {
            if (
              entry.entryType === 'first-input' &&
              'processingStart' in entry &&
              'startTime' in entry
            ) {
              const fidEntry = entry as PerformanceEventTiming
              setMetrics(prev => ({
                ...prev,
                fid: fidEntry.processingStart - fidEntry.startTime,
              }))
            }
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
        observers.push(fidObserver)
      } catch (error) {
        console.warn('FID measurement not supported:', error)
      }
    }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver(list => {
          let clsValue = 0
          const entries = list.getEntries()
          entries.forEach(entry => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          })
          setMetrics(prev => ({ ...prev, cls: clsValue }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        observers.push(clsObserver)
      } catch (error) {
        console.warn('CLS measurement not supported:', error)
      }
    }

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      setMetrics(prev => ({ ...prev, ttfb }))
    }

    // Measure Memory Usage
    if ('memory' in performance) {
      const memory = (performance as any).memory.usedJSHeapSize
      setMetrics(prev => ({ ...prev, memory }))
    }

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const cleanup = measureWebVitals()
    return cleanup
  }, [measureWebVitals, enableRealTimeMonitoring])

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    }
  }, [metrics, onMetricsUpdate])

  const getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }) => {
    if (metric === null) return 'unknown'
    if (metric <= thresholds.good) return 'good'
    if (metric <= thresholds.poor) return 'needs-improvement'
    return 'poor'
  }

  const getRecommendations = () => {
    const recommendations: string[] = []

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('Optimize First Contentful Paint - consider reducing render-blocking resources')
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push('Improve Largest Contentful Paint - optimize images and critical resources')
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time')
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push('Fix Cumulative Layout Shift - ensure stable layout')
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('Improve Time to First Byte - optimize server response time')
    }

    return recommendations
  }

  const recommendations = getRecommendations()

  if (!enableRealTimeMonitoring) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs z-50">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
        Performance Monitor
      </h3>
      <div className="space-y-1 text-xs">
        <div>
          FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          <span className={`ml-2 px-1 py-0.5 rounded text-xs ${
            getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 }) === 'good' 
              ? 'bg-green-100 text-green-800' 
              : getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 }) === 'needs-improvement'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 })}
          </span>
        </div>
        <div>
          LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          <span className={`ml-2 px-1 py-0.5 rounded text-xs ${
            getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 }) === 'good' 
              ? 'bg-green-100 text-green-800' 
              : getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 }) === 'needs-improvement'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 })}
          </span>
        </div>
        <div>
          FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
          <span className={`ml-2 px-1 py-0.5 rounded text-xs ${
            getPerformanceScore(metrics.fid, { good: 100, poor: 300 }) === 'good' 
              ? 'bg-green-100 text-green-800' 
              : getPerformanceScore(metrics.fid, { good: 100, poor: 300 }) === 'needs-improvement'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {getPerformanceScore(metrics.fid, { good: 100, poor: 300 })}
          </span>
        </div>
        <div>
          CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          <span className={`ml-2 px-1 py-0.5 rounded text-xs ${
            getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 }) === 'good' 
              ? 'bg-green-100 text-green-800' 
              : getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 }) === 'needs-improvement'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 })}
          </span>
        </div>
        <div>
          TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
        </div>
        <div>
          Memory: {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB` : 'N/A'}
        </div>
      </div>
      {recommendations.length > 0 && (
        <div className="mt-2">
          <h4 className="font-semibold text-xs text-red-600">
            Recommendations:
          </h4>
          <ul className="text-xs text-red-600">
            {recommendations.map((rec, index) => (
              <li key={index}>• {rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AdvancedPerformanceMonitor