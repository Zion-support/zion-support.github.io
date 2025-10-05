import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { X, TrendingUp, Activity, Zap, BarChart3 } from 'lucide-react';
>>>>>>> c2a466a0506dfb1ef7b624c2d9f0729509d2d8ce

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
<<<<<<< HEAD
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
      setIsLoading(true);
      // Simulate data loading
      setTimeout(() => {
        setMetrics({
          errorRate: Math.random() * 0.05,
          avgResolutionTime: Math.random() * 200 + 100,
          throughput: Math.random() * 500 + 1000,
          cpuUsage: Math.random() * 100,
          memoryUsage: Math.random() * 100,
          responseTime: Math.random() * 150 + 50
        });
        setIsLoading(false);
      }, 1000);
    }
=======
}

interface PerformanceMetrics {
  cpu: number;
  memory: number;
  gpu: number;
  latency: number;
  throughput: number;
  accuracy: number;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({
  isVisible,
  onClose
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cpu: 0,
    memory: 0,
    gpu: 0,
    latency: 0,
    throughput: 0,
    accuracy: 0
  });

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        gpu: Math.random() * 100,
        latency: Math.random() * 100,
        throughput: Math.random() * 1000,
        accuracy: 85 + Math.random() * 15
      });
    }, 1000);

    return () => clearInterval(interval);
>>>>>>> c2a466a0506dfb1ef7b624c2d9f0729509d2d8ce
  }, [isVisible]);

  if (!isVisible) return null;

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Performance Dashboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Error Rate */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Error Rate</h3>
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  {(metrics.errorRate * 100).toFixed(2)}%
                </div>
                <div className="text-sm text-red-600 dark:text-red-400 mt-1">
                  Target: &lt; 1%
                </div>
              </div>

              {/* Average Resolution Time */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">Avg Resolution Time</h3>
                  <span className="text-2xl">⏱️</span>
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {metrics.avgResolutionTime.toFixed(0)}ms
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  Target: &lt; 100ms
                </div>
              </div>

              {/* Throughput */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Throughput</h3>
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {metrics.throughput.toFixed(0)}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                  requests/min
                </div>
              </div>

              {/* CPU Usage */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">CPU Usage</h3>
                  <span className="text-2xl">💻</span>
                </div>
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                  {metrics.cpuUsage.toFixed(1)}%
                </div>
                <div className="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-2 mt-2">
                  <div 
                    className="bg-yellow-600 dark:bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${metrics.cpuUsage}%` }}
                  ></div>
                </div>
              </div>

              {/* Memory Usage */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-purple-800 dark:text-purple-200">Memory Usage</h3>
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {metrics.memoryUsage.toFixed(1)}%
                </div>
                <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2 mt-2">
                  <div 
                    className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${metrics.memoryUsage}%` }}
                  ></div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-indigo-800 dark:text-indigo-200">Response Time</h3>
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {metrics.responseTime.toFixed(0)}ms
                </div>
                <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                  Target: &lt; 50ms
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
=======
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-blue-900">CPU Usage</h3>
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {metrics.cpu.toFixed(1)}%
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${metrics.cpu}%` }}
              />
            </div>
>>>>>>> c2a466a0506dfb1ef7b624c2d9f0729509d2d8ce
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-green-900">Memory</h3>
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-900">
              {metrics.memory.toFixed(1)}%
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${metrics.memory}%` }}
              />
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-purple-900">GPU Usage</h3>
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-900">
              {metrics.gpu.toFixed(1)}%
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${metrics.gpu}%` }}
              />
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-orange-900">Latency</h3>
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-900">
              {metrics.latency.toFixed(1)}ms
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-indigo-900">Throughput</h3>
              <Activity className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="text-2xl font-bold text-indigo-900">
              {metrics.throughput.toFixed(0)} req/s
            </div>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-pink-900">Accuracy</h3>
              <TrendingUp className="w-5 h-5 text-pink-600" />
            </div>
            <div className="text-2xl font-bold text-pink-900">
              {metrics.accuracy.toFixed(1)}%
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;