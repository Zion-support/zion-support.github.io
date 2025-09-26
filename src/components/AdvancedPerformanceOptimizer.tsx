import React, { useState, useEffect, useCallback } from 'react';
import { Zap, Clock, Cpu, HardDrive, Wifi, Battery, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  cacheHitRate: number;
  bundleSize: number;
}

interface PerformanceOptimizerProps {
  className?: string;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    cacheHitRate: 0,
    bundleSize: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  const measurePerformance = useCallback(async () => {
    // Simulate performance measurement
    const newMetrics: PerformanceMetrics = {
      loadTime: Math.random() * 2000 + 500, // 500-2500ms
      memoryUsage: Math.random() * 100, // 0-100%
      cpuUsage: Math.random() * 100, // 0-100%
      networkLatency: Math.random() * 100 + 10, // 10-110ms
      cacheHitRate: Math.random() * 40 + 60, // 60-100%
      bundleSize: Math.random() * 500 + 200 // 200-700KB
    };

    setMetrics(newMetrics);

    // Generate optimization suggestions
    const suggestions: string[] = [];
    if (newMetrics.loadTime > 2000) suggestions.push('Consider code splitting to reduce initial load time');
    if (newMetrics.memoryUsage > 80) suggestions.push('Optimize memory usage with lazy loading');
    if (newMetrics.cpuUsage > 70) suggestions.push('Implement virtual scrolling for large lists');
    if (newMetrics.networkLatency > 80) suggestions.push('Enable CDN for static assets');
    if (newMetrics.cacheHitRate < 80) suggestions.push('Improve caching strategy');
    if (newMetrics.bundleSize > 500) suggestions.push('Remove unused dependencies and optimize bundle');

    setOptimizations(suggestions);
  }, []);

  const performOptimization = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Apply optimizations
    setMetrics(prev => ({
      ...prev,
      loadTime: prev.loadTime * 0.8,
      memoryUsage: prev.memoryUsage * 0.7,
      cpuUsage: prev.cpuUsage * 0.6,
      networkLatency: prev.networkLatency * 0.9,
      cacheHitRate: Math.min(prev.cacheHitRate * 1.1, 100),
      bundleSize: prev.bundleSize * 0.85
    }));

    setOptimizations([]);
    setIsOptimizing(false);
  }, []);

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.warning) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (value <= thresholds.warning) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <XCircle className="w-5 h-5 text-red-500" />;
  };

  useEffect(() => {
    measurePerformance();
    const interval = setInterval(measurePerformance, 10000); // Measure every 10 seconds
    return () => clearInterval(interval);
  }, [measurePerformance]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Zap className="w-8 h-8 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Performance Optimizer
          </h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={measurePerformance}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Measure
          </button>
          <button
            onClick={performOptimization}
            disabled={isOptimizing || optimizations.length === 0}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50 transition-colors"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Load Time</p>
              <p className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>
                {metrics.loadTime.toFixed(0)}ms
              </p>
            </div>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Memory Usage</p>
              <p className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 50, warning: 80 })}`}>
                {metrics.memoryUsage.toFixed(1)}%
              </p>
            </div>
            <HardDrive className="w-5 h-5 text-green-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">CPU Usage</p>
              <p className={`text-2xl font-bold ${getPerformanceColor(metrics.cpuUsage, { good: 30, warning: 70 })}`}>
                {metrics.cpuUsage.toFixed(1)}%
              </p>
            </div>
            <Cpu className="w-5 h-5 text-purple-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Network Latency</p>
              <p className={`text-2xl font-bold ${getPerformanceColor(metrics.networkLatency, { good: 50, warning: 80 })}`}>
                {metrics.networkLatency.toFixed(0)}ms
              </p>
            </div>
            <Wifi className="w-5 h-5 text-indigo-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cache Hit Rate</p>
              <p className={`text-2xl font-bold ${getPerformanceColor(100 - metrics.cacheHitRate, { good: 20, warning: 40 })}`}>
                {metrics.cacheHitRate.toFixed(1)}%
              </p>
            </div>
            <Battery className="w-5 h-5 text-orange-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</p>
              <p className={`text-2xl font-bold ${getPerformanceColor(metrics.bundleSize, { good: 300, warning: 500 })}`}>
                {(metrics.bundleSize / 1024).toFixed(1)}KB
              </p>
            </div>
            <Zap className="w-5 h-5 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      {optimizations.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Optimization Suggestions
          </h3>
          <div className="space-y-2">
            {optimizations.map((suggestion, index) => (
              <div
                key={index}
                className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 flex items-center space-x-3"
              >
                <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-yellow-700 dark:text-yellow-300">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Code Splitting
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Implement dynamic imports to reduce initial bundle size and improve load times.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            Caching Strategy
          </h4>
          <p className="text-sm text-green-700 dark:text-green-300">
            Use service workers and HTTP caching to improve repeat visit performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;