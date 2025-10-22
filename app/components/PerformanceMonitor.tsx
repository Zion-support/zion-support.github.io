import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let interval: NodeJS.Timeout;

    const updateMetrics = () => {
      const currentTime = performance.now();
      const renderTime = currentTime - lastTime;
      
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      frameCount++;
      const fps = Math.round(1000 / renderTime);
      
      setMetrics({
        renderTime: Math.round(renderTime * 100) / 100,
        memoryUsage: Math.round(memoryUsage / 1024 / 1024 * 100) / 100,
        fps
      });
      
      lastTime = currentTime;
    };

    interval = setInterval(updateMetrics, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-sm font-mono">
      <div className="space-y-1">
        <div>Render: {metrics.renderTime}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
        <div>FPS: {metrics.fps}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;