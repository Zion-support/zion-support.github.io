export const performance Monitoring = {
  start: (name: string) => {
    performance.mark(`${name}-start`)
  },
  end: (name: string) => {
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
    
    const measures = performance.get Entries By Name(name)
    if (measures.length > 0) {
      const measure = measures[0]
      console.warn(`${name} took ${measure.duration.to Fixed(2)}ms`)
      
      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_measurement', {
          metric_name: name,
          value: measure.duration
        })
      }
    }
    
    performance.clearMarks(`${name}-start`)
    performance.clearMarks(`${name}-end`)
  }
}