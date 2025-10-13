import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

interface PerformanceData {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  bundleSize: number;
  loadTime: number;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
  reportingEndpoint?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  enableReporting = true,
  reportingEndpoint = '/api/performance'
}) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    bundleSize: 0,
    loadTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const startTime = performance.now();

    // Web Vitals
    const handleMetric = (metric: Metric) => {
      setPerformanceData(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      if (enableReporting) {
        reportMetric(metric);
      }
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Bundle size monitoring
    const measureBundleSize = () => {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      
      let totalSize = 0;
      
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src) {
          // Estimate size based on URL patterns
          if (src.includes('vendor') || src.includes('chunk')) {
            totalSize += 200000; // Estimated 200KB for vendor chunks
          } else {
            totalSize += 50000; // Estimated 50KB for other chunks
          }
        }
      });

      stylesheets.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          totalSize += 20000; // Estimated 20KB for CSS
        }
      });

      setPerformanceData(prev => ({
        ...prev,
        bundleSize: totalSize
      }));
    };

    // Memory usage monitoring
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setPerformanceData(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    // Load time monitoring
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setPerformanceData(prev => ({
        ...prev,
        loadTime: Math.round(loadTime)
      }));
    };

    // Run measurements
    measureBundleSize();
    measureMemoryUsage();
    measureLoadTime();

    // Monitor performance over time
    const interval = setInterval(() => {
      measureMemoryUsage();
    }, 30000); // Every 30 seconds

    // Resource timing
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          console.log('Resource loaded:', {
            name: entry.name,
            duration: entry.duration,
            size: entry.transferSize,
            type: entry.initiatorType
          });
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    // Navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            domInteractive: navEntry.domInteractive - navEntry.navigationStart
          });
        }
      }
    });

    navigationObserver.observe({ entryTypes: ['navigation'] });

    return () => {
      clearInterval(interval);
      observer.disconnect();
      navigationObserver.disconnect();
    };
  }, [enableReporting]);

  const reportMetric = async (metric: Metric) => {
    try {
      await fetch(reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.warn('Failed to report performance metric:', error);
    }
  };

  // Performance alerts
  useEffect(() => {
    const { cls, inp, fcp, lcp, ttfb, bundleSize, loadTime, memoryUsage } = performanceData;

    // Alert thresholds based on Core Web Vitals
    if (cls !== null && cls > 0.25) {
      console.warn('Poor CLS score detected:', cls);
    }

    if (inp !== null && inp > 300) {
      console.warn('Poor INP score detected:', inp);
    }

    if (lcp !== null && lcp > 4000) {
      console.warn('Poor LCP score detected:', lcp);
    }

    if (bundleSize > 500000) { // 500KB
      console.warn('Large bundle size detected:', bundleSize);
    }

    if (loadTime > 3000) { // 3 seconds
      console.warn('Slow load time detected:', loadTime);
    }

    if (memoryUsage > 100) { // 100MB
      console.warn('High memory usage detected:', memoryUsage);
    }
  }, [performanceData]);

  // Development mode performance display
  if (process.env.NODE_ENV === 'development') {
    return (
      <>
        {children}
        <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
          <div className="font-bold mb-2">Performance Monitor</div>
          <div>CLS: {performanceData.cls?.toFixed(3) || 'N/A'}</div>
          <div>INP: {performanceData.inp?.toFixed(0) || 'N/A'}ms</div>
          <div>FCP: {performanceData.fcp?.toFixed(0) || 'N/A'}ms</div>
          <div>LCP: {performanceData.lcp?.toFixed(0) || 'N/A'}ms</div>
          <div>TTFB: {performanceData.ttfb?.toFixed(0) || 'N/A'}ms</div>
          <div>Bundle: {(performanceData.bundleSize / 1024).toFixed(0)}KB</div>
          <div>Load: {performanceData.loadTime}ms</div>
          <div>Memory: {performanceData.memoryUsage.toFixed(1)}MB</div>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

export default PerformanceMonitor;