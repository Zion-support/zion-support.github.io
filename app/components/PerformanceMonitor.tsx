'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const metrics: PerformanceMetrics = {}

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime
        }
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      metrics.lcp = lastEntry.startTime
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as any
        if (fidEntry.processingStart) {
          metrics.fid = fidEntry.processingStart - fidEntry.startTime
        }
      }
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift (CLS)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          metrics.cls = clsValue
        }
      }
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Time to First Byte (TTFB)
    const ttfbEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (ttfbEntry) {
      metrics.ttfb = ttfbEntry.responseStart - ttfbEntry.requestStart
    }

    // Log metrics after page load
    const logMetrics = () => {
      console.log('Performance Metrics:', {
        FCP: `${metrics.fcp?.toFixed(2)}ms`,
        LCP: `${metrics.lcp?.toFixed(2)}ms`,
        FID: `${metrics.fid?.toFixed(2)}ms`,
        CLS: metrics.cls?.toFixed(4),
        TTFB: `${metrics.ttfb?.toFixed(2)}ms`,
      })

      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to analytics
        // analytics.track('performance_metrics', metrics)
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
    }
  }, [])

  return null
}