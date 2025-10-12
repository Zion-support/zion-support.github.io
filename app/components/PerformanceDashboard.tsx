import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  errorRate: number;
  uptime: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    errorRate: 0,
    uptime: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        const newMetrics = {
          loadTime: Math.random() * 1000 + 100,
          memoryUsage: Math.random() * 100,
          cpuUsage: Math.random() * 100,
          networkLatency: Math.random() * 50 + 10,
          errorRate: Math.random() * 5,
          uptime: 99.9 + Math.random() * 0.1
        };

        setMetrics(newMetrics);

        // Check for alerts
        const newAlerts: string[] = [];
        if (newMetrics.loadTime > 800) newAlerts.push('High load time detected');
        if (newMetrics.memoryUsage > 80) newAlerts.push('High memory usage');
        if (newMetrics.cpuUsage > 90) newAlerts.push('High CPU usage');
        if (newMetrics.errorRate > 3) newAlerts.push('High error rate');
        
        setAlerts(newAlerts);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const getStatusColor = (value: number, thresholds: { warning: number; critical: number }) => {
    if (value >= thresholds.critical) return 'text-red-500';
    if (value >= thresholds.warning) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getStatusIcon = (value: number, thresholds: { warning: number; critical: number }) => {
    if (value >= thresholds.critical) return <AlertTriangle className="w-5 h-5" />;
    if (value >= thresholds.warning) return <AlertTriangle className="w-5 h-5" />;
    return <CheckCircle className="w-5 h-5" />;
  };

  return (
    <>
      <Helmet>
        <title>Performance Dashboard - Zion Tech Group</title>
        <meta name="description" content="Real-time performance monitoring dashboard." />
      </Helmet>
      
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isMonitoring
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold text-red-800">Alerts</h3>
              </div>
              <ul className="space-y-1">
                {alerts.map((alert, index) => (
                  <li key={index} className="text-red-700">{alert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Load Time</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.loadTime.toFixed(0)}ms
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.loadTime, { warning: 500, critical: 800 })}`}>
                  {getStatusIcon(metrics.loadTime, { warning: 500, critical: 800 })}
                </div>
              </div>
              <Clock className="w-8 h-8 text-blue-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Memory Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.memoryUsage.toFixed(1)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.memoryUsage, { warning: 70, critical: 85 })}`}>
                  {getStatusIcon(metrics.memoryUsage, { warning: 70, critical: 85 })}
                </div>
              </div>
              <Activity className="w-8 h-8 text-green-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CPU Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.cpuUsage.toFixed(1)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.cpuUsage, { warning: 80, critical: 90 })}`}>
                  {getStatusIcon(metrics.cpuUsage, { warning: 80, critical: 90 })}
                </div>
              </div>
              <Zap className="w-8 h-8 text-yellow-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Network Latency</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.networkLatency.toFixed(0)}ms
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.networkLatency, { warning: 30, critical: 50 })}`}>
                  {getStatusIcon(metrics.networkLatency, { warning: 30, critical: 50 })}
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Error Rate</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.errorRate.toFixed(2)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(metrics.errorRate, { warning: 2, critical: 5 })}`}>
                  {getStatusIcon(metrics.errorRate, { warning: 2, critical: 5 })}
                </div>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500 mt-4" />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Uptime</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.uptime.toFixed(2)}%
                  </p>
                </div>
                <div className={`flex items-center ${getStatusColor(100 - metrics.uptime, { warning: 1, critical: 5 })}`}>
                  {getStatusIcon(100 - metrics.uptime, { warning: 1, critical: 5 })}
                </div>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500 mt-4" />
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Trends</h2>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Performance chart would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceDashboard;