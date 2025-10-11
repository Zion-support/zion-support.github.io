'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return

      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (!perfData) return

      const newMetrics: PerformanceMetrics = {
        loadTime: perfData.loadEventEnd - perfData.fetchStart,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0
      }

      // Get FCP
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
      if (fcpEntry) {
        newMetrics.firstContentfulPaint = fcpEntry.startTime
      }

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint')
      if (lcpEntries.length > 0) {
        newMetrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime
      }

      // Get CLS
      const clsEntries = performance.getEntriesByType('layout-shift')
      if (clsEntries.length > 0) {
        newMetrics.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
          return sum + (entry as any).value
        }, 0)
      }

      setMetrics(newMetrics)
      console.log('Performance Metrics:', newMetrics)
    }

    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance Entry:', entry)
      }
    })

    observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'layout-shift'] })

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Don't render anything visible
  return null
}

export default PerformanceMonitor