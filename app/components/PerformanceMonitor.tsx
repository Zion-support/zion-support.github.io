'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  score: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 30000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  const collectPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    let lcp = 0;
    let fid = 0;
    let cls = 0;
    let fcp = 0;
    let ttfb = 0;

    // LCP - Largest Contentful Paint
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      lcp = lcpEntries[lcpEntries.length - 1].startTime;
    }

    // FID - First Input Delay
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      const entry = fidEntries[0] as any;
      fid = entry.processingStart - entry.startTime;
    }

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    cls = clsValue;

    // FCP - First Contentful Paint
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      fcp = fcpEntry.startTime;
    }

    // TTFB - Time to First Byte
    if (navigation) {
      ttfb = navigation.responseStart - navigation.requestStart;
    }

    // Calculate performance score
    const score = calculatePerformanceScore({ lcp, fid, cls, fcp, ttfb });

    const performanceMetrics: PerformanceMetrics = {
      lcp,
      fid,
      cls,
      fcp,
      ttfb,
      score,
    };

    setMetrics(performanceMetrics);

    if (enableConsoleLogging) {
      console.log('Performance Metrics:', performanceMetrics);
    }

    if (enableReporting) {
      reportMetrics(performanceMetrics);
    }
  }, [enableConsoleLogging, enableReporting]);

  const calculatePerformanceScore = (metrics: Partial<PerformanceMetrics>): number => {
    let score = 100;

    // LCP scoring (0-100)
    if (metrics.lcp) {
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 20;
      else if (metrics.lcp > 1500) score -= 10;
    }

    // FID scoring (0-100)
    if (metrics.fid) {
      if (metrics.fid > 300) score -= 30;
      else if (metrics.fid > 100) score -= 20;
      else if (metrics.fid > 50) score -= 10;
    }

    // CLS scoring (0-100)
    if (metrics.cls) {
      if (metrics.cls > 0.25) score -= 30;
      else if (metrics.cls > 0.1) score -= 20;
      else if (metrics.cls > 0.05) score -= 10;
    }

    // FCP scoring (0-100)
    if (metrics.fcp) {
      if (metrics.fcp > 3000) score -= 20;
      else if (metrics.fcp > 1800) score -= 10;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb) {
      if (metrics.ttfb > 1000) score -= 20;
      else if (metrics.ttfb > 600) score -= 10;
    }

    return Math.max(0, Math.min(100, score));
  };

  const reportMetrics = (metrics: PerformanceMetrics) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        fcp: metrics.fcp,
        ttfb: metrics.ttfb,
        score: metrics.score,
      });
    }
  };

  useEffect(() => {
    // Collect metrics after page load
    const handleLoad = () => {
      setTimeout(collectPerformanceMetrics, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Set up periodic reporting
    const interval = setInterval(collectPerformanceMetrics, reportInterval);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(interval);
    };
  }, [collectPerformanceMetrics, reportInterval]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP updated:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID updated:', (entry as any).processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS updated:', (entry as any).value);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;