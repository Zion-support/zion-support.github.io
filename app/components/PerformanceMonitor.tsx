import React, { useEffect, useState } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';

interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableConsoleLogging?: boolean;
  enableVisualIndicator?: boolean;
  updateInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableConsoleLogging = false,
  enableVisualIndicator = false,
  updateInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
  });

  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const updateMetrics = () => {
      const currentMetrics = performanceOptimizer.getMetrics();
      const score = performanceOptimizer.getPerformanceScore();
      
      setMetrics(currentMetrics);
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        console.log('Performance Metrics:', currentMetrics);
        console.log('Performance Score:', score);
      }
    };

    // Initial update
    updateMetrics();

    // Set up interval for real-time monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    // Set up performance observer for more detailed monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            updateMetrics();
          }
        });
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    }

    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, enableConsoleLogging, updateInterval]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number): string => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  if (!enableVisualIndicator) {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle Performance Monitor"
        title="Performance Monitor"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </button>

      {/* Performance Monitor Panel */}
      {isVisible && (
        <div className="fixed bottom-20 left-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close Performance Monitor"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Performance Score */}
          <div className={`p-3 rounded-lg mb-4 ${getScoreBackground(performanceScore)}`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Performance Score</span>
              <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  performanceScore >= 90 ? 'bg-green-500' : 
                  performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${performanceScore}%` }}
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Time</span>
              <span className="text-sm font-medium">
                {formatTime(metrics.loadTime)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Render Time</span>
              <span className="text-sm font-medium">
                {formatTime(metrics.renderTime)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Memory Usage</span>
              <span className="text-sm font-medium">
                {formatBytes(metrics.memoryUsage)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bundle Size</span>
              <span className="text-sm font-medium">
                {formatBytes(metrics.bundleSize)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Cache Hit Rate</span>
              <span className="text-sm font-medium">
                {metrics.cacheHitRate.toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => performanceOptimizer.optimize()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Optimize Performance
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;