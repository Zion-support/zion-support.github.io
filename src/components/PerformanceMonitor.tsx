import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
}

interface PerformanceMonitorProps {
  showDashboard: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDashboard, onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback(() => {
    const newMetrics: Partial<PerformanceMetrics> = {};

    // Get performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
      }

      // Get memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize;
      }
    }

    // Estimate bundle size (this would be more accurate with actual bundle analysis)
    const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const bundleSize = resourceEntries
      .filter((entry) => entry.name.includes('.js'))
      .reduce((total, entry) => total + (entry.transferSize || 0), 0);

    const updatedMetrics = {
      ...metrics,
      bundleSize: Math.round(bundleSize / 1024) // Convert to KB
    };

    setMetrics(updatedMetrics);
    if (onMetricsUpdate) {
      onMetricsUpdate(updatedMetrics as PerformanceMetrics);
    }
  }, [onMetricsUpdate]);

  useEffect(() => {
    if (!showDashboard) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input': {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
            break;
          }
          case 'layout-shift': {
            const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
            if (!layoutShiftEntry.hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (layoutShiftEntry.value || 0) 
              }));
            }
            break;
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [showDashboard, updateMetrics]);

  if (!showDashboard) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs text-gray-400 hover:text-white"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-1 text-xs">
          <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
          <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
          <div>FID: {metrics.fid?.toFixed(2) || 'N/A'}ms</div>
          <div>CLS: {metrics.cls?.toFixed(4) || 'N/A'}</div>
          <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
          <div>Memory: {metrics.memoryUsage ? (metrics.memoryUsage / 1024 / 1024).toFixed(2) + 'MB' : 'N/A'}</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;