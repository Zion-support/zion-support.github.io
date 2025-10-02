import React, { useEffect, useState } from 'react';
import { measurePerformance, reportWebVitals } from '../utils/performance';

interface PerformanceMetrics {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
  cls?: number;
  fid?: number;
  lcp?: number;
  ttfb?: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: string;
  value: number;
  threshold: number;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const thresholds = {
    domContentLoaded: 1000,
    loadComplete: 2000,
    firstPaint: 1000,
    firstContentfulPaint: 1500,
    cls: 0.1,
    fid: 100,
    lcp: 2500,
    ttfb: 600,
  } as const;

  const generateAlert = (metric: string, value: number, threshold: number): PerformanceAlert => {
    const type = value > threshold ? 'error' : value > threshold * 0.8 ? 'warning' : 'info';
    return {
      id: `${metric}-${Date.now()}`,
      type,
      message: `${metric} is ${value}ms, threshold is ${threshold}ms`,
      metric,
      value,
      threshold,
    };
  };

  useEffect(() => {
    const startMonitoring = () => {
      setIsMonitoring(true);

      // Initial timing via Performance API
      try {
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (nav) {
          const initial: PerformanceMetrics = {
            domContentLoaded: nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
            loadComplete: nav.loadEventEnd - nav.loadEventStart,
            firstPaint: (performance as any).timing?.responseStart ? performance.now() : 0,
            firstContentfulPaint: 0,
          };
          setMetrics(initial);
          const firstAlerts: PerformanceAlert[] = [];
          Object.entries(thresholds).forEach(([key, threshold]) => {
            const value = (initial as any)[key];
            if (typeof value === 'number' && value > threshold * 0.8) {
              firstAlerts.push(generateAlert(key, value, threshold as number));
            }
          });
          if (firstAlerts.length) setAlerts(firstAlerts);
        }
      } catch {}

      // Web Vitals
      reportWebVitals((metric: any) => {
        setMetrics(prev => ({
          ...(prev || ({} as PerformanceMetrics)),
          [metric.name.toLowerCase()]: metric.value,
        } as PerformanceMetrics));

        const threshold = (thresholds as any)[metric.name.toLowerCase()];
        if (typeof threshold === 'number' && metric.value > threshold * 0.8) {
          setAlerts(prev => [...prev, generateAlert(metric.name.toLowerCase(), metric.value, threshold)]);
        }
      });

      // Observe navigation timings
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              setMetrics(prev => ({
                ...(prev || ({} as PerformanceMetrics)),
                domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
                loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              } as PerformanceMetrics));
            }
          }
        });
        observer.observe({ entryTypes: ['navigation'] });
      } catch {}
    };

    if (document.readyState === 'complete') {
      startMonitoring();
    } else {
      window.addEventListener('load', startMonitoring);
    }
    return () => window.removeEventListener('load', startMonitoring);
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="performance-monitor fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm z-50">
      <h3 className="text-sm font-bold mb-2">Performance Monitor</h3>
      <div className="text-xs space-y-1">
        <div>Status: {isMonitoring ? '🟢 Active' : '🔴 Inactive'}</div>
        {metrics && (
          <>
            {'domContentLoaded' in metrics && typeof metrics.domContentLoaded === 'number' && (
              <div>DOM Load: {metrics.domContentLoaded.toFixed(0)}ms</div>
            )}
            {'loadComplete' in metrics && typeof metrics.loadComplete === 'number' && (
              <div>Page Load: {metrics.loadComplete.toFixed(0)}ms</div>
            )}
            {'firstPaint' in metrics && typeof metrics.firstPaint === 'number' && (
              <div>First Paint: {metrics.firstPaint.toFixed(0)}ms</div>
            )}
            {'firstContentfulPaint' in metrics && typeof metrics.firstContentfulPaint === 'number' && (
              <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
            )}
          </>
        )}
        {alerts.length > 0 && (
          <div className="mt-2">
            <div className="font-semibold">Alerts:</div>
            {alerts.slice(0, 3).map(alert => (
              <div key={alert.id} className={`text-${alert.type === 'error' ? 'red' : 'yellow'}-400`}>
                {alert.type}: {alert.metric}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;