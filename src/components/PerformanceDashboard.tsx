import React, { useEffect, useState, useCallback } from 'react';
import { clsx } from 'clsx';
import { performanceOptimizer, type PerformanceMetrics, type OptimizationSuggestion } from '../utils/performanceOptimizer';
import { bundleOptimizer, type BundleAnalysis, type BundleOptimizationSuggestion } from '../utils/bundleOptimizer';

interface PerformanceDashboardProps {
  className?: string;
  showBundleAnalysis?: boolean;
  showOptimizationSuggestions?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  className,
  showBundleAnalysis = true,
  showOptimizationSuggestions = true,
  autoRefresh = true,
  refreshInterval = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const [bundleAnalysis, setBundleAnalysis] = useState<BundleAnalysis | null>(null);
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [bundleSuggestions, setBundleSuggestions] = useState<BundleOptimizationSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const refreshMetrics = useCallback(async () => {
    setIsLoading(true);
    try {
      // Collect performance metrics
      const newMetrics = await performanceOptimizer.collectMetrics();
      setMetrics(newMetrics);

      // Get optimization suggestions
      if (showOptimizationSuggestions) {
        const suggestions = await performanceOptimizer.getOptimizationSuggestions(newMetrics);
        setOptimizationSuggestions(suggestions);
      }

      // Collect bundle analysis
      if (showBundleAnalysis) {
        const analysis = await bundleOptimizer.analyzeBundle();
        setBundleAnalysis(analysis);
        
        const suggestions = await bundleOptimizer.getOptimizationSuggestions(analysis);
        setBundleSuggestions(suggestions);
      }

      setLastRefresh(new Date());
    } catch (error) {
      console.error('Failed to refresh metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [showBundleAnalysis, showOptimizationSuggestions]);

  useEffect(() => {
    refreshMetrics();
  }, [refreshMetrics]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(refreshMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, refreshMetrics]);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">First Contentful Paint</h3>
            <span className={clsx('text-sm font-bold', getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }))}>
              {formatMetric(metrics.fcp)}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {getPerformanceLabel(metrics.fcp, { good: 1800, poor: 3000 })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Largest Contentful Paint</h3>
            <span className={clsx('text-sm font-bold', getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }))}>
              {formatMetric(metrics.lcp)}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {getPerformanceLabel(metrics.lcp, { good: 2500, poor: 4000 })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">First Input Delay</h3>
            <span className={clsx('text-sm font-bold', getMetricColor(metrics.fid, { good: 100, poor: 300 }))}>
              {formatMetric(metrics.fid)}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {getPerformanceLabel(metrics.fid, { good: 100, poor: 300 })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Cumulative Layout Shift</h3>
            <span className={clsx('text-sm font-bold', getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }))}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {getPerformanceLabel(metrics.cls, { good: 0.1, poor: 0.25 })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Time to First Byte</h3>
            <span className={clsx('text-sm font-bold', getMetricColor(metrics.ttfb, { good: 800, poor: 1800 }))}>
              {formatMetric(metrics.ttfb)}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {getPerformanceLabel(metrics.ttfb, { good: 800, poor: 1800 })}
          </div>
        </div>
      </div>

      {showOptimizationSuggestions && optimizationSuggestions.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Optimization Suggestions
          </h3>
          <div className="space-y-3">
            {optimizationSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      {suggestion.title}
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      {suggestion.description}
                    </p>
                    {suggestion.impact && (
                      <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                        Impact: {suggestion.impact}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showBundleAnalysis && bundleAnalysis && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Bundle Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bundle Size</h4>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {(bundleAnalysis.totalSize / 1024).toFixed(1)} KB
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {bundleAnalysis.chunks.length} chunks
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Largest Chunk</h4>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {bundleAnalysis.largestChunk?.name || 'N/A'}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {bundleAnalysis.largestChunk ? `${(bundleAnalysis.largestChunk.size / 1024).toFixed(1)} KB` : ''}
              </div>
            </div>
          </div>

          {bundleSuggestions.length > 0 && (
            <div className="mt-6">
              <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
                Bundle Optimization Suggestions
              </h4>
              <div className="space-y-2">
                {bundleSuggestions.map((suggestion, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      {suggestion.title}
                    </h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      {suggestion.description}
                    </p>
                    {suggestion.potentialSavings && (
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Potential savings: {suggestion.potentialSavings}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const getSuggestionIcon = (type: string) => {
  switch (type) {
    case 'critical': return '🚨';
    case 'warning': return '⚠️';
    case 'info': return 'ℹ️';
    default: return '📊';
  }
};

export default PerformanceDashboard;