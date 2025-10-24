'use client'
import React, { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor performance metrics
      const monitorPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart
          const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0
          const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0

          // Performance metrics collected - could be sent to analytics service
          // Metrics: loadTime, domContentLoaded, firstPaint, firstContentfulPaint
        }
      }

      // Monitor after page load
      window.addEventListener('load', monitorPerformance)

      return () => {
        window.removeEventListener('load', monitorPerformance)
      }
    }
  }, [])

  return null
}

export default PerformanceMonitor