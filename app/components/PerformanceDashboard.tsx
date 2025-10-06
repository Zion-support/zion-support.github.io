import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { performanceOptimizer } from '../../utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';
=======
// import performanceOptimizer from '../../src/utils/performanceOptimizer'; // Unused import
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';
=======
<<<<<<< HEAD
import { performanceOptimizer } from '../../utils/performanceOptimizer';
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { performanceOptimizer } from '../../src/utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
import performanceOptimizer from '../../utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
interface DashboardData {
  performance: {
    averageRenderTime: number;
<<<<<<< HEAD
    totalLoadTime: number;
    memoryUsage: number;
    bundleSize: number;
  };
  errors: ReturnType<typeof getErrorMetrics>;
=======
    totalComponents: number;
    memoryUsage: number;
    slowComponents: number;
  };
  errors: {
    totalErrors: number;
    errorRate: number;
  };
>>>>>>> main
  isHealthy: boolean;
  timestamp: Date;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
}

const PerformanceDashboard: React.FC = (): JSX.Element | null => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
<<<<<<< HEAD
<<<<<<< HEAD
  const [autoRefresh, setAutoRefresh] = useState(true);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
  const [autoRefresh, setAutoRefresh] = useState(true);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8

  useEffect(() => {
    const updateData = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
      const performanceData = {
        averageRenderTime: 0,
        totalComponents: 0,
        memoryUsage: 0,
        slowComponents: 0,
      };
<<<<<<< HEAD
<<<<<<< HEAD

      const errorData = getErrorMetrics();
      const isHealthy = !isErrorRateTooHigh(errorData.errorRate);

      setData({
        performance: performanceData,
        errors: errorData,
        isHealthy,
        timestamp: new Date(),
      });
    };

    updateData();
    const interval = setInterval(updateData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
=======
      const errorMetrics = {
        totalErrors: 0,
        errorRate: 0,
      };
      const isHealthy = performanceData.averageRenderTime < 16;
<<<<<<< HEAD
=======
      
      const errors = getErrorMetrics();
      const isHealthy = !isErrorRateTooHigh() && performanceData.averageRenderTime < 16;
      
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> main

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
      setData({
        performance: performanceData,
        errors: errorMetrics,
        isHealthy,
        timestamp: new Date(),
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      
      try {
        const metrics = performanceOptimizer.getMetrics ? performanceOptimizer.getMetrics('default') : {};
        const performanceMetrics = {
          averageRenderTime: (metrics as any)['averageRenderTime'] || 0,
          totalComponents: (metrics as any)['totalComponents'] || 0,
          memoryUsage: (metrics as any)['memoryUsage'] || 0,
          slowComponents: (metrics as any)['slowComponents'] || 0,
        };
        const errorData = getErrorMetrics ? getErrorMetrics() : { totalErrors: 0, errorRate: 0 };
        const isHealthyCheck = isErrorRateTooHigh ? !isErrorRateTooHigh() && performanceMetrics.averageRenderTime < 16 : true;
        
        const memory = (window as any).performance?.memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
        setMetrics(prev => ({
          ...prev,
          loadTime: performance.now(),
          memoryUsage,
          renderTime: performance.now(),
        }));
      } catch (error) {
        console.warn('Performance metrics not available:', error);
      }
    };

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const metrics = {
          domInteractive: navigation.domInteractive - navigation.fetchStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        };
        setMetrics(prev => ({
          ...prev,
          loadTime: metrics.totalLoadTime,
          renderTime: performance.now(),
        }));
      }
    };

=======
    };

    const updateMetrics = () => {
      const loadTime = performance.now();
      const perf = window.performance;
      const memory = (
        perf as Performance & { memory?: { usedJSHeapSize: number } }
      ).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
=======
    };

    const updateMetrics = () => {
      const loadTime = performance.now();
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
      
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
    };

    const updateMetrics = () => {
      const loadTime = performance.now();
      const perfAPI = (window as any).performance;
      const memory = perfAPI?.memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage,
        renderTime: performance.now(),
      }));
    };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
    // Update metrics on load
    updateMetrics();
    updateData();
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
    if (autoRefresh) {
      const interval = setInterval(() => {
        updateData();
        updateMetrics();
      }, 5000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [autoRefresh]);
<<<<<<< HEAD
=======
    const interval = setInterval(updateData, 5000);
    return () => clearInterval(interval);
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8

  const exportData = (): void => {
    const exportData = {
<<<<<<< HEAD
      performance: data?.performance || { averageRenderTime: 0, totalLoadTime: 0, memoryUsage: 0, bundleSize: 0 },
=======
      performance: data?.performance || {},
>>>>>>> main
      errors: data?.errors,
      timestamp: new Date().toISOString(),
    };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('Exporting data:', exportData);
=======
    console.log('Performance data:', exportData);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
    console.log('Performance Data:', exportData);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
    console.log('Performance Data:', exportData);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!data) {
    return null;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  if (!data) {
    return null;
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  return (
    <div className='fixed bottom-4 right-4 z-50'>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        Show Performance Dashboard
      </button>
<<<<<<< HEAD
    );
  }

  if (!data) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Performance Dashboard</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        <p>Loading performance data...</p>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Status:</span>
          <span
            className={`px-2 py-1 rounded text-xs ${
              data.isHealthy
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            {data.isHealthy ? 'Healthy' : 'Issues Detected'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-400">Render Time:</span>
            <div className="font-mono">
              {data.performance.averageRenderTime.toFixed(2)}ms
            </div>
          </div>
          <div>
            <span className="text-gray-400">Components:</span>
            <div className="font-mono">{data.performance.totalComponents}</div>
          </div>
          <div>
            <span className="text-gray-400">Memory:</span>
            <div className="font-mono">
              {(data.performance.memoryUsage / 1024 / 1024).toFixed(2)}MB
            </div>
          </div>
          <div>
            <span className="text-gray-400">Slow Components:</span>
            <div className="font-mono">{data.performance.slowComponents}</div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Error Rate:</span>
            <span className="font-mono">
              {(data.errors.errorRate * 100).toFixed(2)}%
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Total Errors:</span>
            <span className="font-mono">{data.errors.totalErrors}</span>
          </div>
        </div>

        <div className="text-xs text-gray-500">
          Last updated: {data.timestamp.toLocaleTimeString()}
        </div>
      </div>
=======
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
<<<<<<< HEAD
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
=======
            <div className='flex justify-between'>
              <span className='text-gray-600'>Render Time:</span>
              <span className='font-mono'>{metrics.renderTime.toFixed(2)}ms</span>
>>>>>>> main
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Error Metrics */}
          {data && (
            <>
              <div className='mt-4'>
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
              {data.performance.slowComponents > 0 && (
                <div className='mt-4'>
                  <h4 className='text-sm font-medium text-gray-900 mb-2'>
                    Recommendations
                  </h4>
                  <div className='space-y-1'>
                    {data.performance.slowComponents > 0 && (
                      <div className='text-xs text-gray-600 bg-yellow-50 p-2 rounded'>
                        {data.performance.slowComponents} slow components detected.
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
              <div className='flex space-x-2 pt-2 border-t border-gray-200 mt-4'>
                <button
                  onClick={exportData}
                  className='flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded transition-colors'
                >
                  Export Data
                </button>
                <button
                  onClick={() => {
                    setData(null);
                  }}
                  className='flex-1 bg-gray-600 hover:bg-gray-700 text-white text-xs py-2 px-3 rounded transition-colors'
                >
                  Clear Data
                </button>
              </div>
              <div className='text-xs text-gray-400 text-center mt-2'>
                Last updated: {data.timestamp.toLocaleTimeString()}
              </div>
            </>
          )}
        </div>
      )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
          
          {/* Error Metrics */}
          <div className='mt-4'>
=======
          
          {/* Error Metrics */}
          <div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
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
<<<<<<< HEAD
          
          {/* Recommendations */}
          {data.performance.slowComponents > 0 && (
<<<<<<< HEAD
            <div className='mt-4'>
=======
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
<<<<<<< HEAD
              // performanceOptimizer.clearMetrics(); // Method doesn't exist
=======
>>>>>>> main
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
            <div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
              <h4 className='text-sm font-medium text-gray-900 mb-2'>
                Recommendations
              </h4>
              <div className='space-y-1'>
                {data.performance.slowComponents > 0 && (
                  <div className='text-xs text-gray-600 bg-yellow-50 p-2 rounded'>
                    {data.performance.slowComponents} slow components detected.
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
<<<<<<< HEAD
          <div className='flex space-x-2 pt-2 border-t border-gray-200 mt-4'>
=======
          <div className='flex space-x-2 pt-2 border-t border-gray-200'>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
            <button
              onClick={exportData}
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded transition-colors'
            >
              Export Data
            </button>
            <button
              onClick={() => {
                setData(null);
              }}
              className='flex-1 bg-gray-600 hover:bg-gray-700 text-white text-xs py-2 px-3 rounded transition-colors'
            >
              Clear Data
            </button>
          </div>
<<<<<<< HEAD
          <div className='text-xs text-gray-400 text-center mt-2'>
=======
          <div className='text-xs text-gray-400 text-center'>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
            Last updated: {data.timestamp.toLocaleTimeString()}
          </div>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
    </div>
  );
};

export default PerformanceDashboard;