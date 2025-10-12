import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, 
  Cpu, 
  HardDrive, 
  Wifi, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkLatency: number;
  uptime: number;
  temperature: number;
}

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpuUsage: 0,
    memoryUsage: 0,
    diskUsage: 0,
    networkLatency: 0,
    uptime: 0,
    temperature: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        const newMetrics = {
          cpuUsage: Math.random() * 100,
          memoryUsage: Math.random() * 100,
          diskUsage: Math.random() * 100,
          networkLatency: Math.random() * 50 + 10,
          uptime: 99.9 + Math.random() * 0.1,
          temperature: 40 + Math.random() * 20
        };

        setMetrics(newMetrics);

        // Check for alerts
        const newAlerts: string[] = [];
        if (newMetrics.cpuUsage > 80) newAlerts.push('High CPU usage detected');
        if (newMetrics.memoryUsage > 85) newAlerts.push('High memory usage');
        if (newMetrics.diskUsage > 90) newAlerts.push('Disk space running low');
        if (newMetrics.temperature > 70) newAlerts.push('High system temperature');
        
        setAlerts(newAlerts);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const getStatusColor = (value: number, thresholds: { warning: number; critical: number }) => {
    if (value >= thresholds.critical) return 'text-red-500';
    if (value >= thresholds.warning) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getStatusIcon = (value: number, thresholds: { warning: number; critical: number }) => {
    if (value >= thresholds.critical) return <AlertTriangle className="w-5 h-5" />;
    if (value >= thresholds.warning) return <AlertTriangle className="w-5 h-5" />;
    return <CheckCircle className="w-5 h-5" />;
  };

  return (
    <>
      <Helmet>
        <title>System Monitor - Zion Tech Group</title>
        <meta name="description" content="Real-time system monitoring dashboard." />
      </Helmet>
      
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">System Monitor</h1>
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isMonitoring
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold text-red-800">System Alerts</h3>
              </div>
              <ul className="space-y-1">
                {alerts.map((alert, index) => (
                  <li key={index} className="text-red-700">{alert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CPU Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.cpuUsage.toFixed(1)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.cpuUsage, { warning: 70, critical: 85 })}`}>
                  {getStatusIcon(metrics.cpuUsage, { warning: 70, critical: 85 })}
                </div>
              </div>
              <Cpu className="w-8 h-8 text-blue-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Memory Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.memoryUsage.toFixed(1)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.memoryUsage, { warning: 80, critical: 90 })}`}>
                  {getStatusIcon(metrics.memoryUsage, { warning: 80, critical: 90 })}
                </div>
              </div>
              <Activity className="w-8 h-8 text-green-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Disk Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.diskUsage.toFixed(1)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.diskUsage, { warning: 80, critical: 90 })}`}>
                  {getStatusIcon(metrics.diskUsage, { warning: 80, critical: 90 })}
                </div>
              </div>
              <HardDrive className="w-8 h-8 text-yellow-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Network Latency</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.networkLatency.toFixed(0)}ms
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.networkLatency, { warning: 30, critical: 50 })}`}>
                  {getStatusIcon(metrics.networkLatency, { warning: 30, critical: 50 })}
                </div>
              </div>
              <Wifi className="w-8 h-8 text-purple-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Uptime</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.uptime.toFixed(2)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(100 - metrics.uptime, { warning: 1, critical: 5 })}`}>
                  {getStatusIcon(100 - metrics.uptime, { warning: 1, critical: 5 })}
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Temperature</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.temperature.toFixed(1)}°C
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.temperature, { warning: 60, critical: 70 })}`}>
                  {getStatusIcon(metrics.temperature, { warning: 60, critical: 70 })}
                </div>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500 mt-4" />
            </div>
          </div>

          {/* System Chart Placeholder */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Performance</h2>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">System performance chart would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemMonitor;