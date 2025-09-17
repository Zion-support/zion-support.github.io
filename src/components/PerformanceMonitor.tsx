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
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  reportInterval = 30000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const collectMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const firstContentfulPaint = fcp ? fcp.startTime : 0;
    
    // LCP (Largest Contentful Paint) - requires observer
    let largestContentfulPaint = 0;
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          largestContentfulPaint = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported');
      }
    }
    
    // FID (First Input Delay) - requires observer
    let firstInputDelay = 0;
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }
    }
    
    // CLS (Cumulative Layout Shift) - requires observer
    let cumulativeLayoutShift = 0;
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              cumulativeLayoutShift += entry.value;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }
    
    // TTI (Time to Interactive) - approximation
    const timeToInteractive = navigation ? 
      Math.max(navigation.domContentLoadedEventEnd, navigation.loadEventEnd) : 0;
    
    // Memory usage (if available)
    let memoryUsage: number | undefined;
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
    }
    
    return {
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay,
      cumulativeLayoutShift,
      timeToInteractive,
      memoryUsage
    };
  }, []);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;
    
    setIsMonitoring(true);
    
    // Collect initial metrics after page load
    const collectInitialMetrics = () => {
      const initialMetrics = collectMetrics();
      setMetrics(initialMetrics);
      
      if (onMetricsUpdate) {
        onMetricsUpdate(initialMetrics);
      }
    };
    
    if (document.readyState === 'complete') {
      collectInitialMetrics();
    } else {
      window.addEventListener('load', collectInitialMetrics, { once: true });
    }
    
    // Set up periodic monitoring
    if (enableReporting) {
      const interval = setInterval(() => {
        const currentMetrics = collectMetrics();
        setMetrics(currentMetrics);
        
        if (onMetricsUpdate) {
          onMetricsUpdate(currentMetrics);
        }
      }, reportInterval);
      
      return () => clearInterval(interval);
    }
  }, [isMonitoring, collectMetrics, onMetricsUpdate, enableReporting, reportInterval]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const reportMetrics = useCallback(() => {
    if (!metrics) return;
    
    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('Performance Metrics');
      console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
      console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
      console.log('Largest Contentful Paint:', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
      console.log('First Input Delay:', `${metrics.firstInputDelay.toFixed(2)}ms`);
      console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift.toFixed(4));
      console.log('Time to Interactive:', `${metrics.timeToInteractive.toFixed(2)}ms`);
      if (metrics.memoryUsage) {
        console.log('Memory Usage:', `${metrics.memoryUsage.toFixed(2)}MB`);
      }
      console.groupEnd();
    }
    
    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production' && enableReporting) {
      // Here you would send metrics to your analytics service
      // Example: analytics.track('performance_metrics', metrics);
    }
  }, [metrics, enableReporting]);

  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  // Expose methods globally for debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      (window as any).performanceMonitor = {
        start: startMonitoring,
        stop: stopMonitoring,
        collect: collectMetrics,
        report: reportMetrics,
        metrics
      };
    }
  }, [startMonitoring, stopMonitoring, collectMetrics, reportMetrics, metrics]);

  // Performance recommendations
  const getRecommendations = useCallback(() => {
    if (!metrics) return [];
    
    const recommendations = [];
    
    if (metrics.loadTime > 3000) {
      recommendations.push('Consider optimizing bundle size or implementing code splitting');
    }
    
    if (metrics.firstContentfulPaint > 1500) {
      recommendations.push('Optimize critical rendering path and reduce render-blocking resources');
    }
    
    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize images and largest content elements');
    }
    
    if (metrics.firstInputDelay > 100) {
      recommendations.push('Reduce JavaScript execution time and optimize main thread');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Fix layout shifts by setting dimensions for images and dynamic content');
    }
    
    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      recommendations.push('Consider memory optimization and garbage collection');
    }
    
    return recommendations;
  }, [metrics]);

  if (process.env.NODE_ENV === 'development' && metrics) {
    const recommendations = getRecommendations();
    
    return (
      <div className="fixed bottom-4 left-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
        <h3 className="text-lg font-semibold mb-2">Performance Monitor</h3>
        <div className="space-y-1 text-sm">
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
          <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
          <div>FID: {metrics.firstInputDelay.toFixed(0)}ms</div>
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
          {metrics.memoryUsage && (
            <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
          )}
        </div>
        
        {recommendations.length > 0 && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-yellow-300">Recommendations:</h4>
            <ul className="text-xs space-y-1 mt-1">
              {recommendations.map((rec, index) => (
                <li key={index} className="text-yellow-200">• {rec}</li>
              ))}
            </ul>
          </div>
        )}
        
        <button
          onClick={reportMetrics}
          className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs"
        >
          Report Metrics
        </button>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;