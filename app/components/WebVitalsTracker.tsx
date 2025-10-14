'use client';
import { useEffect } from 'react';

// Type definitions for Web Vitals
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}
interface WebVitalsTrackerProps {
  onVitalsUpdate?: (vitals: { type: string; value: number }) => void;
}
export default function WebVitalsTracker({ onVitalsUpdate }: WebVitalsTrackerProps) {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        onVitalsUpdate?.({ type: 'LCP', value: lastEntry.startTime });
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      // Track FID (First Input Delay)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming;
          onVitalsUpdate?.({ type: 'FID', value: fidEntry.processingStart - fidEntry.startTime });
        });
      }).observe({ entryTypes: ['first-input'] });
      // Track CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as LayoutShift;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        });
        onVitalsUpdate?.({ type: 'CLS', value: clsValue });
      }).observe({ entryTypes: ['layout-shift'] });
    };
    trackWebVitals();
  }, [onVitalsUpdate]);
  return null; // This component doesn't render anything
}