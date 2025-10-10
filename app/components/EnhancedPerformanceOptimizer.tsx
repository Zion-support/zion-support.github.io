'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }
  }, [enableImageOptimization]);

  // Lazy loading for components
  useEffect(() => {
    if (enableLazyLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('loaded');
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.1 }
      );

      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [enableLazyLoading]);

  // Preload critical resources
  useEffect(() => {
    if (enablePreloading) {
      const preloadLinks = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
        { href: '/css/critical.css', as: 'style' }
      ];

      preloadLinks.forEach(link => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.href = link.href;
        linkElement.as = link.as;
        if (link.type) {
          linkElement.type = link.type;
        }
        document.head.appendChild(linkElement);
      });
    }
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting) {
      // Prefetch next route
      const prefetchNextRoute = useCallback(() => {
        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach(link => {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#')) {
            const linkElement = document.createElement('link');
            linkElement.rel = 'prefetch';
            linkElement.href = href;
            document.head.appendChild(linkElement);
          }
        });
      }, []);

      // Debounced prefetch
      let timeoutId: NodeJS.Timeout;
      const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(prefetchNextRoute, 100);
      };

      document.addEventListener('mouseover', handleMouseEnter);
      return () => {
        document.removeEventListener('mouseover', handleMouseEnter);
        clearTimeout(timeoutId);
      };
    }
  }, [enableCodeSplitting]);

  return <>{children}</>;
};

export default PerformanceOptimizer;