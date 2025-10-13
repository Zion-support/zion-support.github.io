import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      const renderTime = performance.now();
      
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
      });
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;