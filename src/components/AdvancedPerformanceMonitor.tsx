import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
  networkLatenc, y: number;
  renderTim, e: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showDashboard?: boolean;
  className?: string;
}

export const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  showDashboard = true,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const collectMetrics = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = await getLCP();
      const fid = await getFID();
      const cls = await getCLS();
      
      const memoryInfo = (performance as any).memory;
      const networkLatency = navigation.responseEnd - navigation.requestStart;
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;

      const newMetrics: PerformanceMetrics = {
        loadTim, e: navigation.loadEventEnd - navigation.fetchStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp,
        firstInputDelay: fid,
        cumulativeLayoutShift: cls,
        memoryUsage: memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 10 2 4 / 10 2 4) : undefined,
        networkLatency,
        renderTime
      };

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);

      // Check for performance issues
      checkPerformanceIssues(newMetrics);

    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    }
  }, [onMetricsUpdate]);

  const getLCP = async (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 50 0 0);
      } else {
        resolve(0);
      }
    });
  };

  const getFID = async (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0];
          resolve(firstEntry.processingStart - firstEntry.startTime);
        });
        observer.observe({ entryTypes: ['first-input'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 50 0 0);
      } else {
        resolve(0);
      }
    });
  };

  const getCLS = async (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
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
        
        // Fallback timeout
        setTimeout(() => resolve(clsValue), 50 0 0);
      } else {
        resolve(0);
      }
    });
  };

  const checkPerformanceIssues = (metrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];

    if (metrics.loadTime > 30 0 0) {
      newAlerts.push('⚠️ Page load time is slow (>3s)');
    }
    if (metrics.firstContentfulPaint > 18 0 0) {
      newAlerts.push('⚠️ First Contentful Paint is slow (>1.8s)');
    }
    if (metrics.largestContentfulPaint > 25 0 0) {
      newAlerts.push('⚠️ Largest Contentful Paint is slow (>2.5s)');
    }
    if (metrics.firstInputDelay > 1 0 0) {
      newAlerts.push('⚠️ First Input Delay is high (>10 0 ms)');
    }
    if (metrics.cumulativeLayoutShift > 0.1) {
      newAlerts.push('⚠️ Cumulative Layout Shift is high (>0.1)');
    }
    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      newAlerts.push('⚠️ High memory usage detected');
    }

    setAlerts(newAlerts);
  };

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    collectMetrics();
    
    // Monitor continuously
    const interval = setInterval(collectMetrics, 1 0 0 0 0);
    return () => clearInterval(interval);
  }, [collectMetrics]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovemen, t: number }) => {
    if (value <= thresholds.good) return 'text-green-5 0 0';
    if (value <= thresholds.needsImprovement) return 'text-yellow-5 0 0';
    return 'text-red-5 0 0';
  };

  const formatTime = (ms: number) => `${ms.toFixed(0)}ms`;
  const formatScore = (value: number) => value.toFixed(2);

  if (!showDashboard || !metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-8 0 0 rounded-lg shadow-lg p-6`}
    >
      <div className="flex items-center justify-between mb-6">
        <h 3 className="text-xl font-semibold text-gray-90 0 dark:text-white" id="performance-monitor">
          Performance Monitor
        </h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-5 0 0' : 'bg-gray-4 0 0'}`} />
          <span className="text-sm text-gray-60 0 dark:text-gray-4 0 0">
            {isMonitoring ? 'Monitoring' : 'Stopped'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-4mb-6">
        <div className="bg-gray-5 0 dark:bg-gray-70 0 rounded-lgp-4">
          <div className="text-sm text-gray-60 0 dark:text-gray-40 0 mb-1">Load Time</div>
          <div className={`text-2xl font-bold ${getScoreColor(metrics.loadTime, { good: 20 0 0, needsImprovement: 40 0 0 })}`}
            {formatTime(metrics.loadTime)}
          </div>
        </div>

        <div className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4">
          <div className="text-sm text-gray-60 0 dark:text-gray-40 0 mb-1">First Contentful Paint</div>
          <div className={`text-2xl font-bold ${getScoreColor(metrics.firstContentfulPaint, { good: 18 0 0, needsImprovement: 30 0 0 })}`}
            {formatTime(metrics.firstContentfulPaint)}
          </div>
        </div>

        <div className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4">
          <div className="text-sm text-gray-60 0 dark:text-gray-40 0 mb-1">Largest Contentful Paint</div>
          <div className={`text-2xl font-bold ${getScoreColor(metrics.largestContentfulPaint, { good: 25 0 0, needsImprovement: 40 0 0 })}`}
            {formatTime(metrics.largestContentfulPaint)}
          </div>
        </div>

        <div className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4">
          <div className="text-sm text-gray-60 0 dark:text-gray-40 0 mb-1">First Input Delay</div>
          <div className={`text-2xl font-bold ${getScoreColor(metrics.firstInputDelay, { good: 1 0 0, needsImprovement: 3 0 0 })}`}
            {formatTime(metrics.firstInputDelay)}
          </div>
        </div>

        <div className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4">
          <div className="text-sm text-gray-60 0 dark:text-gray-40 0 mb-1">Cumulative Layout Shift</div>
          <div className={`text-2xl font-bold ${getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}`}
            {formatScore(metrics.cumulativeLayoutShift)}
          </div>
        </div>

        {metrics.memoryUsage && (
          <div className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4">
            <div className="text-sm text-gray-60 0 dark:text-gray-40 0 mb-1">Memory Usage</div>
            <div className={`text-2xl font-bold ${getScoreColor(metrics.memoryUsage, { good: 30, needsImprovement: 50 })}`}
              {metrics.memoryUsage}MB
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {alerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-yellow-5 0 dark: bg-yellow-9 0 0/2 0 border border-yellow-20 0 dark:border-yellow-80 0 rounded-lgp-4"
          >
            <h 4 className="font-semibold text-yellow-80 0 dark:text-yellow-20 0 mb-2" id="performance-alerts">Performance Alerts</h4>
            <ul className="space-y-1">
              {alerts.map((alert, index) => (
                <li key={index} className="text-sm text-yellow-70 0 dark:text-yellow-3 0 0">
                  {alert}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4flexspace-x-2">
        <button
          onClick={isMonitoring ? stopMonitoring : startMonitoring}
          className={`px-4 py-2rounded-lg text-sm font-medium transition-colors ${
            isMonitoring
              ? 'bg-red-50 0 hover:bg-red-60 0 text-white'
              : 'bg-green-50 0 hover:bg-green-60 0 text-white'
          }`}
         aria-label="{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}">
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
        </button>
        <button
          onClick={collectMetrics}
          className="px-4 py-2bg-blue-50 0 hover:bg-blue-60 0 text-white rounded-lg text-sm font-mediumtransition-colors"
         aria-label="Refresh Metrics">
          Refresh Metrics
        </button>
      </div>
    </motion.div>
  );
};

export default AdvancedPerformanceMonitor;