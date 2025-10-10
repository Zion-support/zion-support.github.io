'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Web Vitals monitoring
    const observeWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            updateMetrics({ lcp: lastEntry.startTime });
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observation not supported');
        }

        // FID - First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              updateMetrics({ fid: entry.processingStart - entry.startTime });
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observation not supported');
        }

        // CLS - Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                updateMetrics({ cls: clsValue });
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observation not supported');
        }

        // FCP - First Contentful Paint
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                updateMetrics({ fcp: entry.startTime });
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observation not supported');
        }
      }
    };

    // TTFB - Time to First Byte
    const measureTTFB = () => {
      if ('performance' in window && 'timing' in window.performance) {
        const timing = window.performance.timing;
        const ttfb = timing.responseStart - timing.navigationStart;
        updateMetrics({ ttfb });
      }
    };

    // Initialize monitoring
    observeWebVitals();
    measureTTFB();

    // Show monitor after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && localStorage.getItem('performance-monitoring') !== 'true') {
    return null;
  }

  if (!isVisible) return null;

  const getScoreColor = (metric: string, value?: number) => {
    if (value === undefined) return 'text-gray-400';
    
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fcp: { good: 1800, needsImprovement: 3000 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-400';

    if (value <= threshold.good) return 'text-green-400';
    if (value <= threshold.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (metric: string, value?: number) => {
    if (value === undefined) return 'N/A';
    
    if (metric === 'cls') {
      return value.toFixed(3);
    }
    
    return `${Math.round(value)}ms`;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor('lcp', metrics.lcp)}>
            {formatValue('lcp', metrics.lcp)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor('fid', metrics.fid)}>
            {formatValue('fid', metrics.fid)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor('cls', metrics.cls)}>
            {formatValue('cls', metrics.cls)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor('fcp', metrics.fcp)}>
            {formatValue('fcp', metrics.fcp)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor('ttfb', metrics.ttfb)}>
            {formatValue('ttfb', metrics.ttfb)}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-700">
        <div className="text-gray-400 text-xs">
          <div>Green: Good</div>
          <div>Yellow: Needs Improvement</div>
          <div>Red: Poor</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;