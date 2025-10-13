'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor = () => {
 origin/cursor/analyze-improve-and-deploy-application-1232
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
memory: null,
  });

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
      } catch (error) {
 origin/cursor/analyze-improve-and-deploy-application-1256
    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (error) {
} origin/cursor/analyze-improve-and-deploy-application-1256
      });
    };
  }, []);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

// eslint-disable-next-line no-console
      console.log('Slow resources:', slowResources.map(r => ({ origin/cursor/analyze-improve-and-deploy-application-1256
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        }))
      );
    }
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then(webVitals => {
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {
            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
            );
          }
          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            );
          }
          if (onLCP) {
            onLCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value }))
            );
          }
          if (onTTFB) {
            onTTFB((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value }))
            );
          }
        })
        .catch(() => {
          // web-vitals not available, continue without it
        });
    } catch {
      // web-vitals not available, continue without it
    }
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

export default AdvancedPerformanceMonitor origin/cursor/analyze-improve-and-deploy-application-0f9e
 origin/cursor/analyze-improve-and-deploy-application-0ff3
 origin/cursor/analyze-improve-and-deploy-application-1247
 origin/cursor/analyze-improve-and-deploy-application-13a2
