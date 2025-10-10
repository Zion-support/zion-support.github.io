'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  loadTime?: number;
  domContentLoaded?: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measureWebVitals = () => {
      const newMetrics: PerformanceMetrics = {};

      // Get navigation timing
      if (performance.getEntriesByType) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          newMetrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          newMetrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        }
      }

      // Get paint timing
      if (performance.getEntriesByType) {
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            newMetrics.fcp = entry.startTime;
          }
        });
      }

      // Get LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            newMetrics.lcp = lastEntry.startTime;
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          if (logToConsole) console.warn('LCP measurement not supported');
        }
      }

      // Get FID (First Input Delay)
      if ('PerformanceObserver' in window) {
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              newMetrics.fid = entry.processingStart - entry.startTime;
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          if (logToConsole) console.warn('FID measurement not supported');
        }
      }

      // Get CLS (Cumulative Layout Shift)
      if ('PerformanceObserver' in window) {
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                newMetrics.cls = clsValue;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          if (logToConsole) console.warn('CLS measurement not supported');
        }
      }

      setMetrics(newMetrics);
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }

      if (logToConsole) {
        console.log('Performance Metrics:', newMetrics);
      }
    };

    // Measure initial metrics
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    // Real-time monitoring
    if (enableRealTimeMonitoring) {
      const interval = setInterval(() => {
        measureWebVitals();
      }, 5000);

      return () => {
        clearInterval(interval);
        window.removeEventListener('load', measureWebVitals);
      };
    }

    return () => {
      window.removeEventListener('load', measureWebVitals);
    };
  }, [onMetricsUpdate, enableRealTimeMonitoring, logToConsole]);

  // Performance score calculation
  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-100)
    if (metrics.lcp !== undefined) {
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 20;
      else if (metrics.lcp > 1500) score -= 10;
    }
    
    // FID scoring (0-100)
    if (metrics.fid !== undefined) {
      if (metrics.fid > 300) score -= 30;
      else if (metrics.fid > 100) score -= 20;
      else if (metrics.fid > 50) score -= 10;
    }
    
    // CLS scoring (0-100)
    if (metrics.cls !== undefined) {
      if (metrics.cls > 0.25) score -= 30;
      else if (metrics.cls > 0.1) score -= 20;
      else if (metrics.cls > 0.05) score -= 10;
    }
    
    return Math.max(0, score);
  };

  const performanceScore = calculatePerformanceScore(metrics);

  return (
    <div className="performance-monitor">
      {logToConsole && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-sm max-w-xs">
          <h4 className="font-semibold mb-2">Performance Metrics</h4>
          <div className="space-y-1">
            {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
            {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
            {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
            {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
            {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
            <div className="pt-2 border-t border-slate-600">
              <div>Score: {performanceScore}/100</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;