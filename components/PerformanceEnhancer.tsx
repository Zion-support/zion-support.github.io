'use client';
;
import React, { useEffect, useState, useCallback } from 'react';
// import { usePerformanceOptimization } from '../src/utils/performanceOptimizer';

interface PerformanceMetrics {
  fcp: number | null;
   lcp: number | null;
   fid: number | null;
   cls: number | null;
   ttfb: number | null;
   loadTime: number | null;
   memoryUsage: number | null;
}
;
const PerformanceEnhancer: React.FC = () => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({;
    fcp: null, lcp: null,;
    fid: null, cls: null,;
    ttfb: null, loadTime: null,;
    memoryUsage: null});
;
  const [isVisible, setIsVisible] = useState(false);
  // const optimizer = usePerformanceOptimization();
;
  // Only show in development or when explicitly enabled;
  useEffect(() => {;
    if (process.env.NODE_ENV === 'development' || process.env['NEXT_PUBLIC_SHOW_PERFORMANCE'] === 'true') {;
      setIsVisible(true);
    }
  }, []);
;
  // Measure Core Web Vitals;
  useEffect(() => {;
    if (typeof window === 'undefined' || !isVisible) return;
;
    const measurePerformance = () => {;
      // Measure First Contentful Paint (FCP);
      if ('PerformanceObserver' in window) {;
        const fcpObserver = new PerformanceObserver((list) => {;
          const entries = list.getEntries();
          const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {;
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
;
        // Measure Largest Contentful Paint (LCP);
        const lcpObserver = new PerformanceObserver((list) => {;
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
;
        // Measure First Input Delay (FID);
        const fidObserver = new PerformanceObserver((list) => {;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {;
            setMetrics(prev => ({;
              ...prev, fid: entry.processingStart - entry.startTime;
            }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
;
        // Measure Cumulative Layout Shift (CLS);
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {;
            if (!entry.hadRecentInput) {;
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
;
        // Measure Time to First Byte (TTFB);
        const navigationObserver = new PerformanceObserver((list) => {;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {;
            setMetrics(prev => ({;
              ...prev, ttfb: entry.responseStart - entry.requestStart;
            }));
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
;
        // Measure page load time;
        window.addEventListener('load', () => {;
          const loadTime = performance.now();
          setMetrics(prev => ({ ...prev, loadTime }));
        });
;
        // Measure memory usage;
        const updateMemoryUsage = () => {;
          if ('memory' in performance) {;
            const memory = (performance as any).memory;
            setMetrics(prev => ({;
              ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB;
            }));
          }
        };
;
        updateMemoryUsage();
        const memoryInterval = setInterval(updateMemoryUsage, 5000);
;
        return () => {;
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
          clearInterval(memoryInterval);
        };
      }
    };
;
    const cleanup = measurePerformance();
    return cleanup;
  }, [isVisible]);
;
  // Send metrics to analytics;
  const sendToAnalytics = useCallback((metricName: string, value: number) => {;
    if (typeof gtag !== 'undefined') {;
      gtag('event', 'web_vitals', {;
        name: metricName, value: Math.round(value), event_category: 'Performance',;
        event_label: metricName, non_interaction: true});
    }
  }, []);
;
  // Send metrics when they change;
  useEffect(() => {;
    Object.entries(metrics).forEach(([key, value]) => {;
      if (value !== null && value !== undefined) {;
        sendToAnalytics(key.toUpperCase(), value);
      }
    });
  }, [metrics, sendToAnalytics]);
;
  if (!isVisible) return null;
;
  const getScoreColor = (value: number | null, thresholds: { good: number needsImprovement: number }) => {;
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };
;
  const getScoreText = (value: number | null, thresholds: { good: number needsImprovement: number }) => {;
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good'
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };
;
  return (;
    <div className='fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50'>;
      <h3 className='text-sm font-semibold text-gray-900 mb-3'>Performance Metrics</h3>
      <div className='space-y-2 text-xs'>
        <div className='flex justify-between'>
          <span>FCP: </span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'Measuring...'}
          </span>
        </div>
        {metrics.memoryUsage && (;
          <div className='flex justify-between'>
            <span>Memory:</span>
            <span className={getScoreColor(metrics.memoryUsage, { good: 50, needsImprovement: 100 })}>
              {Math.round(metrics.memoryUsage)}MB;
            </span>
          </div>
        )}
      </div>
      <div className='mt-3 pt-2 border-t border-gray-200'>
        <div className='text-xs text-gray-500'>
          Overall Score: {(() => {;
            const scores = [
              getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 }), getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 }), getScoreText(metrics.fid, { good: 100, needsImprovement: 300 }), getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })];
;
            const goodCount = scores.filter(score => score === 'Good').length;
            const totalCount = scores.filter(score => score !== 'Measuring...').length;
;
            if (totalCount === 0) return 'Measuring...';
            if (goodCount === totalCount) return 'Excellent';
            if (goodCount >= totalCount * 0.75) return 'Good';
            if (goodCount >= totalCount * 0.5) return 'Needs Improvement';
            return 'Poor';
          })()}
        </div>
      </div>
    </div>
  );
};
;
export default PerformanceEnhancer;