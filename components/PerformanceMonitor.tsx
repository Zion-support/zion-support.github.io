import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enabled?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetricsUpdate, 
  enabled = process.env.NODE_ENV === 'development' 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      // Get Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as PerformanceEntry & { value: number };
            setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsEntry.value } : null);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEntry & { processingStart: number; startTime: number };
            const firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
            setMetrics(prev => prev ? { ...prev, firstInputDelay } : null);
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift', 'first-input'] });

      const newMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      };

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', newMetrics);
      }

      return () => observer.disconnect();
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [enabled, onMetricsUpdate]);

  if (!enabled || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-xs text-slate-300 max-w-xs">
      <div className="font-semibold text-blue-400 mb-2">Performance Monitor</div>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        <div>FID: {metrics.firstInputDelay.toFixed(2)}ms</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;