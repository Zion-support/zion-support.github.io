import { useEffect, useCallback, useRef } from 'react';
// import { getPerformanceMonitor } from '../utils/advancedPerformanceMonitor';
import { NetworkInformation } from '../types/global';

interface PerformanceOptimizationConfig {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
  enableImageOptimization?: boolean;
  enableCriticalCSS?: boolean;
  enableWebVitals?: boolean;
  preloadThreshold?: number;
  lazyLoadThreshold?: number;
}

interface PerformanceOptimizationReturn {
  preloadResource: (url: string, type?: string) => Promise<void>;
  recordMetric: (name: string, value: number) => void;
  measurePerformance: (name: string, fn: () => void) => void;
  getPerformanceMetrics: () => Record<string, unknown>;
  optimizeImage: (src: string, options?: ImageOptimizationOptions) => string;
  addResourceHint: (href: string, as: string, type?: string) => void;
  optimizePerformance: () => void;
}

interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
}

/**
 * Advanced Performance Optimization Hook
 * Provides comprehensive performance optimization utilities
 */
export const usePerformanceOptimization = (
  config: PerformanceOptimizationConfig = {}
): PerformanceOptimizationReturn => {
  const monitor = useRef(AdvancedPerformanceMonitor.getInstance());
  const configRef = useRef({
    enableLazyLoading: true,
    enablePreloading: true,
    enableResourceHints: true,
    enableImageOptimization: true,
    enableCriticalCSS: true,
    enableWebVitals: true,
    preloadThreshold: 0.8,
    lazyLoadThreshold: 0.1,
    ...config,
  });

  // Initialize performance monitoring
  useEffect(() => {
    const perfMonitor = monitor.current;
    
    if (configRef.current.enableWebVitals) {
      perfMonitor.startMonitoring();
    }

    return () => {
      perfMonitor.stopMonitoring();
    };
  }, []);

  // Preload critical resources
  const preloadResource = useCallback(async (url: string, type: string = 'fetch'): Promise<void> => {
    if (!configRef.current.enablePreloading) return;

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = type;

      link.onload = () => {
        monitor.current.markCustomMetric(`preload.${type}.success`);
        resolve();
      };

      link.onerror = () => {
        monitor.current.markCustomMetric(`preload.${type}.error`);
        reject(new Error(`Failed to preload ${url}`));
      };

      document.head.appendChild(link);
    });
  }, []);

  // Record custom performance metrics
  const recordMetric = useCallback((name: string, value: number) => {
    monitor.current.markCustomMetric(name, value);
  }, []);

  // Measure performance of functions
  const measurePerformance = useCallback((name: string, fn: () => void) => {
    const startMark = `${name}.start`;
    const endMark = `${name}.end`;
    
    monitor.current.markCustomMetric(startMark);
    
    const startTime = performance.now();
    
    try {
      fn();
    } finally {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      monitor.current.markCustomMetric(endMark);
      monitor.current.measureCustomMetric(name, startMark, endMark);
      
      recordMetric(`${name}.duration`, duration);
    }
  }, [recordMetric]);

  // Get current performance metrics
  // const getPerformanceMetrics = useCallback(() => {
  //   return monitor.current.getLatestMetrics();
  // }, []);

  // Optimize images with responsive loading
  const optimizeImage = useCallback((src: string): string => {
    if (!configRef.current.enableImageOptimization) return src;

    // const {
    //   width,
    //   height,
    //   quality = 80,
    //   format = 'webp'
    // } = options;

    // Suppress unused variable warnings for future implementation

    // Check if browser supports WebP
    // const supportsWebP = document.createElement('canvas')
    //   .toDataURL('image/webp')
    //   .indexOf('data:image/webp') === 0;

    // For now, return the original src
    // In a real implementation, this would integrate with an image optimization service
    return src;
  }, []);

  // Add resource hints for performance
  const addResourceHint = useCallback((href: string, as: string, type?: string) => {
    if (!configRef.current.enableResourceHints) return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.as = as;
    
    if (type) {
      link.type = type;
    }

    document.head.appendChild(link);
  }, []);

  // Critical CSS optimization
  useEffect(() => {
    if (!configRef.current.enableCriticalCSS) return;

    const loadCriticalCSS = () => {
      // This would load critical CSS for above-the-fold content
      const criticalCSS = `
        /* Critical CSS would be injected here */
        body { margin: 0; padding: 0; }
        .hero { min-height: 100vh; }
        .navigation { position: fixed; top: 0; width: 100%; }
      `;

      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    };

    loadCriticalCSS();
  }, []);

  // Lazy loading implementation
  useEffect(() => {
    if (!configRef.current.enableLazyLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: configRef.current.lazyLoadThreshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Handle lazy images
          if (element.tagName === 'IMG' && element.dataset.src) {
            const img = element as HTMLImageElement;
            img.src = img.dataset.src!;
            img.removeAttribute('data-src');
            observer.unobserve(element);
            
            recordMetric('lazy.image.loaded', 1);
          }
          
          // Handle lazy background images
          if (element.dataset.bgSrc) {
            element.style.backgroundImage = `url(${element.dataset.bgSrc})`;
            element.removeAttribute('data-bg-src');
            observer.unobserve(element);
            
            recordMetric('lazy.background.loaded', 1);
          }
        }
      });
    }, observerOptions);

    // Observe all elements with lazy loading attributes
    const lazyElements = document.querySelectorAll('[data-src], [data-bg-src]');
    lazyElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [recordMetric]);

  // Preload critical resources on page load
  useEffect(() => {
    if (!configRef.current.enablePreloading) return;

    const preloadCriticalResources = () => {
      // Preload critical fonts
      const criticalFonts = [
        '/fonts/inter-var.woff2',
        '/fonts/inter-var.woff',
      ];

      criticalFonts.forEach((font) => {
        preloadResource(font, 'font');
      });

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.webp',
        '/images/logo.svg',
      ];

      criticalImages.forEach((image) => {
        preloadResource(image, 'image');
      });

      // Preload critical scripts
      const criticalScripts = [
        '/js/critical.js',
      ];

      criticalScripts.forEach((script) => {
        preloadResource(script, 'script');
      });
    };

    // Delay preloading to not block initial render
    setTimeout(preloadCriticalResources, 100);
  }, [preloadResource]);

  // Network-aware loading
  useEffect(() => {
    if (!('connection' in navigator)) return;

    const connection = (navigator as unknown as { connection?: NetworkInformation }).connection;
    
    const handleConnectionChange = () => {
      const effectiveType = (connection as NetworkInformation).effectiveType;
      
      // Adjust loading strategy based on connection
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        // Disable some features for slow connections
        configRef.current.enablePreloading = false;
        configRef.current.preloadThreshold = 0.5;
        
        recordMetric('connection.slow', 1);
      } else {
        // Re-enable features for better connections
        configRef.current.enablePreloading = true;
        configRef.current.preloadThreshold = 0.8;
        
        recordMetric('connection.fast', 1);
      }
    };

    if (connection && typeof connection.addEventListener === 'function') {
      connection.addEventListener('change', handleConnectionChange);
      handleConnectionChange(); // Initial check
    }

    return () => {
      if (connection && typeof connection.removeEventListener === 'function') {
        connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, [recordMetric]);

  // Performance optimization function
  const optimizePerformance = useCallback(() => {
    if (configRef.current.enableImageOptimization) {
      // Optimize existing images
      const images = document.querySelectorAll('img[src]');
      images.forEach((img) => {
        const optimizedSrc = optimizeImage((img as HTMLImageElement).src);
        if (optimizedSrc !== (img as HTMLImageElement).src) {
          (img as HTMLImageElement).src = optimizedSrc;
        }
      });
    }
    
    if (configRef.current.enableResourceHints) {
      // Add resource hints for critical resources
      addResourceHint('/api/health', 'fetch');
      addResourceHint('/images/hero-bg.webp', 'image');
    }
  }, [optimizeImage, addResourceHint]);

  return {
    preloadResource,
    recordMetric,
    measurePerformance,
    getPerformanceMetrics: () => monitor.current.getLatestMetrics() || {},
    optimizeImage,
    addResourceHint,
    optimizePerformance,
  };
};

export default usePerformanceOptimization;