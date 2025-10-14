export const performanceMonitor = {
  measureFunction: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    const duration = end - start
    // Performance measurement completed silently
    return duration
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    const start = performance.now()
    await fn()
    const end = performance.now()
    const duration = end - start
    // Performance measurement completed silently
    return duration
  },
  
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name)
    }
  },
  
  measure: (name: string, startMark: string, endMark: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.measure(name, startMark, endMark)
      // Performance measurement completed silently
    }
  }
}