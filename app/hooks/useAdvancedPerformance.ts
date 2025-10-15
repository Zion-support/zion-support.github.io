import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
  memoryUsage: number | null;
}

interface PerformanceData {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
}

export const useAdvancedPerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null,
    memoryUsage: null,
  });

  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    // Initialize performance monitoring
    const initPerformanceMonitoring = () => {
      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        try {
          observerRef.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            });
          });
          observerRef.current.observe({ entryTypes: ['paint'] });
        } catch {
          console.warn('FCP monitoring not supported');
        }

        // Largest Contentful Paint (LCP)
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          console.warn('LCP monitoring not supported');
        }

        // Cumulative Layout Shift (CLS)
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          console.warn('CLS monitoring not supported');
        }
      }

      // First Input Delay (FID) - requires user interaction
      const measureFID = () => {
        if ('PerformanceObserver' in window) {
          try {
            const fidObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                if (entry.entryType === 'first-input') {
                  const fid = (entry as any).processingStart - entry.startTime;
                  setMetrics(prev => ({ ...prev, fid }));
                  fidObserver.disconnect();
                }
              });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch {
            console.warn('FID monitoring not supported');
          }
        }
      };

      // Measure page load metrics
      const measurePageLoad = () => {
        if (window.performance) {
          const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
            const ttfb = navigation.responseStart - navigation.requestStart;

            setMetrics(prev => ({
              ...prev,
              loadTime,
              domContentLoaded,
              ttfb,
            }));
          }
        }
      };

      // Memory usage (if available)
      const measureMemory = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
          }));
        }
      };

      // Measure after page load
      if (document.readyState === 'complete') {
        measurePageLoad();
        measureMemory();
        measureFID();
      } else {
        window.addEventListener('load', () => {
          measurePageLoad();
          measureMemory();
          measureFID();
        });
      }

      // Measure FID on first user interaction
      ['click', 'keydown', 'touchstart'].forEach(eventType => {
        document.addEventListener(eventType, measureFID, { once: true });
      });
    };

    initPerformanceMonitoring();

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Send metrics to analytics
  const sendMetrics = (customMetrics?: Partial<PerformanceMetrics>) => {
    const finalMetrics = { ...metrics, ...customMetrics };
    const performanceData: PerformanceData = {
      metrics: finalMetrics,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        custom_map: {
          fcp: finalMetrics.fcp,
          lcp: finalMetrics.lcp,
          fid: finalMetrics.fid,
          cls: finalMetrics.cls,
          ttfb: finalMetrics.ttfb,
          load_time: finalMetrics.loadTime,
          memory_usage: finalMetrics.memoryUsage,
        },
      });
    }

    // Store locally for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', performanceData);
    }

    return performanceData;
  };

  // Get performance score based on Core Web Vitals
  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20; // FCP should be < 1.8s
    if (metrics.lcp && metrics.lcp > 2500) score -= 30; // LCP should be < 2.5s
    if (metrics.fid && metrics.fid > 100) score -= 20; // FID should be < 100ms
    if (metrics.cls && metrics.cls > 0.1) score -= 20; // CLS should be < 0.1
    if (metrics.ttfb && metrics.ttfb > 600) score -= 10; // TTFB should be < 600ms

    return Math.max(0, score);
  };

  return {
    metrics,
    sendMetrics,
    getPerformanceScore,
    isMonitoring: observerRef.current !== null,
  };
};