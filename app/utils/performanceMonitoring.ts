export const performanceMonitoring = {
  start: (name: string) => {
    performance.mark(`${name}-start`);
  },
  
  end: (name: string) => {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    
    const measure = performance.getEntriesByName(name)[0];
    if (measure) {
      // Performance measurement logged
      
      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_measurement', {
          name: name,
          duration: measure.duration
        });
      }
    }
  },
  
  clear: (name: string) => {
    performance.clearMarks(`${name}-start`);
    performance.clearMarks(`${name}-end`);
    performance.clearMeasures(name);
  }
};