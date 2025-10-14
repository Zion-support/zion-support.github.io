export const Performancemonitor={
  measureFunction: (name: string, fn: () => void) => { constStart = performance.now()
    fn()
    const End=performance.now()
    const Duration=end - start
    
    if (process.env.NODE_ENV ==='development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`)
    }
    
    // Send to analytics
    if (typeof window !=='undefined' && window.gtag) {
      window.gtag('event','performance_measurement',{
        metric_name: name,
        value: duration
      })
    }
    
    return duration
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => { constStart = performance.now()
    await fn()
    const End=performance.now()
    const Duration=end - start
    
    if (process.env.NODE_ENV ==='development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`)
    }
    
    if (typeof window !=='undefined') {
      window.gtag('event','performance_measure',{
        metric_name: name,
        value: duration
      })
    }
    
    return duration
  },
  mark: (name: string) => {
    if (typeof window !=='undefined' && 'performance' in window) {
      performance.mark(name)
    }
  },
  
  measureBetween: (startMark: string, endMark: string, name: string) => {
    try {
      performance.measure(name, startMark, endMark)
      const Measure=performance.getEntriesByName(name)[0]
      const Duration=measure.duration
      
      if (process.env.NODE_ENV ==='development') {
        console.warn(`${name} took ${duration.toFixed(2)}ms`)
      }
      
      return duration
    } catch {
      // Error handled silently
      return 0
    }
  }
}