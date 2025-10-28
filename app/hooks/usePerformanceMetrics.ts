'use client';

import { useEffect, useState, useCallback } from 'react';
import type { PerformanceEventTiming, LayoutShift } from '../types/performance';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export 
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
            if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
          entries.forEach((entry) => {
                setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
                if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value || 0;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Cleanup observers
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

      
        return Math.round(totalScore);
  }, [metrics]);

  return {
    metrics,
    getPerformanceScore,
    measurePerformance,
  };
};