import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Cpu, HardDrive, Wifi, Zap, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  timestamp: number;
  cpu: number;
  memory: number;
  network: number;
  frameRate: number;
  loadTime: number;
}

interface PerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
  refreshInterval?: number;
}

const RealTimePerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  isVisible,
  onClose,
  refreshInterval = 1000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState<PerformanceMetrics>({
    timestamp: Date.now(),
    cpu: 0,
    memory: 0,
    network: 0,
    frameRate: 0,
    loadTime: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Get current performance metrics
  const getCurrentMetrics = useCallback((): PerformanceMetrics => {
    const now = Date.now();
    
    // CPU usage (simulated - in real app you'd use performance API)
    const cpu = Math.random() * 100;
    
    // Memory usage
    const memory = 'memory' in performance 
      ? ((performance as Performance & { memory: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory.usedJSHeapSize / (performance as Performance & { memory: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit) * 100
      : Math.random() * 100;
    
    // Network speed (simulated)
    const network = 'connection' in navigator 
      ? (navigator as Navigator & { connection: { downlink: number } }).connection.downlink || 0
      : Math.random() * 100;
    
    // Frame rate (simulated)
    const frameRate = Math.random() * 60 + 30;
    
    // Load time
    const loadTime = performance.now();
    
    return {
      timestamp: now,
      cpu: Math.round(cpu * 100) / 100,
      memory: Math.round(memory * 100) / 100,
      network: Math.round(network * 100) / 100,
      frameRate: Math.round(frameRate * 100) / 100,
      loadTime: Math.round(loadTime * 100) / 100
    };
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    const interval = setInterval(() => {
      const newMetrics = getCurrentMetrics();
      setCurrentMetrics(newMetrics);
      setMetrics(prev => {
        const updated = [newMetrics, ...prev.slice(0, 19)]; // Keep last 20 metrics
        return updated;
      });
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [getCurrentMetrics, refreshInterval]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    if (isVisible && !isMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
    if (!isVisible && isMonitoring) {
      stopMonitoring();
    }
  }, [isVisible, isMonitoring, startMonitoring, stopMonitoring]);

  // Get status color based on metric value
  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Get status icon
  const getStatusIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4" />;
    if (value <= thresholds.warning) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-400" />
            Real-Time Performance Monitor
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close performance monitor"
          >
            ✕
          </button>
        </div>

        {/* Current Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {/* CPU Usage */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">CPU</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(currentMetrics.cpu, { good: 50, warning: 80 })}`}>
              {currentMetrics.cpu.toFixed(1)}%
            </div>
            <div className="flex items-center gap-1 mt-1">
              {getStatusIcon(currentMetrics.cpu, { good: 50, warning: 80 })}
              <span className="text-xs text-gray-400">Usage</span>
            </div>
          </div>

          {/* Memory Usage */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <HardDrive className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Memory</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(currentMetrics.memory, { good: 70, warning: 90 })}`}>
              {currentMetrics.memory.toFixed(1)}%
            </div>
            <div className="flex items-center gap-1 mt-1">
              {getStatusIcon(currentMetrics.memory, { good: 70, warning: 90 })}
              <span className="text-xs text-gray-400">Heap</span>
            </div>
          </div>

          {/* Network Speed */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Wifi className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Network</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(100 - currentMetrics.network, { good: 20, warning: 50 })}`}>
              {currentMetrics.network.toFixed(1)} Mbps
            </div>
            <div className="flex items-center gap-1 mt-1">
              {getStatusIcon(100 - currentMetrics.network, { good: 20, warning: 50 })}
              <span className="text-xs text-gray-400">Speed</span>
            </div>
          </div>

          {/* Frame Rate */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400">FPS</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(60 - currentMetrics.frameRate, { good: 10, warning: 30 })}`}>
              {currentMetrics.frameRate.toFixed(0)}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {getStatusIcon(60 - currentMetrics.frameRate, { good: 10, warning: 30 })}
              <span className="text-xs text-gray-400">Frame Rate</span>
            </div>
          </div>

          {/* Load Time */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-red-400" />
              <span className="text-sm text-gray-400">Load</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(currentMetrics.loadTime, { good: 1000, warning: 3000 })}`}>
              {currentMetrics.loadTime.toFixed(0)}ms
            </div>
            <div className="flex items-center gap-1 mt-1">
              {getStatusIcon(currentMetrics.loadTime, { good: 1000, warning: 3000 })}
              <span className="text-xs text-gray-400">Time</span>
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CPU Trend */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">CPU Usage Trend</h4>
              <div className="flex items-end gap-1 h-16">
                {metrics.slice(0, 10).map((metric, index) => (
                  <div
                    key={index}
                    className="bg-blue-400 rounded-t flex-1 min-w-[4px]"
                    style={{
                      height: `${(metric.cpu / 100) * 100}%`,
                      minHeight: '2px'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Memory Trend */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Memory Usage Trend</h4>
              <div className="flex items-end gap-1 h-16">
                {metrics.slice(0, 10).map((metric, index) => (
                  <div
                    key={index}
                    className="bg-green-400 rounded-t flex-1 min-w-[4px]"
                    style={{
                      height: `${(metric.memory / 100) * 100}%`,
                      minHeight: '2px'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Alerts */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Alerts</h3>
          <div className="space-y-2">
            {currentMetrics.cpu > 80 && (
              <div className="flex items-center gap-2 p-2 bg-red-900/20 border border-red-500/30 rounded">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">High CPU usage detected ({currentMetrics.cpu.toFixed(1)}%)</span>
              </div>
            )}
            {currentMetrics.memory > 90 && (
              <div className="flex items-center gap-2 p-2 bg-red-900/20 border border-red-500/30 rounded">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">High memory usage detected ({currentMetrics.memory.toFixed(1)}%)</span>
              </div>
            )}
            {currentMetrics.frameRate < 30 && (
              <div className="flex items-center gap-2 p-2 bg-yellow-900/20 border border-yellow-500/30 rounded">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm">Low frame rate detected ({currentMetrics.frameRate.toFixed(0)} FPS)</span>
              </div>
            )}
            {currentMetrics.loadTime > 3000 && (
              <div className="flex items-center gap-2 p-2 bg-yellow-900/20 border border-yellow-500/30 rounded">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm">Slow load time detected ({currentMetrics.loadTime.toFixed(0)}ms)</span>
              </div>
            )}
            {currentMetrics.cpu <= 50 && currentMetrics.memory <= 70 && currentMetrics.frameRate >= 50 && currentMetrics.loadTime <= 1000 && (
              <div className="flex items-center gap-2 p-2 bg-green-900/20 border border-green-500/30 rounded">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">All performance metrics are within optimal ranges</span>
              </div>
            )}
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              Refresh: {refreshInterval}ms
            </span>
            <span className="text-sm text-gray-400">
              Samples: {metrics.length}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={isMonitoring ? stopMonitoring : startMonitoring}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                isMonitoring 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isMonitoring ? 'Stop' : 'Start'} Monitoring
            </button>
            <button
              onClick={() => setMetrics([])}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm font-medium transition-colors"
            >
              Clear Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimePerformanceMonitor;