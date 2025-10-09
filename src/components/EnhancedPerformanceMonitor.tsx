'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tbt: number | null;
  si: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  reportInterval?: number;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  reportInterval = 10000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tbt: null,
    si: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    // Measure First Meaningful Paint (FMP)
    const fmpEntries = performance.getEntriesByName('first-meaningful-paint') || [];
    const fmp = fmpEntries.length > 0 ? fmpEntries[0].startTime : null;

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
      } catch (error) {
        console.warn('LCP observer not supported:', error);
      }
    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.processingStart && entry.startTime) {
              setMetrics(prev => ({ 
                ...prev, 
                fid: entry.processingStart - entry.startTime 
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
      } catch (error) {
        console.warn('FID observer not supported:', error);
      }
    }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
      } catch (error) {
        console.warn('CLS observer not supported:', error);
      }
    }

    // Measure Total Blocking Time (TBT)
    if ('PerformanceObserver' in window) {
      try {
        let tbtValue = 0;
        const tbtObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.duration > 50) {
              tbtValue += entry.duration - 50;
            }
          });
          setMetrics(prev => ({ ...prev, tbt: tbtValue }));
        });
        tbtObserver.observe({ entryTypes: ['longtask'] });
        observers.push(tbtObserver);
      } catch (error) {
        console.warn('TBT observer not supported:', error);
      }
    }

    // Measure Speed Index (SI)
    if ('PerformanceObserver' in window) {
      try {
        const siObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, si: entry.startTime }));
            }
          });
        });
        siObserver.observe({ entryTypes: ['paint'] });
        observers.push(siObserver);
      } catch (error) {
        console.warn('SI observer not supported:', error);
      }
    }

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : null;

    // Update metrics
    setMetrics(prev => ({
      ...prev,
      fcp,
      fmp,
      ttfb,
    }));

    // Reporting interval
    let reportTimer: NodeJS.Timeout;
    if (enableReporting) {
      reportTimer = setInterval(() => {
        const currentMetrics = {
          ...metrics,
          fcp,
          fmp,
          ttfb,
        };
        
        // Send metrics to analytics service
        if (onMetricsUpdate) {
          onMetricsUpdate(currentMetrics);
        }

        // Send to external service
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_metrics', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            custom_map: currentMetrics,
          });
        }
      }, reportInterval);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
      if (reportTimer) {
        clearInterval(reportTimer);
      }
    };
  }, [enableReporting, reportInterval, onMetricsUpdate]);

  // Don't render anything - this is a monitoring component
  return null;
};

export default EnhancedPerformanceMonitor;