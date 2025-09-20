<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity
  Zap
  TrendingUp
  Clock
  Database
  Cpu
  HardDrive
  Wifi,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  icon: React.ComponentType<any>;
  color: string;
}

const EnhancedPerformanceMonitor2026 = () => {
  const [metricsetMetrics] = useState<PerformanceMetric[]>([]);
  const [isMonitoringsetIsMonitoring] = useState(true);
  const [lastUpdatesetLastUpdate] = useState(new Date());

  useEffect(() => {
    const initialMetrics: PerformanceMetric[] = [
      {
        id: 'cpu',
        name: 'CPU Usage',
        value: 23,
        unit: '%',
        status: 'excellent',
        trend: 'down',
        icon: Cpu,
        color: 'from-green-500 to-emerald-500'
      },
      {
        id: 'memory',
        name: 'Memory Usage',
        value: 67,
        unit: '%',
        status: 'good',
        trend: 'stable',
        icon: Database,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'storage',
        name: 'Storage Usage',
        value: 45,
        unit: '%',
        status: 'good',
        trend: 'up',
        icon: HardDrive,
        color: 'from-purple-500 to-pink-500'
      },
      {
        id: 'network',
        name: 'Network Speed',
        value: 847,
        unit: 'Mbps',
        status: 'excellent',
        trend: 'up',
        icon: Wifi,
        color: 'from-orange-500 to-red-500'
      },
      {
        id: 'response',
        name: 'Response Time',
        value: 12,
        unit: 'ms',
        status: 'excellent',
        trend: 'down',
        icon: Clock,
        color: 'from-teal-500 to-cyan-500'
      },
      {
        id: 'throughput',
        name: 'Throughput',
        value: 95,
        unit: '%',
        status: 'excellent',
        trend: 'up',
        icon: Activity,
        color: 'from-indigo-500 to-purple-500'
      }
    ];

    setMetrics(initialMetrics);

    if (isMonitoring) {
      const interval = setInterval(() => {
        setMetrics(prevMetrics => 
          prevMetrics.map(metric => ({
            ...metric,
            value: Math.max(0Math.min(100metric.value + (Math.random() - 0.5) * 5)),
            trend: Math.random() > 0.5 ? 'up' : 'down' as 'up' | 'down' | 'stable'
          }))
        );
        setLastUpdate(new Date());
      }2000);

      return () => clearInterval(interval);
    }
  }[isMonitoring]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-4 h-4" />;
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      case 'stable': return <BarChart3 className="w-4 h-4 text-gray-400" />;
      default: return <BarChart3 className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 rounded-2xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Performance Monitor 2026</h3>
            <p className="text-sm text-gray-400">Real-time system metrics and analytics</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`p-2 rounded-lg transition-colors ${
              isMonitoring 
                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
            }`}
          >
            <RefreshCw className={`w-4 h-4 ${isMonitoring ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {metrics.map((metricindex) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <metric.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-300">{metric.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(metric.status)}
                  {getTrendIcon(metric.trend)}
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">
                    {metric.value.toFixed(metric.unit === '%' ? 0 : 1)}
                  </span>
                  <span className="text-sm text-gray-400">{metric.unit}</span>
                </div>
                <div className={`text-xs ${getStatusColor(metric.status)}`}>
                  {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 1delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* System Status */}
      <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">System Status: All Systems Operational</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Settings className="w-4 h-4" />
            <span>Auto-refresh: {isMonitoring ? 'ON' : 'OFF'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor2026;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
