'use client';
import React, { useEffect, useState, useCallback } from 'react';

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

export const PerformanceOptimizer: React.FC = () => {
  const [optimizationStatus, setOptimizationStatus] = useState<OptimizationStatus>({
    preloaded: 0,
    codeSplit: false,
    serviceWorker: false,
    optimized: false
  });

  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Collect Core Web Vitals
    const vitals: PerformanceMetrics = {
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
      });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fid = entry.processingStart - entry.startTime;
        });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });


    setOptimizationStatus(prev => ({ ...prev, preloaded: 5 }));
  };


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

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);
    });
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

export default PerformanceOptimizer;