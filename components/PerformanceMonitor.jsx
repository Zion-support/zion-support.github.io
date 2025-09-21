import React, { useEffect, useState } from 'react';

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    
    // Measure memory usage if available
    const memoryUsage = performance.memory ? 
      Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) : 0;

    // Measure render time
    const renderStart = performance.now();
    
    requestAnimationFrame(() => {
      const renderEnd = performance.now();
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderEnd - renderStart),
        memoryUsage
      });
    });
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-2 rounded-lg backdrop-blur-sm z-50">
      <div className="font-mono">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
    </div>
  );
};