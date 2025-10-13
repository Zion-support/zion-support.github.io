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

  const formatMetric = useCallback((value: number | undefined, unit: string = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    return `${value.toFixed(0)}${unit}`;
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (loadTime > 0) newMetrics.loadTime = loadTime;
    }

    // Web Vitals
    if ('web-vitals' in window) {
      // This would be populated by the WebVitalsTracker component
      // For now, we'll use placeholder values
    }

    setMetrics(newMetrics);
  }, []);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80 z-50">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
      
      <div className="space-y-2 text-sm">
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
          <span className="text-gray-300">TTFB:</span>
          <span className={getMetricColor(metrics.timeToFirstByte || 0, { good: 200, poor: 600 })}>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        
        {metrics.memoryUsage !== undefined && (
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;