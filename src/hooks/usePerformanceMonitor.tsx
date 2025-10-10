import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export const usePerformanceMonitor = () => {
  const reportMetric = useCallback((name: string, value: number) => {
    // Report to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'Performance'
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            reportMetric('FCP', fcpEntry.startTime);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            reportMetric('LCP', lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            reportMetric('FID', entry.processingStart - entry.startTime);
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
          reportMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          reportMetric('TTFB', ttfb);
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    // Resource loading monitoring
    const monitorResourceLoading = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.duration > 1000) { // Report slow resources (>1s)
              reportMetric('slow_resource', entry.duration);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });

        return () => resourceObserver.disconnect();
      }
    };

    // Memory usage monitoring
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };
        
        reportMetric('memory_used', memoryUsage.used);
        reportMetric('memory_total', memoryUsage.total);
        reportMetric('memory_limit', memoryUsage.limit);
      }
    };

    // Long task monitoring
    const monitorLongTasks = () => {
      if ('PerformanceObserver' in window) {
        const longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 50) { // Report tasks longer than 50ms
              reportMetric('long_task', entry.duration);
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });

        return () => longTaskObserver.disconnect();
      }
    };

    // Initialize monitoring
    const cleanup = measureWebVitals();
    const resourceCleanup = monitorResourceLoading();
    monitorMemoryUsage();
    const longTaskCleanup = monitorLongTasks();

    // Monitor memory usage periodically
    const memoryInterval = setInterval(monitorMemoryUsage, 30000); // Every 30 seconds

    return () => {
      cleanup?.();
      resourceCleanup?.();
      longTaskCleanup?.();
      clearInterval(memoryInterval);
    };
  }, [reportMetric]);

  // Performance optimization utilities
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
        link.as = 'image';
      }
      document.head.appendChild(link);
    });
  }, []);

  return {
    reportMetric,
    optimizeImages,
    preloadCriticalResources
  };
};