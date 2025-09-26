import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  errorRate: number;
}

interface PerformanceOptimizerProps {
  className?: string;
  onOptimize?: (metrics: PerformanceMetrics) => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  className = "",
  onOptimize
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
    errorRate: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<PerformanceMetrics[]>([]);

  // Simulate performance monitoring
  const measurePerformance = useCallback(() => {
    const startTime = performance.now();
    
    // Simulate various performance metrics
    const loadTime = Math.random() * 2000 + 500; // 500-2500ms
    const renderTime = Math.random() * 100 + 50; // 50-150ms
    const memoryUsage = Math.random() * 50 + 10; // 10-60MB
    const bundleSize = Math.random() * 500 + 200; // 200-700KB
    const cacheHitRate = Math.random() * 30 + 70; // 70-100%
    const errorRate = Math.random() * 5; // 0-5%

    const newMetrics: PerformanceMetrics = {
      loadTime,
      renderTime,
      memoryUsage,
      bundleSize,
      cacheHitRate,
      errorRate
    };

    setMetrics(newMetrics);
    setOptimizationHistory(prev => [...prev.slice(-9), newMetrics]);
    
    return newMetrics;
  }, []);

  // Auto-measure performance on mount and periodically
  useEffect(() => {
    measurePerformance();
    
    const interval = setInterval(measurePerformance, 10000); // Every 10 seconds
    return () => clearInterval(interval);
  }, [measurePerformance]);

  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate improved metrics after optimization
    const optimizedMetrics: PerformanceMetrics = {
      loadTime: metrics.loadTime * 0.7, // 30% improvement
      renderTime: metrics.renderTime * 0.8, // 20% improvement
      memoryUsage: metrics.memoryUsage * 0.9, // 10% improvement
      bundleSize: metrics.bundleSize * 0.85, // 15% improvement
      cacheHitRate: Math.min(metrics.cacheHitRate * 1.1, 100), // 10% improvement
      errorRate: metrics.errorRate * 0.5 // 50% improvement
    };

    setMetrics(optimizedMetrics);
    setOptimizationHistory(prev => [...prev.slice(-9), optimizedMetrics]);
    
    if (onOptimize) {
      onOptimize(optimizedMetrics);
    }
    
    setIsOptimizing(false);
  }, [metrics, onOptimize]);

  const getPerformanceScore = useMemo(() => {
    const score = Math.round(
      (100 - (metrics.loadTime / 25)) * 0.3 + // Load time weight
      (100 - (metrics.renderTime / 1.5)) * 0.2 + // Render time weight
      (100 - (metrics.memoryUsage / 0.6)) * 0.15 + // Memory weight
      (100 - (metrics.bundleSize / 7)) * 0.15 + // Bundle size weight
      metrics.cacheHitRate * 0.1 + // Cache hit rate weight
      (100 - metrics.errorRate * 20) * 0.1 // Error rate weight
    );
    return Math.max(0, Math.min(100, score));
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const formatMetric = (value: number, unit: string) => {
    return `${value.toFixed(1)}${unit}`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Performance Optimizer</h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(getPerformanceScore)}`}>
            Score: {getPerformanceScore}/100
          </div>
          <button
            onClick={optimizePerformance}
            disabled={isOptimizing}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
          >
            {isOptimizing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Optimizing...</span>
              </>
            ) : (
              <>
                <span>⚡</span>
                <span>Optimize</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Current Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">⏱️</span>
            <span className="text-sm text-gray-600">Load Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatMetric(metrics.loadTime, 'ms')}
          </p>
          <p className="text-sm text-gray-600">
            {metrics.loadTime < 1000 ? 'Excellent' : metrics.loadTime < 2000 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🎨</span>
            <span className="text-sm text-gray-600">Render Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatMetric(metrics.renderTime, 'ms')}
          </p>
          <p className="text-sm text-gray-600">
            {metrics.renderTime < 100 ? 'Excellent' : metrics.renderTime < 200 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">💾</span>
            <span className="text-sm text-gray-600">Memory Usage</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatMetric(metrics.memoryUsage, 'MB')}
          </p>
          <p className="text-sm text-gray-600">
            {metrics.memoryUsage < 30 ? 'Excellent' : metrics.memoryUsage < 50 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">📦</span>
            <span className="text-sm text-gray-600">Bundle Size</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatMetric(metrics.bundleSize, 'KB')}
          </p>
          <p className="text-sm text-gray-600">
            {metrics.bundleSize < 300 ? 'Excellent' : metrics.bundleSize < 500 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🎯</span>
            <span className="text-sm text-gray-600">Cache Hit Rate</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatMetric(metrics.cacheHitRate, '%')}
          </p>
          <p className="text-sm text-gray-600">
            {metrics.cacheHitRate > 90 ? 'Excellent' : metrics.cacheHitRate > 80 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border border-red-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🚨</span>
            <span className="text-sm text-gray-600">Error Rate</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatMetric(metrics.errorRate, '%')}
          </p>
          <p className="text-sm text-gray-600">
            {metrics.errorRate < 1 ? 'Excellent' : metrics.errorRate < 3 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>
      </div>

      {/* Performance History Chart */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-end space-x-2 h-32">
            {optimizationHistory.map((metric, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-500 rounded-t"
                  style={{ height: `${(metric.loadTime / 3000) * 100}%` }}
                  title={`Load Time: ${metric.loadTime.toFixed(0)}ms`}
                />
                <div className="text-xs text-gray-500 mt-1">{index + 1}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Older</span>
            <span>Recent</span>
          </div>
        </div>
      </div>

      {/* Optimization Recommendations */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Optimization Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.loadTime > 1500 && (
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <span className="text-yellow-600">⚠️</span>
              <div>
                <p className="font-medium text-yellow-800">Optimize Load Time</p>
                <p className="text-sm text-yellow-700">Consider code splitting and lazy loading</p>
              </div>
            </div>
          )}
          
          {metrics.memoryUsage > 40 && (
            <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <span className="text-orange-600">🔧</span>
              <div>
                <p className="font-medium text-orange-800">Reduce Memory Usage</p>
                <p className="text-sm text-orange-700">Implement proper cleanup and memoization</p>
              </div>
            </div>
          )}
          
          {metrics.bundleSize > 400 && (
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-blue-600">📦</span>
              <div>
                <p className="font-medium text-blue-800">Optimize Bundle Size</p>
                <p className="text-sm text-blue-700">Remove unused dependencies and optimize imports</p>
              </div>
            </div>
          )}
          
          {metrics.cacheHitRate < 85 && (
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-600">🎯</span>
              <div>
                <p className="font-medium text-green-800">Improve Caching</p>
                <p className="text-sm text-green-700">Implement better cache strategies</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;