import React, { useState, useEffect } from 'react';

interface SystemHealth {
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  responseTime: number;
  errorRate: number;
  memoryUsage: number;
  cpuUsage: number;
  diskUsage: number;
  networkLatency: number;
}

const SystemHealthMonitor: React.FC = () => {
  const [health, setHealth] = useState<SystemHealth>({
    status: 'healthy',
    uptime: 0,
    responseTime: 0,
    errorRate: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    diskUsage: 0,
    networkLatency: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateHealth = () => {
      // Simulate system health metrics
      const uptime = Date.now() - startTime;
      const responseTime = Math.random() * 100 + 50; // 50-150ms
      const errorRate = Math.random() * 2; // 0-2%
      const memoryUsage = Math.random() * 30 + 40; // 40-70%
      const cpuUsage = Math.random() * 40 + 20; // 20-60%
      const diskUsage = Math.random() * 20 + 60; // 60-80%
      const networkLatency = Math.random() * 50 + 20; // 20-70ms

      // Determine overall status
      let status: 'healthy' | 'warning' | 'critical' = 'healthy';
      if (responseTime > 200 || errorRate > 1 || memoryUsage > 80 || cpuUsage > 70) {
        status = 'warning';
      }
      if (responseTime > 500 || errorRate > 5 || memoryUsage > 90 || cpuUsage > 85) {
        status = 'critical';
      }

      setHealth({
        status,
        uptime,
        responseTime,
        errorRate,
        memoryUsage,
        cpuUsage,
        diskUsage,
        networkLatency
      });
    };

    // Initial update
    updateHealth();

    // Update every 5 seconds
    const interval = setInterval(updateHealth, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return '✅';
      case 'warning': return '⚠️';
      case 'critical': return '🚨';
      default: return '❓';
    }
  };

  const formatUptime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">System Health Monitor</h2>
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(health.status)}`}>
          {getStatusIcon(health.status)} {health.status.toUpperCase()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Uptime</h3>
          <p className="text-2xl font-bold text-blue-600">
            {formatUptime(health.uptime)}
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Response Time</h3>
          <p className="text-2xl font-bold text-green-600">
            {health.responseTime.toFixed(0)}ms
          </p>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Error Rate</h3>
          <p className="text-2xl font-bold text-red-600">
            {health.errorRate.toFixed(2)}%
          </p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Network Latency</h3>
          <p className="text-2xl font-bold text-purple-600">
            {health.networkLatency.toFixed(0)}ms
          </p>
        </div>
      </div>

      {/* Resource Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Resource Usage</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Memory Usage</span>
              <span>{health.memoryUsage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  health.memoryUsage > 80 ? 'bg-red-500' : 
                  health.memoryUsage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${health.memoryUsage}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>CPU Usage</span>
              <span>{health.cpuUsage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  health.cpuUsage > 70 ? 'bg-red-500' : 
                  health.cpuUsage > 50 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${health.cpuUsage}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Disk Usage</span>
              <span>{health.diskUsage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  health.diskUsage > 80 ? 'bg-red-500' : 
                  health.diskUsage > 70 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${health.diskUsage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Recommendations */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Health Recommendations:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          {health.responseTime > 200 && (
            <li>• Consider optimizing API responses or adding caching</li>
          )}
          {health.memoryUsage > 80 && (
            <li>• Memory usage is high - consider garbage collection or memory optimization</li>
          )}
          {health.cpuUsage > 70 && (
            <li>• CPU usage is high - consider load balancing or performance optimization</li>
          )}
          {health.errorRate > 1 && (
            <li>• Error rate is elevated - check logs for issues</li>
          )}
          {health.status === 'healthy' && (
            <li>• System is running optimally - keep monitoring</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SystemHealthMonitor;