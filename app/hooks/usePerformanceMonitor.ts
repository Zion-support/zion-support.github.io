import { useState, useEffect } from 'react'

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<any>({})

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        setMetrics(prev => ({
          ...prev,
          [entries[0].name]: entries[0].startTime
        }))
      })
      
      observer.observe({ entryTypes: ['measure', 'navigation'] })
      
      return () => observer.disconnect()
    }
  }, [])

  return metrics
}