import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import { Activity, Zap, Clock, Database, Wifi } from 'lucide-react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
<<<<<<< HEAD
  memoryUsage?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Memory usage (if available)
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1048576) : undefined;

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage
=======
  memoryUsage: number;
  networkLatency: number;
  bundleSize: number;
  cacheHitRate: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    cacheHitRate: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      // Load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      // Render time
      const renderTime = performance.now();
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      // Network latency (simplified)
      const networkLatency = performance.timing.responseEnd - performance.timing.requestStart;
      
      // Bundle size (estimated)
      const bundleSize = document.querySelectorAll('script[src]').length * 50; // Rough estimate
      
      // Cache hit rate (simplified)
      const cacheHitRate = Math.random() * 100; // Placeholder

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        networkLatency,
        bundleSize,
        cacheHitRate
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

<<<<<<< HEAD
    // Keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isVisible]);

  if (process.env.NODE_ENV !== 'development' || !isVisible || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Performance Monitor</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
=======
    // Monitor performance continuously
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    return ms < 1000 ? `${ms.toFixed(0)}ms` : `${(ms / 1000).toFixed(2)}s`;
  };

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.warning) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Zap className="w-5 h-5 mr-2" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
        >
          ×
        </button>
      </div>
<<<<<<< HEAD
      <div className="space-y-1">
        <div>Load Time: <span className="text-green-400">{metrics.loadTime}ms</span></div>
        <div>Render Time: <span className="text-blue-400">{metrics.renderTime}ms</span></div>
        {metrics.memoryUsage && (
          <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage}MB</span></div>
        )}
      </div>
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
=======

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Load Time</span>
          </div>
          <span className={`text-sm font-medium ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 3000 })}`}>
            {formatTime(metrics.loadTime)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Render Time</span>
          </div>
          <span className={`text-sm font-medium ${getPerformanceColor(metrics.renderTime, { good: 100, warning: 500 })}`}>
            {formatTime(metrics.renderTime)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Database className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Memory</span>
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {formatBytes(metrics.memoryUsage)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Wifi className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Network</span>
          </div>
          <span className={`text-sm font-medium ${getPerformanceColor(metrics.networkLatency, { good: 100, warning: 500 })}`}>
            {formatTime(metrics.networkLatency)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Bundle Size</span>
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {formatBytes(metrics.bundleSize * 1024)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Database className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Cache Hit</span>
          </div>
          <span className={`text-sm font-medium ${getPerformanceColor(100 - metrics.cacheHitRate, { good: 20, warning: 50 })}`}>
            {metrics.cacheHitRate.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    </div>
  );
}