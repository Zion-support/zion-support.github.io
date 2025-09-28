import React, { useState, useEffect, useCallback } from 'react';

interface SystemHealthMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkStatus: 'online' | 'offline' | 'slow';
  uptime: number;
  lastUpdate: number;
}

interface SystemHealthDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const SystemHealthDashboard: React.FC<SystemHealthDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<SystemHealthMetrics>({
    cpuUsage: 0,
    memoryUsage: 0,
    diskUsage: 0,
    networkStatus: 'online',
    uptime: 0,
    lastUpdate: Date.now()
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const updateMetrics = useCallback(() => {
    if (!isMonitoring) return;

    const newMetrics: SystemHealthMetrics = {
      cpuUsage: getCPUUsage(),
      memoryUsage: getMemoryUsage(),
      diskUsage: getDiskUsage(),
      networkStatus: getNetworkStatus(),
      uptime: getUptime(),
      lastUpdate: Date.now()
    };

    setMetrics(newMetrics);
    checkAlerts(newMetrics);
  }, [isMonitoring]);

  const getCPUUsage = (): number => {
    // Simulate CPU usage based on performance timing
    if (typeof window === 'undefined' || !window.performance) return Math.random() * 100;
    
    const entries = performance.getEntriesByType('measure');
    const cpuIntensive = entries.filter(entry => entry.duration > 10).length;
    return Math.min(cpuIntensive * 5 + Math.random() * 20, 100);
  };

  const getMemoryUsage = (): number => {
    if (typeof window === 'undefined' || !(window as any).performance?.memory) return Math.random() * 100;
    
    const memory = (window as any).performance.memory;
    const used = memory.usedJSHeapSize;
    const total = memory.totalJSHeapSize;
    return Math.round((used / total) * 100);
  };

  const getDiskUsage = (): number => {
    // Simulate disk usage
    return Math.random() * 100;
  };

  const getNetworkStatus = (): 'online' | 'offline' | 'slow' => {
    if (typeof navigator === 'undefined') return 'online';
    
    if (!navigator.onLine) return 'offline';
    
    // Simulate slow network based on connection type
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType) {
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        return 'slow';
      }
    }
    
    return 'online';
  };

  const getUptime = (): number => {
    if (typeof window === 'undefined' || !window.performance) return 0;
    
    return Math.round(performance.now() / 1000); // seconds
  };

  const checkAlerts = (metrics: SystemHealthMetrics) => {
    const newAlerts: string[] = [];
    
    if (metrics.cpuUsage > 80) {
      newAlerts.push(`High CPU usage: ${metrics.cpuUsage.toFixed(1)}%`);
    }
    
    if (metrics.memoryUsage > 85) {
      newAlerts.push(`High memory usage: ${metrics.memoryUsage.toFixed(1)}%`);
    }
    
    if (metrics.diskUsage > 90) {
      newAlerts.push(`High disk usage: ${metrics.diskUsage.toFixed(1)}%`);
    }
    
    if (metrics.networkStatus === 'offline') {
      newAlerts.push('Network is offline');
    } else if (metrics.networkStatus === 'slow') {
      newAlerts.push('Network connection is slow');
    }
    
    setAlerts(newAlerts);
  };

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(updateMetrics, 2000);
    return () => clearInterval(interval);
  }, [isVisible, updateMetrics]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    updateMetrics();
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const clearAlerts = () => {
    setAlerts([]);
  };

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }): string => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBg = (value: number, thresholds: { good: number; warning: number }): string => {
    if (value <= thresholds.good) return 'bg-green-100';
    if (value <= thresholds.warning) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getNetworkStatusColor = (status: string): string => {
    switch (status) {
      case 'online': return 'text-green-600';
      case 'slow': return 'text-yellow-600';
      case 'offline': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getNetworkStatusIcon = (status: string): string => {
    switch (status) {
      case 'online': return '🟢';
      case 'slow': return '🟡';
      case 'offline': return '🔴';
      default: return '⚪';
    }
  };

  const formatUptime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">System Health Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={isMonitoring ? stopMonitoring : startMonitoring}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isMonitoring
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isMonitoring ? 'Stop' : 'Start'} Monitoring
              </button>
              <button
                onClick={clearAlerts}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Clear Alerts
              </button>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.cpuUsage, { good: 50, warning: 80 })}`}>
              <div className="text-sm font-medium text-gray-600">CPU Usage</div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.cpuUsage, { good: 50, warning: 80 })}`}>
                {metrics.cpuUsage.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">Processor load</div>
            </div>
            
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.memoryUsage, { good: 60, warning: 85 })}`}>
              <div className="text-sm font-medium text-gray-600">Memory Usage</div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.memoryUsage, { good: 60, warning: 85 })}`}>
                {metrics.memoryUsage.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">RAM utilization</div>
            </div>
            
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.diskUsage, { good: 70, warning: 90 })}`}>
              <div className="text-sm font-medium text-gray-600">Disk Usage</div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.diskUsage, { good: 70, warning: 90 })}`}>
                {metrics.diskUsage.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">Storage utilization</div>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-100">
              <div className="text-sm font-medium text-gray-600">Network Status</div>
              <div className={`text-2xl font-bold ${getNetworkStatusColor(metrics.networkStatus)}`}>
                {getNetworkStatusIcon(metrics.networkStatus)} {metrics.networkStatus}
              </div>
              <div className="text-xs text-gray-500">Connection status</div>
            </div>
          </div>

          {/* System Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">System Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Uptime:</span>
                  <span className="font-medium">{formatUptime(metrics.uptime)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Update:</span>
                  <span className="font-medium">{new Date(metrics.lastUpdate).toLocaleTimeString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">User Agent:</span>
                  <span className="font-medium text-xs truncate ml-2">
                    {typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 50) + '...' : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Indicators</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Overall Health:</span>
                  <span className={`font-medium ${
                    alerts.length === 0 ? 'text-green-600' : 
                    alerts.length <= 2 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {alerts.length === 0 ? 'Healthy' : 
                     alerts.length <= 2 ? 'Warning' : 'Critical'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Alerts:</span>
                  <span className="font-medium">{alerts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monitoring:</span>
                  <span className={`font-medium ${isMonitoring ? 'text-green-600' : 'text-gray-600'}`}>
                    {isMonitoring ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Alerts</h3>
              <div className="space-y-2">
                {alerts.map((alert, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-800">{alert}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Health Tips */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">System Health Tips</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Keep CPU usage below 80% for optimal performance</li>
              <li>• Monitor memory usage to prevent out-of-memory errors</li>
              <li>• Ensure disk space is available for temporary files</li>
              <li>• Maintain stable network connection for best user experience</li>
              <li>• Regular system restarts can help clear memory leaks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthDashboard;