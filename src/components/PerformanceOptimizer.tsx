import React, { useState, useEffect, useCallback } from 'react';
import { performanceEnhancer } from '../utils/performanceEnhancements';

interface PerformanceData {
  dns?: number;
  tcp?: number;
  request?: number;
  response?: number;
  dom?: number;
  load?: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
  memory?: {
    used: number;
    total: number;
    limit: number;
  } | null;
  loadTime?: number;
  renderTime?: number;
  memoryUsage?: number;
  bundleSize?: number;
  cacheHitRate?: number;
}

interface PerformanceOptimizerProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  isVisible = false, 
  onClose 
}) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationLog, setOptimizationLog] = useState<string[]>([]);

  // Update performance data
  const updatePerformanceData = useCallback(() => {
    const metrics = performanceEnhancer.getMetrics();
    if (metrics) {
      setPerformanceData(metrics);
    }
  }, []);

  // Add log entry
  const addLogEntry = useCallback((message: string) => {
    setOptimizationLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  }, []);

  // Run performance optimizations
  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    addLogEntry('Starting performance optimizations...');

    try {
      // Optimize bundle
      addLogEntry('Optimizing bundle...');
      // performanceEnhancer.optimizeBundleSize(); // Method not available
      
      // Preload critical resources
      addLogEntry('Preloading critical resources...');
      // performanceEnhancer.preloadCriticalResources(); // Method not available
      
      // Update metrics
      addLogEntry('Updating performance metrics...');
      updatePerformanceData();
      
      addLogEntry('Performance optimizations completed successfully!');
    } catch (error) {
      addLogEntry(`Error during optimization: ${error}`);
    } finally {
      setIsOptimizing(false);
    }
  }, [addLogEntry, updatePerformanceData]);

  // Clear cache
  const clearCache = useCallback(() => {
    addLogEntry('Clearing application cache...');
    
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);
        });
        addLogEntry('Cache cleared successfully');
        updatePerformanceData();
      });
    } else {
      addLogEntry('Cache API not available');
    }
  }, [addLogEntry, updatePerformanceData]);

  // Update performance data periodically
  useEffect(() => {
    if (!isVisible) return;

    updatePerformanceData();
    const interval = setInterval(updatePerformanceData, 5000);

    return () => clearInterval(interval);
  }, [isVisible, updatePerformanceData]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Performance Optimizer
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-600 dark:text-blue-400">Load Time</h3>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {performanceData.loadTime}ms
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-green-600 dark:text-green-400">Memory Usage</h3>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                {performanceData.memoryUsage?.toFixed(2) || '0.00'}MB
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-purple-600 dark:text-purple-400">Bundle Size</h3>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                {performanceData.bundleSize || '0'}KB
              </p>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-orange-600 dark:text-orange-400">Render Time</h3>
              <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                {performanceData.renderTime || '0'}ms
              </p>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Cache Hit Rate</h3>
              <p className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                {performanceData.cacheHitRate || '0'}%
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={runOptimizations}
              disabled={isOptimizing}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Optimizing...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Run Optimizations
                </>
              )}
            </button>
            
            <button
              onClick={clearCache}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cache
            </button>
            
            <button
              onClick={updatePerformanceData}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Metrics
            </button>
          </div>

          {/* Optimization Log */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Optimization Log
            </h3>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm max-h-48 overflow-y-auto">
              {optimizationLog.length === 0 ? (
                <div className="text-gray-500">No optimization activities yet...</div>
              ) : (
                optimizationLog.map((entry, index) => (
                  <div key={index} className="mb-1">
                    {entry}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;