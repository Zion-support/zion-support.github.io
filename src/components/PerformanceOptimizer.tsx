import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export function PerformanceOptimizer({ 
  enableMonitoring = false, 
  onMetricsUpdate 
}: PerformanceOptimizerProps) {
  const metricsRef = useRef<Partial<PerformanceMetrics>>({});
  const observersRef = useRef<PerformanceObserver[]>([]);

  const measurePerformance = useCallback(() => {
    if (!('PerformanceObserver' in window) || !enableMonitoring) return;

    // First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
            if (onMetricsUpdate) {
              onMetricsUpdate(metricsRef.current as PerformanceMetrics);
            }
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observersRef.current.push(fcpObserver);
    } catch (error) {
      console.warn('FCP observer failed:', error);
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          metricsRef.current.lcp = lastEntry.startTime;
          if (onMetricsUpdate) {
            onMetricsUpdate(metricsRef.current as PerformanceMetrics);
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      observersRef.current.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer failed:', error);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          if (onMetricsUpdate) {
            onMetricsUpdate(metricsRef.current as PerformanceMetrics);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observersRef.current.push(fidObserver);
    } catch (error) {
      console.warn('FID observer failed:', error);
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metricsRef.current.cls = clsValue;
        if (onMetricsUpdate) {
          onMetricsUpdate(metricsRef.current as PerformanceMetrics);
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observersRef.current.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer failed:', error);
    }

    // Time to First Byte
    try {
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'navigation') {
            metricsRef.current.ttfb = entry.responseStart - entry.requestStart;
            if (onMetricsUpdate) {
              onMetricsUpdate(metricsRef.current as PerformanceMetrics);
            }
          }
        });
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });
      observersRef.current.push(ttfbObserver);
    } catch (error) {
      console.warn('TTFB observer failed:', error);
    }
  }, [enableMonitoring, onMetricsUpdate]);

  const optimizeImages = useCallback(() => {
    if (!enableMonitoring) return;

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
  }, [enableMonitoring]);

  const preloadCriticalResources = useCallback(() => {
    if (!enableMonitoring) return;

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="preload"][as="style"]');
    if (criticalCSS) {
      (criticalCSS as HTMLLinkElement).rel = 'stylesheet';
    }

    // Preload critical fonts
    const fontPreloads = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontPreloads.forEach((link) => {
      (link as HTMLLinkElement).rel = 'stylesheet';
    });
  }, [enableMonitoring]);

  const optimizeBundle = useCallback(() => {
    if (!enableMonitoring) return;

    // Dynamic imports for non-critical components
    const lazyComponents = document.querySelectorAll('[data-lazy-component]');
    // Component lazy loading is disabled since we're using static imports
    // const componentObserver = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       const component = entry.target as HTMLElement;
    //       const componentName = component.dataset.lazyComponent;
    //       if (componentName) {
    //         // Load component dynamically
    //         import(`../components/${componentName}.tsx`).then((module) => {
    //           component.innerHTML = module.default;
    //         }).catch((error) => {
    //           console.warn(`Failed to load component ${componentName}:`, error);
    //         });
    //         componentObserver.unobserve(component);
    //       }
    //     }
    //   });
    // });

    // lazyComponents.forEach((component) => componentObserver.observe(component));
  }, [enableMonitoring]);

  useEffect(() => {
    if (enableMonitoring) {
      measurePerformance();
      optimizeImages();
      preloadCriticalResources();
      optimizeBundle();
    }

    return () => {
      // Cleanup observers
      observersRef.current.forEach((observer) => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Failed to disconnect observer:', error);
        }
      });
      observersRef.current = [];
    };
  }, [measurePerformance, optimizeImages, preloadCriticalResources, optimizeBundle]);

  // Return null since this is a utility component
  return null;
}

export default PerformanceOptimizer;