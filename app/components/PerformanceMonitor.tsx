import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        // Only log in development
        const logMetric = process.env.NODE_ENV === 'development' ? console.log : () => {};
        
        onCLS(logMetric);
        onFCP(logMetric);
        onLCP(logMetric);
        onTTFB(logMetric);
        onINP(logMetric);
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    }

    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation' && process.env.NODE_ENV === 'development') {
            console.log('Navigation timing:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      
      // Cleanup observer on unmount
      return () => observer.disconnect();
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
