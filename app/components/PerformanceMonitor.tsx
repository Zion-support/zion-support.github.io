'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
    };

    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      updateMetric('lcp', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        updateMetric('fid', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          updateMetric('cls', clsValue);
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        updateMetric('fcp', entry.startTime);
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetric('ttfb', navigationEntry.responseStart - navigationEntry.requestStart);
    }

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 1000) { // Log slow resources
          console.warn('Slow resource detected:', {
            name: entry.name,
            duration: entry.duration,
            type: entry.initiatorType,
          });
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.warn('Long task detected:', {
          duration: entry.duration,
          startTime: entry.startTime,
        });
      });
    });
    longTaskObserver.observe({ entryTypes: ['longtask'] });

    // Cleanup
    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      resourceObserver.disconnect();
      longTaskObserver.disconnect();
    };
  }, []);

  // Log performance metrics
  useEffect(() => {
    const allMetricsSet = Object.values(metrics).every(value => value !== null);
    if (allMetricsSet) {
      console.log('Performance Metrics:', metrics);
      
      // Send metrics to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          fcp: metrics.fcp,
          ttfb: metrics.ttfb,
        });
      }
    }
  }, [metrics]);

  // Monitor memory usage
  useEffect(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory) {
          const usedJSHeapSize = memory.usedJSHeapSize / 1024 / 1024; // MB
          const totalJSHeapSize = memory.totalJSHeapSize / 1024 / 1024; // MB
          
          if (usedJSHeapSize > 100) { // Alert if memory usage is high
            console.warn('High memory usage detected:', {
              used: `${usedJSHeapSize.toFixed(2)} MB`,
              total: `${totalJSHeapSize.toFixed(2)} MB`,
            });
          }
        }
      };

      const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    }
  }, []);

  // Monitor network conditions
  useEffect(() => {
    if (typeof window !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        console.log('Network conditions:', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        });
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;