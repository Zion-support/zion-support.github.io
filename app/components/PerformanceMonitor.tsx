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
      const newMetrics: PerformanceMetrics = {};

      // Load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        newMetrics.timeToFirstByte = performance.timing.responseStart - performance.timing.navigationStart;
      }

      // Web Vitals
      if ('web-vitals' in window) {
        // This would be handled by the WebVitalsTracker component
      }

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

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-sm max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        {metrics.loadTime && (
          <div className="flex justify-between items-center">
            <span>Load Time:</span>
            <span className={getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.firstContentfulPaint && (
          <div className="flex justify-between items-center">
            <span>FCP:</span>
            <span className={getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.largestContentfulPaint && (
          <div className="flex justify-between items-center">
            <span>LCP:</span>
            <span className={getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.firstInputDelay && (
          <div className="flex justify-between items-center">
            <span>FID:</span>
            <span className={getMetricColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
              {metrics.firstInputDelay.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cumulativeLayoutShift && (
          <div className="flex justify-between items-center">
            <span>CLS:</span>
            <span className={getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.timeToFirstByte && (
          <div className="flex justify-between items-center">
            <span>TTFB:</span>
            <span className={getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 })}>
              {metrics.timeToFirstByte.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.memoryUsage && (
          <div className="flex justify-between items-center">
            <span>Memory:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;