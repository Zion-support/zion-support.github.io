'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children?: ReactNode;
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
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img) => {
          const imageElement = img as HTMLImageElement;
          if (imageElement.dataset.src) {
            imageElement.src = imageElement.dataset.src;
            imageElement.removeAttribute('data-src');
          }
        });
      };

      // Run optimization after DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeImages);
      } else {
        optimizeImages();
      }

      return () => {
        document.removeEventListener('DOMContentLoaded', optimizeImages);
      };
    }
  }, [enableImageOptimization]);

  // Lazy loading
  useEffect(() => {
    if (enableLazyLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.lazy) {
                target.classList.add('loaded');
                observer.unobserve(target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach((el) => observer.observe(el));

      return () => {
        observer.disconnect();
      };
    }
  }, [enableLazyLoading]);

  // Preloading critical resources
  useEffect(() => {
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/styles/critical.css';
        criticalCSS.as = 'style';
        criticalCSS.onload = () => {
          criticalCSS.rel = 'stylesheet';
        };
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = '/fonts/inter-var.woff2';
        fontPreload.as = 'font';
        fontPreload.type = 'font/woff2';
        fontPreload.crossOrigin = 'anonymous';
        document.head.appendChild(fontPreload);
      };

      preloadCriticalResources();
    }
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting) {
      // Preload next route on hover
      const preloadRoute = (href: string) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      };

      const handleLinkHover = (event: Event) => {
        const target = event.target as HTMLAnchorElement;
        if (target.tagName === 'A' && target.href) {
          preloadRoute(target.href);
        }
      };

      document.addEventListener('mouseover', handleLinkHover);
      return () => {
        document.removeEventListener('mouseover', handleLinkHover);
      };
    }
  }, [enableCodeSplitting]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
          };

          // Log performance metrics in development
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Metrics:', metrics);
          }

          // Send to analytics if available
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'performance_metrics', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(metrics.loadComplete)
            });
          }
        }
      };

      // Measure performance after page load
      window.addEventListener('load', measurePerformance);
      return () => {
        window.removeEventListener('load', measurePerformance);
      };
    }
  }, []);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;