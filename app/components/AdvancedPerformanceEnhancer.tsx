'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';

interface AdvancedPerformanceEnhancerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  children?: React.ReactNode;
}

const AdvancedPerformanceEnhancer: React.FC<AdvancedPerformanceEnhancerProps> = memo(({ 
  enableMonitoring = true, 
  enableOptimizations = true,
  children 
}) => {
  const [, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined' || !enableMonitoring) return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            const fid = fidEntry.processingStart - fidEntry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
            }
          } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          } else if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
    } catch (error) {
      console.warn('Performance monitoring error:', error);
    }
  }, [enableMonitoring]);

  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined' || !enableOptimizations) return;

    // Add loading="lazy" to images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }, [enableOptimizations]);

  useEffect(() => {
    monitorPerformance();
    applyOptimizations();
  }, [monitorPerformance, applyOptimizations]);

  return (
    <div className="advanced-performance-enhancer">
      {children}
    </div>
  );
});

AdvancedPerformanceEnhancer.displayName = 'AdvancedPerformanceEnhancer';

export default AdvancedPerformanceEnhancer;