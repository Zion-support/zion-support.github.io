'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToInteractive: number | null;
  totalBlockingTime: number | null}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean}

<<<<<<< HEAD
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
=======
interface _LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean}

interface _PerformanceEventTiming extends PerformanceEntry {
  processingStart: number}
export default function PerformanceMonitor({
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
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
<<<<<<< HEAD
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        newMetrics.loadTime = loadTime;
      }
=======
        const timing = performance.timing;
        newMetrics.loadTime = timing.loadEventEnd - timing.navigationStart}
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

      // Measure Web Vitals using Performance Observer
      if ('PerformanceObserver' in window) {
<<<<<<< HEAD
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
=======
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            newMetrics.firstContentfulPaint = fcpEntry.startTime}
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          newMetrics.largestContentfulPaint = lastEntry.startTime});
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            newMetrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime})});
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number };
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value}
          });
          newMetrics.cumulativeLayoutShift = clsValue});
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to Interactive (TTI) - approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const longTasks = entries.filter((entry: PerformanceEntry) => (entry as PerformanceEntry & { duration: number }).duration > 50);
          if (longTasks.length === 0) {
            newMetrics.timeToInteractive = performance.now()}
        });
        ttiObserver.observe({ entryTypes: ['longtask'] });

        // Total Blocking Time (TBT) - approximation
        const tbtObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const blockingTime = entries
            .filter((entry: PerformanceEntry) => (entry as PerformanceEntry & { duration: number }).duration > 50)
            .reduce((total, entry: PerformanceEntry) => total + ((entry as PerformanceEntry & { duration: number }).duration - 50), 0);
          newMetrics.totalBlockingTime = blockingTime});
        tbtObserver.observe({ entryTypes: ['longtask'] })}
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

      setMetrics(newMetrics);
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics)}

      if (logToConsole) {
<<<<<<< HEAD
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
=======
        console.log('Performance Metrics Updated:', newMetrics)}
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()} else {
      window.addEventListener('load', measurePerformance)}

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance)}}, [enableRealTimeMonitoring, onMetricsUpdate, logToConsole]);

  // Service Worker registration for performance monitoring
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration)})
        .catch((registrationError) => {
          console.log('Service Worker registration failed:', registrationError)})}
  }, []);

  // Performance monitoring dashboard (only in development)
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixedbottom-4right-4bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
        <h3 className="font-boldmb-2">Performance Metrics</h3>
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}</div>
          <div>FCP: {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(2)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(2)}ms` : 'N/A'}</div>
          <div>FID: {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(2)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}</div>
          <div>TTI: {metrics.timeToInteractive ? `${metrics.timeToInteractive.toFixed(2)}ms` : 'N/A'}</div>
          <div>TBT: {metrics.totalBlockingTime ? `${metrics.totalBlockingTime.toFixed(2)}ms` : 'N/A'}</div>
        </div>
      </div>
    )}

  return null}
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
