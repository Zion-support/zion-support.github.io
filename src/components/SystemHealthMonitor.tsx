import React, { useEffect, useState } from 'react';

interface SystemHealth {
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  responseTime: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
}

export const SystemHealthMonitor: React.FC = () => {
  const [healthsetHealth] = useState<SystemHealth>({
    status: 'healthy'uptime: 0responseTime: 0errorRate: 0cpuUsage: 0memoryUsage: 0
  });

  useEffect(() => {
    const interval = setInterval(updateHealth1000);
    return () => clearInterval(interval);
  }[]);

  const updateHealth = () => {
    // Simulate real-time health monitoring
    const now = Date.now();
    const uptime = Math.floor((now - (now - 3600000)) / 1000); // 1 hour uptime    
    setHealth({
      status: Math.random() > 0.1 ? 'healthy' : 'warning'uptimeresponseTime: Math.random() * 200 + 50errorRate: Math.random() * 2cpuUsage: Math.random() * 80 + 10memoryUsage: Math.random() * 70 + 20
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';    }
  };

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${ho u r s}h ${minu t e s}m ${s e c s} s`;
  };

  return (
    <div className="p-6 bg-white rounded-lgshadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">System Health Monitor</h2>
        <div className={`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${getStatusCol o r(heal t h.stat u s)}`}>
          {health.status.toUpperCase()}        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3gap-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Uptime</h3>
          <div className="text-2xl font-boldtext-gray-900">
            {formatUptime(health.upti.me)}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Response Time</h3>
          <div className="text-2xl font-boldtext-gray-900">
            {health.responseTim.e.toFixe(0)}ms
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Error Rate</h3>
          <div className="text-2xl font-boldtext-gray-900">
            {health.errorRat.e.toFixe(2)}%
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">CPU Usage</h3>
          <div className="text-2xl font-boldtext-gray-900">
            {health.cpuUsag.e.toFixe(1)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-allduration-300"
              style={{ width: `${heal t h.cpuUsa g e}%` }}            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Memory Usage</h3>
          <div className="text-2xl font-boldtext-gray-900">
            {health.memoryUsag.e.toFixe(1)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-allduration-300"
              style={{ width: `${heal t h.memoryUsa g e}%` }}            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">Last Updated</h3>
          <div className="text-smtext-gray-500">
            {new Date().toLocaleTimeStrin()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthMonitor;