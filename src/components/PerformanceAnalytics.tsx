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

  // Simulated performance data
  const generatePerformanceData = useCallback((): PerformanceData => {
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
        status: Math.random() > 0.6 ? 'good' : Math.random() > 0.3 ? 'warning' : 'critical',
        icon: HardDrive
      },
      {
        name: 'CPU Usage',
        value: Math.random() * 30 + 20,
        unit: '%',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        icon: Cpu
      },
      {
        name: 'Network Latency',
        value: Math.random() * 100 + 20,
        unit: 'ms',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.6 ? 'good' : Math.random() > 0.3 ? 'warning' : 'critical',
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
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        icon: Zap
      }
    ];

    const alerts = [
      'High memory usage detected',
      'Network latency increased by 15%',
      'CPU usage spike at 14:30'
    ].filter(() => Math.random() > 0.7);

    const recommendations = [
      'Consider implementing lazy loading for images',
      'Optimize database queries',
      'Enable CDN for static assets',
      'Implement caching strategy'
    ].filter(() => Math.random() > 0.6);

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
        setPerformanceData(generatePerformanceData());
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring, generatePerformanceData]);

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
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Activity className="w-4 h-4 text-blue-400" />;
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === '%') return `${value.toFixed(1)}%`;
    if (unit === 'ms') return `${Math.round(value)}ms`;
    return `${value.toFixed(2)}${unit}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Performance Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Real-Time
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Performance
              </span>
              {' '}Monitoring
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Monitor your application's performance in real-time with advanced analytics, 
              automated alerts, and intelligent recommendations.
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                isMonitoring
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isMonitoring ? (
                <>
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Stop Monitoring
                </>
              ) : (
                <>
                  <Activity className="w-4 h-4 mr-2" />
                  Start Monitoring
                </>
              )}
            </button>

            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value as '1h' | '24h' | '7d' | '30d')}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="1h" className="bg-slate-800 text-white">Last Hour</option>
              <option value="24h" className="bg-slate-800 text-white">Last 24 Hours</option>
              <option value="7d" className="bg-slate-800 text-white">Last 7 Days</option>
              <option value="30d" className="bg-slate-800 text-white">Last 30 Days</option>
            </select>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Grid */}
      {performanceData && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {performanceData.metrics.map((metric, index) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getStatusBgColor(metric.status)}`}>
                      <metric.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(metric.trend)}
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)} ${getStatusBgColor(metric.status)}`}>
                        {metric.status}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{metric.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    {formatValue(metric.value, metric.unit)}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {metric.trend === 'up' ? 'Increasing' : metric.trend === 'down' ? 'Decreasing' : 'Stable'}
                    </span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          metric.status === 'good' ? 'bg-green-500' : 
                          metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min(metric.value, 100)}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Alerts and Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Alerts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                  Active Alerts
                </h3>
                {performanceData.alerts.length > 0 ? (
                  <div className="space-y-3">
                    {performanceData.alerts.map((alert, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-yellow-200">{alert}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <p className="text-gray-400">No active alerts</p>
                  </div>
                )}
              </motion.div>

              {/* Recommendations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
                  Recommendations
                </h3>
                {performanceData.recommendations.length > 0 ? (
                  <div className="space-y-3">
                    {performanceData.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-blue-200">{recommendation}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <p className="text-gray-400">No recommendations at this time</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Optimize Your Application Performance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get real-time insights into your application's performance and receive 
              intelligent recommendations for optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center mx-auto">
                <Zap className="w-5 h-5 mr-2" />
                Start Performance Monitoring
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceAnalytics;