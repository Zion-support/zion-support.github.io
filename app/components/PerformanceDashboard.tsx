import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  memoryUsage: number;
  loadTime: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    memoryUsage: 0,
    loadTime: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const updateMetrics = () => {
      // Get performance metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0];
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      setMetrics({
        lcp: lcpEntry ? lcpEntry.startTime : 0,
        fid: 0, // Would need to be measured with PerformanceObserver
        cls: 0, // Would need to be measured with PerformanceObserver
        fcp: fcpEntry ? fcpEntry.startTime : 0,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
        memoryUsage: (performance as any).memory ? (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0,
        loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : 0
      });
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4" />;
    if (value <= thresholds.poor) return <Clock className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 text-white p-3 rounded-lg shadow-lg hover:bg-slate-700 transition-colors"
        aria-label="Toggle performance dashboard"
      >
        <Activity className="w-5 h-5" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 w-80 bg-slate-800 text-white p-4 rounded-lg shadow-xl border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-cyan-400" />
            Performance Metrics
          </h3>

          <div className="space-y-3">
            {/* LCP */}
            <div className="flex items-center justify-between">
              <span className="text-sm">LCP</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-mono ${getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
                  {Math.round(metrics.lcp)}ms
                </span>
                {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
              </div>
            </div>

            {/* FID */}
            <div className="flex items-center justify-between">
              <span className="text-sm">FID</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-mono ${getScoreColor(metrics.fid, { good: 100, poor: 300 })}`}>
                  {Math.round(metrics.fid)}ms
                </span>
                {getScoreIcon(metrics.fid, { good: 100, poor: 300 })}
              </div>
            </div>

            {/* CLS */}
            <div className="flex items-center justify-between">
              <span className="text-sm">CLS</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-mono ${getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
                  {metrics.cls.toFixed(3)}
                </span>
                {getScoreIcon(metrics.cls, { good: 0.1, poor: 0.25 })}
              </div>
            </div>

            {/* FCP */}
            <div className="flex items-center justify-between">
              <span className="text-sm">FCP</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-mono ${getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
                  {Math.round(metrics.fcp)}ms
                </span>
                {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
              </div>
            </div>

            {/* TTFB */}
            <div className="flex items-center justify-between">
              <span className="text-sm">TTFB</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-mono ${getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}`}>
                  {Math.round(metrics.ttfb)}ms
                </span>
                {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })}
              </div>
            </div>

            {/* Memory Usage */}
            <div className="flex items-center justify-between">
              <span className="text-sm">Memory</span>
              <span className="text-sm font-mono text-cyan-400">
                {metrics.memoryUsage.toFixed(1)}MB
              </span>
            </div>

            {/* Load Time */}
            <div className="flex items-center justify-between">
              <span className="text-sm">Load Time</span>
              <span className="text-sm font-mono text-cyan-400">
                {Math.round(metrics.loadTime)}ms
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-700">
            <p className="text-xs text-gray-400">
              Core Web Vitals monitoring in development mode
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;