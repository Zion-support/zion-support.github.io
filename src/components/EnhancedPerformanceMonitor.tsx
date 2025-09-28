import React, { useEffect, useState, useCallback } from 'react';
import { clsx } from 'clsx';
import { performanceOptimizer, type PerformanceMetrics, type OptimizationSuggestion } from '../utils/performanceOptimizer';

interface EnhancedPerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
  showSuggestions?: boolean;
  autoOptimize?: boolean;
}

export const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  className,
  showDetails = false,
  showSuggestions = true,
  autoOptimize: _ = false // eslint-disable-line @typescript-eslint/no-unused-vars
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetrics = useCallback(() => {
    const newMetrics = performanceOptimizer.getMetrics();
    setMetrics(newMetrics);
    
    if (showSuggestions) {
      const newSuggestions = performanceOptimizer.getSuggestions();
      setSuggestions(newSuggestions);
    }
  }, [showSuggestions]);

  useEffect(() => {
    // Start monitoring
    performanceOptimizer.startMonitoring();
    setIsMonitoring(true);
    
    // Initial metrics collection
    updateMetrics();

    // Set up periodic updates
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      clearInterval(interval);
      performanceOptimizer.stopMonitoring();
      setIsMonitoring(false);
    };
  }, [updateMetrics]);

  // Keyboard shortcut to toggle visibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
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

  const handleOptimize = () => {
    // Clear suggestions and restart monitoring
    performanceOptimizer.clearSuggestions();
    setSuggestions([]);
    updateMetrics();
  };

  const handleExportReport = () => {
    const report = performanceOptimizer.generateReport();
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `performance-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isVisible && !showDetails) {
    return null;
  }

  return (
    <div className={clsx(
      'fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 z-50 min-w-[300px] max-w-[400px]',
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Enhanced Performance Monitor
        </h3>
        <div className="flex items-center gap-2">
          <div className={clsx(
            'w-2 h-2 rounded-full',
            isMonitoring ? 'bg-green-500' : 'bg-red-500'
          )} />
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="space-y-2 text-sm mb-4">
        <h4 className="font-medium text-gray-700 dark:text-gray-300">Core Web Vitals</h4>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={getMetricColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className={getMetricColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>

      {/* Additional Metrics */}
      {(metrics.memory || metrics.bundleSize || metrics.connection) && (
        <div className="space-y-2 text-sm mb-4">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Additional Metrics</h4>
          
          {metrics.memory && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Memory:</span>
              <span className={getMetricColor(metrics.memory, { good: 50, poor: 100 })}>
                {metrics.memory.toFixed(1)}MB
              </span>
            </div>
          )}

          {metrics.bundleSize && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Bundle Size:</span>
              <span className="text-gray-900 dark:text-white">
                {(metrics.bundleSize / 1024).toFixed(1)}KB
              </span>
            </div>
          )}

          {metrics.connection && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Connection:</span>
              <span className="text-blue-500 capitalize">
                {metrics.connection}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Optimization Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="space-y-2 text-sm mb-4">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Optimization Suggestions</h4>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {suggestions.slice(0, 3).map((suggestion, index) => (
              <div key={index} className="flex items-start gap-2 text-xs">
                <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                <div className="flex-1">
                  <p className={clsx('font-medium', getSuggestionColor(suggestion.type))}>
                    {suggestion.message}
                  </p>
                  {suggestion.action && (
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {suggestion.action}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {suggestions.length > 3 && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +{suggestions.length - 3} more suggestions
              </p>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 text-xs">
        <button
          onClick={handleOptimize}
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Optimize
        </button>
        <button
          onClick={handleExportReport}
          className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Export Report
        </button>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Press <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl+Shift+P</kbd> to toggle
        </p>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;