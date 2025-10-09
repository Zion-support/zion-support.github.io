import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    // Measure TTFB (Time to First Byte)
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    };

    // Measure FCP (First Contentful Paint)
    const measureFCP = () => {
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    };

    // Measure LCP (Largest Contentful Paint)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Measure FID (First Input Delay)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Measure CLS (Cumulative Layout Shift)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Initialize measurements
    measureTTFB();
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        console.log('Performance Metrics:', {
          TTFB: metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A',
          FCP: metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A',
          LCP: metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A',
          FID: metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A',
          CLS: metrics.cls ? metrics.cls.toFixed(3) : 'N/A'
        });
      };

      // Log metrics after 3 seconds
      const timeout = setTimeout(logMetrics, 3000);
      return () => clearTimeout(timeout);
    }
  }, [metrics]);

  // Performance score calculation
  const getPerformanceScore = (): number => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-cyan-500/20 z-50 max-w-sm">
      <h3 className="text-white text-sm font-medium mb-2">Performance Monitor</h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={metrics.fid && metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="pt-2 border-t border-gray-600">
          <div className="flex justify-between">
            <span className="text-gray-300">Score:</span>
            <span className={
              performanceScore >= 90 ? 'text-green-400' :
              performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
            }>
              {performanceScore}/100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;