import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      // Send to analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: metric.name,
          value: Math.round(metric.value),
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory) {
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
        };

        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'memory_usage', {
            event_category: 'Performance',
            event_label: 'Memory',
            value: memoryUsage.used,
            custom_parameter_1: memoryUsage.total,
            custom_parameter_2: memoryUsage.limit,
          });
        }
      }
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) { // Tasks longer than 50ms
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'long_task', {
                  event_category: 'Performance',
                  event_label: 'Long Task',
                  value: Math.round(entry.duration),
                });
              }
            }
          }
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task API not supported
      }
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-3 text-xs font-mono text-white z-50">
      <div className="text-cyan-400 font-semibold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        {metrics.fcp && (
          <div>FCP: {Math.round(metrics.fcp)}ms</div>
        )}
        {metrics.lcp && (
          <div>LCP: {Math.round(metrics.lcp)}ms</div>
        )}
        {metrics.inp && (
          <div>INP: {Math.round(metrics.inp)}ms</div>
        )}
        {metrics.cls && (
          <div>CLS: {metrics.cls.toFixed(3)}</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {Math.round(metrics.ttfb)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;