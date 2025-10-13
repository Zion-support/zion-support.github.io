import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get performance metrics
    const getPerformanceMetrics = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const webVitals = performance.getEntriesByType('measure');

      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : null;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null;
      const largestContentfulPaint = webVitals.find(entry => entry.name === 'LCP')?.startTime || null;
      const firstInputDelay = webVitals.find(entry => entry.name === 'FID')?.startTime || null;
      const cumulativeLayoutShift = webVitals.find(entry => entry.name === 'CLS')?.value || null;

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift
      });
    };

    // Get metrics after page load
    if (document.readyState === 'complete') {
      getPerformanceMetrics();
    } else {
      window.addEventListener('load', getPerformanceMetrics);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', getPerformanceMetrics);
    };
  }, []);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCLSColor = (value: number) => {
    if (value <= 0.1) return 'text-green-600';
    if (value <= 0.25) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Show performance metrics"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Performance Metrics
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close performance metrics"
        >
          ✕
        </button>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Load Time:</span>
          <span className={`font-mono ${getMetricColor(metrics.loadTime || 0, { good: 1000, poor: 3000 })}`}>
            {metrics.loadTime?.toFixed(0) || 'N/A'}ms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">FCP:</span>
          <span className={`font-mono ${getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}`}>
            {metrics.firstContentfulPaint?.toFixed(0) || 'N/A'}ms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">LCP:</span>
          <span className={`font-mono ${getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}`}>
            {metrics.largestContentfulPaint?.toFixed(0) || 'N/A'}ms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">FID:</span>
          <span className={`font-mono ${getMetricColor(metrics.firstInputDelay || 0, { good: 100, poor: 300 })}`}>
            {metrics.firstInputDelay?.toFixed(0) || 'N/A'}ms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">CLS:</span>
          <span className={`font-mono ${getCLSColor(metrics.cumulativeLayoutShift || 0)}`}>
            {metrics.cumulativeLayoutShift?.toFixed(3) || 'N/A'}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <div className="flex items-center mb-1">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Good
          </div>
          <div className="flex items-center mb-1">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Needs Improvement
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Poor
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;