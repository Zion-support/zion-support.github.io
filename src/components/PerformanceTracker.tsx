import React, { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  bundleSize: number;
  loadTime: number;
}

interface PerformanceTrackerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({ 
  onMetricsUpdate, 
  enableReporting = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    if (!enableReporting) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      // Calculate Core Web Vitals
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      const fid = performance.getEntriesByType('first-input')[0]?.processingStart || 0;
      const cls = performance.getEntriesByType('layout-shift')
        .reduce((sum, entry) => sum + (entry as any).value, 0);
      
      // Calculate TTFB
      const ttfb = navigation.responseStart - navigation.requestStart;
      
      // Estimate bundle size (rough calculation)
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      const bundleSize = scripts.reduce((total, script) => {
        const src = script.getAttribute('src');
        if (src && src.includes('assets/')) {
          // This is a rough estimation - in reality you'd need to fetch the actual size
          return total + 50000; // Estimated 50KB per script
        }
        return total;
      }, 0);
      
      // Calculate load time
      const loadTime = navigation.loadEventEnd - navigation.navigationStart;

      const performanceMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        bundleSize,
        loadTime
      };

      setMetrics(performanceMetrics);
      onMetricsUpdate?.(performanceMetrics);

      // Log performance issues
      if (fcp > 1800) {
        console.warn('⚠️ First Contentful Paint is slow:', fcp + 'ms');
      }
      if (lcp > 2500) {
        console.warn('⚠️ Largest Contentful Paint is slow:', lcp + 'ms');
      }
      if (fid > 100) {
        console.warn('⚠️ First Input Delay is high:', fid + 'ms');
      }
      if (cls > 0.1) {
        console.warn('⚠️ Cumulative Layout Shift is high:', cls);
      }
    };

    // Wait for page load to complete
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Set up Performance Observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP updated:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              console.log('FID recorded:', (entry as any).processingStart);
            }
            if (entry.entryType === 'layout-shift') {
              console.log('CLS recorded:', (entry as any).value);
            }
          });
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onMetricsUpdate, enableReporting]);

  // Don't render anything visible
  return null;
};

export default PerformanceTracker;