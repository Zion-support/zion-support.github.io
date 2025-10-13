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

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Collect performance metrics
    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      }

      // Time to First Byte
      if (performance.timing) {
        newMetrics.timeToFirstByte = performance.timing.responseStart - performance.timing.navigationStart;
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }

      setMetrics(newMetrics);
    };

    collectMetrics();

    // Web Vitals
    if ('web-vitals' in window) {
      // This would be populated by the WebVitalsTracker component
      // For now, we'll use placeholder values
    }
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 min-w-80 text-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-cyan-400">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Load Time:</span>
            <span className={`text-sm font-mono ${getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}`}>
              {formatMetric(metrics.loadTime)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">TTFB:</span>
            <span className={`text-sm font-mono ${getMetricColor(metrics.timeToFirstByte || 0, { good: 200, poor: 600 })}`}>
              {formatMetric(metrics.timeToFirstByte)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Memory:</span>
            <span className={`text-sm font-mono ${getMetricColor(metrics.memoryUsage || 0, { good: 50, poor: 100 })}`}>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">FCP:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.firstContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">LCP:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.largestContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">FID:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.firstInputDelay)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">CLS:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.cumulativeLayoutShift)}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Press Ctrl+Shift+P to toggle
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
