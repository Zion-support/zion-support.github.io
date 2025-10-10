'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  connectionSpeed: string;
  renderTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    // Initialize performance monitoring
    const measureWebVitals = () => {
      // Basic web vitals measurement
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          // Get memory usage if available
          const memory = (performance as any).memory;
          const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0;
          
          // Get connection speed
          const connection = (navigator as any).connection;
          const connectionSpeed = connection ? connection.effectiveType || 'unknown' : 'unknown';
          
          setMetrics({
            loadTime: Math.round(loadTime),
            memoryUsage,
            connectionSpeed,
            renderTime: Math.round(domContentLoaded)
          });
        }
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    // Keyboard shortcut to toggle visibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measureWebVitals);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      {metrics ? (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime}ms</div>
          <div>Memory: {metrics.memoryUsage}MB</div>
          <div>Connection: {metrics.connectionSpeed}</div>
          <div>Render: {metrics.renderTime}ms</div>
        </div>
      ) : (
        <div>Loading metrics...</div>
      )}
      <div className="text-xs text-gray-400 mt-2">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;