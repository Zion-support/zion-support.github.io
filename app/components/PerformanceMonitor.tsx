import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        // Only log in development, send to analytics in production
        const logMetric = process.env.NODE_ENV === 'development' 
          ? console.log 
          : (metric: any) => {
              // In production, send to analytics service
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'web_vitals', {
                  metric_name: metric.name,
                  metric_value: Math.round(metric.value),
                  metric_delta: Math.round(metric.delta),
                  metric_id: metric.id,
                });
              }
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
            } else {
              // In production, send to analytics
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'performance_timing', {
                  entry_type: entry.entryType,
                  duration: entry.duration,
                  start_time: entry.startTime,
                });
              }
            }
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
