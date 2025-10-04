import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  } | null;
}

interface PerformanceThresholds {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  fcp: 1800, // 1.8s
  lcp: 2500, // 2.5s
  fid: 100,  // 100ms
  cls: 0.1,  // 0.1
  ttfb: 600, // 600ms
};

export const AdvancedPerformanceMonitor: React.FC<{
  showDetails?: boolean;
  thresholds?: Partial<PerformanceThresholds>;
}> = ({ showDetails = false, thresholds = {} }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
    network: null,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const finalThresholds = React.useMemo(() => ({ ...DEFAULT_THRESHOLDS, ...thresholds }), [thresholds]);

  const getPerformanceScore = useCallback((metric: keyof PerformanceThresholds, value: number): number => {
    const threshold = finalThresholds[metric];
    if (value <= threshold) return 100;
    if (value <= threshold * 1.5) return 75;
    if (value <= threshold * 2) return 50;
    return 25;
  }, [finalThresholds]);

  const checkAlerts = useCallback((newMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];

    if (newMetrics.fcp && newMetrics.fcp > finalThresholds.fcp) {
      newAlerts.push(`FCP is ${newMetrics.fcp}ms (threshold: ${finalThresholds.fcp}ms)`);
    }
    if (newMetrics.lcp && newMetrics.lcp > finalThresholds.lcp) {
      newAlerts.push(`LCP is ${newMetrics.lcp}ms (threshold: ${finalThresholds.lcp}ms)`);
    }
    if (newMetrics.fid && newMetrics.fid > finalThresholds.fid) {
      newAlerts.push(`FID is ${newMetrics.fid}ms (threshold: ${finalThresholds.fid}ms)`);
    }
    if (newMetrics.cls && newMetrics.cls > finalThresholds.cls) {
      newAlerts.push(`CLS is ${newMetrics.cls} (threshold: ${finalThresholds.cls})`);
    }
    if (newMetrics.ttfb && newMetrics.ttfb > finalThresholds.ttfb) {
      newAlerts.push(`TTFB is ${newMetrics.ttfb}ms (threshold: ${finalThresholds.ttfb}ms)`);
    }

    setAlerts(newAlerts);
  }, [finalThresholds]);

  useEffect(() => {
    // Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as LayoutShift;
          if (!layoutShiftEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + layoutShiftEntry.value }));
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch {
      console.warn('Performance Observer not supported');
    }

    // TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Memory
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      setMetrics(prev => ({
        ...prev,
        memory: {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        },
      }));
    }

    // Network
    if ('connection' in navigator) {
      const connection = (navigator as Navigator & { connection: { effectiveType: string; downlink: number; rtt: number } }).connection;
      setMetrics(prev => ({
        ...prev,
        network: {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        },
      }));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    checkAlerts(metrics);
  }, [metrics, checkAlerts]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    if (score >= 50) return 'text-orange-600';
    return 'text-red-600';
  };


  if (!showDetails && alerts.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-white rounded-lg shadow-lg border p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Performance Monitor</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {alerts.length > 0 && (
              <div className="mb-3">
                <h4 className="text-sm font-medium text-red-600 mb-2">⚠️ Performance Alerts</h4>
                <ul className="text-xs text-red-600 space-y-1">
                  {alerts.map((alert, index) => (
                    <li key={index}>• {alert}</li>
                  ))}
                </ul>
              </div>
            )}

            {showDetails && (
              <div className="space-y-2">
                {metrics.fcp && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">FCP</span>
                    <span className={`text-sm font-medium ${getScoreColor(getPerformanceScore('fcp', metrics.fcp))}`}>
                      {Math.round(metrics.fcp)}ms
                    </span>
                  </div>
                )}
                {metrics.lcp && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">LCP</span>
                    <span className={`text-sm font-medium ${getScoreColor(getPerformanceScore('lcp', metrics.lcp))}`}>
                      {Math.round(metrics.lcp)}ms
                    </span>
                  </div>
                )}
                {metrics.fid && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">FID</span>
                    <span className={`text-sm font-medium ${getScoreColor(getPerformanceScore('fid', metrics.fid))}`}>
                      {Math.round(metrics.fid)}ms
                    </span>
                  </div>
                )}
                {metrics.cls && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">CLS</span>
                    <span className={`text-sm font-medium ${getScoreColor(getPerformanceScore('cls', metrics.cls))}`}>
                      {metrics.cls.toFixed(3)}
                    </span>
                  </div>
                )}
                {metrics.ttfb && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">TTFB</span>
                    <span className={`text-sm font-medium ${getScoreColor(getPerformanceScore('ttfb', metrics.ttfb))}`}>
                      {Math.round(metrics.ttfb)}ms
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdvancedPerformanceMonitor;