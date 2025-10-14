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

    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      console.log('CLS:', metric);
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
      console.log('INP:', metric);
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      console.log('FCP:', metric);
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      console.log('LCP:', metric);
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      console.log('TTFB:', metric);
    });

    // Monitor performance timing
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) { // Log slow resources
            console.warn('Slow resource detected:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize
            });
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-md border border-white/10 rounded-lg p-4 text-white text-xs font-mono z-50">
      <div className="mb-2 font-semibold text-cyan-400">Performance Metrics</div>
      <div className="space-y-1">
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>INP: {metrics.inp ? `${metrics.inp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'Loading...'}</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;