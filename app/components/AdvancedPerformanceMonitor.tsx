'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const defaultThresholds = {
  fcp: 1800, // 1.8s
  lcp: 2500, // 2.5s
  fid: 100,  // 100ms
  cls: 0.1,  // 0.1
  ttfb: 600, // 600ms
};

export default function AdvancedPerformanceMonitor({ 
  onMetricsUpdate, 
  threshold = defaultThresholds 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const getPerformanceScore = (value: number | null, threshold: number, isLowerBetter = true): 'good' | 'needs-improvement' | 'poor' => {
    if (value === null) return 'good';
    
    const isGood = isLowerBetter ? value <= threshold : value >= threshold;
    const isPoor = isLowerBetter ? value > threshold * 1.5 : value < threshold * 0.5;
    
    if (isGood) return 'good';
    if (isPoor) return 'poor';
    return 'needs-improvement';
  };

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getScoreIcon = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const newMetrics: PerformanceMetrics = {
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      memoryUsage: null,
      loadTime: null,
    };

    // Measure Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            newMetrics.fcp = fcpEntry.startTime;
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            newMetrics.lcp = lastEntry.startTime;
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.processingStart && entry.startTime) {
              newMetrics.fid = entry.processingStart - entry.startTime;
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        }

        // Load time
        if (navigationEntry) {
          newMetrics.loadTime = navigationEntry.loadEventEnd - navigationEntry.navigationStart;
        }

        // Memory usage (if available)
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        }

      } catch (error) {
        console.warn('Performance measurement failed:', error);
      }
    }

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);

    // Check for performance issues
    const newAlerts: string[] = [];
    if (newMetrics.fcp && newMetrics.fcp > threshold.fcp) {
      newAlerts.push(`FCP is ${newMetrics.fcp.toFixed(0)}ms (threshold: ${threshold.fcp}ms)`);
    }
    if (newMetrics.lcp && newMetrics.lcp > threshold.lcp) {
      newAlerts.push(`LCP is ${newMetrics.lcp.toFixed(0)}ms (threshold: ${threshold.lcp}ms)`);
    }
    if (newMetrics.fid && newMetrics.fid > threshold.fid) {
      newAlerts.push(`FID is ${newMetrics.fid.toFixed(0)}ms (threshold: ${threshold.fid}ms)`);
    }
    if (newMetrics.cls && newMetrics.cls > threshold.cls) {
      newAlerts.push(`CLS is ${newMetrics.cls.toFixed(3)} (threshold: ${threshold.cls})`);
    }
    if (newMetrics.ttfb && newMetrics.ttfb > threshold.ttfb) {
      newAlerts.push(`TTFB is ${newMetrics.ttfb.toFixed(0)}ms (threshold: ${threshold.ttfb}ms)`);
    }

    setAlerts(newAlerts);
  }, [onMetricsUpdate, threshold]);

  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(measurePerformance, 1000);

    // Measure performance on page load
    const handleLoad = () => {
      measurePerformance();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, [measurePerformance]);

  const formatMetric = (value: number | null, unit: string = 'ms'): string => {
    if (value === null) return 'N/A';
    return `${value.toFixed(0)}${unit}`;
  };

  const fcpScore = getPerformanceScore(metrics.fcp, threshold.fcp);
  const lcpScore = getPerformanceScore(metrics.lcp, threshold.lcp);
  const fidScore = getPerformanceScore(metrics.fid, threshold.fid);
  const clsScore = getPerformanceScore(metrics.cls, threshold.cls);
  const ttfbScore = getPerformanceScore(metrics.ttfb, threshold.ttfb);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="space-y-3">
            {/* Core Web Vitals */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Core Web Vitals</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">FCP</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getScoreColor(fcpScore)}`}>
                      {formatMetric(metrics.fcp)}
                    </span>
                    {getScoreIcon(fcpScore)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">LCP</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getScoreColor(lcpScore)}`}>
                      {formatMetric(metrics.lcp)}
                    </span>
                    {getScoreIcon(lcpScore)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">FID</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getScoreColor(fidScore)}`}>
                      {formatMetric(metrics.fid)}
                    </span>
                    {getScoreIcon(fidScore)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">CLS</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getScoreColor(clsScore)}`}>
                      {formatMetric(metrics.cls, '')}
                    </span>
                    {getScoreIcon(clsScore)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">TTFB</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getScoreColor(ttfbScore)}`}>
                      {formatMetric(metrics.ttfb)}
                    </span>
                    {getScoreIcon(ttfbScore)}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Metrics</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Load Time</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatMetric(metrics.loadTime)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Memory Usage</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatMetric(metrics.memoryUsage, 'MB')}
                  </span>
                </div>
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-red-700 mb-2">Performance Issues</h4>
                <div className="space-y-1">
                  {alerts.map((alert, index) => (
                    <div key={index} className="text-xs text-red-600 bg-red-50 p-2 rounded">
                      {alert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Refresh Button */}
            <button
              onClick={measurePerformance}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Refresh Metrics
            </button>
          </div>
        </div>
      )}
    </div>
  );
}