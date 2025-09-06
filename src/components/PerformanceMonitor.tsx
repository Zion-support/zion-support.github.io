import React, { useEffect, useState } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
  });

  useEffect(() => {
    // Monitor performance metrics
    const startTime = performance.now();
    
    const updateMetrics = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      const renderTime = performance.now() - startTime;
      
      setMetrics({
        loadTime: Math.round(loadTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
        renderTime: Math.round(renderTime),
      });
    };

    // Update metrics after component mount
    const timer = setTimeout(updateMetrics, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-2 rounded-lg text-xs font-mono z-50">
      <div>Load: {metrics.loadTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      <div>Render: {metrics.renderTime}ms</div>
    </div>
  );
};

export { PerformanceMonitor };
