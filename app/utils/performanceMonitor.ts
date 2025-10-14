export const performanceMonitor = {
  measureFunction: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    const duration = end - start
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`)
    }
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_measurement', {
        metric_name: name,
        value: duration
      })
    }
    
    return duration
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    const start = performance.now()
    await fn()
    const end = performance.now()
    const duration = end - start
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`)
    }
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_measure', {
        metric_name: name,
        value: duration
      })
    }
    
    return duration
  },
  
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name)
    }
  },
  
  measureBetween: (startMark: string, endMark: string, name: string) => {
    try {
      performance.measure(name, startMark, endMark)
      const measure = performance.getEntriesByName(name)[0]
      const duration = measure.duration
      
      if (process.env.NODE_ENV === 'development') {
        console.warn(`${name} took ${duration.toFixed(2)}ms`)
      }
      
      return duration
    } catch {
      // Error handled silently
      return 0
    }
  }
}