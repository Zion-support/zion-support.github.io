'use client';
import React, { useEffect, useState } from 'react';
interface PerformanceData {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  memory?: number;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceData>({});
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
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
    // Monitor memory usage
    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memory: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };
    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);
    return () => clearInterval(interval);
  }, []);
  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }
  const getScoreColor = (value: number | undefined, thresholds: { good: number; needsImprovement: number }) => {
    if (value === undefined) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 border border-cyan-500/20 rounded-lg p-4 text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '--'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '--'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : '--'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '--'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '--'}
          </span>
        </div>
        {metrics.memory && (
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className="text-blue-400">{metrics.memory}MB</span>
          </div>
        )}
      </div>
      <div className="mt-2 pt-2 border-t border-gray-600 text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
import React, { useEffect } from 'react';
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    const measurePerformance = () => {
      // Measure Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const metrics = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        // Resource timing
        totalResources: performance.getEntriesByType('resource').length,
        // Memory usage (if available)
        memoryUsage: (performance as any).memory ? {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize,
          limit: (performance as any).memory.jsHeapSizeLimit
        } : null
      };
      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
      // Send metrics to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'performance_metrics', {
          event_category: 'performance',
          dom_content_loaded: Math.round(metrics.domContentLoaded),
          load_complete: Math.round(metrics.loadComplete),
          first_paint: Math.round(metrics.firstPaint),
          first_contentful_paint: Math.round(metrics.firstContentfulPaint),
          total_resources: metrics.totalResources
        });
      }
      // Check for performance issues
      if (metrics.firstContentfulPaint > 3000) {
        console.warn('Slow First Contentful Paint detected:', metrics.firstContentfulPaint);
      }
      if (metrics.loadComplete > 5000) {
        console.warn('Slow page load detected:', metrics.loadComplete);
      }
    };
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
    // Monitor for performance regressions
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log('Performance measure:', entry.name, entry.duration);
        }
      }
    });
    observer.observe({ entryTypes: ['measure'] });
    return () => {
      window.removeEventListener('load', measurePerformance);
      observer.disconnect();
    };
  }, []);
  return null;
cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
};
export default PerformanceMonitor;