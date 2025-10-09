
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
    const initializeMonitoring = () => {
      if (typeof window === 'undefined') return;

      // Monitor LCP
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEventTiming;
          if (lastEntry) {
            const fid = lastEntry.processingStart - lastEntry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Monitor FCP
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Monitor TTFB
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          setMetrics(prev => ({ ...prev, ttfb }));
        }

        // Monitor memory usage
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          setMetrics(prev => ({ 
            ...prev, 
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }));
        }

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          fcpObserver.disconnect();
        };
      }
    };

    const cleanup = initializeMonitoring();

    // Report metrics periodically
    if (enableReporting) {
      const interval = setInterval(() => {
        if (enableConsoleLogging) {
          console.log('Performance Metrics:', metrics);
        }
      }, reportInterval);

      return () => {
        clearInterval(interval);
        if (cleanup) cleanup();
      };
    }

    return cleanup;
  }, [enableConsoleLogging, enableReporting, reportInterval, metrics]);

  // Calculate performance score
  useEffect(() => {
    const calculateScore = () => {
      let score = 100;
      
      if (metrics.lcp && metrics.lcp > 2500) score -= 20;
      if (metrics.fid && metrics.fid > 100) score -= 20;
      if (metrics.cls && metrics.cls > 0.1) score -= 20;
      if (metrics.fcp && metrics.fcp > 1800) score -= 20;
      if (metrics.ttfb && metrics.ttfb > 600) score -= 20;

      setPerformanceScore(Math.max(0, score));
    };

    calculateScore();
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
