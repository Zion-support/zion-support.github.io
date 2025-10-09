'use client';
<<<<<<< HEAD
export const usePerformanceMonitoring = () => {
=======
import { useEffect, useCallback } from 'react';
export const _usePerformanceMonitoring = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-d933
  const reportWebVitals = useCallback((metric: any) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(() => {
        // Analytics reporting failed
      });
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: entry.name,
            value: entry.startTime,
            timestamp: Date.now()
          });
        }
      });
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [reportWebVitals]);
  return { reportWebVitals };
};
