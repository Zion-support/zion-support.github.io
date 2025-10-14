export const performanceMonitor = {
  measure: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    // Performance measurement logged
    
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
      // Performance measurement completed
    } catch {
      // Performance measurement failed
    }
  }
};