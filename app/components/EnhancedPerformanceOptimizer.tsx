'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface PerformanceOptimizerProps {
  children: ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const { trackEvent } = useAnalytics();

  // Performance monitoring
  useEffect(() => {
    const trackPerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        trackEvent('performance', 'page_load_time', { loadTime });
      }
    };

    const trackWebVitals = () => {
      // Track Core Web Vitals
      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        trackEvent('performance', 'web_vitals', {});
      }
    };

    const trackResourcePerformance = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        trackEvent('performance', 'slow_resources', { 
          count: slowResources.length,
          resources: slowResources.map(r => ({ name: r.name, duration: r.duration }))
        });
      }
    };

    // Image optimization
    const optimizeImages = () => {
      if (!enableImageOptimization) return;
      
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
      });
    };

    // Lazy loading implementation
    const setupLazyLoading = () => {
      if (!enableLazyLoading) return;

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      if (!enablePreloading) return;

      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/styles/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFont = document.createElement('link');
      criticalFont.rel = 'preload';
      criticalFont.href = '/fonts/inter-var.woff2';
      criticalFont.as = 'font';
      criticalFont.type = 'font/woff2';
      criticalFont.crossOrigin = 'anonymous';
      document.head.appendChild(criticalFont);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.svg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Preload routes
    const preloadRoute = (route: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    };

    // Preload common routes
    const commonRoutes = ['/about', '/services', '/contact'];
    if (enablePreloading) {
      commonRoutes.forEach(preloadRoute);
    }

    const cleanup = () => {
      // Cleanup observers and listeners
      const observers = document.querySelectorAll('[data-observer]');
      observers.forEach(el => {
        // Remove any custom observers
        el.removeAttribute('data-observer');
      });
    };

    // Run optimizations
    optimizeImages();
    setupLazyLoading();
    preloadCriticalResources();

    // Track performance
    trackPerformance();
    trackWebVitals();
    trackResourcePerformance();

    return cleanup;
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, trackEvent]);

  // Bundle optimization
  const optimizeBundle = useCallback(() => {
    if (!enableCodeSplitting) return;

    // Remove unused CSS
    const unusedCSS = document.querySelectorAll('link[rel="stylesheet"]');
    unusedCSS.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !document.querySelector(`[href="${href}"]`)) {
        link.remove();
      }
    });

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const image = img as HTMLImageElement;
      if (image.naturalWidth > 0 && image.naturalHeight > 0) {
        // Add loading optimization
        image.loading = 'lazy';
      }
    });
  }, [enableCodeSplitting]);

  useEffect(() => {
    const timer = setTimeout(optimizeBundle, 2000);
    return () => clearTimeout(timer);
  }, [optimizeBundle]);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;