export const performanceMonitoring = {
  measure: (name: string) => {
    const start = performance.now()
    
    return {
      end: () => {
        const duration = performance.now() - start
        console.warn(`${name} took ${duration.toFixed(2)}ms`)
        
        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'performance_measurement', {
            name: name,
            duration: duration
          })
        }
      }
    }
  }
}
