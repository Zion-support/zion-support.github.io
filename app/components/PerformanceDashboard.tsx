'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });

  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;
        const memory = (
          performance as Performance & { memory?: { usedJSHeapSize: number } }
        ).memory;

        setMetrics({
          loadTime: navigation
            ? navigation.loadEventEnd - navigation.fetchStart
            : 0,
          renderTime: navigation
            ? navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart
            : 0,
          memoryUsage: memory
            ? Math.round(memory.usedJSHeapSize / 1024 / 1024)
            : 0,
          fps: 60, // Placeholder - would need actual FPS measurement
        });
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50'>
      <div className='mb-2 font-bold'>Performance Metrics</div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      <div>FPS: {metrics.fps}</div>
    </div>
  );
};

export default PerformanceDashboard;
