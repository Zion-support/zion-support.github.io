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

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Web Vitals */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Core Web Vitals
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">LCP</span>
              <span className={getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}>
                {formatMetric(metrics.lcp)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">FID</span>
              <span className={getMetricColor(metrics.fid, { good: 100, poor: 300 })}>
                {formatMetric(metrics.fid)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">CLS</span>
              <span className={getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">FCP</span>
              <span className={getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}>
                {formatMetric(metrics.fcp)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">TTFB</span>
              <span className={getMetricColor(metrics.ttfb, { good: 800, poor: 1800 })}>
                {formatMetric(metrics.ttfb)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">FMP</span>
              <span className={getMetricColor(metrics.fmp, { good: 2000, poor: 3000 })}>
                {formatMetric(metrics.fmp)}
              </span>
            </div>
          </div>
        </div>

        {/* Resource Metrics */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Resources
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Resources</span>
              <span className="text-sm text-gray-900 dark:text-white">
                {metrics.resourceCount}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Size</span>
              <span className="text-sm text-gray-900 dark:text-white">
                {(metrics.resourceSize / 1024).toFixed(1)} KB
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">DOM Nodes</span>
              <span className="text-sm text-gray-900 dark:text-white">
                {metrics.domNodes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Score */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Performance Score
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based on Core Web Vitals and performance metrics
            </p>
          </div>
          <div className="text-right">
            <div className={clsx('text-4xl font-bold', getMetricColor(performanceScore, { good: 90, poor: 70 }))}>
              {performanceScore}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              out of 100
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Optimization Suggestions
          </h3>
          <div className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                  <div className="flex-1">
                    <h4 className={clsx('font-medium', getSuggestionColor(suggestion.type))}>
                      {suggestion.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {suggestion.description}
                    </p>
                    {suggestion.potentialSavings && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        Potential savings: {suggestion.potentialSavings}
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
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bundleAnalysis.totalChunks}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Chunks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {(bundleAnalysis.totalSize / 1024).toFixed(1)} KB
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bundleAnalysis.averageChunkSize.toFixed(1)} KB
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Chunk Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {(bundleAnalysis.largestChunkSize / 1024).toFixed(1)} KB
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Largest Chunk</div>
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

export default PerformanceDashboard;
