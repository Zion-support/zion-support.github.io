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

    // FID Observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fid = entry.processingStart - entry.startTime;
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });

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

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // FCP and TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      vitals.fcp = navigationEntry.responseEnd - navigationEntry.requestStart;
      vitals.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({
        ...prev,
        fcp: navigationEntry.responseEnd - navigationEntry.requestStart,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart
      }));
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/css/critical.css'
    ];

    let preloadedCount = 0;

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : resource.endsWith('.woff2') ? 'font' : 'image';
      
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }

      link.onload = () => {
        preloadedCount++;
        setStatus(prev => ({ ...prev, preloaded: preloadedCount }));
      };

      document.head.appendChild(link);
    });
  }, []);

  const enableServiceWorker = useCallback(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        setStatus(prev => ({ ...prev, serviceWorker: true }));
      })
      .catch((error) => {
        console.warn('Service Worker registration failed:', error);
      });
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  const optimizeCodeSplitting = useCallback(() => {
    // This would typically be handled by the bundler
    setStatus(prev => ({ ...prev, codeSplit: true }));
  }, []);

  useEffect(() => {
    const cleanup = collectWebVitals();
    preloadCriticalResources();
    enableServiceWorker();
    optimizeImages();
    optimizeCodeSplitting();

    // Mark as optimized after a delay
    const timer = setTimeout(() => {
      setStatus(prev => ({ ...prev, optimized: true }));
    }, 2000);

    return () => {
      cleanup?.();
      clearTimeout(timer);
    };
  }, [collectWebVitals, preloadCriticalResources, enableServiceWorker, optimizeImages, optimizeCodeSplitting]);

  // Don't render anything - this is a background component
  return null;
};

export default PerformanceOptimizer;