import React, { useState, useEffect } from 'react';
import performanceOptimizer from '../../utils/performanceOptimizer';
import { getErrorMetrics } from '../../utils/errorHandling';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface DashboardData {
  performance: {
    averageRenderTime: number;
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
}

const PerformanceDashboard: React.FC = (): JSX.Element | null => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateData = () => {
      const performanceData = {
        averageRenderTime: 0,
        totalComponents: 0,
        memoryUsage: 0,
        slowComponents: 0,
      };

      const errorData = getErrorMetrics();
      const isHealthy = errorData.errorRate < 0.1; // Simplified error rate check

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
    </div>
  );
};

export default PerformanceDashboard;