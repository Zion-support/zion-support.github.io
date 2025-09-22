import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    isVisible: false
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: prev.cls + entry.value 
            }));
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // Time to First Byte
      const [navigation] = performance.getEntriesByType('navigation');
      if (navigation) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigation.responseStart - navigation.requestStart 
        }));
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
      setMetrics(prev => ({ ...prev, isVisible: true }));
    } else {
      window.addEventListener('load', () => {
        measurePerformance();
        setMetrics(prev => ({ ...prev, isVisible: true }));
      });
    }
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development' || !metrics.isVisible) {
    return null;
  }

  const getScoreColor = (value, thresholds) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  // const getScoreText = (value, thresholds) => {
  //   if (value <= thresholds.good) return 'Good';
  //   if (value <= thresholds.needsImprovement) return 'Needs Improvement';
  //   return 'Poor';
  // };

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold text-cyan-400">Performance Metrics</div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          Core Web Vitals Monitor
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;