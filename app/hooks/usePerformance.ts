import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({}

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }
      }
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }
        }
      }
      fidObserver.observe({ entryTypes: ['first-input'] }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics(prev => ({ ...prev, cls: clsValue }
          }
        }
      }
      clsObserver.observe({ entryTypes: ['layout-shift'] }

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }
          }
        }
      }
      fcpObserver.observe({ entryTypes: ['paint'] }

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }
      }

      // Cleanup observers after 10 seconds
      setTimeout(() => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        fcpObserver.disconnect()
      }, 10000)
    }

    // Start measuring after page load
    if (document.readyState === 'complete') {
      measureWebVitals()
    } else {
      window.addEventListener('load', measureWebVitals)
    }

    return () => {
      window.removeEventListener('load', measureWebVitals)
    }
  }, [])

  return metrics
}))))))))))))))))))))))