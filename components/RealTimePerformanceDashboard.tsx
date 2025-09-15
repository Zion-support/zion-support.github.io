'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  lastUpdated: string;
}

interface SystemHealth {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  uptime: string;
  activeUsers: number;
  requestsPerMinute: number;
  errorRate: number;
}

const RealTimePerformanceDashboard: React.FC = () => {
  const [metricsetMetrics] = useState<PerformanceMetric[]>([]);
  const [systemHealthsetSystemHealth] = useState<SystemHealth>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    uptime: '0d 0h 0m',
    activeUsers: 0,
    requestsPerMinute: 0,
    errorRate: 0
  });
  const [isLoadingsetIsLoading] = useState(true);
  const [autoRefreshsetAutoRefresh] = useState(true);

  useEffect(() => {
    const generateMockData = () => {
      // Simulate real-time data generation
      const newMetrics: PerformanceMetric[] = [
        {
          id: 'page-load-time',
          name: 'Page Load Time',
          value: Math.random() * 2000 + 500,
          unit: 'ms',
          trend: Math.random() > 0.5 ? 'down' : 'up',
          change: Math.random() * 20 - 10,
          status: Math.random() > 0.3 ? 'excellent' : Math.random() > 0.6 ? 'good' : 'warning',
          lastUpdated: new Date().toISOString()
        },
        {
          id: 'api-response-time',
          name: 'API Response Time',
          value: Math.random() * 500 + 100,
          unit: 'ms',
          trend: Math.random() > 0.4 ? 'down' : 'up',
          change: Math.random() * 15 - 7.5,
          status: Math.random() > 0.4 ? 'excellent' : 'good',
          lastUpdated: new Date().toISOString()
        },
        {
          id: 'throughput',
          name: 'Requests/Second',
          value: Math.random() * 1000 + 500,
          unit: 'req/s',
          trend: Math.random() > 0.3 ? 'up' : 'down',
          change: Math.random() * 25 - 12.5,
          status: Math.random() > 0.5 ? 'excellent' : 'good',
          lastUpdated: new Date().toISOString()
        },
        {
          id: 'error-rate',
          name: 'Error Rate',
          value: Math.random() * 2,
          unit: '%',
          trend: Math.random() > 0.6 ? 'down' : 'up',
          change: Math.random() * 0.5 - 0.25,
          status: Math.random() > 0.7 ? 'excellent' : Math.random() > 0.5 ? 'good' : 'warning',
          lastUpdated: new Date().toISOString()
        },
        {
          id: 'cache-hit-rate',
          name: 'Cache Hit Rate',
          value: Math.random() * 20 + 80,
          unit: '%',
          trend: Math.random() > 0.4 ? 'up' : 'down',
          change: Math.random() * 5 - 2.5,
          status: Math.random() > 0.6 ? 'excellent' : 'good',
          lastUpdated: new Date().toISOString()
        },
        {
          id: 'memory-usage',
          name: 'Memory Usage',
          value: Math.random() * 30 + 60,
          unit: '%',
          trend: Math.random() > 0.5 ? 'up' : 'down',
          change: Math.random() * 8 - 4,
          status: Math.random() > 0.7 ? 'excellent' : Math.random() > 0.4 ? 'good' : 'warning',
          lastUpdated: new Date().toISOString()
        }
      ];

      const newSystemHealth: SystemHealth = {
        cpu: Math.random() * 30 + 40,
        memory: Math.random() * 25 + 65,
        disk: Math.random() * 15 + 70,
        network: Math.random() * 20 + 80,
        uptime: `${Math.floor(Math.random() * 30)}d ${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
        activeUsers: Math.floor(Math.random() * 1000) + 500,
        requestsPerMinute: Math.floor(Math.random() * 5000) + 2000,
        errorRate: Math.random() * 1.5
      };

      setMetrics(newMetrics);
      setSystemHealth(newSystemHealth);
      setIsLoading(false);
    };

    generateMockData();

    if (autoRefresh) {
      const interval = setInterval(generateMockData3000); // Update every 3 seconds
      return () => clearInterval(interval);
    }
  }[autoRefresh]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getHealthColor = (value: numbertype: string) => {
    if (type === 'cpu' || type === 'memory' || type === 'disk') {
      if (value > 90) return 'text-red-600';
      if (value > 75) return 'text-yellow-600';
      return 'text-green-600';
    }
    if (type === 'network') {
      if (value > 95) return 'text-green-600';
      if (value > 80) return 'text-yellow-600';
      return 'text-red-600';
    }
    return 'text-gray-600';
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[123456].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            📊 Real-Time Performance Dashboard
          </h2>
          <p className="text-xl text-gray-600">
            Monitor your 'application', 's performance metrics in real-time
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700">Auto Refresh</span>
          </label>
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live
          </div>
        </div>
      </div>

      {/* System Health Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-6">🖥️ System Health Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          <div className="text-center">
            <div className={`text-2xl font-bold mb-1 ${getHealthColor(systemHealth.'cpu', 'cpu')}`}>
              {systemHealth.cpu.toFixed(1)}%
            </div>
            <div className="text-sm opacity-90">CPU Usage</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold mb-1 ${getHealthColor(systemHealth.'memory', 'memory')}`}>
              {systemHealth.memory.toFixed(1)}%
            </div>
            <div className="text-sm opacity-90">Memory</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold mb-1 ${getHealthColor(systemHealth.'disk', 'disk')}`}>
              {systemHealth.disk.toFixed(1)}%
            </div>
            <div className="text-sm opacity-90">Disk Usage</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold mb-1 ${getHealthColor(systemHealth.'network', 'network')}`}>
              {systemHealth.network.toFixed(1)}%
            </div>
            <div className="text-sm opacity-90">Network</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1 text-white">
              {systemHealth.uptime}
            </div>
            <div className="text-sm opacity-90">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1 text-white">
              {systemHealth.activeUsers.toLocaleString()}
            </div>
            <div className="text-sm opacity-90">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1 text-white">
              {systemHealth.requestsPerMinute.toLocaleString()}
            </div>
            <div className="text-sm opacity-90">Req/Min</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold mb-1 ${systemHealth.errorRate > 1 ? 'text-red-300' : 'text-green-300'}`}>
              {systemHealth.errorRate.toFixed(2)}%
            </div>
            <div className="text-sm opacity-90">Error Rate</div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">{metric.name}</h4>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                {metric.status}
              </span>
            </div>
            
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold text-gray-900">
                {metric.value.toFixed(metric.unit === '%' ? 1 : 0)}
              </span>
              <span className="text-lg text-gray-500 ml-2">{metric.unit}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <span className="mr-1">{getTrendIcon(metric.trend)}</span>
                <span className={metric.change > 0 ? 'text-red-600' : 'text-green-600'}>
                  {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}{metric.unit}
                </span>
                <span className="text-gray-500 ml-1">vs last hour</span>
              </div>
              <div className="text-xs text-gray-400">
                Updated: {new Date(metric.lastUpdated).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Trends Chart Placeholder */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Performance Trends</h3>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">📊</div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Interactive Performance Charts</h4>
          <p className="text-gray-600 mb-6">
            Real-time performance trends and historical data visualization
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View Detailed Analytics
          </button>
        </div>
      </div>

      {/* Alerts and Notifications */}
      <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
        <div className="flex items-center">
          <div className="text-yellow-600 text-2xl mr-3">⚠️</div>
          <div>
            <h4 className="text-lg font-semibold text-yellow-800">Performance Alerts</h4>
            <p className="text-yellow-700 mt-1">
              Monitor critical thresholds and get notified when performance metrics exceed acceptable limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimePerformanceDashboard;