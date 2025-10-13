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
    if (value === undefined) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  }, []);

  useEffect(() => {
    const startTime = performance.now();

    // Measure page load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure memory usage if available
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Web Vitals measurements
    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, firstInputDelay: metric.value }));
    });

    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
    });

    // Measure load time when page is fully loaded
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureMemoryUsage();
    } else {
      window.addEventListener('load', () => {
        measureLoadTime();
        measureMemoryUsage();
      });
    }

    // Send metrics to analytics (placeholder)
    const sendMetrics = () => {
      if (Object.keys(metrics).length > 0) {
        console.log('Performance Metrics:', metrics);
        // Here you would send metrics to your analytics service
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);
    return () => clearTimeout(timeoutId);
  }, [metrics]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Time:</span>
              <span className={`text-sm font-medium ${getMetricColor(metrics.loadTime || 0, { good: 1000, poor: 3000 })}`}>
                {formatMetric(metrics.loadTime)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">First Contentful Paint:</span>
              <span className={`text-sm font-medium ${getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}`}>
                {formatMetric(metrics.firstContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Largest Contentful Paint:</span>
              <span className={`text-sm font-medium ${getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}`}>
                {formatMetric(metrics.largestContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">First Input Delay:</span>
              <span className={`text-sm font-medium ${getMetricColor(metrics.firstInputDelay || 0, { good: 100, poor: 300 })}`}>
                {formatMetric(metrics.firstInputDelay)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Cumulative Layout Shift:</span>
              <span className={`text-sm font-medium ${getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}`}>
                {formatMetric(metrics.cumulativeLayoutShift, '')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Time to First Byte:</span>
              <span className={`text-sm font-medium ${getMetricColor(metrics.timeToFirstByte || 0, { good: 200, poor: 600 })}`}>
                {formatMetric(metrics.timeToFirstByte)}
              </span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Memory Usage:</span>
                <span className="text-sm font-medium text-blue-600">
                  {formatMetric(metrics.memoryUsage, 'MB')}
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              Performance monitoring is active. Metrics are collected automatically.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;