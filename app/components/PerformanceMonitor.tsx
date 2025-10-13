'use client';
import React, { useEffect, useState } from 'react';

// Type definitions for browser APIs
declare global {
  interface PerformanceObserver {
    observe(options: { entryTypes: string[] }): void;
    disconnect(): void;
  }

  interface PerformanceEntry {
    // This extends the built-in PerformanceEntry
  }
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }));
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Log performance metrics
  useEffect(() => {
    if (metrics.lcp > 0 || metrics.fid > 0 || metrics.cls > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return (
    <div className="performance-monitor">
      {children}
      
      {/* Performance indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
          <div>FID: {metrics.fid.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls.toFixed(3)}</div>
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;