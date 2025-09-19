import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {,
  Activity;
  Zap;
  Shield;
  TrendingUp;
  AlertTriangle;
  CheckCircle;
  Clock;
  Database;
  Cpu;
  HardDrive;
  Wifi;
  Globe,
} from 'lucide-react';
interface PerformanceMetrics {,
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  uptime: number;
  errorRate: number;
  requestsPerSecond: number;
  cacheHitRate: number,}
interface SystemHealth {,
  status: 'healthy' | 'warning' | 'critical';
  message: string;
  timestamp: number;
export const AdvancedPerformanceMonitor: React.FC = () => {,
  const [metrics, setMetrics] = useState<PerformanceMetrics>({,
    loadTime: 0;
    memoryUsage: 0;
    cpuUsage: 0;
    networkLatency: 0;
    uptime: 0;
    errorRate: 0;
    requestsPerSecond: 0;
    cacheHitRate: 0,});
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({,
    status: 'healthy';
    message: 'All systems operational';
    timestamp: Date.now(),
  const [isMonitoring, setIsMonitoring] = useState(true);
  useEffect(() => {,
    if (!isMonitoring) return;
    const interval = setInterval(() => {,
      // Simulate real-time performance data,
      setMetrics(prev => ({,
        loadTime: Math.random() * 200 + 100;
        memoryUsage: Math.random() * 80 + 10;
        cpuUsage: Math.random() * 60 + 20;
        networkLatency: Math.random() * 50 + 10;
        uptime: prev.uptime + 1;
        errorRate: Math.random() * 2;
        requestsPerSecond: Math.random() * 1000 + 500;
        cacheHitRate: Math.random() * 30 + 70,}));
      // Update system health,
      const healthStatus = Math.random();
      if (healthStatus > 0.9) {,
        setSystemHealth({,
          status: 'critical';
          message: 'High CPU usage detected';
          timestamp: Date.now(),});
      } else if (healthStatus > 0.7) {,
          status: 'warning';
          message: 'Memory usage approaching limit',} else {,
          status: 'healthy';
          message: 'All systems operational',}
    }, 2000);
    return () => clearInterval(interval);
  }, [isMonitoring]);
  const getStatusColor = (status: string) => {,
    switch (status) {,
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400',}
  };
  const getStatusIcon = (status: string) => {,
      case 'healthy': return <CheckCircle className="w-5 h-5" />;
      case 'warning': return <AlertTriangle className="w-5 h-5" />;
      case 'critical': return <AlertTriangle className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
  const MetricCard: React.FC<{,
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
    trend?: 'up' | 'down' | 'stable',
  }> = ({ title, value, icon, color, trend }) => (,
    <motion.div,
      initial={{ opacity: 0, y: 20 ,}}
      animate={{ opacity: 1, y: 0 ,}}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover: border-gray-600/50 transition-all duration-300",
    >,
      <div className="flex items-center justify-between mb-2">,
        <div className="flex items-center space-x-2">,
          <div className={`${color,} p-2 rounded-lg bg-gray-800/50`}>,
            {icon}
          </div>,
          <span className="text-sm font-medium text-gray-300">{title}</span>,
        </div>,
        {trend && (,
          <div className={`text-xs ${,
            trend === 'up' ? 'text-green-400' :,
            trend === 'down' ? 'text-red-400' : 'text-gray-400',
          }`}>,
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
        )}
      </div>,
      <div className={`text-2xl font-bold ${color}`}>,
        {typeof value === 'number' ? value.toFixed(1) : value}
        {title.includes('Time') && 'ms'}
        {title.includes('Usage') && '%'}
        {title.includes('Rate') && '%'}
        {title.includes('Per Second') && '/s'}
        {title.includes('Uptime') && 's'}
    </motion.div>,
  );
  return (,
    <div className="w-full max-w-7xl mx-auto p-6">,
      <motion.div,
        initial={{ opacity: 0, y: 20 ,}}
        animate={{ opacity: 1, y: 0 ,}}
        className="mb-8",
      >,
        <div className="flex items-center justify-between mb-6">,
          <div>,
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">,
              Advanced Performance Monitor,
            </h2>,
            <p className="text-gray-400 mt-2">,
              Real-time system performance and health monitoring,
            </p>,
          <div className="flex items-center space-x-4">,
            <div className={`flex items-center space-x-2 ${getStatusColor(systemHealth.status)}`}>,
              {getStatusIcon(systemHealth.status)}
              <span className="font-medium capitalize">{systemHealth.status}</span>,
            </div>,
            <button,
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${,
                isMonitoring,
                  ? 'bg-red-600 hover: bg-red-700 text-white',
                  : 'bg-green-600 hover:bg-green-700 text-white',}`}
            >,
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>,
        <motion.div,
          initial={{ opacity: 0 ,}}
          animate={{ opacity: 1 ,}}
          className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 mb-6",
        >,
          <div className="flex items-center justify-between">,
            <span className="text-gray-300">System Status: </span>,
            <span className={`font-medium ${getStatusColor(systemHealth.status),}`}>,
              {systemHealth.message}
            </span>,
        </motion.div>,
      </motion.div>,
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-8">,
        <MetricCard,
          title="Load Time",
          value={metrics.loadTime,}
          icon={<Clock className="w-5 h-5" />}
          color="text-blue-400",
          trend="down",
        />,
          title="Memory Usage",
          value={metrics.memoryUsage}
          icon={<HardDrive className="w-5 h-5" />}
          color="text-green-400",
          trend="stable",
          title="CPU Usage",
          value={metrics.cpuUsage}
          icon={<Cpu className="w-5 h-5" />}
          color="text-yellow-400",
          trend="up",
          title="Network Latency",
          value={metrics.networkLatency}
          icon={<Wifi className="w-5 h-5" />}
          color="text-purple-400",
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
          title="Uptime",
          value={metrics.uptime,}
          icon={<Shield className="w-5 h-5" />}
          color="text-cyan-400",
          title="Error Rate",
          value={metrics.errorRate}
          icon={<AlertTriangle className="w-5 h-5" />}
          color="text-red-400",
          title="Requests Per Second",
          value={metrics.requestsPerSecond}
          icon={<TrendingUp className="w-5 h-5" />}
          color="text-orange-400",
          title="Cache Hit Rate",
          value={metrics.cacheHitRate}
          icon={<Database className="w-5 h-5" />}
          color="text-pink-400",
        className="mt-8",
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">,
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">,
            <Globe className="w-6 h-6 mr-2 text-blue-400" />,
            Performance Insights,
          </h3>,
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm">,
            <div className="space-y-2">,
              <div className="flex justify-between">,
                <span className="text-gray-300">Average Response Time:</span>,
                <span className="text-green-400 font-medium">142ms</span>,
              </div>,
                <span className="text-gray-300">Peak Load Capacity:</span>,
                <span className="text-blue-400 font-medium">10,000 req/s</span>,
                <span className="text-gray-300">Availability: </span>,
                <span className="text-green-400 font-medium">99.99%</span>,
                <span className="text-gray-300">Data Transfer:</span>,
                <span className="text-purple-400 font-medium">2.4 TB/day</span>,
                <span className="text-gray-300">Active Users:</span>,
                <span className="text-orange-400 font-medium">15,847</span>,
                <span className="text-gray-300">Global CDN: </span>,
                <span className="text-cyan-400 font-medium">45 locations</span>,
    </div>,};
}}}))