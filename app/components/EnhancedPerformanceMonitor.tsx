'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface EnhancedPerformanceMonitorProps {
  className?: string;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      name: 'LCP',
      value: 1.2,
      unit: 's',
      status: 'good',
      trend: 'down'
    },
    {
      name: 'FID',
      value: 45,
      unit: 'ms',
      status: 'good',
      trend: 'down'
    },
    {
      name: 'CLS',
      value: 0.05,
      unit: '',
      status: 'good',
      trend: 'stable'
    },
    {
      name: 'TTFB',
      value: 200,
      unit: 'ms',
      status: 'warning',
      trend: 'up'
    }
  ]);

  const [isMonitoring, setIsMonitoring] = useState(true);

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + (Math.random() - 0.5) * metric.value * 0.1,
        trend: Math.random() > 0.5 ? 'up' : 'down'
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'critical':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'critical':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <BarChart3 className="w-4 h-4" />;
    }
  };

  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Performance Monitor</h3>
            <p className="text-gray-400 text-sm">Real-time metrics tracking</p>
          </div>
        </div>

        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isMonitoring
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          {isMonitoring ? 'Pause' : 'Resume'}
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">{metric.name}</span>
              <div className={`${getStatusColor(metric.status)}`}>
                {getStatusIcon(metric.status)}
              </div>
            </div>

            <div className="text-2xl font-bold text-white mb-1">
              {metric.value.toFixed(metric.unit === '' ? 2 : 0)}{metric.unit}
            </div>

            <div className="flex items-center gap-1">
              <span className={`text-xs ${
                metric.trend === 'up' ? 'text-red-400' :
                metric.trend === 'down' ? 'text-green-400' :
                'text-gray-400'
              }`}>
                {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
              </span>
              <span className="text-xs text-gray-400">
                {metric.trend === 'up' ? 'Increasing' :
                 metric.trend === 'down' ? 'Decreasing' :
                 'Stable'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Last updated: {new Date().toLocaleTimeString()}</span>
          <span className="text-cyan-400">Live monitoring active</span>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;