import { useState, useEffect } from 'react'

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<any>({})

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach(entry => {
        if (entry.entryType === 'paint') {
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
          }
        }
      })
    })

    observer.observe({ entryTypes: ['paint'] })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    observer.observe({ entryTypes: ['first-input'] })
    observer.observe({ entryTypes: ['layout-shift'] })
    observer.observe({ entryTypes: ['navigation'] })

    return () => observer.disconnect()
  }, [])

  return metrics
}