import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
  loadTime: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  showDashboard?: boolean;
  onClose?: () => void;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  onAlert?: (alert: { type: 'warning' | 'error'; message: string }) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDashboard = false, 
  onClose,
  onMetricsUpdate,
  onAlert 
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(showDashboard);
  const [alerts, setAlerts] = useState<Array<{ id: string; type: 'warning' | 'error'; message: string; timestamp: number }>>([]);

  const updateMetrics = useCallback(() => {
    const newMetrics: Partial<PerformanceMetrics> = {};

    // Get performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        newMetrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
        newMetrics.renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      }

      // Get memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize;
      }

      // Estimate bundle size
      const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const bundleSize = resourceEntries
        .filter((entry) => entry.name.includes('.js'))
        .reduce((total, entry) => total + (entry.transferSize || 0), 0);
      newMetrics.bundleSize = bundleSize;

      // Get Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              newMetrics.fcp = fcpEntry.startTime;
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              newMetrics.lcp = lastEntry.startTime;
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fidEntry = entries[0] as any;
            if (fidEntry) {
              newMetrics.fid = fidEntry.processingStart - fidEntry.startTime;
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            newMetrics.cls = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('Performance Observer not supported:', error);
        }
      }
    }

    setMetrics(prevMetrics => {
      const updatedMetrics = { ...prevMetrics, ...newMetrics };
      
      // Check for performance issues and create alerts
      if (updatedMetrics.fcp && updatedMetrics.fcp > 2500) {
        const alertId = `fcp-${Date.now()}`;
        setAlerts(prev => [...prev.filter(alert => alert.id !== alertId), {
          id: alertId,
          type: 'warning',
          message: `First Contentful Paint is slow: ${Math.round(updatedMetrics.fcp)}ms`,
          timestamp: Date.now()
        }]);
        onAlert?.({ type: 'warning', message: 'First Contentful Paint is slow' });
      }

      if (updatedMetrics.lcp && updatedMetrics.lcp > 4000) {
        const alertId = `lcp-${Date.now()}`;
        setAlerts(prev => [...prev.filter(alert => alert.id !== alertId), {
          id: alertId,
          type: 'warning',
          message: `Largest Contentful Paint is slow: ${Math.round(updatedMetrics.lcp)}ms`,
          timestamp: Date.now()
        }]);
        onAlert?.({ type: 'warning', message: 'Largest Contentful Paint is slow' });
      }

      if (updatedMetrics.fid && updatedMetrics.fid > 300) {
        const alertId = `fid-${Date.now()}`;
        setAlerts(prev => [...prev.filter(alert => alert.id !== alertId), {
          id: alertId,
          type: 'warning',
          message: `First Input Delay is high: ${Math.round(updatedMetrics.fid)}ms`,
          timestamp: Date.now()
        }]);
        onAlert?.({ type: 'warning', message: 'First Input Delay is high' });
      }

      if (updatedMetrics.cls && updatedMetrics.cls > 0.25) {
        const alertId = `cls-${Date.now()}`;
        setAlerts(prev => [...prev.filter(alert => alert.id !== alertId), {
          id: alertId,
          type: 'warning',
          message: `Cumulative Layout Shift is high: ${updatedMetrics.cls.toFixed(3)}`,
          timestamp: Date.now()
        }]);
        onAlert?.({ type: 'warning', message: 'Cumulative Layout Shift is high' });
      }

      if (updatedMetrics.memoryUsage && updatedMetrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
        const alertId = `memory-${Date.now()}`;
        setAlerts(prev => [...prev.filter(alert => alert.id !== alertId), {
          id: alertId,
          type: 'warning',
          message: `High memory usage: ${Math.round(updatedMetrics.memoryUsage / 1024 / 1024)}MB`,
          timestamp: Date.now()
        }]);
        onAlert?.({ type: 'warning', message: 'High memory usage detected' });
      }

      // Call metrics update callback
      if (onMetricsUpdate && Object.keys(updatedMetrics).length > 0) {
        onMetricsUpdate(updatedMetrics as PerformanceMetrics);
      }

      return updatedMetrics;
    });
  }, [onMetricsUpdate, onAlert]);

  useEffect(() => {
    setIsVisible(showDashboard);
  }, [showDashboard]);

  useEffect(() => {
    if (isVisible) {
      updateMetrics();
      const interval = setInterval(updateMetrics, 5000); // Update every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isVisible, updateMetrics]);

  const dismissAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Performance Monitor
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">First Contentful Paint</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {metrics.fcp && metrics.fcp <= 1800 ? 'Good' : metrics.fcp && metrics.fcp <= 3000 ? 'Needs Improvement' : 'Poor'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Largest Contentful Paint</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {metrics.lcp && metrics.lcp <= 2500 ? 'Good' : metrics.lcp && metrics.lcp <= 4000 ? 'Needs Improvement' : 'Poor'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">First Input Delay</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {metrics.fid && metrics.fid <= 100 ? 'Good' : metrics.fid && metrics.fid <= 300 ? 'Needs Improvement' : 'Poor'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Cumulative Layout Shift</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {metrics.cls && metrics.cls <= 0.1 ? 'Good' : metrics.cls && metrics.cls <= 0.25 ? 'Needs Improvement' : 'Poor'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Memory Usage</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrics.memoryUsage ? `${Math.round(metrics.memoryUsage / 1024 / 1024)}MB` : 'N/A'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Bundle Size</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrics.bundleSize ? `${Math.round(metrics.bundleSize / 1024)}KB` : 'N/A'}
              </p>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Performance Alerts</h3>
                <button
                  onClick={clearAllAlerts}
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-2">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg flex items-center justify-between ${
                      alert.type === 'error' 
                        ? 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800' 
                        : 'bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        alert.type === 'error' ? 'bg-red-500' : 'bg-yellow-500'
                      }`} />
                      <span className={`text-sm ${
                        alert.type === 'error' 
                          ? 'text-red-800 dark:text-red-200' 
                          : 'text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {alert.message}
                      </span>
                    </div>
                    <button
                      onClick={() => dismissAlert(alert.id)}
                      className={`text-xs ${
                        alert.type === 'error' 
                          ? 'text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200' 
                          : 'text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-200'
                      }`}
                    >
                      Dismiss
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={updateMetrics}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Refresh Metrics
            </button>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.reload();
                }
              }}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;