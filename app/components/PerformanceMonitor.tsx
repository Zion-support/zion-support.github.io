'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      console.log('CLS:', metric.value);
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
      console.log('INP:', metric.value);
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      console.log('FCP:', metric.value);
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      console.log('LCP:', metric.value);
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      console.log('TTFB:', metric.value);
    });

    // Monitor resource loading
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

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn('Long task detected:', entry.duration);
      }
    });

    longTaskObserver.observe({ entryTypes: ['longtask'] });

    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
    };
  }, []);

  // Send metrics to analytics (if configured)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== null) {
          window.gtag('event', 'web_vitals', {
            metric_name: key.toUpperCase(),
            metric_value: Math.round(value),
            metric_delta: Math.round(value)
          });
        }
      });
    }
  }, [metrics]);

  // Development mode: show metrics overlay
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="mb-2 font-bold">Performance Metrics</div>
        <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
        <div>INP: {metrics.inp?.toFixed(1) || 'N/A'}ms</div>
        <div>FCP: {metrics.fcp?.toFixed(1) || 'N/A'}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(1) || 'N/A'}ms</div>
        <div>TTFB: {metrics.ttfb?.toFixed(1) || 'N/A'}ms</div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;