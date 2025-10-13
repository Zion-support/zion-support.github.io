import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  interactionToNextPaint?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((metric: any) => {
    setMetrics(prev => {
      const baseMetrics = prev || {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        interactionToNextPaint: 0,
        cumulativeLayoutShift: 0,
        timeToFirstByte: 0
      };
      
      return {
        ...baseMetrics,
        [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
         metric.name === 'INP' ? 'interactionToNextPaint' :
         metric.name === 'FCP' ? 'firstContentfulPaint' :
         metric.name === 'LCP' ? 'largestContentfulPaint' :
         metric.name === 'TTFB' ? 'timeToFirstByte' : 'loadTime']: metric.value
      };
    });
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      setMetrics(prev => {
        const baseMetrics = prev || {
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          interactionToNextPaint: 0,
          cumulativeLayoutShift: 0,
          timeToFirstByte: 0
        };
        
        return {
          ...baseMetrics,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        };
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [updateMetric]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
        aria-label="Toggle performance metrics"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Performance Metrics
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
<<<<<<< HEAD

              <span className={`font-mono ${getMetricColor(metrics.loadTime || 0, { good: 1000, poor: 3000 })}`}>
                {metrics.loadTime?.toFixed(0) || 'N/A'}ms
=======
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}


>>>>>>> cursor/fix-errors-and-merge-to-main-f2e0

              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
<<<<<<< HEAD

              <span className={`font-mono ${getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}`}>
                {metrics.firstContentfulPaint?.toFixed(0) || 'N/A'}ms
=======
              <span className={`font-mono ${metrics.firstContentfulPaint ? getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}


>>>>>>> cursor/fix-errors-and-merge-to-main-f2e0

              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
<<<<<<< HEAD

              <span className={`font-mono ${getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}`}>
                {metrics.largestContentfulPaint?.toFixed(0) || 'N/A'}ms
=======
              <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}


>>>>>>> cursor/fix-errors-and-merge-to-main-f2e0

              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">INP:</span>
<<<<<<< HEAD

              <span className={`font-mono ${getMetricColor(metrics.interactionToNextPaint || 0, { good: 200, poor: 500 })}`}>
                {metrics.interactionToNextPaint?.toFixed(0) || 'N/A'}ms
=======
              <span className={`font-mono ${metrics.interactionToNextPaint ? getMetricColor(metrics.interactionToNextPaint, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
                {metrics.interactionToNextPaint ? `${metrics.interactionToNextPaint.toFixed(0)}ms` : 'N/A'}


>>>>>>> cursor/fix-errors-and-merge-to-main-f2e0

              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
<<<<<<< HEAD

              <span className={`font-mono ${getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}`}>
                {metrics.cumulativeLayoutShift?.toFixed(3) || 'N/A'}
=======
              <span className={`font-mono ${metrics.cumulativeLayoutShift !== undefined ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cumulativeLayoutShift !== undefined ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}


>>>>>>> cursor/fix-errors-and-merge-to-main-f2e0

              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
<<<<<<< HEAD

              <span className={`font-mono ${getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}`}>
                {metrics.timeToFirstByte?.toFixed(0) || 'N/A'}ms
=======
              <span className={`font-mono ${metrics.timeToFirstByte ? getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
                {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'N/A'}


>>>>>>> cursor/fix-errors-and-merge-to-main-f2e0

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
      )}
    </div>
  );
};

export default PerformanceMonitor;