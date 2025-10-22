'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
}

interface PerformanceMonitorProps {
  isVisible?: boolean;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ isVisible = false, className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && isVisible) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({
              ...prev,
              loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });

      return () => observer.disconnect();
    }
    return undefined;
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`performance-monitor ${className}`}>
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">Load Time:</span>
          <span className="metric-value">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">DOM Ready:</span>
          <span className="metric-value">{metrics.domContentLoaded.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;