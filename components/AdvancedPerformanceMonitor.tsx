'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number;
  windowLoad: number;
  memoryUsage: {
    used: number;
    total: number;
    limit: number;
  };
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showDebugPanel?: boolean;
  logToConsole?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  showDebugPanel = false,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0,
    memoryUsage: { used: 0, total: 0, limit: 0 }
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      
      if (logToConsole) {
        console.log('Performance Metrics Updated:', updated);
      }
      
      return updated;
    });
  }, [onMetricsUpdate, logToConsole]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Get basic performance metrics
    const getBasicMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        updateMetrics({
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
        });
      }
    };

    // Get Web Vitals
    const getWebVitals = () => {
      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        updateMetrics({ fcp: fcpEntry.startTime });
      }

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        updateMetrics({ lcp: lastEntry.startTime });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          updateMetrics({ fid: entry.processingStart - entry.startTime });
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
            updateMetrics({ cls: clsValue });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    // Get memory usage
    const getMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        updateMetrics({
          memoryUsage: {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
          }
        });
      }
    };

    // Monitor resource loading
    const monitorResources = () => {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (logToConsole) {
            console.log(`Resource loaded: ${entry.name} in ${entry.duration}ms`);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      return () => resourceObserver.disconnect();
    };

    // Initial metrics
    getBasicMetrics();
    getMemoryUsage();

    // Set up observers
    const cleanupWebVitals = getWebVitals();
    const cleanupResources = monitorResources();

    // Update memory usage periodically
    const memoryInterval = setInterval(getMemoryUsage, 5000);

    // Cleanup
    return () => {
      cleanupWebVitals?.();
      cleanupResources?.();
      clearInterval(memoryInterval);
    };
  }, [updateMetrics, logToConsole]);

  const getPerformanceScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 });
  const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 });
  const fidScore = getPerformanceScore(metrics.fid, { good: 100, poor: 300 });
  const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 });

  if (!showDebugPanel) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Toggle performance monitor"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {isVisible && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-xl p-4 w-80 border max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Performance Monitor</h3>
          
          {/* Web Vitals */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">First Contentful Paint</span>
                <span className={`text-sm font-bold ${getScoreColor(fcpScore)}`}>
                  {metrics.fcp.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500">{fcpScore}</div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Largest Contentful Paint</span>
                <span className={`text-sm font-bold ${getScoreColor(lcpScore)}`}>
                  {metrics.lcp.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500">{lcpScore}</div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">First Input Delay</span>
                <span className={`text-sm font-bold ${getScoreColor(fidScore)}`}>
                  {metrics.fid.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500">{fidScore}</div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Cumulative Layout Shift</span>
                <span className={`text-sm font-bold ${getScoreColor(clsScore)}`}>
                  {metrics.cls.toFixed(3)}
                </span>
              </div>
              <div className="text-xs text-gray-500">{clsScore}</div>
            </div>
          </div>

          {/* Basic Metrics */}
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-semibold mb-2">Basic Metrics</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Time to First Byte:</span>
                <span>{metrics.ttfb.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>DOM Load:</span>
                <span>{metrics.domLoad.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>Window Load:</span>
                <span>{metrics.windowLoad.toFixed(0)}ms</span>
              </div>
            </div>
          </div>

          {/* Memory Usage */}
          {metrics.memoryUsage.used > 0 && (
            <div className="mt-4 pt-4 border-t">
              <h4 className="text-sm font-semibold mb-2">Memory Usage</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Used:</span>
                  <span>{metrics.memoryUsage.used}MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>{metrics.memoryUsage.total}MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Limit:</span>
                  <span>{metrics.memoryUsage.limit}MB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${(metrics.memoryUsage.used / metrics.memoryUsage.limit) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Score */}
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-semibold mb-2">Overall Score</h4>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round((fcpScore === 'good' ? 100 : fcpScore === 'needs-improvement' ? 60 : 20) +
                           (lcpScore === 'good' ? 100 : lcpScore === 'needs-improvement' ? 60 : 20) +
                           (fidScore === 'good' ? 100 : fidScore === 'needs-improvement' ? 60 : 20) +
                           (clsScore === 'good' ? 100 : clsScore === 'needs-improvement' ? 60 : 20)) / 4}
              </div>
              <div className="text-xs text-gray-500">Performance Score</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0,
    memoryUsage: { used: 0, total: 0, limit: 0 }
  });

  const logMetric = useCallback((name: string, value: number) => {
    console.log(`Performance Metric - ${name}: ${value}ms`);
  }, []);

  return { metrics, logMetric };
};

export default AdvancedPerformanceMonitor;