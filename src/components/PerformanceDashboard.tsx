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

    if (autoRefresh) {
      const interval = setInterval(refreshMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshMetrics, autoRefresh, refreshInterval]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        // Toggle visibility if needed
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      default: return '📊';
    }
  };

  const getSuggestionColor = (type: string) => {
    switch (type) {
      case 'critical': return 'text-red-500';
      case 'warning': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      default: return 'text-gray-500';
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">First Contentful Paint</div>
          <div className={clsx('text-2xl font-bold', getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }))}>
            {formatMetric(metrics.fcp)}
          </div>
          <div className="text-xs text-gray-500">
            {getPerformanceLabel(metrics.fcp, { good: 1800, poor: 3000 })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">Largest Contentful Paint</div>
          <div className={clsx('text-2xl font-bold', getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }))}>
            {formatMetric(metrics.lcp)}
          </div>
          <div className="text-xs text-gray-500">
            {getPerformanceLabel(metrics.lcp, { good: 2500, poor: 4000 })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">First Input Delay</div>
          <div className={clsx('text-2xl font-bold', getMetricColor(metrics.fid, { good: 100, poor: 300 }))}>
            {formatMetric(metrics.fid)}
          </div>
          <div className="text-xs text-gray-500">
            {getPerformanceLabel(metrics.fid, { good: 100, poor: 300 })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">Cumulative Layout Shift</div>
          <div className={clsx('text-2xl font-bold', getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }))}>
            {metrics.cls.toFixed(3)}
          </div>
          <div className="text-xs text-gray-500">
            {getPerformanceLabel(metrics.cls, { good: 0.1, poor: 0.25 })}
          </div>
        </div>
      </div>

      {/* Bundle Analysis */}
      {showBundleAnalysis && bundleAnalysis && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bundle Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Size</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                {formatMetric(bundleAnalysis.totalSize, 'KB')}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">JavaScript</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                {formatMetric(bundleAnalysis.jsSize, 'KB')}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">CSS</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                {formatMetric(bundleAnalysis.cssSize, 'KB')}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Optimization Suggestions */}
      {showOptimizationSuggestions && (optimizationSuggestions.length > 0 || bundleSuggestions.length > 0) && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Optimization Suggestions</h3>
          <div className="space-y-3">
            {optimizationSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                  <div className="flex-1">
                    <div className={clsx('font-medium', getSuggestionColor(suggestion.type))}>
                      {suggestion.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {suggestion.description}
                    </div>
                    {suggestion.impact && (
                      <div className="text-xs text-gray-500 mt-1">
                        Impact: {suggestion.impact}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {bundleSuggestions.map((suggestion, index) => (
              <div key={`bundle-${index}`} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">📦</span>
                  <div className="flex-1">
                    <div className="font-medium text-blue-700 dark:text-blue-300">
                      {suggestion.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {suggestion.description}
                    </div>
                    {suggestion.potentialSavings && (
                      <div className="text-xs text-gray-500 mt-1">
                        Potential Savings: {suggestion.potentialSavings}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;