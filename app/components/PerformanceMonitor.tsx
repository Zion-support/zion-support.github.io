import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + entry.value }));
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Log metrics for debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;