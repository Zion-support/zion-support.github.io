import React, { useState, useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    inp: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const updateMetric = (metric: string, value: number) => {
      setMetrics(prev => ({ ...prev, [metric]: value }));
      
      // Send to analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: metric,
          metric_value: Math.round(value),
          metric_delta: Math.round(value)
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            updateMetric('ttfb', navEntry.responseStart - navEntry.requestStart);
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  // Show performance metrics in development
  const shouldShowMetrics = process.env.NODE_ENV === 'development' && isVisible;

  return (
    <>
      {children}
      {shouldShowMetrics && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Performance Metrics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          <div className="space-y-1 text-xs">
            <div>CLS: {metrics.cls.toFixed(3)}</div>
            <div>INP: {Math.round(metrics.inp)}ms</div>
            <div>FCP: {Math.round(metrics.fcp)}ms</div>
            <div>LCP: {Math.round(metrics.lcp)}ms</div>
            <div>TTFB: {Math.round(metrics.ttfb)}ms</div>
          </div>
        </div>
      )}
      {process.env.NODE_ENV === 'development' && !isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 bg-cyan-600 text-white p-2 rounded-full shadow-lg z-50"
          title="Show Performance Metrics"
        >
          📊
        </button>
      )}
    </>
  );
};

export default PerformanceMonitor;