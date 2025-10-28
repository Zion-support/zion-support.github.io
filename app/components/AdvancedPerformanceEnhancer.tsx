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
  enableOptimizations = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null
  });

  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !enableMonitoring) return;

    try {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            } else if (entry.entryType === 'first-input') {
              setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
            } else if (entry.entryType === 'layout-shift') {
              if (!(entry as any).hadRecentInput) {
                setMetrics(prev => ({
                  ...prev,
                  cls: (prev.cls || 0) + (entry as any).value
                }));
              }
            } else if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            } else if (entry.entryType === 'navigation') {
              const navEntry = entry as any;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
      }

      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory) {
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024
          }));
        }
      }

      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          setMetrics(prev => ({
            ...prev,
            connectionSpeed: connection.effectiveType || 'unknown'
          }));
        }
      }
    } catch (error) {
      // console.warn('Performance monitoring error:', error);
    }
  }, [enableMonitoring]);

  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined' || !enableOptimizations) return;

    try {
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/images/logo.png', as: 'image' }
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

      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.googleapis.com';
      document.head.appendChild(fontLink);

      const fontLink2 = document.createElement('link');
      fontLink2.rel = 'preconnect';
      fontLink2.href = 'https://fonts.gstatic.com';
      fontLink2.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink2);

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed
        });
      }

      setIsOptimized(true);
    } catch (error) {
      // console.warn('Performance optimization error:', error);
    }
  }, [enableOptimizations]);

  useEffect(() => {
    applyOptimizations();
  }, [applyOptimizations]);

  useEffect(() => {
    if (enableMonitoring) {
      measurePerformance();
    }
  }, [measurePerformance, enableMonitoring]);

  useEffect(() => {
    if (enableMonitoring && Object.values(metrics).some(value => value !== null)) {
      // // console.log('Performance Metrics:', metrics);
    }
  }, [metrics, enableMonitoring]);

  return (
    <div className="performance-enhanced">
      {children}
      {enableMonitoring && (
        <div className="performance-monitor" style={{ display: 'none' }}>
          <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
          <div>FID: {metrics.fid?.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(4)}</div>
          <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
          <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
          <div>Memory: {metrics.memoryUsage?.toFixed(2)}MB</div>
          <div>Connection: {metrics.connectionSpeed}</div>
          <div>Optimized: {isOptimized ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceEnhancer;
