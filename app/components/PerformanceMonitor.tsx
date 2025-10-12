import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      }
    };

    // Check if web-vitals is available
    if (typeof window !== 'undefined') {
      monitorCoreWebVitals();
    }

    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;