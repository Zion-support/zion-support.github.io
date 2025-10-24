import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;
      
      setMetrics({
        loadTime: navigation ? Math.round(navigation.loadEventEnd - navigation.loadEventStart) : 0,
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1048576) : 0,
        renderTime: performance.now(),
        networkLatency: navigation ? Math.round(navigation.responseEnd - navigation.requestStart) : 0
      });
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);

    // Show/hide with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      <div>Render: {Math.round(metrics.renderTime)}ms</div>
      <div>Network: {metrics.networkLatency}ms</div>
      <div className="mt-2 text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;