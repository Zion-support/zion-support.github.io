'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;)
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;)
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps></PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
    if (onMetricsUpdate) {
      onMetricsUpdate({ ...metrics, ...newMetrics });
    }
  }, [metrics, onMetricsUpdate]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure First Contentful Paint (FCP)
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      updateMetrics({ fcp: fcpEntry.startTime });
    }

    // Measure Largest Contentful Paint (LCP)
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      const lcp = lcpEntries[lcpEntries.length - 1];
      updateMetrics({ lcp: lcp.startTime });
    }

    // Measure First Input Delay (FID)
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      const fid = fidEntries[0] as PerformanceEventTiming;
      updateMetrics({ fid: fid.processingStart - fid.startTime });
    }

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    updateMetrics({ cls: clsValue });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({ ttfb: navigationEntry.responseStart - navigationEntry.requestStart });
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      updateMetrics({ memory: memory.usedJSHeapSize / 1024 / 1024 }); // Convert to MB
    }
  }, [updateMetrics]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const startMonitoring = () => {
      setIsMonitoring(true);
      
      // Initial measurement
      measurePerformance();

      // Set up periodic monitoring
      const interval = setInterval(measurePerformance, 5000);

      // Set up performance observer for real-time updates
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime });
          } else if (entry.entryType === 'first-input') {
            const fid = entry as PerformanceEventTiming;
            updateMetrics({ fid: fid.processingStart - fid.startTime });
          } else if (entry.entryType === 'layout-shift') {
            const cls = entry as any;
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
    };

    const cleanup = startMonitoring();
    return cleanup;
  }, [enableRealTimeMonitoring, measurePerformance, updateMetrics]);

  const getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }): string => {
    if (metric === null) return 'N/A';
    if (metric <= thresholds.good) return 'Good';
    if (metric <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 });
  const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 });
  const fidScore = getPerformanceScore(metrics.fid, { good: 100, poor: 300 });
  const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 });

  return (
    <div className="performance-monitor p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">First Contentful Paint</span>
            <span className={`text-xs px-2 py-1 rounded ${
              fcpScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              fcpScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {fcpScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </div>
        </div>

        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Largest Contentful Paint</span>
            <span className={`text-xs px-2 py-1 rounded ${
              lcpScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              lcpScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {lcpScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </div>
        </div>

        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">First Input Delay</span>
            <span className={`text-xs px-2 py-1 rounded ${
              fidScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              fidScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {fidScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
          </div>
        </div>

        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Cumulative Layout Shift</span>
            <span className={`text-xs px-2 py-1 rounded ${
              clsScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              clsScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {clsScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </div>
        </div>

        {metrics.memory && (
          <div className="metric-item md:col-span-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-300">Memory Usage</span>
              <span className="text-xs text-gray-400">MB</span>
            </div>
            <div className="text-lg font-mono text-white">
              {metrics.memory.toFixed(2)} MB
            </div>
          </div>
        );
      </div>

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
};

export default AdvancedPerformanceMonitor;
