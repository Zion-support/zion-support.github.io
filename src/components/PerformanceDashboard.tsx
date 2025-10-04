import React, { useState, useEffect } from 'react';

const PerformanceDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      setMetrics({
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
        renderTime: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
      });
    };

    // Update metrics after page load
    setTimeout(updateMetrics, 1000);

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
      <div className="mt-2 text-gray-400">Press Ctrl+Shift+P to toggle</div>
    </div>
  );
};

export default PerformanceDashboard;