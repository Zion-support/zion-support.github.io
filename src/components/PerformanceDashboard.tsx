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
        
        const suggestions = await bundleOptimizer.getOptimizationSuggestions();
        setBundleSuggestions(suggestions);
      }

      setLastRefresh(new Date());
    } catch (error) {
      console.error('Failed to refresh performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [showBundleAnalysis, showOptimizationSuggestions]);

  useEffect(() => {
    refreshMetrics();

    if (autoRefresh) {
      const interval = setInterval(refreshMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshMetrics, autoRefresh, refreshInterval]);

  const getPerformanceColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
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

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'critical': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return 'ℹ️';
    }
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

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">First Contentful Paint</h3>
            <span className={getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {getPerformanceLabel(metrics.fcp, { good: 1800, poor: 3000 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatMetric(metrics.fcp)}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Largest Contentful Paint</h3>
            <span className={getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {getPerformanceLabel(metrics.lcp, { good: 2500, poor: 4000 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatMetric(metrics.lcp)}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">First Input Delay</h3>
            <span className={getMetricColor(metrics.fid, { good: 100, poor: 300 })}>
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
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Time to First Byte</h3>
            <span className={getMetricColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {getPerformanceLabel(metrics.ttfb, { good: 800, poor: 1800 })}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatMetric(metrics.ttfb)}
          </p>
        </div>
      </div>

      {/* Optimization Suggestions */}
      {showOptimizationSuggestions && optimizationSuggestions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Optimization Suggestions
          </h3>
          <div className="space-y-3">
            {optimizationSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                      {suggestion.title}
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      {suggestion.description}
                    </p>
                    {suggestion.impact && (
                      <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                        Expected impact: {suggestion.impact}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bundle Analysis */}
      {showBundleAnalysis && bundleAnalysis && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Bundle Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Total Bundle Size</h4>
              <p className="text-2xl font-bold text-blue-600">
                {(bundleAnalysis.totalSize / 1024).toFixed(1)} KB
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Number of Chunks</h4>
              <p className="text-2xl font-bold text-green-600">
                {bundleAnalysis.chunks.length}
              </p>
            </div>
          </div>

          {/* Bundle Suggestions */}
          {bundleSuggestions.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Bundle Optimizations</h4>
              <div className="space-y-2">
                {bundleSuggestions.map((suggestion, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-sm">💡</span>
                      <div>
                        <h5 className="font-medium text-blue-800 dark:text-blue-200 text-sm">
                          {suggestion.title}
                        </h5>
                        <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                          {suggestion.description}
                        </p>
                      </div>
                    </div>
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