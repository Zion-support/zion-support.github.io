import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  memoryUsage?: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  alertThresholds?: {
    loadTime?: number;
    firstContentfulPaint?: number;
    largestContentfulPaint?: number;
    firstInputDelay?: number;
    cumulativeLayoutShift?: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  alertThresholds = {
    loadTime: 3000,
    firstContentfulPaint: 2000,
    largestContentfulPaint: 4000,
    firstInputDelay: 100,
    cumulativeLayoutShift: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const getPerformanceMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const largestContentfulPaint = 0; // Will be updated by LCP observer
    
    // Get memory usage if available
    const memoryUsage = (performance as any).memory ? (performance as any).memory.usedJSHeapSize : undefined;

    return {
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay: 0, // Will be updated by FID observer
      cumulativeLayoutShift: 0, // Will be updated by CLS observer
      timeToInteractive: 0,
      memoryUsage
    };
  }, []);

  const checkThresholds = useCallback((currentMetrics: PerformanceMetrics) => {
    const alerts: string[] = [];

    if (currentMetrics.loadTime > (alertThresholds.loadTime || 3000)) {
      alerts.push(`Load time is ${currentMetrics.loadTime}ms (threshold: ${alertThresholds.loadTime}ms)`);
    }

    if (currentMetrics.firstContentfulPaint > (alertThresholds.firstContentfulPaint || 2000)) {
      alerts.push(`First Contentful Paint is ${currentMetrics.firstContentfulPaint}ms (threshold: ${alertThresholds.firstContentfulPaint}ms)`);
    }

    if (currentMetrics.largestContentfulPaint > (alertThresholds.largestContentfulPaint || 4000)) {
      alerts.push(`Largest Contentful Paint is ${currentMetrics.largestContentfulPaint}ms (threshold: ${alertThresholds.largestContentfulPaint}ms)`);
    }

    if (currentMetrics.firstInputDelay > (alertThresholds.firstInputDelay || 100)) {
      alerts.push(`First Input Delay is ${currentMetrics.firstInputDelay}ms (threshold: ${alertThresholds.firstInputDelay}ms)`);
    }

    if (currentMetrics.cumulativeLayoutShift > (alertThresholds.cumulativeLayoutShift || 0.1)) {
      alerts.push(`Cumulative Layout Shift is ${currentMetrics.cumulativeLayoutShift} (threshold: ${alertThresholds.cumulativeLayoutShift})`);
    }

    if (alerts.length > 0) {
      console.warn('Performance alerts:', alerts);
    }
  }, [alertThresholds]);

  const updateMetrics = useCallback(() => {
    const currentMetrics = getPerformanceMetrics();
    setMetrics(currentMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(currentMetrics);
    }
    
    checkThresholds(currentMetrics);
  }, [getPerformanceMetrics, onMetricsUpdate, checkThresholds]);

  useEffect(() => {
    // Initial metrics collection
    const timer = setTimeout(() => {
      updateMetrics();
      setIsMonitoring(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [updateMetrics]);

  useEffect(() => {
    if (!enableRealTimeMonitoring || !isMonitoring) return;

    // Set up Web Vitals observers
    const setupWebVitals = () => {
      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: lastEntry.startTime
            }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              setMetrics(prev => ({
                ...prev,
                firstInputDelay: entry.processingStart - entry.startTime
              }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({
                  ...prev,
                  cumulativeLayoutShift: clsValue
                }));
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          return () => {
            lcpObserver.disconnect();
            fidObserver.disconnect();
            clsObserver.disconnect();
          };
        } catch (error) {
          console.warn('Web Vitals observers not supported:', error);
        }
      }
    };

    const cleanup = setupWebVitals();

    // Periodic metrics update
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [enableRealTimeMonitoring, isMonitoring, updateMetrics]);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback(() => {
    const suggestions: string[] = [];

    if (metrics.loadTime > 3000) {
      suggestions.push('Consider code splitting and lazy loading to reduce initial bundle size');
    }

    if (metrics.firstContentfulPaint > 2000) {
      suggestions.push('Optimize critical rendering path and reduce render-blocking resources');
    }

    if (metrics.largestContentfulPaint > 4000) {
      suggestions.push('Optimize images and largest content elements');
    }

    if (metrics.firstInputDelay > 100) {
      suggestions.push('Reduce JavaScript execution time and break up long tasks');
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      suggestions.push('Ensure images and ads have size attributes to prevent layout shifts');
    }

    return suggestions;
  }, [metrics]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono max-w-sm z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime.toFixed(0)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
        <div>FID: {metrics.firstInputDelay.toFixed(0)}ms</div>
        <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
        {metrics.memoryUsage && (
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</div>
        )}
      </div>
      
      {getOptimizationSuggestions().length > 0 && (
        <div className="mt-2 pt-2 border-t border-gray-600">
          <div className="font-bold text-yellow-400">Suggestions:</div>
          <ul className="text-xs space-y-1">
            {getOptimizationSuggestions().map((suggestion, index) => (
              <li key={index} className="text-yellow-300">• {suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;