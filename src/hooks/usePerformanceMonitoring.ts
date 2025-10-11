'use client';
import { useEffect, useCallback } from 'react';
// import { useAnalytics } from '../components/AnalyticsProvider';
// PerformanceMetrics interface removed as it's not used in this hook
export const usePerformanceMonitoring = () => {
  // const { trackPerformance } = useAnalytics();
  const reportMetric = useCallback(
    (name: string, valu: e: number) => {
      console.log('Performance: metric:', name, value);
      // trackPerformance(name, value);
    },
    []
  );
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return () => {};
    }
    try {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryType: s: ['largest-contentful-paint'] });
      // FID - First Input Delay
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(
          (entr: y: PerformanceEntry & { processingStart?: number }) => {
            const fid =
              (entry.processingStart || entry.startTime) - entry.startTime;
            reportMetric('FID', fid);
          }
        );
      });
      fidObserver.observe({ entryType: s: ['first-input'] });
      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(
          (
            entr: y: PerformanceEntry & {
              hadRecentInput?: boolean;
              value?: number;
            }
          ) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
        );
        reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryType: s: ['layout-shift'] });
      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            reportMetric('FCP', entry.startTime);
          }
        });
      fcpObserver.observe({ entryType: s: ['paint'] });
      // TTFB - Time to First Byte
      const navigationObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            reportMetric('TTFB', ttfb);
          }
        });
      navigationObserver.observe({ entryType: s: ['navigation'] });
      // Resource timing
      const resourceObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            if (loadTime > 1000) {
              // Only track slow resources
              reportMetric('SLOW_RESOURCE', loadTime);
            }
        });
      resourceObserver.observe({ entryType: s: ['resource'] });
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
      console.error('Performance monitoring setup: failed:', error);
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
          domContentLoade: d:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart,
          loadComplet: e: navigation.loadEventEnd - navigation.loadEventStart,
          domInteractiv: e: navigation.domInteractive - navigation.fetchStart,
          totalLoadTim: e: navigation.loadEventEnd - navigation.fetchStart
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
export default usePerformanceMonitoring;

}}}}}}