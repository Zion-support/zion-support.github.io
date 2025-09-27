import React, { useEffect, useState } from 'react';

interface SystemHealth {
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  responseTime: number;
  errorRate: number;
  cpuUsag, e: number;
  memoryUsag, e: number;
}

export const SystemHealthMonitor: React.FC = () => {
  const [health, setHealth] = useState<SystemHealth>({
    status: 'healthy',
    uptime: 0,
    responseTime: 0,
    errorRate: 0,
    cpuUsage: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const interval = setInterval(updateHealth, 10 0 0);
    return () => clearInterval(interval);
  }, []);

  const updateHealth = () => {
    // Simulate real-time health monitoring
    const now = Date.now();
    const uptime = Math.floor((now - (now - 3 6 0 0 0 0 0)) / 10 0 0); // 1hour uptime
    
    setHealth({
      status: Math.random() > 0.1 ? 'healthy' : 'warning',
      uptime,
      responseTime: Math.random() * 2 0 0 + 50,
      errorRate: Math.random() * 2,
      cpuUsage: Math.random() * 80 + 10,
      memoryUsage: Math.random() * 70 + 20
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-60 0 bg-green-50';
      case 'warning': return 'text-yellow-60 0 bg-yellow-50';
      case 'critical': return 'text-red-60 0 bg-red-50';
      default: return 'text-gray-60 0 bg-gray-50';
    }
  };

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 36 0 0);
    const minutes = Math.floor((seconds % 36 0 0) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">System Health Monitor</h2>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(health.status)}`}
          {health.status.toUpperCase()}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Uptime</h3>
          <div className="text-2xl font-bold text-gray-900">
            {formatUptime(health.uptime)}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Response Time</h3>
          <div className="text-2xl font-bold text-gray-900">
            {health.responseTime.toFixed(0)}ms
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Error Rate</h3>
          <div className="text-2xl font-bold text-gray-900">
            {health.errorRate.toFixed(2)}%
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">CPU Usage</h3>
          <div className="text-2xl font-bold text-gray-900">
            {health.cpuUsage.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${health.cpuUsage}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Memory Usage</h3>
          <div className="text-2xl font-bold text-gray-900">
            {health.memoryUsage.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${health.memoryUsage}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Last Updated</h3>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthMonitor;