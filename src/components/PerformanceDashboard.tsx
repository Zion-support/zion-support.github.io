import React, { useState } from 'react';
import { clsx } from 'clsx';

interface PerformanceDashboardProps {
  className?: string;
  isVisible?: boolean;
}

// Helper function to get performance color
// const getPerformanceColor = (value: number, thresholds: { good: number; poor: number }): string => {
//   if (value <= thresholds.good) return 'text-green-600 bg-green-100';
//   if (value <= thresholds.poor) return 'text-yellow-600 bg-yellow-100';
//   return 'text-red-600 bg-red-100';
// };

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  className, 
  isVisible = true 
}) => {
  const [metrics] = useState({
    fcp: 1200,
    lcp: 2500,
    fid: 50,
    cls: 0.1,
    ttfb: 800
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const refreshMetrics = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLastRefresh(new Date());
    } finally {
      setIsLoading(false);
    }
  };


  const getPerformanceLabel = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (value < 1000) return `${Math.round(value)}${unit}`;
    return `${(value / 1000).toFixed(1)}s`;
  };

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };
  if (!isVisible) {
    return null;
  }

  return (
    <div className={clsx('bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6', className)}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Performance Dashboard
        </h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={refreshMetrics}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Refreshing...' : 'Refresh'}
          </button>
          {lastRefresh && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {lastRefresh.toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">FCP</h3>
            <span className={`text-xs px-2 py-1 rounded ${getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })} bg-opacity-10`}>
              {getPerformanceLabel(metrics.fcp, { good: 1800, poor: 3000 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatMetric(metrics.fcp)}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">LCP</h3>
            <span className={`text-xs px-2 py-1 rounded ${getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })} bg-opacity-10`}>
              {getPerformanceLabel(metrics.lcp, { good: 2500, poor: 4000 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatMetric(metrics.lcp)}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">FID</h3>
            <span className={`text-xs px-2 py-1 rounded ${getMetricColor(metrics.fid, { good: 100, poor: 300 })} bg-opacity-10`}>
              {getPerformanceLabel(metrics.fid, { good: 100, poor: 300 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatMetric(metrics.fid)}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Cumulative Layout Shift</h3>
            <span className={getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {getPerformanceLabel(metrics.cls, { good: 0.1, poor: 0.25 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {metrics.cls.toFixed(3)}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">TTFB</h3>
            <span className={`text-xs px-2 py-1 rounded ${getMetricColor(metrics.ttfb, { good: 800, poor: 1800 })} bg-opacity-10`}>
              {getPerformanceLabel(metrics.ttfb, { good: 800, poor: 1800 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatMetric(metrics.ttfb)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
