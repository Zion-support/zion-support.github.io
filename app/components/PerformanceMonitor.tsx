'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0

      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log('Performance measure:', entry.name, entry.duration)
          }
        }
      })

      observer.observe({ entryTypes: ['measure'] })

      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const firstInputDelay = entry.processingStart - entry.startTime
          console.log('First Input Delay:', firstInputDelay)
        }
      })

      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            console.log('Cumulative Layout Shift:', (entry as any).value)
          }
        }
      })

      clsObserver.observe({ entryTypes: ['layout-shift'] })

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Will be updated by observer
        cumulativeLayoutShift: 0 // Will be updated by observer
      })
    }

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      // Cleanup
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

  return null
}

export default PerformanceMonitor
