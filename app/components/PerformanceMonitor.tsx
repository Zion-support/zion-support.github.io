import React, { useEffect, useState } from 'react';

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
    const updateMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const newMetrics: PerformanceMetrics = {
          lcp: null,
          fid: null,
          cls: null,
          fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || null,
          ttfb: navigation?.responseStart - navigation?.requestStart || null,
          memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
        };

        setMetrics(newMetrics);

        if (enableConsoleLogging) {
          console.log('Performance Metrics:', newMetrics);
        }
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, reportInterval);

    return () => clearInterval(interval);
  }, [enableConsoleLogging, reportInterval]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;