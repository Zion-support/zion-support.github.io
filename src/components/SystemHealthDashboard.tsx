import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Network, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Globe,
  Database,
  Server,
  Zap
} from 'lucide-react';

interface SystemMetric {
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  threshold: {
    warning: number;
    critical: number;
  };
  description: string;
}

interface SystemHealth {
  overall: 'excellent' | 'good' | 'warning' | 'critical';
  metrics: SystemMetric[];
  services: ServiceStatus[];
  alerts: SystemAlert[];
  timestamp: number;
}

interface ServiceStatus {
  name: string;
  status: 'running' | 'stopped' | 'error' | 'maintenance';
  uptime: number;
  lastCheck: number;
  responseTime: number;
  description: string;
}

interface SystemAlert {
  id: string;
  type: 'info' | 'warning' | 'error' | 'critical';
  message: string;
  timestamp: number;
  acknowledged: boolean;
  service?: string;
}

const SystemHealthDashboard: React.FC = () => {
  const [systemHealth, setSystemHealth] = useState<SystemHealth | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(10000);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const generateMockData = useCallback((): SystemHealth => {
    const metrics: SystemMetric[] = [
      {
        name: 'CPU Usage',
        value: Math.random() * 100,
        unit: '%',
        status: Math.random() > 0.7 ? 'healthy' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 70, critical: 90 },
        description: 'Current CPU utilization across all cores'
      },
      {
        name: 'Memory Usage',
        value: Math.random() * 100,
        unit: '%',
        status: Math.random() > 0.8 ? 'healthy' : Math.random() > 0.5 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 80, critical: 95 },
        description: 'RAM utilization percentage'
      },
      {
        name: 'Disk Usage',
        value: Math.random() * 100,
        unit: '%',
        status: Math.random() > 0.9 ? 'healthy' : Math.random() > 0.7 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 85, critical: 95 },
        description: 'Storage space utilization'
      },
      {
        name: 'Network Latency',
        value: Math.random() * 200 + 10,
        unit: 'ms',
        status: Math.random() > 0.8 ? 'healthy' : Math.random() > 0.5 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 100, critical: 200 },
        description: 'Average network response time'
      },
      {
        name: 'Active Connections',
        value: Math.random() * 1000 + 100,
        unit: '',
        status: Math.random() > 0.7 ? 'healthy' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 800, critical: 1000 },
        description: 'Number of active network connections'
      },
      {
        name: 'Error Rate',
        value: Math.random() * 5,
        unit: '%',
        status: Math.random() > 0.8 ? 'healthy' : Math.random() > 0.5 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 2, critical: 5 },
        description: 'Percentage of failed requests'
      }
    ];

    const services: ServiceStatus[] = [
      {
        name: 'Web Server',
        status: Math.random() > 0.1 ? 'running' : 'error',
        uptime: Math.random() * 99.9 + 0.1,
        lastCheck: Date.now() - Math.random() * 60000,
        responseTime: Math.random() * 100 + 10,
        description: 'Main web application server'
      },
      {
        name: 'Database',
        status: Math.random() > 0.05 ? 'running' : 'error',
        uptime: Math.random() * 99.9 + 0.1,
        lastCheck: Date.now() - Math.random() * 60000,
        responseTime: Math.random() * 50 + 5,
        description: 'Primary database server'
      },
      {
        name: 'Cache Server',
        status: Math.random() > 0.08 ? 'running' : 'error',
        uptime: Math.random() * 99.9 + 0.1,
        lastCheck: Date.now() - Math.random() * 60000,
        responseTime: Math.random() * 20 + 2,
        description: 'Redis cache server'
      },
      {
        name: 'CDN',
        status: Math.random() > 0.02 ? 'running' : 'error',
        uptime: Math.random() * 99.9 + 0.1,
        lastCheck: Date.now() - Math.random() * 60000,
        responseTime: Math.random() * 30 + 5,
        description: 'Content delivery network'
      },
      {
        name: 'API Gateway',
        status: Math.random() > 0.03 ? 'running' : 'error',
        uptime: Math.random() * 99.9 + 0.1,
        lastCheck: Date.now() - Math.random() * 60000,
        responseTime: Math.random() * 80 + 10,
        description: 'API gateway and load balancer'
      }
    ];

    const alerts: SystemAlert[] = [
      {
        id: 'alert-1',
        type: Math.random() > 0.7 ? 'warning' : 'info',
        message: 'High CPU usage detected on server-01',
        timestamp: Date.now() - Math.random() * 3600000,
        acknowledged: Math.random() > 0.5,
        service: 'Web Server'
      },
      {
        id: 'alert-2',
        type: Math.random() > 0.8 ? 'error' : 'warning',
        message: 'Database connection pool near capacity',
        timestamp: Date.now() - Math.random() * 1800000,
        acknowledged: Math.random() > 0.3,
        service: 'Database'
      },
      {
        id: 'alert-3',
        type: 'info',
        message: 'Scheduled maintenance completed successfully',
        timestamp: Date.now() - Math.random() * 7200000,
        acknowledged: true,
        service: 'Cache Server'
      }
    ];

    const criticalCount = metrics.filter(m => m.status === 'critical').length;
    const warningCount = metrics.filter(m => m.status === 'warning').length;
    const errorServices = services.filter(s => s.status === 'error').length;
    
    let overall: 'excellent' | 'good' | 'warning' | 'critical';
    if (criticalCount > 0 || errorServices > 0) {
      overall = 'critical';
    } else if (warningCount > 2) {
      overall = 'warning';
    } else if (warningCount > 0) {
      overall = 'good';
    } else {
      overall = 'excellent';
    }

    return {
      overall,
      metrics,
      services,
      alerts,
      timestamp: Date.now()
    };
  }, []);

  const refreshData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setSystemHealth(generateMockData());
      setIsLoading(false);
    }, 500);
  }, [generateMockData]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(refreshData, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, refreshData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'running':
      case 'excellent':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'critical':
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'stopped':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'maintenance':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'running':
      case 'excellent':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'critical':
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'stopped':
        return <XCircle className="w-4 h-4 text-gray-500" />;
      case 'maintenance':
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-3 h-3 text-red-500" />;
      case 'down':
        return <TrendingDown className="w-3 h-3 text-green-500" />;
      default:
        return <div className="w-3 h-3 bg-gray-300 rounded-full" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'error':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  if (!systemHealth) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Heart className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl font-bold text-gray-800">System Health Dashboard</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-600">Auto Refresh:</label>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>
          <select
            value={refreshInterval}
            onChange={(e) => setRefreshInterval(Number(e.target.value))}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={5000}>5s</option>
            <option value={10000}>10s</option>
            <option value={30000}>30s</option>
            <option value={60000}>1m</option>
          </select>
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Overall Health Status */}
      <div className={`p-6 rounded-lg border-2 ${getStatusColor(systemHealth.overall)} mb-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getStatusIcon(systemHealth.overall)}
            <div>
              <h3 className="text-xl font-bold">Overall System Health</h3>
              <p className="text-sm opacity-75">Last updated: {new Date(systemHealth.timestamp).toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold capitalize">{systemHealth.overall}</p>
            <p className="text-sm opacity-75">
              {systemHealth.metrics.filter(m => m.status === 'healthy').length} / {systemHealth.metrics.length} metrics healthy
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {systemHealth.metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg border-2 ${getStatusColor(metric.status)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getStatusIcon(metric.status)}
                <h4 className="font-semibold">{metric.name}</h4>
              </div>
              <div className="flex items-center space-x-1">
                {getTrendIcon(metric.trend)}
                <span className="text-sm text-gray-500">
                  {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                </span>
              </div>
            </div>
            
            <div className="text-2xl font-bold mb-2">
              {metric.value.toFixed(metric.unit === '%' ? 1 : 0)}
              {metric.unit && <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>}
            </div>
            
            <div className="text-sm text-gray-600 mb-3">
              {metric.description}
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  metric.status === 'healthy' ? 'bg-green-500' :
                  metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{
                  width: `${Math.min((metric.value / metric.threshold.critical) * 100, 100)}%`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Services Status */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Server className="w-5 h-5" />
          <span>Services Status</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systemHealth.services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border-2 ${getStatusColor(service.status)} cursor-pointer hover:shadow-md transition-shadow`}
              onClick={() => setSelectedService(selectedService === service.name ? null : service.name)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(service.status)}
                  <h4 className="font-semibold">{service.name}</h4>
                </div>
                <span className="text-sm text-gray-500">
                  {service.responseTime.toFixed(0)}ms
                </span>
              </div>
              
              <div className="text-sm text-gray-600 mb-2">
                {service.description}
              </div>
              
              <div className="text-sm text-gray-500">
                Uptime: {service.uptime.toFixed(2)}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5" />
          <span>System Alerts</span>
        </h3>
        <div className="space-y-2">
          {systemHealth.alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-lg border ${getAlertColor(alert.type)} ${
                alert.acknowledged ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium capitalize">{alert.type}</span>
                  <span className="text-sm">{alert.message}</span>
                  {alert.service && (
                    <span className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded">
                      {alert.service}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(alert.timestamp).toLocaleString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemHealthDashboard;