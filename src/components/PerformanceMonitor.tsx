import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  const [isVisible, setIsVisible] = useState(false);

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
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
        fps: 60 // Placeholder - would need actual FPS measurement
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
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 min-w-48">
      <div className="mb-2 font-bold text-green-400">Performance Monitor</div>
      <div className="space-y-1">
        <div>Load Time: <span className="text-yellow-400">{metrics.loadTime.toFixed(2)}ms</span></div>
        <div>Render Time: <span className="text-yellow-400">{metrics.renderTime.toFixed(2)}ms</span></div>
        <div>Memory: <span className="text-yellow-400">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</span></div>
        <div>FPS: <span className="text-yellow-400">{metrics.fps}</span></div>
      </div>
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;