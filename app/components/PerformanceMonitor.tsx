
'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint'] });
    }

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Send metrics to analytics
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        if (metrics.fcp) gtag('event', 'web_vitals', { name: 'FCP', value: Math.round(metrics.fcp) });
        if (metrics.lcp) gtag('event', 'web_vitals', { name: 'LCP', value: Math.round(metrics.lcp) });
        if (metrics.fid) gtag('event', 'web_vitals', { name: 'FID', value: Math.round(metrics.fid) });
        if (metrics.cls) gtag('event', 'web_vitals', { name: 'CLS', value: Math.round(metrics.cls * 1000) });
        if (metrics.ttfb) gtag('event', 'web_vitals', { name: 'TTFB', value: Math.round(metrics.ttfb) });
      }
    };

    // Send metrics after a delay to ensure they're collected
    const timer = setTimeout(sendMetrics, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [metrics]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;
