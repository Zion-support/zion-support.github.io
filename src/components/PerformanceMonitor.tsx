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
  bundleSize?: number;
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
    const newMetrics: PerformanceMetrics = {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0
    };

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
      fcp: newMetrics.fcp,
      lcp: newMetrics.lcp,
      fid: newMetrics.fid,
      cls: newMetrics.cls,
      ttfb: newMetrics.ttfb,
      bundleSize: newMetrics.bundleSize
    }));

    // Get memory info if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memory: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }

    // Get connection info if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setMetrics(prev => ({
        ...prev,
        connection: connection.effectiveType || 'unknown'
      }));
    }
  }, []);

  useEffect(() => {
    updateMetrics();
  }, [updateMetrics]);

  useEffect(() => {
    // Initial metrics collection
    updateMetrics();

    // Set up periodic updates
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
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

  if (!isVisible && !showDetails) {
    return null;
  }

  return (
    <div className={clsx(
      'fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 z-50 min-w-[200px]',
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-2 text-sm">
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

        {metrics.bundleSize && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Bundle Size:</span>
            <span className="text-gray-900 dark:text-white">
              {(metrics.bundleSize / 1024).toFixed(1)}KB
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