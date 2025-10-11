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

  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    updateMetric('loadTime', loadTime);

    // Web Vitals measurement
    const measureWebVitals = () => {
      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            updateMetric('lcp', lastEntry.startTime);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP measurement failed:', e);
        }

        // FID (First Input Delay)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              updateMetric('fid', entry.processingStart - entry.startTime);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID measurement failed:', e);
        }

        // CLS (Cumulative Layout Shift)
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                updateMetric('cls', clsValue);
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS measurement failed:', e);
        }

        // FCP (First Contentful Paint)
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                updateMetric('fcp', entry.startTime);
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP measurement failed:', e);
        }
      }

      // TTFB (Time to First Byte)
      try {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          updateMetric('ttfb', navigationEntry.responseStart - navigationEntry.requestStart);
        }
      } catch (e) {
        console.warn('TTFB measurement failed:', e);
      }
    };

    // Start measuring after a short delay to ensure page is loaded
    const timeoutId = setTimeout(measureWebVitals, 1000);

    // Show performance panel after 3 seconds
    const visibilityTimeoutId = setTimeout(() => setIsVisible(true), 3000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(visibilityTimeoutId);
    };
  }, [updateMetric]);

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 shadow-2xl z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Load Time:</span>
          <span className="text-cyan-400">
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'Measuring...'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          <div>Overall Score: {
            metrics.lcp && metrics.fid && metrics.cls ? 
              (metrics.lcp <= 2500 && metrics.fid <= 100 && metrics.cls <= 0.1 ? 'Excellent' : 
               metrics.lcp <= 4000 && metrics.fid <= 300 && metrics.cls <= 0.25 ? 'Good' : 'Needs Improvement') :
              'Calculating...'
          }</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;