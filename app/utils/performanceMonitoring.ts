export const performanceMonitoring = {
  measure: (name: string) => {
    const start = performance.now()
    return {
      end: () => {
        const duration = performance.now() - start
        console.log(`${name}: ${duration}ms`)
        // Send to analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_measurement', {
            name: name,
            duration: duration
          })
        }
      }
    }
  }
}