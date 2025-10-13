import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  }, []);

  const getMetricStatus = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  }, []);

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : undefined,
        firstContentfulPaint: fcp ? fcp.startTime : undefined,
        largestContentfulPaint: lcp ? lcp.startTime : undefined,
        timeToFirstByte: navigation ? navigation.responseStart - navigation.requestStart : undefined,
      };

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }

      setMetrics(newMetrics);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show/hide monitor with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        {metrics.loadTime && (
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className={getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
              {metrics.loadTime.toFixed(0)}ms ({getMetricStatus(metrics.loadTime, { good: 2000, poor: 4000 })})
            </span>
          </div>
        )}
        
        {metrics.firstContentfulPaint && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
              {metrics.firstContentfulPaint.toFixed(0)}ms ({getMetricStatus(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })})
            </span>
          </div>
        )}
        
        {metrics.largestContentfulPaint && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
              {metrics.largestContentfulPaint.toFixed(0)}ms ({getMetricStatus(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })})
            </span>
          </div>
        )}
        
        {metrics.timeToFirstByte && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 })}>
              {metrics.timeToFirstByte.toFixed(0)}ms ({getMetricStatus(metrics.timeToFirstByte, { good: 800, poor: 1800 })})
            </span>
          </div>
        )}
        
        {metrics.memoryUsage && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {metrics.memoryUsage.toFixed(1)}MB ({getMetricStatus(metrics.memoryUsage, { good: 50, poor: 100 })})
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;