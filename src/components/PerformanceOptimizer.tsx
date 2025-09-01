import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  onMetricsUpdate,
  enableLazyLoading = true,
  enableImageOptimization = true,
  enableCodeSplitting = true,
  enableCaching = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });

  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !window.performance) return;

    // First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
    }

    // Largest Contentful Paint
    const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0];
    if (lcpEntry) {
      setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
    }

    // First Input Delay
    const fidEntry = performance.getEntriesByName('first-input')[0];
    if (fidEntry) {
      setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
    }

    // Cumulative Layout Shift
    const clsEntry = performance.getEntriesByName('layout-shift')[0];
    if (clsEntry) {
      setMetrics(prev => ({ ...prev, cls: (clsEntry as any).value }));
    }

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // DOM Load and Window Load
    if (document.readyState === 'complete') {
      const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, domLoad, windowLoad }));
    }

    // Notify parent component
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [enabled, onMetricsUpdate, metrics]);

  // Lazy loading optimization
  const optimizeLazyLoading = useCallback(() => {
    if (!enabled || !enableLazyLoading) return;

    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => observer.observe(img));
  }, [enabled, enableLazyLoading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enabled || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }

      // Add srcset for responsive images if not present
      if (!img.srcset && img.src) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        
        img.srcset = `
          ${baseName}-300${extension} 300w,
          ${baseName}-600${extension} 600w,
          ${baseName}-900${extension} 900w,
          ${baseName}-1200${extension} 1200w
        `;
        img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
      }
    });
  }, [enabled, enableImageOptimization]);

  // Code splitting optimization
  const optimizeCodeSplitting = useCallback(() => {
    if (!enabled || !enableCodeSplitting) return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Prefetch non-critical resources
    const nonCriticalResources = [
      '/js/non-critical.js',
      '/css/non-critical.css'
    ];

    nonCriticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [enabled, enableCodeSplitting]);

  // Caching optimization
  const optimizeCaching = useCallback(() => {
    if (!enabled || !enableCaching) return;

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Cache API for static assets
    if ('caches' in window) {
      const staticAssets = [
        '/images/logo.png',
        '/images/hero-bg.jpg',
        '/css/main.css',
        '/js/main.js'
      ];

      caches.open('static-assets-v1').then(cache => {
        cache.addAll(staticAssets);
      });
    }
  }, [enabled, enableCaching]);

  // Performance monitoring setup
  useEffect(() => {
    if (!enabled) return;

    // Set up performance observers
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-input') {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (entry as any).value }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [enabled]);

  // Run optimizations
  useEffect(() => {
    if (!enabled) return;

    setIsOptimizing(true);

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeLazyLoading();
        optimizeImages();
        optimizeCodeSplitting();
        optimizeCaching();
        setIsOptimizing(false);
      });
    } else {
      optimizeLazyLoading();
      optimizeImages();
      optimizeCodeSplitting();
      optimizeCaching();
      setIsOptimizing(false);
    }
  }, [enabled, optimizeLazyLoading, optimizeImages, optimizeCodeSplitting, optimizeCaching]);

  // Measure performance on load
  useEffect(() => {
    if (!enabled) return;

    const handleLoad = () => {
      setTimeout(measurePerformance, 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [enabled, measurePerformance]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    let score = 100;

    // FCP scoring (0-25 points)
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 5;
      else if (metrics.fcp < 4000) score -= 10;
      else score -= 25;
    }

    // LCP scoring (0-25 points)
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 5;
      else if (metrics.lcp < 5000) score -= 10;
      else score -= 25;
    }

    // FID scoring (0-25 points)
    if (metrics.fid !== null) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 5;
      else if (metrics.fid < 500) score -= 10;
      else score -= 25;
    }

    // CLS scoring (0-25 points)
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 5;
      else if (metrics.cls < 0.4) score -= 10;
      else score -= 25;
    }

    return Math.max(0, score);
  }, [metrics]);

  if (!enabled) return null;

  return (
    <div className="hidden" aria-hidden="true">
      {/* Performance metrics are collected but not displayed */}
      {/* You can access them via the onMetricsUpdate callback */}
      {isOptimizing && (
        <div className="sr-only">
          Optimizing performance...
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;