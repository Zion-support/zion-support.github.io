'use client'
import React, { useState, useEffect } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  })

  useEffect(() => {
    // Monitor First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcp = entries[0]?.startTime
      if (fcp) {
        setMetrics(prev => ({ ...prev, fcp }))
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcp = entries[entries.length - 1]?.startTime
      if (lcp) {
        setMetrics(prev => ({ ...prev, lcp }))
      }
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fid = entries[0]?.processingStart - entries[0]?.startTime
      if (fid) {
        setMetrics(prev => ({ ...prev, fid }))
      }
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Monitor Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }))
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Monitor Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      setMetrics(prev => ({ ...prev, ttfb }))
    }

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  // Report metrics to analytics
  const reportMetric = (name: string, value: number) => {
    // Analytics reporting would go here
    console.log(`Performance metric: ${name} = ${value}`)
  }

  useEffect(() => {
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== null) {
        reportMetric(key, value)
      }
    })
  }, [metrics])

  return null
}

export default AdvancedPerformanceMonitor