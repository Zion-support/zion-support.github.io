'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToInteractive: number | null;
  totalBlockingTime: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null,
    totalBlockingTime: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = { ...metrics };

      // Measure page load time
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        newMetrics.loadTime = loadTime;
      }

      // Measure Web Vitals using Performance Observer
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              newMetrics.firstContentfulPaint = fcpEntry.startTime;
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (error) {
          if (logToConsole) console.warn('FCP measurement failed:', error);
        }

        // Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              newMetrics.largestContentfulPaint = lastEntry.startTime;
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          if (logToConsole) console.warn('LCP measurement failed:', error);
        }

        // First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (entry.processingStart && entry.startTime) {
                newMetrics.firstInputDelay = entry.processingStart - entry.startTime;
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          if (logToConsole) console.warn('FID measurement failed:', error);
        }

        // Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                newMetrics.cumulativeLayoutShift = clsValue;
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          if (logToConsole) console.warn('CLS measurement failed:', error);
        }
      }

      setMetrics(newMetrics);
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }

      if (logToConsole) {
        console.log('Performance Metrics:', newMetrics);
      }
    };

    // Initial measurement
    measurePerformance();

    // Set up real-time monitoring if enabled
    if (enableRealTimeMonitoring) {
      const interval = setInterval(measurePerformance, 5000);
      return () => clearInterval(interval);
    }
  }, [enableRealTimeMonitoring, logToConsole, onMetricsUpdate]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;