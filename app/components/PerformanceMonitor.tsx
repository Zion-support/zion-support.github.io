'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

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
  showDashboard?: boolean;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = true,
  showDashboard = false,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null,
    totalBlockingTime: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

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
          entries.forEach((entry: PerformanceEntry & { processingStart: number }) => {
            newMetrics.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { hadRecentInput: boolean; value: number }) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to Interactive (TTI) - approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const longTasks = entries.filter((entry: PerformanceEntry) => entry.duration > 50);
          if (longTasks.length === 0) {
            newMetrics.timeToInteractive = performance.now();
          }
        });
        ttiObserver.observe({ entryTypes: ['longtask'] });

        // Total Blocking Time (TBT) - approximation
        const tbtObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const blockingTime = entries
            .filter((entry: PerformanceEntry) => entry.duration > 50)
            .reduce((total, entry: PerformanceEntry) => total + (entry.duration - 50), 0);
          newMetrics.totalBlockingTime = blockingTime;
        });
        tbtObserver.observe({ entryTypes: ['longtask'] });
      }

      // Update metrics state
      setMetrics(prevMetrics => ({ ...prevMetrics, ...newMetrics }));
      setIsMonitoring(true);

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

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return <Clock className="w-4 h-4" />;
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4" />;
    if (value <= thresholds.needsImprovement) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!showDashboard) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg text-xs font-mono max-w-xs z-50 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-emerald-400" />
        <h3 className="font-bold text-sm">Performance Metrics</h3>
        {isMonitoring && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Load Time:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}
            <span className={getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
              {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>FCP:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}
            <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>
              {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>LCP:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}
            <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>
              {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>FID:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}
            <span className={getScoreColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}>
              {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>CLS:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}
            <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>TTI:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })}
            <span className={getScoreColor(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })}>
              {metrics.timeToInteractive ? `${metrics.timeToInteractive.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>TBT:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.totalBlockingTime, { good: 200, needsImprovement: 600 })}
            <span className={getScoreColor(metrics.totalBlockingTime, { good: 200, needsImprovement: 600 })}>
              {metrics.totalBlockingTime ? `${metrics.totalBlockingTime.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Global performance monitoring utilities
export const performanceUtils = {
  // Measure custom performance marks
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  },
  
  // Measure time between marks
  measure: (name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }
    }
  },
  
  // Get performance entries
  getEntries: (type?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return type ? performance.getEntriesByType(type) : performance.getEntries();
    }
    return [];
  },
  
  // Clear performance entries
  clearEntries: (type?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (type) {
        performance.clearMeasures(type);
        performance.clearMarks(type);
      } else {
        performance.clearMeasures();
        performance.clearMarks();
      }
    }
  }
};

// Google Analytics integration for performance tracking
export const trackPerformanceToGA = (metrics: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as { gtag: (..._args: unknown[]) => void }).gtag('event', 'performance_metrics', {
      event_category: 'Performance',
      event_label: 'Core Web Vitals',
      custom_map: {
        load_time: metrics.loadTime,
        first_contentful_paint: metrics.firstContentfulPaint,
        largest_contentful_paint: metrics.largestContentfulPaint,
        first_input_delay: metrics.firstInputDelay,
        cumulative_layout_shift: metrics.cumulativeLayoutShift,
        time_to_interactive: metrics.timeToInteractive,
        total_blocking_time: metrics.totalBlockingTime
      }
    });
  }
};

export default PerformanceMonitor;