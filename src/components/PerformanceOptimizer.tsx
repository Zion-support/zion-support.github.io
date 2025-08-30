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
    const criticalPaths = [
      '/src/components/Header.tsx',
      '/src/components/Footer.tsx',
      '/src/pages/Home.tsx',
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = 'script';
      document.head.appendChild(link);
    });
  }, [enableCodeSplitting]);

  // Advanced image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add responsive images
      if (img.src && !img.srcset) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        
        img.srcset = `${baseName}-300${extension} 300w, ${baseName}-600${extension} 600w, ${baseName}-900${extension} 900w`;
        img.sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px';
      }
    });
  }, [enableImageOptimization]);

  // Performance monitoring with Core Web Vitals
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    // First Contentful Paint (FCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          performanceMetricsRef.current.fcp = entry.startTime;
          console.log('FCP:', entry.startTime);
        }
      });
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        performanceMetricsRef.current.lcp = lastEntry.startTime;
        console.log('LCP:', lastEntry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        performanceMetricsRef.current.fid = entry.processingStart - entry.startTime;
        console.log('FID:', performanceMetricsRef.current.fid);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    new PerformanceObserver((entryList) => {
      let clsValue = 0;
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      performanceMetricsRef.current.cls = clsValue;
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }, [enablePerformanceMonitoring]);

  // Memory management
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected');
        // Trigger garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    }

    return cleanup;
  }, []);

  // Resource optimization
  const optimizeResources = useCallback(() => {
    // Preconnect to external domains
    const domains = ['https://fonts.googleapis.com', 'https://cdn.jsdelivr.net'];
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // DNS prefetch for critical resources
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = '//www.google-analytics.com';
    document.head.appendChild(dnsPrefetch);
  }, []);

  // Bundle analysis and optimization recommendations
  const analyzeBundle = useCallback(() => {
    if ('performance' in window) {
      const resources = performance.getEntriesByType('resource');
      const jsResources = resources.filter(r => r.name.endsWith('.js'));
      
      const totalJS = jsResources.reduce((sum, r) => sum + r.transferSize, 0);
      console.log(`Total JavaScript bundle size: ${(totalJS / 1024 / 1024).toFixed(2)} MB`);
      
      if (totalJS > 1024 * 1024) { // > 1MB
        console.warn('Large JavaScript bundle detected. Consider code splitting.');
      }
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    preloadCriticalComponents();
    optimizeImages();
    setupPerformanceMonitoring();
    optimizeResources();
    analyzeBundle();

    const cleanup = optimizeMemory();

    return cleanup;
  }, [
    enabled,
    preloadCriticalComponents,
    optimizeImages,
    setupPerformanceMonitoring,
    optimizeResources,
    analyzeBundle,
    optimizeMemory,
  ]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!enableImageOptimization) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observerRef.current?.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => observerRef.current?.observe(img));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableImageOptimization]);

  return null; // This component doesn't render anything
};
