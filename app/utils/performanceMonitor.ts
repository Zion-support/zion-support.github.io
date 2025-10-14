export const performanceMonitor = {
  measureFunction: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`);
    }
    
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: any) => void }).gtag;
      gtag('event', 'performance_measurement', {
        metric_name: name,
        metric_value: duration
      });
    }
    
    return duration;
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    const start = performance.now();
    await fn();
    const end = performance.now();
    const duration = end - start;
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${name} took ${duration.toFixed(2)}ms`);
    }
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: any) => void }).gtag;
      gtag('event', 'performance_measure', {
        metric_name: name,
        metric_value: duration
      });
    }
    
    return duration;
  },
  
  measureComponent: (componentName: string, renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    const duration = end - start;
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${componentName} render took ${duration.toFixed(2)}ms`);
    }
    
    return duration;
  }
};