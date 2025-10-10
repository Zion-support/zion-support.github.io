import { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const handleLoad = () => {
      // Measure page load time
      const loadTime = performance.now();
      
      // Get Core Web Vitals
      const metrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
      };

      // Get First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        metrics.firstContentfulPaint = fcpEntry.startTime;
      }

      // Get Largest Contentful Paint
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        metrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Get First Input Delay
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        metrics.firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
      }

      // Get Cumulative Layout Shift
      const clsEntries = performance.getEntriesByType('layout-shift');
      let cls = 0;
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      metrics.cumulativeLayoutShift = cls;

      // Monitor memory usage (Chrome only)
      const handleMemoryUsage = () => {
        if ((performance as any).memory) {
          const memory = (performance as any).memory;
          const memoryUsage = {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
          };
          metrics.memoryUsage = memoryUsage;
          
          if (memoryUsage.used > memoryUsage.limit * 0.8) {
            // console.warn removed for production
          }
        }
      };

      handleMemoryUsage();

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }

      // Send metrics to analytics service (if available)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'performance',
          custom_map: {
            load_time: metrics.loadTime,
            fcp: metrics.firstContentfulPaint,
            lcp: metrics.largestContentfulPaint,
            fid: metrics.firstInputDelay,
            cls: metrics.cumulativeLayoutShift
          }
        });
      }
    };

    // Set up monitoring
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This hook doesn't return anything, it just monitors performance
};

export default usePerformanceMonitor;