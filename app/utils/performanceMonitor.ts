export const performanceMonitor = {
  measure: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    const duration = end - start
    console.log(`${name} took ${duration.toFixed(2)}ms`)
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_measure', {
        measure_name: name,
        measure_value: duration
      })
    }
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    const start = performance.now()
    await fn()
    const end = performance.now()
    const duration = end - start
    console.log(`${name} took ${duration.toFixed(2)}ms`)
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_measure', {
        measure_name: name,
        measure_value: duration
      })
    }
  }
}