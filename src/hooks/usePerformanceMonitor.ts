import { useEffect, useState, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoadTime: number | null;
  resourceLoadTime: number | null;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoadTime: null,
    resourceLoadTime: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const measureCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // Measure First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }

      // Measure DOM Load Time
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          domLoadTime: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart 
        }));
      }

      // Measure Resource Load Time
      const resourceEntries = performance.getEntriesByType('resource');
      if (resourceEntries.length > 0) {
        const totalResourceTime = resourceEntries.reduce((total, entry) => total + entry.duration, 0);
        setMetrics(prev => ({ ...prev, resourceLoadTime: totalResourceTime }));
      }

      // Store observers for cleanup
      observerRef.current = {
        observe: () => {},
        disconnect: () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        }
      };
    }
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measureCoreWebVitals();
  }, [measureCoreWebVitals]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  const resetMetrics = useCallback(() => {
    setMetrics({
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      domLoadTime: null,
      resourceLoadTime: null
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, [startMonitoring, stopMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    resetMetrics,
    isGoodPerformance: metrics.fcp && metrics.fcp < 1800 && metrics.lcp && metrics.lcp < 2500,
    isSlowPerformance: metrics.fcp && metrics.fcp > 3000 || metrics.lcp && metrics.lcp > 4000
  };
};