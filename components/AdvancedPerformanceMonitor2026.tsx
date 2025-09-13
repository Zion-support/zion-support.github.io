'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage: number;
  networkLatency: number;
  errorRate: number;
  bounceRate: number;
  conversionRate: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  resolved: boolean;
}

const AdvancedPerformanceMonitor2026: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    memoryUsage: 0,
    networkLatency: 0,
    errorRate: 0,
    bounceRate: 0,
    conversionRate: 0
  });

  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [realTimeData, setRealTimeData] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMonitoring) {
      const startMonitoring = () => {
        // Simulate real-time performance data
        const updateMetrics = () => {
          setMetrics(prev => ({
            pageLoadTime: Math.random() * 2000 + 500,
            firstContentfulPaint: Math.random() * 1000 + 200,
            largestContentfulPaint: Math.random() * 1500 + 300,
            cumulativeLayoutShift: Math.random() * 0.1,
            firstInputDelay: Math.random() * 100 + 10,
            timeToInteractive: Math.random() * 2000 + 800,
            memoryUsage: Math.random() * 50 + 10,
            networkLatency: Math.random() * 100 + 20,
            errorRate: Math.random() * 5,
            bounceRate: Math.random() * 30 + 20,
            conversionRate: Math.random() * 15 + 5
          }));

          // Generate random alerts
          if (Math.random() < 0.1) {
            const alertTypes: PerformanceAlert['type'][] = ['warning', 'error', 'info'];
            const messages = [
              'High memory usage detected',
              'Slow page load time',
              'Network latency spike',
              'Layout shift detected',
              'Error rate increased',
              'Performance optimization available'
            ];

            const newAlert: PerformanceAlert = {
              id: Date.now().toString(),
              type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
              message: messages[Math.floor(Math.random() * messages.length)],
              timestamp: new Date(),
              resolved: false
            };

            setAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
          }
        };

        const interval = setInterval(updateMetrics, 2000);
        return () => clearInterval(interval);
      };

      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [isMonitoring]);

  const getPerformanceScore = (metric: number, thresholds: { good: number; needsImprovement: number }) => {
    if (metric <= thresholds.good) return { score: 'Good', color: 'text-green-600 bg-green-100' };
    if (metric <= thresholds.needsImprovement) return { score: 'Needs Improvement', color: 'text-yellow-600 bg-yellow-100' };
    return { score: 'Poor', color: 'text-red-600 bg-red-100' };
  };

  const getAlertIcon = (type: PerformanceAlert['type']) => {
    switch (type) {
      case 'error': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📊';
    }
  };

  const getAlertColor = (type: PerformanceAlert['type']) => {
    switch (type) {
      case 'error': return 'border-red-200 bg-red-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'info': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="font-semibold">Performance Monitor 2026</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setRealTimeData(!realTimeData)}
              className={`text-xs px-2 py-1 rounded ${
                realTimeData ? 'bg-white/20' : 'bg-white/10'
              }`}
            >
              {realTimeData ? 'Live' : 'Paused'}
            </button>
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`text-xs px-2 py-1 rounded ${
                isMonitoring ? 'bg-green-500' : 'bg-gray-500'
              }`}
            >
              {isMonitoring ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-4 space-y-4">
        {/* Core Web Vitals */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Core Web Vitals</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">LCP</div>
              <div className="text-lg font-semibold text-gray-900">
                {Math.round(metrics.largestContentfulPaint)}ms
              </div>
              <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                getPerformanceScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }).color
              }`}>
                {getPerformanceScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }).score}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">FID</div>
              <div className="text-lg font-semibold text-gray-900">
                {Math.round(metrics.firstInputDelay)}ms
              </div>
              <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                getPerformanceScore(metrics.firstInputDelay, { good: 100, needsImprovement: 300 }).color
              }`}>
                {getPerformanceScore(metrics.firstInputDelay, { good: 100, needsImprovement: 300 }).score}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">CLS</div>
              <div className="text-lg font-semibold text-gray-900">
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </div>
              <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                getPerformanceScore(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 }).color
              }`}>
                {getPerformanceScore(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 }).score}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">FCP</div>
              <div className="text-lg font-semibold text-gray-900">
                {Math.round(metrics.firstContentfulPaint)}ms
              </div>
              <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                getPerformanceScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }).color
              }`}>
                {getPerformanceScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }).score}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Additional Metrics</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">Page Load</div>
              <div className="text-lg font-semibold text-gray-900">
                {Math.round(metrics.pageLoadTime)}ms
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">Memory</div>
              <div className="text-lg font-semibold text-gray-900">
                {metrics.memoryUsage.toFixed(1)}MB
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">Network</div>
              <div className="text-lg font-semibold text-gray-900">
                {Math.round(metrics.networkLatency)}ms
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">Errors</div>
              <div className="text-lg font-semibold text-gray-900">
                {metrics.errorRate.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-gray-700">Alerts</h4>
              <button
                onClick={clearAllAlerts}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Clear All
              </button>
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {alerts.filter(alert => !alert.resolved).map((alert) => (
                <div
                  key={alert.id}
                  className={`p-2 rounded-lg border ${getAlertColor(alert.type)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-2">
                      <span className="text-sm">{getAlertIcon(alert.type)}</span>
                      <div className="flex-1">
                        <p className="text-xs text-gray-700">{alert.message}</p>
                        <p className="text-xs text-gray-500">
                          {alert.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => resolveAlert(alert.id)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Score */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Overall Score</span>
            <span className="text-2xl font-bold text-blue-600">92</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">Excellent performance</p>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor2026;