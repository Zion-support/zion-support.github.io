'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: any) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<any>({});

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const updateMetrics = () => {
      const newMetrics = {
        timestamp: Date.now(),
        memory: (performance as any).memory ? {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize,
          limit: (performance as any).memory.jsHeapSizeLimit
        } : null,
        timing: performance.timing ? {
          loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
          domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
        } : null
      };

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
    };

    const interval = setInterval(updateMetrics, 1000);
    updateMetrics(); // Initial update

    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, onMetricsUpdate]);

  if (!enableRealTimeMonitoring) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono">
      <div>Memory: {metrics.memory ? `${Math.round(metrics.memory.used / 1024 / 1024)}MB` : 'N/A'}</div>
      <div>Load Time: {metrics.timing ? `${metrics.timing.loadTime}ms` : 'N/A'}</div>
    </div>
  );
};

export default PerformanceMonitor;