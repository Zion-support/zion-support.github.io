'use client'
import React, { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const monitorWebVitals = () => {
  return (
    <div>
      {/* Content */}
    </div>
  );
        // Monitor Largest Contentful Paint (LCP)
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log('LCP:', lastEntry.startTime)
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // Monitor First Input Delay (FID)
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime)
          })
        }).observe({ entryTypes: ['first-input'] })

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          console.log('CLS:', clsValue)
        }).observe({ entryTypes: ['layout-shift'] })
      }

      // Monitor resource loading
      const monitorResources = () => {
        const resources = performance.getEntriesByType('resource')
        resources.forEach((resource) => {
          if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration)
          }
        })
      }

      // Initialize monitoring
      monitorWebVitals()
      
      // Monitor resources after page load
      window.addEventListener('load', monitorResources)
    }
  }, [])

  return null
}

export default PerformanceMonitor
