export const performanceMonitoring = {
  start: (name: string) => {
    performance.mark(`${name}-start`)
  },
  
  end: (name: string) => {
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
    
    const measures = performance.getEntriesByName(name)
    if (measures.length > 0) {
      const measure = measures[0]
      console.warn(`${name} took ${measure.duration.toFixed(2)}ms`)
      
      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_measurement', {
<<<<<<< HEAD
          name: name,
          duration: measure.duration
        })
=======
<<<<<<< HEAD
          name: name;,
          duration: measure.duration
=======
          name: name,
          duration: measure.duration;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
        });
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
      }
    }
    
    performance.clearMarks(`${name}-start`)
    performance.clearMarks(`${name}-end`)
  }
}