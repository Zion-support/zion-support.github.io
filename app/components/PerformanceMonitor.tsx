'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    // Web Vitals measurement
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Cleanup observers after 10 seconds
      setTimeout(() => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      }, 10000);
    };

    // Show performance panel after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || Object.keys(metrics).length === 0) {
    return null}
;
const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400'};
;
const getScoreText = (value: number, thresholds: { good: number; poor: number }) =>
);
} {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor'};

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Performance</h3>
        <button
          onClick={() => setIsVisible(false);
          className="text-gray-400 hover:text-white"
import { useAnalytics } from './AnalyticsProvider';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  fmp: number | null; // First Meaningful Paint
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    monitorCoreWebVitals();
    
    // Monitor other performance metrics
    monitorPerformanceMetrics();

    // Monitor resource loading
    monitorResourceLoading();

    // Monitor memory usage
    monitorMemoryUsage();

    // Show performance panel in development
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
            value: Math.round(fcpEntry.startTime),
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
          value: Math.round(lastEntry.startTime),
          category: 'performance'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          trackEvent('performance_metric', {
            metric: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
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
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
            trackEvent('performance_metric', {
              metric: 'CLS',
              value: Math.round(clsValue * 1000) / 1000,
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
          value: Math.round(ttfb),
          category: 'performance'
        });
      }
    });

    // First Meaningful Paint (FMP) - approximation
    if ('PerformanceObserver' in window) {
      const fmpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
        if (fmpEntry) {
          setMetrics(prev => ({ ...prev, fmp: fmpEntry.startTime }));
          trackEvent('performance_metric', {
            metric: 'FMP',
            value: Math.round(fmpEntry.startTime),
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
          if (entry.duration > 1000) { // Resources taking more than 1 second
            trackEvent('slow_resource', {
              resource: entry.name,
              duration: Math.round(entry.duration),
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
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024), // MB
          category: 'performance'
        });
      };

      // Check memory usage every 30 seconds
      setInterval(checkMemory, 30000);
      checkMemory(); // Initial check
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
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize
        })));
      }
    };

    // Memory usage monitoring
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        };
        
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Network information
    const monitorNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const networkInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        };
        
        console.log('Network information:', networkInfo);
      }
    };

    // Run measurements
    measureWebVitals();
    analyzeResources();
    monitorMemory();
    monitorNetwork();

    // Log performance metrics
    const logMetrics = () => {
      console.log('Performance Metrics:', metrics);
      
      // Send to analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
            </span>
          </div>);
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
            </span>
          </div>
        )}
      </div>
    </div>
  );
        if (metrics.fcp) gtag('event', 'web_vitals', { metric_name: 'FCP', metric_value: Math.round(metrics.fcp) });
        if (metrics.lcp) gtag('event', 'web_vitals', { metric_name: 'LCP', metric_value: Math.round(metrics.lcp) });
        if (metrics.fid) gtag('event', 'web_vitals', { metric_name: 'FID', metric_value: Math.round(metrics.fid) });
        if (metrics.cls) gtag('event', 'web_vitals', { metric_name: 'CLS', metric_value: Math.round(metrics.cls * 1000) / 1000 });
        if (metrics.ttfb) gtag('event', 'web_vitals', { metric_name: 'TTFB', metric_value: Math.round(metrics.ttfb) });
      }
    };

    // Log metrics after a delay to allow for measurements
    const timeoutId = setTimeout(logMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [metrics]);

  // Don't render anything visible
  return null;
};

          </div>);
      </div>
    </div>)
export default PerformanceMonitor;