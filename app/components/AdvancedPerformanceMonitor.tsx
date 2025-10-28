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
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  });

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      return updated;
    });
  }, [onMetricsUpdate]);

  useEffect(() => {
    if (!enableRealTimeMonitoring || typeof window === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            updateMetrics({ fcp: entry.startTime });
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }

    // Measure Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        updateMetrics({ lcp: lastEntry.startTime });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP measurement failed:', error);
    }

    // Measure First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            updateMetrics({ fid: entry.processingStart - entry.startTime });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observers.push(fidObserver);
    } catch (error) {
      console.warn('FID measurement failed:', error);
    }

    // Measure Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value || 0;
            updateMetrics({ cls: clsValue });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS measurement failed:', error);
    }

    // Measure Time to First Byte (TTFB)
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        updateMetrics({ ttfb: navigation.responseStart - navigation.requestStart });
      }
    } catch (error) {
      console.warn('TTFB measurement failed:', error);
    }

    // Measure Memory Usage
    try {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        updateMetrics({ memory: memory.usedJSHeapSize });
      }
    } catch (error) {
      console.warn('Memory measurement failed:', error);
    }

    // Cleanup observers on unmount
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [enableRealTimeMonitoring, updateMetrics]);

  return (
    <div className="performance-monitor">
      <div className="metrics-grid grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="metric-item">
          <span className="text-sm font-medium text-gray-600">FCP</span>
          <span className="text-lg font-bold text-blue-600">
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric-item">
          <span className="text-sm font-medium text-gray-600">LCP</span>
          <span className="text-lg font-bold text-green-600">
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric-item">
          <span className="text-sm font-medium text-gray-600">FID</span>
          <span className="text-lg font-bold text-yellow-600">
            {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric-item">
          <span className="text-sm font-medium text-gray-600">CLS</span>
          <span className="text-lg font-bold text-red-600">
            {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}
          </span>
        </div>
        <div className="metric-item">
          <span className="text-sm font-medium text-gray-600">TTFB</span>
          <span className="text-lg font-bold text-purple-600">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric-item">
          <span className="text-sm font-medium text-gray-600">Memory</span>
          <span className="text-lg font-bold text-indigo-600">
            {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(2)}MB` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;