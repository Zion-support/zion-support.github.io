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
    if (typeof window === 'undefined') return;

    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        };

        trackEvent('performance_metrics', {
          category: 'Performance',
          action: 'Page Load',
          value: Math.round(metrics.loadTime),
          custom_parameters: metrics
        });
      }
    };

    // Track performance when page loads
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
    }

    return () => {
      window.removeEventListener('load', trackPerformance);
    };
  }, [trackEvent]);

  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
      });
    };

    // Use Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
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
      lazyImages.forEach((img) => imageObserver.observe(img));

      return () => {
        imageObserver.disconnect();
      };
    } else {
      // Fallback for browsers without Intersection Observer
      optimizeImages();
    }
  }, [enableImageOptimization]);

  // Preload critical resources
  useEffect(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.querySelector('link[rel="preload"][as="style"]');
      if (criticalCSS) {
        criticalCSS.setAttribute('rel', 'stylesheet');
      }

      // Preload critical fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach((link) => {
        link.setAttribute('rel', 'stylesheet');
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', preloadCriticalResources);
    } else {
      preloadCriticalResources();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', preloadCriticalResources);
    };
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (!enableCodeSplitting || typeof window === 'undefined') return;

    // Prefetch next likely routes
    const prefetchRoutes = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[href="${href}"]`)) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      });
    };

    // Delay prefetching to not interfere with critical resources
    const timeoutId = setTimeout(prefetchRoutes, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [enableCodeSplitting]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default EnhancedPerformanceOptimizer;