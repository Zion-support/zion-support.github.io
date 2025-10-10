'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceData {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  loadTime?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const metrics: PerformanceData = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        ttfb: navigation.responseStart - navigation.requestStart,
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        lcp: 0, // Would need to measure LCP separately
        fid: 0, // Would need to measure FID separately
        cls: 0  // Would need to measure CLS separately
      };

      setPerformanceData(metrics);

      // Send to analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Page Load',
          value: Math.round(metrics.loadTime || 0),
          custom_parameters: metrics
        });
      }
    };

    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Keyboard shortcut to toggle visibility
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <div className="text-sm font-semibold mb-2">Performance Metrics</div>
      <div className="space-y-1 text-xs">
        <div>Load Time: {performanceData.loadTime?.toFixed(2)}ms</div>
        <div>TTFB: {performanceData.ttfb?.toFixed(2)}ms</div>
        <div>FCP: {performanceData.fcp?.toFixed(2)}ms</div>
        <div>LCP: {performanceData.lcp?.toFixed(2)}ms</div>
        <div>FID: {performanceData.fid?.toFixed(2)}ms</div>
        <div>CLS: {performanceData.cls?.toFixed(4)}</div>
      </div>
      <div className="mt-2 pt-2 border-t border-gray-600 text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;