import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Activity, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
  loadTime?: number;
  memoryUsage?: number;
}

interface PerformanceThresholds {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  memoryUsage: number;
}

interface Alert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: string;
  value: number;
  threshold: number;
  timestamp: Date;
}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [thresholds, setThresholds] = useState<PerformanceThresholds>({
    loadTime: 3000,
    firstContentfulPaint: 1800,
    largestContentfulPaint: 2500,
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100,
    memoryUsage: 50 * 1024 * 1024 // 50MB
  });

  const collectMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Collect Web Vitals
    if ('performance' in window) {
      const perfEntries = performance.getEntriesByType('navigation');
      if (perfEntries.length > 0) {
        const navEntry = perfEntries[0] as PerformanceNavigationTiming;
        newMetrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
        newMetrics.ttfb = navEntry.responseStart - navEntry.requestStart;
      }

      // Collect LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Collect FCP
      const fcpEntries = performance.getEntriesByType('paint');
      const fcpEntry = fcpEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        newMetrics.fcp = fcpEntry.startTime;
      }
    }

    // Collect memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      newMetrics.memoryUsage = memory.usedJSHeapSize;
    }

    setMetrics(newMetrics);
  }, []);

  const checkThresholds = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: Alert[] = [];

    Object.entries(currentMetrics).forEach(([key, value]) => {
      if (value === undefined) return;

      const threshold = thresholds[key as keyof PerformanceThresholds];
      if (threshold && value > threshold) {
        newAlerts.push({
          id: `${key}-${Date.now()}`,
          type: value > threshold * 1.5 ? 'error' : 'warning',
          message: `${key} exceeded threshold: ${value} > ${threshold}`,
          metric: key,
          value,
          threshold,
          timestamp: new Date()
        });
      }
    });

    setAlerts(prev => [...prev, ...newAlerts].slice(-10)); // Keep last 10 alerts
  }, [thresholds]);

  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > thresholds.largestContentfulPaint) {
      score -= 20;
    }
    if (metrics.fcp && metrics.fcp > thresholds.firstContentfulPaint) {
      score -= 15;
    }
    if (metrics.cls && metrics.cls > thresholds.cumulativeLayoutShift) {
      score -= 25;
    }
    if (metrics.fid && metrics.fid > thresholds.firstInputDelay) {
      score -= 20;
    }
    if (metrics.loadTime && metrics.loadTime > thresholds.loadTime) {
      score -= 20;
    }

    return Math.max(0, score);
  }, [metrics, thresholds]);

  const formatValue = useCallback((value: number, unit: string = 'ms') => {
    if (unit === 'bytes') {
      return `${(value / 1024 / 1024).toFixed(2)} MB`;
    }
    return `${value.toFixed(2)} ${unit}`;
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);
    return () => clearInterval(interval);
  }, [isVisible, collectMetrics]);

  useEffect(() => {
    if (Object.keys(metrics).length > 0) {
      checkThresholds(metrics);
    }
  }, [metrics, checkThresholds]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <Activity className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border p-6 max-w-md w-full max-h-96 overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Performance Score</span>
          <span className={`text-lg font-bold ${
            performanceScore >= 90 ? 'text-green-600' :
            performanceScore >= 70 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {performanceScore}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              performanceScore >= 90 ? 'bg-green-500' :
              performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          />
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {metrics.lcp && (
          <div className="flex justify-between text-sm">
            <span>LCP:</span>
            <span>{formatValue(metrics.lcp)}</span>
          </div>
        )}
        {metrics.fcp && (
          <div className="flex justify-between text-sm">
            <span>FCP:</span>
            <span>{formatValue(metrics.fcp)}</span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between text-sm">
            <span>CLS:</span>
            <span>{metrics.cls.toFixed(3)}</span>
          </div>
        )}
        {metrics.loadTime && (
          <div className="flex justify-between text-sm">
            <span>Load Time:</span>
            <span>{formatValue(metrics.loadTime)}</span>
          </div>
        )}
        {metrics.memoryUsage && (
          <div className="flex justify-between text-sm">
            <span>Memory:</span>
            <span>{formatValue(metrics.memoryUsage, 'bytes')}</span>
          </div>
        )}
      </div>

      {alerts.length > 0 && (
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Alerts</h4>
          <div className="space-y-1">
            {alerts.slice(-3).map(alert => (
              <div key={alert.id} className="flex items-center text-xs">
                {alert.type === 'error' ? (
                  <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                ) : (
                  <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                )}
                <span className="text-gray-600 truncate">{alert.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;