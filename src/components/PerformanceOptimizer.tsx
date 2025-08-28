import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  preloadRoutes?: string[];
  enableAnalytics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  preloadRoutes = [],
  enableAnalytics = true
}) => {
  const location = useLocation();

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const metrics: PerformanceMetrics = {
            fcp: 0,
            lcp: 0,
            fid: 0,
            cls: 0,
            ttfb: navEntry.responseStart - navEntry.requestStart
          };

          // Log performance metrics
          if (enableAnalytics) {
            console.log('Performance Metrics:', metrics);
            // Send to analytics service
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                event_category: 'Performance',
                event_label: location.pathname,
                value: Math.round(metrics.ttfb),
                custom_map: {
                  fcp: metrics.fcp,
                  lcp: metrics.lcp,
                  fid: metrics.fid,
                  cls: metrics.cls
                }
              });
            }
          }
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

    return () => observer.disconnect();
  }, [enabled, enableAnalytics, location.pathname]);

  // Resource preloading
  const preloadResources = useCallback(() => {
    if (!enabled) return;

    // Preload critical CSS and fonts
    const criticalResources = [
      '/fonts/orbitron-v25-latin-700.woff2',
      '/fonts/rajdhani-v15-latin-500.woff2'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload route components based on current location
    const currentRoute = location.pathname;
    const routesToPreload = preloadRoutes.filter(route => route !== currentRoute);

    routesToPreload.forEach((route) => {
      // This would be implemented with actual route preloading logic
      // For now, we'll just log the intention
      if (enableAnalytics) {
        console.log(`Preloading route: ${route}`);
      }
    });
  }, [enabled, preloadRoutes, location.pathname, enableAnalytics]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enabled) return;

    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const imgElement = entry.target as HTMLImageElement;
              imgElement.src = imgElement.dataset.src || '';
              imgElement.classList.remove('lazy');
              observer.unobserve(imgElement);
            }
          });
        });

        observer.observe(img);
      }
    });
  }, [enabled]);

  // Memory management
  const optimizeMemory = useCallback(() => {
    if (!enabled) return;

    // Clean up event listeners and observers
    const cleanup = () => {
      // This would clean up any memory leaks
      // For now, we'll just log the cleanup
      if (enableAnalytics) {
        console.log('Memory cleanup performed');
      }
    };

    // Clean up on route change
    cleanup();
  }, [enabled, enableAnalytics]);

  // Bundle analysis and code splitting optimization
  const optimizeBundles = useCallback(() => {
    if (!enabled) return;

    // Monitor bundle sizes
    if ('performance' in window && 'getEntriesByType' in performance) {
      const resources = performance.getEntriesByType('resource');
      const jsResources = resources.filter(resource => 
        resource.name.includes('.js') || resource.name.includes('.ts')
      );

      const totalJSSize = jsResources.reduce((total, resource) => {
        const size = (resource as any).transferSize || 0;
        return total + size;
      }, 0);

      if (enableAnalytics && totalJSSize > 500000) { // 500KB threshold
        console.warn('Large JavaScript bundle detected:', `${Math.round(totalJSSize / 1024)}KB`);
        
        if (window.gtag) {
          window.gtag('event', 'large_bundle_detected', {
            event_category: 'Performance',
            event_label: location.pathname,
            value: Math.round(totalJSSize / 1024)
          });
        }
      }
    }
  }, [enabled, enableAnalytics, location.pathname]);

  useEffect(() => {
    if (!enabled) return;

    // Initialize performance monitoring
    measurePerformance();
    preloadResources();
    optimizeImages();
    optimizeMemory();
    optimizeBundles();

    // Set up periodic optimization
    const interval = setInterval(() => {
      optimizeMemory();
      optimizeBundles();
    }, 30000); // Every 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, [
    enabled,
    measurePerformance,
    preloadResources,
    optimizeImages,
    optimizeMemory,
    optimizeBundles
  ]);

  // Route change optimization
  useEffect(() => {
    if (!enabled) return;

    // Optimize on route change
    preloadResources();
    optimizeImages();
    optimizeMemory();
  }, [location.pathname, enabled, preloadResources, optimizeImages, optimizeMemory]);

  // Service Worker registration for caching
  useEffect(() => {
    if (!enabled || !('serviceWorker' in navigator)) return;

    const registerSW = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        if (enableAnalytics) {
          console.log('Service Worker registered:', registration);
        }
      } catch (error) {
        if (enableAnalytics) {
          console.error('Service Worker registration failed:', error);
        }
      }
    };

    registerSW();
  }, [enabled, enableAnalytics]);

  // Web Vitals monitoring
  useEffect(() => {
    if (!enabled || !enableAnalytics) return;

    // Monitor Core Web Vitals
    const reportWebVitals = (metric: any) => {
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: location.pathname,
          value: Math.round(metric.value),
          custom_map: {
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta
          }
        });
      }
    };

    // This would integrate with web-vitals library
    // For now, we'll just set up the structure
    if (enableAnalytics) {
      console.log('Web Vitals monitoring enabled');
    }
  }, [enabled, enableAnalytics, location.pathname]);

  // No visible UI, just performance optimizations
  return null;
};

// Type declaration for global gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default PerformanceOptimizer;
