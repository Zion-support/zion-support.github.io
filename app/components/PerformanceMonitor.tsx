import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  renderTime?: number;
  loadTime?: number;
  memoryUsage?: number;
  cacheHitRate?: number;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableConsoleLogging?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = false,
  enableConsoleLogging = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [performanceScore, setPerformanceScore] = useState(100);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation?.loadEventEnd ?? 0,
        renderTime: navigation?.domContentLoadedEventEnd ?? 0,
        memoryUsage: (performance as any).memory?.usedJSHeapSize ?? 0,
        cacheHitRate: 0,
      };

      setMetrics(newMetrics);
      
      // Calculate performance score
      let score = 100;
      if (newMetrics.renderTime && newMetrics.renderTime > 1500) score -= 15;
      if (newMetrics.loadTime && newMetrics.loadTime > 3000) score -= 20;
      setPerformanceScore(Math.max(0, score));

      if (enableConsoleLogging && typeof console !== 'undefined') {
        console.log('Performance Metrics:', newMetrics);
      }

      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }
    };

    // Initial update
    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetrics);
    }

    // Set up periodic monitoring if enabled
    let interval: NodeJS.Timeout | null = null;
    if (enableRealTimeMonitoring) {
      interval = setInterval(updateMetrics, 5000);
    }

    return () => {
      window.removeEventListener('load', updateMetrics);
      if (interval) clearInterval(interval);
    };
  }, [enableRealTimeMonitoring, enableConsoleLogging, onMetricsUpdate]);

  if (!enableRealTimeMonitoring) {
    return null; // Don't render UI if not monitoring in real-time
  }

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', borderRadius: '5px', fontSize: '12px', zIndex: 9999 }}>
      <div><strong>Performance Score:</strong> {performanceScore}</div>
      {metrics.loadTime && <div><strong>Load Time:</strong> {Math.round(metrics.loadTime)}ms</div>}
      {metrics.renderTime && <div><strong>Render Time:</strong> {Math.round(metrics.renderTime)}ms</div>}
      {metrics.memoryUsage && <div><strong>Memory:</strong> {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>}
    </div>
  );
};

export default PerformanceMonitor;
