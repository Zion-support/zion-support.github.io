import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
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
  reportInterval = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    memoryUsage: 0,
  });

  const [, setPerformanceScore] = useState(0);

  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const firstContentfulPaint = fcp ? fcp.startTime : 0;

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const largestContentfulPaint = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : 0;

      // Get FID
      const fidEntries = performance.getEntriesByType('first-input');
      const firstInputDelay = fidEntries.length > 0 ? fidEntries[0].processingStart - fidEntries[0].startTime : 0;

      // Get CLS
      const clsEntries = performance.getEntriesByType('layout-shift');
      const cumulativeLayoutShift = clsEntries.reduce((cls, entry) => {
        return cls + (entry as any).value;
      }, 0);

      // Get memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // Convert to MB

      const newMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        memoryUsage,
      };

      setMetrics(newMetrics);

      // Calculate performance score
      const score = calculatePerformanceScore(newMetrics);
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        console.log('Performance Metrics:', newMetrics);
        console.log('Performance Score:', score);
      }

    } catch (error) {
      if (enableConsoleLogging) {
        console.error('Error collecting performance metrics:', error);
      }
    }
  }, [enableConsoleLogging]);

  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // Deduct points for poor performance
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 2000) score -= 10;

    if (metrics.firstContentfulPaint > 1800) score -= 20;
    else if (metrics.firstContentfulPaint > 1200) score -= 10;

    if (metrics.largestContentfulPaint > 2500) score -= 20;
    else if (metrics.largestContentfulPaint > 2000) score -= 10;

    if (metrics.firstInputDelay > 100) score -= 20;
    else if (metrics.firstInputDelay > 50) score -= 10;

    if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;

    if (metrics.memoryUsage > 50) score -= 10;

    return Math.max(0, score);
  };

  useEffect(() => {
    // Initial collection
    collectWebVitals();

    // Set up periodic collection
    const interval = setInterval(collectWebVitals, reportInterval);

    // Listen for page visibility changes
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        collectWebVitals();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [collectWebVitals, reportInterval]);

  // Report metrics (if enabled)
  useEffect(() => {
    if (enableReporting && metrics.loadTime > 0) {
      // Here you would typically send metrics to your analytics service
      // For now, we'll just log them
      if (enableConsoleLogging) {
        console.log('Reporting performance metrics:', metrics);
      }
    }
  }, [metrics, enableReporting, enableConsoleLogging]);

  return (
    <div className="performance-monitor">
      {/* This component doesn't render anything visible by default */}
      {/* You can add a debug panel here if needed */}
    </div>
  );
};

export default PerformanceMonitor;