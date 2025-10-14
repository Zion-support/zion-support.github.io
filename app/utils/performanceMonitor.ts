export const performanceMonitor = {
  measureFunction: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    const duration = end - start
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_measurement', {
        function_name: name,
        duration: duration
      })
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`)
    }
    
    return duration
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    const start = performance.now()
    await fn()
    const end = performance.now()
    const duration = end - start
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_measure', {
        function_name: name,
        duration: duration
      })
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`)
    }
    
    return duration
  },
  
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name)
    }
  },
  
  measure: (name: string, startMark: string, endMark: string) => {
    try {
      performance.measure(name, startMark, endMark)
      const measure = performance.getEntriesByName(name)[0]
      if (measure) {
        console.warn(`${name} took ${measure.duration.toFixed(2)}ms`)
        return measure.duration
      }
    } catch (error) {
      console.error('Performance measurement failed:', error)
    }
    return 0
  }
}