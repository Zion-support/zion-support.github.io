import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        const newMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: 0, // Would need to be measured with web-vitals library
          firstInputDelay: 0, // Would need to be measured with web-vitals library
          timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigationStart,
        };

        setMetrics(newMetrics);
        setIsVisible(true);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  const getScore = (value: number, threshold: number): 'good' | 'needs-improvement' | 'poor' => {
    if (value <= threshold) return 'good';
    if (value <= threshold * 1.5) return 'needs-improvement';
    return 'poor';
  };

  const fcpScore = getScore(metrics.firstContentfulPaint, 1800);
  const lcpScore = getScore(metrics.largestContentfulPaint, 2500);
  const ttiScore = getScore(metrics.timeToInteractive, 3800);

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50 border">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={`font-mono ${
            fcpScore === 'good' ? 'text-green-600' : 
            fcpScore === 'needs-improvement' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={`font-mono ${
            lcpScore === 'good' ? 'text-green-600' : 
            lcpScore === 'needs-improvement' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTI:</span>
          <span className={`font-mono ${
            ttiScore === 'good' ? 'text-green-600' : 
            ttiScore === 'needs-improvement' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {metrics.timeToInteractive.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="font-mono text-gray-600">
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;