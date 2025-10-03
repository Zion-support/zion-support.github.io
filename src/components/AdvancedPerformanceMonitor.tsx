import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (performance && performance.now) {
        const loadTime = performance.now();
        
        // Measure render time
        const renderStart = performance.now();
        // Simulate render measurement
        const renderTime = performance.now() - renderStart;
        
        // Get memory usage if available
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        // Estimate FPS (simplified)
        const fps = 60; // Placeholder
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage,
          fps
        });
      }
    };

    measurePerformance();
    
    // Update metrics periodically
    const interval = setInterval(measurePerformance, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-sm font-mono">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
        <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
        <div>FPS: {metrics.fps}</div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;