import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
// import { performanceOptimizer } from '../../utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

// interface PerformanceMetrics {
//   loadTime: number;
//   renderTime: number;
//   memoryUsage: number;
//   fps: number;
// }
=======
// import performanceOptimizer from '../../src/utils/performanceOptimizer'; // Unused import
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';
import { performanceOptimizer } from '../../utils/performanceOptimizer';
>>>>>>> main

interface DashboardData {
  performance: {
    averageRenderTime: number;
    totalLoadTime: number;
    memoryUsage: number;
    bundleSize: number;
  };
  errors: ReturnType<typeof getErrorMetrics>;
    totalComponents: number;
    memoryUsage: number;
    slowComponents: number;
  };
  errors: {
    totalErrors: number;
    errorRate: number;
  };
  isHealthy: boolean;
  timestamp: Date;
=======
import { performanceOptimizer } from '../../src/utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
>>>>>>> main
}

const PerformanceDashboard: React.FC = (): JSX.Element | null => {
  const [data, setData] = useState<DashboardData | null>(null);
const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateData = () => {
      // Mock performance data since getPerformanceSummary doesn't exist
      const performance = {
        averageRenderTime: 10,
        totalLoadTime: 1000,
        memoryUsage: 50,
        bundleSize: 500
      };
      const errors = getErrorMetrics();
      const isHealthy =
        !isErrorRateTooHigh() && performance.averageRenderTime < 16;
      const performanceData = {
        averageRenderTime: 0,
        totalComponents: 0,
        memoryUsage: (window as any).performance?.memory?.usedJSHeapSize || 0,
        slowComponents: 0,
      };
      const errors = {
        totalErrors: 0,
        errorRate: 0,
      };
      const isHealthy = performanceData.averageRenderTime < 16;

      setData({
        performance: performanceData,
        errors,
        isHealthy,
        timestamp: new Date(),
      });
=======
      const metrics = performanceOptimizer.performanceOptimizer.getMetrics();
      const metrics = performanceOptimizer.getPerformanceSummary();
      const performance = {
        averageRenderTime: metrics['averageRenderTime'] || 0,
        totalComponents: metrics['totalComponents'] || 0,
        memoryUsage: metrics['memoryUsage'] || 0,
        slowComponents: metrics['slowComponents'] || 0,
      };
      const errors = getErrorMetrics();
      const isHealthy =
        !isErrorRateTooHigh() && performance.averageRenderTime < 16;
=======
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;
        const loadTime = navigation
          ? navigation.loadEventEnd - navigation.loadEventStart
          : 0;
>>>>>>> main

        const memory = (
          performance as Performance & { memory?: { usedJSHeapSize: number } }
        ).memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;

        setMetrics(prev => ({
          ...prev,
          loadTime,
          memoryUsage,
          renderTime: performance.now(),
        }));
      }
      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage,
      }));
>>>>>>> main
    };

    // Update metrics on load
    updateMetrics();

    if (autoRefresh) {
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }
    
    return undefined;
  }, [autoRefresh]);

  const exportData = (): void => {
    const exportData = {
      performance: data?.performance || { averageRenderTime: 0, totalLoadTime: 0, memoryUsage: 0, bundleSize: 0 },
      performance: data?.performance || {},
      errors: data?.errors,
      timestamp: new Date().toISOString(),
    };
=======
    // Update metrics periodically
    const interval = setInterval(updateMetrics, 1000);

    return () => clearInterval(interval);
  }, []);
>>>>>>> main

  // Only show in development
  if (process.env['NODE_ENV'] !== 'development') {
    return null;
  }

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className='bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'
        aria-label='Toggle performance dashboard'
      >
        Perf
      </button>

      {isVisible && (
        <div className='absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64'>
          <h3 className='text-sm font-semibold text-gray-900 mb-3'>
            Performance Metrics
          </h3>
          <div className='space-y-2 text-xs'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Load Time:</span>
              <span className='font-mono'>{metrics.loadTime.toFixed(2)}ms</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Memory:</span>
              <span className='font-mono'>
                {metrics.memoryUsage.toFixed(2)}MB
              </span>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Components</div>
              <div className='font-semibold'>
                N/A
              </div>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Memory</div>
              <div className='font-semibold'>
                {data.performance.memoryUsage > 0
                  ? `${(data.performance.memoryUsage / 1024 / 1024).toFixed(1)}MB`
                  : 'N/A'}
              </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Render Time:</span>
              <span className='font-mono'>{metrics.renderTime.toFixed(2)}ms</span>
            </div>
          </div>
        </div>

        {/* Error Metrics */}
        <div>
          <h4 className='text-sm font-medium text-gray-900 mb-2'>Errors</h4>
          <div className='grid grid-cols-2 gap-2 text-xs'>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Total</div>
              <div className='font-semibold'>{data.errors.totalErrors}</div>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Rate/min</div>
              <div className='font-semibold'>
                {data.errors.errorRate.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {data.performance.averageRenderTime > 16 && (
          <div>
            <h4 className='text-sm font-medium text-gray-900 mb-2'>
              Recommendations
            </h4>
            <div className='space-y-1'>
              {data.performance.averageRenderTime > 16 && (
                <div className='text-xs text-gray-600 bg-yellow-50 p-2 rounded'>
                  Slow render time detected ({data.performance.averageRenderTime}ms).
                  Consider optimizing render performance.
                </div>
              )}
              {data.performance.averageRenderTime > 16 && (
                <div className='text-xs text-gray-600 bg-yellow-50 p-2 rounded'>
                  Average render time is{' '}
                  {data.performance.averageRenderTime.toFixed(1)}ms. Consider
                  code splitting or memoization.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className='flex space-x-2 pt-2 border-t border-gray-200'>
          <button
            onClick={exportData}
            className='flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded transition-colors'
          >
            Export Data
          </button>
          <button
            onClick={() => {
              // performanceOptimizer.clearMetrics(); // Method doesn't exist
              setData(null);
            }}
            className='flex-1 bg-gray-600 hover:bg-gray-700 text-white text-xs py-2 px-3 rounded transition-colors'
          >
            Clear Data
          </button>
        </div>

        <div className='text-xs text-gray-400 text-center'>
          Last updated: {data.timestamp.toLocaleTimeString()}
        </div>
      </div>
=======
      )}
>>>>>>> main
    </div>
  );
};

export default PerformanceDashboard;