import React, { useState, useEffect, useCallback } from 'react';
import { EnhancedServiceWorkerManager } from '../utils/enhancedServiceWorker';

/**
 * Performance Optimization Panel
 * Advanced performance monitoring and optimization tools
 */
export const PerformanceOptimizationPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    totalBlockingTime: 0
  });

  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);
  const [serviceWorkerStatus, setServiceWorkerStatus] = useState<'not-supported' | 'not-registered' | 'registered' | 'updating'>('not-supported');
  const [cacheStatus, setCacheStatus] = useState<Record<string, number>>({});

  const swManager = new EnhancedServiceWorkerManager();

  /**
   * Collect performance metrics
   */
  const collectPerformanceMetrics = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    // Core Web Vitals
    const fcpEntries = performance.getEntriesByName('first-contentful-paint');
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    const clsEntries = performance.getEntriesByType('layout-shift');
    
    // Calculate metrics
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    const firstContentfulPaint = fcpEntries.length > 0 ? fcpEntries[0].startTime : 0;
    const largestContentfulPaint = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : 0;
    
    let cumulativeLayoutShift = 0;
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        cumulativeLayoutShift += entry.value;
      }
    });

    // First Input Delay (approximation)
    const fidEntries = performance.getEntriesByType('first-input');
    const firstInputDelay = fidEntries.length > 0 ? (fidEntries[0] as any).processingStart - fidEntries[0].startTime : 0;

    // Total Blocking Time (approximation)
    const longTasks = performance.getEntriesByType('longtask');
    const totalBlockingTime = longTasks.reduce((total, task) => total + (task.duration - 50), 0);

    setPerformanceMetrics({
      loadTime,
      domContentLoaded,
      firstContentfulPaint,
      largestContentfulPaint,
      cumulativeLayoutShift,
      firstInputDelay,
      totalBlockingTime
    });
  }, []);

  /**
   * Generate optimization suggestions
   */
  const generateOptimizationSuggestions = useCallback(() => {
    const suggestions: string[] = [];

    if (performanceMetrics.loadTime > 3000) {
      suggestions.push('Consider optimizing bundle size and enabling compression');
    }

    if (performanceMetrics.firstContentfulPaint > 1800) {
      suggestions.push('Optimize critical rendering path and preload key resources');
    }

    if (performanceMetrics.largestContentfulPaint > 2500) {
      suggestions.push('Optimize images and implement lazy loading');
    }

    if (performanceMetrics.cumulativeLayoutShift > 0.1) {
      suggestions.push('Add explicit dimensions to images and avoid dynamic content insertion');
    }

    if (performanceMetrics.firstInputDelay > 100) {
      suggestions.push('Reduce JavaScript execution time and split long tasks');
    }

    if (performanceMetrics.totalBlockingTime > 300) {
      suggestions.push('Optimize JavaScript bundles and reduce main thread blocking');
    }

    if (suggestions.length === 0) {
      suggestions.push('Performance is excellent! Keep up the good work.');
    }

    setOptimizationSuggestions(suggestions);
  }, [performanceMetrics]);

  /**
   * Check service worker status
   */
  const checkServiceWorkerStatus = useCallback(async () => {
    if (!('serviceWorker' in navigator)) {
      setServiceWorkerStatus('not-supported');
      return;
    }

    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        setServiceWorkerStatus('registered');
      } else {
        setServiceWorkerStatus('not-registered');
      }
    } catch (error) {
      console.error('Error checking service worker status:', error);
      setServiceWorkerStatus('not-supported');
    }
  }, []);

  /**
   * Get cache status
   */
  const getCacheStatus = useCallback(async () => {
    try {
      const status = await swManager.getCacheStatus();
      setCacheStatus(status);
    } catch (error) {
      console.error('Error getting cache status:', error);
    }
  }, [swManager]);

  /**
   * Register service worker
   */
  const registerServiceWorker = useCallback(async () => {
    setServiceWorkerStatus('updating');
    try {
      const success = await swManager.register();
      if (success) {
        setServiceWorkerStatus('registered');
      } else {
        setServiceWorkerStatus('not-registered');
      }
    } catch (error) {
      console.error('Error registering service worker:', error);
      setServiceWorkerStatus('not-registered');
    }
  }, [swManager]);

  /**
   * Clear all caches
   */
  const clearAllCaches = useCallback(async () => {
    try {
      await swManager.clearAllCaches();
      await getCacheStatus();
    } catch (error) {
      console.error('Error clearing caches:', error);
    }
  }, [swManager, getCacheStatus]);

  /**
   * Preload critical resources
   */
  const preloadCriticalResources = useCallback(async () => {
    const criticalResources = [
      '/',
      '/assets/css/main.css',
      '/assets/js/main.js'
    ];

    try {
      await swManager.preloadCriticalResources(criticalResources);
      await getCacheStatus();
    } catch (error) {
      console.error('Error preloading resources:', error);
    }
  }, [swManager, getCacheStatus]);

  // Initialize
  useEffect(() => {
    collectPerformanceMetrics();
    checkServiceWorkerStatus();
    getCacheStatus();
  }, [collectPerformanceMetrics, checkServiceWorkerStatus, getCacheStatus]);

  // Generate suggestions when metrics change
  useEffect(() => {
    generateOptimizationSuggestions();
  }, [generateOptimizationSuggestions]);

  const getMetricStatus = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return { status: 'good', color: 'text-green-600' };
    if (value <= thresholds.needsImprovement) return { status: 'needs-improvement', color: 'text-yellow-600' };
    return { status: 'poor', color: 'text-red-600' };
  };

  const getMetricIcon = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return '✅';
    if (value <= thresholds.needsImprovement) return '⚠️';
    return '❌';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-20 right-4 z-40 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
        title="Open Performance Optimization Panel"
        aria-label="Open Performance Optimization Panel"
      >
        ⚡
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white rounded-lg shadow-xl border border-gray-200 w-96 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Performance Optimization</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
          aria-label="Close Performance Optimization Panel"
        >
          ✕
        </button>
      </div>

      <div className="p-4 space-y-4">
        {/* Performance Metrics */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Core Web Vitals</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span>Load Time</span>
              <span className={`flex items-center ${getMetricStatus(performanceMetrics.loadTime, { good: 1500, needsImprovement: 3000 }).color}`}>
                {getMetricIcon(performanceMetrics.loadTime, { good: 1500, needsImprovement: 3000 })}
                {performanceMetrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>FCP</span>
              <span className={`flex items-center ${getMetricStatus(performanceMetrics.firstContentfulPaint, { good: 1000, needsImprovement: 1800 }).color}`}>
                {getMetricIcon(performanceMetrics.firstContentfulPaint, { good: 1000, needsImprovement: 1800 })}
                {performanceMetrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>LCP</span>
              <span className={`flex items-center ${getMetricStatus(performanceMetrics.largestContentfulPaint, { good: 1200, needsImprovement: 2500 }).color}`}>
                {getMetricIcon(performanceMetrics.largestContentfulPaint, { good: 1200, needsImprovement: 2500 })}
                {performanceMetrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>CLS</span>
              <span className={`flex items-center ${getMetricStatus(performanceMetrics.cumulativeLayoutShift, { good: 0.05, needsImprovement: 0.1 }).color}`}>
                {getMetricIcon(performanceMetrics.cumulativeLayoutShift, { good: 0.05, needsImprovement: 0.1 })}
                {performanceMetrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        {/* Service Worker Status */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Service Worker</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Status</span>
            <span className={`text-sm px-2 py-1 rounded-full ${
              serviceWorkerStatus === 'registered' ? 'bg-green-100 text-green-800' :
              serviceWorkerStatus === 'not-registered' ? 'bg-yellow-100 text-yellow-800' :
              serviceWorkerStatus === 'updating' ? 'bg-blue-100 text-blue-800' :
              'bg-red-100 text-red-800'
            }`}>
              {serviceWorkerStatus}
            </span>
          </div>
          {serviceWorkerStatus === 'not-registered' && (
            <button
              onClick={registerServiceWorker}
              className="w-full mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
            >
              Register SW
            </button>
          )}
        </div>

        {/* Cache Status */}
        {Object.keys(cacheStatus).length > 0 && (
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Cache Status</h4>
            <div className="space-y-1 text-sm">
              {Object.entries(cacheStatus).map(([name, count]) => (
                <div key={name} className="flex justify-between">
                  <span>{name}</span>
                  <span>{count} items</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optimization Actions */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Actions</h4>
          <div className="space-y-2">
            <button
              onClick={collectPerformanceMetrics}
              className="w-full px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded"
            >
              Refresh Metrics
            </button>
            <button
              onClick={preloadCriticalResources}
              className="w-full px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded"
            >
              Preload Resources
            </button>
            <button
              onClick={clearAllCaches}
              className="w-full px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded"
            >
              Clear Caches
            </button>
          </div>
        </div>

        {/* Optimization Suggestions */}
        {optimizationSuggestions.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Suggestions</h4>
            <div className="space-y-1 text-sm text-gray-600">
              {optimizationSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2">💡</span>
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceOptimizationPanel;