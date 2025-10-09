'use client';
import { useEffect, useCallback } from 'react';
import { useAnalytics } from '../components/AnalyticsProvider';
// PerformanceMetrics interface removed as it's not used in this hook
export const usePerformanceMonitoring = () => {
  const { trackPerformance } = useAnalytics();
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
        const _lastEntry = _entries[_entries.length - 1];
        reportMetric('LCP', _lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // FID - First Input Delay
      const fidObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        _entries.forEach(
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
        _entries.forEach(
          (
            entry: PerformanceEntry & {
              hadRecentInput?: boolean;
              value?: number;
            }
          ) => {
            if (!entry.hadRecentInput && entry.value) {
              _clsValue += entry.value;
            }
          }
        );
        reportMetric('CLS', _clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        _entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB - Time to First Byte
      const navigationObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        _entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const _navEntry = entry as PerformanceNavigationTiming;
            const _ttfb = _navEntry.responseStart - _navEntry.requestStart;
            reportMetric('TTFB', _ttfb);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      // Resource timing
      const resourceObserver = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        _entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const _resourceEntry = entry as PerformanceResourceTiming;
            const _loadTime = _resourceEntry.responseEnd - _resourceEntry.requestStart;
            if (_loadTime > 1000) {
              // Only track slow resources
              reportMetric('SLOW_RESOURCE', _loadTime);
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
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
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
    reportMetric
  };
};
export default usePerformanceMonitoring;
