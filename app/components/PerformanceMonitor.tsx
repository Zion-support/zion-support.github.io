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
    let performanceObserver: PerformanceObserver | null = null;
    
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const metrics: PerformanceMetrics = {};
        
        const handleMetric = (metric: { name: string; value: number }) => {
          metrics[metric.name.toLowerCase() as keyof PerformanceMetrics] = metric.value;
          
          // Store metrics for analytics
          if (process.env.NODE_ENV === 'production') {
            // Send to analytics service with enhanced tracking
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'performance_metric', {
                metric_name: metric.name,
                metric_value: metric.value,
                metric_delta: metric.delta,
                metric_id: metric.id,
                metric_navigationType: metric.navigationType
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
    if ('performance' in window && 'PerformanceObserver' in window) {
      performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            // Store navigation timing for analytics
            if (process.env.NODE_ENV === 'production') {
              // analyticsService.track('navigation_timing', entry);
            }
            
            // Track navigation performance in production
            if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
              const navEntry = entry as PerformanceNavigationTiming;
              window.gtag('event', 'navigation_timing', {
                dom_content_loaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
                load_complete: navEntry.loadEventEnd - navEntry.loadEventStart,
                first_byte: navEntry.responseStart - navEntry.requestStart,
                dom_processing: navEntry.domComplete - navEntry.domLoading
              });
            }
          }
        }
      });
      performanceObserver.observe({ entryTypes: ['navigation'] });
    }
    
    // Cleanup function
    return () => {
      if (performanceObserver) {
        performanceObserver.disconnect();
      }
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
