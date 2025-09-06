import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') return;

    const startTime = performance.now();
    
    // Monitor page load time
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize;
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now() - startTime),
        memoryUsage: memoryUsage ? Math.round(memoryUsage / 1024 / 1024) : undefined
      });
    };

    // Monitor render time
    const handleRender = () => {
      const renderTime = performance.now() - startTime;
      setMetrics(prev => prev ? { ...prev, renderTime: Math.round(renderTime) } : null);
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener('DOMContentLoaded', handleRender);

    // Show performance monitor after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('DOMContentLoaded', handleRender);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible || !metrics || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-1">Performance Monitor</div>
      <div>Load: {metrics.loadTime}ms</div>
      <div>Render: {metrics.renderTime}ms</div>
      {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage}MB</div>}
    </div>
  );
};

export default PerformanceMonitor;