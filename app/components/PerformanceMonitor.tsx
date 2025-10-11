'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        firstInputDelay: 0, // Would need to measure this with PerformanceObserver
        cumulativeLayoutShift: 0, // Would need to measure this with PerformanceObserver
      }
      
      setMetrics(metrics)
    }

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
      {metrics ? (
        <div>
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
          <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
        </div>
      ) : (
        <div>Measuring performance...</div>
      )}
    </div>
  )
}

export default PerformanceMonitor