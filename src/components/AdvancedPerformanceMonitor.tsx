import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface AdvancedPerformanceMonitorProps {
  className?: string;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load web vitals
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        const vitals: Partial<PerformanceMetrics> = {};

        getCLS((metric) => {
          vitals.cls = metric.value;
          updateMetrics(vitals);
        });

        getFID((metric) => {
          vitals.fid = metric.value;
          updateMetrics(vitals);
        });

        getFCP((metric) => {
          vitals.fcp = metric.value;
          updateMetrics(vitals);
        });

        getLCP((metric) => {
          vitals.lcp = metric.value;
          updateMetrics(vitals);
        });

        getTTFB((metric) => {
          vitals.ttfb = metric.value;
          updateMetrics(vitals);
        });
      } catch (error) {
        console.warn('Web Vitals not available:', error);
      }
    };

    loadWebVitals();
  }, []);

  const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics } as PerformanceMetrics));
  };

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    return `${value.toFixed(1)}${unit}`;
  };

  if (!metrics) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
      >
        📊 Performance
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-80">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Performance Metrics
          </h3>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">First Contentful Paint</span>
              <span className={`font-mono text-sm ${getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
                {formatMetric(metrics.fcp)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Largest Contentful Paint</span>
              <span className={`font-mono text-sm ${getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
                {formatMetric(metrics.lcp)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">First Input Delay</span>
              <span className={`font-mono text-sm ${getScoreColor(metrics.fid, { good: 100, poor: 300 })}`}>
                {formatMetric(metrics.fid)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Cumulative Layout Shift</span>
              <span className={`font-mono text-sm ${getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
                {formatMetric(metrics.cls)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Time to First Byte</span>
              <span className={`font-mono text-sm ${getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}`}>
                {formatMetric(metrics.ttfb)}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setIsVisible(false)}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;