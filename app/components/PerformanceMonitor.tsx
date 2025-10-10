'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  slowResources: any[];
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    slowResources: []
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const monitorPerformance = () => {
      // Page load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      // Resource timing analysis
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const slowResources = resources.filter(resource => resource.duration > 1000);
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics({
        loadTime,
        memoryUsage,
        slowResources
      });

      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize
        })));
      }
    };

    // Monitor performance after page load
    if (document.readyState === 'complete') {
      monitorPerformance();
    } else {
      window.addEventListener('load', monitorPerformance);
    }

    // Monitor memory usage periodically
    const memoryInterval = setInterval(() => {
      if ((performance as any).memory) {
        const memoryUsage = (performance as any).memory.usedJSHeapSize;
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    }, 5000);

    return () => {
      window.removeEventListener('load', monitorPerformance);
      clearInterval(memoryInterval);
    };
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Show Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className="text-gray-900 dark:text-white">{metrics.loadTime}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Memory:</span>
          <span className="text-gray-900 dark:text-white">
            {Math.round(metrics.memoryUsage / 1024 / 1024)}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Slow Resources:</span>
          <span className="text-gray-900 dark:text-white">{metrics.slowResources.length}</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;