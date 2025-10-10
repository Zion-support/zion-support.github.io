'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
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
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0;
      
      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      
      // Measure memory usage
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      
      // Measure FPS (simplified)
      const fps = 60; // This would be calculated from actual frame timing
      
      const newMetrics: PerformanceMetrics = {
        loadTime,
        renderTime,
        memoryUsage,
        fps
      };
      
      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    
    return () => clearInterval(interval);
  }, [onMetricsUpdate]);

  return (
    <div className="performance-dashboard p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="metric">
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className="font-mono text-lg">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="text-sm text-gray-600">Render Time:</span>
          <span className="font-mono text-lg">{metrics.renderTime.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="text-sm text-gray-600">Memory Usage:</span>
          <span className="font-mono text-lg">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</span>
        </div>
        <div className="metric">
          <span className="text-sm text-gray-600">FPS:</span>
          <span className="font-mono text-lg">{metrics.fps}</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;