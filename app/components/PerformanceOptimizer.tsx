import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    // Measure First Contentful Paint (FCP)
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
    }

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Cleanup observers
    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/critical.css';
    criticalCSS.as = 'style';
    criticalCSS.onload = () => {
      criticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = '/fonts/inter.woff2';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  }, []);

  const optimizeBundle = useCallback(() => {
    // Implement code splitting for non-critical components
    const nonCriticalComponents = [
      'ContactForm',
      'NewsletterSignup',
      'SocialMediaWidgets'
    ];

    // Note: Dynamic imports for components would need to be implemented
    // with proper file extensions and component structure
    // This is a placeholder for future implementation
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    optimizeImages();
    preloadCriticalResources();
    optimizeBundle();

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }

    return cleanup;
  }, [measurePerformance, optimizeImages, preloadCriticalResources, optimizeBundle, metrics]);

  // Report metrics to analytics (placeholder)
  useEffect(() => {
    if (metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
      // Send metrics to analytics service
      console.log('Core Web Vitals:', {
        FCP: metrics.fcp,
        LCP: metrics.lcp,
        FID: metrics.fid,
        CLS: metrics.cls,
        TTFB: metrics.ttfb
      });
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;