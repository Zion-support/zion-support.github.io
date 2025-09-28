import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Cpu,
  MemoryStick,
  HardDrive,
  Wifi,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  change: number;
}

interface SystemHealth {
  cpu: number;
  memory: number;
  storage: number;
  network: number;
}

const EnhancedPerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    cpu: 0,
    memory: 0,
    storage: 0,
    network: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate real-time data fetching
    const fetchMetrics = () => {
      const newMetrics: PerformanceMetric[] = [
        {
          name: 'Response Time',
          value: Math.random() * 200 + 50,
          unit: 'ms',
          status: Math.random() > 0.8 ? 'warning' : 'good',
          trend: Math.random() > 0.5 ? 'down' : 'up',
          change: Math.random() * 20 - 10
        },
        {
          name: 'Throughput',
          value: Math.random() * 1000 + 500,
          unit: 'req/s',
          status: 'good',
          trend: 'up',
          change: Math.random() * 15
        },
        {
          name: 'Error Rate',
          value: Math.random() * 2,
          unit: '%',
          status: Math.random() > 0.9 ? 'critical' : 'good',
          trend: 'down',
          change: -Math.random() * 5
        },
        {
          name: 'Active Users',
          value: Math.random() * 10000 + 5000,
          unit: '',
          status: 'good',
          trend: 'up',
          change: Math.random() * 200
        }
      ];

      const newSystemHealth: SystemHealth = {
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        storage: Math.random() * 100,
        network: Math.random() * 100
      };

      setMetrics(newMetrics);
      setSystemHealth(newSystemHealth);
      setIsLoading(false);
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-500 bg-green-100';
      case 'warning': return 'text-yellow-500 bg-yellow-100';
      case 'critical': return 'text-red-500 bg-red-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→';
  };

  const getSystemHealthColor = (value: number) => {
    if (value < 50) return 'text-green-500';
    if (value < 80) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Performance Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time monitoring and analytics for your system performance
          </p>
        </motion.div>

        {/* System Health Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            { key: 'cpu', label: 'CPU Usage', icon: <Cpu className="w-6 h-6" /> },
            { key: 'memory', label: 'Memory', icon: <MemoryStick className="w-6 h-6" /> },
            { key: 'storage', label: 'Storage', icon: <HardDrive className="w-6 h-6" /> },
            { key: 'network', label: 'Network', icon: <Wifi className="w-6 h-6" /> }
          ].map((item) => (
            <div key={item.key} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
                <div className={`text-2xl font-bold ${getSystemHealthColor(systemHealth[item.key as keyof SystemHealth])}`}>
                  {Math.round(systemHealth[item.key as keyof SystemHealth])}%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    systemHealth[item.key as keyof SystemHealth] < 50
                      ? 'bg-green-500'
                      : systemHealth[item.key as keyof SystemHealth] < 80
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{
                    width: `${systemHealth[item.key as keyof SystemHealth]}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getStatusColor(metric.status)}`}>
                    {metric.status === 'good' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : metric.status === 'warning' ? (
                      <Info className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                  </div>
                  <span className="font-medium text-gray-700">
                    {metric.name}
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {Math.round(metric.value)}
                  {metric.unit && <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Trend:</span>
                  <span className="text-lg">{getTrendIcon(metric.trend)}</span>
                </div>
                <div className={`text-sm font-medium ${
                  metric.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts and Detailed Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Response Time Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Response Time Trend
            </h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Activity className="w-12 h-12 mx-auto mb-2" />
                <p>Chart visualization would go here</p>
              </div>
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              System Alerts
            </h3>
            <div className="space-y-3">
              {[
                { type: 'warning', message: 'High CPU usage detected', time: '2 minutes ago' },
                { type: 'info', message: 'System backup completed', time: '1 hour ago' },
                { type: 'success', message: 'Performance optimization applied', time: '3 hours ago' }
              ].map((alert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className={`w-2 h-2 rounded-full ${
                    alert.type === 'warning' ? 'bg-yellow-500' :
                    alert.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceDashboard;