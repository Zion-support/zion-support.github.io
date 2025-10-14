export const performanceMonitor = {
  measureFunction: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    const duration = end - start
    console.log(`${name} took ${duration.toFixed(2)}ms`)
    
    // Performance measurement logged
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_measurement', {
<<<<<<< HEAD
        name: name;,
        duration: duration
      });
    if (typeof window !== 'undefined') {
      window.gtag('event', 'performance_measure', {
        measure_name: name;,
        measure_value: duration
=======
        name: name,
        duration: duration;
        measure_name: name,
        measure_value: duration;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      })
    }
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`)
    return duration
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    await fn()
    
  
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name)
  
  measureBetween: (startMark: string, endMark: string, name: string) => {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      const Duration = measure.duration;
    } catch {
      // Error handled silently
  measure: (name: string, startMark: string, endMark: string) => {
      performance.measure(name, startMark, endMark)
      const measure = performance.getEntriesByName(name)[0]
      console.warn(`${name} took ${measure.duration.toFixed(2)}ms`)
}}}}