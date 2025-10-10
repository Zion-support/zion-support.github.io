'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  memoryUsage: number;
  fps: number;
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
          let memoryUsage = 0;
          if ('memory' in performance) {
            const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
            memoryUsage = memory?.usedJSHeapSize || 0;
          }

          // Simple FPS calculation (placeholder)
          const fps = 60; // This would be calculated from actual frame timing

          setMetrics({
            loadTime,
            domContentLoaded,
            memoryUsage,
            fps
          });
        }
      }
    };

    // Measure after component mount
    const timer = setTimeout(measureWebVitals, 1000);

    // Set up performance observer for real-time monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            measureWebVitals();
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }

    return () => clearTimeout(timer);
  }, []);

  // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>DOM Ready:</span>
          <span className="font-mono">{metrics.domContentLoaded.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="font-mono">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</span>
        </div>
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className="font-mono">{metrics.fps}</span>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;