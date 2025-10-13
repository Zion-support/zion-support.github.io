import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tti: number | null;
  memoryUsage: number | null;
  bundleSize: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showPanel?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = process.env.NODE_ENV === 'development',
  showPanel = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tti: null,
    memoryUsage: null,
    bundleSize: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(showPanel);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    fmp: { good: 2000, poor: 4000 },
    tti: { good: 3800, poor: 7300 }
  };

  const getPerformanceScore = (value: number | null, threshold: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
    if (value === null) return 'unknown';
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string): string => {
    switch (score) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const measurePerformance = useCallback(() => {
    const newMetrics: PerformanceMetrics = { ...metrics };

    // Measure Core Web Vitals
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                newMetrics.fcp = entry.startTime;
              }
              break;
            case 'largest-contentful-paint':
              newMetrics.lcp = entry.startTime;
              break;
            case 'first-input':
              newMetrics.fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
              break;
            case 'layout-shift':
              if (!(entry as any).hadRecentInput) {
                newMetrics.cls = (newMetrics.cls || 0) + (entry as any).value;
              }
              break;
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Measure TTFB
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        newMetrics.loadTime = navigation.loadEventEnd - navigation.navigationStart;
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      // Measure bundle size
      const resources = performance.getEntriesByType('resource');
      const jsResources = resources.filter((resource: any) => resource.name.includes('.js'));
      newMetrics.bundleSize = jsResources.reduce((total: number, resource: any) => total + resource.transferSize, 0) / 1024; // KB
    }

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);

    // Generate alerts
    const newAlerts: string[] = [];
    const fcpScore = getPerformanceScore(newMetrics.fcp, thresholds.fcp);
    const lcpScore = getPerformanceScore(newMetrics.lcp, thresholds.lcp);
    const fidScore = getPerformanceScore(newMetrics.fid, thresholds.fid);
    const clsScore = getPerformanceScore(newMetrics.cls, thresholds.cls);

    if (fcpScore === 'poor') newAlerts.push('First Contentful Paint is slow');
    if (lcpScore === 'poor') newAlerts.push('Largest Contentful Paint is slow');
    if (fidScore === 'poor') newAlerts.push('First Input Delay is high');
    if (clsScore === 'poor') newAlerts.push('Cumulative Layout Shift is high');

    setAlerts(newAlerts);
  }, [metrics, onMetricsUpdate]);

  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    const timer = setTimeout(measurePerformance, 1000);

    // Measure performance on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 500);
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushstate', handleRouteChange);
    window.addEventListener('replacestate', handleRouteChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushstate', handleRouteChange);
      window.removeEventListener('replacestate', handleRouteChange);
    };
  }, [enabled, measurePerformance]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Monitor Toggle */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle performance monitor"
      >
        <Zap className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border max-w-sm max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close performance monitor"
            >
              ×
            </button>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                Performance Issues:
              </h4>
              <ul className="text-xs text-red-700 dark:text-red-300 space-y-1">
                {alerts.map((alert, index) => (
                  <li key={index}>• {alert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          <div className="space-y-3">
            {/* Core Web Vitals */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Core Web Vitals
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">FCP</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono">
                      {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '—'}
                    </span>
                    {getScoreIcon(getPerformanceScore(metrics.fcp, thresholds.fcp))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">LCP</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono">
                      {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '—'}
                    </span>
                    {getScoreIcon(getPerformanceScore(metrics.lcp, thresholds.lcp))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">FID</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono">
                      {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '—'}
                    </span>
                    {getScoreIcon(getPerformanceScore(metrics.fid, thresholds.fid))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">CLS</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono">
                      {metrics.cls ? metrics.cls.toFixed(3) : '—'}
                    </span>
                    {getScoreIcon(getPerformanceScore(metrics.cls, thresholds.cls))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Metrics
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">TTFB</span>
                  <span className="text-xs font-mono">
                    {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '—'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Load Time</span>
                  <span className="text-xs font-mono">
                    {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : '—'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Memory</span>
                  <span className="text-xs font-mono">
                    {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : '—'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Bundle Size</span>
                  <span className="text-xs font-mono">
                    {metrics.bundleSize ? `${metrics.bundleSize.toFixed(1)}KB` : '—'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={measurePerformance}
            className="w-full mt-4 px-3 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
          >
            <Clock className="w-3 h-3 mr-1 inline" />
            Refresh Metrics
          </button>
        </div>
      )}
    </>
  );
};

export default EnhancedPerformanceMonitor;