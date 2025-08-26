import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logToConsole?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  logToConsole = true,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const getPerformanceScore = useCallback((metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
        return value <= 1800 ? '🟢 Good' : value <= 3000 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'lcp':
        return value <= 2500 ? '🟢 Good' : value <= 4000 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'fid':
        return value <= 100 ? '🟢 Good' : value <= 300 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'cls':
        return value <= 0.1 ? '🟢 Good' : value <= 0.25 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'ttfb':
        return value <= 800 ? '🟢 Good' : value <= 1800 ? '🟡 Needs Improvement' : '🔴 Poor';
      default:
        return 'N/A';
    }
  }, [metrics]);

  useEffect(() => {
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[entries.length - 1];
      if (fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart! - fidEntry.startTime }));
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }

    if (logToConsole && Object.values(metrics).some(v => v !== null)) {
      console.log('🚀 Performance Metrics:', metrics);
    }
  }, [metrics, onMetricsUpdate, logToConsole]);

  if (!showMetrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h3 className="text-sm font-semibold mb-3 text-cyan-400">Performance Monitor</h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp && metrics.fcp <= 1800 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
          <span>{getPerformanceScore('fcp')}</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp && metrics.lcp <= 2500 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
          <span>{getPerformanceScore('lcp')}</span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.fid && metrics.fid <= 100 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
          <span>{getPerformanceScore('fid')}</span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls && metrics.cls <= 0.1 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
          <span>{getPerformanceScore('cls')}</span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb <= 800 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
          <span>{getPerformanceScore('ttfb')}</span>
        </div>
      </div>
    </div>
  );
};
