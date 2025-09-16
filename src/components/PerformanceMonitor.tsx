import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  errorRate: number;
  uptime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    errorRate: 0,
    uptime: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.random() * 2000 + 500,
        renderTime: Math.random() * 100 + 10,
        memoryUsage: Math.random() * 100,
        networkLatency: Math.random() * 200 + 50,
        errorRate: Math.random() * 5,
        uptime: Date.now() - startTime
      }));
    }, 1000);

    setIsMonitoring(true);

    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, []);

  const formatUptime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  };

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return '✅';
    if (value <= thresholds.warning) return '⚠️';
    return '❌';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className="text-sm text-gray-600">
            {isMonitoring ? 'Monitoring' : 'Stopped'}
          </span>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Load Time */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Load Time</h3>
            <span className="text-2xl">⚡</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${getStatusColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
            <span className="text-lg">
              {getStatusIcon(metrics.loadTime, { good: 1000, warning: 2000 })}
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Target: &lt;1000ms
          </div>
        </div>

        {/* Render Time */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Render Time</h3>
            <span className="text-2xl">🎨</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${getStatusColor(metrics.renderTime, { good: 50, warning: 100 })}`}>
              {metrics.renderTime.toFixed(1)}ms
            </span>
            <span className="text-lg">
              {getStatusIcon(metrics.renderTime, { good: 50, warning: 100 })}
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Target: &lt;50ms
          </div>
        </div>

        {/* Memory Usage */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Memory Usage</h3>
            <span className="text-2xl">💾</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${getStatusColor(metrics.memoryUsage, { good: 50, warning: 80 })}`}>
              {metrics.memoryUsage.toFixed(1)}%
            </span>
            <span className="text-lg">
              {getStatusIcon(metrics.memoryUsage, { good: 50, warning: 80 })}
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Target: &lt;50%
          </div>
        </div>

        {/* Network Latency */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Network Latency</h3>
            <span className="text-2xl">🌐</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${getStatusColor(metrics.networkLatency, { good: 100, warning: 200 })}`}>
              {metrics.networkLatency.toFixed(0)}ms
            </span>
            <span className="text-lg">
              {getStatusIcon(metrics.networkLatency, { good: 100, warning: 200 })}
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Target: &lt;100ms
          </div>
        </div>

        {/* Error Rate */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Error Rate</h3>
            <span className="text-2xl">🚨</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${getStatusColor(metrics.errorRate, { good: 1, warning: 3 })}`}>
              {metrics.errorRate.toFixed(2)}%
            </span>
            <span className="text-lg">
              {getStatusIcon(metrics.errorRate, { good: 1, warning: 3 })}
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Target: &lt;1%
          </div>
        </div>

        {/* Uptime */}
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Uptime</h3>
            <span className="text-2xl">⏱️</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">
              {formatUptime(metrics.uptime)}
            </span>
            <span className="text-lg">✅</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            System running
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
        <div className="h-32 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-500">Performance charts would be displayed here</p>
            <p className="text-sm text-gray-400">Real-time monitoring data</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Export Report
        </button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          View Details
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Settings
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;