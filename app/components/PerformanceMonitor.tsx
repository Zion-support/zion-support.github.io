import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

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

    // Get load time
    if (performance.timing) {
      newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    }

    // Get memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }

    setMetrics(prev => ({ ...prev, ...newMetrics }));
  }, []);

  useEffect(() => {
    // Set up Web Vitals monitoring
    const unsubscribeCLS = onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
    });

    const unsubscribeINP = onINP((metric) => {
      setMetrics(prev => ({ ...prev, interactionToNextPaint: metric.value }));
    });

    const unsubscribeFCP = onFCP((metric) => {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
    });

    const unsubscribeLCP = onLCP((metric) => {
      setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
    });

    const unsubscribeTTFB = onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
    });

    // Initial metrics update
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    // Cleanup
    return () => {
      unsubscribeCLS();
      unsubscribeINP();
      unsubscribeFCP();
      unsubscribeLCP();
      unsubscribeTTFB();
      clearInterval(interval);
    };
  }, [updateMetrics]);

  // Only show in development or if explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        title="Toggle Performance Monitor"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-4 min-w-64">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Performance Metrics</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
              <span className={getMetricColor(metrics.loadTime || 0, { good: 1000, poor: 3000 })}>
                {formatMetric(metrics.loadTime)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FCP:</span>
              <span className={getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}>
                {formatMetric(metrics.firstContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">LCP:</span>
              <span className={getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}>
                {formatMetric(metrics.largestContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">INP:</span>
              <span className={getMetricColor(metrics.interactionToNextPaint || 0, { good: 200, poor: 500 })}>
                {formatMetric(metrics.interactionToNextPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">CLS:</span>
              <span className={getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}>
                {formatMetric(metrics.cumulativeLayoutShift, '')}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
              <span className={getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}>
                {formatMetric(metrics.timeToFirstByte)}
              </span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Memory:</span>
                <span className="text-blue-600">
                  {formatMetric(metrics.memoryUsage, 'MB')}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
