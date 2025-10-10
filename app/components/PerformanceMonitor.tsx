'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './AnalyticsProvider';

interface PerformanceData {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
}

const PerformanceMonitor: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const data: PerformanceData = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        timeToFirstByte: navigation.responseStart - navigation.requestStart
      };

      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          data.largestContentfulPaint = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            data.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          data.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Cleanup after 10 seconds
        setTimeout(() => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          setPerformanceData(data);
          
          // Track performance metrics
          trackEvent('performance_metrics', {
            category: 'performance',
            load_time: Math.round(data.loadTime),
            dom_content_loaded: Math.round(data.domContentLoaded),
            first_paint: Math.round(data.firstPaint),
            first_contentful_paint: Math.round(data.firstContentfulPaint),
            largest_contentful_paint: Math.round(data.largestContentfulPaint),
            first_input_delay: Math.round(data.firstInputDelay),
            cumulative_layout_shift: Math.round(data.cumulativeLayoutShift * 1000) / 1000,
            time_to_first_byte: Math.round(data.timeToFirstByte)
          });
        }, 10000);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [trackEvent]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Monitor</h3>
      {performanceData ? (
        <div className="space-y-1">
          <div>Load Time: {Math.round(performanceData.loadTime)}ms</div>
          <div>DOM Ready: {Math.round(performanceData.domContentLoaded)}ms</div>
          <div>First Paint: {Math.round(performanceData.firstPaint)}ms</div>
          <div>FCP: {Math.round(performanceData.firstContentfulPaint)}ms</div>
          <div>LCP: {Math.round(performanceData.largestContentfulPaint)}ms</div>
          <div>FID: {Math.round(performanceData.firstInputDelay)}ms</div>
          <div>CLS: {(performanceData.cumulativeLayoutShift * 1000).toFixed(2)}</div>
          <div>TTFB: {Math.round(performanceData.timeToFirstByte)}ms</div>
        </div>
      ) : (
        <div>Measuring performance...</div>
      )}
    </div>
  );
};

export default PerformanceMonitor;