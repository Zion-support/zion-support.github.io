<<<<<<< HEAD
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
=======
"use client";
import React, { useState, useEffect } from 'react';
import { BoltIcon, ClockIcon, ChartBarIcon, CheckCircleIcon, CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function PerformanceMetrics() {
  const [metrics] = useState([
    { label: 'System Uptime', value: '99.9%', color: 'text-green-600', icon: BoltIcon, trend: '+0.1%' },
    { label: 'Response Time', value: '<100ms', color: 'text-blue-600', icon: ClockIcon, trend: '-5ms' },
    { label: 'Throughput', value: '10K req/s', color: 'text-purple-600', icon: ChartBarIcon, trend: '+2K' },
    { label: 'Error Rate', value: '0.01%', color: 'text-green-600', icon: CheckCircleIcon, trend: '-0.005%' },
    { label: 'Load Time', value: '1.2s', color: 'text-orange-600', icon: CpuChipIcon, trend: '-0.3s' },
    { label: 'Availability', value: '24/7', color: 'text-indigo-600', icon: GlobeAltIcon, trend: '100%' }
>>>>>>> 3acf1df8c42e480e27c08a54303afaf751b8e30c
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
<<<<<<< HEAD

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
=======

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <div 
            key={index} 
            className={`text-center p-3 bg-white/5 rounded-lg transition-all duration-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-center mb-2">
              <IconComponent className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div className={`text-lg font-bold ${metric.color} mb-1`}>{metric.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
            <div className="text-xs text-green-500 font-medium">{metric.trend}</div>
          </div>
        );
      })}
>>>>>>> 3acf1df8c42e480e27c08a54303afaf751b8e30c
    </div>
  );
}