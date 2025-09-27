import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('showPerformanceMonitor') === 'true';
    
    if (!shouldShow) return;

    const measurePerformance = () => {
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const lcp = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;
      
      // Get FID (simulated)
      let fid = null;
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fidEntry = fidEntries[0] as PerformanceEntry & { processingStart?: number };
        fid = (fidEntry.processingStart || 0) - fidEntry.startTime;
      }
      
      // Get CLS (simulated)
      let cls = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      clsEntries.forEach(entry => {
        const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
          cls += layoutShiftEntry.value;
        }
      });

      setMetrics({
        fcp: fcpEntry ? fcpEntry.startTime : null,
        lcp,
        fid,
        cls,
        ttfb: navigation.responseStart - navigation.requestStart,
        loadTime: navigation.loadEventEnd - (navigation as any).navigationStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - (navigation as any).navigationStart
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Re-measure on navigation
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          measurePerformance();
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      window.removeEventListener('load', measurePerformance);
      observer.disconnect();
    };
  }, []);

  const getScore = (value: number | null, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
    if (value === null) return 'unknown';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string): string => {
    switch (score) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Show performance monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getScoreColor(getScore(metrics.fcp, { good: 1800, poor: 3000 }))}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getScoreColor(getScore(metrics.lcp, { good: 2500, poor: 4000 }))}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={getScoreColor(getScore(metrics.fid, { good: 100, poor: 300 }))}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getScoreColor(getScore(metrics.cls, { good: 0.1, poor: 0.25 }))}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className={getScoreColor(getScore(metrics.ttfb, { good: 800, poor: 1800 }))}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className={getScoreColor(getScore(metrics.loadTime, { good: 2000, poor: 4000 }))}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={() => {
            localStorage.setItem('showPerformanceMonitor', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          Hide permanently
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;