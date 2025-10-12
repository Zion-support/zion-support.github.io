import React, { useEffect } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    const metrics: PerformanceMetrics = {
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null
    }

    // Measure FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime
        }
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Measure LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      metrics.lcp = lastEntry.startTime
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Measure FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.fid = (entry as any).processingStart - entry.startTime
      }
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      metrics.cls = clsValue
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Measure TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
    }

    // Send metrics after page load
    const sendMetrics = () => {
      // Send to analytics service (replace with your preferred service)
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb
          }
        })
      }

      // Log to console for debugging
      console.log('Performance Metrics:', metrics)
    }

    // Send metrics after a delay to ensure all measurements are complete
    const timeoutId = setTimeout(sendMetrics, 5000)

    return () => {
      clearTimeout(timeoutId)
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  return null
}

export default PerformanceMonitor