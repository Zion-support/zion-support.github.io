import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage: number;
  memoryLimit: number;
  connectionSpeed: string;
  deviceType: string;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  enableAlerts?: boolean;
  alertThresholds?: {
    loadTime: number;
    memoryUsage: number;
    cumulativeLayoutShift: number;
  };
  onPerformanceIssue?: (metric: string, value: number, threshold: number) => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  enableAlerts = true,
  alertThresholds = {
    loadTime: 3000,
    memoryUsage: 80,
    cumulativeLayoutShift: 0.1
  },
  onPerformanceIssue
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(showDetails);
  const [alerts, setAlerts] = useState<string[]>([]);

  const collectMetrics = useCallback(() => {
    const performance = window.performance;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    // Get Core Web Vitals
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0;
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;

    // Get LCP
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    const largestContentfulPaint = lcpEntries[lcpEntries.length - 1]?.startTime || 0;

    // Get FID
    const fidEntries = performance.getEntriesByType('first-input');
    const firstInputDelay = (fidEntries[0] as any)?.processingStart ? 
      (fidEntries[0] as any).processingStart - fidEntries[0].startTime : 0;

    // Get CLS
    const clsEntries = performance.getEntriesByType('layout-shift');
    const cumulativeLayoutShift = clsEntries.reduce((cls, entry) => {
      return cls + (entry as any).value;
    }, 0);

    // Get memory usage
    const memory = (performance as any).memory;
    const memoryUsage = memory ? (memory.usedJSHeapSize / 1024 / 1024) : 0;
    const memoryLimit = memory ? (memory.jsHeapSizeLimit / 1024 / 1024) : 0;

    // Get connection speed
    const connection = (navigator as any).connection;
    const connectionSpeed = connection ? connection.effectiveType : 'unknown';

    // Determine device type
    const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

    const newMetrics: PerformanceMetrics = {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      firstPaint,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay,
      cumulativeLayoutShift,
      memoryUsage,
      memoryLimit,
      connectionSpeed,
      deviceType
    };

    setMetrics(newMetrics);

    // Check for performance issues
    if (enableAlerts) {
      const newAlerts: string[] = [];
      
      if (newMetrics.loadTime > alertThresholds.loadTime) {
        newAlerts.push(`Slow load time: ${newMetrics.loadTime.toFixed(0)}ms`);
        onPerformanceIssue?.('loadTime', newMetrics.loadTime, alertThresholds.loadTime);
      }
      
      if (newMetrics.memoryUsage > alertThresholds.memoryUsage) {
        newAlerts.push(`High memory usage: ${newMetrics.memoryUsage.toFixed(1)}MB`);
        onPerformanceIssue?.('memoryUsage', newMetrics.memoryUsage, alertThresholds.memoryUsage);
      }
      
      if (newMetrics.cumulativeLayoutShift > alertThresholds.cumulativeLayoutShift) {
        newAlerts.push(`High layout shift: ${newMetrics.cumulativeLayoutShift.toFixed(3)}`);
        onPerformanceIssue?.('cumulativeLayoutShift', newMetrics.cumulativeLayoutShift, alertThresholds.cumulativeLayoutShift);
      }
      
      setAlerts(newAlerts);
    }
  }, [enableAlerts, alertThresholds, onPerformanceIssue]);

  useEffect(() => {
    // Collect initial metrics
    if (window.performance) {
      collectMetrics();
    }

    // Set up periodic collection
    const interval = setInterval(collectMetrics, 5000);

    // Listen for performance events
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        collectMetrics();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [collectMetrics]);

  const formatTime = (ms: number) => `${ms.toFixed(0)}ms`;
  const formatMemory = (mb: number) => `${mb.toFixed(1)}MB`;

  const getPerformanceScore = (metrics: PerformanceMetrics) => {
    let score = 100;
    
    // Deduct points for poor performance
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1500) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 15;
    if (metrics.firstInputDelay > 100) score -= 10;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    if (metrics.memoryUsage > 50) score -= 10;
    
    return Math.max(0, score);
  };

  if (!metrics) {
    return null;
  }

  const score = getPerformanceScore(metrics);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`mb-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
          score >= 80 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : score >= 60 
            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
            : 'bg-red-500 text-white hover:bg-red-600'
        }`}
        title="Performance Monitor"
      >
        Perf: {score}
      </button>

      {/* Performance Details */}
      {isVisible && (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Overall Score</span>
              <span className={`text-lg font-bold ${
                score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {score}/100
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium text-gray-700">Core Web Vitals</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-500">FCP:</span>
                <span className="ml-1 font-mono">{formatTime(metrics.firstContentfulPaint)}</span>
              </div>
              <div>
                <span className="text-gray-500">LCP:</span>
                <span className="ml-1 font-mono">{formatTime(metrics.largestContentfulPaint)}</span>
              </div>
              <div>
                <span className="text-gray-500">FID:</span>
                <span className="ml-1 font-mono">{formatTime(metrics.firstInputDelay)}</span>
              </div>
              <div>
                <span className="text-gray-500">CLS:</span>
                <span className="ml-1 font-mono">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
              </div>
            </div>
          </div>

          {/* Load Times */}
          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium text-gray-700">Load Times</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-500">Load:</span>
                <span className="ml-1 font-mono">{formatTime(metrics.loadTime)}</span>
              </div>
              <div>
                <span className="text-gray-500">DOM Ready:</span>
                <span className="ml-1 font-mono">{formatTime(metrics.domContentLoaded)}</span>
              </div>
              <div>
                <span className="text-gray-500">First Paint:</span>
                <span className="ml-1 font-mono">{formatTime(metrics.firstPaint)}</span>
              </div>
            </div>
          </div>

          {/* Memory Usage */}
          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium text-gray-700">Memory</h4>
            <div className="text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Used:</span>
                <span className="font-mono">{formatMemory(metrics.memoryUsage)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Limit:</span>
                <span className="font-mono">{formatMemory(metrics.memoryLimit)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                <div
                  className="bg-blue-500 h-1 rounded-full"
                  style={{ width: `${(metrics.memoryUsage / metrics.memoryLimit) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* System Info */}
          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium text-gray-700">System</h4>
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-500">Device:</span>
                <span className="capitalize">{metrics.deviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Connection:</span>
                <span className="capitalize">{metrics.connectionSpeed}</span>
              </div>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-red-700">Alerts</h4>
              <div className="space-y-1">
                {alerts.map((alert, index) => (
                  <div key={index} className="text-xs text-red-600 bg-red-50 p-2 rounded">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Refresh Button */}
          <button
            onClick={collectMetrics}
            className="w-full mt-3 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded transition-colors"
          >
            Refresh Metrics
          </button>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;