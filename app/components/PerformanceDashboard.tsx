import React, { useState, useEffect } from 'react';

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
  });

  useEffect(() => {
    // Performance monitoring
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        
        const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory 
          ? Math.round((performance as Performance & { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize / 1024 / 1024)
          : 0;

        setMetrics({
          loadTime: Math.round(loadTime),
          memoryUsage,
          renderTime: performance.now(),
        });
      }
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (process.env['NODE_ENV'] === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      <div>Render: {Math.round(metrics.renderTime)}ms</div>
    </div>
  );
};

export default PerformanceDashboard;