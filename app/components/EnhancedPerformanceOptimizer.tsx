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
  enableCodeSplitting = true,
}) => {
  const { trackEvent } = useAnalytics();

  // Image optimization
  useEffect(() => {
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }
  }, [enableImageOptimization]);

  // Lazy loading for images
  useEffect(() => {
    if (enableLazyLoading) {
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

      return () => imageObserver.disconnect();
    }
  }, [enableLazyLoading]);

  // Preload critical resources
  useEffect(() => {
    if (enablePreloading) {
      const preloadLinks = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/css/critical.css', as: 'style' }
      ];

      preloadLinks.forEach((link) => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.href = link.href;
        linkElement.as = link.as;
        if (link.type) linkElement.type = link.type;
        if (link.crossorigin) linkElement.crossOrigin = link.crossorigin;
        document.head.appendChild(linkElement);
      });
    }
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting) {
      // Preload next route
      const preloadNextRoute = useCallback(() => {
        const nextLink = document.querySelector('a[href]') as HTMLAnchorElement;
        if (nextLink) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = nextLink.href;
          document.head.appendChild(link);
        }
      }, []);

      // Track performance metrics
      const trackPerformance = useCallback(() => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          
          trackEvent('performance_metrics', {
            load_time: loadTime,
            dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
            first_contentful_paint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
          });
        }
      }, [trackEvent]);

      // Run optimizations
      preloadNextRoute();
      trackPerformance();
    }
  }, [enableCodeSplitting, trackEvent]);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;