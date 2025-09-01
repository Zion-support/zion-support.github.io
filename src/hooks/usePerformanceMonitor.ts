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

interface PerformanceObserver {

  observe: (options: any) => void;
  disconnect: () => void;
}

export const usePerformanceMonitor = () => {

  const [metrics, setMetrics] = useState<PerformanceMetrics>({

    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoadTime: null,
    resourceLoadTime: null});

  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const measureCoreWebVitals = useCallback(() => {

    if ('PerformanceObserver' in window) {

      // First Contentful Paint
      try {

        const fcpObserver = new (window as any).PerformanceObserver((list: any) => {

          const entries = list.getEntries();
          const fcpEntry = entries.find((entry: any) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {

            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {

        // // console.warn('FCP observer failed:', e);
      }

      // Largest Contentful Paint
      try {

        const lcpObserver = new (window as any).PerformanceObserver((list: any) => {

          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {

            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {

        // // console.warn('LCP observer failed:', e);
      }

      // First Input Delay
      try {

        const fidObserver = new (window as any).PerformanceObserver((list: any) => {

          const entries = list.getEntries();
          entries.forEach((entry: any) => {

            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {

        // // console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift
      try {

        const clsObserver = new (window as any).PerformanceObserver((list: any) => {

          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {

            if (!(entry as any).hadRecentInput) {

              clsValue += (entry as any).value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {

        // // console.warn('CLS observer failed:', e);
      }
    }
  }, []);

  const measureNavigationTiming = useCallback(() => {

    if ('performance' in window && 'getEntriesByType' in (window as any).performance) {

      const navigationEntries = (window as any).performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {

        const navigation = navigationEntries[0] as any;
        setMetrics(prev => ({

          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoadTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          resourceLoadTime: navigation.loadEventEnd - navigation.loadEventStart}));
      }
    }
  }, []);

  const startMonitoring = useCallback(() => {

    setIsMonitoring(true);
    measureCoreWebVitals();
    
    // Measure navigation timing after page load
    if (document.readyState === 'complete') {

      measureNavigationTiming();
    } else {

      window.addEventListener('load', measureNavigationTiming);
    }
  }, [measureCoreWebVitals, measureNavigationTiming]);

  const stopMonitoring = useCallback(() => {

    setIsMonitoring(false);
    if (observerRef.current) {

      observerRef.current.disconnect();
    }
  }, []);

  const getPerformanceScore = useCallback(() => {

    let score = 100;
    
    // FCP scoring (0-25 points)
    if (metrics.fcp !== null) {

      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 25;
    }
    
    // LCP scoring (0-25 points)
    if (metrics.lcp !== null) {

      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 25;
    }
    
    // FID scoring (0-25 points)
    if (metrics.fid !== null) {

      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 25;
    }
    
    // CLS scoring (0-25 points)
    if (metrics.cls !== null) {

      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 25;
    }
    
    return Math.max(0, score);
  }, [metrics]);

  const getPerformanceGrade = useCallback(() => {

    const score = getPerformanceScore();
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [getPerformanceScore]);

  useEffect(() => {

    return () => {

      stopMonitoring();
    };
  }, [stopMonitoring]);

  return {

    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    getPerformanceScore,
    getPerformanceGrade};
};