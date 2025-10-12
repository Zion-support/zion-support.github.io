'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  fmp: number | null;
  si: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    fmp: null,
    si: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  const measureLCP = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        updateMetrics({ lcp: lastEntry.startTime });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP measurement failed:', error);
    }
  }, [updateMetrics]);

  const measureFID = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          updateMetrics({ fid: entry.processingStart - entry.startTime });
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID measurement failed:', error);
    }
  }, [updateMetrics]);

  const measureCLS = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            updateMetrics({ cls: clsValue });
          }
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS measurement failed:', error);
    }
  }, [updateMetrics]);

  const measureFCP = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.name === 'first-contentful-paint') {
            updateMetrics({ fcp: entry.startTime });
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }
  }, [updateMetrics]);

  const measureTTFB = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        updateMetrics({ ttfb: navigation.responseStart - navigation.requestStart });
      }
    } catch (error) {
      console.warn('TTFB measurement failed:', error);
    }
  }, [updateMetrics]);

  const measureFMP = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.name === 'first-meaningful-paint') {
            updateMetrics({ fmp: entry.startTime });
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('FMP measurement failed:', error);
    }
  }, [updateMetrics]);

  const measureSI = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.name === 'speed-index') {
            updateMetrics({ si: entry.startTime });
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('SI measurement failed:', error);
    }
  }, [updateMetrics]);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);
    
    // Start all measurements
    measureLCP();
    measureFID();
    measureCLS();
    measureFCP();
    measureTTFB();
    measureFMP();
    measureSI();

    // Report metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (enableReporting) {
          // Send metrics to analytics service
          console.log('Performance Metrics:', metrics);
        }
      }, 1000);
    });
  }, [isMonitoring, measureLCP, measureFID, measureCLS, measureFCP, measureTTFB, measureFMP, measureSI, enableReporting, metrics]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    startMonitoring();

    return () => {
      stopMonitoring();
    };
  }, [startMonitoring, stopMonitoring]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback(() => {
    const scores = {
      lcp: metrics.lcp ? (metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 80 : 60) : 0,
      fid: metrics.fid ? (metrics.fid < 100 ? 100 : metrics.fid < 300 ? 80 : 60) : 0,
      cls: metrics.cls ? (metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 80 : 60) : 0,
      fcp: metrics.fcp ? (metrics.fcp < 1800 ? 100 : metrics.fcp < 3000 ? 80 : 60) : 0,
      ttfb: metrics.ttfb ? (metrics.ttfb < 800 ? 100 : metrics.ttfb < 1800 ? 80 : 60) : 0
    };

    const validScores = Object.values(scores).filter(score => score > 0);
    return validScores.length > 0 ? Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length) : 0;
  }, [metrics]);

  const performanceScore = calculatePerformanceScore();

  return (
    <div className="performance-monitor">
      {enableReporting && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50">
          <h3 className="text-sm font-semibold mb-2">Performance Monitor</h3>
          <div className="space-y-1 text-xs">
            <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}</div>
            <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}</div>
            <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
            <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}</div>
            <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}</div>
            <div className="pt-2 border-t border-gray-600">
              <div className="font-semibold">Score: {performanceScore}/100</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;