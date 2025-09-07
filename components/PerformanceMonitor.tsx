'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceData {
  domContentLoaded: number;
  loadComplete: number;
  totalLoadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  resourceCount: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void;
}

// Extend the Window interface to include performance
declare global {
  interface Window {
    performance: Performance;
  }
}

export default function PerformanceMonitor({ onPerformanceData }: PerformanceMonitorProps) {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);

  useEffect(() => {
    const collectPerformanceData = () => {
      if (typeof window === 'undefined' || !window.performance) {
        return;
      }

      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      const resources = window.performance.getEntriesByType('resource');

      const firstPaint = paintEntries.find(entry => entry.name.includes('first-paint'))?.startTime || 0;
      const firstContentfulPaint = paintEntries.find(entry => entry.name.includes('first-contentful-paint'))?.startTime || 0;

      const data: PerformanceData = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        firstPaint,
        firstContentfulPaint,
        resourceCount: resources.length,
        memory: (window.performance as any).memory ? {
          used: (window.performance as any).memory.usedJSHeapSize,
          total: (window.performance as any).memory.totalJSHeapSize,
          limit: (window.performance as any).memory.jsHeapSizeLimit
        } : null
      };

      setPerformanceData(data);
      onPerformanceData?.(data);
    };

    // Collect data when component mounts
    if (document.readyState === 'complete') {
      collectPerformanceData();
    } else {
      window.addEventListener('load', collectPerformanceData);
    }

    return () => {
      window.removeEventListener('load', collectPerformanceData);
    };
  }, [onPerformanceData]);

  if (!performanceData) {
    return null;
  }

  return (
    <div className="performance-monitor fixed bottom-4 left-4 z-50 bg-black bg-opacity-75 text-white text-xs p-2 rounded font-mono">
      <div>DOM Load: {performanceData.domContentLoaded.toFixed(2)}ms</div>
      <div>Total Load: {performanceData.totalLoadTime.toFixed(2)}ms</div>
      <div>First Paint: {performanceData.firstPaint.toFixed(2)}ms</div>
      <div>FCP: {performanceData.firstContentfulPaint.toFixed(2)}ms</div>
      <div>Resources: {performanceData.resourceCount}</div>
      {performanceData.memory && (
        <div>Memory: {(performanceData.memory.used / 1024 / 1024).toFixed(1)}MB</div>
      )}
    </div>
  );
}