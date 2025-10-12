import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const measurePerformance = () => {
      // Measure First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          }
        })
        observer.observe({ entryTypes: ['paint'] })
      }

      // Measure Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      }

      // Measure First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
            }
          }
        })
        observer.observe({ entryTypes: ['first-input'] })
      }

      // Measure Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setMetrics(prev => ({ ...prev, cls: clsValue }))
            }
          }
        })
        observer.observe({ entryTypes: ['layout-shift'] })
      }

      // Measure Time to First Byte (TTFB)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }))
            }
          }
        })
        observer.observe({ entryTypes: ['navigation'] })
      }
    }

    // Start measuring after a short delay to ensure page is loaded
    const timeoutId = setTimeout(measurePerformance, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  // Send metrics to analytics (if available)
  useEffect(() => {
    if (Object.keys(metrics).length > 0 && typeof window !== 'undefined') {
      // Send to Google Analytics or other analytics service
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'performance_metrics', {
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
    }
  }, [metrics])

  // Don't render anything visible
  return null
}

export default PerformanceMonitor
