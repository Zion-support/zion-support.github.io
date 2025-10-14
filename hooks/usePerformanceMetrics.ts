import { useState, useEffect } from 'react'

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart?: number;
}

interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
      }
    }).observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcpEntry = entries[entries.length - 1]
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }))
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fidEntry = entries[0] as { processingStart?: number; startTime: number }
      if (fidEntry && fidEntry.processingStart) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
      }
    }).observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
      let clsValue = 0
      const entries = list.getEntries()
      entries.forEach(entry => {
        const layoutShiftEntry = entry as { hadRecentInput?: boolean; value?: number }
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0
        }
      })
      setMetrics(prev => ({ ...prev, cls: clsValue }))
    }).observe({ entryTypes: ['layout-shift'] })

    // Time to First Byte
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const navEntry = entries[0] as PerformanceNavigationTiming
      if (navEntry && navEntry.responseStart && navEntry.requestStart) {
        setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }))
      }
    }).observe({ entryTypes: ['navigation'] })
  }, [])

  return metrics
}