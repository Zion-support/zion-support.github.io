import React, { useCallback, useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

interface OptimizationStatus {
  preloaded: number;
  codeSplit: boolean;
  serviceWorker: boolean;
  optimized: boolean;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const [status, setStatus] = useState<OptimizationStatus>({
    preloaded: 0,
    codeSplit: false,
    serviceWorker: false,
    optimized: false
  });

  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    const vitals: PerformanceMetrics = {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0
    };

    // LCP Observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      vitals.lcp = lastEntry.startTime;
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID Observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        vitals.fid = entry.processingStart - entry.startTime;
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS Observer
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      vitals.cls = clsValue;
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP Observer
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fcp = entry.startTime;
        setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB Observer
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        vitals.ttfb = entry.responseStart - entry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
      });
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      ttfbObserver.disconnect();
    };
  }, []);

  const optimizePerformance = useCallback(() => {
    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });

    setStatus(prev => ({ ...prev, optimized: true }));
  }, []);

  useEffect(() => {
    const cleanup = collectWebVitals();
    optimizePerformance();

    return cleanup;
  }, [collectWebVitals, optimizePerformance]);

  return null; // This component doesn't render anything visible
};

export default PerformanceOptimizer;