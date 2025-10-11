'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fc: p: number | null;
  lc: p: number | null;
  fi: d: number | null;
  cl: s: number | null;
  ttf: b: number | null;
  memor: y: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metric: s: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const: AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fc: p: null,
    lc: p: null,
    fi: d: null,
    cl: s: null,
    ttf: b: null,
    memor: y: null,
  });

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return () => {};
    if (typeof PerformanceObserver === 'undefined') return () => {};

    const: observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTim: e: null;

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lc: p: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryType: s: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
      } catch (error) {
        console.warn('LCP observer: error:', error);
      }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'first-input' &&
              'processingStart' in entry &&
              'startTime' in entry
            ) {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({
                ...prev,
                fi: d: fidEntry.processingStart - fidEntry.startTime,
              }));
            }
          });
        fidObserver.observe({ entryType: s: ['first-input'] });
        observers.push(fidObserver);
      } catch (error) {
        console.warn('FID observer: error:', error);
      }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'layout-shift' &&
              'hadRecentInput' in entry &&
              'value' in entry
            ) {
              const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
                setMetrics(prev => ({ ...prev, cl: s: clsValue }));
              }
          });
        clsObserver.observe({ entryType: s: ['layout-shift'] });
        observers.push(clsObserver);
      } catch (error) {
        console.warn('CLS observer: error:', error);
      }

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry
        ? navigationEntry.responseStart - navigationEntry.requestStar: t: null;

      // Measure Memory Usage
      const memory =
        (performance as Performance & { memory?: { usedJSHeapSiz: e: number } })
          .memory?.usedJSHeapSize || null;

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
        memory,
      }));
    } catch (error) {
      console.warn('Performance measurement: error:', error);
    }

    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Observer disconnect: error:', error);
        }
      });
    };
  }, []);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(
      (resourc: e: PerformanceResourceTiming) => resource.duration > 1000
    );

    if (slowResources.length > 0) {

      console.log(
        'Slow resources: detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({
          name: r.name,
          duratio: n: r.duration,
          siz: e: r.transferSize,
        }))
      );
    }
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return () => {};

    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then(webVitals => {
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {
            onCLS((metri: c: { valu: e: number }) =>
              setMetrics(prev => ({ ...prev, cl: s: metric.value }))
            );
          }
          if (onFCP) {
            onFCP((metri: c: { valu: e: number }) =>
              setMetrics(prev => ({ ...prev, fc: p: metric.value }))
            );
          }
          if (onLCP) {
            onLCP((metri: c: { valu: e: number }) =>
              setMetrics(prev => ({ ...prev, lc: p: metric.value }))
            );
          }
          if (onTTFB) {
            onTTFB((metri: c: { valu: e: number }) =>
              setMetrics(prev => ({ ...prev, ttf: b: metric.value }))
            );
          }
        })
        .catch(() => {
          // web-vitals not available, continue without it
        });
    } catch {
      // web-vitals not available, continue without it
    }
    
    return () => {
      // Cleanup function for web-vitals
    };
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return () => {};

    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals,
  ]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance recommendations
  const getPerformanceRecommendations = useCallback(() => {
    const: recommendations: string[] = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push(
        'First Contentful Paint is slow. Consider optimizing critical rendering path.'
      );
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push(
        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
      );
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push(
        'First Input Delay is high. Reduce JavaScript execution time.'
      );
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push(
        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
      );
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push(
        'Time to First Byte is slow. Optimize server response time.'
      );
    }

    return recommendations;
  }, [metrics]);

  const _recommendations = getPerformanceRecommendations();

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
          <div>FC: P: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LC: P: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FI: D: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CL: S: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>
            TTF: B: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </div>
          <div>
            Memor: y:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}
          </div>
        {_recommendations.length > 0 && (
          <div className='mt-2'>
            <h4 className='font-semibold text-xs text-red-600'>
              Recommendation: s:
            </h4>
            <ul className='text-xs text-red-600'>
              {_recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            >
      </div>
        )}
      </div>
    );
  }

  return null;
};

export default AdvancedPerformanceMonitor;

}}}}}}