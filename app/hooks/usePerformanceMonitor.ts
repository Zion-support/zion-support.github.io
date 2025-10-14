import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  metadata?: Record<string, any>;
}

interface PerformanceMonitorOptions {
  enableCoreWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  enableNavigationTiming?: boolean;
  enableMemoryInfo?: boolean;
  enableCustomMetrics?: boolean;
  sampleRate?: number;
  batchSize?: number;
  flushInterval?: number;
}

export const usePerformanceMonitor = (options: PerformanceMonitorOptions = {}) => {
  const {
    enableCoreWebVitals = true,
    enableResourceTiming = true,
    enableUserTiming = true,
    enableNavigationTiming = true,
    enableMemoryInfo = true,
    enableCustomMetrics: _enableCustomMetrics = true,
    sampleRate = 1.0,
    batchSize = 10,
    flushInterval = 30000
  } = options;

  // Suppress unused variable warning
  void _enableCustomMetrics;

  const metricsRef = useRef<PerformanceMetric[]>([]);
  const flushTimeoutRef = useRef<NodeJS.Timeout>();

  // Core Web Vitals tracking
  useEffect(() => {
    if (!enableCoreWebVitals || typeof window === 'undefined') return;

    const trackCoreWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        trackMetric('lcp', lastEntry.startTime, {
          element: lastEntry.element?.tagName,
          url: lastEntry.url
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          trackMetric('fid', entry.processingStart - entry.startTime, {
            eventType: entry.name,
            target: entry.target?.tagName
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        trackMetric('cls', clsValue, {
          sources: entries.map(e => e.sources?.map(s => s.node?.tagName)).flat()
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          trackMetric('fcp', entry.startTime, {
            element: entry.element?.tagName
          });
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB (Time to First Byte)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        trackMetric('ttfb', navigationEntry.responseStart - navigationEntry.requestStart, {
          protocol: navigationEntry.nextHopProtocol,
          connectionType: (navigator as any).connection?.effectiveType
        });
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    };

    const cleanup = trackCoreWebVitals();
    return cleanup;
  }, [enableCoreWebVitals, trackMetric]);

  // Resource timing tracking
  useEffect(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const trackResourceTiming = () => {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resourceEntry = entry as PerformanceResourceTiming;
          const resourceType = getResourceType(resourceEntry.name);
          
          trackMetric('resource_load_time', resourceEntry.duration, {
            type: resourceType,
            size: resourceEntry.transferSize,
            cached: resourceEntry.transferSize === 0,
            domain: new URL(resourceEntry.name).hostname
          });
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      return () => resourceObserver.disconnect();
    };

    const cleanup = trackResourceTiming();
    return cleanup;
  }, [enableResourceTiming, trackMetric]);

  // User timing tracking
  useEffect(() => {
    if (!enableUserTiming || typeof window === 'undefined') return;

    const trackUserTiming = () => {
      const userTimingObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          trackMetric('user_timing', entry.duration, {
            name: entry.name,
            startTime: entry.startTime
          });
        });
      });
      userTimingObserver.observe({ entryTypes: ['measure', 'mark'] });

      return () => userTimingObserver.disconnect();
    };

    const cleanup = trackUserTiming();
    return cleanup;
  }, [enableUserTiming, trackMetric]);

  // Navigation timing tracking
  useEffect(() => {
    if (!enableNavigationTiming || typeof window === 'undefined') return;

    const trackNavigationTiming = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const timing = {
          dns: navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart,
          tcp: navigationEntry.connectEnd - navigationEntry.connectStart,
          request: navigationEntry.responseStart - navigationEntry.requestStart,
          response: navigationEntry.responseEnd - navigationEntry.responseStart,
          dom: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          load: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        };

        Object.entries(timing).forEach(([key, value]) => {
          trackMetric(`navigation_${key}`, value, {
            url: navigationEntry.name,
            type: navigationEntry.type
          });
        });
      }
    };

    // Track after page load
    if (document.readyState === 'complete') {
      trackNavigationTiming();
    } else {
      window.addEventListener('load', trackNavigationTiming);
      return () => window.removeEventListener('load', trackNavigationTiming);
    }
  }, [enableNavigationTiming, trackMetric]);

  // Memory info tracking
  useEffect(() => {
    if (!enableMemoryInfo || typeof window === 'undefined') return;

    const trackMemoryInfo = () => {
      const memory = (performance as any).memory;
      if (memory) {
        trackMetric('memory_used', memory.usedJSHeapSize, {
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        });
      }
    };

    // Track memory usage periodically
    const interval = setInterval(trackMemoryInfo, 30000);
    return () => clearInterval(interval);
  }, [enableMemoryInfo, trackMetric]);

  // Flush metrics periodically
  useEffect(() => {
    const flushMetrics = () => {
      if (metricsRef.current.length > 0) {
        sendMetrics(metricsRef.current);
        metricsRef.current = [];
      }
    };

    flushTimeoutRef.current = setInterval(flushMetrics, flushInterval);
    return () => {
      if (flushTimeoutRef.current) {
        clearInterval(flushTimeoutRef.current);
      }
    };
  }, [flushInterval]);

  // Track custom metric
  const trackMetric = useCallback((name: string, value: number, metadata?: Record<string, any>) => {
    if (Math.random() > sampleRate) return;

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      metadata
    };

    metricsRef.current.push(metric);

    // Flush if batch size reached
    if (metricsRef.current.length >= batchSize) {
      sendMetrics(metricsRef.current);
      metricsRef.current = [];
    }
  }, [sampleRate, batchSize]);

  // Send metrics to analytics
  const sendMetrics = (metrics: PerformanceMetric[]) => {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
      
      metrics.forEach((metric) => {
        gtag('event', 'performance_metric', {
          metric_name: metric.name,
          metric_value: Math.round(metric.value),
          metric_timestamp: metric.timestamp,
          ...metric.metadata
        });
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ metrics })
      }).catch(error => {
        console.warn('Failed to send performance metrics:', error);
      });
    }
  };

  // Helper function to get resource type
  const getResourceType = (url: string): string => {
    const extension = url.split('.').pop()?.toLowerCase();
    const typeMap: Record<string, string> = {
      'js': 'script',
      'css': 'stylesheet',
      'png': 'image',
      'jpg': 'image',
      'jpeg': 'image',
      'gif': 'image',
      'svg': 'image',
      'webp': 'image',
      'woff': 'font',
      'woff2': 'font',
      'ttf': 'font',
      'eot': 'font'
    };
    return typeMap[extension || ''] || 'other';
  };

  // Mark performance timing
  const mark = useCallback((name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  }, []);

  // Measure performance timing
  const measure = useCallback((name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const measure = performance.measure(name, startMark, endMark);
        trackMetric('custom_measure', measure.duration, {
          name: measure.name,
          startTime: measure.startTime
        });
      } catch (error) {
        console.warn('Failed to measure performance:', error);
      }
    }
  }, [trackMetric]);

  return {
    trackMetric,
    mark,
    measure
  };
};