import React, { useState, useEffect } from 'react';

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceMetrics {
  errorRate: number;
  avgResolutionTime: number;
  throughput: number;
  cpuUsage: number;
  memoryUsage: number;
  responseTime: number;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    errorRate: 0.02,
    avgResolutionTime: 150,
    throughput: 1250,
    cpuUsage: 45,
    memoryUsage: 67,
    responseTime: 89
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Simulate real-time data updates
      const interval = setInterval(() => {
        setMetrics(prev => ({
          errorRate: Math.max(0, prev.errorRate + (Math.random() - 0.5) * 0.01),
          avgResolutionTime: Math.max(50, prev.avgResolutionTime + (Math.random() - 0.5) * 20),
          throughput: Math.max(500, prev.throughput + (Math.random() - 0.5) * 100),
          cpuUsage: Math.max(0, Math.min(100, prev.cpuUsage + (Math.random() - 0.5) * 10)),
          memoryUsage: Math.max(0, Math.min(100, prev.memoryUsage + (Math.random() - 0.5) * 5)),
          responseTime: Math.max(10, prev.responseTime + (Math.random() - 0.5) * 15)
        }));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Error Rate */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-red-800">Error Rate</h3>
              <span className="text-2xl font-bold text-red-600">
                {(metrics.errorRate * 100).toFixed(2)}%
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-red-200 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, metrics.errorRate * 1000)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Average Resolution Time */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-blue-800">Avg Resolution Time</h3>
              <span className="text-2xl font-bold text-blue-600">
                {metrics.avgResolutionTime.toFixed(0)}ms
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (metrics.avgResolutionTime / 300) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Throughput */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-green-800">Throughput</h3>
              <span className="text-2xl font-bold text-green-600">
                {metrics.throughput.toFixed(0)}/s
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (metrics.throughput / 2000) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* CPU Usage */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-yellow-800">CPU Usage</h3>
              <span className="text-2xl font-bold text-yellow-600">
                {metrics.cpuUsage.toFixed(1)}%
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-yellow-200 rounded-full h-2">
                <div
                  className="bg-yellow-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${metrics.cpuUsage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Memory Usage */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-purple-800">Memory Usage</h3>
              <span className="text-2xl font-bold text-purple-600">
                {metrics.memoryUsage.toFixed(1)}%
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-purple-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${metrics.memoryUsage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-indigo-800">Response Time</h3>
              <span className="text-2xl font-bold text-indigo-600">
                {metrics.responseTime.toFixed(0)}ms
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-indigo-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (metrics.responseTime / 200) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;