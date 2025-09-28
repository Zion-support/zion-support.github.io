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
  const [performanceSuggestions, setPerformanceSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [bundleSuggestions, setBundleSuggestions] = useState<BundleOptimizationSuggestion[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const updateMetrics = useCallback(async () => {
    // Update performance metrics
    const newMetrics = performanceOptimizer.getMetrics();
    setMetrics(newMetrics);
    
    if (showOptimizationSuggestions) {
      const newSuggestions = performanceOptimizer.getSuggestions();
      setPerformanceSuggestions(newSuggestions);
    }

    // Update bundle analysis
    if (showBundleAnalysis) {
      setIsAnalyzing(true);
      try {
        const analysis = await bundleOptimizer.analyzeBundle();
        setBundleAnalysis(analysis);
        setBundleSuggestions(analysis.optimizationSuggestions);
      } catch (error) {
        console.error('Bundle analysis failed:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }
  }, [showBundleAnalysis, showOptimizationSuggestions]);

  useEffect(() => {
    // Start monitoring
    performanceOptimizer.startMonitoring();
    
    // Initial update
    updateMetrics();

    // Set up periodic updates
    let interval: NodeJS.Timeout | null = null;
    if (autoRefresh) {
      interval = setInterval(updateMetrics, refreshInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
      performanceOptimizer.stopMonitoring();
    };
  }, [updateMetrics, autoRefresh, refreshInterval]);

  // Keyboard shortcut to toggle visibility
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


  if (!isVisible) {
    return null;
  }

  return (
    <div className={clsx(
      'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4',
      className
    )}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Performance Dashboard
          </h2>
          <div className="flex items-center gap-2">
            {isAnalyzing && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full" />
                Analyzing...
              </div>
            )}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Metrics */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Core Web Vitals</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">First Contentful Paint</div>
                  <div className={clsx('text-lg font-semibold', getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }))}>
                    {metrics.fcp.toFixed(0)}ms
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Largest Contentful Paint</div>
                  <div className={clsx('text-lg font-semibold', getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }))}>
                    {metrics.lcp.toFixed(0)}ms
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">First Input Delay</div>
                  <div className={clsx('text-lg font-semibold', getMetricColor(metrics.fid, { good: 100, poor: 300 }))}>
                    {metrics.fid.toFixed(0)}ms
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cumulative Layout Shift</div>
                  <div className={clsx('text-lg font-semibold', getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }))}>
                    {metrics.cls.toFixed(3)}
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              {(metrics.memory || metrics.bundleSize || metrics.connection) && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Additional Metrics</h4>
                  
                  {metrics.memory && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Memory Usage:</span>
                      <span className={getMetricColor(metrics.memory, { good: 50, poor: 100 })}>
                        {metrics.memory.toFixed(1)}MB
                      </span>
                    </div>
                  )}

                  {metrics.bundleSize && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Bundle Size:</span>
                      <span className="text-gray-900 dark:text-white">
                        {(metrics.bundleSize / 1024).toFixed(1)}KB
                      </span>
                    </div>
                  )}

                  {metrics.connection && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Connection:</span>
                      <span className="text-blue-500 capitalize">
                        {metrics.connection}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bundle Analysis */}
            {showBundleAnalysis && bundleAnalysis && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bundle Analysis</h3>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Total Size</div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {(bundleAnalysis.totalSize / 1024).toFixed(1)}KB
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Gzipped Size</div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {(bundleAnalysis.gzipSize / 1024).toFixed(1)}KB
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Compression Ratio: {((bundleAnalysis.gzipSize / bundleAnalysis.totalSize) * 100).toFixed(1)}%
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Chunks</h4>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {bundleAnalysis.chunks.map((chunk, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{chunk.name}</span>
                        <span className="text-gray-900 dark:text-white">
                          {(chunk.size / 1024).toFixed(1)}KB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Optimization Suggestions */}
          {showOptimizationSuggestions && (performanceSuggestions.length > 0 || bundleSuggestions.length > 0) && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Optimization Suggestions</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Performance Suggestions */}
                {performanceSuggestions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Performance</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {performanceSuggestions.slice(0, 5).map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                          <div className="flex-1">
                            <p className={clsx('font-medium', getSuggestionColor(suggestion.type))}>
                              {suggestion.message}
                            </p>
                            {suggestion.action && (
                              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                                {suggestion.action}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bundle Suggestions */}
                {bundleSuggestions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Bundle</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {bundleSuggestions.slice(0, 5).map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                          <div className="flex-1">
                            <p className={clsx('font-medium', getSuggestionColor(suggestion.type))}>
                              {suggestion.message}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                              {suggestion.action}
                            </p>
                            {suggestion.estimatedSavings && (
                              <p className="text-green-500 text-xs mt-1">
                                Estimated savings: {(suggestion.estimatedSavings / 1024).toFixed(1)}KB
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
