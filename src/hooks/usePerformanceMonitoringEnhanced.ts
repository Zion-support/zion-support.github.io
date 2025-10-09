'use client';
import { useEffect, useCallback } from 'react';

export const usePerformanceMonitoringEnhanced = () => {
  const reportWebVitals = useCallback((metric: any) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error);
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
            delta: entry.startTime,
            id: entry.name,
            navigationType: 'navigate'
          });
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, [reportWebVitals]);

  return {
    reportWebVitals
  };
};

export default usePerformanceMonitoringEnhanced;