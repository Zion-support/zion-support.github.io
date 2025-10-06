import React, { useState, useEffect } from 'react';
import { performanceOptimizer } from '../../utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

import performanceOptimizer from '../../utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

interface DashboardData {
  performance: {
    averageRenderTime: number;
    totalLoadTime: number;
    memoryUsage: number;
    bundleSize: number;
  };
  errors: ReturnType<typeof getErrorMetrics>;
  isHealthy: boolean;
  timestamp: Date;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceDashboard: React.FC = (): JSX.Element | null => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
  renderTime: 0,
    memoryUsage: 0,
  fps: 0,
  });
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const updateData = () => {
      //Mock performance data since getPerformanceSummary doesn't exist
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
        memoryUsage: 0,
  slowComponents: 0,
      };

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

      setData({
        performance: performanceData,
  errors: errorMetrics,
        isHealthy,
        timestamp: new Date(),
      });
      
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
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 /1024 : 0;
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

    };

    const updateMetrics = () => {
      const loadTime = performance.now();
      const perfAPI = (window as any).performance;
      const memory = perfAPI?.memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 /1024 : 0;
      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage,
        renderTime: performance.now(),
      }));
    };

    //Update metrics on load
    updateMetrics();
    updateData();
    
    if (autoRefresh) {
      const interval = setInterval(() => {
        updateData();
        updateMetrics();
      }, 5000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [autoRefresh]);
    const interval = setInterval(updateData, 5000);
    return () => clearInterval(interval);
  }, []);

  const exportData = (): void => {
    const exportData = {
      performance: data?.performance || { averageRenderTime: 0,
  totalLoadTime: 0, memoryUsage: 0, bundleSize: 0 },
      errors: data?.errors,
      timestamp: new Date().toISOString(),
    };
    console.log('Exporting data:', exportData);
    console.log('Performance Data:', exportData);
    console.log('Performance Data:', exportData);
  };

  //Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!data) {
    return null;
  }

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        Show Performance Dashboard
      </button>
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
              {(data.performance.memoryUsage /1024 / 1024).toFixed(2)}MB
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
            </div>
          </div>
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
          
          {/* Error Metrics */}
          <div className='mt-4'>
          
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
          {data.performance.slowComponents > 0 && (
            <div className='mt-4'>
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
            <div>
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
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;
