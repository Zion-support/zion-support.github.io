export const performanceMonitor = {
  measure: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    console.log(`${name} took ${duration.toFixed(2)}ms`);
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_measurement', {
        name: name,
        duration: duration
      });
    }
  },
  
  mark: (name: string) => {
    performance.mark(name);
  },
  
  measureBetween: (startMark: string, endMark: string, name: string) => {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      console.log(`${name} took ${measure.duration.toFixed(2)}ms`);
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }
};