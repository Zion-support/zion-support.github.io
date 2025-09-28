import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Shield, Zap, Database, Globe, AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react';

interface SystemHealthMetrics {
  timestamp: number;
  status: 'healthy' | 'warning' | 'critical';
  services: {
    api: 'up' | 'down' | 'degraded';
    database: 'up' | 'down' | 'degraded';
    cdn: 'up' | 'down' | 'degraded';
    monitoring: 'up' | 'down' | 'degraded';
  };
  performance: {
    responseTime: number;
    uptime: number;
    errorRate: number;
    throughput: number;
  };
  resources: {
    cpu: number;
    memory: number;
    disk: number;
    network: number;
  };
}

interface SystemHealthDashboardProps {
  isVisible: boolean;
  onClose: () => void;
  refreshInterval?: number;
}

const SystemHealthDashboard: React.FC<SystemHealthDashboardProps> = ({
  isVisible,
  onClose,
  refreshInterval = 5000
}) => {
  const [healthMetrics, setHealthMetrics] = useState<SystemHealthMetrics>({
    timestamp: Date.now(),
    status: 'healthy',
    services: {
      api: 'up',
      database: 'up',
      cdn: 'up',
      monitoring: 'up'
    },
    performance: {
      responseTime: 150,
      uptime: 99.9,
      errorRate: 0.1,
      throughput: 1000
    },
    resources: {
      cpu: 25,
      memory: 45,
      disk: 60,
      network: 80
    }
  });

  const [healthHistory, setHealthHistory] = useState<SystemHealthMetrics[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Simulate health check
  const performHealthCheck = useCallback((): SystemHealthMetrics => {
    const now = Date.now();
    
    // Simulate some realistic variations
    const baseResponseTime = 150 + Math.random() * 50;
    const baseErrorRate = 0.1 + Math.random() * 0.2;
    const baseCpu = 25 + Math.random() * 20;
    const baseMemory = 45 + Math.random() * 15;
    
    // Determine overall status
    let status: 'healthy' | 'warning' | 'critical' = 'healthy';
    if (baseResponseTime > 300 || baseErrorRate > 0.5 || baseCpu > 80) {
      status = 'warning';
    }
    if (baseResponseTime > 500 || baseErrorRate > 1.0 || baseCpu > 95) {
      status = 'critical';
    }

    return {
      timestamp: now,
      status,
      services: {
        api: status === 'critical' ? 'degraded' : 'up',
        database: 'up',
        cdn: 'up',
        monitoring: 'up'
      },
      performance: {
        responseTime: Math.round(baseResponseTime),
        uptime: 99.9 - Math.random() * 0.1,
        errorRate: Math.round(baseErrorRate * 100) / 100,
        throughput: 1000 + Math.random() * 200
      },
      resources: {
        cpu: Math.round(baseCpu),
        memory: Math.round(baseMemory),
        disk: 60 + Math.random() * 5,
        network: 80 + Math.random() * 10
      }
    };
  }, []);

  // Start health monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    const interval = setInterval(() => {
      const newMetrics = performHealthCheck();
      setHealthMetrics(newMetrics);
      setHealthHistory(prev => [newMetrics, ...prev.slice(0, 19)]); // Keep last 20 readings
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [performHealthCheck, refreshInterval]);

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

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'up':
        return 'text-green-400';
      case 'warning':
      case 'degraded':
        return 'text-yellow-400';
      case 'critical':
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'up':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'warning':
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'critical':
      case 'down':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  // Get resource color
  const getResourceColor = (value: number) => {
    if (value <= 50) return 'text-green-400';
    if (value <= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-400" />
            System Health Dashboard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close system health dashboard"
          >
            ✕
          </button>
        </div>

        {/* Overall Status */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getStatusIcon(healthMetrics.status)}
              <div>
                <h3 className="text-xl font-semibold text-white">System Status</h3>
                <p className={`text-lg font-medium ${getStatusColor(healthMetrics.status)}`}>
                  {healthMetrics.status.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Last Updated</p>
              <p className="text-white">
                {new Date(healthMetrics.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Services Status */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">API Service</span>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon(healthMetrics.services.api)}
              <span className={`font-medium ${getStatusColor(healthMetrics.services.api)}`}>
                {healthMetrics.services.api.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Database className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Database</span>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon(healthMetrics.services.database)}
              <span className={`font-medium ${getStatusColor(healthMetrics.services.database)}`}>
                {healthMetrics.services.database.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">CDN</span>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon(healthMetrics.services.cdn)}
              <span className={`font-medium ${getStatusColor(healthMetrics.services.cdn)}`}>
                {healthMetrics.services.cdn.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400">Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon(healthMetrics.services.monitoring)}
              <span className={`font-medium ${getStatusColor(healthMetrics.services.monitoring)}`}>
                {healthMetrics.services.monitoring.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Response Time</span>
            </div>
            <div className={`text-2xl font-bold ${getResourceColor(healthMetrics.performance.responseTime / 10)}`}>
              {healthMetrics.performance.responseTime}ms
            </div>
            <div className="text-xs text-gray-400 mt-1">Average</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Uptime</span>
            </div>
            <div className={`text-2xl font-bold ${getResourceColor(100 - healthMetrics.performance.uptime)}`}>
              {healthMetrics.performance.uptime.toFixed(2)}%
            </div>
            <div className="text-xs text-gray-400 mt-1">30 days</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-sm text-gray-400">Error Rate</span>
            </div>
            <div className={`text-2xl font-bold ${getResourceColor(healthMetrics.performance.errorRate * 100)}`}>
              {healthMetrics.performance.errorRate.toFixed(2)}%
            </div>
            <div className="text-xs text-gray-400 mt-1">Last hour</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Throughput</span>
            </div>
            <div className="text-2xl font-bold text-blue-400">
              {healthMetrics.performance.throughput.toFixed(0)}
            </div>
            <div className="text-xs text-gray-400 mt-1">Requests/min</div>
          </div>
        </div>

        {/* Resource Usage */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-gray-400">CPU Usage</span>
            </div>
            <div className={`text-2xl font-bold ${getResourceColor(healthMetrics.resources.cpu)}`}>
              {healthMetrics.resources.cpu}%
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  healthMetrics.resources.cpu <= 50 ? 'bg-green-400' :
                  healthMetrics.resources.cpu <= 80 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${healthMetrics.resources.cpu}%` }}
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Database className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Memory</span>
            </div>
            <div className={`text-2xl font-bold ${getResourceColor(healthMetrics.resources.memory)}`}>
              {healthMetrics.resources.memory}%
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  healthMetrics.resources.memory <= 50 ? 'bg-green-400' :
                  healthMetrics.resources.memory <= 80 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${healthMetrics.resources.memory}%` }}
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Disk</span>
            </div>
            <div className={`text-2xl font-bold ${getResourceColor(healthMetrics.resources.disk)}`}>
              {healthMetrics.resources.disk}%
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  healthMetrics.resources.disk <= 50 ? 'bg-green-400' :
                  healthMetrics.resources.disk <= 80 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${healthMetrics.resources.disk}%` }}
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Network</span>
            </div>
            <div className={`text-2xl font-bold ${getResourceColor(100 - healthMetrics.resources.network)}`}>
              {healthMetrics.resources.network}%
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  healthMetrics.resources.network >= 80 ? 'bg-green-400' :
                  healthMetrics.resources.network >= 60 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${healthMetrics.resources.network}%` }}
              />
            </div>
          </div>
        </div>

        {/* Health History */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Health History</h3>
          <div className="flex items-end gap-1 h-20">
            {healthHistory.slice(0, 20).map((metric, index) => (
              <div
                key={index}
                className={`rounded-t flex-1 min-w-[4px] transition-all duration-300 ${
                  metric.status === 'healthy' ? 'bg-green-400' :
                  metric.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{
                  height: `${metric.status === 'healthy' ? 100 : metric.status === 'warning' ? 60 : 30}%`,
                  minHeight: '2px'
                }}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
            <span>20 minutes ago</span>
            <span>Now</span>
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-700">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              Refresh: {refreshInterval}ms
            </span>
            <span className="text-sm text-gray-400">
              Monitoring: {isMonitoring ? 'Active' : 'Inactive'}
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
              onClick={() => setHealthHistory([])}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm font-medium transition-colors"
            >
              Clear History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthDashboard;