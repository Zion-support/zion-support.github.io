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

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'P') {
      setIsVisible(prev => !prev);
    }
  }, []);

  useEffect(() => {
    // Collect performance metrics
    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        newMetrics.memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      // Web Vitals
      if ('web-vitals' in window) {
        // This would be populated by the WebVitalsTracker component
        // For now, we'll use placeholder values
      }

      setMetrics(newMetrics);
    };

    collectMetrics();

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-slate-800 border border-cyan-500/20 rounded-lg shadow-2xl p-4 min-w-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-300">Load Time:</span>
            <span className={getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}>
              {formatMetric(metrics.loadTime)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">FCP:</span>
            <span className={getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}>
              {formatMetric(metrics.firstContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">LCP:</span>
            <span className={getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}>
              {formatMetric(metrics.largestContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">FID:</span>
            <span className={getMetricColor(metrics.firstInputDelay || 0, { good: 100, poor: 300 })}>
              {formatMetric(metrics.firstInputDelay)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">CLS:</span>
            <span className={getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}>
              {formatMetric(metrics.cumulativeLayoutShift, '')}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className="text-cyan-400">
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Press Ctrl+Shift+P to toggle this monitor
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;