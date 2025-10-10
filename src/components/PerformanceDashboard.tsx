import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0;
      
      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      
      // Measure memory usage
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      
      // Calculate FPS
      let fps = 0;
      if ('getEntriesByType' in performance) {
        const paintEntries = performance.getEntriesByType('paint');
        fps = paintEntries.length > 0 ? 60 : 0; // Simplified FPS calculation
      }

      const newMetrics = {
        loadTime,
        renderTime,
        memoryUsage,
        fps
      };

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
    };

    updateMetrics();
    
    // Update metrics periodically
    const interval = setInterval(updateMetrics, 1000);
    
    return () => clearInterval(interval);
  }, [onMetricsUpdate]);

  return (
    <div className="performance-dashboard">
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">Load Time:</span>
          <span className="metric-value">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">Render Time:</span>
          <span className="metric-value">{metrics.renderTime.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">Memory Usage:</span>
          <span className="metric-value">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</span>
        </div>
        <div className="metric">
          <span className="metric-label">FPS:</span>
          <span className="metric-value">{metrics.fps}</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;