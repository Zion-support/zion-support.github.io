import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Simple performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.duration);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        // PerformanceObserver not supported
        console.log('Performance monitoring not available');
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;