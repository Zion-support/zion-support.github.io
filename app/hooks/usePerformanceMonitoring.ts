import { useEffect, useCallback } from 'react';

// interface PerformanceMetrics {
//   fcp?: number;
//   lcp?: number;
//   fid?: number;
//   cls?: number;
//   ttfb?: number;
// }
export const usePerformanceMonitoring = () => {
  const reportMetric = useCallback((name: string, value: number) => {
    // Report to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: (command: string, action: string, params: Record<string, unknown>) => void }).gtag('event', name, {
        event_category: 'Performance',
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`Performance Metric - ${name}:`, value);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const metric = entry as PerformanceEntry & { startTime: number; processingStart?: number; hadRecentInput?: boolean; value?: number; responseStart?: number; requestStart?: number };
        
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
            if (metric.processingStart !== undefined) {
              reportMetric('FID', metric.processingStart - metric.startTime);
            }
            break;
          case 'layout-shift':
            if (!metric.hadRecentInput && metric.value !== undefined) {
              reportMetric('CLS', metric.value);
            }
            break;
          case 'navigation':
            if (metric.responseStart !== undefined && metric.requestStart !== undefined) {
              reportMetric('TTFB', metric.responseStart - metric.requestStart);
            }
            break;
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Performance Observer not supported:', error);
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
          // eslint-disable-next-line no-console
          console.warn('Slow resource detected:', {
            name: resource.name,
            duration: resource.duration,
            size: resource.transferSize,
            type: resource.initiatorType
          });
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Resource timing observer not supported:', error);
    }

    return () => observer.disconnect();
  }, []);
};

export const useMemoryMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (!memory) return;
      
      const usedMB = memory.usedJSHeapSize / 1048576;
      const totalMB = memory.totalJSHeapSize / 1048576;
      const limitMB = memory.jsHeapSizeLimit / 1048576;

      // Alert if memory usage is high
      if (usedMB / limitMB > 0.8) {
        // eslint-disable-next-line no-console
        console.warn('High memory usage detected:', {
          used: `${usedMB.toFixed(2)}MB`,
          total: `${totalMB.toFixed(2)}MB`,
          limit: `${limitMB.toFixed(2)}MB`,
          percentage: `${((usedMB / limitMB) * 100).toFixed(1)}%`
        });
      }
    };

    // Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); // Initial check

    return () => clearInterval(interval);
  }, []);
};