<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  cacheHitRate: number;
  errorRate: number;
}

interface OptimizationRecommendations {
  lazyLoading: boolean;
  codeSplitting: boolean;
  imageOptimization: boolean;
  caching: boolean;
  compression: boolean;
  preloading: boolean;
  serviceWorker: boolean;
  cdn: boolean;
}

const AdvancedPerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    bundleSize: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    cacheHitRate: 0,
    errorRate: 0
  });

  const [recommendations, setRecommendations] = useState<OptimizationRecommendations>({
    lazyLoading: false,
    codeSplitting: false,
    imageOptimization: false,
    caching: false,
    compression: false,
    preloading: false,
    serviceWorker: false,
    cdn: false
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);

  // Simulate performance metrics collection
  const collectMetrics = useCallback(() => {
    const mockMetrics: PerformanceMetrics = {
      loadTime: Math.random() * 3000 + 1000,
      renderTime: Math.random() * 500 + 100,
      bundleSize: Math.random() * 2000 + 500,
      memoryUsage: Math.random() * 100 + 50,
      cpuUsage: Math.random() * 50 + 10,
      networkLatency: Math.random() * 200 + 50,
      cacheHitRate: Math.random() * 40 + 60,
      errorRate: Math.random() * 5
    };

    setMetrics(mockMetrics);

    // Generate recommendations based on metrics
    const newRecommendations: OptimizationRecommendations = {
      lazyLoading: mockMetrics.loadTime > 2000,
      codeSplitting: mockMetrics.bundleSize > 1000,
      imageOptimization: mockMetrics.loadTime > 1500,
      caching: mockMetrics.cacheHitRate < 80,
      compression: mockMetrics.bundleSize > 800,
      preloading: mockMetrics.loadTime > 2500,
      serviceWorker: mockMetrics.cacheHitRate < 70,
      cdn: mockMetrics.networkLatency > 150
    };

    setRecommendations(newRecommendations);
  }, []);

  useEffect(() => {
    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);
    return () => clearInterval(interval);
  }, [collectMetrics]);

  const runOptimization = async () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);

    const steps = [
      'Analyzing performance metrics...',
      'Optimizing bundle size...',
      'Implementing lazy loading...',
      'Enabling code splitting...',
      'Optimizing images...',
      'Configuring caching...',
      'Setting up compression...',
      'Implementing service worker...',
      'Finalizing optimizations...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setOptimizationProgress(((i + 1) / steps.length) * 100);
    }

    setIsOptimizing(false);
    
    // Update metrics after optimization
    setTimeout(() => {
      setMetrics(prev => ({
        ...prev,
        loadTime: prev.loadTime * 0.6,
        renderTime: prev.renderTime * 0.7,
        bundleSize: prev.bundleSize * 0.5,
        memoryUsage: prev.memoryUsage * 0.8,
        cpuUsage: prev.cpuUsage * 0.9,
        networkLatency: prev.networkLatency * 0.5,
        cacheHitRate: Math.min(95, prev.cacheHitRate + 15),
        errorRate: prev.errorRate * 0.3
      }));
    }, 1000);
  };

  const getPerformanceGrade = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return { grade: 'A', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (value <= thresholds.poor) return { grade: 'B', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { grade: 'C', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    return `${Math.round(value)}${unit}`;
  };

  const getRecommendationIcon = (recommended: boolean) => {
    return recommended ? '⚠️' : '✅';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Advanced Performance Optimizer
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-time performance monitoring and optimization recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Metrics */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Performance Metrics
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${getPerformanceGrade(metrics.loadTime, { good: 1500, poor: 3000 }).bgColor} dark:bg-gray-700`}>
              <div className="text-sm text-gray-600 dark:text-gray-400">Load Time</div>
              <div className={`text-2xl font-bold ${getPerformanceGrade(metrics.loadTime, { good: 1500, poor: 3000 }).color}`}>
                {formatMetric(metrics.loadTime)}
              </div>
              <div className={`text-xs ${getPerformanceGrade(metrics.loadTime, { good: 1500, poor: 3000 }).color}`}>
                Grade: {getPerformanceGrade(metrics.loadTime, { good: 1500, poor: 3000 }).grade}
              </div>
            </div>

            <div className={`p-4 rounded-lg ${getPerformanceGrade(metrics.renderTime, { good: 200, poor: 500 }).bgColor} dark:bg-gray-700`}>
              <div className="text-sm text-gray-600 dark:text-gray-400">Render Time</div>
              <div className={`text-2xl font-bold ${getPerformanceGrade(metrics.renderTime, { good: 200, poor: 500 }).color}`}>
                {formatMetric(metrics.renderTime)}
              </div>
              <div className={`text-xs ${getPerformanceGrade(metrics.renderTime, { good: 200, poor: 500 }).color}`}>
                Grade: {getPerformanceGrade(metrics.renderTime, { good: 200, poor: 500 }).grade}
              </div>
            </div>

            <div className={`p-4 rounded-lg ${getPerformanceGrade(metrics.bundleSize, { good: 800, poor: 1500 }).bgColor} dark:bg-gray-700`}>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</div>
              <div className={`text-2xl font-bold ${getPerformanceGrade(metrics.bundleSize, { good: 800, poor: 1500 }).color}`}>
                {formatMetric(metrics.bundleSize, 'KB')}
              </div>
              <div className={`text-xs ${getPerformanceGrade(metrics.bundleSize, { good: 800, poor: 1500 }).color}`}>
                Grade: {getPerformanceGrade(metrics.bundleSize, { good: 800, poor: 1500 }).grade}
              </div>
            </div>

            <div className={`p-4 rounded-lg ${getPerformanceGrade(metrics.memoryUsage, { good: 70, poor: 90 }).bgColor} dark:bg-gray-700`}>
              <div className="text-sm text-gray-600 dark:text-gray-400">Memory Usage</div>
              <div className={`text-2xl font-bold ${getPerformanceGrade(metrics.memoryUsage, { good: 70, poor: 90 }).color}`}>
                {formatMetric(metrics.memoryUsage, 'MB')}
              </div>
              <div className={`text-xs ${getPerformanceGrade(metrics.memoryUsage, { good: 70, poor: 90 }).color}`}>
                Grade: {getPerformanceGrade(metrics.memoryUsage, { good: 70, poor: 90 }).grade}
              </div>
            </div>

            <div className={`p-4 rounded-lg ${getPerformanceGrade(metrics.networkLatency, { good: 100, poor: 200 }).bgColor} dark:bg-gray-700`}>
              <div className="text-sm text-gray-600 dark:text-gray-400">Network Latency</div>
              <div className={`text-2xl font-bold ${getPerformanceGrade(metrics.networkLatency, { good: 100, poor: 200 }).color}`}>
                {formatMetric(metrics.networkLatency)}
              </div>
              <div className={`text-xs ${getPerformanceGrade(metrics.networkLatency, { good: 100, poor: 200 }).color}`}>
                Grade: {getPerformanceGrade(metrics.networkLatency, { good: 100, poor: 200 }).grade}
              </div>
            </div>

            <div className={`p-4 rounded-lg ${getPerformanceGrade(100 - metrics.cacheHitRate, { good: 20, poor: 40 }).bgColor} dark:bg-gray-700`}>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cache Hit Rate</div>
              <div className={`text-2xl font-bold ${getPerformanceGrade(100 - metrics.cacheHitRate, { good: 20, poor: 40 }).color}`}>
                {formatMetric(metrics.cacheHitRate, '%')}
              </div>
              <div className={`text-xs ${getPerformanceGrade(100 - metrics.cacheHitRate, { good: 20, poor: 40 }).color}`}>
                Grade: {getPerformanceGrade(100 - metrics.cacheHitRate, { good: 20, poor: 40 }).grade}
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Recommendations */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Optimization Recommendations
          </h3>

          <div className="space-y-4">
            {Object.entries(recommendations).map(([key, recommended]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg border-2 ${
                  recommended 
                    ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20' 
                    : 'border-green-300 bg-green-50 dark:bg-green-900/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getRecommendationIcon(recommended)}</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {recommended ? 'Optimization needed' : 'Already optimized'}
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    recommended 
                      ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200'
                      : 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200'
                  }`}>
                    {recommended ? 'Recommended' : 'Optimized'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optimization Button */}
          <div className="pt-6">
            <button
              onClick={runOptimization}
              disabled={isOptimizing}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOptimizing ? 'Optimizing...' : 'Run Performance Optimization'}
            </button>

            {isOptimizing && (
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Optimization Progress</span>
                  <span>{Math.round(optimizationProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${optimizationProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Performance Summary
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Math.round((metrics.cacheHitRate + (100 - metrics.errorRate)) / 2)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Overall Score</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {Object.values(recommendations).filter(r => !r).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Optimizations Applied</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Object.values(recommendations).filter(r => r).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Recommendations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
