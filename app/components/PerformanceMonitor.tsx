'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance Entry:', entry);
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: entry.startTime
          } as PerformanceMetrics));
        }
        
        if (entry.entryType === 'first-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            firstContentfulPaint: entry.startTime
          } as PerformanceMetrics));
        }
        
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: (prev?.cumulativeLayoutShift || 0) + (entry as any).value
          } as PerformanceMetrics));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-contentful-paint', 'layout-shift'] });

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => ({
        ...prev,
        loadTime,
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
      } as PerformanceMetrics));
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // In development, show performance metrics
  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div>Load Time: {metrics.loadTime?.toFixed(2)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint?.toFixed(2)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint?.toFixed(2)}ms</div>
        <div>CLS: {metrics.cumulativeLayoutShift?.toFixed(4)}</div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;