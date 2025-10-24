'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      setIsMonitoring(true);
      
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime
              } as PerformanceMetrics));
            }
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });

      // Get page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        } as PerformanceMetrics));
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  if (!isMonitoring) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm">
      <h3 className="text-lg font-semibold mb-2">Performance Monitor</h3>
      {metrics ? (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className="font-mono">{metrics.loadTime?.toFixed(2)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className="font-mono">{metrics.firstContentfulPaint?.toFixed(2)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className="font-mono">{metrics.largestContentfulPaint?.toFixed(2)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className="font-mono">{metrics.cumulativeLayoutShift?.toFixed(4)}</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Collecting metrics...</p>
      )}
    </div>
  );
};

export default PerformanceMonitor;
