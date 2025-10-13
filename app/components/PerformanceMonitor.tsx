import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  cumulativeLayoutShift: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    cumulativeLayoutShift: null,
  });

  const getMetricColor = useCallback((value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  const formatMetric = useCallback((value: number | null) => {
    if (value === null) return 'N/A';
    if (value < 1000) return `${value.toFixed(0)}ms`;
    return `${(value / 1000).toFixed(1)}s`;
  }, []);

  useEffect(() => {
    const measurePerformance = () => {
      // Measure load time
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));

      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Cleanup observers after 10 seconds
        setTimeout(() => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          clsObserver.disconnect();
        }, 10000);
      }
    };

    // Start measuring after a short delay to ensure page is loaded
    const timer = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="Show Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm font-mono max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-blue-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-300">Load Time:</span>
            <span className={getMetricColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
              {formatMetric(metrics.loadTime)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">FCP:</span>
            <span className={getMetricColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>
              {formatMetric(metrics.firstContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">LCP:</span>
            <span className={getMetricColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>
              {formatMetric(metrics.largestContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">CLS:</span>
            <span className={getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}>
              {formatMetric(metrics.cumulativeLayoutShift)}
            </span>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-600">
            <div className="text-xs text-gray-400">
              <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;