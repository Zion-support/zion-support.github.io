'use client';
import React, { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface PerformanceData {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  inp: number | null;
}

interface PerformanceMonitorProps {
  performanceData?: PerformanceData;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ performanceData }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        onCLS((metric) => {
          console.log('CLS:', metric);
        });
        onFCP((metric) => {
          console.log('FCP:', metric);
        });
        onLCP((metric) => {
          console.log('LCP:', metric);
        });
        onTTFB((metric) => {
          console.log('TTFB:', metric);
        });
        onINP((metric) => {
          console.log('INP:', metric);
        });
      }
    };

    // Monitor resource loading
    const monitorResourceLoading = () => {
      if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        });
      }
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    monitorResourceLoading();

    // Cleanup function
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;