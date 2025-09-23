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
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    </div>
  );
}
