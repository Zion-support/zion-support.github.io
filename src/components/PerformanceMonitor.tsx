import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  networkRequests: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showDashboard?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetricsUpdate, 
  showDashboard = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    networkRequests: 0
  });

  const measurePerformance = useCallback(() => {
    const startTime = performance.now();
    
    // Measure load time
    const loadTime = performance.timing?.loadEventEnd 
      ? performance.timing.loadEventEnd - performance.timing.navigationStart 
      : performance.now();

    // Measure memory usage
    const memoryUsage = (performance as { memory?: { usedJSHeapSize?: number } }).memory?.usedJSHeapSize || 0;

    // Count network requests
    const networkRequests = performance.getEntriesByType('resource').length;

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
    // Initial measurement
    const timer = setTimeout(measurePerformance, 1000);

    // Monitor performance periodically
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [measurePerformance]);

  if (!showDashboard) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 font-mono text-xs">
      <h3 className="text-sm font-bold mb-2 text-green-400">Performance Monitor</h3>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.loadTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className={metrics.renderTime > 100 ? 'text-red-400' : 'text-green-400'}>
            {metrics.renderTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage > 50 ? 'text-red-400' : 'text-green-400'}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span>Bundle Size:</span>
          <span className={metrics.bundleSize > 1000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.bundleSize}KB
          </span>
        </div>
        <div className="flex justify-between">
          <span>Network:</span>
          <span className={metrics.networkRequests > 50 ? 'text-red-400' : 'text-green-400'}>
            {metrics.networkRequests}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;