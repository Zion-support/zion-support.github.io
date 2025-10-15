import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive, Wifi, AlertCircle } from 'lucide-react';

interface SystemMonitorProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  children,
  className = "",
  title,
  description
}) => {
  const [systemStats, setSystemStats] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0
  });

  useEffect(() => {
    const updateStats = () => {
      // Simulate system monitoring
      setSystemStats({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: Math.random() * 100
      });
    };

    const interval = setInterval(updateStats, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-500';
    if (value < 80) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getStatusText = (value: number) => {
    if (value < 50) return 'Good';
    if (value < 80) return 'Warning';
    return 'Critical';
  };

  const systemMetrics = [
    { name: 'CPU Usage', value: systemStats.cpu, icon: Cpu, unit: '%' },
    { name: 'Memory Usage', value: systemStats.memory, icon: Activity, unit: '%' },
    { name: 'Disk Usage', value: systemStats.disk, icon: HardDrive, unit: '%' },
    { name: 'Network', value: systemStats.network, icon: Wifi, unit: '%' }
  ];

  return (
    <div className={`enhanced-component bg-slate-800 rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {systemMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-slate-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-6 h-6 text-blue-400" />
                <span className={`text-sm font-semibold ${getStatusColor(metric.value)}`}>
                  {getStatusText(metric.value)}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-400">{metric.name}</p>
                <p className="text-2xl font-bold text-white">
                  {metric.value.toFixed(1)}{metric.unit}
                </p>
              </div>
              <div className="mt-2 w-full bg-gray-600 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    metric.value < 50 ? 'bg-green-500' :
                    metric.value < 80 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {children}
    </div>
  );
};

export default SystemMonitor;
