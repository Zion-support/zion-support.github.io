import React, { useState, useEffect } from 'react';

interface MemoryUsage {
  used: number;
  total: number;
  percentage: number;
}

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean;
  enableMonitoring?: boolean;
  enableResourceHints?: boolean;
  enablePreloading?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableServiceWorker = true,
  enableMonitoring = true,
  enableResourceHints = true,
  enablePreloading = true
}) => {
  const [memoryUsage, setMemoryUsage] = useState<MemoryUsage | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Simple performance monitoring
    if (enableMonitoring) {
      console.log("Performance monitoring enabled");
    }

    // Memory Usage Monitoring
    const updateMemoryUsage = () => {
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        setMemoryUsage({
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
        });
      }
    };

    updateMemoryUsage();
    const interval = setInterval(updateMemoryUsage, 5000);

    return () => clearInterval(interval);
  }, [enableServiceWorker, enableMonitoring, enableResourceHints, enablePreloading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Collect performance metrics
    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        timeToInteractive: navigation.domInteractive - navigation.navigationStart
      };

      setPerformanceMetrics(metrics);
    };

    // Wait for page load to collect metrics
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, []);

  const generateOptimizations = () => {
    const suggestions: string[] = [];

    if (performanceMetrics) {
      if (performanceMetrics.loadTime > 3000) {
        suggestions.push('Consider code splitting to reduce initial bundle size');
      }
      if (performanceMetrics.firstContentfulPaint > 1500) {
        suggestions.push('Optimize critical rendering path and preload key resources');
      }
      if (performanceMetrics.timeToInteractive > 4000) {
        suggestions.push('Reduce JavaScript execution time and defer non-critical scripts');
      }
    }

    if (memoryUsage && memoryUsage.percentage > 80) {
      suggestions.push('High memory usage detected - consider optimizing data structures');
    }

    // General optimizations
    suggestions.push('Enable gzip compression on your server');
    suggestions.push('Use WebP format for images where supported');
    suggestions.push('Implement lazy loading for images and components');
    suggestions.push('Minify CSS and JavaScript files');
    suggestions.push('Use a CDN for static assets');

    setOptimizations(suggestions);
  };

  useEffect(() => {
    generateOptimizations();
  }, [performanceMetrics, memoryUsage]);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    return ms.toFixed(2) + 'ms';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Performance Optimizer</h2>

      {/* Performance Metrics */}
      {performanceMetrics && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Load Time</p>
              <p className="text-2xl font-bold text-blue-600">{formatTime(performanceMetrics.loadTime)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">DOM Content Loaded</p>
              <p className="text-2xl font-bold text-green-600">{formatTime(performanceMetrics.domContentLoaded)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">First Paint</p>
              <p className="text-2xl font-bold text-purple-600">{formatTime(performanceMetrics.firstPaint)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">First Contentful Paint</p>
              <p className="text-2xl font-bold text-indigo-600">{formatTime(performanceMetrics.firstContentfulPaint)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Time to Interactive</p>
              <p className="text-2xl font-bold text-orange-600">{formatTime(performanceMetrics.timeToInteractive)}</p>
            </div>
          </div>
        </div>
      )}

      {/* Memory Usage */}
      {memoryUsage && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Memory Usage</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">JavaScript Heap</span>
              <span className="text-sm font-medium">{memoryUsage.percentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className={`h-2 rounded-full ${
                  memoryUsage.percentage > 80 ? 'bg-red-500' : 
                  memoryUsage.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${memoryUsage.percentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Used: {formatBytes(memoryUsage.used)}</span>
              <span>Total: {formatBytes(memoryUsage.total)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Optimization Suggestions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Optimization Suggestions</h3>
        <div className="space-y-3">
          {optimizations.map((optimization, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">{optimization}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Status */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-green-800 font-medium">Performance monitoring active</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;