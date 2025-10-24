'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlowConnection: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
      
      // Check connection speed
      const connection = (navigator as any).connection;
      const isSlowConnection = connection ? connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' : false;

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        isSlowConnection
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-xs text-gray-300 z-50">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
        <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
        {metrics.isSlowConnection && (
          <div className="text-yellow-400">Slow connection detected</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;