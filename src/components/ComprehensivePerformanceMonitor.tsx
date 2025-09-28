import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  resolved: boolean;
}

interface ComprehensivePerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
}

const ComprehensivePerformanceMonitor: React.FC<ComprehensivePerformanceMonitorProps> = ({ 
  isVisible, 
  onClose 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    bundleSize: 0,
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0
  });

  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    const measureFCP = () => {
      return new Promise<number>((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          resolve(fcpEntry ? fcpEntry.startTime : 0);
        });
        observer.observe({ entryTypes: ['paint'] });
      });
    };

    const measureLCP = () => {
      return new Promise<number>((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry ? lastEntry.startTime : 0);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      });
    };

    const measureCLS = () => {
      return new Promise<number>((resolve) => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          resolve(clsValue);
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      });
    };

    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation ? navigation.responseStart - navigation.requestStart : 0;
    };

    const measureBundleSize = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsResources = resources.filter(resource => 
        resource.name.includes('.js') && !resource.name.includes('node_modules')
      );
      return jsResources.reduce((total, resource) => total + (resource.transferSize || 0), 0) / 1024;
    };

    const measureLoadTime = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation ? navigation.loadEventEnd - navigation.navigationStart : 0;
    };

    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        return memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }
      return 0;
    };

    // Run all measurements
    Promise.all([
      measureFCP(),
      measureLCP(),
      measureCLS(),
      Promise.resolve(measureTTFB()),
      Promise.resolve(measureBundleSize()),
      Promise.resolve(measureLoadTime()),
      Promise.resolve(measureMemoryUsage()),
      Promise.resolve(0) // CPU usage placeholder
    ]).then(([fcp, lcp, cls, ttfb, bundleSize, loadTime, memoryUsage, cpuUsage]) => {
      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid: 0, // FID requires user interaction
        cls,
        ttfb,
        bundleSize,
        loadTime,
        memoryUsage,
        cpuUsage
      };

      setMetrics(newMetrics);
      setHistory(prev => [...prev.slice(-9), newMetrics]);

      // Check for performance issues and create alerts
      checkPerformanceIssues(newMetrics);
    });
  }, []);

  const checkPerformanceIssues = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: PerformanceAlert[] = [];

    if (currentMetrics.fcp > 1800) {
      newAlerts.push({
        id: `fcp-${Date.now()}`,
        type: 'warning',
        message: `First Contentful Paint is ${currentMetrics.fcp.toFixed(0)}ms (should be < 1800ms)`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.lcp > 2500) {
      newAlerts.push({
        id: `lcp-${Date.now()}`,
        type: 'warning',
        message: `Largest Contentful Paint is ${currentMetrics.lcp.toFixed(0)}ms (should be < 2500ms)`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.cls > 0.1) {
      newAlerts.push({
        id: `cls-${Date.now()}`,
        type: 'warning',
        message: `Cumulative Layout Shift is ${currentMetrics.cls.toFixed(3)} (should be < 0.1)`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.ttfb > 600) {
      newAlerts.push({
        id: `ttfb-${Date.now()}`,
        type: 'warning',
        message: `Time to First Byte is ${currentMetrics.ttfb.toFixed(0)}ms (should be < 600ms)`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.bundleSize > 500) {
      newAlerts.push({
        id: `bundle-${Date.now()}`,
        type: 'info',
        message: `Bundle size is ${currentMetrics.bundleSize.toFixed(1)}KB (consider code splitting)`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (currentMetrics.memoryUsage > 50) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'warning',
        message: `Memory usage is ${currentMetrics.memoryUsage.toFixed(1)}MB (monitor for leaks)`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
    }
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measurePerformance();
    
    const interval = setInterval(() => {
      measurePerformance();
    }, 5000);

    return () => clearInterval(interval);
  }, [measurePerformance]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  const resolveAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  }, []);

  const getMetricColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error': return '🔴';
      case 'warning': return '🟡';
      case 'info': return '🔵';
      default: return '⚪';
    }
  };

  useEffect(() => {
    if (isVisible && isMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [isVisible, isMonitoring, startMonitoring]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Comprehensive Performance Monitor</h2>
              <p className="text-gray-600 mt-1">Real-time performance metrics and monitoring</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-600">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={isMonitoring ? stopMonitoring : startMonitoring}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isMonitoring
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
            <button
              onClick={measurePerformance}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Measure Now
            </button>
            <button
              onClick={clearAlerts}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Clear Alerts
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Core Web Vitals */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Core Web Vitals</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">First Contentful Paint</div>
                  <div className={`text-2xl font-bold ${getMetricColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}`}>
                    {metrics.fcp.toFixed(0)}ms
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Largest Contentful Paint</div>
                  <div className={`text-2xl font-bold ${getMetricColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                    {metrics.lcp.toFixed(0)}ms
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Cumulative Layout Shift</div>
                  <div className={`text-2xl font-bold ${getMetricColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
                    {metrics.cls.toFixed(3)}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Time to First Byte</div>
                  <div className={`text-2xl font-bold ${getMetricColor(metrics.ttfb, { good: 600, needsImprovement: 1500 })}`}>
                    {metrics.ttfb.toFixed(0)}ms
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Bundle Size</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {metrics.bundleSize.toFixed(1)}KB
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Load Time</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {metrics.loadTime.toFixed(0)}ms
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Memory Usage</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {metrics.memoryUsage.toFixed(1)}MB
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">CPU Usage</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {metrics.cpuUsage.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Alerts</h3>
              <div className="space-y-2">
                {alerts.filter(alert => !alert.resolved).map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.type === 'error' ? 'bg-red-50 border-red-400' :
                      alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                      'bg-blue-50 border-blue-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getAlertIcon(alert.type)}</span>
                        <span className="text-sm text-gray-600">
                          {alert.timestamp.toLocaleTimeString()}
                        </span>
                        <span className="text-sm font-medium">{alert.message}</span>
                      </div>
                      <button
                        onClick={() => resolveAlert(alert.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ✓
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ComprehensivePerformanceMonitor;