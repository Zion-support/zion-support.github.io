import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export const usePerformanceMonitor = () => {
  const reportMetric = useCallback((name: string, value: number, delta: number) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, { value, delta });
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metric', {
          metric_name: name,
          metric_value: value,
          metric_delta: delta
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value,
          delta,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(err => {
        console.error('Failed to send performance metric:', err);
      });
    }
  }, []);

  useEffect(() => {
    // Web Vitals monitoring
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            reportMetric('FCP', fcpEntry.startTime, fcpEntry.startTime);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            reportMetric('LCP', lastEntry.startTime, lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            reportMetric('FID', entry.processingStart - entry.startTime, entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          reportMetric('CLS', clsValue, clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        const ttfbObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const ttfbEntry = entries.find(entry => entry.name === window.location.href);
          if (ttfbEntry) {
            reportMetric('TTFB', ttfbEntry.responseStart - ttfbEntry.requestStart, ttfbEntry.responseStart - ttfbEntry.requestStart);
          }
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });
      }
    };

    // Resource timing monitoring
    const measureResourceTiming = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const loadTime = entry.responseEnd - entry.requestStart;
            const size = entry.transferSize || 0;
            
            // Report slow resources
            if (loadTime > 1000) {
              reportMetric('SLOW_RESOURCE', loadTime, loadTime);
            }
            
            // Report large resources
            if (size > 100000) { // 100KB
              reportMetric('LARGE_RESOURCE', size, size);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      }
    };

    // Memory usage monitoring
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedJSHeapSize = memory.usedJSHeapSize;
        const totalJSHeapSize = memory.totalJSHeapSize;
        
        // Report high memory usage
        if (usedJSHeapSize > totalJSHeapSize * 0.8) {
          reportMetric('HIGH_MEMORY_USAGE', usedJSHeapSize, usedJSHeapSize);
        }
      }
    };

    // Long task monitoring
    const measureLongTasks = () => {
      if ('PerformanceObserver' in window) {
        const longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.duration > 50) { // Tasks longer than 50ms
              reportMetric('LONG_TASK', entry.duration, entry.duration);
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      }
    };

    // Initialize monitoring
    measureWebVitals();
    measureResourceTiming();
    measureMemoryUsage();
    measureLongTasks();

    // Periodic memory check
    const memoryInterval = setInterval(measureMemoryUsage, 30000); // Every 30 seconds

    return () => {
      clearInterval(memoryInterval);
    };
  }, [reportMetric]);

  // Custom performance measurement function
  const measurePerformance = useCallback((name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    reportMetric(`CUSTOM_${name}`, duration, duration);
    return duration;
  }, [reportMetric]);

  // Measure component render time
  const measureRender = useCallback((componentName: string, renderFn: () => void) => {
    return measurePerformance(`RENDER_${componentName}`, renderFn);
  }, [measurePerformance]);

  return {
    measurePerformance,
    measureRender,
    reportMetric
  };
};