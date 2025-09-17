import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  errorRate: number;
  userEngagement: number;
  conversionRate: number;
}

const AdvancedPerformanceMonitor2025: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
    errorRate: 0,
    userEngagement: 0,
    conversionRate: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    // Simulate real-time performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.random() * 2000 + 500,
        renderTime: Math.random() * 100 + 10,
        memoryUsage: Math.random() * 100,
        bundleSize: Math.random() * 5000 + 1000,
        cacheHitRate: Math.random() * 100,
        errorRate: Math.random() * 5,
        userEngagement: Math.random() * 100,
        conversionRate: Math.random() * 20
      }));

      // Generate alerts based on performance
      const newAlerts: string[] = [];
      if (metrics.loadTime > 3000) newAlerts.push('High load time detected');
      if (metrics.memoryUsage > 80) newAlerts.push('High memory usage');
      if (metrics.errorRate > 2) newAlerts.push('Error rate above threshold');
      if (metrics.cacheHitRate < 70) newAlerts.push('Low cache hit rate');
      
      setAlerts(newAlerts);
    }, 2000);

    return () => clearInterval(interval);
  }, [metrics]);

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.warning) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return '✅';
    if (value <= thresholds.warning) return '⚠️';
    return '❌';
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          📊 Performance Monitor
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">🚀 Performance Monitor 2025</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <h4 className="text-red-800 font-semibold mb-2">⚠️ Alerts</h4>
            {alerts.map((alert, index) => (
              <div key={index} className="text-red-700 text-sm">{alert}</div>
            ))}
          </div>
        )}

        {/* Performance Metrics */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Load Time</span>
            <span className={`text-sm font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>
              {getPerformanceIcon(metrics.loadTime, { good: 1000, warning: 2000 })} {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Render Time</span>
            <span className={`text-sm font-bold ${getPerformanceColor(metrics.renderTime, { good: 50, warning: 100 })}`}>
              {getPerformanceIcon(metrics.renderTime, { good: 50, warning: 100 })} {metrics.renderTime.toFixed(1)}ms
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Memory Usage</span>
            <span className={`text-sm font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 50, warning: 80 })}`}>
              {getPerformanceIcon(metrics.memoryUsage, { good: 50, warning: 80 })} {metrics.memoryUsage.toFixed(1)}%
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Bundle Size</span>
            <span className={`text-sm font-bold ${getPerformanceColor(metrics.bundleSize, { good: 2000, warning: 4000 })}`}>
              {getPerformanceIcon(metrics.bundleSize, { good: 2000, warning: 4000 })} {(metrics.bundleSize / 1000).toFixed(1)}KB
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Cache Hit Rate</span>
            <span className={`text-sm font-bold ${getPerformanceColor(100 - metrics.cacheHitRate, { good: 20, warning: 40 })}`}>
              {getPerformanceIcon(100 - metrics.cacheHitRate, { good: 20, warning: 40 })} {metrics.cacheHitRate.toFixed(1)}%
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Error Rate</span>
            <span className={`text-sm font-bold ${getPerformanceColor(metrics.errorRate, { good: 1, warning: 2 })}`}>
              {getPerformanceIcon(metrics.errorRate, { good: 1, warning: 2 })} {metrics.errorRate.toFixed(2)}%
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">User Engagement</span>
            <span className={`text-sm font-bold ${getPerformanceColor(100 - metrics.userEngagement, { good: 20, warning: 40 })}`}>
              {getPerformanceIcon(100 - metrics.userEngagement, { good: 20, warning: 40 })} {metrics.userEngagement.toFixed(1)}%
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Conversion Rate</span>
            <span className={`text-sm font-bold ${getPerformanceColor(20 - metrics.conversionRate, { good: 5, warning: 10 })}`}>
              {getPerformanceIcon(20 - metrics.conversionRate, { good: 5, warning: 10 })} {metrics.conversionRate.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Performance Score */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Overall Performance</span>
            <span className="text-lg font-bold text-purple-600">
              {Math.round((100 - (metrics.loadTime / 50) - (metrics.renderTime * 2) - (metrics.memoryUsage / 2) - (metrics.errorRate * 10)))}/100
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(0, Math.min(100, 100 - (metrics.loadTime / 50) - (metrics.renderTime * 2) - (metrics.memoryUsage / 2) - (metrics.errorRate * 10)))}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
            Optimize
          </button>
          <button className="flex-1 bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 transition-colors">
            Cache Clear
          </button>
          <button className="flex-1 bg-purple-500 text-white px-3 py-2 rounded text-sm hover:bg-purple-600 transition-colors">
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor2025;