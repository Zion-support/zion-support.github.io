'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            const fid = (entry as any).processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (entry as any).value }));
            }
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (error) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Monitor page load time
    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          loadTime: navigation.loadEventEnd - navigation.fetchStart
        }));
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Monitor resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          // Track slow resources
          if (resource.duration > 1000) {
            console.warn('Slow resource detected:', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize
            });
          }
        }
      }
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (error) {
      // Resource timing not supported
    }

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
      
      // Log memory usage if it's getting high
      if (memoryUsage.used / memoryUsage.limit > 0.8) {
        console.warn('High memory usage detected:', memoryUsage);
      }
    }

    // Cleanup
    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Send metrics to analytics (if available)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      
      if (metrics.fcp !== null) {
        gtag('event', 'web_vitals', {
          name: 'FCP',
          value: Math.round(metrics.fcp),
          event_category: 'Performance'
        });
      }
      
      if (metrics.lcp !== null) {
        gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(metrics.lcp),
          event_category: 'Performance'
        });
      }
      
      if (metrics.fid !== null) {
        gtag('event', 'web_vitals', {
          name: 'FID',
          value: Math.round(metrics.fid),
          event_category: 'Performance'
        });
      }
      
      if (metrics.cls !== null) {
        gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(metrics.cls * 1000) / 1000,
          event_category: 'Performance'
        });
      }
    }
  }, [metrics]);

  // Performance recommendations
  useEffect(() => {
    const recommendations: string[] = [];

    if (metrics.lcp && metrics.lcp > 4000) {
      recommendations.push('Consider optimizing images and reducing server response time');
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push('Consider reducing JavaScript execution time');
    }

    if (metrics.cls && metrics.cls > 0.25) {
      recommendations.push('Consider adding size attributes to images and videos');
    }

    if (metrics.loadTime && metrics.loadTime > 3000) {
      recommendations.push('Consider implementing code splitting and lazy loading');
    }

    if (recommendations.length > 0) {
      console.log('Performance recommendations:', recommendations);
    }
  }, [metrics]);

  // In development, show performance metrics
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}</div>
        <div>Load: {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}</div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;