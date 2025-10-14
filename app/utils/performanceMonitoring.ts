export const performanceMonitoring = {
  start: (name: string) => {
    performance.mark(`${name}-start`)
  },
  
  end: (name: string) => {
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
    ;
    const measure = performance.getEntriesByName(name)[0];
    if (measure) {
      // Performance measurement logged
      // eslint-disable-next-line no-console
      console.log(`${name} took ${measure.duration.toFixed(2)}ms`);
      
      // Send to analytics
      if (typeof window !== &apos;undefined&apos; && window.gtag) {
        window.gtag(&apos;event&apos;, &apos;performance_measurement&apos;, {
          name: name,
          duration: measure.duration
        });
      }
    const measures = performance.getEntriesByName(name)
    if (measures.length > 0) {
      const measure = measures[0]
      console.log(`${name} took ${measure.duration.toFixed(2)}ms`)
    }
    
    performance.clearMarks(`${name}-start`)
    performance.clearMarks(`${name}-end`)
  }
}
}