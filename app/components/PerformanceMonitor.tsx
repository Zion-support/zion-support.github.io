import { useEffect } from 'react';
const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  return null;
};
export default PerformanceMonitor;