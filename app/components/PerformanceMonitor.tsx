
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [, setPerformanceScore] = useState(0);

  useEffect(() => {
    // Initialize performance monitoring
    const initPerformanceMonitoring = () => {
      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        // LCP - Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID - First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS - Cumulative Layout Shift
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

        // FCP - First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // TTFB - Time to First Byte
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });

        // Memory usage
        const updateMemoryUsage = () => {
          if ('memory' in performance) {
            const memory = (performance as any).memory;
            setMetrics(prev => ({ 
              ...prev, 
              memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
            }));
          }
        };

        updateMemoryUsage();
        const memoryInterval = setInterval(updateMemoryUsage, 1000);

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          fcpObserver.disconnect();
          navigationObserver.disconnect();
          clearInterval(memoryInterval);
        };
      }
    };

    const cleanup = initPerformanceMonitoring();
    return cleanup;
  }, []);

  // Calculate performance score
  useEffect(() => {
    const calculateScore = () => {
      let score = 100;
      
      if (metrics.lcp && metrics.lcp > 2500) score -= 20;
      if (metrics.fid && metrics.fid > 100) score -= 20;
      if (metrics.cls && metrics.cls > 0.1) score -= 20;
      if (metrics.fcp && metrics.fcp > 1800) score -= 20;
      if (metrics.ttfb && metrics.ttfb > 800) score -= 20;
      
      setPerformanceScore(Math.max(0, score));
    };

    calculateScore();
  }, [metrics]);

  // Log metrics if enabled
  useEffect(() => {
    if (enableConsoleLogging) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics, enableConsoleLogging]);

  // Report metrics if enabled
  useEffect(() => {
    if (enableReporting) {
      const interval = setInterval(() => {
        // In a real application, you would send this to an analytics service
        console.log('Reporting performance metrics:', metrics);
      }, reportInterval);

      return () => clearInterval(interval);
    }
  }, [enableReporting, reportInterval, metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
