import { useEffect, useRef } from 'react'

export const usePerformanceMonitor = (name: string) => {
  const startTime = useRef<number>()
  
  useEffect(() => {
    startTime.current = performance.now()
    
    return () => {
      if (startTime.current) {
        const endTime = performance.now()
        const duration = endTime - startTime.current
        
        // Performance measurement logged
        // eslint-disable-next-line no-console
        console.log(`${name} took ${duration.toFixed(2)}ms`)
        
        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'performance_measurement', {
            event_category: 'performance',
            event_label: name,
            value: Math.round(duration)
          })
        }
      }
    }
  }, [name])
}