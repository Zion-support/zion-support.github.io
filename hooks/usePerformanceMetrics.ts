import { useState, useEffect } from &apos;react&apos;

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  })

  useEffect(() => {
    if (typeof window === &apos;undefined&apos; || !(&apos;PerformanceObserver&apos; in window)) return

    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcpEntry = entries.find(entry => entry.name === &apos;first-contentful-paint&apos;)
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
      }
    }).observe({ entryTypes: [&apos;paint&apos] })

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcpEntry = entries[entries.length - 1]
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }))
      }
    }).observe({ entryTypes: [&apos;largest-contentful-paint&apos] })

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fidEntry = entries[0] as any
      if (fidEntry && fidEntry.processingStart) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
      }
    }).observe({ entryTypes: [&apos;first-input&apos] })

    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
      let clsValue = 0
      const entries = list.getEntries()
      entries.forEach(entry => {
        const layoutShiftEntry = entry as any
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0
        }
      })
      setMetrics(prev => ({ ...prev, cls: clsValue }))
    }).observe({ entryTypes: [&apos;layout-shift&apos] })

    // Time to First Byte
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const navEntry = entries[0] as PerformanceNavigationTiming
      if (navEntry && navEntry.responseStart && navEntry.requestStart) {
        setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }))
      }
    }).observe({ entryTypes: [&apos;navigation&apos] })
  const [metrics, setMetrics] = useState<Record<string, number>>({})

  useEffect(() => {
    if (typeof window === &apos;undefined&apos; || !(&apos;PerformanceObserver&apos; in window)) {
      return
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach(entry => {
        if (entry.entryType === &apos;paint&apos;) {
          const fcpEntry = entries.find(entry => entry.name === &apos;first-contentful-paint&apos;)
          if (fcpEntry) {
            setMetrics((prev: Record<string, number>) => ({ ...prev, fcp: fcpEntry.startTime }))
          }
        }
      })
    })

    observer.observe({ entryTypes: [&apos;paint&apos] })
    observer.observe({ entryTypes: [&apos;largest-contentful-paint&apos] })
    observer.observe({ entryTypes: [&apos;first-input&apos] })
    observer.observe({ entryTypes: [&apos;layout-shift&apos] })
    observer.observe({ entryTypes: [&apos;navigation&apos] })

    return () => observer.disconnect()
  }, [])

  return metrics
}