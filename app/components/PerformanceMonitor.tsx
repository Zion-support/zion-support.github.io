'use client';
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !window.location.search.includes('debug=performance')) {
      return;
    }

    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cls: metric.value }));
          });

          getFID((metric) => {
            setMetrics(prev => ({ ...prev, fid: metric.value }));
          });

          getFCP((metric) => {
            setMetrics(prev => ({ ...prev, fcp: metric.value }));
          });

          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, lcp: metric.value }));
          });

          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          });
        });
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }

      // Measure page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, ttfb: loadTime }));
      });
    };

    measurePerformance();

    // Show/hide with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return <Clock className="w-4 h-4" />;
    if (value <= thresholds.good) return <Zap className="w-4 h-4" />;
    if (value <= thresholds.poor) return <Activity className="w-4 h-4" />;
    return <Database className="w-4 h-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-lg rounded-lg p-4 text-white text-sm font-mono z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>FCP:</span>
          <div className={`flex items-center gap-1 ${getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
            {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
            <span>{metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>LCP:</span>
          <div className={`flex items-center gap-1 ${getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
            {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
            <span>{metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>FID:</span>
          <div className={`flex items-center gap-1 ${getScoreColor(metrics.fid, { good: 100, poor: 300 })}`}>
            {getScoreIcon(metrics.fid, { good: 100, poor: 300 })}
            <span>{metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>CLS:</span>
          <div className={`flex items-center gap-1 ${getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
            {getScoreIcon(metrics.cls, { good: 0.1, poor: 0.25 })}
            <span>{metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>TTFB:</span>
          <div className={`flex items-center gap-1 ${getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}`}>
            {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })}
            <span>{metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</span>
          </div>
        </div>

        {metrics.memoryUsage && (
          <div className="flex items-center justify-between">
            <span>Memory:</span>
            <div className="flex items-center gap-1">
              <Database className="w-4 h-4" />
              <span>{metrics.memoryUsage.toFixed(1)}MB</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;