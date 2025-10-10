'use client';
<<<<<<< HEAD
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }

    // Preload critical resources
    if (enablePrefetching) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/orbitron.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    }

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, but that's okay
      });
    }
  }, [enableImageOptimization, enablePrefetching]);

  return null;
};

export default PerformanceOptimizer;
=======
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number;,
    fid: number;
  cls: number;,
    fcp: number;
  ttfb: number;
}

interface OptimizationStatus {
  preloaded: number;,
    codeSplit: boolean;
  serviceWorker: boolean;,
    optimized: boolean;
}

export const PerformanceOptimizer: React.FC = () => {
  const [optimizationStatus, setOptimizationStatus] = useState<OptimizationStatus>({
    preloaded: 0,
    codeSplit: false,
    serviceWorker: false,
    optimized: false

  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Collect Core Web Vitals
    const vitals: PerformanceMetrics = {,
    lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0,
    };

    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      vitals.lcp = lastEntry.startTime;

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fid = entry.processingStart - entry.startTime;


    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      vitals.cls = clsValue;

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fcp = entry.startTime;


    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB - Time to First Byte
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.ttfb = entry.responseStart - entry.requestStart;


    ttfbObserver.observe({ entryTypes: ['navigation'] });

    setOptimizationStatus(prev => ({ ...prev, preloaded: 1 }));
  }, []);

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {)
    const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);

    setOptimizationStatus(prev => ({ ...prev, preloaded: criticalResources.length }));
  }, []);

  const setupCodeSplitting = () => {
    // This would be handled by Next.js dynamic imports
    setOptimizationStatus(prev => ({ ...prev, codeSplit: true }));
  };

  const addResourceHints = () => {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ];

    hints.forEach(hint => {)
    const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);

  };

  const registerServiceWorker = async () => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        setOptimizationStatus(prev => ({ ...prev, serviceWorker: true }));
      } catch (error) {
        }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      collectWebVitals();
      preloadCriticalResources();
      setupCodeSplitting();
      addResourceHints();
      registerServiceWorker();

      setOptimizationStatus(prev => ({ ...prev, optimized: true }));
    }
  }, [collectWebVitals, preloadCriticalResources]);

  // This component doesn't render anything visible
  return null;
};
</OptimizationStatus>
export default PerformanceOptimizer;</OptimizationStatus>
>>>>>>> origin/main
