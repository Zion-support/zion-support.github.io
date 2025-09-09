import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  componentCount: number;
  errorCount: number;
}

export const usePerformanceMonitoring = () => {
  const trackMetric = useCallback((name: string, value: number) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${name}-start`);
      performance.measure(name, `${name}-start`);
    }
  }, []);

  const trackBundleLoad = useCallback((bundleName: string, loadTime: number) => {
    console.log(`Bundle ${bundleName} loaded in ${loadTime}ms`);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'bundle_load', {
        bundle_name: bundleName,
        load_time: loadTime,
      });
    }
  }, []);

  const trackError = useCallback((error: Error, componentName?: string) => {
    console.error(`Error in ${componentName || 'unknown component'}:`, error);
    
    // Send to error tracking service
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, {
        tags: {
          component: componentName,
        },
      });
    }
  }, []);

  const measureBundleSize = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Estimate bundle size from loaded resources
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const totalSize = resources
        .filter(resource => resource.name.includes('.js') || resource.name.includes('.css'))
        .reduce((total, resource) => total + (resource.transferSize || 0), 0);

      return {
        loadTime,
        bundleSize: totalSize,
        componentCount: document.querySelectorAll('[data-component]').length,
        errorCount: 0, // This would be tracked separately
      };
    }
    return null;
  }, []);

  useEffect(() => {
    // Track initial page load
    const handleLoad = () => {
      const metrics = measureBundleSize();
      if (metrics) {
        console.log('Performance metrics:', metrics);
      }
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [measureBundleSize]);

  return {
    trackMetric,
    trackBundleLoad,
    trackError,
    measureBundleSize,
  };
};