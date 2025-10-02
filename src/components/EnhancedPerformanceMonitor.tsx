import React, { useEffect, useState } from 'react';
import {

} from '../utils/performance';
interface PerformanceMetrics {
domContentLoaded: number;,
loadComplete: number;,
firstPaint: number;,
firstContentfulPaint: number;,
cls?: number;,
fid?: number;,
lcp?: number;,
ttfb?: number;
}

interface PerformanceAlert {
id: string;,
type: 'warning' | 'error' | 'info';,
message: string;,
metric: string;,
value: number;,
threshold: number;
}

const EnhancedPerformanceMonitor: React.FC = () => {,
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Performance thresholds
  const thresholds = {
    domContentLoaded: 1000, // ms,
    loadComplete: 2000, // ms,
    firstPaint: 1000, // ms,
    firstContentfulPaint: 1500, // ms,
    cls: 0.1, // Cumulative Layout Shift,
    fid: 100, // ms,
    lcp: 2500, // ms,
    ttfb: 600 // ms
  };

  const generateAlert = (metric: string, value: number, threshold: number): PerformanceAlert => {
const type = value > threshold ? 'error' : value > threshold * 0.8 ? 'warning' : 'info';
return {
id: `${metric`;
}-${Date.now()}`,`;
      type,
      message: `${metric} is ${value}ms, threshold is ${threshold}ms`,`;
      metric,
      value,
      threshold
    };
  };

  useEffect(() => {
    const startMonitoring = () => {
      setIsMonitoring(true);
      
      // Measure initial performance
      const initialMetrics = measurePerformance();
      if (initialMetrics) {
        setMetrics(initialMetrics);
        
        // Generate alerts for initial metrics
        const newAlerts: PerformanceAlert[] = [],
        Object.entries(thresholds).forEach(([key, threshold]) => {
          const value = initialMetrics[key as keyof PerformanceMetrics];
          if (value !== undefined && value > threshold * 0.8) {
            newAlerts.push(generateAlert(key, value, threshold));
          };
        });
        setAlerts(newAlerts);
      }

      // Monitor Core Web Vitals
      reportWebVitals((metric: any) => {,
        console.log('Web Vital: ', metric);',
        
        // Update metrics with web vitals
        setMetrics(prev => ({
          ...prev
          [metric.name.toLowerCase()]: metric.value
        } as PerformanceMetrics));

        // Check against thresholds and generate alerts
        const threshold = thresholds[metric.name.toLowerCase() as keyof typeof thresholds];
        if (threshold && metric.value > threshold * 0.8) {
          const alert = generateAlert(metric.name.toLowerCase(), metric.value, threshold);
          setAlerts(prev => [...prev, alert]);
        }
      });

      // Monitor resource loading
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {;
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation timing: ', {',
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource'] });
      // Monitor memory usage
      if ('memory' in performance) {;
        const memoryInfo = (performance as any).memory;
        console.log('Memory usage: ', {',
          used: memoryInfo.usedJSHeapSize,,
          total: memoryInfo.totalJSHeapSize,,
          limit: memoryInfo.jsHeapSizeLimit,
        });
      }

      return () => {
        observer.disconnect();
        setIsMonitoring(false);
      };
    };

    // Start monitoring after page load
    if (document.readyState === 'complete') {;
      startMonitoring();
    } else {
      window.addEventListener('load', startMonitoring);
    }

    return () => {
      window.removeEventListener('load', startMonitoring);
    };
  }, [thresholds]);

  // Development mode: Show performance dashboard,
  if (process.env.NODE_ENV === 'development') {;
    return (
      <div className="performance-monitor fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm z-50">
        <h3 className="text-sm font-bold mb-2">Performance Monitor</h3>
        <div className="text-xs space-y-1">
          <div>Status: {isMonitoring ? '🟢 Active' : '🔴 Inactive'}</div>;
          {metrics && (
            <>
              <div>DOM Load: {metrics.domContentLoaded.toFixed(0)}ms</div>
              <div>Page Load: {metrics.loadComplete.toFixed(0)}ms</div>
              <div>First Paint: {metrics.firstPaint.toFixed(0)}ms</div>
              <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
            </>
          )}
          {alerts.length > 0 && (
            <div className="mt-2">
              <div className="font-semibold">Alerts: </div>",
              {alerts.slice(0, 3).map(alert => (
                <div key={alert.id} className={`text-${alert.type === 'error' ? 'red' : 'yellow'}-400`}>`;
                  {alert.type}: {alert.metric}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Production mode: Silent monitoring,
  return null;
};

export default EnhancedPerformanceMonitor;