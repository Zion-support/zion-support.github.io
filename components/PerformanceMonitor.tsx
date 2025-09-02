import React, { useEffect, useState } from 'react';

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
    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any;
          if (fidEntry.processingStart) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    };

    // Monitor resource loading
    const observeResources = () => {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 1000) { // Log slow resources
            console.warn('Slow resource detected:', {
              name: entry.name,
              duration: entry.duration,
              size: (entry as any).transferSize
            });
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    };

    // Monitor long tasks
    const observeLongTasks = () => {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Log tasks longer than 50ms
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime
            });
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    };

    // Initialize monitoring
    observeWebVitals();
    observeResources();
    observeLongTasks();

    // Report metrics to analytics (if available)
    const reportMetrics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        Object.entries(metrics).forEach(([key, value]) => {
          if (value !== null) {
            (window as any).gtag('event', 'web_vitals', {
              metric_name: key,
              metric_value: Math.round(value),
              metric_rating: getMetricRating(key, value)
            });
          }
        });
      }
    };

    // Report metrics after a delay to ensure all metrics are collected
    const reportTimer = setTimeout(reportMetrics, 5000);

    return () => {
      clearTimeout(reportTimer);
    };
  }, [metrics]);

  const getMetricRating = (metric: string, value: number): string => {
    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'lcp':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'fid':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'cls':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'ttfb':
        return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
      default:
        return 'unknown';
    }
  };

  const formatMetric = (value: number | null, unit: string): string => {
    if (value === null) return 'Loading...';
    return `${Math.round(value)}${unit}`;
  };

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div>FCP: {formatMetric(metrics.fcp, 'ms')}</div>
        <div>LCP: {formatMetric(metrics.lcp, 'ms')}</div>
        <div>FID: {formatMetric(metrics.fid, 'ms')}</div>
        <div>CLS: {formatMetric(metrics.cls, '')}</div>
        <div>TTFB: {formatMetric(metrics.ttfb, 'ms')}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;