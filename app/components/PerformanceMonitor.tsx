'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  connectionSpeed: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0;
      
      // Connection speed
      const connection = (navigator as any).connection;
      const connectionSpeed = connection ? connection.effectiveType || 'unknown' : 'unknown';

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage,
        connectionSpeed
      });
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-xs text-white z-50">
      <div className="font-semibold mb-2 text-cyan-400">Performance Monitor</div>
      {metrics ? (
        <div className="space-y-1">
          <div>Load: {metrics.loadTime}ms</div>
          <div>Render: {metrics.renderTime}ms</div>
          <div>Memory: {metrics.memoryUsage}MB</div>
          <div>Connection: {metrics.connectionSpeed}</div>
        </div>
      ) : (
        <div>Measuring...</div>
      )}
    </div>
  );
};

export default PerformanceMonitor;