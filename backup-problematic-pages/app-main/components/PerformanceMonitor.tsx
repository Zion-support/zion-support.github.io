'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

export default function PerformanceMonitor() : any {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

    useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const observer = new PerformanceObserver((list) : any => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
          }
        }
      }
    })

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (error) {
      console.warn('Performance Observer not supported:', error)
    }

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">FCP:</span>
          <span className="metric-value">{metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="metric-label">LCP:</span>
          <span className="metric-value">{metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="metric-label">FID:</span>
          <span className="metric-value">{metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="metric-label">CLS:</span>
          <span className="metric-value">{metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</span>
        </div>
        <div className="metric">
          <span className="metric-label">TTFB:</span>
          <span className="metric-value">{metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</span>
        </div>
      </div>
    </div>
  )
}