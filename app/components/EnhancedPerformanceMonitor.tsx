import React, { useState, useEffect } from 'react';
import { Activity, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  errorRate: number;
}

interface EnhancedPerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
}

export default function EnhancedPerformanceMonitor({ 
  className = '',
  showDetails = true 
}: EnhancedPerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    errorRate: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        // Simulate performance metrics collection
        setMetrics({
          loadTime: Math.random() * 2000 + 500,
          memoryUsage: Math.random() * 100,
          cpuUsage: Math.random() * 100,
          networkLatency: Math.random() * 100 + 10,
          errorRate: Math.random() * 5
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4" />;
    if (value <= thresholds.warning) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Activity className="w-6 h-6 text-cyan-400 mr-3" />
          <h3 className="text-xl font-semibold text-white">Performance Monitor</h3>
        </div>
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonitoring
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-cyan-500 text-white hover:bg-cyan-600'
          }`}
        >
          {isMonitoring ? 'Stop' : 'Start'} Monitoring
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Load Time */}
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Load Time</span>
            <div className={`flex items-center ${getStatusColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>
              {getStatusIcon(metrics.loadTime, { good: 1000, warning: 2000 })}
            </div>
          </div>
          <div className="text-2xl font-bold text-white">
            {metrics.loadTime.toFixed(0)}ms
          </div>
        </div>

        {/* Memory Usage */}
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Memory Usage</span>
            <div className={`flex items-center ${getStatusColor(metrics.memoryUsage, { good: 70, warning: 85 })}`}>
              {getStatusIcon(metrics.memoryUsage, { good: 70, warning: 85 })}
            </div>
          </div>
          <div className="text-2xl font-bold text-white">
            {metrics.memoryUsage.toFixed(1)}%
          </div>
        </div>

        {/* CPU Usage */}
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">CPU Usage</span>
            <div className={`flex items-center ${getStatusColor(metrics.cpuUsage, { good: 70, warning: 85 })}`}>
              {getStatusIcon(metrics.cpuUsage, { good: 70, warning: 85 })}
            </div>
          </div>
          <div className="text-2xl font-bold text-white">
            {metrics.cpuUsage.toFixed(1)}%
          </div>
        </div>

        {/* Network Latency */}
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Network Latency</span>
            <div className={`flex items-center ${getStatusColor(metrics.networkLatency, { good: 50, warning: 100 })}`}>
              {getStatusIcon(metrics.networkLatency, { good: 50, warning: 100 })}
            </div>
          </div>
          <div className="text-2xl font-bold text-white">
            {metrics.networkLatency.toFixed(0)}ms
          </div>
        </div>

        {/* Error Rate */}
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Error Rate</span>
            <div className={`flex items-center ${getStatusColor(metrics.errorRate, { good: 1, warning: 3 })}`}>
              {getStatusIcon(metrics.errorRate, { good: 1, warning: 3 })}
            </div>
          </div>
          <div className="text-2xl font-bold text-white">
            {metrics.errorRate.toFixed(2)}%
          </div>
        </div>

        {/* Overall Status */}
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Overall Status</span>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {isMonitoring ? 'Active' : 'Inactive'}
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <h4 className="text-white font-semibold mb-3">Performance Tips</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Keep load times under 1 second for optimal user experience</li>
            <li>• Monitor memory usage to prevent memory leaks</li>
            <li>• Optimize images and assets for faster loading</li>
            <li>• Use caching strategies to reduce server load</li>
          </ul>
        </div>
      )}
    </div>
  );
}
