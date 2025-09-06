import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Activity } from 'lucide-react';

export const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-cyan-400" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-400 text-sm">
          Performance monitoring is active. This component will be enhanced with detailed metrics in future updates.
        </p>
      </div>
    </div>
  );
};
import React from 'react';

=======

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
  });

  useEffect(() => {
    // Monitor performance metrics
    const startTime = performance.now();
    
    const updateMetrics = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      const renderTime = performance.now() - startTime;
      
      setMetrics({
        loadTime: Math.round(loadTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
        renderTime: Math.round(renderTime),
      });
    };

    // Update metrics after component mount
    const timer = setTimeout(updateMetrics, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-2 rounded-lg text-xs font-mono z-50">
      <div>Load: {metrics.loadTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      <div>Render: {metrics.renderTime}ms</div>
    </div>
  );
};

export { PerformanceMonitor };
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
