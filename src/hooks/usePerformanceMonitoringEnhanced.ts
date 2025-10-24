'use client'
export const usePerformanceMonitoring = () => {/* TODO: Fix JSX expression */}
import { useEffect, useCallback } from 'react';

export const _usePerformanceMonitoring = () => {// TODO: Add content;}

import { useState, useEffect, useCallback } from 'react';

interface EnhancedPerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  fps: number;
  renderTime: number;
  networkLatency: number;
}

export function usePerformanceMonitoringEnhanced() {
  const [metrics, setMetrics] = useState<EnhancedPerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0,
    renderTime: 0,
    networkLatency: 0
  });

  const updateMetrics = useCallback(() => {
    setMetrics({
      loadTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0, // eslint-disable-line @typescript-eslint/no-explicit-any
      fps: 60, // Placeholder
      renderTime: performance.now(),
      networkLatency: 0 // Placeholder
    });
  }, []);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  return { metrics, updateMetrics };
}
  const reportWebVitals = useCallback((metri)
  c: any) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
'use client';
export const usePerformanceMonitoring = () => {
'use client';
export const usePerformanceMonitoring = (
  const reportWebVitals = useCallback((metric: any) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    ) => {$3}; else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(() => {
        // Analytics reporting failed
      });
    }
      fetch(url, {body, method: 'POST', keepalive: true}).catch(console.error);
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
      observer.observe({entryTypes: ['navigation', 'paint', 'largest-contentful-paint']});
 observer.disconnect();
  }, [reportWebVitals]);
  return {reportWebVitals};
};


export default usePerformanceMonitoring;
