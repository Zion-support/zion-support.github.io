import React, { useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  optimizeImages?: boolean;
  preloadCritical?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  optimizeImages = true,
  preloadCritical = true
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const { ref: observerRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metricsRef.current.fcp = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          metricsRef.current.lcp = lcpEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[0];
        if (fidEntry) {
          metricsRef.current.fid = fidEntry.processingStart - fidEntry.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metricsRef.current.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Image optimization
  const optimizeImagesInView = useCallback(() => {
    if (!optimizeImages || !inView) return;

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.dataset.src) {
        imgElement.src = imgElement.dataset.src;
        imgElement.classList.add('optimized');
        imgElement.removeAttribute('data-src');
      }
    });
  }, [optimizeImages, inView]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!preloadCritical) return;

    const criticalResources = [
      '/fonts/orbitron-v28-latin-700.woff2',
      '/images/hero-ai-solutions.jpg',
      '/images/zion-logo.png'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
        link.as = 'image';
      }
      document.head.appendChild(link);
    });
  }, [preloadCritical]);

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (!enabled) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Lazy load images
          if (target.tagName === 'IMG' && target.dataset.src) {
            target.src = target.dataset.src;
            target.classList.add('lazy-loaded');
            observer.unobserve(target);
          }

          // Lazy load components
          if (target.dataset.lazy) {
            target.classList.add('lazy-loaded');
            observer.unobserve(target);
          }
        }
      });
    }, observerOptions);

    // Observe all lazy elements
    const lazyElements = document.querySelectorAll('[data-src], [data-lazy]');
    lazyElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enabled]);

  // Memory management
  const optimizeMemory = useCallback(() => {
    if (!enabled) return;

    // Clean up event listeners
    const cleanup = () => {
      // Remove unused event listeners
      const elements = document.querySelectorAll('[data-event-cleanup]');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        if (element.dataset.eventCleanup) {
          element.removeEventListener('click', () => {});
          element.removeAttribute('data-event-cleanup');
        }
      });
    };

    // Run cleanup periodically
    const interval = setInterval(cleanup, 30000);
    return () => clearInterval(interval);
  }, [enabled]);

  useEffect(() => {
    measurePerformance();
    preloadCriticalResources();
    setupIntersectionObserver();
    const memoryCleanup = optimizeMemory();

    return () => {
      memoryCleanup?.();
    };
  }, [measurePerformance, preloadCriticalResources, setupIntersectionObserver, optimizeMemory]);

  useEffect(() => {
    optimizeImagesInView();
  }, [optimizeImagesInView]);

  // Performance metrics display
  if (!showMetrics) return null;

  return (
    <div 
      ref={observerRef}
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg text-xs z-50"
    >
      <div className="font-mono space-y-1">
        <div>FCP: {metricsRef.current.fcp.toFixed(0)}ms</div>
        <div>LCP: {metricsRef.current.lcp.toFixed(0)}ms</div>
        <div>FID: {metricsRef.current.fid.toFixed(0)}ms</div>
        <div>CLS: {metricsRef.current.cls.toFixed(3)}</div>
        <div>TTFB: {metricsRef.current.ttfb.toFixed(0)}ms</div>
      </div>
    </div>
  );
};

// Type declaration for global gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default PerformanceOptimizer;
