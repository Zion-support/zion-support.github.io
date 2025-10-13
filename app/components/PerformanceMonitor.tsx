import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate performance metrics collection
    const simulateMetrics = () => {
      setMetrics({
        loadTime: Math.random() * 2000 + 1000,
        firstContentfulPaint: Math.random() * 1500 + 800,
        largestContentfulPaint: Math.random() * 2000 + 1200,
        firstInputDelay: Math.random() * 200 + 50,
        cumulativeLayoutShift: Math.random() * 0.2 + 0.05,
        timeToFirstByte: Math.random() * 500 + 200
      });
    };

    simulateMetrics();
    const interval = setInterval(simulateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMetricColor = (value: number, thresholds: { good: number; poor?: number; needsImprovement?: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (thresholds.needsImprovement && value <= thresholds.needsImprovement) return 'text-yellow-600';
    if (thresholds.poor && value <= thresholds.poor) return 'text-orange-600';
    return 'text-red-600';
  };

  const formatMetric = (value: number) => {
    if (value < 1000) return `${value.toFixed(0)}ms`;
    return `${(value / 1000).toFixed(1)}s`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        Show Performance
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Performance Metrics</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Load Time:</span>
            <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
              {metrics.loadTime ? formatMetric(metrics.loadTime) : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">FCP:</span>
            <span className={`font-mono ${metrics.firstContentfulPaint ? getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
              {metrics.firstContentfulPaint ? formatMetric(metrics.firstContentfulPaint) : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">LCP:</span>
            <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
              {metrics.largestContentfulPaint ? formatMetric(metrics.largestContentfulPaint) : 'N/A'}
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
            <span className={`font-mono ${metrics.cumulativeLayoutShift ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
              {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">TTFB:</span>
            <span className={`font-mono ${metrics.timeToFirstByte ? getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
              {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;