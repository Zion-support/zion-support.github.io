import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

const PerformanceOptimizer: React.FC = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const metrics: Partial<PerformanceMetrics> = {};

    // Measure First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
    }

    // Measure Largest Contentful Paint
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      metrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
    }

    // Measure First Input Delay
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      metrics.fid = fidEntries[0].processingStart - fidEntries[0].startTime;
    }

    // Measure Cumulative Layout Shift
    let clsValue = 0;
    const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    metrics.cls = clsValue;

    // Measure Time to First Byte
    const ttfbEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (ttfbEntry) {
      metrics.ttfb = ttfbEntry.responseStart - ttfbEntry.requestStart;
    }

    // Log performance metrics
    console.log('Performance Metrics:', metrics);

    // Send metrics to analytics (if available)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(metrics.fcp || 0),
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb,
        },
      });
    }
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

      // Optimize image sizes
      if (img.width > 800) {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS && !criticalCSS.hasAttribute('rel', 'preload')) {
      criticalCSS.setAttribute('rel', 'preload');
      criticalCSS.setAttribute('as', 'style');
      criticalCSS.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
    }

    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach((link) => {
      if (!link.hasAttribute('rel', 'preload')) {
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'font');
        link.setAttribute('type', 'font/woff2');
        link.setAttribute('crossorigin', 'anonymous');
      }
    });
  }, []);

  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        // Check if script is critical
        const src = script.getAttribute('src') || '';
        const isCritical = src.includes('analytics') || src.includes('gtag') || src.includes('google');
        
        if (!isCritical) {
          script.setAttribute('defer', 'true');
        }
      }
    });
  }, []);

  const enableServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  const optimizeMemoryUsage = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove event listeners that are no longer needed
      window.removeEventListener('beforeunload', cleanup);
    };

    window.addEventListener('beforeunload', cleanup);

    // Optimize memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected:', memory);
        // Trigger garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    }
  }, []);

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      optimizeThirdPartyScripts();
      enableServiceWorker();
      optimizeMemoryUsage();
    }, 100);

    // Measure performance after a delay
    const performanceTimer = setTimeout(() => {
      measurePerformance();
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(performanceTimer);
    };
  }, [measurePerformance, optimizeImages, preloadCriticalResources, optimizeThirdPartyScripts, enableServiceWorker, optimizeMemoryUsage]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceOptimizer;