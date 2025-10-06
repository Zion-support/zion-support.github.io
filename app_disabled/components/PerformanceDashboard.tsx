import React, { useState, useEffect } from 'react';
import { performanceOptimizer } from '../../src/utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

interface DashboardData {
  performance: {
    averageRenderTime: number;
    totalComponents: number;
    memoryUsage: number;
    slowComponents: number;
  };
  errors: ReturnType<typeof getErrorMetrics>;
  isHealthy: boolean;
  timestamp: Date;
}

const PerformanceDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const updateData = () => {
      const summary = performanceOptimizer.getPerformanceSummary();
      const performance = {
        averageRenderTime: summary.averageRenderTime || 0,
        totalComponents: summary.totalComponents || 0,
        memoryUsage: summary.memoryUsage || 0,
        slowComponents: summary.slowComponents || 0,
      };
      const errors = getErrorMetrics();
      const isHealthy =
        !isErrorRateTooHigh() && performance.averageRenderTime < 16;

      setData({
        performance,
        errors,
        isHealthy,
        timestamp: new Date(),
      });
    };

    updateData();

    if (autoRefresh) {
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [autoRefresh]);

  const exportData = () => {
    const exportData = {
      performance: data?.performance || {},
      errors: data?.errors,
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `performance-report-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isVisible) {
    return (
      <div className='fixed bottom-4 right-4 z-50'>
        <button
          onClick={() => setIsVisible(true)}
          className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors'
          title='Open Performance Dashboard'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
            />
          </svg>
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className='fixed bottom-4 right-4 z-50'>
        <button
          onClick={() => setIsVisible(true)}
          className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors'
          title='Open Performance Dashboard'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className='fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-96 max-h-96 overflow-y-auto'>
      <div className='p-4 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-gray-900'>
            Performance Dashboard
          </h3>
          <div className='flex items-center space-x-2'>
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-1 rounded text-sm font-medium ${
                autoRefresh
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {autoRefresh ? 'Auto' : 'Manual'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className='text-gray-400 hover:text-gray-600'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='flex items-center mt-2'>
          <div
            className={`w-2 h-2 rounded-full mr-2 ${
              data.isHealthy ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
          <span className='text-sm text-gray-600'>
            {data.isHealthy ? 'System Healthy' : 'Issues Detected'}
          </span>
        </div>
      </div>

      <div className='p-4 space-y-4'>
        {/* Performance Metrics */}
        <div>
          <h4 className='text-sm font-medium text-gray-900 mb-2'>
            Performance
          </h4>
          <div className='grid grid-cols-2 gap-2 text-xs'>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Grade</div>
              <div className='font-semibold'>
                {data.performance.averageRenderTime < 16
                  ? 'A'
                  : data.performance.averageRenderTime < 32
                    ? 'B'
                    : 'C'}
              </div>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Avg Render</div>
              <div className='font-semibold'>
                {data.performance.averageRenderTime}
              </div>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Components</div>
              <div className='font-semibold'>
                {data.performance.totalComponents}
              </div>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <div className='text-gray-600'>Memory</div>
              <div className='font-semibold'>
                {data.performance.memoryUsage > 0
                  ? `${(data.performance.memoryUsage / 1024 / 1024).toFixed(1)}MB`
                  : 'N/A'}
              </div>
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
        {data.performance.slowComponents > 0 && (
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
        <div className='flex space-x-2 pt-2 border-t border-gray-200'>
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

        <div className='text-xs text-gray-400 text-center'>
          Last updated: {data.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
