import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics({
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            memoryUsage: 0, // Memory API not available in all browsers
          });
        }
      };

      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }

      return () => {
        window.removeEventListener('load', measurePerformance);
      };
    }
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;