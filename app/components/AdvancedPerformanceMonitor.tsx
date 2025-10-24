'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (_metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate: _onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  });

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }

    // Measure Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP measurement failed:', error);
    }

    // Measure First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if ('processingStart' in entry && 'startTime' in entry) {
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
      console.warn('FID measurement failed:', error);
    }

    // Measure Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (!('hadRecentInput' in entry) || !entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS measurement failed:', error);
    }

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }
    } catch (error) {
      console.warn('TTFB measurement failed:', error);
    }

    // Measure Memory Usage
    try {
      if ('memory' in performance) {
        const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memory: memoryInfo.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    } catch (error) {
      console.warn('Memory measurement failed:', error);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measureWebVitals();

    // Update metrics periodically
    const interval = setInterval(() => {
      measureWebVitals();
    }, 5000);

    return () => {
      cleanup?.();
      clearInterval(interval);
    };
  }, [measureWebVitals, enableRealTimeMonitoring]);

  useEffect(() => {
    if (_onMetricsUpdate) {
      _onMetricsUpdate(metrics);
    }
  }, [metrics, _onMetricsUpdate]);

  return null; // This component doesn't render anything visible
};

export default AdvancedPerformanceMonitor;