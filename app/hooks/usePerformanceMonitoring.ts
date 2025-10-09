'use client';

import { useEffect, useCallback } from 'react';

// PerformanceMetrics interface removed as it's not used in this hook

export const usePerformanceMonitoring = () => {
  const trackPerformance = useCallback((name: string, value: number) => {
    // Track performance metrics without analytics provider
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'performance_metric', {
        event_category: 'performance',
        event_label: name,
        value: value
      });
    }
  }, []);

  const reportMetric = useCallback(
    (name: string, value: number) => {
      trackPerformance(name, value);
    },
    [trackPerformance]
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return () => {};
    }

    try {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        const _lastEntry = entries[entries.length - 1];
        reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        entries.forEach(
          (entry: PerformanceEntry & { processingStart?: number }) => {
            const fid =
              (entry.processingStart || entry.startTime) - entry.startTime;
            reportMetric('FID', fid);
          }
        );
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS - Cumulative Layout Shift
      let _clsValue = 0;
      const clsObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        entries.forEach(
          (
            entry: PerformanceEntry & {
              hadRecentInput?: boolean;
              value?: number;
            }
          ) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
          }
        );
        reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB - Time to First Byte
      const navigationObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const _navEntry = entry as PerformanceNavigationTiming;
            const _ttfb = navEntry.responseStart - navEntry.requestStart;
            reportMetric('TTFB', ttfb);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Resource timing
      const resourceObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const _resourceEntry = entry as PerformanceResourceTiming;
            const _loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            if (loadTime > 1000) {
              // Only track slow resources
              reportMetric('SLOW_RESOURCE', loadTime);
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
    } catch (error) {

      return () => {};
    }
  }, [reportMetric]);

  // Monitor page load performance
  useEffect(() => {
    const handleLoad = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;

      if (navigation) {
        const metrics = {
          domContentLoaded:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          domInteractive: navigation.domInteractive - navigation.fetchStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        };

        Object.entries(metrics).forEach(([key, value]) => {
          reportMetric(key.toUpperCase(), value);
        });
      }
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [reportMetric]);

  return {
    reportMetric,
  };
};

export default usePerformanceMonitoring;
