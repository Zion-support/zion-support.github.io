'use client';

import { useState, useEffect, memo } from 'react';

interface Metric {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

const PerformanceMetrics = memo(function PerformanceMetrics() {
  const [metrics] = useState<Metric[]>([
    { label: 'Response Time', value: '45ms', change: -12, trend: 'up' },
    { label: 'Uptime', value: '99.9%', change: 0.1, trend: 'up' },
    { label: 'Throughput', value: '2.4k req/s', change: 15, trend: 'up' },
    { label: 'Error Rate', value: '0.02%', change: -25, trend: 'up' }
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
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

  if (isLoading) {
    return (
      <div className="space-y-4" role="status" aria-label="Loading performance metrics">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 animate-pulse"
          >
            <div className="flex-1">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
            </div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-12"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} role="region" aria-label="Performance metrics">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className='flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-200'
          style={{ animationDelay: `${index * 0.1}s` }}
          role="article"
          aria-label={`${metric.label}: ${metric.value}`}
        >
          <div className='flex-1'>
            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
              {metric.label}
            </p>
            <p className='text-2xl font-bold text-gray-900 dark:text-white'>
              {metric.value}
            </p>
          </div>
          <div className='text-right'>
            <div
              className={`flex items-center space-x-1 ${getTrendColor(metric.trend, metric.change)}`}
            >
              <span className='text-sm font-medium'>
                {metric.change > 0 ? '+' : ''}
                {metric.change}%
              </span>
              <span className='text-lg'>{getTrendIcon(metric.trend)}</span>
            </div>
          </div>
        </div>
      ))}

      <div className='mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg'>
        <p className='text-sm text-gray-600 dark:text-gray-300 text-center'>
          Real-time performance monitoring
        </p>
      </div>
    </div>
  );
});

export default PerformanceMetrics;
