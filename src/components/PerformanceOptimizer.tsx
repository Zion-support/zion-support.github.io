import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizerProps {
  enabled?: boolean;
  enableCodeSplitting?: boolean;
  enableImageOptimization?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  enableCodeSplitting = true,
  enableImageOptimization = true,
  enablePerformanceMonitoring = true,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceMetricsRef = useRef<{
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  }>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
  });

  // Enhanced code splitting with preloading
  const preloadCriticalComponents = useCallback(() => {
    if (!enableCodeSplitting) return;

    // Preload critical components
    const criticalComponents = [
      () => import('../pages/Home'),
      () => import('../pages/Services'),
      () => import('../components/AppHeader'),
    ];

    // Use requestIdleCallback for non-critical preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        criticalComponents.forEach(importFn => {
          importFn().catch(() => {
            // Silently handle import errors
          });
        });
      });
    }
  }, [enableCodeSplitting]);

  // Image optimization with lazy loading
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img[data-src]');
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observerRef.current?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px',
      threshold: 0.1,
    });

    images.forEach(img => observerRef.current?.observe(img));
  }, [enableImageOptimization]);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            performanceMetricsRef.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            performanceMetricsRef.current.lcp = entry.startTime;
            console.log('LCP:', entry.startTime);
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            performanceMetricsRef.current.fid = entry.processingStart - entry.startTime;
            console.log('FID:', performanceMetricsRef.current.fid);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }

    // Cumulative Layout Shift
    let clsValue = 0;
    let clsEntries: any[] = [];

    if ('PerformanceObserver' in window) {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
            clsEntries.push(entry);
          }
        }
        performanceMetricsRef.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, [enablePerformanceMonitoring]);

  // Resource hints for better performance
  const addResourceHints = useCallback(() => {
    const hints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'dns-prefetch', href: 'https://ziontechgroup.com' },
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.entries(hint).forEach(([key, value]) => {
        if (key === 'crossorigin') {
          link.setAttribute(key, value);
        } else {
          link.setAttribute(key, value);
        }
      });
      document.head.appendChild(link);
    });
  }, []);

  // Service worker registration for offline support
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Initialize optimizations
    preloadCriticalComponents();
    optimizeImages();
    monitorPerformance();
    addResourceHints();
    registerServiceWorker();

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled, preloadCriticalComponents, optimizeImages, monitorPerformance, addResourceHints, registerServiceWorker]);

  // Performance metrics display (for development)
  if (process.env.NODE_ENV === 'development' && enablePerformanceMonitoring) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
        <div>FCP: {performanceMetricsRef.current.fcp.toFixed(0)}ms</div>
        <div>LCP: {performanceMetricsRef.current.lcp.toFixed(0)}ms</div>
        <div>FID: {performanceMetricsRef.current.fid.toFixed(0)}ms</div>
        <div>CLS: {performanceMetricsRef.current.cls.toFixed(3)}</div>
      </div>
    );
  }

  return null;
};
