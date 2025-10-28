'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  _memoryUsage: number | null;
  connectionSpeed: string | null;
}

interface AdvancedPerformanceEnhancerProps {
  className?: string;
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
    _memoryUsage: null,
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
          for (const _entry of list.getEntries()) {
            if (_entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({ ...prev, lcp: _entry.startTime }));
            } else if (_entry.entryType === 'first-input') {
              setMetrics(prev => ({ ...prev, fid: (_entry as PerformanceEventTiming).processingStart - _entry.startTime }));
            } else if (_entry.entryType === 'layout-shift') {
              if (!(_entry as LayoutShift).hadRecentInput) {
                setMetrics(prev => ({ 
                  ...prev, 
                  cls: (prev.cls || 0) + (_entry as LayoutShift).value 
                }));
              }
            } else if (_entry.entryType === 'paint') {
              if (_entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: _entry.startTime }));
              }
            } else if (_entry.entryType === 'navigation') {
              const navEntry = _entry as PerformanceNavigationTiming;
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
            _memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
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
    } catch (_error) { /* Handle _error */ }
  }, [enableMonitoring]);

  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined' || !enableOptimizations) return;

    try {
      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/images/logo.png', as: 'image' },
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

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Optimize fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.googleapis.com';
      document.head.appendChild(fontLink);

      const fontLink2 = document.createElement('link');
      fontLink2.rel = 'preconnect';
      fontLink2.href = 'https://fonts.gstatic.com';
      fontLink2.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink2);

      // Enable service worker caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker _registration failed, continue without it
        });
      }

      setIsOptimized(true);
    } catch (_error) { /* Handle _error */ }
  }, [enableOptimizations]);

  // Apply optimizations on mount
  useEffect(() => {
    applyOptimizations();
  }, [applyOptimizations]);

  // Start performance monitoring
  useEffect(() => {
    if (enableMonitoring) {
      measurePerformance();
    }
  }, [measurePerformance, enableMonitoring]);

  // Log performance metrics for debugging
  useEffect(() => {
    if (enableMonitoring && Object.values(metrics).some(value => value !== null)) { /* No action needed */ }}, [metrics, enableMonitoring]);

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
          <div>Memory: {metrics._memoryUsage?.toFixed(2)}MB</div>
          <div>Connection: {metrics.connectionSpeed}</div>
          <div>Optimized: {isOptimized ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceEnhancer;