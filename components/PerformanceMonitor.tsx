'use client';

import { useEffect, useState, ReactNode } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  children?: ReactNode;
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor = ({ 
  children,
  showMetrics = false, 
  logMetrics = false, 
  onThresholdExceeded 
}: PerformanceMonitorProps) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime;
      const renderTime = performance.now() - startTime;
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      const newMetrics = {
        loadTime,
        renderTime,
        memoryUsage
      };
      
      setMetrics(newMetrics);
      
      if (logMetrics) {
        console.log('Performance Metrics:', newMetrics);
      }
      
      if (onThresholdExceeded) {
        // Check if metrics exceed thresholds
        if (loadTime > 3000 || renderTime > 1000) {
          onThresholdExceeded(newMetrics);
        }
      }
    };

    // Measure after component mounts
    const timeoutId = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timeoutId);
  }, [logMetrics, onThresholdExceeded]);

  return (
    <>
      {children}
      {showMetrics && metrics && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
          <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;