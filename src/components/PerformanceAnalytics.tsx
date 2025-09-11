import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Zap, 
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Cpu,
  HardDrive,
  Network,
  Monitor
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  status: 'good' | 'warning' | 'critical';
  icon: React.ComponentType<any>;
}

interface PerformanceData {
  timestamp: number;
  metrics: PerformanceMetric[];
  alerts: string[];
  recommendations: string[];
}

const PerformanceAnalytics: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');

  // Mock performance data - in real implementation, this would come from actual monitoring
  const generateMockData = useCallback((): PerformanceData => {
    const now = Date.now();
    const metrics: PerformanceMetric[] = [
      {
        name: 'Page Load Time',
        value: Math.random() * 2000 + 500,
        unit: 'ms',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        icon: Clock
      },
      {
        name: 'Memory Usage',
        value: Math.random() * 40 + 60,
        unit: '%',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.6 ? 'good' : 'warning',
        icon: HardDrive
      },
      {
        name: 'CPU Usage',
        value: Math.random() * 30 + 20,
        unit: '%',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.7 ? 'good' : 'warning',
        icon: Cpu
      },
      {
        name: 'Network Latency',
        value: Math.random() * 100 + 20,
        unit: 'ms',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.6 ? 'good' : 'warning',
        icon: Network
      },
      {
        name: 'Error Rate',
        value: Math.random() * 2,
        unit: '%',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.8 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical',
        icon: AlertTriangle
      },
      {
        name: 'Response Time',
        value: Math.random() * 500 + 100,
        unit: 'ms',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.7 ? 'good' : 'warning',
        icon: Zap
      }
    ];

    const alerts = [
      'High memory usage detected on server-01',
      'Network latency increased by 15%',
      'Error rate spike detected in last 5 minutes'
    ];

    const recommendations = [
      'Consider implementing lazy loading for images',
      'Optimize database queries for better performance',
      'Enable CDN for static assets delivery'
    ];

    return {
      timestamp: now,
      metrics,
      alerts,
      recommendations
    };
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        setPerformanceData(generateMockData());
      }, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isMonitoring, generateMockData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-500/20';
      case 'warning': return 'bg-yellow-500/20';
      case 'critical': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-green-400" />;
      default: return <Activity className="w-4 h-4 text-blue-400" />;
    }
  };

  const startMonitoring = () => {
    setIsMonitoring(true);
    setPerformanceData(generateMockData());
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Performance Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring and analytics for optimal application performance
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <div className="flex gap-2">
            <button
              onClick={startMonitoring}
              disabled={isMonitoring}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                isMonitoring
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              <Activity className="w-5 h-5" />
              Start Monitoring
            </button>
            <button
              onClick={stopMonitoring}
              disabled={!isMonitoring}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                !isMonitoring
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              <Monitor className="w-5 h-5" />
              Stop Monitoring
            </button>
          </div>

          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value as '1h' | '24h' | '7d' | '30d')}
            className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </motion.div>

        {/* Performance Metrics Grid */}
        {performanceData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {performanceData.metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getStatusBgColor(metric.status)}`}>
                      <metric.icon className={`w-6 h-6 ${getStatusColor(metric.status)}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{metric.name}</h3>
                  </div>
                  {getTrendIcon(metric.trend)}
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value.toFixed(metric.unit === '%' ? 1 : 0)}
                    <span className="text-lg text-gray-400 ml-1">{metric.unit}</span>
                  </div>
                  <div className={`text-sm font-medium ${getStatusColor(metric.status)}`}>
                    {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Alerts and Recommendations */}
        {performanceData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {/* Alerts */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Active Alerts</h3>
              </div>
              <div className="space-y-3">
                {performanceData.alerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300">{alert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Recommendations</h3>
              </div>
              <div className="space-y-3">
                {performanceData.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Performance Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
        >
          <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Performance Trends</h3>
          <p className="text-gray-400">
            {isMonitoring 
              ? 'Real-time performance data is being collected and analyzed...'
              : 'Start monitoring to view performance trends and historical data'
            }
          </p>
          {isMonitoring && (
            <div className="mt-4 text-sm text-green-400">
              <Activity className="w-4 h-4 inline mr-2 animate-pulse" />
              Monitoring Active
            </div>
          )}
        </motion.div>

        {/* Status Summary */}
        {performanceData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">
                Last updated: {new Date(performanceData.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PerformanceAnalytics;