import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  renderTime: number | null;
  memoryUsage: number | null;
  networkLatency: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    renderTime: null,
    memoryUsage: null,
    networkLatency: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = window.performance.getEntriesByType('paint');
        
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memoryUsage = (window as any).performance?.memory?.usedJSHeapSize || 0;
        
        // Network latency (simplified)
        const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;

        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          networkLatency: Math.round(networkLatency),
        });
      }
    };

    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Load Time:</span>
          <span className={`font-mono ${(metrics.loadTime || 0) > 1000 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.loadTime ? `${metrics.loadTime}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Render Time:</span>
          <span className={`font-mono ${(metrics.renderTime || 0) > 100 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.renderTime ? `${metrics.renderTime}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Memory:</span>
          <span className={`font-mono ${(metrics.memoryUsage || 0) > 50 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.memoryUsage ? `${metrics.memoryUsage}MB` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Network:</span>
          <span className={`font-mono ${(metrics.networkLatency || 0) > 500 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.networkLatency ? `${metrics.networkLatency}ms` : 'Loading...'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-700 text-xs text-gray-500">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
