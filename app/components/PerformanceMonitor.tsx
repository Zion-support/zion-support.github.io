import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  const formatMetric = (value?: number, unit: string = 'ms'): string => {
    if (value === undefined) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  const getMetricColor = (value?: number, thresholds: { good: number; needsImprovement: number }): string => {
    if (value === undefined) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Measure Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prev, firstInputDelay: metric.value }));
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
        });
      });
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    measurePerformance();
    
    // Measure performance after page load
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, [measurePerformance, showInProduction]);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-xl min-w-64">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">Performance Metrics</h3>
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
              <span className="text-gray-300">FID:</span>
              <span className={getMetricColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}>
                {formatMetric(metrics.firstInputDelay)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">CLS:</span>
              <span className={getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}>
                {formatMetric(metrics.cumulativeLayoutShift, '')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">TTFB:</span>
              <span className={getMetricColor(metrics.timeToFirstByte, { good: 800, needsImprovement: 1800 })}>
                {formatMetric(metrics.timeToFirstByte)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;