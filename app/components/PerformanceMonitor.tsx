'use client';

<<<<<<< HEAD
import React, { useEffect, useState, memo } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 49f746e8c3195449347ee8bebb6ca5b0ab732544

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

interface PerformanceMetrics {
  [key: string]: number | undefined;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reportWebVitals = (metric: { name: string; value: number }) => {
      // Log to console in development
      if (process.env['NODE_ENV'] === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // LCP - Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
          });
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // FID - First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
            if (entry.processingStart) {
              const fid = entry.processingStart - entry.startTime;
              reportWebVitals({
                name: 'FID',
                value: fid,
              });
              setMetrics(prev => ({ ...prev, fid }));
            }
          });
        }).observe({ entryTypes: ['first-input'] });

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
              reportWebVitals({
                name: 'CLS',
                value: clsValue,
              });
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        }).observe({ entryTypes: ['layout-shift'] });

        // FCP - First Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            reportWebVitals({
              name: 'FCP',
              value: entry.startTime,
            });
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          });
        }).observe({ entryTypes: ['paint'] });

        // TTFB - Time to First Byte
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { responseStart?: number; requestStart?: number }) => {
            if (entry.responseStart && entry.requestStart && entry.responseStart > 0) {
              const ttfb = entry.responseStart - entry.requestStart;
              reportWebVitals({
                name: 'TTFB',
                value: ttfb,
              });
              setMetrics(prev => ({ ...prev, ttfb }));
            }
          });
        }).observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);

  // Don't render anything in production
  if (process.env['NODE_ENV'] !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="flex justify-between gap-4">
          <span>{key.toUpperCase()}:</span>
          <span className="text-green-400">{value ? `${Math.round(value)}ms` : 'N/A'}</span>
        </div>
      ))}
    </div>
  );
};

export default memo(PerformanceMonitor);