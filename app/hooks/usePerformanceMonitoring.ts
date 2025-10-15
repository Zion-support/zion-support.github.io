import { useEffect, useCallback } from 'react';

// Performance metrics interface - currently unused but available for future use

export const usePerformanceMonitoring = () => {
  const reportMetric = useCallback((name: string, value: number) => {
    // Report to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', name, {
        event_category: 'Performance',
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      // console.log(`Performance Metric - ${name}:`, value);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const metric = entry as any;
        
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              reportMetric('FCP', metric.startTime);
            }
            break;
          case 'largest-contentful-paint':
            reportMetric('LCP', metric.startTime);
            break;
          case 'first-input':
            reportMetric('FID', metric.processingStart - metric.startTime);
            break;
          case 'layout-shift':
            if (!metric.hadRecentInput) {
              reportMetric('CLS', metric.value);
            }
            break;
          case 'navigation':
            reportMetric('TTFB', metric.responseStart - metric.requestStart);
            break;
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (_error) {
      // Performance Observer not supported in this environment
    }

    // Monitor page load time
    const handleLoad = () => {
      const loadTime = performance.now();
      reportMetric('Page Load Time', loadTime);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleLoad);
    };
  }, [reportMetric]);

  return { reportMetric };
};

export const useResourceTiming = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;
        
        // Monitor slow resources
        if (resource.duration > 1000) {
          // Slow resource detected - could be logged to monitoring service
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['resource'] });
    } catch (_error) {
      // Resource timing observer not supported in this environment
    }

    return () => observer.disconnect();
  }, []);
};

export const useMemoryMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as any).memory;
      const usedMB = memory.usedJSHeapSize / 1048576;
      // const totalMB = memory.totalJSHeapSize / 1048576;
      const limitMB = memory.jsHeapSizeLimit / 1048576;

      // Alert if memory usage is high
      if (usedMB / limitMB > 0.8) {
        // High memory usage detected - could be logged to monitoring service
      }
    };

    // Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); // Initial check

    return () => clearInterval(interval);
  }, []);
};