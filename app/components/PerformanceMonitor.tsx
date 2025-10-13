import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when debug mode is enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      // CLS measurement would require more complex implementation
      const cumulativeLayoutShift = 0;
      const firstInputDelay = 0;

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay
      });
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Web Vitals measurement
    if ('web-vitals' in window) {
      // This would require the web-vitals library
      // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!metrics || process.env.NODE_ENV === 'production') {
    return null;
  }

  const getPerformanceColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-4 border border-gray-200 min-w-64">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Performance Metrics</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className={getPerformanceColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">First Contentful Paint:</span>
              <span className={getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Largest Contentful Paint:</span>
              <span className={getPerformanceColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cumulative Layout Shift:</span>
              <span className={getPerformanceColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200">
            <button
              onClick={() => {
                setMetrics(null);
                window.location.reload();
              }}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Refresh Metrics
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Component;