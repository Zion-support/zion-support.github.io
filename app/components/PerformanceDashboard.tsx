'use client';
import React, { useState, useEffect } from 'react';
import { usePerformanceMonitor } from '../utils/performance';

const PerformanceDashboard: React.FC = () => {
  const { startTiming, endTiming } = usePerformanceMonitor();
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  useEffect(() => {
    startTiming('dashboard-load');
    
    // Simulate performance metrics collection
    const timer = setTimeout(() => {
      setMetrics({
        loadTime: Math.random() * 1000 + 500,
        renderTime: Math.random() * 100 + 50,
        memoryUsage: Math.random() * 100 + 50,
        networkLatency: Math.random() * 200 + 100
      });
      endTiming('dashboard-load');
    }, 1000);

    return () => clearTimeout(timer);
  }, [startTiming, endTiming]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600">Load Time</h3>
          <p className="text-2xl font-bold text-blue-900">{metrics.loadTime.toFixed(0)}ms</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-600">Render Time</h3>
          <p className="text-2xl font-bold text-green-900">{metrics.renderTime.toFixed(0)}ms</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-yellow-600">Memory Usage</h3>
          <p className="text-2xl font-bold text-yellow-900">{metrics.memoryUsage.toFixed(0)}MB</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-600">Network Latency</h3>
          <p className="text-2xl font-bold text-purple-900">{metrics.networkLatency.toFixed(0)}ms</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;