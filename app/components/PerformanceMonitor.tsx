import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const logMetric = (metric: any) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Web Vital:', metric);
          }
          // In production, send to analytics service
          // sendToAnalytics(metric);
        };

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
          if (entry.entryType === 'navigation') {
            if (process.env.NODE_ENV === 'development') {
              console.log('Navigation timing:', entry);
            }
            // In production, send to analytics service
            // sendToAnalytics({ type: 'navigation', data: entry });
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
