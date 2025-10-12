import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  errorRate: number;
}

interface EnhancedPerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
  refreshInterval?: number;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  className = '',
  showDetails = true,
  refreshInterval = 1000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    errorRate: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (!isMonitoring) return;

    const updateMetrics = () => {
      // Simulate performance metrics collection
      setMetrics({
        loadTime: Math.random() * 1000 + 100,
        renderTime: Math.random() * 50 + 10,
        memoryUsage: Math.random() * 100,
        cpuUsage: Math.random() * 100,
        networkLatency: Math.random() * 200 + 50,
        errorRate: Math.random() * 5
      });
    };

    const interval = setInterval(updateMetrics, refreshInterval);
    updateMetrics(); // Initial update

    return () => clearInterval(interval);
  }, [isMonitoring, refreshInterval]);

  const getPerformanceStatus = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.warning) return 'warning';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const loadTimeStatus = getPerformanceStatus(metrics.loadTime, { good: 200, warning: 500 });
  const memoryStatus = getPerformanceStatus(metrics.memoryUsage, { good: 50, warning: 80 });
  const cpuStatus = getPerformanceStatus(metrics.cpuUsage, { good: 30, warning: 70 });

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Activity className="w-6 h-6 text-cyan-400" />
          <h3 className="text-xl font-semibold text-white">Performance Monitor</h3>
        </div>
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            isMonitoring
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isMonitoring ? 'Stop' : 'Start'} Monitoring
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm text-gray-300">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(loadTimeStatus)}`}>
            {metrics.loadTime.toFixed(0)}ms
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Zap className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-300">Memory</span>
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(memoryStatus)}`}>
            {metrics.memoryUsage.toFixed(1)}%
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">CPU</span>
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(cpuStatus)}`}>
            {metrics.cpuUsage.toFixed(1)}%
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-300 mb-1">Render Time</div>
              <div className="text-lg font-semibold text-white">
                {metrics.renderTime.toFixed(1)}ms
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-300 mb-1">Network Latency</div>
              <div className="text-lg font-semibold text-white">
                {metrics.networkLatency.toFixed(0)}ms
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-300 mb-1">Error Rate</div>
            <div className="text-lg font-semibold text-white">
              {metrics.errorRate.toFixed(2)}%
            </div>
          </div>
        </div>
      )}

      {isMonitoring && (
        <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center text-green-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Live monitoring active
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;