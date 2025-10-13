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

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize) {
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }
    }

    setMetrics(newMetrics);
  }, []);

  useEffect(() => {
    updateMetrics();
    
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={toggleVisibility}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-lg transition-colors duration-200 text-sm font-medium"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>

      {isVisible && (
        <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${metrics.firstContentfulPaint ? getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${metrics.firstInputDelay ? getMetricColor(metrics.firstInputDelay, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
                {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${metrics.cumulativeLayoutShift !== undefined ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cumulativeLayoutShift !== undefined ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${metrics.timeToFirstByte ? getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
                {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Memory:</span>
              <span className={`font-mono ${metrics.memoryUsage ? getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 }) : 'text-gray-400'}`}>
                {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;