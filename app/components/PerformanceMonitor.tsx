
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
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-contentful-paint', 'navigation'] });

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }));
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (enableReporting && metrics.lcp && metrics.fcp) {
      const score = calculatePerformanceScore(metrics);
      setPerformanceScore(score);
      
      if (enableConsoleLogging) {
        console.log('Performance Metrics:', metrics);
        console.log('Performance Score:', score);
      }
    }
  }, [metrics, enableReporting, enableConsoleLogging]);

  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fcp && metrics.fcp > 1800) score -= 15;
    if (metrics.cls && metrics.cls > 0.1) score -= 15;
    if (metrics.fid && metrics.fid > 100) score -= 10;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 10;
    
    return Math.max(0, score);
  };

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
