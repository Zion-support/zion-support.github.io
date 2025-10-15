import React, { useEffect } from 'react';

interface PerformanceMetrics {
  cls?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const metrics: PerformanceMetrics = {};
        
        const handleMetric = (metric: any) => {
          metrics[metric.name.toLowerCase() as keyof PerformanceMetrics] = metric.value;
          
          if (process.env.NODE_ENV === 'development') {
            console.log(`Performance metric ${metric.name}:`, metric.value);
          }
          
          // Store metrics for analytics
          if (process.env.NODE_ENV === 'production') {
            // Send to analytics service with enhanced tracking
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: metric.name,
                value: Math.round(metric.value)
              });
            }
          }
        };
        
        onCLS(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
        onINP(handleMetric);
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
            
            // Track navigation performance in production
            if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
              const navEntry = entry as PerformanceNavigationTiming;
              window.gtag('event', 'navigation_timing', {
                event_category: 'Performance',
                event_label: 'Navigation Timing',
                value: Math.round(navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart)
              });
            }
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      
      // Cleanup observer on unmount
      return () => observer.disconnect();
    }
    return undefined;
  }, []);

  return null;
};

export default PerformanceMonitor;
