'use client';

import React, { useState, useEffect } from 'react';

interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
}

const SystemMonitor = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0
  });

  useEffect(() => {
    const measureSystemMetrics = () => {
      // Simulate system metrics (in a real app, these would come from an API)
      const cpu = Math.random() * 100;
      const memory = Math.random() * 100;
      const disk = Math.random() * 100;
      const network = Math.random() * 100;

      setMetrics({
        cpu,
        memory,
        disk,
        network
      });
    };

    measureSystemMetrics();
    
    const interval = setInterval(measureSystemMetrics, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-600';
    if (value < 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBgColor = (value: number) => {
    if (value < 50) return 'bg-green-100';
    if (value < 80) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">System Monitor</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`p-4 rounded-lg ${getStatusBgColor(metrics.cpu)}`}>
          <h3 className="text-sm font-medium text-gray-900">CPU Usage</h3>
          <p className={`text-2xl font-bold ${getStatusColor(metrics.cpu)}`}>
            {metrics.cpu.toFixed(1)}%
          </p>
        </div>
        
        <div className={`p-4 rounded-lg ${getStatusBgColor(metrics.memory)}`}>
          <h3 className="text-sm font-medium text-gray-900">Memory Usage</h3>
          <p className={`text-2xl font-bold ${getStatusColor(metrics.memory)}`}>
            {metrics.memory.toFixed(1)}%
          </p>
        </div>
        
        <div className={`p-4 rounded-lg ${getStatusBgColor(metrics.disk)}`}>
          <h3 className="text-sm font-medium text-gray-900">Disk Usage</h3>
          <p className={`text-2xl font-bold ${getStatusColor(metrics.disk)}`}>
            {metrics.disk.toFixed(1)}%
          </p>
        </div>
        
        <div className={`p-4 rounded-lg ${getStatusBgColor(metrics.network)}`}>
          <h3 className="text-sm font-medium text-gray-900">Network Usage</h3>
          <p className={`text-2xl font-bold ${getStatusColor(metrics.network)}`}>
            {metrics.network.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;