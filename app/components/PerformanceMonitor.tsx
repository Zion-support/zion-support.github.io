import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  loadTime: number; // Page load time
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      
      const metrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: 0, // Would need to measure this with a different approach
        cls: 0, // Would need to measure this with a different approach
        ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      };

      setMetrics(metrics);
    };

    // Wait for page to load
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

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {metrics.loadTime}ms ({getScoreText(metrics.loadTime, { good: 2000, poor: 4000 })})
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => {
            localStorage.setItem('debug-performance', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          Hide Performance Monitor
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;