import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetricsData {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
  networkSpeed: string;
  cpuUsage: number;
  storageUsed: number;
}

interface PerformanceMetricsProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetricsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const collectMetrics = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Collect Web Vitals
      const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      const fid = (performance.getEntriesByType('first-input')[0] as any)?.processingStart || 0;
      const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) => acc + (entry as PerformanceEntry & { value: number }).value, 0);
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navEntry?.responseStart || 0;

      // Collect memory usage
      const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;

      // Estimate bundle size
      const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const bundleSize = resourceEntries
        .filter((entry) => entry.name.includes('.js'))
        .reduce((acc, entry) => acc + (entry.transferSize || 0), 0) / 1024;

      // Get network speed
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
      const networkSpeed = connection ? connection.effectiveType || 'unknown' : 'unknown';

      // Estimate CPU usage (simplified)
      const cpuUsage = performance.now() / 1000;

      // Get storage usage
      const storageUsed = navigator.storage ? 
        (await navigator.storage.estimate()).usage || 0 : 0;

      setMetrics({
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        memoryUsage,
        bundleSize,
        networkSpeed,
        cpuUsage,
        storageUsed: storageUsed / 1024 / 1024
      });
    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      collectMetrics();
    }
  }, [isVisible, collectMetrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Performance Metrics</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Collecting metrics...</span>
          </div>
        ) : metrics ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Web Vitals */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Web Vitals</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">First Contentful Paint:</span>
                  <span className={`font-mono ${metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'}`}>
                    {metrics.fcp.toFixed(2)}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Largest Contentful Paint:</span>
                  <span className={`font-mono ${metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'}`}>
                    {metrics.lcp.toFixed(2)}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">First Input Delay:</span>
                  <span className={`font-mono ${metrics.fid < 100 ? 'text-green-600' : 'text-red-600'}`}>
                    {metrics.fid.toFixed(2)}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cumulative Layout Shift:</span>
                  <span className={`font-mono ${metrics.cls < 0.1 ? 'text-green-600' : 'text-red-600'}`}>
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time to First Byte:</span>
                  <span className={`font-mono ${metrics.ttfb < 600 ? 'text-green-600' : 'text-red-600'}`}>
                    {metrics.ttfb.toFixed(2)}ms
                  </span>
                </div>
              </div>
            </div>

            {/* Resource Usage */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Resource Usage</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Memory Usage:</span>
                  <span className="font-mono text-blue-600">
                    {metrics.memoryUsage.toFixed(2)} MB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bundle Size:</span>
                  <span className="font-mono text-blue-600">
                    {metrics.bundleSize.toFixed(2)} KB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Network Speed:</span>
                  <span className="font-mono text-blue-600 capitalize">
                    {metrics.networkSpeed}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CPU Usage:</span>
                  <span className="font-mono text-blue-600">
                    {metrics.cpuUsage.toFixed(2)}s
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Storage Used:</span>
                  <span className="font-mono text-blue-600">
                    {metrics.storageUsed.toFixed(2)} MB
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            Failed to collect performance metrics
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={collectMetrics}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Refresh Metrics
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;