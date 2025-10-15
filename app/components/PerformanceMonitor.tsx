import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  connectionType?: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when debug mode is enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      const memoryInfo = (performance as any).memory;
      const connection = (navigator as any).connection;
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) : undefined,
        connectionType: connection?.effectiveType || 'unknown'
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show/hide based on localStorage
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg border border-slate-700 text-xs font-mono z-50">
      <div className="flex items-center justify-between mb-2">
        <span className="text-purple-400 font-semibold">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage}MB</div>}
        {metrics.connectionType && <div>Connection: {metrics.connectionType}</div>}
      </div>
    </div>
  );
};

export default PerformanceMonitor;