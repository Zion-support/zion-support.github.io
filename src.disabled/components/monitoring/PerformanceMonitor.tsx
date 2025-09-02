import React, { useState, useEffect, useCallback } from 'react';
import {
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  memoryUsage: number;
  networkLatency: number;
  errorRate: number;
  throughput: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  resolved: boolean;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    memoryUsage: 0,
    networkLatency: 0,
    errorRate: 0,
    throughput: 0
  });

  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  // Performance thresholds
  const thresholds = {
    loadTime: 3000, // 3 seconds
    firstContentfulPaint: 1800, // 1.8 seconds
    largestContentfulPaint: 2500, // 2.5 seconds
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100, // 100ms
    memoryUsage: 50 * 1024 * 1024, // 50MB
    networkLatency: 200, // 200ms
    errorRate: 5, // 5%
    throughput: 1000 // 1000 requests/min
  };

  const collectMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Collect Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
    const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) => {
      if (!(entry as any).hadRecentInput) {
        acc += (entry as any).value;
      }
      return acc;
    }, 0);

    // Memory usage (if available)
    const memory = (performance as any).memory;
    
    // Network latency simulation
    const networkLatency = Math.random() * 100 + 50;

    const newMetrics: PerformanceMetrics = {
      loadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: cls,
      firstInputDelay: Math.random() * 50 + 10, // Simulated
      memoryUsage: memory ? memory.usedJSHeapSize : 0,
      networkLatency,
      errorRate: Math.random() * 2, // Simulated
      throughput: Math.random() * 500 + 800 // Simulated
    };

    setMetrics(newMetrics);
    setHistory(prev => [...prev.slice(-9), newMetrics]);

    // Check for alerts
    checkAlerts(newMetrics);
  }, []);

  const checkAlerts = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: PerformanceAlert[] = [];

    if (currentMetrics.loadTime > thresholds.loadTime) {
      newAlerts.push({
        id: 'load-time',
        type: 'warning',
        message: `Page load time (${Math.round(currentMetrics.loadTime)}ms) exceeds threshold (${thresholds.loadTime}ms)`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.firstContentfulPaint > thresholds.firstContentfulPaint) {
      newAlerts.push({
        id: 'fcp',
        type: 'warning',
        message: `First Contentful Paint (${Math.round(currentMetrics.firstContentfulPaint)}ms) is slow`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift) {
      newAlerts.push({
        id: 'cls',
        type: 'error',
        message: `Cumulative Layout Shift (${currentMetrics.cumulativeLayoutShift.toFixed(3)}) is high`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.errorRate > thresholds.errorRate) {
      newAlerts.push({
        id: 'error-rate',
        type: 'error',
        message: `Error rate (${currentMetrics.errorRate.toFixed(1)}%) is above threshold`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev.slice(0, 9)]);
    }
  }, [thresholds]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    collectMetrics();
    const interval = setInterval(collectMetrics, 5000); // Collect every 5 seconds
    return () => clearInterval(interval);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  };

  const getMetricStatus = (value: number, threshold: number, reverse = false) => {
    const isGood = reverse ? value < threshold : value < threshold;
    return {
      status: isGood ? 'good' : 'warning',
      color: isGood ? 'text-green-500' : 'text-yellow-500',
      icon: isGood ? CheckCircle : AlertTriangle
    };
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    return `${Math.round(ms)}ms`;
  };

  useEffect(() => {
    if (isMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [isMonitoring, collectMetrics]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Performance Monitor</h1>
              <p className="text-gray-600 mt-1">Real-time performance metrics and alerts</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
                isMonitoring ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                }`} />
                <span className="text-sm font-medium">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <button
                onClick={isMonitoring ? stopMonitoring : () => setIsMonitoring(true)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isMonitoring
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {isMonitoring ? 'Stop' : 'Start'} Monitoring
              </button>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Alerts</h2>
            <div className="space-y-2">
              {alerts.filter(alert => !alert.resolved).slice(0, 5).map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'error' 
                      ? 'bg-red-50 border-red-500' 
                      : alert.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-500'
                      : 'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {alert.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                      ) : alert.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <Info className="w-5 h-5 text-blue-500" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                        <p className="text-xs text-gray-500">
                          {alert.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => resolveAlert(alert.id)}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Resolve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Load Time */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Load Time</p>
                <p className="text-2xl font-bold text-gray-900">{formatTime(metrics.loadTime)}</p>
                <div className={`flex items-center mt-2 ${
                  getMetricStatus(metrics.loadTime, thresholds.loadTime).color
                }`}>
                  {React.createElement(getMetricStatus(metrics.loadTime, thresholds.loadTime).icon, {
                    className: "w-4 h-4 mr-1"
                  })}
                  <span className="text-sm">
                    {metrics.loadTime < thresholds.loadTime ? 'Good' : 'Slow'}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* First Contentful Paint */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">First Contentful Paint</p>
                <p className="text-2xl font-bold text-gray-900">{formatTime(metrics.firstContentfulPaint)}</p>
                <div className={`flex items-center mt-2 ${
                  getMetricStatus(metrics.firstContentfulPaint, thresholds.firstContentfulPaint).color
                }`}>
                  {React.createElement(getMetricStatus(metrics.firstContentfulPaint, thresholds.firstContentfulPaint).icon, {
                    className: "w-4 h-4 mr-1"
                  })}
                  <span className="text-sm">
                    {metrics.firstContentfulPaint < thresholds.firstContentfulPaint ? 'Good' : 'Slow'}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* Cumulative Layout Shift */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Layout Shift</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.cumulativeLayoutShift.toFixed(3)}</p>
                <div className={`flex items-center mt-2 ${
                  getMetricStatus(metrics.cumulativeLayoutShift, thresholds.cumulativeLayoutShift).color
                }`}>
                  {React.createElement(getMetricStatus(metrics.cumulativeLayoutShift, thresholds.cumulativeLayoutShift).icon, {
                    className: "w-4 h-4 mr-1"
                  })}
                  <span className="text-sm">
                    {metrics.cumulativeLayoutShift < thresholds.cumulativeLayoutShift ? 'Stable' : 'Unstable'}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-purple-100">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Memory Usage */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Memory Usage</p>
                <p className="text-2xl font-bold text-gray-900">{formatBytes(metrics.memoryUsage)}</p>
                <div className={`flex items-center mt-2 ${
                  getMetricStatus(metrics.memoryUsage, thresholds.memoryUsage).color
                }`}>
                  {React.createElement(getMetricStatus(metrics.memoryUsage, thresholds.memoryUsage).icon, {
                    className: "w-4 h-4 mr-1"
                  })}
                  <span className="text-sm">
                    {metrics.memoryUsage < thresholds.memoryUsage ? 'Normal' : 'High'}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-orange-100">
                <HardDrive className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Network Latency */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Network Latency</p>
                <p className="text-2xl font-bold text-gray-900">{formatTime(metrics.networkLatency)}</p>
                <div className={`flex items-center mt-2 ${
                  getMetricStatus(metrics.networkLatency, thresholds.networkLatency).color
                }`}>
                  {React.createElement(getMetricStatus(metrics.networkLatency, thresholds.networkLatency).icon, {
                    className: "w-4 h-4 mr-1"
                  })}
                  <span className="text-sm">
                    {metrics.networkLatency < thresholds.networkLatency ? 'Fast' : 'Slow'}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-cyan-100">
                <Wifi className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </div>

          {/* Error Rate */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Error Rate</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.errorRate.toFixed(1)}%</p>
                <div className={`flex items-center mt-2 ${
                  getMetricStatus(metrics.errorRate, thresholds.errorRate).color
                }`}>
                  {React.createElement(getMetricStatus(metrics.errorRate, thresholds.errorRate).icon, {
                    className: "w-4 h-4 mr-1"
                  })}
                  <span className="text-sm">
                    {metrics.errorRate < thresholds.errorRate ? 'Low' : 'High'}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-red-100">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Performance History Chart */}
        {history.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
            <div className="h-64 flex items-end space-x-2">
              {history.map((metric, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${(metric.loadTime / 5000) * 200}px` }}
                    title={`Load Time: ${formatTime(metric.loadTime)}`}
                  />
                  <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;