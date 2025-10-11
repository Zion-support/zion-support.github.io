'use client'
import React, { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorPerformance = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint') {
              console.log(`${entry.name}: ${entry.startTime}ms`)
            }
          }
        })

        observer.observe({ entryTypes: ['paint'] })
      }

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log('LCP:', lastEntry.startTime)
        })

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
        })

        fidObserver.observe({ entryTypes: ['first-input'] })
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          console.log('CLS:', clsValue)
        })

        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }
    }

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              const resource = entry as PerformanceResourceTiming
              if (resource.duration > 1000) {
                console.warn('Slow resource:', resource.name, resource.duration)
              }
            }
          }
        })

        resourceObserver.observe({ entryTypes: ['resource'] })
      }
    }

    // Initialize monitoring
    monitorPerformance()
    monitorResources()

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      console.log('Page load time:', loadTime, 'ms')
    })
  }, [])

  return null
}

export default PerformanceMonitor
