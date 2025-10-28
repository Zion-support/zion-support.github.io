'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

interface AdvancedPerformanceEnhancerProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
}

export const AdvancedPerformanceEnhancer: React.FC<AdvancedPerformanceEnhancerProps> = ({
  children,
  enableMonitoring = true,
  enableOptimizations = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null,
  });

  const [isOptimized, setIsOptimized] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !enableMonitoring) return;

    try {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            } else if (entry.entryType === 'first-input') {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
            } else if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                setMetrics(prev => ({ 
                  ...prev, 
                  cls: (prev.cls || 0) + clsEntry.value 
                }));
              }
            } else if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            } else if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        if (memory) {
          setMetrics(prev => ({ 
            ...prev, 
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }));
        }
      }

      // Connection speed
      if ('connection' in navigator) {
        const connection = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
        if (connection) {
          setMetrics(prev => ({ 
            ...prev, 
            connectionSpeed: connection.effectiveType || 'unknown'
          }));
        }
      }
    } catch (error) {
      // Error handled
    }
  }, [enableMonitoring]);

  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined' || !enableOptimizations) return;

    try {
      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/images/hero-bg.jpg', as: 'image' },
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
        document.head.appendChild(link);
      });

      // Enable resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      ];

      resourceHints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
      });

      setIsOptimized(true);
    } catch (error) {
      // Error handled
    }
  }, [enableOptimizations]);

  useEffect(() => {
    measurePerformance();
    applyOptimizations();
  }, [measurePerformance, applyOptimizations]);

  return (
    <div className="advanced-performance-enhancer">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ display: 'none' }}>
          {/* Performance metrics for debugging */}
          <pre>{JSON.stringify(metrics, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceEnhancer;