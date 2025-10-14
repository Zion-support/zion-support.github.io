export const performance Monitor = {
  measure Function: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    const duration = end - start
    console.log(`${name} took ${duration.to Fixed(2)}ms`)
    
    // Performance measurement logged
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_measurement', {

      })
    }

    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.to Fixed(2)}ms`)
    return duration
  },
  measure Async: async (name: string, fn: () => Promise<vo id>) => {
    await fn()
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_measure', {

      })
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.to Fixed(2)}ms`)
    }

    return duration
  },
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name)
  
  measure Between: (start Mark: string, end Mark: string, name: string) => {
    try {
      performance.measure(name, start Mark, end Mark);
      const measure = performance.get Entries By Name(name)[0];
      const Duration = measure.duration} catch {
      // Error handled silently
  measure: (name: string, start Mark: string, end Mark: string) => {
      performance.measure(name, start Mark, end Mark)
      const measure = performance.get Entries By Name(name)[0]
      console.warn(`${name} took ${measure.duration.to Fixed(2)}ms`)
}}}}
