'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    setMetrics(prev => ({ ...prev, ...newMetrics }));
    if (onMetricsUpdate) {
      onMetricsUpdate({ ...metrics, ...newMetrics });
    }
  }, [metrics, onMetricsUpdate]);
const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure First Contentful Paint (FCP);
const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      updateMetrics({ fcp: fcpEntry.startTime });
    }
    memory: null});
;
const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;
;
const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP);
const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {;
const fidObserver = new PerformanceObserver(list => {;
const entries = list.getEntries();
          entries.forEach(entry => {
            if ($1) { const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({
                ...prev,
fid: fidEntry.processingStart - fidEntry.startTime,]
    });)]
    }
          });]
    });;
        fidObserver.observe({ entryTypes: ['first-input'] });;
        observers.push(fidObserver)]
    } catch (error) {
        // eslint-disable-next-line no-console]
    }
    }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {;
let clsValue = 0;
const clsObserver = new PerformanceObserver(list => {;
const entries = list.getEntries();
          entries.forEach(entry => {
            if ($1) { const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
            });
});]
    });;
        clsObserver.observe({ entryTypes: ['layout-shift'] });;
observers.push(clsObserver)]
    } catch (error) {
        // eslint-disable-next-line no-console]
    }
    }

    // Measure Time to First Byte (TTFB)
    try {;
const navigationEntries = performance.getEntriesByType?.('navigation') || [];
const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
const ttfb = navigationEntry
        ? navigationEntry.responseStart - navigationEntry.requestStart
        : null;

      // Measure Memory Usage;
const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number } });
          .memory?.usedJSHeapSize || null;

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
memory,]
    });)]
    } catch (error) {
      // eslint-disable-next-line no-console]
    }
    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
    if (typeof window === 'undefined' || !('performance' in window)) return;
;
const resources = performance.getEntriesByType('resource');
const slowResources = resources.filter(
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    );

    if (slowResources.length > 0) {
       
      // eslint-disable-next-line no-console
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({,
  name: r.name,
          duration: r.duration,
size: r.transferSize,]
    });)
      )]
    }
  }, []);
;
const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then(webVitals => {;
const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {
            onCLS((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, cls: metric.value });)
      updateMetrics({ lcp: lcp.startTime });
    }

    // Measure First Input Delay (FID);
const fidEntries = performance.getEntriesByType('first-input');
    if ($1) { const fid = fidEntries[0] as PerformanceEventTiming;
      updateMetrics({ fid: fid.processingStart - fid.startTime });
    }

    // Measure Cumulative Layout Shift (CLS);
let clsValue = 0;
const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    updateMetrics({ cls: clsValue });

    // Measure Time to First Byte (TTFB);
const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({ ttfb: navigationEntry.responseStart - navigationEntry.requestStart });
    }

    // Measure memory usage
    if ($1) { const memory = (performance as any).memory;
      updateMetrics({ memory: memory.usedJSHeapSize / 1024 / 1024 }); // Convert to MB
    }
  }, [updateMetrics]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;
const startMonitoring = () => {
      setIsMonitoring(true);
      
      // Initial measurement
      measurePerformance();


    return () => {
      if (cleanup) cleanup();
      clearInterval(interval)]
    }]
    }, [
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals]);

  useEffect(() => {
    if (onMetricsUpdate) {

      // Set up performance observer for real-time updates;
const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime });
          } else if ($1) { const fid = entry as PerformanceEventTiming;
            updateMetrics({ fid: fid.processingStart - fid.startTime });
          } else if ($1) { const cls = entry as any;
            if (!cls.hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + cls.value 
              }));
            }
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        clearInterval(interval);
        observer.disconnect();
        setIsMonitoring(false);
      };
    }
const cleanup = startMonitoring();
    return cleanup;
  }, [enableRealTimeMonitoring, measurePerformance, updateMetrics]);
    if (metric === null) return 'N/A';
    if (metric <= thresholds.good) return 'Good';
    if (metric <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push(
        'First Contentful Paint is slow. Consider optimizing critical rendering path.'

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <div>
        <h3 className='font-semibold text-sm mb-2'></h>Performance Monitor</h3>
        <div>
          <div></di>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0);ms` : 'N/A'}</div>
          <div></di>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0);ms` : 'N/A'}</div>
          <div></di>FID: {metrics.fid ? `${metrics.fid.toFixed(0);ms` : 'N/A'}</div>
          <div></di>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>
            TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0);ms` : 'N/A'}</div>
          <div>
            Memory:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1);MB`
              : 'N/A'}</div>
        </div>
        {_recommendations.length > 0 && (
          <div>
            <h4 className='font-semibold text-xs text-red-600'></h4>
              Recommendations:
            </h4>
            <ul className='text-xs text-red-600'></ul>
              {_recommendations.map((rec, index) => (
                <li key={index}></l>• {rec}</li>
              ));
            </ul>
export default AdvancedPerformanceMonitor;
}

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Monitoring Status</span>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-300">
              {isMonitoring ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdvancedPerformanceMonitor;
