'use client';

import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export default function PerformanceMetrics() {
  const [metrics] = useState<Metric[]>([
    { label: 'Response Time', value: '45ms', change: -12, trend: 'up' },
    { label: 'Uptime', value: '99.9%', change: 0.1, trend: 'up' },
    { label: 'Throughput', value: '2.4k req/s', change: 15, trend: 'up' },
    { label: 'Error Rate', value: '0.02%', change: -25, trend: 'up' },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      default:
        return '→';
    }
  };

  const getTrendColor = (trend: string, change: number) => {
    if (trend === 'up') {
      return change > 0 ? 'text-green-600' : 'text-red-600';
    }
    return 'text-gray-600';
  };

  return (
    <div className={`space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {metric.label}
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </p>
          </div>
          <div className="text-right">
            <div className={`flex items-center space-x-1 ${getTrendColor(metric.trend, metric.change)}`}>
              <span className="text-sm font-medium">
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
              <span className="text-lg">{getTrendIcon(metric.trend)}</span>
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          Real-time performance monitoring
        </p>
      </div>
    </div>
  );
}