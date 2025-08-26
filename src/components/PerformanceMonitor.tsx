import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('show-performance') === 'true') {
      setIsVisible(true);
    }

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Cleanup observers
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const getPerformanceScore = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';

    switch (metric) {
      case 'fcp':
        if (value < 1800) return '🟢 Good';
        if (value < 3000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'lcp':
        if (value < 2500) return '🟢 Good';
        if (value < 4000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'fid':
        if (value < 100) return '🟢 Good';
        if (value < 300) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'cls':
        if (value < 0.1) return '🟢 Good';
        if (value < 0.25) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'ttfb':
        if (value < 800) return '🟢 Good';
        if (value < 1800) return '🟡 Needs Improvement';
        return '🔴 Poor';
      default:
        return 'N/A';
    }
  };

  const formatMetric = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';

    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return 'N/A';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 z-50 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center">
          <Activity className="w-4 h-4 mr-2 text-cyan-500" />
          Performance Metrics
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-600 dark:text-slate-400">FCP:</span>
          <div className="flex items-center space-x-2">
            <span className="font-mono">{formatMetric('fcp')}</span>
            <span className="text-xs">{getPerformanceScore('fcp')}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-600 dark:text-slate-400">LCP:</span>
          <div className="flex items-center space-x-2">
            <span className="font-mono">{formatMetric('lcp')}</span>
            <span className="text-xs">{getPerformanceScore('lcp')}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-600 dark:text-slate-400">FID:</span>
          <div className="flex items-center space-x-2">
            <span className="font-mono">{formatMetric('fid')}</span>
            <span className="text-xs">{getPerformanceScore('fid')}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-600 dark:text-slate-400">CLS:</span>
          <div className="flex items-center space-x-2">
            <span className="font-mono">{formatMetric('cls')}</span>
            <span className="text-xs">{getPerformanceScore('cls')}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-600 dark:text-slate-400">TTFB:</span>
          <div className="flex items-center space-x-2">
            <span className="font-mono">{formatMetric('ttfb')}</span>
            <span className="text-xs">{getPerformanceScore('ttfb')}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
        <button
          onClick={() => {
            setMetrics({
              fcp: null,
              lcp: null,
              fid: null,
              cls: null,
              ttfb: null
            });
            window.location.reload();
          }}
          className="w-full text-xs bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded transition-colors"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
};
