import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  errorRate: number;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    errorRate: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        // Simulate performance metrics collection
        setMetrics(() => ({
          loadTime: Math.random() * 1000 + 100,
          memoryUsage: Math.random() * 100,
          cpuUsage: Math.random() * 100,
          networkLatency: Math.random() * 50 + 10,
          errorRate: Math.random() * 5
        }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
  };

  return (
    <>
      <Helmet>
        <title>Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Real-time performance monitoring dashboard." />
      </Helmet>
      
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Performance Monitor</h1>
            <button
              onClick={toggleMonitoring}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isMonitoring
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Load Time</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.loadTime.toFixed(0)}ms
                  </p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Memory Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.memoryUsage.toFixed(1)}%
                  </p>
                </div>
                <Activity className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CPU Usage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.cpuUsage.toFixed(1)}%
                  </p>
                </div>
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Network Latency</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrics.networkLatency.toFixed(0)}ms
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>

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

export default EnhancedPerformanceMonitor;