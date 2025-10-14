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
        event_category: 'performance',
        event_label: name,
        value: Math.round(duration)
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
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_measure', {
        event_category: 'performance',
        event_label: name,
        value: Math.round(duration)
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
      if (measure) {
        console.warn(`${name} took ${measure.duration.toFixed(2)}ms`)
      }
    } catch {
      // Error handled silently
    }
  }
}