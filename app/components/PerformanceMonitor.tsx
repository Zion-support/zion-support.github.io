import React, { useEffect } from 'react';

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  fid: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      cls: null,
      fcp: null,
      lcp: null,
      ttfb: null,
      fid: null
    };

    // Monitor Core Web Vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS((metric: any) => {
        metrics.cls = metric.value;
        console.log('CLS:', metric);
        // Send to analytics in production
        if (process.env.NODE_ENV === 'production') {
          // Send to your analytics service
          console.log('Sending CLS to analytics:', metric.value);
        }
      });

      onFCP((metric: any) => {
        metrics.fcp = metric.value;
        console.log('FCP:', metric);
        if (process.env.NODE_ENV === 'production') {
          console.log('Sending FCP to analytics:', metric.value);
        }
      });

      onLCP((metric: any) => {
        metrics.lcp = metric.value;
        console.log('LCP:', metric);
        if (process.env.NODE_ENV === 'production') {
          console.log('Sending LCP to analytics:', metric.value);
        }
      });

      onTTFB((metric: any) => {
        metrics.ttfb = metric.value;
        console.log('TTFB:', metric);
        if (process.env.NODE_ENV === 'production') {
          console.log('Sending TTFB to analytics:', metric.value);
        }
      });
    });

    // Monitor additional performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) { // Log slow resources
            console.warn('Slow resource detected:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize
            });
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;