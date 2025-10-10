'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';
import { useAnalytics } from './EnhancedAnalytics';
interface PerformanceOptimizerProps {
  children: ReactNode;
import React, { useEffect } from 'react';
interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}
const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const { trackEvent } = useAnalytics();
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track page load performance
      const trackPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          trackEvent('performance', 'page_load_time', loadTime);
        }
      };
      // Track Core Web Vitals
      const trackWebVitals = () => {
        if ('web-vitals' in window) {
          import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(trackEvent);
            getFID(trackEvent);
            getFCP(trackEvent);
            getLCP(trackEvent);
            getTTFB(trackEvent);
          });
        }
      };
      // Track resource loading performance
      const trackResourcePerformance = () => {
        const resources = performance.getEntriesByType('resource');
        resources.forEach((resource) => {
          if (resource.duration > 1000) { // Track slow resources
            trackEvent('performance', 'slow_resource', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize
            });
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Image optimization
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img) => {
          const image = img as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
          }
        });
      };
      // Run performance tracking
      if (document.readyState === 'complete') {
        trackPerformance();
        trackWebVitals();
        trackResourcePerformance();
      } else {
        window.addEventListener('load', () => {
          trackPerformance();
          trackWebVitals();
          trackResourcePerformance();
        });
      }
    }
  }, [trackEvent]);
  // Lazy loading optimization
  useEffect(() => {
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });
      // Observe all lazy images
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => imageObserver.observe(img));
      return () => imageObserver.disconnect();
    }
  }, [enableLazyLoading]);
  // Preload critical resources
  useEffect(() => {
    if (enablePreloading && typeof window !== 'undefined') {
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
      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    }
  }, [enablePreloading]);
  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting && typeof window !== 'undefined') {
      // Preload next likely routes
      const preloadRoute = (route: string) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      };
      // Preload common routes
      const commonRoutes = ['/about', '/services', '/contact'];
      commonRoutes.forEach(preloadRoute);
    }
  }, [enableCodeSplitting]);
  // Memory optimization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clean up unused event listeners
      const cleanup = () => {
        // Remove unused event listeners
        window.removeEventListener('scroll', () => {});
        window.removeEventListener('resize', () => {});
      };
      // Run cleanup on page unload
      window.addEventListener('beforeunload', cleanup);
      return () => {
        window.removeEventListener('beforeunload', cleanup);
        cleanup();
      };
    }
  }, []);
  // Bundle size optimization
  const optimizeBundle = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Remove unused CSS
      const unusedCSS = document.querySelectorAll('link[rel="stylesheet"]');
      unusedCSS.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`[href="${href}"]`)) {
          link.remove();
        }
      });
      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (img.width > 800) {
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
        }
      });
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(optimizeBundle, 2000);
    return () => clearTimeout(timer);
  }, [optimizeBundle]);
  return <>{children}</>;
};
export default EnhancedPerformanceOptimizer;
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
      } else {
        // Fallback for older browsers
        optimizeImages();
      }
    }
    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/fonts/inter.woff2',
          '/images/hero-bg.jpg',
          '/images/logo.svg'
        ];
        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          if (resource.endsWith('.woff2')) {
            link.as = 'font';
            link.type = 'font/woff2';
            link.crossOrigin = 'anonymous';
          } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
            link.as = 'image';
          }
          document.head.appendChild(link);
        });
      };
      preloadCriticalResources();
    }
    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        };
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics);
        }
        // Send metrics to analytics (if configured)
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'performance_metrics', {
            event_category: 'performance',
            custom_map: {
              'dom_content_loaded': Math.round(metrics.domContentLoaded),
              'load_complete': Math.round(metrics.loadComplete),
              'first_paint': Math.round(metrics.firstPaint),
              'first_contentful_paint': Math.round(metrics.firstContentfulPaint)
            }
          });
        }
      }
    };
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);
  return null;
};
export default PerformanceOptimizer;
cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
