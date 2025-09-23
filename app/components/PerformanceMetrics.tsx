"use client";
import React from 'react';

export default function PerformanceMetrics() {
  const metrics = [
    { label: 'System Uptime', value: '99.9%', color: 'text-green-600', icon: '⚡' },
    { label: 'Response Time', value: '<100ms', color: 'text-blue-600', icon: '🚀' },
    { label: 'Throughput', value: '10K req/s', color: 'text-purple-600', icon: '📊' },
    { label: 'Error Rate', value: '0.01%', color: 'text-green-600', icon: '✅' },
    { label: 'Load Time', value: '1.2s', color: 'text-orange-600', icon: '⏱️' },
    { label: 'Availability', value: '24/7', color: 'text-indigo-600', icon: '🔄' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center p-3 bg-white/5 rounded-lg">
          <div className="text-2xl mb-1">{metric.icon}</div>
          <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
