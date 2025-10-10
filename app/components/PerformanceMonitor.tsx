'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
  totalResources: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const performanceMetrics: PerformanceMetrics = {
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
        } : undefined
      };

      setMetrics(performanceMetrics);

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceMetrics);
      }

      // Send metrics to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        
        gtag('event', 'performance_metrics', {
          event_category: 'performance',
          dom_content_loaded: Math.round(performanceMetrics.domContentLoaded),
          load_complete: Math.round(performanceMetrics.loadComplete),
          first_paint: Math.round(performanceMetrics.firstPaint),
          first_contentful_paint: Math.round(performanceMetrics.firstContentfulPaint),
          total_resources: performanceMetrics.totalResources
        });
      }

      // Check for performance issues
      if (performanceMetrics.firstContentfulPaint > 3000) {
        console.warn('Slow First Contentful Paint detected:', performanceMetrics.firstContentfulPaint);
      }
      
      if (performanceMetrics.loadComplete > 5000) {
        console.warn('Slow page load detected:', performanceMetrics.loadComplete);
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

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs text-gray-400 hover:text-white"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>DOM Content Loaded:</span>
            <span className={metrics.domContentLoaded > 1000 ? 'text-red-400' : 'text-green-400'}>
              {Math.round(metrics.domContentLoaded)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>Load Complete:</span>
            <span className={metrics.loadComplete > 2000 ? 'text-red-400' : 'text-green-400'}>
              {Math.round(metrics.loadComplete)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>First Paint:</span>
            <span className={metrics.firstPaint > 1000 ? 'text-red-400' : 'text-green-400'}>
              {Math.round(metrics.firstPaint)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>First Contentful Paint:</span>
            <span className={metrics.firstContentfulPaint > 2000 ? 'text-red-400' : 'text-green-400'}>
              {Math.round(metrics.firstContentfulPaint)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Resources:</span>
            <span>{metrics.totalResources}</span>
          </div>
          {metrics.memoryUsage && (
            <div className="flex justify-between">
              <span>Memory Used:</span>
              <span>
                {Math.round(metrics.memoryUsage.used / 1024 / 1024)}MB
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;