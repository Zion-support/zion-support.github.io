<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import React from 'react';

const PerformanceMonitor = () => {
  return (
    <div>
      <h1>PerformanceMonitor</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default PerformanceMonitor;
=======
'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstPaint: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      const loadTime = navigation.loadEventEnd - navigation.navigationStart
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.navigationStart
      
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0

      // Measure Core Web Vitals
      let largestContentfulPaint = 0
      let firstInputDelay = 0
      let cumulativeLayoutShift = 0

      // LCP
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          largestContentfulPaint = lastEntry.startTime
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            firstInputDelay = entry.processingStart - entry.startTime
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // CLS
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          cumulativeLayoutShift = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }

      const performanceMetrics: PerformanceMetrics = {
        loadTime: Math.round(loadTime),
        domContentLoaded: Math.round(domContentLoaded),
        firstPaint: Math.round(firstPaint),
        firstContentfulPaint: Math.round(firstContentfulPaint),
        largestContentfulPaint: Math.round(largestContentfulPaint),
        firstInputDelay: Math.round(firstInputDelay),
        cumulativeLayoutShift: Math.round(cumulativeLayoutShift * 1000) / 1000
      }

      setMetrics(performanceMetrics)

      // Log performance issues
      if (loadTime > 3000) {
        console.warn('Slow page load detected:', loadTime + 'ms')
      }
      if (firstContentfulPaint > 1800) {
        console.warn('Slow First Contentful Paint:', firstContentfulPaint + 'ms')
      }
      if (largestContentfulPaint > 2500) {
        console.warn('Slow Largest Contentful Paint:', largestContentfulPaint + 'ms')
      }
      if (firstInputDelay > 100) {
        console.warn('High First Input Delay:', firstInputDelay + 'ms')
      }
      if (cumulativeLayoutShift > 0.1) {
        console.warn('High Cumulative Layout Shift:', cumulativeLayoutShift)
      }
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  if (!isVisible || !metrics) return null

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.poor) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 1000, poor: 3000 })}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">DOM Ready:</span>
          <span className={getScoreColor(metrics.domContentLoaded, { good: 1000, poor: 2000 })}>
            {metrics.domContentLoaded}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
            {metrics.firstContentfulPaint}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
            {metrics.largestContentfulPaint}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
            {metrics.firstInputDelay}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
            {metrics.cumulativeLayoutShift}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitor
>>>>>>> 6d21a698833607de6a5fc802b68ed751e474e57d
=======
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
  onMetricsUpdate?: (_metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
}

interface _LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface _PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}
export default function PerformanceMonitor({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = true
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null,
    totalBlockingTime: null
  });

  useEffect(() => {
    if (!enableRealTimeMonitoring || typeof window === 'undefined') return;

    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = {
        loadTime: null,
        firstContentfulPaint: null,
        largestContentfulPaint: null,
        firstInputDelay: null,
        cumulativeLayoutShift: null,
        timeToInteractive: null,
        totalBlockingTime: null
      };

      // Measure page load time
      if (performance.timing) {
        const timing = performance.timing;
        newMetrics.loadTime = timing.loadEventEnd - timing.navigationStart;
      }

      // Measure Core Web Vitals using Performance Observer
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            newMetrics.firstContentfulPaint = fcpEntry.startTime;
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          newMetrics.largestContentfulPaint = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            newMetrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number };
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          newMetrics.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to Interactive (TTI) - approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const longTasks = entries.filter((entry: PerformanceEntry) => (entry as PerformanceEntry & { duration: number }).duration > 50);
          if (longTasks.length === 0) {
            newMetrics.timeToInteractive = performance.now();
          }
        });
        ttiObserver.observe({ entryTypes: ['longtask'] });

        // Total Blocking Time (TBT) - approximation
        const tbtObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const blockingTime = entries
            .filter((entry: PerformanceEntry) => (entry as PerformanceEntry & { duration: number }).duration > 50)
            .reduce((total, entry: PerformanceEntry) => total + ((entry as PerformanceEntry & { duration: number }).duration - 50), 0);
          newMetrics.totalBlockingTime = blockingTime;
        });
        tbtObserver.observe({ entryTypes: ['longtask'] });
      }

      // Update metrics state
      setMetrics(prevMetrics => ({ ...prevMetrics, ...newMetrics }));

      // Call callback if provided
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }

      // Log to console if enabled
      if (logToConsole) {
        console.log('Performance Metrics Updated:', newMetrics);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enableRealTimeMonitoring, onMetricsUpdate, logToConsole]);

  // Service Worker registration for performance monitoring
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((registrationError) => {
          console.log('Service Worker registration failed:', registrationError);
        });
    }
  }, []);

  // Performance monitoring dashboard (only in development)
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
        <h3 className="font-bold mb-2">Performance Metrics</h3>
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
    );
  }

  return null;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0ece
