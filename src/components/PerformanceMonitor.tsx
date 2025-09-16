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
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Memory usage (if available)
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1048576) : undefined;

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isVisible]);

  if (process.env.NODE_ENV !== 'development' || !isVisible || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Performance Monitor</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div>Load Time: <span className="text-green-400">{metrics.loadTime}ms</span></div>
        <div>Render Time: <span className="text-blue-400">{metrics.renderTime}ms</span></div>
        {metrics.memoryUsage && (
          <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage}MB</span></div>
        )}
      </div>
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;