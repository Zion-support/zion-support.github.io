import React, { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          } else if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          } else if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log('Performance monitoring not fully supported')
      }

      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        console.log('Page load time:', loadTime, 'ms')
      })

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming
            if (resource.duration > 1000) {
              console.warn('Slow resource:', resource.name, resource.duration, 'ms')
            }
          }
        }
      })

      try {
        resourceObserver.observe({ entryTypes: ['resource'] })
      } catch (e) {
        console.log('Resource monitoring not supported')
      }
    }
  }, [])

  return null
}
