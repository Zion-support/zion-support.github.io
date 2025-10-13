import React, { useState, useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  inp: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
    });

    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            domInteractive: navEntry.domInteractive - navEntry.navigationStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Log metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.values(metrics).some(val => val !== null)) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null;
};

export default PerformanceMonitor;