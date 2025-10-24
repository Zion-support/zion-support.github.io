"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const navigationEntry = entries.find(
        (entry) => entry.entryType === 'navigation'
      ) as PerformanceNavigationTiming;

      if (navigationEntry) {
        const loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
        const firstContentfulPaint = entries.find(
          (entry) => entry.name === 'first-contentful-paint'
        )?.startTime || 0;

        setMetrics({
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint: 0, // Would need LCP observer
          firstInputDelay: 0, // Would need FID observer
          cumulativeLayoutShift: 0, // Would need CLS observer
        });
      }
    });

    observer.observe({ entryTypes: ['navigation', 'paint'] });

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        <div className="text-gray-400">Press Ctrl+Shift+P to toggle</div>
      </div>
    </div>
  );
}