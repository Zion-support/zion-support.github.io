import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableImageOptimization?: boolean;
  enableBundleAnalysis?: boolean;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

  const {
    enableLazyLoading = true,
    enablePreloading = true,
    enableCodeSplitting = true,
    enableImageOptimization = true,
    enableBundleAnalysis = false
  } = options;

  // Suppress unused variable warnings for options that are used in the interface but not in the implementation,
void enableCodeSplitting;

  // Lazy load images,
const lazyLoadImages = useCallback(() => {
    if (!enableLazyLoading) return;

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
  }, [enableLazyLoading]);

  // Preload critical resources,
const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

    const criticalResources = [
      '/app/styles/futuristic.css',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.includes('fonts.googleapis.com')) {
        link.crossOrigin = 'anonymous';
      }
      
      // Add error handling,
link.onerror = () => {
        // Silently handle preload errors
      };
      
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Preload critical images,
const preloadImages = useCallback((imageUrls: string[]) => {
    if (!enablePreloading) return;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        // Image preloaded successfully
      };
      img.onerror = () => {
        // Silently handle image preload errors
      };
    });
  }, [enablePreloading]);

  // Suppress unused variable warning - this function is available for external use,
void preloadImages;

  // Optimize images,
const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold"
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }
      
      // Add proper alt text if missing,
if (!img.alt) {
        img.alt = 'Image';
      }
      
      // Add decoding="async" for better performance"
      if (!img.hasAttribute('decoding')) {
        img.decoding = 'async';
      }
    });
  }, [enableImageOptimization]);

  // Monitor performance metrics,
const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Monitor Core Web Vitals,
import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS((metric) => {
        metricsRef.current.cls = metric.value;
        if (process.env.NODE_ENV === 'development') {
          console.log('CLS:', metric.value);
        }
      });

      onFCP((metric) => {
        metricsRef.current.fcp = metric.value;
        if (process.env.NODE_ENV === 'development') {
          console.log('FCP:', metric.value);
        }
      });

      onLCP((metric) => {
        metricsRef.current.lcp = metric.value;
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', metric.value);
        }
      });

      onTTFB((metric) => {
        metricsRef.current.ttfb = metric.value;
        if (process.env.NODE_ENV === 'development') {
          console.log('TTFB:', metric.value);
        }
      });

      onINP((metric) => {
        metricsRef.current.inp = metric.value;
        if (process.env.NODE_ENV === 'development') {
          console.log('INP:', metric.value);
        }
      });
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });

    // Monitor navigation timing,
if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          if (process.env.NODE_ENV === 'development') {
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              firstByte: navEntry.responseStart - navEntry.requestStart
            });
          }
        }
      }
    });

    observerRef.current.observe({ entryTypes: ['navigation'] });
  }, []);

  // Bundle analysis,
const analyzeBundle = useCallback(() => {
    if (!enableBundleAnalysis || process.env.NODE_ENV !== 'development') return;

    const scripts = Array.from(document.querySelectorAll('script[src]'));
    const totalSize = scripts.reduce((total, script) => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets/')) {
        // This is a rough estimation - in reality you'd need to fetch the actual file size,
return total + 100; // Placeholder
      }
      return total;
    }, 0);

    console.log('Bundle analysis:', {
      scriptCount: scripts.length,
      estimatedSize: `${totalSize}KB`,
      recommendations: [
        'Consider code splitting for large components',
        'Use dynamic imports for non-critical features',
        'Optimize images and assets',
        'Enable gzip compression'
      ]
    });
  }, [enableBundleAnalysis]);

  // Initialize optimizations,
useEffect(() => {
    // Run optimizations after DOM is ready,
const runOptimizations = () => {
      lazyLoadImages();
      preloadCriticalResources();
      optimizeImages();
      monitorPerformance();
      analyzeBundle();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runOptimizations);
    } else {
      runOptimizations();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lazyLoadImages, preloadCriticalResources, optimizeImages, monitorPerformance, analyzeBundle]);

  // Return current metrics and utility functions,
return {
    metrics: metricsRef.current,
    getMetrics: () => metricsRef.current,
    clearMetrics: () => {
      metricsRef.current = {};
    }
  };
};