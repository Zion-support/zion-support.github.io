import React, { useEffect, useState, useCallback } from 'react';
import { clsx } from 'clsx';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory?: number;
  connection?: string;
}

interface PerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  className,
  showDetails = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback(() => {
    const newMetrics: Partial<PerformanceMetrics> = {};

    // Get performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        newMetrics.renderTime = navigation.loadEventEnd - navigation.navigationStart;
      }

      // Get memory usage
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize;
      }

      // Get paint metrics
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          newMetrics.fcp = entry.startTime;
        }
      });

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Calculate bundle size (approximate)
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('assets')) {
          // This is a rough estimation - in real implementation you'd fetch and measure
          totalSize += 100000; // Assume 100KB per script
        }
      });
      newMetrics.bundleSize = totalSize;
      setMetrics(prev => ({
        ...prev,
        fcp: vitals.fcp || 0,
        lcp: vitals.lcp || 0,
        fid: vitals.fid || 0,
        cls: vitals.cls || 0,
        ttfb: vitals.ttfb || 0
      }));
    }

    // Get memory info if available
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memory: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    }

    // Get connection info if available
    if ('connection' in navigator) {
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
      if (connection) {
        setMetrics(prev => ({
          ...prev,
          connection: connection.effectiveType || 'unknown'
        }));
      }
    }
  }, []);

  useEffect(() => {
    // Initial metrics collection
    updateMetrics();

    // Set up periodic updates
    const interval = setInterval(updateMetrics, 5000);

    // Keyboard shortcut to toggle visibility (Ctrl+Shift+P)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [updateMetrics]);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible && !showDetails) return null;

  return (
    <div className={clsx(
      'fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50',
      'max-w-sm w-full',
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        {!showDetails && (
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ✕
          </button>
        )}
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>

        {metrics.memory && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Memory:</span>
            <span className={getMetricColor(metrics.memory, { good: 50, poor: 100 })}>
              {metrics.memory.toFixed(1)}MB
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

      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Press <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl+Shift+P</kbd> to toggle
        </p>
      </div>
    </div>
  );
};

export default PerformanceMonitor;