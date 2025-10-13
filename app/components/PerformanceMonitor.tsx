import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
      
      const baseMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        ttfb: navigation.responseStart - navigation.requestStart,
      };

      setMetrics(baseMetrics);

      // Measure Core Web Vitals using web-vitals library
      const handleMetric = (metric: any) => {
        setMetrics(prev => {
          if (!prev) return prev;
          return {
            ...prev,
            [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
             metric.name === 'INP' ? 'firstInputDelay' :
             metric.name === 'FCP' ? 'firstContentfulPaint' :
             metric.name === 'LCP' ? 'largestContentfulPaint' :
             metric.name === 'TTFB' ? 'ttfb' : 'loadTime']: metric.value
          };
        });

        // Send to analytics in production
        if (process.env.NODE_ENV === 'production' && window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.value),
            event_label: metric.id,
            non_interaction: true,
          });
        }
      };

      // Measure Core Web Vitals
      onCLS(handleMetric);
      onINP(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
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
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
        aria-label="Toggle performance metrics"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-72">
          <h3 className="font-semibold text-gray-900 mb-3">Core Web Vitals</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${getScoreColor(metrics.loadTime, { good: 1000, needsImprovement: 3000 })}`}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}>
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${getScoreColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}`}>
                {metrics.firstInputDelay.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}`}>
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}`}>
                {metrics.ttfb.toFixed(0)}ms
              </span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Green: Good | Yellow: Needs Improvement | Red: Poor
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;