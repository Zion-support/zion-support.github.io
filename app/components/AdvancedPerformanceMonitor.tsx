'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  });

  const measureWebVitals = useCallback((): (() => void) | undefined => {
    if (typeof window === 'undefined' || !('performance' in window)) return undefined;
    if (typeof PerformanceObserver === 'undefined') return undefined;

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
        // eslint-disable-next-line no-console
        console.warn('LCP observer failed:', error);
      }
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
                fid: fidEntry.processingStart - fidEntry.startTime,
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('FID observer failed:', error);
      }
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
              const clsEntry = entry as any;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('CLS observer failed:', error);
      }
    }

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry
        ? navigationEntry.responseStart - navigationEntry.requestStart
        : null;

      // Measure Memory Usage
      const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number } })
          .memory?.usedJSHeapSize || null;

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
        memory,
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('TTFB measurement failed:', error);
    }

    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn('Observer cleanup failed:', error);
        }
      });
    };
  }, []);

  const measureResourceTiming = useCallback((): void => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    );

    if (slowResources.length > 0) {
      console.warn(
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        }))
      );
    }
  }, []);

  const measureCoreWebVitals = useCallback((): void => {
    if (typeof window === 'undefined') return;

    // Use web-vitals library if available
    if (typeof (window as any).gtag === 'function') {
      // Google Analytics integration
      const sendToAnalytics = (metric: any) => {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.value),
          non_interaction: true,
        });
      };

      // This would integrate with web-vitals library
      // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
    }
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureWebVitals();
      measureResourceTiming();
    }, 5000);

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [enableRealTimeMonitoring, measureWebVitals, measureResourceTiming, measureCoreWebVitals]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  const getPerformanceScore = (metric: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (metric === null) return 'unknown';
    if (metric <= thresholds.good) return 'good';
    if (metric <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good':
        return 'text-green-400';
      case 'needs-improvement':
        return 'text-yellow-400';
      case 'poor':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </div>
          <div className="text-sm text-gray-400">First Contentful Paint</div>
          <div className={`text-xs ${getScoreColor(getPerformanceScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }))}`}>
            {getPerformanceScore(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </div>
          <div className="text-sm text-gray-400">Largest Contentful Paint</div>
          <div className={`text-xs ${getScoreColor(getPerformanceScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }))}`}>
            {getPerformanceScore(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </div>
          <div className="text-sm text-gray-400">First Input Delay</div>
          <div className={`text-xs ${getScoreColor(getPerformanceScore(metrics.fid, { good: 100, needsImprovement: 300 }))}`}>
            {getPerformanceScore(metrics.fid, { good: 100, needsImprovement: 300 })}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </div>
          <div className="text-sm text-gray-400">Cumulative Layout Shift</div>
          <div className={`text-xs ${getScoreColor(getPerformanceScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }))}`}>
            {getPerformanceScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </div>
          <div className="text-sm text-gray-400">Time to First Byte</div>
          <div className={`text-xs ${getScoreColor(getPerformanceScore(metrics.ttfb, { good: 800, needsImprovement: 1800 }))}`}>
            {getPerformanceScore(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            {metrics.memory ? `${Math.round(metrics.memory / 1024 / 1024)}MB` : 'N/A'}
          </div>
          <div className="text-sm text-gray-400">Memory Usage</div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;