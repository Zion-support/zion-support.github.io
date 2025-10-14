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

      // Get FCP if available
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
      if (fcpEntry) {
        newMetrics.firstContentfulPaint = fcpEntry.startTime
      }

      // Get LCP if available
      const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0]
      if (lcpEntry) {
        newMetrics.largestContentfulPaint = lcpEntry.startTime
      }

      // Get CLS if available
      const clsEntry = performance.getEntriesByName('layout-shift')[0]
      if (clsEntry) {
        newMetrics.cumulativeLayoutShift = clsEntry.value
      }

      setMetrics(newMetrics)
    }

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Log metrics for debugging (remove in production)
  useEffect(() => {
    if (metrics) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

  return null
}

export default PerformanceMonitor