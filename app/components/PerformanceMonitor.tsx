'use client';

import React, { useEffect, useState } from 'react';
import { useAnalytics } from './AnalyticsProvider';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint;
  lcp: number | null; // Largest Contentful Paint;
  fid: number | null; // First Input Delay;
  cls: number | null; // Cumulative Layout Shift;
  ttfb: number | null; // Time to First Byte;
  fmp: number | null; // First Meaningful Paint;
}

const PerformanceMonitor: React.FC = ( => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null;
  });
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Only run in browser;
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals;
    monitorCoreWebVitals();

    // Monitor other performance metrics;
    monitorPerformanceMetrics();

    // Monitor resource loading;
    monitorResourceLoading();

    // Monitor memory usage;
    monitorMemoryUsage();

    // Show performance panel in development;
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  const monitorCoreWebVitals = () => {
    // First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          trackEvent('performance_metric', {
            metric: 'FCP',
            value: Math.round(fcpEntry.startTime,
            category: 'performance'
          });
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        trackEvent('performance_metric', {
          metric: 'LCP',
          value: Math.round(lastEntry.startTime,
          category: 'performance'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          trackEvent('performance_metric', {
            metric: 'FID',
            value: Math.round(entry.processingStart - entry.startTime,
            category: 'performance'
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
            trackEvent('performance_metric', {
              metric: 'CLS',
              value: Math.round(clsValue * 1000 / 1000,
              category: 'performance'
            });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  };

  const monitorPerformanceMetrics = () => {
    // Time to First Byte (TTFB)
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
        trackEvent('performance_metric', {
          metric: 'TTFB',
          value: Math.round(ttfb,
          category: 'performance'
        });
      }
    });

    // First Meaningful Paint (FMP) - approximation;
    if ('PerformanceObserver' in window) {
      const fmpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
        if (fmpEntry) {
          setMetrics(prev => ({ ...prev, fmp: fmpEntry.startTime }));
          trackEvent('performance_metric', {
            metric: 'FMP',
            value: Math.round(fmpEntry.startTime,
            category: 'performance'
          });
        }
      });
      fmpObserver.observe({ entryTypes: ['paint'] });
    }
  };

  const monitorResourceLoading = () => {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.duration > 1000 { // Resources taking more than 1 second;
            trackEvent('slow_resource', {
              resource: entry.name,
              duration: Math.round(entry.duration,
              size: entry.transferSize || 0,
              category: 'performance'
            });
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  };

  const monitorMemoryUsage = () => {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        trackEvent('memory_usage', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024, // MB;
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024, // MB;
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024, // MB;
          category: 'performance'
        });
      };

      // Check memory usage every 30 seconds;
      setInterval(checkMemory, 30000);
      checkMemory(); // Initial check;
    }
  };

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <button;
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover: text-gray-600"
        >
          ×
        </button>
      </div>
    // Resource timing analysis;
    const analyzeResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);

      if (slowResources.length > 0 {
        console.warn('Slow resources detected:', slowResources.map((r: any => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize;
        })));
      }
    };

    // Memory usage monitoring;
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1048576, // MB;
          total: Math.round(memory.totalJSHeapSize / 1048576, // MB;
          limit: Math.round(memory.jsHeapSizeLimit / 1048576 // MB;
        };

        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Network information;
    const monitorNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const networkInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt;
        };

        console.log('Network information:', networkInfo);
      }
    };

    // Run measurements;
    measureWebVitals();
    analyzeResources();
    monitorMemory();
    monitorNetwork();

    // Log performance metrics;
    const logMetrics = () => {
      console.log('Performance Metrics:', metrics);

      // Send to analytics if available;
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;

      <div className="space-y-3">
        {/* FCP */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">First Contentful Paint</span>
          <div className="text-right">
            <span className={`text-sm font-bold ${getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}`}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
            <div className="text-xs text-gray-500">
              {getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
            </div>
          </div>
        </div>

        {/* LCP */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Largest Contentful Paint</span>
          <div className="text-right">
            <span className={`text-sm font-bold ${getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
            <div className="text-xs text-gray-500">
              {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
            </div>
          </div>
        </div>

        {/* FID */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">First Input Delay</span>
          <div className="text-right">
            <span className={`text-sm font-bold ${getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}`}>
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
            </span>
            <div className="text-xs text-gray-500">
              {getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })}
            </div>
          </div>
        </div>

        {/* CLS */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Cumulative Layout Shift</span>
          <div className="text-right">
            <span className={`text-sm font-bold ${getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
            <div className="text-xs text-gray-500">
              {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
            </div>
          </div>
        </div>

        {/* TTFB */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Time to First Byte</span>
          <div className="text-right">
            <span className={`text-sm font-bold ${getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}`}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
            <div className="text-xs text-gray-500">
              {getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <button;
          onClick={() => window.location.reload()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors text-sm"
        >
          Refresh Metrics;
        </button>
      </div>
    </div>
  );
        if (metrics.fcp gtag('event', 'web_vitals', { metric_name: 'FCP', metric_value: Math.round(metrics.fcp });
        if (metrics.lcp) gtag('event', 'web_vitals', { metric_name: 'LCP', metric_value: Math.round(metrics.lcp });
        if (metrics.fid) gtag('event', 'web_vitals', { metric_name: 'FID', metric_value: Math.round(metrics.fid });
        if (metrics.cls) gtag('event', 'web_vitals', { metric_name: 'CLS', metric_value: Math.round(metrics.cls * 1000 / 1000 });
        if (metrics.ttfb) gtag('event', 'web_vitals', { metric_name: 'TTFB', metric_value: Math.round(metrics.ttfb });
      }
    };

    // Log metrics after a delay to allow for measurements;
    const timeoutId = setTimeout(logMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [metrics]);

  // Don't render anything visible;
  return null;
};

export default PerformanceMonitor;