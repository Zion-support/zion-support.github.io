'use client';

import React, { useEffect, memo, useCallback, useState } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  target?: Node;
}

interface PerformanceMonitoringProps {
  onMetricsUpdate?: (metrics: any) => void;
  enableRealTimeMonitoring?: boolean;
}

const PerformanceMonitoring: React.FC<PerformanceMonitoringProps> = memo(({ 
  onMetricsUpdate, 
  enableRealTimeMonitoring = true, 
  className = '' 
}) => {
  const [metrics, setMetrics] = useState({
    fcp: null as number | null,
    lcp: null as number | null,
    fid: null as number | null,
    cls: null as number | null,
    ttfb: null as number | null
  });
  const [, setMemoryUsage] = React.useState<{ total: number; limit: number } | null>(null);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      // Send to analytics if needed
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Web Vitals'
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        const fid = fidEntry.processingStart - fidEntry.startTime;
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(fid),
            event_category: 'Web Vitals'
          });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const clsEntry = entry as LayoutShiftEntry;
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'CLS',
              value: Math.round(clsValue * 1000),
              event_category: 'Web Vitals'
            });
          }
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FCP',
            value: Math.round(entry.startTime),
            event_category: 'Web Vitals'
          });
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  // Monitor resource loading performance
  const monitorResourcePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 1000) { // Resources taking more than 1 second
          // Log slow resources
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => resourceObserver.disconnect();
  }, []);

  // Monitor memory usage
  const monitorMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        const used = memory.usedJSHeapSize / 1024 / 1024; // MB
        const total = memory.totalJSHeapSize / 1024 / 1024; // MB
        const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
        
        setMemoryUsage({
          total: Math.round(total),
          limit: Math.round(limit)
        });

        if (used / limit > 0.8) {
          // High memory usage detected
        }
      }
    };

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShiftEntry;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  const measurePerformance = useCallback(() => {
    const cleanup1 = monitorCoreWebVitals();
    const cleanup2 = monitorResourcePerformance();
    const cleanup3 = monitorMemoryUsage();
    
    return () => {
      cleanup1?.();
      cleanup2?.();
      cleanup3?.();
    };
  }, [monitorCoreWebVitals, monitorResourcePerformance, monitorMemoryUsage]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance, enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className={`performance-monitoring ${className}`}>
      <h3>Performance Monitoring</h3>
      <div className="metrics">
        <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
        <div>FID: {metrics.fid?.toFixed(2)}ms</div>
        <div>CLS: {metrics.cls?.toFixed(4)}</div>
        <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
      </div>
    </div>
  );
});

PerformanceMonitoring.displayName = 'PerformanceMonitoring';

export default PerformanceMonitoring;
