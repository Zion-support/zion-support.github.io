import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Check if PerformanceObserver is available (not available in test environments)
    if (typeof PerformanceObserver === 'undefined') {
      return;
    }

    // Core Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      const metrics: PerformanceMetrics = {};
      
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = (entry as any).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metrics.cls = entry.value;
            }
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'navigation':
            metrics.ttfb = (entry as any).responseStart - (entry as any).requestStart;
            break;
        }
      }
      
      // Log metrics for debugging
      if (Object.keys(metrics).length > 0) {
        console.log('Performance Metrics:', metrics);
      }
      
      // Send to analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        Object.entries(metrics).forEach(([key, value]) => {
          if (value !== undefined) {
            window.gtag('event', 'performance_metric', {
              metric_name: key,
              metric_value: Math.round(value),
              event_category: 'Performance'
            });
          }
        });
      }
    });

    try {
      observer.observe({ 
        entryTypes: [
          'largest-contentful-paint', 
          'first-input', 
          'layout-shift',
          'paint',
          'navigation'
        ] 
      });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    // Memory usage monitoring
    if ('memory' in performance) {
      const logMemoryUsage = () => {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      };
      
      // Log memory usage every 30 seconds
      const memoryInterval = setInterval(logMemoryUsage, 30000);
      
      return () => clearInterval(memoryInterval);
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
