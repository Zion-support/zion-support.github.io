import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Performance monitoring logic
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor performance metrics
      const observer = new PerformanceObserver((list) => {
      for (const UnusedEntry of list.getEntries()) {
        // Performance monitoring - could be sent to analytics service
        // console.log('Performance entry:', UnusedEntry);
        void UnusedEntry; // Suppress unused variable warning
      }
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation'] });
      
      return () => observer.disconnect();
    }
    return undefined;
  }, []);

  return null;
};

export default PerformanceMonitor;