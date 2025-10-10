<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor page load performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);
};
=======
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  totalBlockingTime: number;
}

interface PerformanceMonitorOptions {
  enableWebVitals?: boolean;
  enableCustomMetrics?: boolean;
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  enableUserTiming?: boolean;
  reportInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const usePerformanceMonitor = (options: PerformanceMonitorOptions = {}) => {
  const {
    enableWebVitals = true,
    enableCustomMetrics = true,
    enableResourceTiming = true,
    enableNavigationTiming = true,
    enableUserTiming = true,
    reportInterval = 5000,
    onMetricsUpdate
  } = options;

  const location = useLocation();

  // Web Vitals measurement
  const measureWebVitals = useCallback(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    const metrics: Partial<PerformanceMetrics> = {};

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metrics.firstContentfulPaint = fcpEntry.startTime;
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metrics.largestContentfulPaint = lastEntry.startTime;
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.processingStart && entry.startTime) {
          metrics.firstInputDelay = entry.processingStart - entry.startTime;
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableWebVitals]);

  // Navigation timing
  const measureNavigationTiming = useCallback(() => {
    if (!enableNavigationTiming || typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return;

    const metrics: Partial<PerformanceMetrics> = {
      pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
      timeToInteractive: navigation.domInteractive - navigation.navigationStart
    };

    return metrics;
  }, [enableNavigationTiming]);

  // Resource timing
  const measureResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource');
    const totalSize = resources.reduce((total, resource) => {
      const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
      return total + transferSize;
    }, 0);

    const slowResources = resources.filter(resource => {
      const duration = resource.responseEnd - resource.startTime;
      return duration > 1000; // Resources taking more than 1 second
    });

    return {
      totalResourceSize: totalSize,
      slowResources: slowResources.length,
      totalResources: resources.length
    };
  }, [enableResourceTiming]);

  // Custom metrics
  const measureCustomMetrics = useCallback(() => {
    if (!enableCustomMetrics || typeof window === 'undefined') return;

    const metrics: any = {};

    // Time to first byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metrics.timeToFirstByte = navigation.responseStart - navigation.requestStart;
    }

    // DOM content loaded
    if (document.readyState === 'complete') {
      metrics.domContentLoaded = performance.now();
    }

    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      metrics.memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
    }

    return metrics;
  }, [enableCustomMetrics]);

  // User timing marks
  const markUserTiming = useCallback((name: string, startMark?: string) => {
    if (!enableUserTiming || typeof window === 'undefined') return;

    if (startMark) {
      performance.measure(name, startMark);
    } else {
      performance.mark(name);
    }
  }, [enableUserTiming]);

  // Measure page load performance
  const measurePageLoad = useCallback(() => {
    const startTime = performance.now();
    
    const cleanup = measureWebVitals();
    const navigationMetrics = measureNavigationTiming();
    const resourceMetrics = measureResourceTiming();
    const customMetrics = measureCustomMetrics();

    const endTime = performance.now();
    const totalTime = endTime - startTime;

    const allMetrics: PerformanceMetrics = {
      pageLoadTime: navigationMetrics?.pageLoadTime || 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: navigationMetrics?.timeToInteractive || 0,
      totalBlockingTime: 0,
      ...customMetrics
    };

    // Report metrics
    if (onMetricsUpdate) {
      onMetricsUpdate(allMetrics);
    }

    // Log performance issues
    if (allMetrics.pageLoadTime > 3000) {
      console.warn('Slow page load detected:', allMetrics.pageLoadTime);
    }

    if (allMetrics.largestContentfulPaint > 2500) {
      console.warn('Poor LCP detected:', allMetrics.largestContentfulPaint);
    }

    if (allMetrics.cumulativeLayoutShift > 0.1) {
      console.warn('High CLS detected:', allMetrics.cumulativeLayoutShift);
    }

    return cleanup;
  }, [measureWebVitals, measureNavigationTiming, measureResourceTiming, measureCustomMetrics, onMetricsUpdate]);

  // Monitor performance continuously
  useEffect(() => {
    const cleanup = measurePageLoad();

    // Set up periodic monitoring
    const interval = setInterval(() => {
      const resourceMetrics = measureResourceTiming();
      const customMetrics = measureCustomMetrics();

      if (onMetricsUpdate) {
        onMetricsUpdate({
          pageLoadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          firstInputDelay: 0,
          cumulativeLayoutShift: 0,
          timeToInteractive: 0,
          totalBlockingTime: 0,
          ...customMetrics,
          ...resourceMetrics
        });
      }
    }, reportInterval);

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [measurePageLoad, measureResourceTiming, measureCustomMetrics, onMetricsUpdate, reportInterval]);

  // Re-measure on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      measurePageLoad();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, measurePageLoad]);

  return {
    markUserTiming,
    measurePageLoad,
    measureCustomMetrics,
    measureResourceTiming
  };
};

export default usePerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
