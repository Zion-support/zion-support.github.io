import React, { useState, useEffect } from 'react';
import { performanceEnhancer } from '../../src/utils/performanceEnhancer';
import { enhancedErrorHandler } from '../../src/utils/enhancedErrorHandler';
import { testRunner } from '../../src/utils/testRunner';

interface SystemMetrics {
  performance: ReturnType<typeof performanceEnhancer.getMetrics>;
  errors: ReturnType<typeof enhancedErrorHandler.getErrorStats>;
  tests: ReturnType<typeof testRunner.getSummary>;
}

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics({
        performance: performanceEnhancer.getMetrics(),
        errors: enhancedErrorHandler.getErrorStats(),
        tests: testRunner.getSummary(),
      });
    };

    updateMetrics();

    if (autoRefresh) {
      const interval = setInterval(updateMetrics, 2000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const runTests = async () => {
    const testSuite = {
      name: 'System Tests',
      tests: [
        {
          name: 'Performance Enhancer',
          fn: () => {
            const metrics = performanceEnhancer.getMetrics();
            if (metrics.renderTime < 0) {
              throw new Error('Invalid render time');
            }
          },
        },
        {
          name: 'Error Handler',
          fn: () => {
            const stats = enhancedErrorHandler.getErrorStats();
            if (stats.total < 0) {
              throw new Error('Invalid error count');
            }
          },
        },
        {
          name: 'Test Runner',
          fn: () => {
            const summary = testRunner.getSummary();
            if (summary.total < 0) {
              throw new Error('Invalid test count');
            }
          },
        },
      ],
    };

    await testRunner.runSuite(testSuite);
    updateMetrics();
  };

  const exportData = () => {
    const data = {
      metrics,
      performanceReport: performanceEnhancer.generateReport(),
      errorReport: enhancedErrorHandler.exportErrors(),
      testReport: testRunner.exportResults(),
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `system-report-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
          title="Open System Monitor"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      </div>
    );
  }

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-96 max-h-96 overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">System Monitor</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-1 rounded text-sm font-medium ${
                autoRefresh ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {autoRefresh ? 'Auto' : 'Manual'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Performance Metrics */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Performance</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Render Time</div>
              <div className="font-semibold">{metrics.performance.renderTime.toFixed(2)}ms</div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Memory</div>
              <div className="font-semibold">
                {(metrics.performance.memoryUsage / 1024 / 1024).toFixed(1)}MB
              </div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Components</div>
              <div className="font-semibold">{metrics.performance.componentCount}</div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Bundle Size</div>
              <div className="font-semibold">
                {(metrics.performance.bundleSize / 1024).toFixed(1)}KB
              </div>
            </div>
          </div>
        </div>

        {/* Error Metrics */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Errors</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Total</div>
              <div className="font-semibold">{metrics.errors.total}</div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Unresolved</div>
              <div className="font-semibold text-red-600">{metrics.errors.unresolved}</div>
            </div>
          </div>
        </div>

        {/* Test Metrics */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Tests</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Total</div>
              <div className="font-semibold">{metrics.tests.total}</div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-600">Passed</div>
              <div className="font-semibold text-green-600">{metrics.tests.passed}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-2 border-t border-gray-200">
          <button
            onClick={runTests}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded transition-colors"
          >
            Run Tests
          </button>
          <button
            onClick={exportData}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-2 px-3 rounded transition-colors"
          >
            Export
          </button>
        </div>

        <div className="text-xs text-gray-400 text-center">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;