'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Track page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Track memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // These would be imported from web-vitals in a real implementation
      // For now, we'll simulate the tracking
      trackEvent('performance_metrics', {
        loadTime,
        memoryUsage: metrics.memoryUsage,
        timestamp: Date.now(),
      });
    };

    // Track performance after page load
    const timer = setTimeout(trackWebVitals, 1000);
    
    return () => clearTimeout(timer);
  }, [trackEvent, metrics.memoryUsage]);

  // Monitor performance in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-xs text-white z-50">
      <div className="font-semibold text-cyan-400 mb-2">Performance Monitor</div>
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        )}
        {metrics.memoryUsage && (
          <div>Memory: {(metrics.memoryUsage * 100).toFixed(1)}%</div>
        )}
        {metrics.cls && (
          <div>CLS: {metrics.cls.toFixed(4)}</div>
        )}
        {metrics.lcp && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}
        {metrics.fcp && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}
        {metrics.inp && (
          <div>INP: {metrics.inp.toFixed(2)}ms</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;