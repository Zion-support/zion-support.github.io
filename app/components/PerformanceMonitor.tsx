import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  totalBlockingTime?: number;
  speedIndex?: number;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableAlerts?: boolean;
  alertThresholds?: {
    loadTime?: number;
    firstContentfulPaint?: number;
    largestContentfulPaint?: number;
    firstInputDelay?: number;
    cumulativeLayoutShift?: number;
  };
  onPerformanceUpdate?: (metrics: PerformanceMetrics) => void;
  onAlert?: (alert: { type: string; message: string; value: number; threshold: number }) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableAlerts = true,
  alertThresholds = {
    loadTime: 3000,
    firstContentfulPaint: 2000,
    largestContentfulPaint: 2500,
    firstInputDelay: 100,
    cumulativeLayoutShift: 0.1
  },
  onPerformanceUpdate,
  onAlert
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<Array<{ type: string; message: string; value: number; threshold: number; timestamp: number }>>([]);

  const getPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return {};
    }

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = window.performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = window.performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
    
    const newMetrics: PerformanceMetrics = {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : undefined,
      firstContentfulPaint: fcp ? fcp.startTime : undefined,
      largestContentfulPaint: lcp ? lcp.startTime : undefined,
      timeToFirstByte: navigation ? navigation.responseStart - navigation.requestStart : undefined,
    };

    // Get Core Web Vitals if available
    if ('web-vitals' in window) {
      // This would be populated by the web-vitals library
      const vitals = (window as any)['web-vitals'];
      if (vitals) {
        newMetrics.firstInputDelay = vitals.fid;
        newMetrics.cumulativeLayoutShift = vitals.cls;
        newMetrics.totalBlockingTime = vitals.tbt;
        newMetrics.speedIndex = vitals.si;
      }
    }

    return newMetrics;
  }, []);

  const checkAlerts = useCallback((newMetrics: PerformanceMetrics) => {
    if (!enableAlerts) return;

    const newAlerts: Array<{ type: string; message: string; value: number; threshold: number; timestamp: number }> = [];

    Object.entries(alertThresholds).forEach(([key, threshold]) => {
      const value = newMetrics[key as keyof PerformanceMetrics] as number;
      if (value !== undefined && value > threshold) {
        const alert = {
          type: key,
          message: `${key} exceeded threshold: ${value.toFixed(2)}ms > ${threshold}ms`,
          value,
          threshold,
          timestamp: Date.now()
        };
        newAlerts.push(alert);
        onAlert?.(alert);
      }
    });

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts].slice(-10)); // Keep only last 10 alerts
    }
  }, [enableAlerts, alertThresholds, onAlert]);

  const updateMetrics = useCallback(() => {
    const newMetrics = getPerformanceMetrics();
    setMetrics(newMetrics);
    onPerformanceUpdate?.(newMetrics);
    checkAlerts(newMetrics);
  }, [getPerformanceMetrics, onPerformanceUpdate, checkAlerts]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    // Initial metrics
    updateMetrics();

    // Set up periodic monitoring
    const interval = setInterval(updateMetrics, 5000); // Check every 5 seconds

    // Monitor for performance changes
    const observer = new PerformanceObserver((list) => {
      updateMetrics();
    });

    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    setIsMonitoring(true);

    return () => {
      clearInterval(interval);
      observer.disconnect();
      setIsMonitoring(false);
    };
  }, [enableRealTimeMonitoring, updateMetrics]);

  const formatMetric = (value: number | undefined, unit: string = 'ms') => {
    if (value === undefined) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  const getMetricColor = (value: number | undefined, threshold: number) => {
    if (value === undefined) return 'text-gray-400';
    return value > threshold ? 'text-red-400' : value > threshold * 0.8 ? 'text-yellow-400' : 'text-green-400';
  };

  if (!enableRealTimeMonitoring) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs max-w-xs z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`}></div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getMetricColor(metrics.loadTime, alertThresholds.loadTime || 3000)}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getMetricColor(metrics.firstContentfulPaint, alertThresholds.firstContentfulPaint || 2000)}>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getMetricColor(metrics.largestContentfulPaint, alertThresholds.largestContentfulPaint || 2500)}>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getMetricColor(metrics.firstInputDelay, alertThresholds.firstInputDelay || 100)}>
            {formatMetric(metrics.firstInputDelay)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getMetricColor(metrics.cumulativeLayoutShift, alertThresholds.cumulativeLayoutShift || 0.1)}>
            {formatMetric(metrics.cumulativeLayoutShift, '')}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className="text-gray-300">
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="mt-2 pt-2 border-t border-gray-600">
          <div className="text-red-400 font-semibold mb-1">Alerts:</div>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {alerts.slice(-3).map((alert, index) => (
              <div key={index} className="text-red-300 text-xs">
                {alert.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
