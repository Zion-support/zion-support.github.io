import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Cpu, 
  MemoryStick, 
  Network, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  threshold: {
    warning: number;
    critical: number;
  };
}

interface PerformanceData {
  metrics: PerformanceMetric[];
  timestamp: number;
  overallHealth: 'excellent' | 'good' | 'warning' | 'critical';
}

const AdvancedPerformanceDashboard: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(5000);

  const generateMockData = useCallback((): PerformanceData => {
    const metrics: PerformanceMetric[] = [
      {
        name: 'First Contentful Paint',
        value: Math.random() * 2000 + 800,
        unit: 'ms',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 1500, critical: 2500 }
      },
      {
        name: 'Largest Contentful Paint',
        value: Math.random() * 3000 + 1200,
        unit: 'ms',
        status: Math.random() > 0.6 ? 'good' : Math.random() > 0.3 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 2500, critical: 4000 }
      },
      {
        name: 'Cumulative Layout Shift',
        value: Math.random() * 0.3,
        unit: '',
        status: Math.random() > 0.8 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 0.1, critical: 0.25 }
      },
      {
        name: 'First Input Delay',
        value: Math.random() * 200 + 50,
        unit: 'ms',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 100, critical: 300 }
      },
      {
        name: 'Time to Interactive',
        value: Math.random() * 4000 + 2000,
        unit: 'ms',
        status: Math.random() > 0.6 ? 'good' : Math.random() > 0.3 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 3000, critical: 5000 }
      },
      {
        name: 'Memory Usage',
        value: Math.random() * 100 + 200,
        unit: 'MB',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        threshold: { warning: 300, critical: 500 }
      }
    ];

    const criticalCount = metrics.filter(m => m.status === 'critical').length;
    const warningCount = metrics.filter(m => m.status === 'warning').length;
    
    let overallHealth: 'excellent' | 'good' | 'warning' | 'critical';
    if (criticalCount > 0) {
      overallHealth = 'critical';
    } else if (warningCount > 2) {
      overallHealth = 'warning';
    } else if (warningCount > 0) {
      overallHealth = 'good';
    } else {
      overallHealth = 'excellent';
    }

    return {
      metrics,
      timestamp: Date.now(),
      overallHealth
    };
  }, []);

  const refreshData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPerformanceData(generateMockData());
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'critical':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-3 h-3 text-red-500" />;
      case 'down':
        return <TrendingUp className="w-3 h-3 text-green-500 rotate-180" />;
      default:
        return <div className="w-3 h-3 bg-gray-300 rounded-full" />;
    }
  };

  const getOverallHealthColor = (health: string) => {
    switch (health) {
      case 'excellent':
        return 'text-green-600 bg-green-100';
      case 'good':
        return 'text-blue-600 bg-blue-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'critical':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (!performanceData) {
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
          <Activity className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800">Advanced Performance Dashboard</h2>
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
            <option value={1000}>1s</option>
            <option value={2000}>2s</option>
            <option value={5000}>5s</option>
            <option value={10000}>10s</option>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Overall Health</p>
              <p className="text-2xl font-bold capitalize">{performanceData.overallHealth}</p>
            </div>
            <Activity className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Good Metrics</p>
              <p className="text-2xl font-bold">
                {performanceData.metrics.filter(m => m.status === 'good').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Warning Metrics</p>
              <p className="text-2xl font-bold">
                {performanceData.metrics.filter(m => m.status === 'warning').length}
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {performanceData.metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg border-2 ${getStatusColor(metric.status)}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                {getStatusIcon(metric.status)}
                <h3 className="font-semibold">{metric.name}</h3>
              </div>
              <div className="flex items-center space-x-2">
                {getTrendIcon(metric.trend)}
                <span className="text-sm text-gray-500">
                  {metric.trend === 'up' ? 'Increasing' : metric.trend === 'down' ? 'Decreasing' : 'Stable'}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">
                {metric.value.toFixed(metric.unit === '' ? 3 : 0)}
                {metric.unit && <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>}
              </span>
              <span className="text-sm text-gray-500">
                Threshold: {metric.threshold.warning}{metric.unit} / {metric.threshold.critical}{metric.unit}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  metric.status === 'good' ? 'bg-green-500' :
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

      <div className="mt-6 text-center text-sm text-gray-500">
        Last updated: {new Date(performanceData.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default AdvancedPerformanceDashboard;