'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        firstInputDelay: 0, // Would need to measure this with a different approach
        cumulativeLayoutShift: 0, // Would need to measure this with a different approach
        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      };

      setMetrics(metrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show performance panel on Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible || !metrics) return null;

  const getPerformanceGrade = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return { grade: 'A', color: 'text-green-500' };
    if (value <= thresholds.needsImprovement) return { grade: 'B', color: 'text-yellow-500' };
    return { grade: 'C', color: 'text-red-500' };
  };

  const fcpGrade = getPerformanceGrade(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 });
  const lcpGrade = getPerformanceGrade(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 });
  const ttiGrade = getPerformanceGrade(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 });

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-blue-400">{metrics.loadTime.toFixed(0)}ms</span>
        </div>
        
        <div className="flex justify-between">
          <span>First Contentful Paint:</span>
          <span className={fcpGrade.color}>
            {metrics.firstContentfulPaint.toFixed(0)}ms ({fcpGrade.grade})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Largest Contentful Paint:</span>
          <span className={lcpGrade.color}>
            {metrics.largestContentfulPaint.toFixed(0)}ms ({lcpGrade.grade})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Time to Interactive:</span>
          <span className={ttiGrade.color}>
            {metrics.timeToInteractive.toFixed(0)}ms ({ttiGrade.grade})
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <p className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </p>
      </div>
    </div>
  );
}