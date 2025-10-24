import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enabled?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enabled = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !enabled) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // These would need to be measured with specific APIs
    const firstInputDelay = 0; // Would need to measure with PerformanceObserver
    const cumulativeLayoutShift = 0; // Would need to measure with PerformanceObserver
    const timeToInteractive = navigation.domContentLoadedEventEnd - navigation.navigationStart;

    const performanceMetrics: PerformanceMetrics = {
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay,
      cumulativeLayoutShift,
      timeToInteractive
    };

    setMetrics(performanceMetrics);
    onMetricsUpdate?.(performanceMetrics);
  }, [onMetricsUpdate, enabled]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [measurePerformance]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  if (!enabled || !metrics) {
    return null;
  }

  return (
    <div className="performance-monitor">
      {/* This component doesn't render anything visible by default */}
      {/* You can add a debug UI here if needed */}
    </div>
  );
};

export default PerformanceMonitor;
