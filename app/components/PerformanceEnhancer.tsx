'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePrefetching?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePrefetching = true,
  enableResourceHints = true,
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (enableLazyLoading && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority="high" for above-the-fold images
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && !img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization, enableLazyLoading]);

  // Prefetch critical resources
  const prefetchResources = useCallback(() => {
    if (!enablePrefetching || typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [enablePrefetching]);

  // Add resource hints
  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.googletagmanager.com',
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical external resources
    const criticalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
    ];

    criticalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `https://${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enableResourceHints]);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  // Monitor Core Web Vitals
  const monitorWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry) {
        console.log('LCP:', lastEntry.startTime);
        // Send to analytics
        if ('gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      
      console.log('CLS:', clsValue);
      if ('gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000),
        });
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;
        console.log('FID:', fid);
        
        if ('gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(fid),
          });
        }
      }
    });

    fidObserver.observe({ entryTypes: ['first-input'] });
  }, []);

  useEffect(() => {
    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImages();
        prefetchResources();
        addResourceHints();
        optimizeThirdPartyScripts();
        monitorWebVitals();
      });
    } else {
      optimizeImages();
      prefetchResources();
      addResourceHints();
      optimizeThirdPartyScripts();
      monitorWebVitals();
    }
  }, [optimizeImages, prefetchResources, addResourceHints, optimizeThirdPartyScripts, monitorWebVitals]);

  return null; // This component doesn't render anything
};

export default PerformanceEnhancer;