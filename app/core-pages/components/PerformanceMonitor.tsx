'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableAnalytics?: boolean;
  enableRealUserMonitoring?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableAnalytics = true,
  enableRealUserMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  // Check if Performance API is supported
  useEffect(() => {
    setIsSupported(
      typeof window !== 'undefined' && 
      'performance' in window && 
      'PerformanceObserver' in window
    );
  }, []);

  // Get performance metrics
  const getPerformanceMetrics = useCallback((): PerformanceMetrics | null => {
    if (!isSupported || typeof window === 'undefined') return null;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const largestContentfulPaint = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : 0;
      
      // Get FID (simulated)
      const firstInputDelay = 0; // Would need user interaction to measure
      
      // Get CLS (simulated)
      const cumulativeLayoutShift = 0; // Would need PerformanceObserver to measure
      
      // Get TTI (simulated)
      const timeToInteractive = navigation.domContentLoadedEventEnd - navigation.navigationStart;

      return {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        timeToInteractive
      };
    } catch (error) {
      if (enableConsoleLogging) {
        // eslint-disable-next-line no-console
        console.warn('Performance monitoring error:', error);
      }
      return null;
    }
  }, [isSupported, enableConsoleLogging]);

  // Monitor performance
  useEffect(() => {
    if (!isSupported) return;

    const measurePerformance = () => {
      const performanceMetrics = getPerformanceMetrics();
      if (performanceMetrics) {
        setMetrics(performanceMetrics);
        
        if (enableConsoleLogging) {
          // eslint-disable-next-line no-console
          console.log('Performance Metrics:', performanceMetrics);
        }
        
        if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
          // Send to Google Analytics
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).gtag('event', 'performance_metrics', {
            event_category: 'Performance',
            event_label: 'Page Load',
            custom_map: {
              load_time: Math.round(performanceMetrics.loadTime),
              fcp: Math.round(performanceMetrics.firstContentfulPaint),
              lcp: Math.round(performanceMetrics.largestContentfulPaint),
              tti: Math.round(performanceMetrics.timeToInteractive)
            }
          });
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [isSupported, enableConsoleLogging, enableAnalytics, getPerformanceMetrics]);

  // Real User Monitoring
  useEffect(() => {
    if (!enableRealUserMonitoring || !isSupported) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (enableConsoleLogging) {
          // eslint-disable-next-line no-console
          console.log('Performance Entry:', entry);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      if (enableConsoleLogging) {
        // eslint-disable-next-line no-console
        console.warn('Performance Observer error:', error);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [enableRealUserMonitoring, isSupported, enableConsoleLogging]);

  // Don't render anything - this is a monitoring component
  return null;
};

export default PerformanceMonitor;