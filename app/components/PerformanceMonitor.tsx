'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  // Measure Core Web Vitals
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const fid = (entry as any).processingStart - entry.startTime;
        setMetrics(prev => ({ ...prev, fid }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // Load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  // Measure resource loading performance
  const measureResourcePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource');
    const totalSize = resources.reduce((acc, resource) => {
      return acc + (resource as PerformanceResourceTiming).transferSize || 0;
    }, 0);

    console.log('Total resource size:', totalSize, 'bytes');
    console.log('Number of resources:', resources.length);
  }, []);

  // Monitor memory usage
  const monitorMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    console.log('Memory usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
    });
  }, []);

  useEffect(() => {
    const cleanup = measureWebVitals();
    
    // Measure resource performance after load
    window.addEventListener('load', () => {
      measureResourcePerformance();
      monitorMemoryUsage();
    });

    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    return cleanup;
  }, [measureWebVitals, measureResourcePerformance, monitorMemoryUsage]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  }, [metrics]);

  const performanceScore = getPerformanceScore();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-lg rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Score:</span>
          <span className={performanceScore > 80 ? 'text-green-400' : performanceScore > 60 ? 'text-yellow-400' : 'text-red-400'}>
            {performanceScore}/100
          </span>
        </div>
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb < 600 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.ttfb)}ms
            </span>
          </div>
        )}
        
        {metrics.loadTime && (
          <div className="flex justify-between">
            <span>Load:</span>
            <span className={metrics.loadTime < 3000 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.loadTime)}ms
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;