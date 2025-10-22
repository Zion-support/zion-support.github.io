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
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      });
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`performance-monitor ${className}`}>
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span>Load Time:</span>
          <span>{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>DOM Content Loaded:</span>
          <span>{metrics.domContentLoaded.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>First Paint:</span>
          <span>{metrics.firstPaint.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>First Contentful Paint:</span>
          <span>{metrics.firstContentfulPaint.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;