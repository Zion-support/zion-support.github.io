export const performanceMonitor = {
  measure: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    const duration = end - start
    console.log(`${name} took ${duration.toFixed(2)}ms`
      console.log(`${name} took ${measure.duration.toFixed(2)}ms`