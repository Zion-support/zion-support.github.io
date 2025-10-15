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
        
        const handleMetric = (metric: { name: string; value: number }) => {
          metrics[metric.name.toLowerCase() as keyof PerformanceMetrics] = metric.value;
          
          // Store metrics for analytics (removed console.log for production)
          if (process.env.NODE_ENV === 'development') {
            // Only log in development mode
          }
          
          // Store metrics for analytics
          if (process.env.NODE_ENV === 'production') {
            // Send to analytics service
            // analyticsService.track('performance_metric', { metric: metric.name, value: metric.value });
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
            // Track navigation timing for performance analysis
            // Removed console.log for production optimization
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
